import { useState } from 'react'
import { motion } from 'framer-motion'

import { z } from 'zod'
import { FormDataSchema } from '../../../validation/StepsSchema'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm, SubmitHandler } from 'react-hook-form'
import Map from "../../frontOffice/MapComp/MapComp";

type Inputs = z.infer<typeof FormDataSchema>

const steps = [
    {
        id: 'Step 1',
        name: 'Personal Information',
        fields: ['gender', 'birthDay', 'cin', 'phoneNumber'],
    },
    {
        id: 'Step 2',
        name: 'Address',
        fields: ['city', 'address'],
    },
    {
        id: 'Step 3',
        name: 'Professional Information',
        fields: ['specialization', 'hourlyRate', 'bio', 'experiences', 'education'],
    },
    { id: 'Step 4', name: 'Complete' },
];

const genderOptions = ["Male", "Female"];


export default function MultiStepForm() {
    const [previousStep, setPreviousStep] = useState(0);
    const [currentStep, setCurrentStep] = useState(0);
    const [coordinates, setCoordinates] = useState({ lng: 0, lat: 0 });

    const delta = currentStep - previousStep;

    const {
        register,
        handleSubmit,
        reset,
        trigger,
        formState: { errors },
    } = useForm<Inputs>({
        mode: 'onBlur',
        resolver: zodResolver(FormDataSchema),
    });

    function transfomHourlyRate(value: string) {
        return parseFloat(value);
    }

    const processForm: SubmitHandler<Inputs> = async (data) => {
        console.log("begotten data:", data);
        // Convert hourlyRate to number
        data.hourlyRate = transfomHourlyRate(data.hourlyRate);

        // Split Bio, Experiences, and Education strings into arrays
        data.bio = data.bio.split(',').map((item) => item.trim());
        data.experiences = data.experiences.split(',').map((item) => item.trim());
        data.education = data.education.split(',').map((item) => item.trim());

        console.log('Transformed data:', data);

        // Trigger validation for all fields before submitting
        const isValid = await trigger();

        if (isValid) {
            // If all fields are valid, proceed with form submission
            console.log('Form submission:', data);
            reset();
        } else {
            console.log('Validation errors:', errors);
        }
    };

    const onInvalid = (errors) => console.error(errors);

    const next = async () => {
        const fields = steps[currentStep].fields;
        const output = await trigger(fields as (keyof Inputs)[], { shouldFocus: true });
        console.log(`previousStep: ${previousStep} currentStep: ${currentStep}, output: ${output}, errors: ${errors}, steps: ${steps.length}`)

        if (!output) return;

        if (currentStep < steps.length - 1) {
            if (currentStep === steps.length - 2) {
                console.log('Submitting form');
                await handleSubmit(processForm, onInvalid)();
            }
            setPreviousStep(currentStep);
            setCurrentStep((step) => step + 1);
        }
    };


    const prev = () => {
        if (currentStep > 0) {
            setPreviousStep(currentStep);
            setCurrentStep((step) => step - 1);
        }
    };

    return (
        <section className='absolute inset-0 flex flex-col justify-between p-24 mb-14'>
            {/* steps */}
            <nav aria-label='Progress'>
                <ol role='list' className='space-y-4 md:flex md:space-x-8 md:space-y-0'>
                    {steps.map((step, index) => (
                        <li key={step.name} className='md:flex-1'>
                            {currentStep > index ? (
                                <div className='flex flex-col w-full py-2 pl-4 transition-colors border-l-4 group border-sky-600 md:border-l-0 md:border-t-4 md:pb-0 md:pl-0 md:pt-4'>
                                    <span className='text-sm font-medium transition-colors text-sky-600 '>
                                        {step.id}
                                    </span>
                                    <span className='text-sm font-medium'>{step.name}</span>
                                </div>
                            ) : currentStep === index ? (
                                <div
                                    className='flex flex-col w-full py-2 pl-4 border-l-4 border-sky-600 md:border-l-0 md:border-t-4 md:pb-0 md:pl-0 md:pt-4'
                                    aria-current='step'
                                >
                                    <span className='text-sm font-medium text-sky-600'>
                                        {step.id}
                                    </span>
                                    <span className='text-sm font-medium'>{step.name}</span>
                                </div>
                            ) : (
                                <div className='flex flex-col w-full py-2 pl-4 transition-colors border-l-4 border-gray-200 group md:border-l-0 md:border-t-4 md:pb-0 md:pl-0 md:pt-4'>
                                    <span className='text-sm font-medium text-gray-500 transition-colors'>
                                        {step.id}
                                    </span>
                                    <span className='text-sm font-medium'>{step.name}</span>
                                </div>
                            )}
                        </li>
                    ))}
                </ol>
            </nav>

            {/* Form */}
            <form className='py-12 mt-12' onSubmit={(e) => { handleSubmit(processForm, onInvalid)() }}>
                {currentStep === 0 && (
                    <motion.div
                        initial={{ x: delta >= 0 ? '50%' : '-50%', opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                    >
                        <h2 className='text-base font-semibold leading-7 text-gray-900'>
                            Personal Information
                        </h2>
                        <p className='mt-1 text-sm leading-6 text-gray-600'>
                            Provide your personal details.
                        </p>
                        <div className='grid grid-cols-1 mt-10 gap-x-6 gap-y-8 sm:grid-cols-6'>
                            <div className='sm:col-span-3'>
                                <label
                                    htmlFor='gender'
                                    className='block text-sm font-medium leading-6 text-gray-900'
                                >
                                    Gender
                                </label>
                                <div className='mt-2'>
                                    <select
                                        id='gender'
                                        {...register('gender')}
                                        autoComplete='gender'
                                        className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-600 sm:text-sm sm:leading-6'
                                    >
                                        {genderOptions.map((option, index) => (
                                            <option key={index} value={option}>
                                                {option}
                                            </option>
                                        ))}
                                    </select>
                                    {errors.gender?.message && (
                                        <p className='mt-2 text-sm text-red-400'>
                                            {errors.gender.message}
                                        </p>
                                    )}
                                </div>
                            </div>
                            <div className='sm:col-span-3'>
                                <label
                                    htmlFor='birthDay'
                                    className='block text-sm font-medium leading-6 text-gray-900'
                                >
                                    Day of Birth
                                </label>
                                <div className='mt-2'>
                                    <input
                                        type='date'
                                        id='birthDay'
                                        {...register('birthDay')}
                                        autoComplete='bday'
                                        className='block p-3 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-600 sm:text-sm sm:leading-6'
                                    />
                                    {errors.birthDay?.message && (
                                        <p className='mt-2 text-sm text-red-400'>
                                            {errors.birthDay.message}
                                        </p>
                                    )}
                                </div>
                            </div>
                            <div className='sm:col-span-3'>
                                <label
                                    htmlFor='cin'
                                    className='block text-sm font-medium leading-6 text-gray-900'
                                >
                                    CIN
                                </label>
                                <div className='mt-2'>
                                    <input
                                        type='text'
                                        id='cin'
                                        {...register('cin')}
                                        autoComplete='cin'
                                        className='block w-full p-3 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-600 sm:text-sm sm:leading-6'
                                    />
                                    {errors.cin?.message && (
                                        <p className='mt-2 text-sm text-red-400'>
                                            {errors.cin.message}
                                        </p>
                                    )}
                                </div>
                            </div>
                            <div className='sm:col-span-3'>
                                <label
                                    htmlFor='phoneNumber'
                                    className='block text-sm font-medium leading-6 text-gray-900'
                                >
                                    Phone Number
                                </label>
                                <div className='mt-2'>
                                    <input
                                        id='phoneNumber'
                                        type='tel'
                                        {...register('phoneNumber')}
                                        autoComplete='tel'
                                        className='block p-3 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-600 sm:text-sm sm:leading-6'
                                    />
                                    {errors.phoneNumber?.message && (
                                        <p className='mt-2 text-sm text-red-400'>
                                            {errors.phoneNumber.message}
                                        </p>
                                    )}
                                </div>
                            </div>
                        </div>
                    </motion.div>
                )}

                {currentStep === 1 && (
                    <motion.div
                        initial={{ x: delta >= 0 ? '50%' : '-50%', opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                    >
                        <h2 className='text-base font-semibold leading-7 text-gray-900'>
                            Address
                        </h2>
                        <p className='mt-1 text-sm leading-6 text-gray-600'>
                            Address where you can receive mail.
                        </p>

                        <div className='grid grid-cols-1 mt-10 gap-x-6 gap-y-8 sm:grid-cols-6'>
                            <div className='sm:col-span-3'>
                                <label
                                    htmlFor='city'
                                    className='block text-sm font-medium leading-6 text-gray-900'
                                >
                                    City
                                </label>
                                <div className='mt-2'>
                                    <input
                                        type='text'
                                        id='city'
                                        {...register('city')}
                                        autoComplete='address-level2'
                                        className='block p-3 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-600 sm:text-sm sm:leading-6'
                                    />
                                    {errors.city?.message && (
                                        <p className='mt-2 text-sm text-red-400'>
                                            {errors.city.message}
                                        </p>
                                    )}
                                </div>
                            </div>

                            <div className='sm:col-span-3'>
                                <label
                                    htmlFor='address'
                                    className='block text-sm font-medium leading-6 text-gray-900'
                                >
                                    Address
                                </label>
                                <div className='mt-2'>
                                    <input
                                        type='text'
                                        id='address'
                                        {...register('address')}
                                        autoComplete='street-address'
                                        className='block p-3 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-600 sm:text-sm sm:leading-6'
                                    />
                                    {errors.address?.message && (
                                        <p className='mt-2 text-sm text-red-400'>
                                            {errors.address.message}
                                        </p>
                                    )}
                                </div>
                            </div>
                            <div className='mx-auto sm:col-span-3'>
                                <label
                                    htmlFor='map'
                                    className='block text-sm font-medium leading-6 text-gray-900'
                                >
                                    Map
                                </label>
                                <div className='mt-2'>
                                    <Map onCoordinatesChange={setCoordinates} />
                                    {errors.city?.message && (
                                        <p className='mt-2 text-sm text-red-400'>
                                            {errors.city.message}
                                        </p>
                                    )}
                                </div>
                            </div>
                        </div>
                    </motion.div>
                )}

                {currentStep === 2 && (
                    <motion.div
                        initial={{ x: delta >= 0 ? '50%' : '-50%', opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                    >
                        <h2 className='text-base font-semibold leading-7 text-gray-900'>
                            Professional Information
                        </h2>
                        <p className='mt-1 text-sm leading-6 text-gray-600'>
                            Provide your professional details.
                        </p>

                        <div className='grid grid-cols-1 mt-10 gap-x-6 gap-y-8 sm:grid-cols-6'>
                            <div className='sm:col-span-3'>
                                <label
                                    htmlFor='specialization'
                                    className='block text-sm font-medium leading-6 text-gray-900'
                                >
                                    Specialization
                                </label>
                                <div className='mt-2'>
                                    <input
                                        type='text'
                                        id='specialization'
                                        {...register('specialization')}
                                        autoComplete='off'
                                        className='block p-3 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-600 sm:text-sm sm:leading-6'
                                    />
                                    {errors.specialization?.message && (
                                        <p className='mt-2 text-sm text-red-400'>
                                            {errors.specialization.message}
                                        </p>
                                    )}
                                </div>
                            </div>
                            <div className='sm:col-span-3'>
                                <label
                                    htmlFor='hourlyRate'
                                    className='block text-sm font-medium leading-6 text-gray-900'
                                >
                                    Hourly Rate
                                </label>
                                <div className='mt-2'>
                                    <input
                                        type='number'
                                        id='hourlyRate'
                                        {...register('hourlyRate')}
                                        autoComplete='off'
                                        className='block p-3 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-600 sm:text-sm sm:leading-6'
                                    />
                                    {errors.hourlyRate?.message && (
                                        <p className='mt-2 text-sm text-red-400'>
                                            {errors.hourlyRate.message}
                                        </p>
                                    )}
                                </div>
                            </div>
                            <div className='sm:col-span-6'>
                                <label
                                    htmlFor='bio'
                                    className='block text-sm font-medium leading-6 text-gray-900'
                                >
                                    Bio
                                </label>
                                <div className='mt-2'>
                                    <textarea
                                        id='bio'
                                        {...register('bio')}
                                        className='block p-3 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-600 sm:text-sm sm:leading-6 resize-none'
                                    />
                                    {errors.bio?.message && (
                                        <p className='mt-2 text-sm text-red-400'>
                                            {errors.bio.message}
                                        </p>
                                    )}
                                </div>
                            </div>
                            <div className='sm:col-span-6'>
                                <label
                                    htmlFor='experiences'
                                    className='block text-sm font-medium leading-6 text-gray-900'
                                >
                                    Experiences
                                </label>
                                <div className='mt-2'>
                                    <input
                                        type='text'
                                        id='experiences'
                                        {...register('experiences')}
                                        autoComplete='off'
                                        className='block p-3 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-600 sm:text-sm sm:leading-6'
                                    />
                                    {errors.experiences?.message && (
                                        <p className='mt-2 text-sm text-red-400'>
                                            {errors.experiences.message}
                                        </p>
                                    )}
                                </div>
                            </div>
                            <div className='sm:col-span-6'>
                                <label
                                    htmlFor='education'
                                    className='block text-sm font-medium leading-6 text-gray-900'
                                >
                                    Education
                                </label>
                                <div className='mt-2'>
                                    <input
                                        type='text'
                                        id='education'
                                        {...register('education')}
                                        autoComplete='off'
                                        className='block p-3 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-600 sm:text-sm sm:leading-6'
                                    />
                                    {errors.education?.message && (
                                        <p className='mt-2 text-sm text-red-400'>
                                            {errors.education.message}
                                        </p>
                                    )}
                                </div>
                            </div>
                        </div>
                    </motion.div>
                )}

                {currentStep === 3 && (
                    <motion.div
                        initial={{ x: delta >= 0 ? '50%' : '-50%', opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                    >
                        <h2 className='text-base font-semibold leading-7 text-gray-900'>
                            Complete
                        </h2>
                        <p className='mt-1 text-sm leading-6 text-gray-600'>
                            Thank you for your submission.
                        </p>
                    </motion.div>
                )}
            </form>

            {/* Navigation */}
            <div className='pt-5 mt-8'>
                <div className='flex justify-between'>
                    <button
                        type='button'
                        onClick={prev}
                        disabled={currentStep === 0}
                        className='px-2 py-1 text-sm font-semibold bg-white rounded shadow-sm text-sky-900 ring-1 ring-inset ring-sky-300 hover:bg-sky-50 disabled:cursor-not-allowed disabled:opacity-50'
                    >
                        <svg
                            xmlns='http://www.w3.org/2000/svg'
                            fill='none'
                            viewBox='0 0 24 24'
                            strokeWidth='1.5'
                            stroke='currentColor'
                            className='w-6 h-6'
                        >
                            <path
                                strokeLinecap='round'
                                strokeLinejoin='round'
                                d='M15.75 19.5L8.25 12l7.5-7.5'
                            />
                        </svg>
                    </button>
                    <button
                        type='button'
                        onClick={next}
                        disabled={currentStep === steps.length - 1}
                        className='px-2 py-1 text-sm font-semibold bg-white rounded shadow-sm text-sky-900 ring-1 ring-inset ring-sky-300 hover:bg-sky-50 disabled:cursor-not-allowed disabled:opacity-50'
                    >
                        <svg
                            xmlns='http://www.w3.org/2000/svg'
                            fill='none'
                            viewBox='0 0 24 24'
                            strokeWidth='1.5'
                            stroke='currentColor'
                            className='w-6 h-6'
                        >
                            <path
                                strokeLinecap='round'
                                strokeLinejoin='round'
                                d='M8.25 5.25l7.5 7.5-7.5 7.5'
                            />
                        </svg>
                    </button>
                </div>
            </div>
        </section>
    );
}
import { useForm, SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { ProfessionalSignupType, signupSchema } from '../../../validation/ProfessionalSignupSchema';
import { FormInput } from '../../form/index';
import { Link } from 'react-router-dom';

function ProfessionalRegisterForm() {

    const {
        register,
        handleSubmit,
        getFieldState,
        trigger,
        formState: { errors }
    } = useForm<ProfessionalSignupType>({
        mode: 'onBlur',
        resolver: zodResolver(signupSchema)
    });
    const submitForm: SubmitHandler<ProfessionalSignupType> = (data) => {
        console.log(data)
    };

    const emailOnBlurHandler = async (e: React.FocusEvent<HTMLInputElement>) => {
        await trigger("email");
        const value = e.target.value;
        const { isDirty, invalid } = getFieldState('email');
        if (isDirty && !invalid) {
            console.log("Email is valid")
        }
    };

    return (
        <div className="mx-auto max-w-[500px] bg-white border border-gray-200 shadow-sm mt-7 rounded-xl ">
            <div className="p-4 sm:p-7">
                <div className="text-center">
                    <h1 className="block text-2xl font-bold text-gray-800">Sign up</h1>
                    <p className="mt-2 text-sm text-gray-600">
                        Already have an account?{' '}
                        <Link
                            to="/login/applicant"
                            className="font-medium text-[#20B486] decoration-2 hover:underline"
                        >
                            Sign in here
                        </Link>
                    </p>
                </div>

                <div className="mt-5">
                    <form onSubmit={handleSubmit(submitForm)} className="grid gap-y-4">
                        <FormInput
                            label="First Name"
                            name="firstname"
                            register={register}
                            placeholder="John"
                            error={errors.firstname?.message}
                        />
                        <FormInput
                            label="Last Name"
                            name="lastname"
                            register={register}
                            placeholder="Doe"
                            error={errors.lastname?.message}
                        />
                        <FormInput
                            label="Email"
                            type="email"
                            name="email"
                            register={register}
                            placeholder="email"
                            error={errors.email?.message}
                            onBlur={emailOnBlurHandler}
                        />
                        <FormInput
                            label="Password"
                            name="password"
                            type="password"
                            register={register}
                            placeholder="Password"
                            error={errors.password?.message}
                        />
                        <FormInput
                            label="Confirm Password"
                            name="confirmPassword"
                            type="password"
                            register={register}
                            placeholder="Confirm Password"
                            error={errors.confirmPassword?.message}
                        />

                        <div className="flex items-center">
                            <div className="flex">
                                <input
                                    id="remember-me"
                                    name="remember-me"
                                    type="checkbox"
                                    className="shrink-0 mt-0.5 border-gray-200 rounded text-blue-600 focus:ring-blue-500"
                                />
                            </div>
                            <div className="ms-3">
                                <label htmlFor="remember-me" className="text-sm">
                                    I accept the{' '}
                                    <a
                                        href="#"
                                        className="font-medium text-blue-600 decoration-2 hover:underline"
                                    >
                                        Terms and Conditions
                                    </a>
                                </label>
                            </div>
                        </div>

                        <button
                            type="submit"
                            className="w-full px-4 py-3 text-sm font-semibold text-white bg-[#20B486] border border-transparent rounded-lg mt-4 hover:bg-[#318665] disabled:opacity-50 disabled:pointer-events-none"
                        >
                            Sign up
                        </button>
                    </form>
                </div>
            </div>
        </div>

    )
}

export default ProfessionalRegisterForm


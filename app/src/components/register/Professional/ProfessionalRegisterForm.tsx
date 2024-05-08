import { useForm, SubmitHandler } from 'react-hook-form';
import { z } from 'zod';

const signupSchema = z.object({
    firstname: z.string().min(3).max(255),
    lastname: z.string().min(3).max(255),
    specialization: z.string().min(3).max(255),
    city: z.string().min(3).max(255),
    email: z.string().email(),
    password: z.string().min(6).max(255),
    confirmPassword: z.string().min(6).max(255)
});

type TFormInput = {
    firstname: string,
    lastname: string,
    specialization: string,
    city: string,
    email: string,
    password: string,
    confirmPassword: string
}


function ProfessionalRegisterForm() {

    const { register, handleSubmit } = useForm<TFormInput>();
    const submitForm: SubmitHandler<TFormInput> = (data) => {
        console.log(data)
    };

    return (
        <div>
            <h1>Professional Register Form</h1>
            <form onSubmit={handleSubmit(submitForm)}>
                <label htmlFor="firstname" className="mr-2">First Name</label>
                <input type="text" placeholder="First Name" {...register("firstname")} /><br />
                <label htmlFor="lastname" className="mr-2">Last Name</label>
                <input type="text" placeholder="Last Name" {...register("lastname")} /><br />
                <label htmlFor="specialization" className="mr-2">Specialization</label>
                <input type="text" placeholder="Specialization" {...register("specialization")} /><br />
                <label htmlFor="city" className="mr-2">City</label>
                <input type="text" placeholder="City" {...register("city")} /><br />
                <label htmlFor="email" className="mr-2">Email</label>
                <input type="email" placeholder="Email" {...register("email")} /><br />
                <label htmlFor="password" className="mr-2">Password</label>
                <input type="password" placeholder="Password" {...register("password")} />
                <label htmlFor="confirmPassword" className="mr-2">Confirm Password</label>
                <input type="password" placeholder="Confirm Password" {...register("confirmPassword")} /><br />
                <button type="submit">Register</button>
            </form>
        </div>
    )
}

export default ProfessionalRegisterForm
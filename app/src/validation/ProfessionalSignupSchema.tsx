import { z } from 'zod';

const signupSchema = z.object({
    firstname: z.string().min(3, { message: "First Name Required" }).max(255),
    lastname: z.string().min(3, { message: "Last Name Required" }).max(255),
    specialization: z.string().min(3, { message: "Specialization Required" }).max(255),
    city: z.string().min(3, { message: "City Required" }).max(255),
    email: z.string().email().min(6, { message: "Email Required" }).max(255),
    password: z.string().min(6, { message: "Password Required" }).max(255),
    confirmPassword: z.string().min(6, { message: "Please confirm your password" }).max(255).refine(input => input.password === input.confirmPassword, { message: "Passwords do not match", path: ["confirmPassword"] })
});

type ProfessionalSignupType = z.infer<typeof signupSchema>;

export { signupSchema, type ProfessionalSignupType }
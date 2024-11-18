import { z } from 'zod';

const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{6,}$/;

const signupSchema = z.object({
    firstname: z.string().min(3, { message: "First Name Required" }).max(255),
    lastname: z.string().min(3, { message: "Last Name Required" }).max(255),
    email: z.string().email().min(6, { message: "Email Required" }).max(255),
    password: z.string().min(6, { message: "Password must be at least 6 characters long" }).max(255)
        .regex(passwordRegex, { message: "Password must contain uppercase, lowercase and numbers" }),
    confirmPassword: z.string().min(6, { message: "Please confirm your password" }).max(255).refine(input => input.password === input.confirmPassword, { message: "Passwords do not match", path: ["confirmPassword"] })
});

type ClientSignupType = z.infer<typeof signupSchema>;

export { signupSchema, type ClientSignupType }
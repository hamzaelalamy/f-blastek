import { z } from 'zod';

const signinSchema = z.object({
    email: z.string().email().min(6, { message: "Email Required" }).max(255),
    password: z.string().min(6, { message: "Password Required" }).max(255)
});

type ClientlSigninType = z.infer<typeof signinSchema>;

export { signinSchema, type ClientlSigninType }
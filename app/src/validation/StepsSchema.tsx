import { z } from 'zod';

export const FormDataSchema = z.object({
    gender: z.string().nonempty(),
    birthDay: z.string().regex(/^\d{4}-\d{2}-\d{2}$/).nonempty(),
    cin: z.string().nonempty(),
    phoneNumber: z.string().nonempty(),
    city: z.string().nonempty(),
    address: z.string().nonempty(),
    geolocation: z.any(),
    // scannedCin: z.string().nonempty(),
    // photo: z.string().nonempty(),
    specialization: z.string().nonempty(),
    // hourlyRate: z.number(),
    bio: z.string().nonempty(),
    experiences: z.string(),
    education: z.string(),
    // availability: z.object({
    //     days: z.array(z.string()).nonempty(),
    //     timeslots: z.array(z.string()).nonempty(),
    // }),
});

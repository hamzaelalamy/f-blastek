import {Schema, model, Document} from "mongoose";
import bcrypt from 'bcrypt';
interface IProfessional extends Document {
    firstName : string;
    lastName : string;
    cin : string;
    email: string;
    phoneNumber: string;
    city: string;
    address: string;
    geolocation?: any;
    scannedCin: string;
    photo?: string;
    specialization: string;
    hourlyRate: number;
    bio: string;
    experiences: string[];
    backgroundCheckCompleted: boolean;
    availability: {
        days: string[];
        timeslots: string[];
    };
    password: string;
    payments: number[];
    // payments_history: any[];
    resetPasswordToken?: string;
}

const professionalSchema = new Schema<IProfessional>({
    firstName: {
        type: String,
        required: [true, 'First name is required']
    },
    lastName: {
        type: String,
        required: [true, 'Last name is required']
    },
    cin: { 
        type: String, 
        required: [true, 'CIN is required'], 
        unique: true, 
        minlength: [6, 'CIN must be at least 6 characters'], 
        maxlength: [10, 'CIN cannot exceed 10 characters'] 
    },
    email: { 
        type: String, 
        required: [true, 'Email is required'], 
        unique: true, 
        match: [/^[^\s@]+@[^\s@]+\.[^\s@]+$/, 'Invalid email format'] 
    },
    phoneNumber: { 
        type: String, 
        required: [true, 'Phone number is required'], 
        unique: true,
        match: [/^\d{10}$/, 'Invalid phone number format (10 digits)'] 
    },
    city: { 
        type: String, 
        required: [true, 'City is required'] },
    address: { 
        type: String, 
        required: [true, 'Address is required'] },
    geolocation: { 
        type: Schema.Types.Mixed
     },
    scannedCin: { 
        type: String, 
        required: [true, 'Scanned CIN is required'] },
    photo: { type: String },
    specialization: { 
        type: String, 
        required: [true, 'Specialization is required'] },
    hourlyRate: { 
        type: Number, 
        required: [true, 'Hourly rate is required'], 
        min: [0, 'Hourly rate cannot be negative'] },
    bio: { 
        type: String, 
        required: [true, 'Bio is required'] },
    experiences: { 
        type: [String], 
        required: [true, 'Experiences are required'], 
        validate: [(experiences: string[]) => experiences.length > 0, 'At least one experience is required'] 
    },
    backgroundCheckCompleted: { 
        type: Boolean, 
        required: [true, 'Background check status is required'] },
    availability: {
        days: { 
            type: [String], 
            required: [true, 'Availability days are required'], 
            validate: [(days: string[]) => days.length > 0, 'At least one availability day is required'] 
        },
        timeslots: { 
            type: [String], 
            required: [true, 'Availability timeslots are required'], 
            validate: [(timeslots: string[]) => timeslots.length > 0, 'At least one availability timeslot is required'] 
        }
    },
    password: { 
        type: String, 
        required: [true, 'Password is required'], 
        minlength: [6, 'Password must be at least 6 characters long'] },
    payments: {
        type: [Number],
        default: []
    },
    // payments_history: { type: [Schema.Types.Mixed], required: [true, 'Payments history is required'] },
    resetPasswordToken: { type: String }
});

professionalSchema.pre<IProfessional>('save', async function (next) {
    if (!this.isModified('password')) {
        return next();
    }

    try {
        const hashedPassword = await bcrypt.hash(this.password, 10);
        this.password = hashedPassword;
        next();
    } catch (error) {
        return next(error as Error);
    }
});

// Create and export the Professional model
const ProfessionalModel = model<IProfessional>('Professional', professionalSchema);

export default ProfessionalModel;
import {Schema, model, Document} from "mongoose";
import bcryptjs from 'bcryptjs';

interface IClient extends Document {
    firstName: string;
    lastName: string;
    cin?: string;
    email: string;
    phoneNumber?: string;
    city: string;
    address?: string;
    geoLocation?: any;
    scannedCIN?: string;
    photo?: string;
    password: string;
    payments?: number[];
    emailVerified :boolean;
    verifiedEmailToken?: string;
    verifiedEmailTokenExpire?: Date,
    resetPasswordToken?: string;
    resetPasswordExpire?: Date;

    createResetPasswordToken(): string;
}

const clientSchema = new Schema<IClient>({
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
        unique: true,
        sparse: true,
        minlength: [6, 'CIN must be at least 6 characters'],
        maxlength: [10, 'CIN cannot exceed 10 characters'],
    },
    email: {
        type: String,
        required: [true, 'Email is required'],
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address'],
        lowercase: true,
        unique: true,
        sparse:true,
        trim: true
    },
    phoneNumber: {
        type: String,
        unique: true,
        sparse:true,
        match: [/(\+212|0)([ \-_/]*)(\d[ \-_/]*){9}/, 'Invalid phone number format (10 digits)']
    },
    city: {
        type: String,
        required: [true, 'City is required'],
    },
    address: {
        type: String,
    },
    geoLocation: {
        type:  Schema.Types.Mixed,
    },
    scannedCIN: {
        type: String,
    },
    photo: {
        type: String
    },
    password: {
        type: String,
        required: [true, 'Password is required']
    },
    payments: {
        type: [Number],
        default: []
    },
    emailVerified : {
        type: Boolean,
        default: false
    },
    verifiedEmailToken: String,
    verifiedEmailTokenExpire: Date,
    resetPasswordToken: String,
    resetPasswordExpire: Date,
}, { timestamps: true });

clientSchema.pre<IClient>('save', async function (next) {
    if (!this.isModified('password')) {
        return next();
    }

    try {
        const hashedPassword = await bcryptjs.hash(this.password, 10);
        this.password = hashedPassword;
        next();
    } catch (error) {
        return next(error as Error);
    }
});


const Client =  model<IClient>('Client', clientSchema);

export default Client;      
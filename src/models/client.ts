import mongoose from 'mongoose';
import bcrypt from 'bcrypt';

interface IClient extends mongoose.Document {
    firstName: string;
    lastName: string;
    cin: string;
    email: string;
    phoneNumber: string;
    address: string;
    geoLocation?: string;
    scannedCIN: string;
    photo?: string;
    password: string;
    payments: number[];
    resetPasswordToken?: string;
    resetPasswordExpire?: Date;
    createdAt: Date;
}

const clientSchema = new mongoose.Schema<IClient>({
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
        unique: true
    },
    email: {
        type: String,
        required: [true, 'Email is required'],
        unique: true,
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
    },
    phoneNumber: {
        type: String,
        required: [true, 'Phone number is required']
    },
    address: {
        type: String,
        required: [true, 'Address is required']
    },
    geoLocation: String,
    scannedCIN: {
        type: String,
        required: [true, 'Scanned CIN is required']
    },
    photo: String,
    password: {
        type: String,
        required: [true, 'Password is required']
    },
    payments: {
        type: [Number],
        default: []
    },
    resetPasswordToken: String,
    resetPasswordExpire: Date,
    createdAt: { type: Date, default: Date.now }
});

clientSchema.pre<IClient>('save', async function (next) {
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

const Client = mongoose.model<IClient>('Client', clientSchema);

export default Client;
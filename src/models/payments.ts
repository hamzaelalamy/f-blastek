import {Schema, Document, model} from 'mongoose';


interface IPayments extends Document {
    interventionId: Schema.Types.ObjectId;
    clientId: Schema.Types.ObjectId;
    professionalId: Schema.Types.ObjectId;
    amount: number;
    gatewayTransactionId: string;
    paymentStatus: string;
    paymentMethod?: string;
}

const paymentsSchema = new Schema<IPayments>({
    interventionId: { 
        type: Schema.Types.ObjectId, 
        required: [true, 'Intervention is required'] },
    clientId: { 
        type: Schema.Types.ObjectId, 
        required: [true, 'Client is required'],
        ref:'client' },
    professionalId: { 
        type: Schema.Types.ObjectId, 
        required: [true, 'Professional amount is required'],
        ref:'professionnal' },
    amount: { 
        type: Number, 
        required: [true, 'Transaction amount is required'] },
    gatewayTransactionId: { 
        type: String, 
        required: true },
    paymentStatus: { 
        type: String, 
        required: true },
    paymentMethod: { type: String },
});

const PaymentsModel = model<IPayments>('Payments', paymentsSchema);

export default PaymentsModel;
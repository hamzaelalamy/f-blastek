import { Schema, model, Document } from "mongoose";

interface IOffre extends Document {
    service_id: Schema.Types.ObjectId;
    description : string;
    application_status : string;
}

const offreSchema = new Schema<IOffre>({
    service_id: {
        type: Schema.Types.ObjectId,
        ref: 'service',
        required: [true, 'A service needs to be selected'],
    },
    description:{
        type: String,
        required: [true, 'Enter a valid decription']
    },
    application_status: {
        type: String,
        required: [true, 'application status required']
    }
}, {timestamps:true})

const Offre = model<IOffre>('Offre', offreSchema);

export default Offre;
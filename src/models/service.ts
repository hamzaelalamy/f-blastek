import { Schema, model, Document } from "mongoose";

interface IService extends Document {
  name: string;
  categoryId: Schema.Types.ObjectId;
  description: string;
}

const servicesSchema = new Schema<IService>({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  categoryId: {
    type: Schema.Types.ObjectId,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
});

const Service = model<IService>("Service", servicesSchema);

export default Service;

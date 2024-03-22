import { Schema, model, Document } from "mongoose";

interface IService extends Document {
  name: string;
  categoryId: Schema.Types.ObjectId;
  description: string;
}

const servicesSchema = new Schema<IService>({
  name: {
    type: String,
    required: [true, 'Name is required'],
    unique: true,
  },
  categoryId: {
    type: Schema.Types.ObjectId,
    required: [true, 'Category ID is required'],
  },
  description: {
    type: String,
    required: [true, 'Description is required'],
  },
});

const Service = model<IService>("Service", servicesSchema);

export default Service;

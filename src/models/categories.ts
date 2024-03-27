import { Schema, model, Document } from "mongoose";

interface ICategory extends Document {
  name: string;
}

const categorySchema = new Schema<ICategory>(
  {
    name: { type: String, required: true, unique: true, sparse:true },
  },
  { timestamps: true }
);

const Category = model("Category", categorySchema);

export default Category;

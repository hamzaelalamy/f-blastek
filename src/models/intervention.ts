import { Schema, model, Document } from "mongoose";

interface IIntervention extends Document {
  name: string;
  clientId: Schema.Types.ObjectId;
  professionaliD: Schema.Types.ObjectId;
  status: string;
}

const interventionSchema = new Schema<IIntervention>(
  {
    name: {
      type: String,
      required: [true, "name is required"],
    },
    clientId: {
      type: Schema.Types.ObjectId,
      ref: "client",
      required: [true, "A client needs to be selected"],
    },
    professionaliD: {
      type: Schema.Types.ObjectId,
      ref: "professional",
      required: [true, "A professional needs to be selected"],
    },
    status: {
      type: String,
      required: [true, "status required"],
    },
  },
  { timestamps: true }
);

const Intervention = model("Intervention", interventionSchema);

export default Intervention;
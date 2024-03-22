import { Schema, model, Document } from "mongoose";

interface IReview extends Document {
  clientId: Schema.Types.ObjectId;
  professionalId: Schema.Types.ObjectId;
  rating: number;
  description: string;
}

const reviewSchema = new Schema<IReview>(
  {
    clientId: {
      type: Schema.Types.ObjectId,
      ref: "client",
      required: [true, "A client needs to be selected"],
    },
    professionalId: {
      type: Schema.Types.ObjectId,
      ref: "professional",
      required: [true, "A professional needs to be selected"],
    },
    rating: {
      type: Number,
      required: [true, "rating required"],
    },
    description: {
      type: String,
      required: [true, "description required"],
    },
  },
  { timestamps: true }
);

const Review = model<IReview>("Review", reviewSchema);

export default Review;
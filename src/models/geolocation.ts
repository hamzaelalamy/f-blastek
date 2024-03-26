import { Schema, model, Document } from "mongoose";

interface IGeoLocation extends Document {
  type: {
    type: string;
    enum: ["Point"];
  };
  coordinates: number[];
}

const GeoLocationSchema = new Schema<IGeoLocation>(
  {
    type: {
      type: {
        type: String,
        enum: ["Point"],
        required: true,
      },
    },
    coordinates: {
      type: [Number],
      required: true,
      index: "2dsphere",
    },
  },
  { timestamps: true }
);

const GeoLocation = model<IGeoLocation>("GeoLocation", GeoLocationSchema);

export default GeoLocation;
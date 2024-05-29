import { Schema, model, Document } from "mongoose";

interface IOffre extends Document {
  jobTitle: string;
  jobDescription: string;
  requiredSkills: string[];
  service: Schema.Types.ObjectId; // Reference to the service collection
  location: string;
  offeredHourlySalaryRange: string;
}

const offreSchema = new Schema<IOffre>(
  {
    jobTitle: {
      type: String,
      required: [true, "Job title is required"],
    },
    jobDescription: {
      type: String,
      required: [true, "Job description is required"],
    },
    requiredSkills: {
      type: [String],
      required: [true, "Required skills are required"],
      validate: {
        validator: (skills: string[]) =>
          skills.every((skill) => typeof skill === "string"),
        message: "Skills must be strings",
      },
    },
    service: {
      type: Schema.Types.ObjectId,
      ref: "service", // Reference to the service collection
      required: [true, "Service category is required"],
    },
    location: {
      type: String,
      required: [true, "Location is required"],
    },
    offeredHourlySalaryRange: {
      type: String,
      required: [true, "Offered hourly salary range is required"],
    },
  },
  { timestamps: true }
);

const Offre = model<IOffre>("Offre", offreSchema);

export default Offre;

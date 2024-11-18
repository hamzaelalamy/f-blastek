import { Schema, model, Document } from "mongoose";
import bcryptjs from "bcryptjs";

enum Days {
  Monday = "Monday",
  Tuesday = "Tuesday",
  Wednesday = "Wednesday",
  Thursday = "Thursday",
  Friday = "Friday",
  Saturday = "Saturday",
  Sunday = "Sunday",
}

enum Timeslots {
  Slot1 = "7:00 - 8:00",
  Slot2 = "8:00 - 10:00",
  Slot3 = "10:00 - 12:00",
  Slot4 = "12:00 - 14:00",
  Slot5 = "14:00 - 16:00",
  Slot6 = "16:00 - 18:00",
  Slot7 = "18:00 - 20:00",
  Slot8 = "20:00 - 22:00",
}

interface IAvailability {
  day: Days;
  times: {
    slot: Timeslots;
    available: boolean;
  }[];
}

interface IProfessional extends Document {
  firstName: string;
  lastName: string;
  gender?: string;
  birthDay?: Date;
  cin?: string;
  email: string;
  phoneNumber?: string;
  city?: string;
  address?: string;
  geolocation?: any;
  scannedCin?: string;
  photo?: string;
  specialization?: string;
  hourlyRate?: number;
  bio?: string;
  experiences?: string[];
  education?: string[];
  backgroundCheckCompleted: boolean;
  availability?: IAvailability[];
  password: string;
  payments?: number[];
  emailVerified?: boolean;
  verifiedEmailToken?: string;
  verifiedEmailTokenExpire?: Date;
  passwordResetToken?: string;
  passwordResetTokenExpires?: Date;
  categoryId?: Schema.Types.ObjectId;
}

const availabilitySchema = new Schema<IAvailability>({
  day: {
    type: String,
    enum: Object.values(Days),
  },
  times: [
    {
      slot: {
        type: String,
        enum: Object.values(Timeslots),
      },
      available: {
        type: Boolean,
        default: false,
      },
    },
  ],
});

const professionalSchema = new Schema<IProfessional>(
  {
    firstName: {
      type: String,
      required: [true, "First name is required"],
      lowercase: true,
    },
    lastName: {
      type: String,
      required: [true, "Last name is required"],
      lowercase: true,
    },
    gender: {
      type: String,
      lowercase: true,
    },
    birthDay: {
      type: Date,
      lowercase: true,
    },
    cin: {
      type: String,
      unique: true,
      sparse: true,
      minlength: [6, "CIN must be at least 6 characters"],
      maxlength: [10, "CIN cannot exceed 10 characters"],
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      match: [
        /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
        "Please fill a valid email address",
      ],
      lowercase: true,
      trim: true,
    },
    phoneNumber: {
      type: String,
    },
    city: {
      type: String,
    },
    address: {
      type: String,
    },
    geolocation: {
      type: Schema.Types.Mixed,
    },
    scannedCin: {
      type: String,
    },
    photo: { type: String },
    specialization: {
      type: String,
    },
    hourlyRate: {
      type: Number,
      min: [0, "Hourly rate cannot be negative"],
    },
    bio: {
      type: String,
    },
    experiences: {
      type: [String],
      default: "No past Experience",
      validate: [
        (experiences: string[]) => experiences.length > 0,
        "At least one experience is required",
      ],
    },
    education: {
      type: [String],
      default: "No information provided",
    },
    backgroundCheckCompleted: {
      type: Boolean,
      required: [true, "Background check status is required"],
      default: false,
    },
    availability: [availabilitySchema],
    password: {
      type: String,
      required: [true, "Password is required"],
      minlength: [6, "Password must be at least 6 characters long"],
    },
    payments: {
      type: [Number],
      default: [],
    },
    emailVerified: {
      type: Boolean,
      default: false,
    },
    verifiedEmailToken: String,
    verifiedEmailTokenExpire: Date,
    passwordResetToken: { type: String },
    passwordResetTokenExpires: { type: Date },
    categoryId: {
      type: Schema.Types.ObjectId,
      ref: "Category",
    },
  },
  { timestamps: true }
);

professionalSchema.pre<IProfessional>("save", async function (next) {
  if (!this.isModified("password")) {
    return next();
  }

  try {
    const hashedPassword = await bcryptjs.hash(this.password, 10);
    this.password = hashedPassword;
    next();
  } catch (error) {
    return next(error as Error);
  }
});

// Create and export the Professional model
const Professional = model<IProfessional>("Professional", professionalSchema);

export default Professional;

import mongoose, { Model, Schema } from "mongoose";
import { IUser } from "../interfaces/user";

export interface IUsers extends IUser {}

const userSchema = new Schema<IUsers>({
  name: { type: String },
  email: { type: String, unique: true },
  password: { type: String, unique: true},
  role: {
    type: String,
    enum: {
      values: ["admin", "user"],
      message: "{VALUES} disallowed state",
    },
  },
  department: {
    type: String,
    enum: {
      values:["all", "design", "finance", "managment", "marketing", "sales", "tech"],
      message: "{VALUES} disallowed state",
    }
  },
  userInfo: {
    type: Object,
    position: { type: String },
    presentation: { type: String },
    image: { type: String },
    areaOfExpertise: { type: Array },
    skills: { type: Array },
    examenDegree: { type: String },
    assignments: {
      type: Object,
      asgmtName: { type: String },
      companyName: { type: String },
      asgmtDescr: { type: String },
      asgmtLocation: { type: String },
      asgmtStartDate: { type: Date },
      asgmtEndDate: { type: Date },
    },
  },
});

const UserModel: Model<IUsers> =
  mongoose.models.User || mongoose.model("User", userSchema);

export default UserModel;

import { Schema, model } from "mongoose";

const userSchema = new Schema(
  {
    username: {
      type: String,
      umique: true,
    },
    email: {
      type: String,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    roles: [
      {
        ref: "Role",
        type: Schema.Types.ObjectId,
      },
    ],
  },
  {
    timestamp: true,
    versionKey: false,
  }
);
export default userSchema;
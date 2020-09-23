import { Schema, model } from "mongoose";
import bcrypt from "bcryptjs";
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

//Método para cifrar las contraseñas
userSchema.statics.encryptPassword = async (password) => {
  const salt = await bcrypt.genSalt(10);
  return await bcrypt.hash(password, salt);
};

//Método para comparar las contraseñas
userSchema.statics.comparePassword = async (password, receivedPassword) => {
  return await bcrypt.compare(password, receivedPassword);
};

export default model("User", userSchema);

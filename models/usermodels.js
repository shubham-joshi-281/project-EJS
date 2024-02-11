import mongoose from "mongoose";
const userSchema = new mongoose.Schema({
  name: { type: String, require: true },
  email: { type: String, require: true,},
  age: { type: Number },
  gender: { type: String, require: true },
  phone: { type: Number, require: true,},
  password: { type: String, require: true },
  confirmpassword: { type: Number, require: true },
});

const userModel = new mongoose.model("resgistered user", userSchema);

export default userModel

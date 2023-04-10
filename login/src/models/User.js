import mongoose from "mongoose";
import bcrypt from "bcrypt";

const UserSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

// Mongo 6.0에 save 없어짐 insertOne
UserSchema.pre("save", async function () {
  //비밀번호가 수정될때만 미들웨어 동작
  if (this.isModified("password")) {
    this.password = await bcrypt.hash(this.password, 5);
  }
});

const User = mongoose.model("User", UserSchema);
export default User;

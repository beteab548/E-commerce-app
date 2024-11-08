import mongoose, { model, models, Schema, SchemaTypes } from "mongoose";
export function Connect() {
  if (mongoose.connections[0].readyState) {
    console.log("already connected");
    return;
  } else {
    try {
      return mongoose.connect("mongodb://localhost:27017/e-commerce");
    } catch (err) {
      console.log(err);
    }
  }
}
const userSchema = new Schema({
  email: SchemaTypes.String,
  password: SchemaTypes.String,
});
export const User = mongoose.models.user || model("user", userSchema);

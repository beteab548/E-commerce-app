import mongoose, { model, models, Schema, SchemaTypes, Types } from "mongoose";
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
  email: { type: SchemaTypes.String, required: true },
  password: { type: SchemaTypes.String, required: true },
  pwdResetToken: { type: SchemaTypes.String, default: null },
  pwdResetTokenExpiration: {
    type: SchemaTypes.Date,
    default: null,
  },
});
export const User = mongoose.models.User || model("User", userSchema);
const shoeSchema = new Schema({
  brand: { type: SchemaTypes.String, required: true },
  model_name: { type: SchemaTypes.String, required: true },
  description: { type: SchemaTypes.String, required: true },
  color: { type: SchemaTypes.String, required: true },
  price: { type: SchemaTypes.Number, required: true },
  gender: { type: SchemaTypes.String, required: true },
  size: { type: SchemaTypes.String, required: true },
  imagePath: { type: SchemaTypes.String, required: true },
  product_type: { type: SchemaTypes.String, required: true },
});
export const shoe = mongoose.models.shoe || model("shoe", shoeSchema);
const carSchema = new Schema({
  model_name: { type: SchemaTypes.String, required: true },
  description: { type: SchemaTypes.String, required: true },
  price: { type: SchemaTypes.Number, required: true },
  color: { type: SchemaTypes.String, required: true },
  imagePath: { type: SchemaTypes.String, required: true },
  product_type: { type: SchemaTypes.String, required: true },
});
export const car = mongoose.models.car || model("car", carSchema);
const houseSchema = new Schema({
  built_with: { type: SchemaTypes.String, required: true },
  description: { type: SchemaTypes.String, required: true },
  price: { type: SchemaTypes.Number, required: true },
  color: { type: SchemaTypes.String, required: true },
  address: { type: SchemaTypes.String, required: true },
  imagePath: { type: SchemaTypes.String, required: true },
  product_type: { type: SchemaTypes.String, required: true },
});
export const house = mongoose.models.house || model("house", houseSchema);

const phoneSchema = new Schema({
  screen_size: { type: SchemaTypes.String, required: true },
  description: { type: SchemaTypes.String, required: true },
  price: { type: SchemaTypes.Number, required: true },
  color: { type: SchemaTypes.String, required: true },
  address: { type: SchemaTypes.String, required: true },
  imagePath: { type: SchemaTypes.String, required: true },
  product_type: { type: SchemaTypes.String, required: true },
});
export const phone = mongoose.models.phone || model("phone", phoneSchema);

const tshirtSchema = new Schema({
  brand: { type: SchemaTypes.String, required: true },
  description: { type: SchemaTypes.String, required: true },
  price: { type: SchemaTypes.Number, required: true },
  color: { type: SchemaTypes.String, required: true },
  imagePath: { type: SchemaTypes.String, required: true },
  size: { type: SchemaTypes.String, required: true },
  product_type: { type: SchemaTypes.String, required: true },
});
export const tshirt = mongoose.models.tshirt || model("tshirt", tshirtSchema);
const pantsSchema = new Schema({
  brand: { type: SchemaTypes.String, required: true },
  description: { type: SchemaTypes.String, required: true },
  price: { type: SchemaTypes.Number, required: true },
  color: { type: SchemaTypes.String, required: true },
  gender: { type: SchemaTypes.String, required: true },
  imagePath: { type: SchemaTypes.String, required: true },
  size: { type: SchemaTypes.String, required: true },
  product_type: { type: SchemaTypes.String, required: true },
});
export const pants = mongoose.models.pants || model("pants", pantsSchema);

const hoddieSchema = new Schema({
  brand: { type: SchemaTypes.String, required: true },
  description: { type: SchemaTypes.String, required: true },
  price: { type: SchemaTypes.Number, required: true },
  color: { type: SchemaTypes.String, required: true },
  gender: { type: SchemaTypes.String, required: true },
  imagePath: { type: SchemaTypes.String, required: true },
  size: { type: SchemaTypes.String, required: true },
  product_type: { type: SchemaTypes.String, required: true },
});
export const hoddie = mongoose.models.hoddie || model("hoddie", hoddieSchema);

const jacketSchema = new Schema({
  brand: { type: SchemaTypes.String, required: true },
  description: { type: SchemaTypes.String, required: true },
  price: { type: SchemaTypes.Number, required: true },
  color: { type: SchemaTypes.String, required: true },
  gender: { type: SchemaTypes.String, required: true },
  imagePath: { type: SchemaTypes.String, required: true },
  size: { type: SchemaTypes.String, required: true },
  product_type: { type: SchemaTypes.String, required: true },
});
export const jacket = mongoose.models.jacket || model("jacket", jacketSchema);
const laptopSchema = new Schema({
  model_name: { type: SchemaTypes.String, required: true },
  description: { type: SchemaTypes.String, required: true },
  price: { type: SchemaTypes.Number, required: true },
  Screen_size: { type: SchemaTypes.Number, required: true },
  imagePath: { type: SchemaTypes.String, required: true },
  product_type: { type: SchemaTypes.String, required: true },
});
export const laptop = mongoose.models.laptop || model("laptop", laptopSchema);
const desktopSchema = new Schema({
  model_name: { type: SchemaTypes.String, required: true },
  description: { type: SchemaTypes.String, required: true },
  price: { type: SchemaTypes.Number, required: true },
  Screen_size: { type: SchemaTypes.Number, required: true },
  imagePath: { type: SchemaTypes.String, required: true },
  product_type: { type: SchemaTypes.String, required: true },
});
export const desktop =
  mongoose.models.desktop || model("desktop", desktopSchema);

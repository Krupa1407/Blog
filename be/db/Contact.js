import mongoose from "mongoose"

const contactSchema = new mongoose.Schema({
    name: String,
    email: String,
    phone: Number,
    address: String,
    message: String,
});

const contactModel = mongoose.model("contacts", contactSchema);
export default contactModel;
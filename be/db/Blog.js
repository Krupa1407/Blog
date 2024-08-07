import mongoose from "mongoose"

const blogSchema = new mongoose.Schema({
    title: String,
    content: String,
    author: String,
    category: String,
    country: String,
    city: String,
    date: { type: Date, default: Date.now }
});

const blogModel = mongoose.model("blog", blogSchema);
export default blogModel;
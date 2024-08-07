import express, { json } from "express"
import cors from "cors"
import "./db/config.js"
import User from "./db/User.js"
import Blog from "./db/Blog.js"
import Contact from "./db/Contact.js"

const app = express();
app.use(cors());
app.use(express.json());

app.post("/signup", async(req, res) => {
    const user = new User(req.body);
    const result = await user.save();
    res.send(result);
});

app.post("/contact", async(req, res) => {
    const contact = new Contact(req.body);
    const result = await contact.save();
    res.send(result);
});

app.post("/blog", async(req, res) => {
    const blog = new Blog(req.body);
    const result = await blog.save();
    res.send(result);
});

app.get("/blogs", async(req, res) => {
    const blogs = await Blog.find({});
    res.send(blogs);
});

app.post("/login", async(req, res) => {
    if(req.body.email && req.body.password){
        let user = await User.findOne(req.body).select("-password");
        if(user){
            res.send(user);
        }
        else{
            user = "no result found."
            res.send(user);
        }
    }
    else{
            let user = "no result found."
            res.send(user);
    }
});

// app.put("/profile", async(req, res) => {
//     const profile = await User.updateOne({}, {})
// });


// pending
app.get("/category/:category", async(req, res) => {
    const blogs = await Blog.find({category: req.params.category});
    res.send(blogs);
});

app.get("/country/:country", async(req, res) => {
    const blogs = await Blog.find({country: req.params.country});
    res.send(blogs);
});

const port = 5000;
app.listen(port, () => {
    console.log(`http://localhost:${port}`);
});
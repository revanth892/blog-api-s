
const Blog = require("../models/blog");

const createblog=async(req,res)=>{
    const { title, author, tags, published_date, content } = req.body.data;

    try {
        const blog = new Blog({
            title,
            author,
            tags,
            published_date,
            content
        });

        await blog.save();

        res.status(201).json({ message: "Blog created successfully", blog });
    } catch (err) {
        console.error("Error creating blog:", err);
        res.status(500).json({ message: "Internal server error" });
    }
}
module.exports={createblog}

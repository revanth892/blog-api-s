
const Blog = require("../models/blog");

const createblog = async (req, res) => {
    const { title, author, tags, published_date, content } = req.body.data;
    // const {data} =req.body
    try {
        const blog = new Blog({
            title,
            author,
            tags,
            published_date,
            content
        });

        await blog.save();

        res.status(201).json({ message: "Blog created successfully" });
    } catch (err) {
        console.error("Error creating blog:", err);
        res.status(500).json({ message: "Internal server error" });
    }
}


const createblogmultiple = async (req, res) => {
    const blogsData = req.body.data;
    // const {data} =req.body
    try {
        const result = await Blog.insertMany(blogsData)
        res.status(201).json({ message: "Blogs created successfully" });
    } catch (err) {
        console.error("Error creating blog:", err);
        res.status(500).json({ message: "Internal server error" });
    }
}

const getallblogs = async (req, res) => {
    try {
        const allBlogs = await Blog.find({})
        res.status(201).json({ message: "Blogs fetched suuccessfully", data: allBlogs })
    }
    catch (err) {
        console.error("Error fetching blog:", err)
        res.status(500).json({ message: "Internal server error" });
    }
}

const getallauthors = async (req, res) => {
    try {
        const allauthors = await Blog.find({}, 'author').exec();
        res.status(201).json({ message: "Blogs fetched suuccessfully", data: allauthors })
    }
    catch (err) {
        console.error("Error fetching authors:", err)
        res.status(500).json({ message: "Internal server error" });
    }
}

const getalltags = async (req, res) => {
    try {
        const tags = await Blog.distinct('tags').exec();
        const uniqueTags = [...new Set(tags.flat())];
        res.status(200).json({ message: "Tags fetched successfully", data: uniqueTags });
    }
    catch (err) {
        console.error("Error fetching authors:", err)
        res.status(500).json({ message: "Internal server error" });
    }
}


const getwithtag = async (req, res) => {
    const tag = req.query.tag
    try {
        const blogs = await Blog.find({ tags: { $in: tag } });

        if (blogs.length === 0) {
            return res.status(404).json({ message: "No blogs found with the specified tags" });
        }

        res.status(200).json({ message: "Blogs retrieved successfully", data: blogs });
    } catch (err) {
        console.error("Error fetching blogs by tags:", err);
        res.status(500).json({ message: "Internal server error" });
    }
}


const getwithauthor = async (req, res) => {
    const findauthor = req.query.author
    try {
        const blogs = await Blog.find({ author: findauthor });

        if (blogs.length === 0) {
            return res.status(404).json({ message: "No blogs found with the specified author" });
        }

        res.status(200).json({ message: "Blogs retrieved successfully", data: blogs });
    } catch (err) {
        console.error("Error fetching blogs by tags:", err);
        res.status(500).json({ message: "Internal server error" });
    }
}
const getwithid = async (req, res) => {
    const id = req.query.id
    try {
        const blogs = await Blog.findById(id);

        if (blogs.length === 0) {
            return res.status(404).json({ message: "No blogs found with the specified author" });
        }

        res.status(200).json({ message: "Blogs retrieved successfully", data: blogs });
    } catch (err) {
        console.error("Error fetching blogs by tags:", err);
        res.status(500).json({ message: "Internal server error" });
    }
}

const getrandomblog = async (req, res) => {
    try {
        const blogs = await Blog.aggregate([{$sample:{size:1}}]);

        if (blogs.length === 0) {
            return res.status(404).json({ message: "No blogs found with the specified author" });
        }

        res.status(200).json({ message: "Blogs retrieved successfully", data: blogs });
    } catch (err) {
        console.error("Error fetching blogs by tags:", err);
        res.status(500).json({ message: "Internal server error" });
    }
}
module.exports = { createblog, createblogmultiple, getallblogs, getallauthors, getalltags, getwithtag, getwithauthor, getwithid ,getrandomblog}

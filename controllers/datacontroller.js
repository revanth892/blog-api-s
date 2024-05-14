
const Blog = require("../models/blog");

const createblog=async(req,res)=>{
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

        res.status(201).json({ message: "Blog created successfully"});
    } catch (err) {
        console.error("Error creating blog:", err);
        res.status(500).json({ message: "Internal server error" });
    }
}


const createblogmultiple=async(req,res)=>{
    const blogsData = req.body.data;
    // const {data} =req.body
    try {
        const result = await Blog.insertMany(blogsData)
        res.status(201).json({ message: "Blogs created successfully"});
    } catch (err) {
        console.error("Error creating blog:", err);
        res.status(500).json({ message: "Internal server error" });
    }
}

const getallblogs=async(req,res)=>
{
    try{
        const allBlogs= await Blog.find({})
        res.status(201).json({message :"Blogs fetched suuccessfully",data:allBlogs})
    }
    catch(err)
    {
        console.error("Error fetching blog:",err)
        res.status(500).json({ message: "Internal server error" });
    }
}

const getallauthors=async(req,res)=>
{
    try{
        const allauthors= await Blog.find({},'author').exec();
        res.status(201).json({message :"Blogs fetched suuccessfully",data:allauthors})
    }
    catch(err)
    {
        console.error("Error fetching authors:",err)
        res.status(500).json({ message: "Internal server error" });
    }
}
module.exports={createblog,createblogmultiple,getallblogs,getallauthors}

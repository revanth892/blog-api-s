const mongoose=require("mongoose");


const Schema = mongoose.Schema;

const blog = new Schema({
    title:{
        type: String,
        require:true,
        default:"NONE"
    },
    author:{
        type: String,
        require:true,
        default:"NONE"
    },
    tags:{
        type: Array,
        require:true,
        default:"NONE"
    },
    published_date:{
        type: String,
        require:true,
        default:"NONE"
    },
    content:{
        type: String,
        require:true,
        default:"NONE"
    }
})

module.exports=mongoose.model('Blogs',blog)
const mongoose = require('mongoose');

const BlogSchema =  new mongoose.Schema({
    title:{
        type : String,
        required :[true,'Please add a title'],
        unique:true,
        trim:true,
        maxlength :[40,'Title Cannot be more than 40 characters']
    },
    description:{
        type:String,
        required:true,
        maxlength:[200,'Description Cannot be more than 200 characters']
    }
})

module.exports = mongoose.models.Blog || mongoose.model('Blog',BlogSchema)
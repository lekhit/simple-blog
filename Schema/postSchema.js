const mongoose =require('mongoose')

const postSchema=new mongoose.Schema({
  title:String,
  content:String
})
module.exports=mongoose.models.Posts || mongoose.model("Posts",postSchema);
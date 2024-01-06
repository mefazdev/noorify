import mongoose from "mongoose";

const blogSchema = new mongoose.Schema({
  slug:{
  type:String
  },
  title: {
    type: String,
  },
  content: {
    type: String,
  },
  image: {
    type: String,
  },
  // isPublished:{
  // type:Boolean
  // },
  status:{
    type:String
  },
  createdAt: {
    type: String,
  },
  publishedAt: {
    type: String,
  },
});

// module.exports =

export default mongoose.models.Blog || mongoose.model("Blog", blogSchema);

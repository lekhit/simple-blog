// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const Posts=require( '../../Schema/postSchema');

import connectDb from '../../middleware/mongoose';

const handler=async (req, res) =>{
  let item=null;
  try{
     item= await Posts.find()
     res.status(200).json(item)
     return;
  }catch(e){
    console.log(e.message)
  }
  console.log(process.env.MongoDB_URL)
  res.status(400).json({message:"not fond"})
}
export default connectDb(handler);
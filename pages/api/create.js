// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const Posts=require( '../../Schema/postSchema');

import connectDb from '../../middleware/mongoose';

const handler=async (req, res) =>{
  let item=null;
  try{
     item= new Posts({title:req.body.title,content:req.body.content})
     await item.save()
  }catch(e){
    console.log(e.message)
  }
  console.log(process.env.MongoDB_URL)
  res.status(200).json(item)
}
export default connectDb(handler);
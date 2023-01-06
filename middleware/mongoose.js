const mongoose=require( 'mongoose');
const connectDb= (handler)=>{
  if(mongoose.connections[0].readyState){
    return handler
  }
   mongoose.connect(process.env.MONGODB_URL,{ keepAlive: true, keepAliveInitialDelay: 300000 , useNewUrlParser: true, useUnifiedTopology: true });
  return handler
}
export default  connectDb;
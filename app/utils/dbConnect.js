 
import * as mongoose from "mongoose";
const connection = {}

async function dbConnect (){
  
    if(connection.isConnected) {
        // console.log("Connected >>>>>>>>>>>")
        return;
    }

const db = await mongoose.connect(
  
//    'mongodb+srv://salahzain139:bqYCbskhJax0duma@cluster0.kgv1yye.mongodb.net/?retryWrites=true&w=majority',
//         {
//         useNewUrlParser :true, 
//         useUnifiedTopology: true,
       
//     }
    
process.env.MONGO_URI,
//    'mongodb+srv://salahzain139:bqYCbskhJax0duma@cluster0.kgv1yye.mongodb.net/?retryWrites=true&w=majority',
        {
        useNewUrlParser :true, 
        useUnifiedTopology: true,
       
        }
    );

    connection.isConnected = db.connections[0].readyState;
    
    
}
export default dbConnect


 
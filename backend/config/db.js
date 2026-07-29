import mongoose from "mongoose";

 export const connectDB = async()=>{
    (await mongoose.connect('mongodb+srv://greatstack:Palan1270@cluster0.ynfo2kq.mongodb.net/food-del').then(()=>console.log("DB Connected"))
);
}
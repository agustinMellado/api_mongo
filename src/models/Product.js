import { Schema, model } from "mongoose";

const productSchema= new Schema({
    name:String,
    category:String,
    price:Number,
    imgUrl:String,
},{
    timestamps:true, versionKey:false,
})

//exporto el modelo pasando por parametro el nombre del modelo
// y el modelo de schema que creamos
export default model('Product', productSchema)
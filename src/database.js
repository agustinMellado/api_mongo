
import mongoose from "mongoose";
//configuracion de conexion de base de datos
mongoose.connect("mongodb://localhost/back-mongo",
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }).then(db => console.log('db conectada')).catch(error => console.log(error))
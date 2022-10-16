import { Schema, model } from 'mongoose'
import bcrypt from 'bcryptjs'

const userSchema = new Schema({
    username: {
        type: String,
        unique: true
    },
    email: {
        type: String,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    roles: [{
        ref: 'Role',
        type: Schema.Types.ObjectId
    }]
}, {
    timeStamp: true,
    versionKey: false,
});
//cifrar password
//statics permite usar el objeto sin necesitdad de instaciarlo.
//metodo para cifrar la password
userSchema.statics.encryptPassword = async (password) => {
    //.gensalt indica las veces que se aplica el algoritmo.
    const salt = await bcrypt.genSalt(10);
    //.hash creo la password cifrada. 
    return await bcrypt.hash(password, salt)//retorno texto cifrado.
}
//metodo para comparar la password
//tomo la password guardada y la password que el usuario ingresa para login
userSchema.statics.comparePassword = async (password, receivedPassword) => {
    //.compare devuelve un booleano.
    return await bcrypt.compare(password, receivedPassword);
}
export default model('User',userSchema);
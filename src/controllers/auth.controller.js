import User from '../models/User'
import jwt from 'jsonwebtoken'
import config from '../config'
export const signup = async (req, res) => {
    const { username, email, password, roles } = req.body;
    //registro un nuevo usuario
    const newUser = new User({
        username,
        email,
        //llamo a la funcion encryptPassword
        password: await User.encryptPassword(password)//guardo la password cifrada.
    })
    //guardamos de forma asincrona el nuevo user
    const savedUser = await newUser.save();
    //generacion de token
    const token = jwt.sign({ id: savedUser._id }, config.SECRET, { //ingreso el id del nuevo usuario, la palabra clave
        //tiempo de expiracion de token
        expiresIn: 86400 //24hs
    });
    res.status(200).json({token})

}
export const signin = async (req, res) => {
    res.json('signin')
}
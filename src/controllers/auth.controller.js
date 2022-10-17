import User from '../models/User'
import jwt from 'jsonwebtoken'
import config from '../config'
import Role from '../models/Role';
export const signup = async (req, res) => {
    const { username, email, password, roles } = req.body;
    //registro un nuevo usuario
    const newUser = new User({
        username,
        email,
        //llamo a la funcion encryptPassword
        password: await User.encryptPassword(password)//guardo la password cifrada.
    });

    //verifico si existe la propiedad roles 
    if(roles){
        //Busco de todos los nombres de la coleccion y verifico si existe el rol.
        const foundRoles= await Role.find({name:{$in: roles}});
        //Recorre cada uno de los objetos y de cada objeto devuelve el .id 
        newUser.roles = foundRoles.map(role=> role._id)
    }else{//si no existe
        //busco entre las colecciones el rol usuario, tomando solo el id de un objeto.
        const role = await Role.findOne({name:'user'});
        //le asigno por defecto el rol user.
        newUser.roles=[role._id];
    }
    //guardamos de forma asincrona el nuevo user
    const savedUser = await newUser.save();
    console.log(savedUser)
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
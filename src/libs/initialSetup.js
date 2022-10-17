import Role from '../models/Role';
import role from '../models/Role'
//funcion 
export const createRoles = async () => {
    try {
        //contador de roles
        const count = await Role.estimatedDocumentCount();//funcion para contar documentos.
        //Verifico si existen roles.
        if (count > 0) return; //retorno y no hago lo que sigue debajo.
        //caso contrario ejecuto el codigo de abajo
        //creacion de roles
        const values = await Promise.all([//'Promese.all' ejecuta todas las funciones al mismo tiempo

            new Role({ name: 'user' }).save(),
            new Role({ name: 'admin' }).save(),
            new Role({ name: 'superAdmin' }).save()
        ]);
        console.log(values);
    } catch (error) {
        console.error(error);
    }
};
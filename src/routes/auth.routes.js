//importacion
import {Router} from 'express'
import * as authController from '../controllers/auth.controller'

//inicializacion
const router = Router()
//rutas:
router.post('/signup',authController.signup)//registrar

router.post('/signin',authController.signin)//ingresar

//exportacion
export default router
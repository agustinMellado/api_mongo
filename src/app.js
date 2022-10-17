import express from 'express'
import morgan from 'morgan'
import productRoutes from './routes/products.routes'
import authRoutes from './routes/auth.routes'
import { createRoles } from './libs/initialSetup'
const app = express()
//funcion crearRoles
createRoles();
//modo de desarrollo
app.use(morgan('dev'));
app.use(express.json());//para que entienda los formatos json que llegan del servidor
app.get('/', (req, res) => {
    res.json('Bienvenido ')
})

app.use('/api/products', productRoutes)
app.use('/api/auth', authRoutes)

export default app
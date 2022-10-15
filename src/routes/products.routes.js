//importacion
import { Router } from 'express'
import * as productsControllers from '../controllers/products.controller'
//inicializacion
const router = Router()
//rutas:
router.post('/',productsControllers.createProduct)
router.get('/',productsControllers.getProducts)
router.get('/:productId',productsControllers.getProductById)
router.put('/:productId',productsControllers.updateProductById)
router.delete('/:productId',productsControllers.deleteProductoById)

//exportacion
export default router;
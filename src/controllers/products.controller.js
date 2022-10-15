
import Product from '../models/Product'//con esto consulto, agrego y modifico cosas a la bd



/** 
 * @param {*} req 
 * @param {*} res
 * 
 */
//Funciones que operan con la bd
export const createProduct = async (req, res) => {
    //aplico el concepto de destructuracion
    const { name, category, price, imgUrl } = req.body;//le pido que obtenga todo eso.
    //creo un nuevo producto y lo almanceno en una constante.
    const newProduct = new Product({ name, category, price, imgUrl });
    //devuelve el objeto nuevo al cliente con id y todo lo creado
    const productSaved = await newProduct.save();//guardo el producto en la bd
    //codigo de estado.
    res.status(201).send(productSaved)//201 significa 'nuevo recurso creado'.

}
export const getProducts = async (req, res) => {
    //creo el objeto para devolver una lista de productos.
    const products = await Product.find();//metodo find() toma todos los productos
    res.json(products);
}

//----------------------------------------------------------------
// toma, actualiza y borra los productos segun su id
export const getProductById = async (req, res) => {
    //recibe el id por parametro
    const product = await Product.findfindById(req.params.productId)
    res.status(200).json(product)
}
export const updateProductById = async (req, res) => {
    //En 'findByIdAndUpdate ' toma por el id y el nuevo dato que quiero actualizar del producto.
    const updatedProduct = await Product.findByIdAndUpdate(req.params.productId, req.body, {
        new: true//indico que quiero obtener la ultima actualziacion.
    });
    res.status(200).json(updatedProduct)
}
export const deleteProductoById = async (req, res) => {
    const {productId}= req.params; //extraigo de req.params el productId
    await Product.findByIdAndDelete(productId);//indico el productoId a eliminar
    //se elimino con satisfaccion
    res.status(204).json()
}
//----------------------------------------------------------------
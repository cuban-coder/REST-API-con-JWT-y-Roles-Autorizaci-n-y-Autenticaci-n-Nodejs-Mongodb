import Product from '../models/Products'


export const createProduct = async (req, res) => {    
    //destructuring 
    const {name, category, price, imgURL} = req.body

    const newProduct =  new Product ({name, category, price, imgURL});
    const productSaved = await newProduct.save()
    //El estado 201 significa que un nuevo recurso se ha creado
    res.status(201).json(productSaved)
} 

export const getProducts = async (req, res) => {
    const products = await Product.find();
    res.status(200).json(products)
} 

export const getProductByID = async (req, res) => {
    const product = await Product.findById(req.params.productId);
    res.status(200).json(product)
    
} 

export const updateProductById = async(req, res) => {
   const updatedProduct = await Product.findByIdAndUpdate(req.params.productId, req.body, {
       new: true //para que me devuelva el dato actualizado, de lo contrario me devuelve el viejo 
   })
   res.status(200).json(updatedProduct)
} 
export const deleteProductById = async (req, res) => {
   await Product.findByIdAndDelete(req.params.productId);
   res.status(204).json()
} 


const prod = require('../dbservices/dbservices');

const addProduct = async (req, res) => {
    try{
        const existingProduct = await prod.existingProduct(req.body);
        if(!existingProduct){
            const product = await  prod.addProduct(req.body);
            res.status(201).json(product)
        }
        else{
            res.status(400).json(existingProduct);
        }
    }catch(err){
        res.status(500).json({error:'Adding product failed'})
}
}

const getAllProducts = async (req, res) => {
    try{
        const products = await prod.getAllProducts();
        res.status(200).json(products)
    }catch(error){
        res.status(500).json({error:'Failed to list products'})
    }

}
const getOneProduct = async (req, res) => {
    try{
        const id = req.params.id
        const product = await prod.getOneProduct(id);
        res.status(200).json(product)
    }catch(err){
        res.status(500).json({error:'Failed to get product'})
    }

}
const updateProduct = async (req, res) => {
    try{
        const id = req.params.id
        const {title, price, description , published} = req.body;
        const product = await prod.getOneProduct(id,{title, price, description , published});
        res.status(200).json(product)
    }catch(err){
        res.status(500).json({error:'Failed to update product'})
    }

}
const deleteProduct = async (req, res) => {
    try{
        const id = req.params.id
        const product = await prod.getOneProduct(id);
        res.status(200).json(product)
    }catch(err){
        res.status(500).json({error:'Failed to delete product'})
    }

}
const getPublishedProduct = async (req, res) => {
    try{
        const products =  await prod.findAll({ where: { published: true }})
        res.status(200).send(products)  
    }catch(err){
        res.status(500).json({error:'Failed to get Published Product'})
    }

}
const getProductReviews =  async (req, res) => {
    try{
        const id = req.params.id
        const data = await prod.getProductReviews(id)
        res.status(200).json(data)
    }catch(err){
        res.status(500).json({error:'Error in getting reviews for the product'})
    }

}
const getAllProductReviews =  async (req, res) => {
    try{
        const data = await prod.getAllProductReviews()
        res.status(200).json(data)
    }catch(err){
        res.status(500).json({error:'Failed to get all products with reviews'})
    }

}

const getProductsSortedByRating = async (req, res) => {
    try{
        const data = await prod.getProductsSortedByRating()
        res.status(200).json(data)
    }catch(err){
        res.status(500).json({error:'Failed to get all sorted products '})
    }

}

module.exports = {
    addProduct,
    getAllProducts,
    getOneProduct,
    updateProduct,
    deleteProduct,
    getPublishedProduct,
    getProductReviews,
    getAllProductReviews,
    getProductsSortedByRating
}
const { where } = require('sequelize');
const db = require('../config/dbConfig')

const Product = db.products
const Review = db.reviews
const Offer = db.offers

const addProduct = async (data) =>{
    try{
        const product = await Product.create({title:data.title,price:data.price, description:data.description , published:data.published})
        return product;
    }catch (err){
       console.log(err); 
       return err
    }
}

const existingProduct = async(data) =>{
    try{
        const existingProduct = await Product.findOne({ where: { title:data.title } });
        if (existingProduct) {
            return { error: 'Title already exists' };
    }
    }catch(err){
        console.log(err);
    }
}

const getAllProducts = async() => {
    try{
        const products = await Product.findAll();
        return products;
    }catch (err){
        console.log(err);
    }
}

const getOneProduct = async(id)=>{
    try{
        const product = await Product.findOne({ where: { id}})
        return product;
    }
    catch(error){
        console.log(error);
    }
}

const updateProduct = async  (id,{title, price, description , published})=>{
    try{
        const product = await Product.update({ where: { id }},{title, price, description , published})
        return product;
    }catch(err){
        console.log(err)
    }
}

const deleteProduct = async (id) => {
    try{
        const product = await Product.destroy({where:{id}})
        return product 
    }catch(err){
        console.log(err)
    }
}

const getPublishedProduct = async () => {
    try{
        const product = await Product.findAll({where:{published:true}})
        return product;
    }catch(err){
        console.log(err)
    }
}

const addReview = async (id,{rating,description}) =>{
   try{
    const review=await Review.create({product_id:id, rating, description});
    return review;
   }catch(err){
    console.log(err);
   }
}

const addOffer = async(id,{offerStartDate,offerEndDate, offerPrice})=>{
    try{
        const offer = await Offer.create({product_id: id, offerStartDate,offerEndDate, offerPrice})
        return offer;
    } catch(error){
        console.log(error)
    }
}

const getAllReviews = async () => {
    try{
        const review = await Review.findAll({})
        return review;
    }catch (err){
        console.log(err);
    }
}

const getProductReviews = async (id) => {
    try {
        const reviewProd = await Product.findOne({
            include: [
                { model: Review, as: 'review' },
                { model: Offer, as: 'offer' }
            ],
            where: { id } // Adjust if the primary key is named differently
        });
        return reviewProd;
    } catch (err) {
        console.log(err);
    }
};

const getAllProductReviews = async () => {
    try {
        const reviewProd = await Product.findAll({
            include: [
                { model: Review, as: 'review' },
                { model: Offer, as: 'offer' }
            ]
        });
        return reviewProd;
    } catch (err) {
        console.log(err);
    }
};

module.exports = {
    addProduct,
    existingProduct,
    getAllProducts,
    getOneProduct,
    updateProduct,
    deleteProduct,
    getPublishedProduct,
    addReview,
    getAllReviews,
    getProductReviews,
    getAllProductReviews,
    addOffer
}
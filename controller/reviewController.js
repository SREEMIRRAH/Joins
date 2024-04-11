const rev = require('../dbservices/dbservices');

const addReview  = async (req, res) => {
    const id = req.params.id
    const {rating,description } = req.body;
    const review = await rev.addReview(id, { rating , description });
    res.status(201).json(review)
}

const getAllReviews = async (req, res) => {
    const reviews = await rev.getAllReviews();
    res.status(200).json(reviews)

}

module.exports = {
    addReview,
    getAllReviews
}
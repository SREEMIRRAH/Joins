const off = require('../dbservices/dbservices');

const addOffer = async (req, res) => {
    try {
        const id = req.params.id
        const { offerStartDate, offerEndDate, offerPrice } = req.body;
        const offer = await off.addOffer(id, { offerStartDate, offerEndDate, offerPrice });
        res.status(201).json(offer)
    } catch (err) {
        res.status(500).json({ error: 'Adding offer failed.' })
        console.log(err);
    }
}

module.exports = { addOffer }
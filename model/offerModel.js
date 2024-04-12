
module.exports = (sequelize,DataTypes) => {
    const Offer = sequelize.define("offer",{
        //product_id: DataTypes.INTEGER,
        offerStartDate: DataTypes.DATEONLY,
        offerEndDate: DataTypes.DATEONLY,
        offerPrice: DataTypes.DECIMAL(10,2)
    })
    return Offer;
}



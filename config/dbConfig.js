const database =  require('./database.js');
const {Sequelize, DataTypes} = require('sequelize');

const sequelize = new Sequelize(
    database.DB,
    database.USER,
    database.PASSWORD,{
        host:"127.0.0.1",
        dialect:database.dialect,
        pool:{
            max: database.pool.max,
            min: database.pool.min,
            acquire: database.pool.acquire,
            idle: database.pool.idle
        }
    }
)

sequelize.authenticate()
.then(()=>{
    console.log("Database connected successfully");
})
.catch(err =>{
    console.log("Database  connection failed!" + err);
})

const db = {}

db.Sequelize=Sequelize;
db.sequelize=sequelize;

db.products = require('../model/prodModel.js')(sequelize, DataTypes)
db.reviews = require('../model/reviewModel.js')(sequelize, DataTypes)
db.offers = require('../model/offerModel.js')(sequelize,DataTypes)

db.sequelize.sync({ force: false })
.then(() => {
    console.log('yes re-sync done!')
})

// Define associations between Product and Review
db.products.hasMany(db.reviews, { foreignKey: 'product_id', as:'review' });
db.reviews.belongsTo(db.products, { foreignKey: 'product_id',as: "product"});

// Define associations between Product and Offer
db.products.hasOne(db.offers, { foreignKey: 'product_id' ,as:'offer'});
db.offers.belongsTo(db.products, { foreignKey: 'product_id' ,as:'product'});

module.exports = db;
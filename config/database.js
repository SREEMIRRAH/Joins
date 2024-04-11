module.exports={
    HOST:'127.0.0.1',
    USER:'root',
    PASSWORD:'Sree@2002',
    DB:'nodejs_sql',
    dialect: 'mysql',
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
};
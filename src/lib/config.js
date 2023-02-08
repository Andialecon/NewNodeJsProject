require('dotenv').config();

const config = {
    dev: process.env.NODE_ENV || 'production',
    port: process.env.PORT || '8081',
    host: process.env.API_HOST || 'localhost',
    secret: process.env.SECRET 
    // dbURI: process.env.DB_URI || 'mongodb://localhost:27017/cryptomillionary',
    // dbURI: process.env.DB_URI || 'mongodb+srv://andialecon:tejelo2010@nftproyectdb.i929nui.mongodb.net/?retryWrites=true&w=majority'
};

module.exports = config;
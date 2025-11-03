const dotenv = require('dotenv');
dotenv.config();
const config = {
    PORT: process.env.PORT || 3000,
    MONGODB_URI: process.env.MONGODB_URI || 'mongodb://localhost:27017/mydatabase',
    JWT_SECRET: process.env.JWT_SECRET,
    JWT_EXPIRATION: process.env.JWT_EXPIRATION || '1d',
    CORS_ORIGIN: process.env.CORS_ORIGIN || '*',
    API_BASE_URL: process.env.API_BASE_URL || '/api',
    FRONTEND_BASE_URL: process.env.FRONTEND_BASE_URL || 'http://localhost:3000'
};
module.exports = config;
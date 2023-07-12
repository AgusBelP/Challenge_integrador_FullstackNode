const { conn } = require('../config/conn')

const getCategories = async () => {
    try{
        
        const [rows] = await conn.query('SELECT * FROM category');

        return rows;
    }
    catch (error) {
        throw error;
    }
    finally{
        conn.releaseConnection();
    }
};


module.exports = {
    getCategories
}
const { conn } = require('../config/conn')

const getOne = async (params) => {
    try{
        
        const [rows] = await conn.query('SELECT * FROM items WHERE ?', params);

        return rows;
    }
    catch (error) {
        throw error;
    }
    finally{
        conn.releaseConnection();
    }
}

module.exports = {
    getOne
}
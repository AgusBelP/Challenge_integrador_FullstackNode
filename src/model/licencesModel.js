const { conn } = require('../config/conn')

const getLicences = async () => {
    try{
        
        const [rows] = await conn.query('SELECT * FROM licence');

        return rows;
    }
    catch (error) {
        throw error;
    }
    finally{
        conn.releaseConnection();
    }
};

const getCollections = async () => {

    try {
        
        const [rows] = await conn.query('SELECT * FROM licence');

        return rows;
        
    } catch (error) {
        throw error;        
    }finally{
        conn.releaseConnection();
    }
};

const getLicencePath = async (params) => {

    try {
        
        const [rows] = await conn.query('SELECT * FROM licence WHERE ?', params);

        return rows;
        
    } catch (error) {
        throw error;        
    }finally{
        conn.releaseConnection();
    }
}


module.exports = {
    getLicences,
    getCollections,
    getLicencePath
}
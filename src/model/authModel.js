const { conn } = require('../config/conn')

const createUser = async (params) =>{
    try {
        const [rows] = await conn.query('INSERT INTO users (user_name, user_lastname, user_email, user_password) VALUES ? ', [params])
        
    }
    catch (error) {
         throw error;
    }
    finally{
        conn.releaseConnection();
    }
};

const userExists = async (params) => {
    try {
        const [rows] = await conn.query('SELECT * FROM users WHERE ? ', [params]);
    
        return rows;
    } 
    catch (error) {
        
    }
    finally{
        conn.releaseConnection();
    }
}

const getPassword = async (params) => {
    try {
        const [rows] = await conn.query('SELECT user_password FROM users WHERE ? ', [params]);
    
        return rows;
    } 
    catch (error) {
        
    }
    finally{
        conn.releaseConnection();
    }
}

module.exports = {
    createUser,
    userExists,
    getPassword
}
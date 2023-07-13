const { conn } = require('../config/conn')

const getAll = async () => {
    try{
        
        const [rows] = await conn.query('SELECT * FROM products');

        return rows;
    }
    catch (error) {
        throw error;
    }
    finally{
        conn.releaseConnection();
    }
};

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
};



const getAllView = async () => {
    try{
        
        const [rows] = await conn.query('SELECT * FROM products');

        return rows;
    }
    catch (error) {
        throw error;
    }
    finally{
        conn.releaseConnection();
    }
};

const getOneView = async (params) => {
    try{
        
        const [rows] = await conn.query('SELECT * FROM products WHERE ?', params);

        return rows;
    }
    catch (error) {
        throw error;
    }
    finally{
        conn.releaseConnection();
    }
};


const getRelated = async (params) => {
    try {
        const [rows] = await conn.query('SELECT * FROM products WHERE ?', params);

        return rows;
    } 
    catch (error) {
        throw error;
    } 
    finally{
        conn.releaseConnection();
    }
};

/* Dado que la cantidad de datos que se insertan en la tabla no es la misma que la cantidad de campos que hay (el item_id es autoincremental) hay que decirle qué campos y en qué orden se los vamos a pasar */

const create = async (params) =>{
    try {
        const [rows] = await conn.query('INSERT INTO items (category_id, licence_id, item_name, item_description, SKU, price, stock, discount, instalment_plan, img_front, img_back) VALUES ? ', [params])
        
    }
    catch (error) {
         throw error;
    }
    finally{
        conn.releaseConnection();
    }
};

const edit = async (params,id) =>{
    try {
        const [rows] = await conn.query('UPDATE items SET ? WHERE ?', [params, id]);
        const response = {
            isError: false,
            message: 'El item fue modificado exitosamente',
            status: rows
        };
    console.log(rows);
    return response;
    
    }
    catch (e) {
      const error = {
      isError: true,
      message: `No pudimos modificar el item seleccionado, error: ${e}`
    };
     
    return error;

    }
    finally{
        conn.releaseConnection();
    }
}

const deleteOne = async (params) => {
    try {
        const [rows] = await conn.query('DELETE FROM items WHERE ?', params);

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
    getAll,
    getOne,
    getAllView,
    getOneView,
    getRelated,
    create,
    edit,
    deleteOne
}
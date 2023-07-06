const { getOne } = require('../model/shopModel')

const shop = (req,res) => {
    res.render('./shop/shop', {
        view:{
            title:"Shop | Funkoshop"
        }
    })
};

const item = async (req,res) => {

    res.render('./shop/item', {
        view:{
            title:"Item | Funkoshop"
        }
    })
    
   /*  const id = req.params.id

    const item = await getOne({item_id : id});

    res.send(item);
 */
    /* res.send(`En teoría tendría que devolver el item id ${id}`) */
};

const add = (req,res) => {
    const id = req.params.id

    res.send(`En teoría tendría que agregar algo al item id ${id}`)
};

const cart = (req,res) => {
    res.send(`En teoría tendría que devolver la vista del carrito`)
};

const cart_post = (req,res) => {
    const id = req.params.id

     res.send(`En teoría tendría que enviar información al carrito`)
};

module.exports = {
    shop, 
    item,
    add,
    cart,
    cart_post
}
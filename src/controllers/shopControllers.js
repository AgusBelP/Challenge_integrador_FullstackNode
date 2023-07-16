const itemsServices = require('../services/itemsServices')

const shop = async (req,res) => {
    const items = await itemsServices.getItemsView();

    res.render('./shop/shop', {
        view:{
            title:"Shop | Funkoshop"
        },
        items
    })
};

const item = async (req,res) => {
    const id = req.params.id;

    const item = await itemsServices.getItemView(id);
    const licence = item[0].licence_name
    const related = await itemsServices.itemRelated(licence);
    
    res.render('./shop/items', {
        view:{
            title:"Item | Funkoshop"
        },
        item: item[0],
        related
    })
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
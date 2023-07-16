const itemsModel = require('../model/itemsModel')

const getItems = async () => {
    return await itemsModel.getAll()
};

const getItem = async (id) => {
    return await itemsModel.getOne({item_id : id})
};

const getItemsView = async () => {
    return await itemsModel.getAllView()
};

const getItemView = async (id) => {
    return await itemsModel.getOneView({item_id : id})
};

const itemRelated = async (licence_name) => {
    return await itemsModel.getRelated({licence_name : licence_name})
};

/* Ordeno el array de todos los items de forma aleatoria */
const getItemsRandom = async () => {
    const itemsRandom = await itemsModel.getAllView();
    itemsRandom.sort(() => Math.random() - 0.5) 
    /* itemsView.sort((a,b) => a.item_name.localeCompare(b.item_name)) */

    return itemsRandom;

};

const createItem = async (item, files) =>{
    const itemSchema = {
        category_id: item.categoria,
        licence_id: item.licencia,
        item_name: item.nombre_producto,
        item_description: item.descripcion_producto,
        SKU: item.sku,
        price: item.precio,
        stock: item.stock,
        discount: item.descuento,
        instalment_plan: item.cuotas,
        img_front: '/'+files.imagen_principal[0].filename,
        img_back: '/'+files.imagen_dorso[0].filename ,
    };

    return await itemsModel.create([Object.values(itemSchema)]);

}


const editItem = async (item,id) => {
     const itemSchema = {
        category_id: item.categoria,
        licence_id: item.licencia,
        item_name: item.nombre_producto,
        item_description: item.descripcion_producto,
        SKU: item.sku,
        price: item.precio,
        stock: item.stock,
        discount: item.descuento,
        instalment_plan: item.cuotas,
        img_front: '/imagen_front',
        img_back: '/imagen_back',
    };
    console.log(itemSchema);
    return await itemsModel.edit(itemSchema, {item_id : id});
};

const deleteItem = async (id) => {
    return await itemsModel.deleteOne({item_id : id})
};

module.exports = {
    getItems,
    getItem,
    getItemsView,
    getItemView,
    itemRelated,
    getItemsRandom,
    createItem,
    editItem,
    deleteItem
}
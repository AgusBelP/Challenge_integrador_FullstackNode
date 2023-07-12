const itemsModel = require('../model/itemsModel')

const getItems = async () => {
    return await itemsModel.getAll()
}

const getItemView = async (id) => {
    return await itemsModel.getOneView({item_id : id})
}

const getItem = async (id) => {
    return await itemsModel.getOne({item_id : id})
}

const itemRelated = async (licence_id) => {
    return await itemsModel.getRelated({licence_id : licence_id})
}

const createItem = async (item) =>{
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
}

module.exports = {
    getItems,
    getItemView,
    getItem,
    itemRelated,
    createItem,
    editItem,
    deleteItem
}
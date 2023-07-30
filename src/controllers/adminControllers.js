const itemsServices = require('../services/itemsServices');
const categoriesServices = require('../services/categoriesServices');
const licencesServices = require('../services/licencesServices');

const admin = async (req,res) => {
    const items = await itemsServices.getItems();

    res.render('./admin/admin', {
        view:{
            title:"Admin | Funkoshop"
        },
        items
    });
};

/* Para traer la vista de la pagina create traigo primero los datos de las tablas categories y licences, de esa forma al querer crear un item nuevo desde la base ya traigo los id de categoria y licencia y si se agregan a la base nuevas categorias o licencias el dropdown se completa automáticamente */

const create = async (req,res) => {
    const categories = await  categoriesServices.categories();
    const licences = await  licencesServices.licences()

    res.render('./admin/create', {
        view:{
            title:"Create | Funkoshop"
    },
    categories,
    licences
})
};

/* Para el create traigo los datos completos en el formulario, el id de categoria y licencia se trajo desde la base de datos al cargar la vista de la página*/

const create_post = async (req,res) => {
    const item = req.body;
    const files = req.files;
    await itemsServices.createItem(item,files);
    res.redirect('/admin/admin')
};

const edit = async (req,res) => {
    const id = req.params.id;

    const item = await itemsServices.getItemView(id);
    const categories = await  categoriesServices.categories();
    const licences = await  licencesServices.licences()

     res.render('./admin/edit', {
        view:{
            title:"Edit | Funkoshop"
        },
        item: item[0],
        licences,
        categories
    })
};

const edit_put = async (req,res) => {
    const item = req.body;
    const id = req.params.id;
    console.log(item);
    console.log(id);
    await itemsServices.editItem(item,id);
    
    res.redirect('/admin/admin')
};

const delete_id = async (req,res) => {
    const id = req.params.id
    
    await itemsServices.deleteItem(id);
    res.redirect('/admin/admin')
};

module.exports={
    admin,
    create,
    create_post,
    edit,
    edit_put,
    delete_id,
}
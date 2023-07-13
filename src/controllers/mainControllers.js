const licencesServices = require('../services/licencesServices');
const itemsServices = require('../services/itemsServices');

const main = async (req,res) => {

    const collections = await  licencesServices.collections();
    const random = await itemsServices.getItemsRandom();

    res.render('home', {
        view:{
            title: "Home | Funkoshop"
        },
        collections,
        random
    })
};

const contact = (req,res) => {
    res.send("Debería devolver la página de contact")
};

const about = (req,res) => {
    res.send("Debería devolver la página about")
};

const faqs = (req,res) => {
    res.send("Debería devolver la página de faqs")
};

module.exports={
    main,
    contact,
    about,
    faqs
}

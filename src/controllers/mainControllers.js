const main = (req,res) => {
    res.send("Debería devolver la página de home")
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
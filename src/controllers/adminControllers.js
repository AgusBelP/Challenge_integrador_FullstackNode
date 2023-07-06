const admin = (req,res) => {
    res.render('./admin/admin', {
        view:{
            title:"Admin | Funkoshop"
    }})
};

const create = (req,res) => {
    res.render('./admin/create', {
        view:{
            title:"Create | Funkoshop"
    }})
};

const create_post = (req,res) => {
    res.send("Debería enviar datos a la página de create")
};

const edit = (req,res) => {
     res.render('./admin/edit', {
        view:{
            title:"Edit | Funkoshop"
    }})
};

const edit_put = (req,res) => {
    const id = req.params.id
    
    res.send(`Debería modificar la página de edit para el id ${id}`)
};

const delete_id = (req,res) => {
    const id = req.params.id
    
    res.send(`Debería poder eliminar el id ${id}`)
};

const login = (req,res) => {
    res.send("Debería devolver la página de login")
};

const login_post = (req,res) => {
    res.send("Debería enviar datos a la página de login")
};

const register = (req,res) => {
    res.send("Debería devolver la página de register")
};

const register_post = (req,res) => {
    res.send("Debería enviar datos a la página de register")
};


module.exports={
    admin,
    create,
    create_post,
    edit,
    edit_put,
    delete_id,
    login,
    login_post,
    register,
    register_post
}
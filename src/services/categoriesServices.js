const categoriesModel = require('../model/categoriesModel')

const categories = async () =>{
    return await categoriesModel.getCategories()
}


module.exports ={
    categories
}
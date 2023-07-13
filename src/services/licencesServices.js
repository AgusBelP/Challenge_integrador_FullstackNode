const licencesModel = require('../model/licencesModel')

const licences = async () =>{
    return await licencesModel.getLicences()
}

const collections = async () =>{
    return await licencesModel.getCollections()
}


module.exports ={
    licences,
    collections
}
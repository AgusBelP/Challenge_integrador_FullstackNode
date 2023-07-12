const licencesModel = require('../model/licencesModel')

const licences = async () =>{
    return await licencesModel.getLicences()
}


module.exports ={
    licences
}
/* Configuración para guardar imagenes en el server */
/* El primer parámetro de la función de callback cb es qué hacer frente al error, luego definimos en dónde guardar las imágenes o cómo se llamará (depende del parámetro que se esté mirando) */
/* Tomando la licencia desde el req.body y las imágenes agrgeadas se suman a la carpeta respectiva */

const multer = require('multer');
const path = require('path');
const licencesModel = require('../model/licencesModel');

const storage = multer.diskStorage({
    destination: async (req, file, cb) => {
        const licence = req.body.licencia;
        const licence_item = await licencesModel.getLicencePath({licence_id : licence});
        const licence_path = licence_item[0].licence_file_path
        cb(null, path.resolve(__dirname, '../../public/img/' + `${licence_path}`))
    },
    filename: async (req, file, cb) => {
        cb(null, `${file.originalname}`)
    }
});

const uploadFile = multer({storage});

module.exports = { uploadFile };

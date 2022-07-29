const dotenv = require('dotenv')
const mongoose = require('mongoose')

dotenv.config()

// URI de la BD
const uri = process.env.MONGO_ATLAS

//conexion hacia la BD
mongoose.connect(uri, {useUnifiedTopology: true})
    .then(() => console.log('Conectado a la BD'))
    .catch((error) => console.log(error))

//exportación
module.exports = mongoose
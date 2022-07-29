const express = require('express')
const dotenv = require('dotenv')
const cors = require('cors')
const morgan = require('morgan')

const app = express()
const port = process.env.PORT || 5000

// variables de entorno
dotenv.config()

app.use(morgan('dev'))
app.use(express.json())
app.use(cors())

// base de datos
require('./database.js')

// rutas
app.use('/api/products', require('./routes/product'))
app.use('/api/users', require('./routes/user'))

app.listen(port, () => console.log('Ejecutando Api en el puerto', port))
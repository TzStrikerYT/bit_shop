const mongoose = require('mongoose')
const { Schema } = mongoose

//construir el schema o la coleccion
const productSchema = new Schema(
    {
        name: {type: String, required: true},
        price: {type: Number, required: true},
        description: {type: String, default: "El usuario no añadio ninguna descripción"},
        stock: {type: Number, required: true },
        image: {type: String, required: true},
    },
    {
        timestamps: true,
        versionKey: false,
    }
)
// exportar el modelo (Colección)
module.exports = mongoose.model("Product", productSchema)
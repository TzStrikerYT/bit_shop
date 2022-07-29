const express = require('express');
const router = express.Router();

//modelo de datos
const Product = require("../models/Product.model")

//rutas y las funciones

// get all products
router.get('/get-all', async (request, response) => {

    const products = await Product.find()
    return response.status(200).json({products})

})

// create an a product
router.post('/create', async (request, response) => {

    try {
        
        const productToSave = new Product(request.body)
        await productToSave.save()
        return response.status(201).json({status: "Producto creado con exito", productToSave})

    } catch (error) {
        console.log(error)
        return response.status(400).json({status: "Code error"})
    }
})

router.put("/update/:id", async (request, response) => {

    const id = request.params.id

    const updated = await Product.findByIdAndUpdate(id, {$set: request.body})

    return response.status(201).json({status: "Elemneto actualizado"})
})

router.delete('/delete/:id', async (request, response) => {

    const id = request.params.id
    await Product.findByIdAndDelete(id)
    response.status(200).json({status: "Producto eliminado"})

})

// exportar las rutas
module.exports = router
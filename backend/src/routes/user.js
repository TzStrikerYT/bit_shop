const express = require('express');
const router = express.Router()
const bcryptjs = require('bcryptjs')
const jwt = require('jsonwebtoken')

// modelo de users
const User = require('../models/User.model');
const { find } = require('../models/Product.model');
//rutas

router.post('/signup', async (request, response) => {

    try {

        const isExist = await User.find({email: request.body.email})

        console.log(isExist)

        if(isExist.length > 0){
            return response.status(400).json({status: "El correo ya fue registrado"})
        }

        //encriptar la contraseña
        const hash = await bcryptjs.hash(request.body.password, 10);

        // crear el usuario
        const newUser = new User({...request.body, password: hash})
        newUser.save()

        response.status(201).json({status: "Usuario creado correctamente", newUser})

    } catch (error) {
        console.log(error)
        return response.status(400).json({status: "Code Error"})
    }

})

router.post('/login', async (request, response) => {

    try {
        
        // revisar si el user existe

        const user = await User.findOne({email: request.body.email})

        // revisar si la contraseña es correcta
        if (user) {
            const isPass = await bcryptjs.compare(request.body.password, user.password)

            if (isPass) {

                let data = user._doc //transformar a un objeto plano JSON
                delete data.password

                const token = jwt.sign(data, "llaveSecreta")

                return response.status(200).json({token})

            }

            return response.status(400).json({status: "Contraseña"})

        }

        return response.status(400).json({status: "Usuario no existe"})

    } catch (error) {
        console.log(error)
        response.status(400).json({status: "Code Error"})
    }



})


// exportariamos las rutas
module.exports = router
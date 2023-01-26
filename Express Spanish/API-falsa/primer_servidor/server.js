// faker api
const {faker} = require ('@faker-js/faker')

const Usuario =()=>{
    return{
        _id:faker.datatype.uuid(),
        nombre:faker.name.firstName(),
        apellido:faker.name.lastName(),
        email:faker.internet.email(),
        password: faker.internet.password(),
        telefono:faker.phone.number(),

    }
}
const empresa =()=>{
    return{
        _id:faker.datatype.uuid(),
        nombre:faker.name.firstName(),
        direccion:
        {
            calle:faker.address.street(),
            ciudad:faker.address.city(),
            departamento:faker.address.state(),
            codigo_postal:faker.address.zipCode(),
            pais:faker.address.country(),
            
        }

    }
}

// llama al recurso de Express y el puerto 

const express = require ('express')
const app =  express()
const PORT = 8000;

app.listen(PORT , ()=>{
    console.log(`Server Corriendo  ${PORT}`)
})


//middleware
app.use(express.json())
app.use(express.urlencoded({extended:true}))



//Creacion de Ruta de Lectura --Get

app.get ('/api/user/new',(req, res)=>{
    const usuarios = Usuario()
    res.json({usuario:usuarios})
    
})


app.get ('/api/companies/new',(req, res)=>{
    const empresas = empresa()
    res.json({empresa: empresas})
    
})

app.get ('/api/user/company',(req, res)=>{
    const empresas = empresa()
    const usuarios = Usuario()

    res.json({usuario:usuarios,empresa: empresas})
    
})


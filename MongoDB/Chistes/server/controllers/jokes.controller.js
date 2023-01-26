// aqui se llama el modelo para armar los controllers
const chiste = require(`../models/jokes.model`);

//enlista la lista de chistes vigentes 

module.exports.enlistarChiste=(req, res) =>{
    chiste.find(req.body)
    .then((todoloschistes) =>res.json(
        {chiste : todoloschistes}))
    .catch( err => res.json ({ message: "Algo salio mal en el metodo" , error : err }));

};
//Filtrar por ID para poder sacar los datos
module.exports.seleccionarChiste=(req, res)=>{
    chiste.findOne({_id:req.params.id})
    .then((filtrarChistes) => res.json ({chiste : filtrarChistes}))
    .catch( err => res.json({message:"Algo salio mal en el metodo de filtar por id", error : err }));
};

// Crear Chiste Nuevo

module.exports.crearChiste = (req, res)=>{
    chiste.create(req.body)
    .then((agregarChiste) => res.json ({chiste : agregarChiste}))
    .catch( err => res.json({message:"Algo salio mal en el metodo de crear", error : err }));
};

// Actualizar el chiste en la Api

module.exports.actualizarChiste = (req, res) => {
    chiste.findOneAndUpdate({_id:req.params.id},req.body,{ new: true })
    .then((actualizaChistes) => res.json ({ chiste : actualizaChistes }))
    .catch( err => res.json({message:"Algo salio mal en el metodo de actualizacion",error : err}));
};

// eliminar Chiste

module.exports.borrarChiste=(req, res)=>{
    chiste.deleteOne({_id:req.params.id})
    .then((result) => res.json ({result:result}))
    .catch( err => res.json({message:"Algo salio mal en el metodo borrado",error : err}));
};

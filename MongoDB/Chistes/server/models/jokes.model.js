const mongoose = require("mongoose");

const jokeschema = new mongoose.Schema({
    setup: String ,
    punchline:String,
    descripcion: String,

},{timeStamps:true,versionkey:false});

const Broma = mongoose.model("Broma",jokeschema);

module.exports = Broma;
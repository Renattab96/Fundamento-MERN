const mongoose = require("mongoose");

mongoose.set('strictQuery', true)

mongoose.connect("mongodb://127.0.0.1:27017/bromas", {
	useNewUrlParser: true,
	useUnifiedTopology: true,
})
	.then(() => console.log("Conexion Exitosa, Adelante!!!"))
	.catch(err => console.log("Algo salio mal en la configuracion de Mongooose,config Veriificar", err));
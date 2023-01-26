const express = require("express");
const app = express();


require("./server/config/mongoose.config");
app.use(express.json(),express.urlencoded({extended:true}));


const todasmiRutas = require("./server/routes/jokes.routes");
todasmiRutas(app);

app.listen( 8080,() => console.log(`Estamos en el puerto 8080`));

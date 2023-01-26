const usoControladores = require(`../controllers/jokes.controller`);

module.exports = app => {
    app.get("/api/chiste/",usoControladores.enlistarChiste);
    app.get("/api/chiste/:id",usoControladores.seleccionarChiste);
    app.put("/api/chiste/update/:id",usoControladores.crearChiste);
    app.post("/api/chiste/new/",usoControladores.actualizarChiste);
    app.delete("/api/chiste/delete/:id",usoControladores.borrarChiste);

}
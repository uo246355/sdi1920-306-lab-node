module.exports = function(app, swig, gestorBD) {
    app.post("/comentarios/:cancion_id", function(req,res){
        if ( req.session.usuario == null){
            res.send("No se puede crear un comentario sin estar registrado");
            return;
        }
        let comentario = {
            autor: req.session.usuario,
            texto : req.body.texto,
            cancion_id: gestorBD.mongo.ObjectID(req.cancion_id)
        }

        // Conectarse
        gestorBD.insertarComentario(comentario, function(id) {
            if (id == null){
                res.send("Error al insertar el comentario");
            } else {
                res.send('Comentario Insertado ' + id);
            }
        });
    });
};
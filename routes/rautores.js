module.exports = function(app, swig) {
    app.get("/autores/agregar", function(req, res)
    {
        let roles = ["guitarrista","batería","cantante","bajista","teclista"];

        let respuesta = swig.renderFile('views/autores-agregar.html', {

            roles : roles
        });
        res.send(respuesta);
    });


    app.get("/autores", function(req, res) {
        let autores = [{"nombre" : "Janis Joplin", "rol" : "cantante", "grupo" : "Solista"},
            {"nombre" : "Kurt Cobain", "rol" : "cantante", "grupo" : "Nirvana"},
            {"nombre" : "Jim Morrison", "rol" : "cantante", "grupo" : "The Doors"}];

        let respuesta = swig.renderFile('views/autores.html', {
            autores : autores
        });

        res.send(respuesta);
    });


    app.get("/autores/filtrar/:rol", function(req, res)
    {

        let autores2 = [{"nombre" : "Janis Joplin", "rol" : "cantante", "grupo" : "Solista"},
            {"nombre" : "Kurt Cobain", "rol" : "cantante", "grupo" : "Nirvana"},
            {"nombre" : "Jim Morrison", "rol" : "cantante", "grupo" : "The Doors"}];

        let autores = [];

        for(var i=0;i<autores2.length;i++)
        {
            if(autores2.rol == req.rol)
            {
                autores[i] = autores2[i];
            }
        }

        //let roles = ["guitarrista","batería","cantante","bajista","teclista"];

        let respuesta = swig.renderFile('views/filtrar.html', {

            autores : autores
        });
        res.send(respuesta);
    });


    app.get("/autores", function(req, res) {
        let autores = [{"nombre" : "Janis Joplin", "rol" : "cantante", "grupo" : "Solista"},
            {"nombre" : "Kurt Cobain", "rol" : "cantante", "grupo" : "Nirvana"},
            {"nombre" : "Jim Morrison", "rol" : "cantante", "grupo" : "The Doors"}];

        let respuesta = swig.renderFile('views/autores.html', {
            autores : autores
        });

        res.send(respuesta);
    });

    app.post("/autores", function(req,res){


        let respuesta="";

        if(req.body.nombre!=null && req.body.nombre  != "") {
            respuesta = "Autor agregado:" + req.body.nombre + "<br>";
        }
        else
        {
            respuesta = "Autor no se ha enviado en la petición" + "<br>";
        }

        if(req.body.rol!=null &&  req.body.rol != "") {
            respuesta+= "rol :" + req.body.rol + "<br>";
        }
        else
        {
            respuesta+= "Rol no se ha enviado en la petición" + "<br>";
        }

        if(req.body.grupo!=null && req.body.grupo   != "") {
            respuesta+= " grupo: " + req.body.grupo;
        }
        else
        {
            respuesta+= "Grupo no se ha enviado en la petición";
        }

        res.send(respuesta);
    });

    app.get('/autores*',function(req,res){
        res.redirect('/autores');
    });
};
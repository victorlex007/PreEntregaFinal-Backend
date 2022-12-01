import crypto from "crypto"
import contenedor from "./contenedor"

const cosas = new contenedor

export function crear(datos){
    datos.id = crypto.randomUUID()
    cosas.guardarNuevo(datos)
    return datos
}

const express = require("express");
const {randomUUID} = require ("crypto");


//_____________

function controladorGetCosas({req}, res){
const resultado = cosas
  res.json(resultado)
}


function controladorPostCosas(req, res){
    const cosaNueva = req.body
    cosaNueva.id = randomUUID()
    cosas.push(req.body)
    res.status(201)
    res.json(req.body)
}

function controladorDeleteCosasSegunId({ params:{id}}, res){
    const indexBuscado=cosas.findIndex(c => c.id===id)
    if (indexBuscado === -1){
        res.status(404)
        res.json({mensaje:`no se encontro el id (${id})`})
    }else{
        const borrados = cosas.splice(indexBuscado, 1)
          res.json(borrados[0])
    }

    function controladorPostCosasSegunId({ body, params:{id}}, res){
        const indexBuscado=cosas.findIndex(c => c.id===id)
        if (indexBuscado === -1){
            res.status(404)
            res.json({mensaje:`no se encontro el id (${id})`})
        }else{
            cosas[indexBuscado]= body
              res.json(body)  
        }
    
    }
    

function controladorDeleteAll({ params:{id}}, res){
[]
    }

}
//api rest
const routerApi =express.Router()
app.post("/cosas", controladorPostCosas)
app.delete("/:id_cart/products/:id_prod", controladorDeleteCosasSegunId)
app.post("/id_cart/products", controladorPostCosasSegunId);
app.get("/:id_cart/products", controladorGetCosas)
app.delete("/:id_carrito", controladorDeleteAll)

exports.routerApi = routerApi;
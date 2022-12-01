const express = require("express");
const {routerCosas} = require ("./rutas_controladores.js");

//_____________

const app = express()


//middleware
app.use(express.json())
app.use(express.urlencoded({extended:true}))

let esAdmin = false

function soloParaAdmins(req, res, next){
    if (esAdmin){
        next()
    }
    else{
        res.sendStatus(403)
    }
}

app.post("/login", (req, res)=>{
    esAdmin= true
    res.sendStatus(200)
})

app.post("/logout", (req, res) =>{
    esAdmin = false
    res.sendStatus(200)
})

app.get("/publico", (req, res) =>{
    res.send ("soy un endpoint publico")
})

app.post("/privado", soloParaAdmins, (req, res) =>{
    res.send ("soy un endpoint privado")
})


//rutas
app.use("/api/cosas", routerCosas) 


app.all("*", (req, res)=>{
    res.status(404).json(/*no implementada*/)
})

const server = app.listen(8080)

//const puerto = process.env.PORT ?? 8080 para despliege glitch
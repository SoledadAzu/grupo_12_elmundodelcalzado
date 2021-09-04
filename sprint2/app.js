const express = require('express')
const app = express()
const port = 3030;
const user = require('./router/user')
const main = require('./router/main')
const productDetail = require('./router/productDetail')
const carritoDeCompras = require('./router/carritoDeCompras')
const comprar = require('./router/comprar')
const defensaAlConsumidor = require('./router/defensaAlConsumidor')
const envios = require('./router/envios')
const garantias = require('./router/garantias')
const privacidad = require('./router/privacidad')

app.use(express.static('public'))

app.use('/',user)
app.use('/',main)
app.use('/',productDetail)
app.use('/',carritoDeCompras)
app.use('/',comprar)
app.use('/',defensaAlConsumidor)
app.use('/',envios)
app.use('/',garantias)
app.use('/',privacidad)


app.listen(port, ()=> console.log('servidor levantado ' + port))


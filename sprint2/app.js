const express = require('express')
const app = express()
const port = 3030;
const user = require('./router/user')
const main = require('./router/main')
const productDetail = require('./router/productDetail')
const productCart = require('./router/productCart')
const carritoDeCompras = require('./router/carritoDeCompras')
const comprar = require('./router/comprar')
const defensaAlConsumidor = require('./router/defensaAlConsumidor')
const envios = require('./router/envios')

app.use(express.static('public'))

app.use('/',user)
app.use('/',main)
app.use('/',productDetail)
app.use('/',productCart)
app.use('/',carritoDeCompras)
app.use('/',comprar)
app.use('/',defensaAlConsumidor)
app.use('/',envios)


app.listen(port, ()=> console.log('servidor levantado ' + port))


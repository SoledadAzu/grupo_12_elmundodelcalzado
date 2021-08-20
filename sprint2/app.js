const express = require('express')
const app = express()
const port = 3030;
const user = require('./router/user')
const main = require('./router/main')

app.use(express.static('public'))

app.use('/',user)
app.use('/',main)

app.listen(port, ()=> console.log('servidor levantado' + port))


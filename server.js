const express	    = require('express')
const app	        = express()
const bodyParser    = require('body-parser')
var mongoose        = require('mongoose')

const PORT = process.env.PORT || 5000
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

require('./database/init')(mongoose)
require('./app/app.js')(app)

app.listen(PORT, () => { console.log('Servidor iniciado') })
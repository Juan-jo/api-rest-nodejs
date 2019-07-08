const express	= require('express')
const app	    = express()

const PORT = process.env.PORT || 5000

require('./app/app.js')(app)

app.listen(PORT, function(){
    console.log("Hola")
})


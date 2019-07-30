function get(model, res){
    model.find({}, function(err, data){
        if(err) res.status(500).json({message: 'Error al conectarse al servidor'})
        
        else{
            var r = []
            data.forEach(function(item) {
               r.push(item)
            })
            res.status(200).send(r)
        }
    })
}

module.exports = {
    get:get
}
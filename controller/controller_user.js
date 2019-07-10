var users = [
    {id: 1, nombre: 'Juan Jose', num_eployed: 20123, puesto:'SQL Dev', perfil: 'Ing'}, 
    {id: 2, nombre: 'Eduardo', num_eployed: 24123, puesto:'Dev c#', perfil: 'Ing'},
    {id: 3, nombre: 'Felix Hdez', num_eployed: 20933, puesto:'Sap Cons', perfil: 'lic'}, 
    {id: 4, nombre: 'Ronaldo Nazario', num_eployed: 20123, puesto:'DBA', perfil: 'Ing'},
    {id: 5, nombre: 'Leonel Messi', num_eployed: 28373, puesto:'Dev Python', perfil: 'Doc'},
    {id: 6, nombre: 'Zinedin', num_eployed: 22333, puesto:'', perfil: ''},
    {id: 7, nombre: 'Jeol Vega', num_eployed: 97675, puesto:'', perfil: ''},
    {id: 8, nombre: 'Perla ', num_eployed: 20237, puesto:'', perfil: ''},
    {id: 9, nombre: 'Alfahir', num_eployed: 20222, puesto:'', perfil: ''}]

function create(res, req) {

}

function update(res, req) {

}

function get(res, req) {

}

function find(res, req) {
    console.log(req.params)
    var id = req.params.id
    let user = users.find(el => el.id == id)

    if(user == undefined)
	    res.status(501).send({error: 'Usuario no encontrado'})
    else
	    res.status(200).send(user)
}

function deleter(res, req) {

}

module.exports = {
    create: create,
    update: update,
    get: get,
    find: find,
    delete: deleter
}
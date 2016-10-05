var mongoose = require('mongoose');
var schema = mongoose.Schema;






var Modelo = schema({
	nombre: String,
	correo: String,
	perfil: String,

	
});

var Nombre = mongoose.model('Nombre',Modelo);
module.exports = Nombre;
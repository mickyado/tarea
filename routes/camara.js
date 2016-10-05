var express = require('express');
var router = express.Router();

var Modelo = require('../models/modelo');

   
   

router.get('/',function(reg,res,next){
	Modelo.find({},function(err1,data){
		if (err1)
		console.log(err1);
		res.json(data); 
	});
});

router.post('/',function(req,res,next){
	Modelo.create(req.body,function(err2,data){
		var obj = req.body;

		obj.nombre = String(req.body.nombre);
		obj.correo = String(req.body.correo);
		obj.perfil = String(req.body.perfil);
		
		res.json(data); 
	});
});


router.put('/:id',function(req,res,next){
	var id = req.params.id;
	Modelo.findById(id,function(err,data){
		if (err) 
			console.log(err);
		data.nombre=req.body.nombre;
		
		Modelo.update(id,data,function(err1,newdata){
			if (err1)
				console.log(err1);
			res.json(newdata);
		});
	});
});



router.delete('/',function(req,res,next){
	Modelo.remove(req.body,function(err2,data){
		var obj = req.body;		

		obj.nombre = String(req.body.nombre);
		

		
		res.json(data); 
	});
});


module.exports = router;
var express = require('express'); // importando a lib express
var app = express();
var bodyParser = require('body-parser');

app.use(express.static('public'));
app.use(bodyParser.json());  //o body parser recebe um json e transforma em objeto para o servidor

app.get('/', function(req, res){
	res.redirect('/');

});

app.listen(3000, function(){
	console.log('Servidor rodando na porta 3000!');
});

const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const bodyParser = require('body-parser')
const routes = require('./routes')
const app = express()
const path = require('path')

//conexão com o banco de dados
mongoose.connect('mongodb+srv://adao:adao@cluster0-tbpz2.mongodb.net/CasdastroTarefas?retryWrites=true&w=majority',{
	useNewUrlParser:true,
	useUnifiedTopology:true
})
//middlwares globais
app.use(cors())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use('/files',express.static(path.resolve(__dirname,'..','uploads')))

//rotas
app.use(routes)

app.listen(3001,()=>{
	console.log('listen on port 3001');
})
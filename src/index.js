//Inicializaciones
const express = require('express');
const app = express();
const path = require('path');
const morgan = require('morgan');


//configuraciones
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

//middlewares
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));

//Variables Globales

//routes
app.use(require('./routes/router'));

//archivos estaticos
app.use(express.static(path.join(__dirname,'public')));

//Escuchando el servidor
app.listen(app.get('port'), () => {
    console.log(`Servidor escuchando en el puerto ${app.get('port')}`);
});
const express = require('express');
require('dotenv').config();
const hbs =  require('hbs');

const app = express();
const port = process.env.PORT;

hbs.registerPartials(__dirname + '/views/partials');
app.use(express.static('public'));

//ROUTES:
//HOME
app.get('/', (req, res)=>{
    res.render(__dirname + '/views/index.hbs');
});

app.get('/index', (req, res)=>{
    res.render(__dirname + '/views/index.hbs');
});


app.get('/index.html', (req, res)=>{
    res.render(__dirname + '/views/index.hbs');
});

//about
app.get('/nosotros', (req, res)=>{
    res.render(__dirname + '/views/nosotros.hbs');
});


app.get('/nosotros.html', (req, res)=>{
    res.render(__dirname + '/views/nosotros.hbs');
});

//projects
app.get('/proyectos', (req, res)=>{
    res.render(__dirname + '/views/proyectos.hbs');
});


app.get('/Proyectos.html', (req, res)=>{
    res.render(__dirname + '/views/proyectos.hbs');
});


//detail-project
app.get('/detalle-proyecto', (req, res)=>{
    res.render(__dirname + '/views/detalle-proyecto.hbs');
});


app.get('/detalle-proyecto.html', (req, res)=>{
    res.render(__dirname + '/views/detalle-proyecto.hbs');
});

app.listen(port, ()=>{
    console.log("listening the port: "+ port);
})
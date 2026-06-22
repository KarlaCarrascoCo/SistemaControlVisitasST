const express = require('express');
const cors = require('cors');

const db = require('./database/conexion');
const visitanteRoutes = require('./routes/visitanteRoutes');
const authRoutes = require('./routes/authRoutes');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Archivos estáticos (CSS, imágenes, JS)
app.use(express.static('public'));

// Rutas API
app.use('/api', visitanteRoutes);
app.use('/api', authRoutes);

// Página principal
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/views/visitantes.html');
});
app.get('/login.html', (req, res) => {

    res.sendFile(
        __dirname + '/views/login.html'
    );
});

// Página listado
app.get('/listadoVisitantes.html', (req, res) => {
    res.sendFile(__dirname + '/views/listadoVisitantes.html');
});

app.get('/reportes.html', (req, res) => {
    res.sendFile(__dirname + '/views/reportes.html');
});

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Servidor ejecutándose en puerto ${PORT}`);
});
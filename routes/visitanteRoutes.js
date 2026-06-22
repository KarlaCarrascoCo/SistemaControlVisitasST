const express = require('express');

const router = express.Router();

const {
    crearVisitante,
    listarVisitantes,
    eliminarVisitante,
    obtenerVisitante,
    actualizarVisitante,
    reporteVisitas
}
=
require('../controllers/visitanteController');

router.post('/visitantes', crearVisitante);

router.get('/visitantes', listarVisitantes);

router.get('/visitantes/:id', obtenerVisitante);

router.put('/visitantes/:id', actualizarVisitante);

router.delete('/visitantes/:id', eliminarVisitante);

router.get('/reportes',reporteVisitas);

module.exports = router;
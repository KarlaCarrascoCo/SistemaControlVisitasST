const db = require('../database/conexion');

// =========================
// CREAR VISITANTE
// =========================

const crearVisitante = (req, res) => {

    const {
        tipo_documento,
        numero_documento,
        nombre_completo,
        correo,
        telefono,
        fecha_visita,
        hora_visita,
        viene_vehiculo,
        marca,
        modelo,
        color,
        patente,
        asistio,
        id_usuario_registra,
        id_unidad
    } = req.body;

    // VALIDAR DOCUMENTO DUPLICADO

    const sqlValidar = `
        SELECT id_visitante
        FROM Visitante
        WHERE numero_documento = ?
    `;

    db.query(
        sqlValidar,
        [numero_documento],
        (err, resultado) => {

            if (err) {

                console.log(err);

                return res.status(500).json({
                    mensaje: 'Error al validar documento'
                });
            }

            if (resultado.length > 0) {

                return res.status(400).json({
                    mensaje: 'El documento ya se encuentra registrado'
                });
            }

            // INSERTAR VISITANTE

            const sql = `
                INSERT INTO Visitante
                (
                    tipo_documento,
                    numero_documento,
                    nombre_completo,
                    correo,
                    telefono,
                    fecha_visita,
                    hora_visita,
                    viene_vehiculo,
                    marca,
                    modelo,
                    color,
                    patente,
                    asistio,
                    id_usuario_registra,
                    id_unidad
                )
                VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
            `;

            db.query(
                sql,
                [
                    tipo_documento,
                    numero_documento,
                    nombre_completo,
                    correo,
                    telefono,
                    fecha_visita,
                    hora_visita,
                    viene_vehiculo,
                    marca,
                    modelo,
                    color,
                    patente,
                    asistio,
                    id_usuario_registra,
                    id_unidad
                ],
                (err) => {

                    if (err) {

                        console.log(err);

                        return res.status(500).json({
                            mensaje: 'Error al guardar visita'
                        });
                    }

                    res.status(201).json({
                        mensaje: 'Visita registrada correctamente'
                    });
                }
            );
        }
    );
};

// =========================
// LISTAR VISITANTES
// =========================

const listarVisitantes = (req, res) => {

    const sql = `
        SELECT *
        FROM Visitante
        ORDER BY id_visitante DESC
    `;

    db.query(sql, (err, results) => {

        if (err) {

            console.log(err);

            return res.status(500).json({
                mensaje: 'Error al obtener visitas'
            });
        }

        res.json(results);
    });
};

// =========================
// ELIMINAR VISITANTE
// =========================

const eliminarVisitante = (req, res) => {

    const id = req.params.id;

    const sql = `
        DELETE FROM Visitante
        WHERE id_visitante = ?
    `;

    db.query(sql, [id], (err) => {

        if (err) {

            console.log(err);

            return res.status(500).json({
                mensaje: 'Error al eliminar visita'
            });
        }

        res.json({
            mensaje: 'Visita eliminada correctamente'
        });
    });
};

// =========================
// OBTENER VISITANTE
// =========================

const obtenerVisitante = (req, res) => {

    const id = req.params.id;

    const sql = `
        SELECT *
        FROM Visitante
        WHERE id_visitante = ?
    `;

    db.query(sql, [id], (err, results) => {

        if (err) {

            console.log(err);

            return res.status(500).json({
                mensaje: 'Error al obtener visita'
            });
        }

        res.json(results[0]);
    });
};

// =========================
// ACTUALIZAR VISITANTE
// =========================

const actualizarVisitante = (req, res) => {

    const id = req.params.id;

    const {
        tipo_documento,
        numero_documento,
        nombre_completo,
        correo,
        telefono,
        fecha_visita,
        hora_visita,
        viene_vehiculo,
        marca,
        modelo,
        color,
        patente,
        asistio,
        id_usuario_registra,
        id_unidad
    } = req.body;

    const sql = `
       UPDATE Visitante
        SET
            tipo_documento = ?,
            numero_documento = ?,
            nombre_completo = ?,
            correo = ?,
            telefono = ?,
            fecha_visita = ?,
            hora_visita = ?,
            viene_vehiculo = ?,
            marca = ?,
            modelo = ?,
            color = ?,
            patente = ?,
            asistio = ?,
            id_usuario_registra = ?,
            id_unidad = ?
        WHERE id_visitante = ?
    `;

    db.query(
        sql,
        [
    tipo_documento,
    numero_documento,
    nombre_completo,
    correo,
    telefono,
    fecha_visita,
    hora_visita,
    viene_vehiculo,
    marca,
    modelo,
    color,
    patente,
    asistio,
    id_usuario_registra,
    id_unidad,
    id
],
        (err) => {

            if (err) {

                console.log(err);

                return res.status(500).json({
                    mensaje: 'Error al actualizar visita'
                });
            }

            res.json({
                mensaje: 'Visita actualizada correctamente'
            });
        }
    );
};

// =========================
// REPORTE DE VISITAS
// =========================

const reporteVisitas = (req, res) => {

    const {
        fecha,
        unidad,
        asistio
    } = req.query;

    let sql = `
        SELECT *
        FROM Visitante
        WHERE 1 = 1
    `;

    let parametros = [];

    if (fecha) {

        sql += `
            AND fecha_visita = ?
        `;

        parametros.push(fecha);
    }

    if (unidad) {

        sql += `
            AND id_unidad = ?
        `;

        parametros.push(unidad);
    }

    if (asistio !== undefined && asistio !== '') {

        sql += `
            AND asistio = ?
        `;

        parametros.push(asistio);
    }

    sql += `
        ORDER BY fecha_visita DESC,
                 hora_visita DESC
    `;

    db.query(
        sql,
        parametros,
        (err, results) => {

            if (err) {

                console.log(err);

                return res.status(500).json({
                    mensaje: 'Error al generar reporte'
                });
            }

            res.json(results);
        }
    );
};

module.exports = {
    crearVisitante,
    listarVisitantes,
    eliminarVisitante,
    obtenerVisitante,
    actualizarVisitante,
    reporteVisitas
};
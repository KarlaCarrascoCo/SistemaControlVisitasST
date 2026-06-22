const db = require('../database/conexion');

const login = (req, res) => {

    const {
        correo,
        password
    } = req.body;

    const sql = `
        SELECT
            u.id_usuario,
            u.nombre,
            u.apellido,
            u.correo,
            u.id_rol,
            u.id_unidad,
            r.nombre_rol,
            un.nombre_unidad
        FROM Usuario u
        INNER JOIN Rol r
            ON u.id_rol = r.id_rol
        INNER JOIN Unidad un
            ON u.id_unidad = un.id_unidad
        WHERE u.correo = ?
        AND u.password = ?
    `;

    db.query(
        sql,
        [correo, password],
        (err, results) => {

            if (err) {

                console.log(err);

                return res.status(500).json({
                    mensaje: 'Error en el servidor'
                });
            }

            if (results.length === 0) {

                return res.status(401).json({
                    mensaje: 'Correo o contraseña incorrectos'
                });
            }

            res.json({
                mensaje: 'Login correcto',
                usuario: results[0]
            });
        }
    );
};

module.exports = {
    login
};
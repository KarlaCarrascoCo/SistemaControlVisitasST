# SistemaControlVisitasST

## Descripción

Sistema web desarrollado para la gestión y control de visitas en dependencias de Santo Tomás.

La aplicación permite registrar visitantes, controlar accesos mediante roles de usuario, administrar información vehicular, generar reportes y mantener un historial completo de las visitas registradas.

El sistema fue desarrollado utilizando una arquitectura cliente-servidor con Node.js, Express y MySQL, implementando buenas prácticas de desarrollo web, validaciones en formularios, control de versiones mediante Git y documentación técnica mediante GitHub.

---

# Objetivo del Proyecto

Desarrollar una aplicación web que permita gestionar de manera eficiente el registro y control de visitas institucionales, facilitando el acceso a la información por parte de administradores y usuarios autorizados.

---

# Tecnologías Utilizadas

## FrontEnd

- HTML5
- CSS3
- Bootstrap 5
- JavaScript

## BackEnd

- Node.js
- Express.js

## Base de Datos

- MySQL
- MySQL2

## Herramientas de Desarrollo

- Visual Studio Code
- Git
- GitHub
- Postman

---

# Arquitectura del Proyecto

SistemaControlVisitasST

├── controllers/

├── database/

├── public/

│ ├── css/

│ └── images/

├── routes/

├── views/

├── server.js

├── package.json

└── README.md

### Descripción de Carpetas

**controllers/**
Contiene la lógica de negocio del sistema y las operaciones CRUD.

**database/**
Contiene la configuración y conexión con MySQL.

**public/**
Almacena archivos estáticos como hojas de estilo e imágenes.

**routes/**
Define las rutas y endpoints de la API.

**views/**
Contiene las interfaces HTML del sistema.

---

# Funcionalidades Implementadas

## Gestión de Usuarios

- Inicio de sesión.
- Control de acceso por roles.
- Persistencia de sesión mediante LocalStorage.

## Gestión de Visitas

- Registrar visitantes.
- Editar visitantes.
- Eliminar visitantes.
- Visualizar listado completo.
- Registrar asistencia.

## Gestión Vehicular

- Registro de vehículos.
- Registro de patente.
- Registro de marca.
- Registro de modelo.
- Registro de color.

## Reportes

- Reporte por fecha.
- Reporte por unidad.
- Reporte de asistencia.
- Reporte de inasistencia.

## Validaciones

- Validación de RUT chileno mediante expresión regular.
- Validación de pasaporte.
- Validación de correo electrónico.
- Validación de campos obligatorios.
- Validación de datos vehiculares.
- Prevención de registros duplicados.

---

# Roles Implementados

## Administrador

Permite:

- Registrar visitas.
- Editar visitas.
- Eliminar visitas.
- Ver reportes generales.
- Filtrar por fecha y unidad.

Unidad asignada:
Administración.

---

## Usuario

Permite:

- Registrar visitas.
- Consultar reportes asociados a su unidad.

Unidad asignada:
Comunicaciones.

---

## Guardia

Permite:

- Registrar visitas.
- Consultar listado de visitantes.

Unidad asignada:
Seguridad.

---

# Instalación del Proyecto

## Clonar repositorio

```bash
git clone https://github.com/KarlaCarrascoCo/SistemaControlVisitasST.git
```

## Ingresar al proyecto

```bash
cd SistemaControlVisitasST
```

## Instalar dependencias

```bash
npm install
```

## Configurar Base de Datos

Crear la base de datos:

```sql
CREATE DATABASE sistemaasistenciast;
```

Importar posteriormente el script SQL correspondiente.

---

# Ejecución

Iniciar servidor:

```bash
node server.js
```

o

```bash
npm start
```

Servidor disponible en:

```text
http://localhost:3000
```

---

# API REST

## Obtener visitantes

```http
GET /api/visitantes
```

## Obtener visitante por ID

```http
GET /api/visitantes/:id
```

## Registrar visitante

```http
POST /api/visitantes
```

## Actualizar visitante

```http
PUT /api/visitantes/:id
```

## Eliminar visitante

```http
DELETE /api/visitantes/:id
```

## Iniciar sesión

```http
POST /api/login
```

---

# Consumo de API

La comunicación entre FrontEnd y BackEnd se realiza mediante Fetch API.

Ejemplo:

```javascript
const respuesta = await fetch(
    'http://localhost:3000/api/visitantes',
    {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(visitante)
    }
);
```

---

# Pruebas Realizadas

Se realizaron pruebas utilizando Postman para validar el correcto funcionamiento de los endpoints.

Pruebas ejecutadas:

- GET de visitantes.
- POST de visitantes.
- PUT de visitantes.
- DELETE de visitantes.
- Login de usuarios.
- Reportes filtrados.

Todas las pruebas retornaron respuestas JSON válidas y códigos HTTP correspondientes.

---

# Control de Versiones

Para el desarrollo del proyecto se utilizó Git y GitHub.

Commits registrados:

- Estructura inicial del proyecto.
- Implementación CRUD de visitantes.
- Implementación de login y control de roles.
- Implementación de reportes y filtros.
- Versión final para entrega.

Repositorio GitHub:

https://github.com/KarlaCarrascoCo/SistemaControlVisitasST

---

# Evidencias

Las evidencias incluidas en la documentación consideran:

- Estructura del proyecto.
- Formulario principal.
- Validaciones implementadas.
- Código JavaScript.
- Consumo de API mediante Fetch.
- Pruebas realizadas en Postman.
- Historial de commits en GitHub.
- Reportes generados por el sistema.

---

# Conclusión

Durante el desarrollo de este proyecto se aplicaron los conocimientos adquiridos en la asignatura de Programación Web, integrando tecnologías de FrontEnd, BackEnd y Base de Datos para construir una solución funcional y escalable.

La aplicación implementa una arquitectura organizada, validaciones de datos, consumo de API mediante Fetch, persistencia de información en MySQL y control de acceso mediante roles de usuario.

Además, se utilizaron herramientas profesionales como Git, GitHub y Postman para el control de versiones, documentación técnica y pruebas de la API, permitiendo mantener un desarrollo ordenado y alineado con las buenas prácticas de la industria del software.

Los resultados obtenidos cumplen los requerimientos planteados para el sistema de control de visitas, proporcionando una solución eficiente para el registro, administración y consulta de información de visitantes dentro de una institución.

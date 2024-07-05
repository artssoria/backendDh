
# BackendDH

Este repositorio contiene el backend de un proyecto desarrollado en Node.js con Express, cors y sequalize. Puede ejecutarse la aplicación localmente, incluyendo la configuración de la base de datos con XAMPP y phpMyAdmin o MySQL Workbench.

## Requisitos

- Node.js
- NPM express, cors, sequelize
- XAMPP y MySQL Workbench

## Instalación

1. Clona el repositorio:
    ```bash
    git clone https://github.com/artssoria/backendDh.git
    cd backendDh
    ```

2. Instala las dependencias:
    ```
    npm install
    ```

## Configuración de la base de datos

### Usando XAMPP y phpMyAdmin

1. Inicia XAMPP y asegúrate de que Apache y MySQL están corriendo.
2. Abre phpMyAdmin en tu navegador (normalmente en `http://localhost/phpmyadmin`).
3. Crea una nueva base de datos para el proyecto.
4. condigurar database.js con los parametros de la base de datos.

### Usando MySQL Workbench

1. Abre MySQL Workbench.
2. Conéctate a tu servidor MySQL.
3. Crea una nueva base de datos para el proyecto.
4.  configurar la base de datos.

    ```env
    DB_HOST=localhost
    DB_USER=root
    DB_PASSWORD=tu_contraseña
    DB_NAME=RecruitingRH
    ```

## Ejecutar la Aplicación

1. Asegúrate de que la base de datos esté corriendo.
2. Ejecuta la aplicación:

    ```
    npm start
    ```

3. La aplicación debería estar corriendo en `http://localhost:3000`.

## Modelos

### Aspirante
models/aspirante.js
```javascript
const Aspirante = sequelize.define('Aspirante', {
  id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
  dni: { type: DataTypes.STRING(20), allowNull: false, unique: true },
  nombre: { type: DataTypes.STRING(50), allowNull: false },
  apellido: { type: DataTypes.STRING(50), allowNull: false },
  email: { type: DataTypes.STRING(100), allowNull: false, unique: true, validate: { isEmail: true } },
  telefono: { type: DataTypes.STRING(20), allowNull: false },
  perfil_linkedin: { type: DataTypes.STRING(255), allowNull: false },
  fecha_nacimiento: { type: DataTypes.DATEONLY, allowNull: false },
  sexo: { type: DataTypes.ENUM('Masculino', 'Femenino', 'Otro'), allowNull: false },
  imagen: { type: DataTypes.BLOB('long'), allowNull: true },
  profesion: { type: DataTypes.STRING(100), allowNull: false }
}, {
  tableName: 'aspirantes',
  timestamps: false
});
```

## Endpoints de la API

### Obtener todos los aspirantes
- **URL:** `http://localhost:3000/api/aspirantes`
- **Método:** `GET`
- **Descripción:** Obtiene una lista de todos los aspirantes.
- **Ejemplo de respuesta:**
    ```json
    [
        {
            "id": 1,
            "dni": "12345678",
            "nombre": "Aspirante 1",
            "apellido": "Apellido 1",
            "email": "aspirante1@example.com",
            "telefono": "123456789",
            "perfil_linkedin": "https://linkedin.com/in/aspirante1",
            "fecha_nacimiento": "1990-01-01",
            "sexo": "Masculino",
            "imagen": null,
            "profesion": "Profesión 1"
        },
        ...
    ]
    ```

### Añadir un nuevo aspirante
- **URL:** `http://localhost:3000/api/aspirantes`
- **Método:** `POST`
- **Descripción:** Añade un nuevo aspirante.
- **Cuerpo de la solicitud:**
    ```json
    {
        "dni": "87654321",
        "nombre": "Nuevo Aspirante",
        "apellido": "Nuevo Apellido",
        "email": "nuevoaspirante@example.com",
        "telefono": "987654321",
        "perfil_linkedin": "https://linkedin.com/in/nuevoaspirante",
        "fecha_nacimiento": "1995-05-05",
        "sexo": "Femenino",
        "imagen": null,
        "profesion": "Nueva Profesión"
    }
    ```
- **Ejemplo de respuesta:**
    ```json
    {
        "id": 2,
        "dni": "87654321",
        "nombre": "Nuevo Aspirante",
        "apellido": "Nuevo Apellido",
        "email": "nuevoaspirante@example.com",
        "telefono": "987654321",
        "perfil_linkedin": "https://linkedin.com/in/nuevoaspirante",
        "fecha_nacimiento": "1995-05-05",
        "sexo": "Femenino",
        "imagen": null,
        "profesion": "Nueva Profesión"
    }
    ```

### Actualizar un aspirante existente
- **URL:** `http://localhost:3000/api/aspirantes/:id`
- **Método:** `PUT`
- **Descripción:** Actualiza los datos de un aspirante existente por ID.
- **Cuerpo de la solicitud:**
    ```json
    {
        "dni": "87654321",
        "nombre": "Aspirante Actualizado",
        "apellido": "Apellido Actualizado",
        "email": "aspiranteactualizado@example.com",
        "telefono": "987654321",
        "perfil_linkedin": "https://linkedin.com/in/aspiranteactualizado",
        "fecha_nacimiento": "1995-05-05",
        "sexo": "Femenino",
        "imagen": null,
        "profesion": "Profesión Actualizada"
    }
    ```
- **Ejemplo de respuesta:**
    ```json
    {
        "id": 1,
        "dni": "87654321",
        "nombre": "Aspirante Actualizado",
        "apellido": "Apellido Actualizado",
        "email": "aspiranteactualizado@example.com",
        "telefono": "987654321",
        "perfil_linkedin": "https://linkedin.com/in/aspiranteactualizado",
        "fecha_nacimiento": "1995-05-05",
        "sexo": "Femenino",
        "imagen": null,
        "profesion": "Profesión Actualizada"
    }
    ```

### Eliminar un aspirante
- **URL:** `http://localhost:3000/api/aspirantes/:id`
- **Método:** `DELETE`
- **Descripción:** Elimina un aspirante por ID.
- **Ejemplo de respuesta:**
    ```json
    {
        "mensaje": "Aspirante eliminado exitosamente"
    }
    ```

## Contribución

Si deseas contribuir a este proyecto, por favor sigue estos pasos:

1. Haz un fork del repositorio.
2. Crea una nueva rama (`git checkout -b feature/nueva-feature`).
3. Realiza tus cambios y haz commits (`git commit -am 'Añadir nueva feature'`).
4. Sube tus cambios (`git push origin feature/nueva-feature`).
5. Abre un Pull Request.

## Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo `DH grupo 3` para más detalles.

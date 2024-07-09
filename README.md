# Tablero de trabajo

[Trello](https://trello.com/invite/b/3MSa9A0k/ATTI65f169fc50493bab56470a22ebf37d7117C95FA6/practicas-profesionalizantes)

# Frontend
Este es el archivo principal del repositorio. Puedes visitar el [FrontEnd en Vite js](/frontend/README.md) para obtener más información.

# BackendDH

Este repositorio contiene el backend de un proyecto desarrollado en Node.js con Express, cors y sequalize. Puede ejecutarse la aplicación localmente, incluyendo la configuración de la base de datos con XAMPP y phpMyAdmin o MySQL Workbench.

## Requisitos

- Node.js
- NPM express, cors, sequelize
- XAMPP y MySQL Workbench

## Instalación

1. Clona el repositorio:
    ```bash
    git clone https://github.com/artssoria/pp_grupo3.git
    cd pp_grupo3
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
const Applicants = sequelize.define('Applicants', {
  id_applicants: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  created_at: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: DataTypes.NOW
  },
  updated_at: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: DataTypes.NOW
  },
  deleted_at: {
    type: DataTypes.DATE,
    allowNull: true
  },
  dni: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  first_name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  last_name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    validate: {
      isEmail: true
    }
  },
  phone_number: {
    type: DataTypes.STRING,
    allowNull: false
  },
  url_linkedin: {
    type: DataTypes.STRING,
    allowNull: true
  },
  birthdate: {
    type: DataTypes.DATE,
    allowNull: false
  },
  sex: {
    type: DataTypes.STRING,
    allowNull: false
  },
  image: {
    type: DataTypes.STRING,
    allowNull: true
  },
  id_location: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  id_profession: {
    type: DataTypes.INTEGER,
    allowNull: false
  }
}, {
  tableName: 'applicants',
  timestamps: true,
  createdAt: 'created_at',
  updatedAt: 'updated_at',
  paranoid: true, 
  deletedAt: 'deleted_at'
});
Applicants.belongsTo(Location, { foreignKey: 'id_location' });
Applicants.belongsTo(Profession, { foreignKey: 'id_profession' });

module.exports = Applicants;
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
      "id_applicants": 4,
      "created_at": "2024-07-09T14:25:51.000Z",
      "updated_at": "2024-07-09T16:28:04.000Z",
      "deleted_at": null,
      "dni": "12343678",
      "first_name": "Ruben",
      "last_name": "Carlos",
      "email": "juan.perez@example.com",
      "phone_number": "1234567890",
      "url_linkedin": "https://linkedin.com/in/juanperez",
      "birthdate": "1990-01-01T00:00:00.000Z",
      "sex": "M",
      "image": "url_de_imagen",
      "id_location": 1,
      "id_profession": 1
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
       
  "dni": "19283942",
  "first_name": "ruben",
  "last_name": "nestor",
  "email": "ruben.nestor@example.com",
  "phone_number": "1234567890",
  "url_linkedin": "https://linkedin.com/in/rubennestor",
  "birthdate": "1990-01-01",
  "sex": "F",
  "image": "url_de_imagen",
  "id_location": 4,
  "id_profession": 2

    }
    ```
- **Ejemplo de respuesta:**
    ```json
    {
        "dni": "19283942",
  "first_name": "ruben",
  "last_name": "nestor",
  "email": "ruben.nestor@example.com",
  "phone_number": "1234567890",
  "url_linkedin": "https://linkedin.com/in/rubennestor",
  "birthdate": "1990-01-01",
  "sex": "F",
  "image": "url_de_imagen",
  "id_location": 4,
  "id_profession": 2
    }
    ```

### Actualizar un aspirante existente
- **URL:** `http://localhost:3000/api/aspirantes/:id`
- **Método:** `PUT`
- **Descripción:** Actualiza los datos de un aspirante existente por ID.
- **Cuerpo de la solicitud:**
    ```json
    {
      "id_applicants": 10,
      "created_at": "2024-07-09T16:33:56.000Z",
      "updated_at": "2024-07-09T16:33:56.000Z",
      "deleted_at": null,
      "dni": "19283942",
      "first_name": "nestor",
      "last_name": "bloque",
      "email": "nestor.enbloque@example.com",
      "phone_number": "1234567890",
      "url_linkedin": "https://linkedin.com/in/nestorenbloque",
      "birthdate": "1990-01-01T00:00:00.000Z",
      "sex": "M",
      "image": "url_de_imagen",
      "id_location": 3,
      "id_profession": 1
    }
    ```
- **Ejemplo de respuesta:**
    ```json
    {
      "id_applicants": 10,
      "created_at": "2024-07-09T16:33:56.000Z",
      "updated_at": "2024-07-09T16:33:56.000Z",
      "deleted_at": null,
      "dni": "19283942",
      "first_name": "nestor",
      "last_name": "bloque",
      "email": "nestor.enbloque@example.com",
      "phone_number": "1234567890",
      "url_linkedin": "https://linkedin.com/in/nestorenbloque",
      "birthdate": "1990-01-01T00:00:00.000Z",
      "sex": "M",
      "image": "url_de_imagen",
      "id_location": 3,
      "id_profession": 1
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

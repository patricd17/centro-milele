# Centro Milele - Backend API

API REST desarrollada con Node.js y Express para gestionar el formulario de contacto del Centro Milele, un centro multidisciplinar de psicología, logopedia y pedagogía terapéutica.

## 🚀 Tecnologías Utilizadas

- **Node.js** - Entorno de ejecución JavaScript
- **Express.js 5.1.0** - Framework web para Node.js
- **MongoDB** - Base de datos NoSQL
- **Mongoose 8.15.0** - ODM para MongoDB
- **Resend 3.2.0** - Servicio de envío de emails
- **dotenv 16.5.0** - Gestión de variables de entorno

## 📁 Estructura del Proyecto

```
backend/
├── src/
│   ├── controllers/              # Controladores de la lógica de negocio
│   │   └── contact.controller.js # Controlador para formularios de contacto
│   ├── lib/                      # Utilidades y configuraciones
│   │   └── email.js              # Configuración y plantillas de email
│   ├── models/                   # Modelos de datos MongoDB
│   │   └── contact.model.js      # Esquema del modelo Contact
│   ├── routes/                   # Definición de rutas de la API
│   │   └── contact.route.js      # Rutas para formularios de contacto
│   └── server.js                 # Configuración principal del servidor
├── .env.example                  # Plantilla de variables de entorno
├── package.json                  # Dependencias y scripts del proyecto
└── README.md                     # Documentación del backend
```

## 🗃️ Modelo de Datos

### Contact Schema
```javascript
{
  name: {
    type: String,
    required: true,
    trim: true              // Nombre completo del contacto
  },
  email: {
    type: String,
    required: true,
    trim: true,
    lowercase: true         // Email en minúsculas automáticamente
  },
  phone: {
    type: String,
    required: false,
    trim: true              // Teléfono opcional
  },
  message: {
    type: String,
    required: true,
    trim: true              // Mensaje del contacto
  },
  timestamps: true          // createdAt y updatedAt automáticos
}
```

## 🔗 API Endpoints

### POST `/api/contact`
Crea un nuevo formulario de contacto y envía notificación por email.

**Request Body:**
```json
{
  "name": "María García",
  "email": "maria@email.com",
  "phone": "614438477",          // Opcional
  "message": "Necesito información sobre terapia psicológica"
}
```

**Response (201 - Success):**
```json
{
  "message": "Mensaje enviado correctamente. Nos pondremos en contacto contigo pronto.",
  "contact": {
    "id": "675a1b2c3d4e5f6g7h8i9j0",
    "name": "María García",
    "email": "maria@email.com",
    "phone": "614438477",
    "createdAt": "2025-06-07T10:30:00.000Z"
  }
}
```

**Response (400 - Validation Error):**
```json
{
  "message": "Los campos nombre, email y mensaje son obligatorios"
}
```

**Response (500 - Server Error):**
```json
{
  "message": "Error al enviar el mensaje. Inténtalo de nuevo.",
  "error": "Descripción del error"
}
```

### GET `/api/contact`
Obtiene todos los formularios de contacto (para uso administrativo).

**Response (200 - Success):**
```json
{
  "contacts": [
    {
      "_id": "675a1b2c3d4e5f6g7h8i9j0",
      "name": "María García",
      "email": "maria@email.com",
      "phone": "614438477",
      "message": "Necesito información sobre terapia psicológica",
      "createdAt": "2025-06-07T10:30:00.000Z",
      "updatedAt": "2025-06-07T10:30:00.000Z"
    }
  ]
}
```

## ⚙️ Configuración y Instalación

### Prerrequisitos
- **Node.js** (v18 o superior)
- **MongoDB** (local o MongoDB Atlas)
- **Cuenta en Resend** (para envío de emails)

### 1. Instalar Dependencias
```bash
# Navegar al directorio backend
cd backend

# Instalar dependencias
npm install
```

### 2. Configurar Variables de Entorno
```bash
# Crear archivo de configuración desde plantilla
copy .env.example .env
```

**Editar el archivo `.env`:**
```env
# Puerto del servidor (opcional, por defecto 5000)
PORT=5000

# URI de conexión a MongoDB
# Para MongoDB local:
MONGODB_URI=mongodb://localhost:27017/milele
# Para MongoDB Atlas:
# MONGODB_URI=mongodb+srv://usuario:password@cluster.mongodb.net/milele

# API Key de Resend para envío de emails
# Obtener en: https://resend.com/api-keys
RESEND_API_KEY=re_xxxxxxxxxx

# Email donde recibir las notificaciones del formulario
NOTIFICATION_EMAIL=centromilele@gmail.com
```

### 3. Configurar MongoDB

#### Opción A: MongoDB Local (Windows)
```bash
# Verificar instalación
mongod --version

# Iniciar servicio
net start MongoDB

# Conectar y verificar
mongosh
```

#### Opción B: MongoDB Atlas (Recomendado)
1. Crear cuenta en [MongoDB Atlas](https://www.mongodb.com/atlas)
2. Crear cluster gratuito
3. Configurar usuario y whitelist de IPs
4. Obtener connection string

### 4. Configurar Resend
1. Crear cuenta en [Resend](https://resend.com)
2. Generar API Key en el dashboard
3. Añadir la key al archivo `.env`

## 🚀 Ejecución

### Scripts Disponibles
```bash
# Servidor de desarrollo con auto-reload
npm run dev

# Servidor de producción
npm start

# Ejecutar tests (no implementado)
npm test
```

### Verificar Funcionamiento
Al iniciar el servidor verás logs como:
```
🔗 Attempting to connect to MongoDB...
📡 Connection URI: mongodb://localhost:27017/milele
🔗 Connected to MongoDB (milele database)
✅ Present environment variables: MONGODB_URI, RESEND_API_KEY, NOTIFICATION_EMAIL
🚀 Server is running on port 5000
🌐 API available at: http://localhost:5000
📝 Contact form endpoint: http://localhost:5000/api/contact
```

## ✨ Funcionalidades Destacadas

### Validación de Datos
- **Campos requeridos**: Validación automática de nombre, email y mensaje
- **Sanitización**: Limpieza automática de datos con `trim()` y `lowercase()`
- **Mongoose validation**: Validación a nivel de esquema de base de datos

### Sistema de Email
- **Plantillas HTML**: Emails personalizados con diseño profesional
- **Información completa**: Incluye todos los datos del formulario
- **Marca Milele**: Diseño coherente con la identidad visual del centro
- **Timestamps**: Fecha y hora automática del envío

### Gestión de Errores
- **Logging detallado**: Registro completo de errores y eventos
- **Respuestas descriptivas**: Mensajes de error claros para el frontend
- **Fallback graceful**: Continúa funcionando aunque falle el email
- **Validación de entorno**: Verificación de variables requeridas

### Seguridad y CORS
- **CORS configurado**: Permite acceso desde el frontend
- **Validación de entrada**: Prevención de inyección de datos maliciosos
- **Variables de entorno**: Configuración segura sin hardcoding

## 📧 Sistema de Notificaciones Email

### Plantilla de Email
Los emails se envían con una plantilla HTML profesional que incluye:
- **Header con branding** Milele
- **Información del contacto** organizada en cards
- **Mensaje completo** con formato preservado
- **Footer con información** del centro
- **Timestamp** con fecha y hora del envío

### Configuración Resend
```javascript
// Ejemplo de configuración
const { data, error } = await resend.emails.send({
  from: 'Milele <onboarding@resend.dev>',
  to: [process.env.NOTIFICATION_EMAIL],
  subject: `Nuevo mensaje de contacto de ${name}`,
  html: `<!-- Plantilla HTML personalizada -->`
});
```

## 🔧 Arquitectura y Patrones

### Patrón MVC
- **Models**: Esquemas de Mongoose para MongoDB
- **Views**: Respuestas JSON estructuradas
- **Controllers**: Lógica de negocio separada

### Middleware
- **Body parsing**: Procesamiento automático de JSON y URL-encoded
- **CORS**: Configuración de políticas de origen cruzado
- **Error handling**: Manejo centralizado de errores

### Estructura Modular
```javascript
// Ejemplo de controller
export const createContact = async (req, res) => {
  try {
    // Validación
    const { name, email, message } = req.body;
    
    // Crear contacto
    const contact = new Contact({ name, email, message });
    await contact.save();
    
    // Enviar email
    await sendContactEmail({ name, email, message });
    
    // Respuesta
    res.status(201).json({ message: "Éxito", contact });
  } catch (error) {
    // Manejo de errores
    res.status(500).json({ message: "Error", error: error.message });
  }
};
```

## 🗄️ Base de Datos

### MongoDB Setup
La aplicación se conecta automáticamente a MongoDB usando Mongoose:

```javascript
// Conexión con logging detallado
mongoose.connect(process.env.MONGODB_URI)
  .then(() => {
    console.log('🔗 Connected to MongoDB (milele database)');
  })
  .catch((error) => {
    console.error('❌ MongoDB connection error:', error.message);
    process.exit(1);
  });
```

### Collections
- **contacts**: Almacena todos los formularios de contacto
  - Índices automáticos en `_id`, `createdAt`, `updatedAt`
  - Validación a nivel de esquema
  - Timestamps automáticos

## 🚀 Despliegue

### Variables de Entorno para Producción
```env
PORT=5000
MONGODB_URI=mongodb+srv://user:pass@cluster.mongodb.net/milele
RESEND_API_KEY=re_production_key
NOTIFICATION_EMAIL=contacto@centromilele.com
```

### Opciones de Hosting
- **Railway**: Despliegue automático desde Git
- **Render**: Hosting gratuito con SSL
- **Heroku**: Platform-as-a-Service
- **DigitalOcean**: VPS con mayor control

### Build de Producción
```bash
# El proyecto no requiere build, se ejecuta directamente
npm start
```

## 📦 Dependencias

### Dependencias de Producción
```json
{
  "express": "^5.1.0",       // Framework web
  "mongoose": "^8.15.0",     // ODM para MongoDB
  "resend": "^3.2.0",        // Servicio de email
  "dotenv": "^16.5.0"        // Variables de entorno
}
```

### Dependencias de Desarrollo
```json
{
  "nodemon": "^3.1.10"       // Auto-reload en desarrollo
}
```

## 🔍 Debugging y Logging

### Logs del Sistema
El servidor proporciona logging detallado:
- ✅ **Conexión exitosa** a MongoDB
- 🔧 **Validación** de variables de entorno
- 📧 **Envío de emails** con IDs de seguimiento
- ❌ **Errores** con stack trace completo

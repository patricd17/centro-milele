# Centro Milele - Aplicación Web Completa

Centro Milele es una aplicación web completa para un centro multidisciplinar de psicología, logopedia y pedagogía terapéutica. El proyecto incluye un sitio web informativo con formulario de contacto y un backend API para la gestión de datos.

## 📋 Descripción del Proyecto

Esta aplicación está diseñada para **Centro Milele**, un centro multidisciplinar ubicado en Málaga que ofrece servicios de:
- **Psicología**
- **Logopedia**  
- **Pedagogía Terapéutica** 

## 🏗️ Arquitectura del Proyecto

El proyecto está dividido en dos partes principales que funcionan de manera independiente pero complementaria:

### Frontend (React + Vite)
- **Framework**: React 19 con Vite como bundler
- **Styling**: TailwindCSS 4.x con sistema de diseño personalizado
- **Enrutamiento**: React Router 7 para navegación SPA
- **Iconos**: Lucide React para iconografía consistente
- **Tipografía**: Font personalizada "Moontime" + Google Fonts
- **Funcionalidades principales**:
  - ✨ Sitio web informativo responsive (mobile-first)
  - 👥 Páginas individuales de presentación de profesionales
  - 🖼️ Galería de instalaciones con carousel interactivo
  - 📝 Formulario de contacto con validación en tiempo real
  - 🎨 Sistema de diseño con paleta de colores Milele
  - 🌊 Gradientes y efectos visuales personalizados

### Backend (Node.js + Express)
- **Framework**: Express.js con arquitectura modular
- **Base de Datos**: MongoDB con Mongoose ODM
- **Email**: Resend API para notificaciones automáticas
- **Arquitectura**: Patrón MVC (Models, Views, Controllers)
- **Funcionalidades principales**:
  - 🚀 API REST para formulario de contacto
  - ✅ Validación robusta de datos de entrada
  - 💾 Almacenamiento persistente en MongoDB
  - 📧 Envío automático de emails con plantillas HTML
  - 🔒 Manejo centralizado de errores y logging
  - 🌐 CORS configurado para acceso desde frontend

## 🚀 Instalación y Configuración

### Prerrequisitos

- **Node.js** (v18 o superior)
- **npm** o **yarn**
- **MongoDB** (local o MongoDB Atlas)
- **Cuenta en Resend** (para envío de emails)

### 1. Clonar el repositorio

```bash
git clone <url-del-repositorio>
cd centro-psicologia
```

### 2. Configurar MongoDB

#### Opción A: MongoDB Local (Windows)

1. **Descargar e instalar MongoDB Community Server:**
   - Visita [https://www.mongodb.com/try/download/community](https://www.mongodb.com/try/download/community)
   - Descarga la versión para Windows
   - Ejecuta el instalador y sigue las instrucciones
   - Durante la instalación, selecciona "Install MongoDB as a Service"

2. **Verificar la instalación:**
   ```bash
   # Abrir Command Prompt como administrador
   mongod --version
   ```

3. **Iniciar el servicio MongoDB:**
   ```bash
   # El servicio debería iniciarse automáticamente, pero si no:
   net start MongoDB
   ```

4. **Verificar conexión:**
   ```bash
   # Conectar a MongoDB
   mongosh
   # Debería conectarse a: mongodb://localhost:27017
   ```

#### Opción B: MongoDB Atlas (Recomendado para producción)

1. **Crear cuenta gratuita:**
   - Visita [https://www.mongodb.com/atlas](https://www.mongodb.com/atlas)
   - Crea una cuenta gratuita

2. **Crear cluster:**
   - Selecciona "Create a FREE cluster"
   - Elige la región más cercana
   - Nombra tu cluster como "milele-cluster"

3. **Configurar acceso:**
   - Crea un usuario de base de datos
   - Añade tu IP a la whitelist (o 0.0.0.0/0 para desarrollo)

4. **Obtener string de conexión:**
   - Haz clic en "Connect" → "Connect your application"
   - Copia el connection string (formato: `mongodb+srv://...`)

### 3. Configurar el Backend

```bash
cd backend

# Instalar dependencias
npm install

# Crear archivo de configuración desde el ejemplo
copy .env.example .env
```

**Editar el archivo `.env` con tus configuraciones:**

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
NOTIFICATION_EMAIL=contacto@centromilele.com
```

### 4. Configurar Resend para el envío de emails

1. **Crear cuenta en Resend:**
   - Visita [https://resend.com](https://resend.com)
   - Crea una cuenta gratuita (incluye 3,000 emails/mes)

2. **Obtener API Key:**
   - Ve a "API Keys" en el dashboard
   - Crea una nueva API key
   - Copia la key y añádela al archivo `.env`

3. **Verificar dominio (opcional para producción):**
   - Para desarrollo, funciona con el dominio por defecto
   - Para producción, verifica tu dominio personalizado

### 5. Configurar el Frontend

```bash
cd ../frontend

# Instalar dependencias
npm install
```

### 6. Inicializar la Base de Datos

La base de datos se crea automáticamente al enviar el primer formulario, pero puedes verificar la conexión:

```bash
# Desde la carpeta backend
npm run dev

# Deberías ver en la consola:
# 🔗 Connected to MongoDB (milele database)
# 🚀 Server is running on port 5000
```

### 7. Ejecutar la Aplicación

#### Opción A: Ejecutar ambos servicios por separado

**Terminal 1 - Backend:**
```bash
cd backend
npm run dev
```

**Terminal 2 - Frontend:**
```bash
cd frontend
npm run dev
```

#### Opción B: Script de desarrollo (recomendado)

```bash
# Desde la carpeta raíz, crear un script para ejecutar ambos:
# En package.json del directorio raíz (si existe) o crear uno nuevo

# Ejecutar backend en una terminal:
cd backend && npm run dev

# En otra terminal, ejecutar frontend:
cd frontend && npm run dev
```

### 8. Acceder a la Aplicación

- **Frontend**: [http://localhost:5173](http://localhost:5173)
- **Backend API**: [http://localhost:5000](http://localhost:5000)
- **API Docs**: [http://localhost:5000/api/contact](http://localhost:5000/api/contact)

### 9. Verificar Funcionamiento

1. **Verificar conexión a MongoDB:**
   - El backend debería mostrar "🔗 Connected to MongoDB"

2. **Probar el formulario de contacto:**
   - Ve a `http://localhost:5173/contact`
   - Rellena y envía el formulario
   - Verifica que llegue el email de notificación

3. **Verificar la base de datos:**
   ```bash
   # Conectar a MongoDB local
   mongosh
   use milele
   db.contacts.find()
   ```

## 📁 Estructura del Proyecto

```
centro-psicologia/
├── README.md                    # Documentación principal del proyecto
├── frontend/                    # Aplicación React (Puerto 5173)
│   ├── src/
│   │   ├── components/          # Componentes reutilizables
│   │   │   ├── ImageCarousel.jsx      # Carousel de imágenes
│   │   │   ├── ImageModal.jsx         # Modal para visualizar imágenes
│   │   │   └── layout/                # Componentes de layout
│   │   │       ├── Footer.jsx         # Pie de página con contacto
│   │   │       └── NavBar.jsx         # Barra de navegación
│   │   ├── pages/               # Páginas de la aplicación
│   │   │   ├── Home.jsx              # Página principal
│   │   │   ├── About.jsx             # Quiénes somos + equipo
│   │   │   ├── Professional.jsx      # Perfil individual de profesionales
│   │   │   ├── Spaces.jsx            # Galería de instalaciones
│   │   │   └── Contact.jsx           # Formulario de contacto
│   │   ├── assets/              # Recursos estáticos
│   │   │   ├── fonts/               # Fuente personalizada Moontime
│   │   │   └── images/              # Imágenes del sitio
│   │   └── lib/                 # Utilidades y configuración
│   │       └── api.js               # Cliente API para backend
│   ├── public/                  # Archivos públicos
│   ├── package.json            # Dependencias React
│   ├── vite.config.js          # Configuración Vite
│   ├── index.html              # HTML base
│   └── README.md               # Documentación frontend
└── backend/                     # API Node.js (Puerto 5000)
    ├── src/
    │   ├── controllers/         # Lógica de negocio
    │   │   └── contact.controller.js  # Controlador formulario contacto
    │   ├── models/             # Modelos de MongoDB
    │   │   └── contact.model.js       # Esquema contacto
    │   ├── routes/             # Rutas de la API
    │   │   └── contact.route.js       # Rutas formulario contacto
    │   ├── lib/                # Utilidades
    │   │   └── email.js              # Configuración envío emails
    │   └── server.js           # Configuración servidor Express
    ├── .env.example            # Plantilla variables entorno
    ├── package.json            # Dependencias Node.js
    └── README.md               # Documentación backend
```

## 🌟 Características Principales

### Frontend
- **Diseño Responsive**: Optimizado para móviles, tablets y escritorio
- **Sistema de Colores**: Paleta personalizada con gradientes Milele
- **Navegación Fluida**: React Router 7 con transiciones suaves
- **Galería Interactiva**: Carousel de imágenes con modal
- **Formulario Inteligente**: Validación en tiempo real con estados de envío
- **Tipografía Personalizada**: Fuente custom "Moontime" integrada
- **Arquitectura de Componentes**: Componentes modulares y reutilizables
- **Páginas dinámicas**: 
  - Home con metodología de trabajo y servicios
  - About con presentación del equipo
  - Professional con perfiles individuales
  - Spaces con galería de instalaciones
  - Contact con formulario funcional

### Backend
- **API RESTful**: Endpoints bien estructurados y documentados
- **Validación Robusta**: Validación de datos de entrada con Mongoose
- **Gestión de Errores**: Manejo centralizado de errores con logging
- **Logs Detallados**: Sistema de logging completo para debugging
- **CORS Configurado**: Acceso controlado desde el frontend
- **Variables de Entorno**: Configuración segura y flexible
- **Email Templates**: Plantillas HTML personalizadas para notificaciones
- **Middleware**: Validación de datos y manejo de requests

## 🔧 Scripts Disponibles

### Frontend
```bash
npm run dev     # Servidor de desarrollo (http://localhost:5173)
npm run build   # Build de producción
npm run preview # Preview del build
npm run lint    # Linting del código
```

### Backend
```bash
npm run dev     # Servidor con nodemon (http://localhost:5000)
npm start       # Servidor de producción
```

## 🔗 Endpoints de la API

### POST `/api/contact`
Envía un formulario de contacto

**Cuerpo de la petición:**
```json
{
  "name": "Nombre completo",
  "email": "email@ejemplo.com",
  "phone": "600123456",
  "message": "Mensaje del usuario"
}
```

**Respuesta exitosa (201):**
```json
{
  "message": "Mensaje enviado correctamente. Nos pondremos en contacto contigo pronto.",
  "contact": {
    "id": "66f8a1b2c3d4e5f6g7h8i9j0",
    "name": "Nombre completo",
    "email": "email@ejemplo.com",
    "phone": "600123456",
    "createdAt": "2024-01-15T10:30:00.000Z"
  }
}
```

### GET `/api/contact`
Obtiene todos los formularios de contacto (para uso administrativo)

**Respuesta exitosa (200):**
```json
{
  "contacts": [
    {
      "_id": "66f8a1b2c3d4e5f6g7h8i9j0",
      "name": "Nombre completo",
      "email": "email@ejemplo.com",
      "phone": "600123456",
      "message": "Mensaje del usuario",
      "createdAt": "2024-01-15T10:30:00.000Z",
      "updatedAt": "2024-01-15T10:30:00.000Z"
    }
  ]
}
```

## 🎨 Sistema de Diseño

El proyecto utiliza un sistema de diseño personalizado basado en TailwindCSS:

- **Colores principales**: Verde (#a3e635), Cian (#67e8f9), Rosa (#f9a8d4)
- **Tipografía**: Moontime (display), Inter (sans-serif), Playfair Display (serif)
- **Componentes**: Diseño modular y reutilizable
- **Responsive**: Mobile-first approach

## 🚀 Despliegue

### Frontend
Puede desplegarse en cualquier servicio de hosting estático:
- Vercel
- Netlify  
- GitHub Pages
- Firebase Hosting

### Backend
Puede desplegarse en servicios como:
- Railway
- Render
- Heroku
- DigitalOcean

### Base de Datos
Se recomienda usar un servidor MongoDB o MongoDB Atlas para producción.

## 📞 Contacto

**Centro Milele**
- **Dirección**: Calle Lope de Rueda, 78a, Puerto de la Torre, 29190 Málaga
- **Email**: contacto@centromilele.com
- **Teléfono**: +34 614 438 477

---

*Desarrollado con ❤️ para Centro Milele*
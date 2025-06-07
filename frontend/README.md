# Centro Milele - Frontend

Aplicación frontend desarrollada con React 19 y Vite para Centro Milele, un centro multidisciplinar de psicología, logopedia y pedagogía terapéutica.

## 🚀 Tecnologías Utilizadas

- **React 19** - Biblioteca para interfaces de usuario
- **Vite 6.3.5** - Herramienta de construcción y desarrollo
- **TailwindCSS 4.1.7** - Framework CSS para diseño
- **React Router 7.6.0** - Enrutamiento para aplicaciones React
- **Lucide React 0.511.0** - Iconos consistentes y modernos

## 📁 Estructura del Proyecto

```
frontend/
├── src/
│   ├── components/              # Componentes reutilizables
│   │   ├── ImageCarousel.jsx   # Carousel para galería de imágenes
│   │   ├── ImageModal.jsx      # Modal para vista ampliada de imágenes
│   │   └── layout/             # Componentes de diseño
│   │       ├── Footer.jsx      # Pie de página con información de contacto
│   │       └── NavBar.jsx      # Barra de navegación principal
│   ├── pages/                  # Páginas de la aplicación
│   │   ├── Home.jsx           # Página principal con servicios y metodología
│   │   ├── About.jsx          # Página "Quiénes somos" con presentación del equipo
│   │   ├── Professional.jsx   # Páginas individuales de cada profesional
│   │   ├── Spaces.jsx         # Galería de instalaciones del centro
│   │   └── Contact.jsx        # Formulario de contacto funcional
│   ├── assets/                # Recursos estáticos
│   │   ├── fonts/             # Fuente personalizada Moontime
│   │   └── images/            # Imágenes del sitio (profesionales, instalaciones)
│   ├── lib/                   # Utilidades y configuración
│   │   └── api.js             # Cliente API para comunicación con backend
│   ├── App.jsx                # Componente principal de la aplicación
│   ├── main.jsx              # Punto de entrada de la aplicación
│   └── index.css             # Estilos globales y configuración de Tailwind
├── public/                    # Archivos públicos estáticos
├── index.html                # Template HTML principal
├── vite.config.js            # Configuración de Vite
├── package.json              # Dependencias y scripts
└── README.md                 # Documentación del frontend
```

## 🎨 Sistema de Diseño

### Paleta de Colores Milele
- **Verde**: `#a3e635` (primario)
- **Cian**: `#67e8f9` (secundario)
- **Rosa**: `#f9a8d4` (acento)
- **Gradientes**: Combinaciones dinámicas de los colores principales

### Tipografías
- **Moontime**: Fuente personalizada para títulos decorativos
- **Playfair Display**: Fuente serif para títulos principales
- **Inter**: Fuente sans-serif para texto general

### Componentes Destacados
- **Gradientes personalizados** con colores de marca
- **Sombras suaves** (milele-shadow) para profundidad
- **Efectos hover** y transiciones fluidas
- **Diseño responsive** mobile-first

## 🌟 Funcionalidades Principales

### Páginas y Navegación
- **Home**: Presentación de servicios, metodología de trabajo y llamada a la acción
- **About**: Información del centro, presentación del equipo y valores
- **Professional**: Perfiles individuales con información detallada de cada profesional
- **Spaces**: Galería interactiva de las instalaciones del centro
- **Contact**: Formulario funcional con validación en tiempo real

### Componentes Interactivos
- **ImageCarousel**: Carousel responsive para galería de imágenes
- **ImageModal**: Modal para visualización ampliada de imágenes
- **Formulario de contacto**: Con validación, estados de carga y mensajes de éxito/error
- **Navegación responsive**: Adaptada para móviles y escritorio

### Características Técnicas
- **Routing dinámico** con React Router 7
- **Componentes modulares** y reutilizables
- **Estados de carga** y manejo de errores
- **Optimización de imágenes** en formato WebP
- **Accesibilidad** mejorada con semántica HTML

## 🚀 Instalación y Ejecución

### Prerrequisitos
- Node.js (v18 o superior)
- npm o yarn

### Instalación
```bash
# Navegar al directorio frontend
cd frontend

# Instalar dependencias
npm install
```

### Scripts Disponibles

```bash
# Servidor de desarrollo (http://localhost:5173)
npm run dev

# Construir para producción
npm run build

# Previsualizar build de producción
npm run preview

# Ejecutar linter
npm run lint
```

## 🔗 Integración con Backend

La aplicación se comunica con el backend a través del módulo `src/lib/api.js`:

```javascript
// Envío de formulario de contacto
const response = await contactAPI.submitContact({
  name: "Nombre",
  email: "email@ejemplo.com", 
  phone: "123456789",
  message: "Mensaje"
});
```

### Configuración de API
- **Base URL**: `http://localhost:5000/api`
- **Endpoints utilizados**: 
  - `POST /contact` - Envío de formularios
  - `GET /contact` - Obtención de contactos (uso administrativo)

## 🎯 Características de UX/UI

### Responsive Design
- **Mobile-first**: Diseño optimizado primero para móviles
- **Breakpoints**: Adaptación fluida en tablets y escritorio
- **Navegación**: Menú hamburguesa en móviles, navegación horizontal en escritorio

### Interactividad
- **Hover effects**: Efectos suaves al pasar el ratón
- **Transiciones**: Animaciones fluidas entre estados
- **Loading states**: Indicadores de carga durante acciones asíncronas
- **Feedback visual**: Mensajes claros de éxito y error

### Optimización
- **Lazy loading**: Carga diferida de imágenes
- **Code splitting**: División automática del código con Vite
- **Asset optimization**: Optimización automática de recursos

## 🔧 Configuración de Desarrollo

### Vite Configuration
```javascript
// vite.config.js
export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "@components": path.resolve(__dirname, "./src/components"),
      "@lib": path.resolve(__dirname, "./src/lib"),
    },
  },
})
```

### TailwindCSS Setup
- **Plugin de Vite**: `@tailwindcss/vite` para integración nativa
- **Colores personalizados**: Definidos en `src/index.css`
- **Fuentes custom**: Integración de Moontime y Google Fonts

## 📦 Dependencias Principales

```json
{
  "react": "^19.1.0",
  "react-dom": "^19.1.0", 
  "react-router": "^7.6.0",
  "tailwindcss": "^4.1.7",
  "lucide-react": "^0.511.0",
  "vite": "^6.3.5"
}
```

## 🚀 Despliegue

### Build de Producción
```bash
npm run build
```

### Opciones de Hosting
- **Vercel**: Despliegue automático desde Git
- **Netlify**: Hosting estático con formularios
- **GitHub Pages**: Hosting gratuito para sitios estáticos
- **Firebase Hosting**: Hosting con CDN global

### Variables de Entorno
Para producción, actualizar la URL base de la API en `src/lib/api.js`:

```javascript
const API_BASE_URL = process.env.NODE_ENV === 'production' 
  ? 'https://tu-api.com/api'
  : 'http://localhost:5000/api';
```

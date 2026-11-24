# Centro Milele · centromilele.es

Web de Milele Centro Multidisciplinar (logopedia, pedagogía terapéutica y psicología) en Puerto de la Torre, Málaga.

## Cómo está hecha

| Parte | Tecnología |
|---|---|
| Web | React 19 + Vite 6 + Tailwind CSS 4 + React Router 7 (carpeta `frontend/`) |
| Base de datos | Supabase (mensajes del formulario y cierres del centro) |
| Avisos por correo | EmailJS, desde el navegador |
| Alojamiento | Vercel (despliega solo al fusionar en `main`) |
| Comprobaciones | GitHub Actions: lint, pruebas y compilación en cada cambio |

No hay servidor propio: todo lo que necesita la web lo dan Supabase y EmailJS.

## Trabajar en local

```bash
cd frontend
npm ci
cp .env.example .env     # y rellenar las claves (ver más abajo)
npm run dev              # http://localhost:5173
npm run lint && npm test # comprobaciones
npm run test:e2e         # pruebas de las páginas (necesita Chromium)
```

### Variables de entorno (`frontend/.env`)
`VITE_SUPABASE_URL`, `VITE_SUPABASE_ANON_KEY`, `VITE_EMAILJS_SERVICE_ID`, `VITE_EMAILJS_TEMPLATE_ID`,
`VITE_EMAILJS_PUBLIC_KEY`, `VITE_NOTIFICATION_EMAIL`. En producción se configuran en Vercel.
Son claves públicas del navegador; la seguridad de los datos la dan las políticas (RLS) de Supabase.

## Tareas habituales

- **Añadir una profesional:** copiar una ficha en `frontend/src/data/professionals.js` (nombre, rol, colegiado,
  fotos, etiquetas y textos). La tarjeta, el perfil y el título de «Quiénes somos» se generan solos.
- **Cierres y festivos del centro:** panel privado en `/admin` (acceso con el pie «Acceso del equipo»).
- **Datos legales** (titular, NIF, NICA, registro): `frontend/src/components/legal/companyData.js`.
- **Preguntas frecuentes:** lista `PREGUNTAS` de `frontend/src/components/Faq.jsx`.

## Publicar

Los cambios se hacen en una rama, se abre un PR y, al fusionarlo en `main`, Vercel publica la web.
Antes de fusionar, las comprobaciones de GitHub (lint, pruebas y compilación) deben estar en verde.

## Que nada se caiga sin que nos enteremos

| Qué puede fallar | Cómo se evita | Cómo nos enteramos |
|---|---|---|
| Supabase se pausa (los proyectos gratuitos se pausan tras una semana sin uso) | La tarea `mantener-supabase-activo` lo consulta cada dos días, y un vigilante externo lo consulta cada pocos minutos | El vigilante avisa por correo si deja de responder |
| GitHub desactiva las tareas programadas (60 días sin actividad) | Cada lunes la tarea se reactiva a sí misma por la API de GitHub y comprueba que sigue activa | Pestaña *Actions* de GitHub; si Supabase se pausara, el vigilante lo notaría |
| Se publica algo roto | Las pruebas del CI (21 de lógica y 42 de páginas); conviene proteger `main` para exigirlas | El CI en rojo |
| La web o el dominio se caen | Vercel renueva certificados solo; el dominio debe tener renovación automática en su registrador | El vigilante avisa por correo |

### Direcciones que debe vigilar el vigilante externo
1. **La web:** `https://centromilele.es/` — buscar la palabra `Milele` (el título de la página la contiene).
2. **La base de datos:** `https://zoopdygqskchmoppabiq.supabase.co/rest/v1/closures?select=id&limit=1&apikey=sb_publishable_JN_kxHd_sRmIKUzhuFPwzg_UDq-mLnY`
   — buscar el carácter `[`. Esa clave es la pública de la web (ya viaja en el JavaScript). Esta consulta mantiene
   además la base de datos despierta. Sin la clave responde 401, así que un cambio de clave también se notaría.

## Si algo falla

- **La web se ve mal o no funciona tras una publicación:** en Vercel → *Deployments*, elegir la versión anterior
  que funcionaba y pulsar *Promote to Production* (vuelve atrás en segundos). Después se corrige en una rama.
- **El formulario de contacto o el panel de cierres no funcionan:** probablemente Supabase está pausado. Entrar en
  supabase.com → el proyecto → *Restore project*. Los mensajes enviados siguen llegando también al correo.
- **Los avisos por correo del formulario no llegan:** puede haberse agotado el límite mensual gratuito de EmailJS.
  El mensaje queda guardado igualmente en Supabase (tabla `contacts`).
- **La tarea programada aparece desactivada** en *Actions → Mantener Supabase activo*: pulsar *Enable workflow* y
  lanzarla a mano con *Run workflow*.

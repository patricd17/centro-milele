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
El aviso automático `mantener-supabase-activo` consulta Supabase cada dos días para que no se pause, y sube un
registro mensual a la rama `latido` para que GitHub no desactive los avisos programados.

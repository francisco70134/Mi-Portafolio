# Francisco Olortegui - Portfolio Website

Portafolio profesional desarrollado para presentar mi experiencia laboral, proyectos tecnológicos, formación académica y habilidades como Ingeniero de Software.

## Demo

**Sitio Web:** https://francisco-olortegui-abanto.vercel.app/

## Descripción

Este proyecto fue desarrollado como una Aplicación de Página Única (SPA) moderna, enfocada en ofrecer una experiencia visual atractiva, responsiva y profesional.

El objetivo principal es centralizar mi perfil profesional, mostrando proyectos destacados, experiencia laboral, formación académica, certificaciones y tecnologías con las que trabajo actualmente.

La aplicación cuenta con soporte multilenguaje (Español e Inglés) y ha sido construida siguiendo buenas prácticas de desarrollo frontend y arquitectura basada en componentes reutilizables.

## Características

* Diseño responsive para Desktop, Tablet y Mobile.
* Internacionalización (i18n) Español / Inglés.
* Experiencia laboral presentada mediante línea de tiempo interactiva.
* Sección de proyectos con filtros por categoría.
* Catálogo de habilidades técnicas organizadas por especialidad.
* Formación académica y certificaciones profesionales.
* Descarga de CV en formato PDF.
* Formulario de contacto integrado con EmailJS.
* Acceso directo vía WhatsApp.
* Optimizado para SEO y rendimiento.
* Despliegue automatizado mediante Vercel.

## 🛠 Tecnologías Utilizadas

### Frontend

* React
* TypeScript
* Vite
* Tailwind CSS

### Internacionalización

* react-i18next
* i18next

### Integraciones

* EmailJS

### Despliegue

* Vercel

## Estructura del Proyecto

```text
├── public/
│   ├── docs/
│   └── img/
│
├── src/
│   ├── assets/
│   ├── components/
│   ├── data/
│   ├── locales/
│   ├── types/
│   └── i18n/
│
├── .env
├── package.json
├── vite.config.ts
└── tsconfig.json
```

## Instalación

Clonar el repositorio:

```bash
git clone https://github.com/francisco70134/mi-portafolio.git
```

Ingresar al directorio del proyecto:

```bash
cd mi-portafolio
```

Instalar dependencias:

```bash
npm install
```

## Variables de Entorno

Crear un archivo `.env` en la raíz del proyecto:

```env
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

## Desarrollo Local

Ejecutar el servidor de desarrollo:

```bash
npm run dev
```

La aplicación estará disponible en:

```text
http://localhost:5173
```

## Build de Producción

Generar la versión optimizada:

```bash
npm run build
```

Previsualizar la compilación:

```bash
npm run preview
```

## Despliegue

El proyecto se encuentra configurado para despliegue continuo mediante Vercel.

Cada actualización enviada a la rama principal genera automáticamente una nueva versión en producción.

## Autor

**Francisco Edu Olortegui Abanto**

Software Engineer | Full-Stack Developer | IT Application Analyst

LinkedIn:
https://www.linkedin.com/in/francisco-edu-olortegui-abanto/

GitHub:
https://github.com/francisco70134

---

Desarrollado con React, TypeScript y Tailwind CSS.

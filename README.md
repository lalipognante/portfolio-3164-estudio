# Portfolio 31 64 Estudio

## Descripción

Este es el **portfolio web** de **31 64 Estudio**. Aquí puedes ver los proyectos más destacados del estudio, con imágenes y descripciones para cada uno.

## ¿Cómo agregar un nuevo proyecto?

Para agregar un nuevo proyecto y sus imágenes a la página web, sigue estos sencillos pasos:

### 1. **Agregar un nuevo proyecto**

- Entra al repositorio en **GitHub**: [Portfolio 31 64 Estudio](https://github.com/lalipognante/portfolio-3164-estudio).
- Haz clic en la carpeta **`data`** y luego en **`proyectos.ts`**.
- En este archivo se encuentran los proyectos actuales. Al final de la lista de proyectos, agrega los detalles del nuevo proyecto como se muestra en el siguiente ejemplo:

```ts
{
  titulo: "Nombre del nuevo proyecto",
  imagenes: [
    "ruta/de/la/imagen1.jpeg",
    "ruta/de/la/imagen2.jpeg",
    // Puedes agregar más imágenes si es necesario
  ],
  descripcion: "Descripción breve del nuevo proyecto."
},
```
Asegúrate de agregar las imágenes en la siguiente sección (explicado abajo).

### 2. **Agregar imágenes para el nuevo proyecto**
- Entra en la carpeta **`public/proyectos`** dentro del repositorio.
- Haz clic en el botón **`Add file`** y luego en **`Upload files`**.
- Selecciona las imágenes desde tu computadora y súbelas a esta carpeta.
- Una vez que las imágenes se hayan subido, copia la ruta de cada imagen (que será algo como proyectos/imagen1.jpeg).
- Luego, ve a **`proyectos.ts`** (como se mostró antes) y actualiza las rutas de las imágenes en el proyecto correspondiente.

### 3. **Asegúrate de que las imágenes sean de estos tipos:**
- Formato permitido: `.jpeg`, `.jpg`, `.webp` (recomendado para mejor rendimiento).
- Tamaño recomendado: Las imágenes no deberían ser demasiado grandes. Intenta que el tamaño de cada imagen no supere los 2MB, para que la página cargue más rápido.
- Nombre de la imagen: Dale un nombre claro y con guiones, por ejemplo, proyecto1-imagen1.jpeg, para mantener las cosas organizadas.

### 4. **Cómo ver los cambios**
- Después de hacer estos cambios (agregar un proyecto y sus imágenes), los cambios se reflejarán automáticamente en la página web.
- Si todo está bien, tu nuevo proyecto aparecerá en la página de inicio del portfolio.

###  **5. Ver cambios en GitHub**
- Una vez que subas tus cambios, ve a la página de tu repositorio en GitHub.
- Si todo se hace correctamente, los cambios deberían reflejarse en la web del proyecto en Vercel sin necesidad de hacer nada adicional.

###  **¿Cómo ver el proyecto en tu máquina?**
- Si alguna vez quieres probar los cambios de manera local, puedes hacer esto fácilmente desde la interfaz de GitHub (sin usar la terminal). Sin embargo, lo más fácil es hacer cambios directamente en GitHub y ver los resultados en el sitio en vivo.

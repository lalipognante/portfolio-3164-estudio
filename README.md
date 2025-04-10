
# Portfolio 31 64 Estudio

## Descripción

Este es el **portfolio web** de **31 64 Estudio**. En este sitio web se presentan los proyectos más destacados del estudio con imágenes y descripciones para cada uno.

## 1. Cómo Agregar/Editar Proyectos

Para agregar o editar proyectos en la web, sigue estos pasos:

### Agregar un nuevo proyecto:
1. Abre el archivo **`data/proyectos.ts`**.
2. Al final de la lista de proyectos, agrega un nuevo objeto siguiendo esta estructura:

```ts
{
  titulo: "Nuevo Proyecto",
  descripcion: "Descripción detallada del nuevo proyecto.",
  imagenes: [
    "proyectos/imagen1.jpeg",
    "proyectos/imagen2.jpeg",
  ],
},
```

- **`titulo`**: Escribe el título del proyecto.
- **`descripcion`**: Escribe una breve descripción del proyecto.
- **`imagenes`**: Añade las rutas de las imágenes del proyecto (explicado más abajo).

### Editar un proyecto existente:
1. Abre el archivo **`data/proyectos.ts`**.
2. Modifica el objeto correspondiente al proyecto que deseas editar (cambia el título, la descripción o las imágenes).

---

## 2. Cómo Cargar Nuevas Imágenes

Para agregar nuevas imágenes a un proyecto, sigue estos pasos:

1. Entra en la carpeta **`public/proyectos`** en el repositorio.
2. Haz clic en **`Add file`** > **`Upload files`** para subir las imágenes desde tu computadora. (preferentemente utilizar formarto .webp, usar convertidor online)
3. Una vez subidas, obtén la ruta de cada imagen (será algo como `proyectos/imagen1.jpeg`).
4. Vuelve al archivo **`data/proyectos.ts`** y actualiza el array de imágenes del proyecto con la ruta de las nuevas imágenes, por ejemplo:

```ts
imagenes: [
  "proyectos/nueva-imagen1.jpeg",
  "proyectos/nueva-imagen2.jpeg",
]
```

---

## 3. Cómo Editar la Barra de Navegación

La barra de navegación (navbar) se encuentra en el archivo **`app/layout.tsx`**.

Para cambiar los textos del navbar (como "Proyectos", "Estudio", "Equipo", "Contacto", etc.):

1. Abre el archivo **`app/layout.tsx`**.
2. Busca la sección del navbar, que debería verse algo así:

```tsx
<nav className="flex flex-wrap gap-6 text-sm font-mono">
  <Link href="/" className="cursor-pointer hover:underline transition">
    Proyectos
  </Link>
  <Link href="/about" className="cursor-pointer hover:underline transition">
    Estudio
  </Link>
  <Link href="/team" className="cursor-pointer hover:underline transition">
    Equipo
  </Link>
  <Link href="/contact" className="cursor-pointer hover:underline transition">
    Contacto
  </Link>
</nav>
```

3. Cambia el texto de cualquier enlace. Por ejemplo, si quieres cambiar "Proyectos" a "Portfolio", solo cambia el contenido del enlace:

```tsx
<Link href="/" className="cursor-pointer hover:underline transition">
  Portfolio
</Link>
```

---

## 4. Descripciones de Cada Vista

Cada vista (Estudio, Equipo, Contacto) tiene una descripción que puedes editar. Aquí te explico cómo:

### Team:
1. Abre el archivo **`app/team/page.tsx`**.
2. Modifica la descripción o la lista de miembros del equipo en ese archivo.

### Contact:
1. Abre el archivo **`app/contact/page.tsx`**.
2. Modifica la información de contacto, como dirección, teléfono, correo electrónico, etc.

---

## 5. Cómo Editar el Logo y su Tamaño

El logo se encuentra en el archivo **`app/layout.tsx`**. Para editar el logo, sigue estos pasos:

1. Abre el archivo **`app/layout.tsx`**.
2. Busca el código correspondiente al logo. Deberías encontrar algo como esto:

```tsx
<header className="mb-10">
  <h1 className="text-xl md:text-2xl font-mono font-medium tracking-wide mb-4">
    31 64 ESTUDIO
  </h1>
</header>
```

Este código es donde se encuentra el nombre del estudio y el logo (puedes cambiar el texto si es necesario).

### Para cambiar la imagen del logo:

1. Coloca tu imagen en la carpeta **`public`** o en una subcarpeta dentro de **`public`**, por ejemplo, en **`public/images`**.
2. Luego, reemplaza el texto por una etiqueta **`<Image>`** como esta:

```tsx
import Image from "next/image";
import logo from '../public/images/logo.png'; // Cambia la ruta según sea necesario

<header className="mb-10">
  <Image src={logo} alt="31 64 Estudio" width={200} height={100} />
</header>
```

### Para cambiar el tamaño del logo:

El tamaño se ajusta con los valores de **`width`** y **`height`** en la etiqueta **`<Image>`**. Puedes cambiar estos valores según necesites, por ejemplo:

```tsx
<Image src={logo} alt="31 64 Estudio" width={150} height={80} />
```

### Para cambiar la posición del logo (izquierda, centro, derecha):

1. En el archivo **`app/layout.tsx`**, puedes cambiar el estilo del contenedor del logo, como sigue:

#### Para alinear el logo a la izquierda:
```tsx
<header className="mb-10 text-left">
  <Image src={logo} alt="31 64 Estudio" width={200} height={100} />
</header>
```

#### Para centrar el logo:
```tsx
<header className="mb-10 text-center">
  <Image src={logo} alt="31 64 Estudio" width={200} height={100} />
</header>
```

#### Para alinear el logo a la derecha:
```tsx
<header className="mb-10 text-right">
  <Image src={logo} alt="31 64 Estudio" width={200} height={100} />
</header>
```

---

## Licencia

Este proyecto está bajo la licencia **MIT**. Para más detalles, consulta el archivo `LICENSE`.

---

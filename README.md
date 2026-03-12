# Web Resume

Portfolio/CV personal con `Next.js`, `React` y `Tailwind CSS`, preparado para exportación estática y despliegue en GitHub Pages.

## Stack

- Next.js App Router
- React
- Tailwind CSS
- TypeScript
- GitHub Pages con GitHub Actions

## Desarrollo local

```bash
npm install
npm run dev
```

## Build estático

```bash
npm run build
```

La salida se genera en `out/`.

## Dónde editar contenido

- Perfil, experiencia y skills: [content/site.ts](/Users/jordi/dev/web_resume/content/site.ts)
- Proyectos del portfolio: [content/projects.ts](/Users/jordi/dev/web_resume/content/projects.ts)

## Cómo añadir un proyecto

Duplica un objeto dentro de `projects` en `content/projects.ts` con:

- `slug`
- `title`
- `year`
- `description`
- `stack`
- `impact`
- `href` y/o `repo`

## Deploy a GitHub Pages

1. Crea el repositorio en GitHub y sube este proyecto.
2. Activa GitHub Pages con `GitHub Actions` como source.
3. Asegúrate de que la rama principal sea `main`.
4. El workflow de [.github/workflows/deploy.yml](/Users/jordi/dev/web_resume/.github/workflows/deploy.yml) publicará el contenido al hacer push.
5. El dominio personalizado queda definido en [public/CNAME](/Users/jordi/dev/web_resume/public/CNAME).

## Siguiente mejora razonable

Si quieres que editar proyectos sea aún más cómodo, el siguiente paso natural es mover `projects` a `MDX` o a un mini CMS.

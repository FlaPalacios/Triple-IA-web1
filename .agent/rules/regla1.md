---
trigger: always_on
---

Estructura y Modularización (Frontend-First)
Componentización: "Divide cada sección de la web (Hero, Servicios, Casos de Éxito) en componentes independientes y reutilizables dentro de la carpeta /components".

Data-Driven UI: "No escribas el contenido directamente en el HTML/JSX. Define toda la información (servicios, casos de éxito, links de Calendly) en un archivo central de configuración o constantes (/config/content.ts)".

Clean Code: "Usa nombres de variables descriptivos en inglés, sigue principios SOLID y evita funciones excesivamente largas o complejas".

2. Estándares de Estilo y UI (Tailwind CSS)
Consistencia Visual: "Utiliza exclusivamente las clases de Tailwind CSS respetando la paleta de colores definida: Azul marino (#0F172A), grises y blanco".

Responsive por Defecto: "Todo componente debe ser diseñado con enfoque 'Mobile First', asegurando que se vea perfecto en móviles, tablets y desktop".

Rendimiento de Imágenes: "Implementa 'Lazy Loading' y utiliza formatos optimizados como WebP para todas las capturas de dashboards y servicios".

3. Lógica de Negocio y Conversión
Manejo de Enlaces Externos: "Configura los botones de 'Conversemos' y 'Agendar' para que abran Google Forms y Calendly en pestañas nuevas (target='_blank') para no perder el tráfico de la web".

Validación de Formularios: "Aunque el formulario redirija a Google Forms, implementa validaciones básicas en el frontend para asegurar que los campos tengan el formato correcto antes de salir de la web".

4. Seguridad y Buenas Prácticas (Sin Backend)
Protección de Datos: "No expongas comentarios, claves de prueba o datos sensibles en el código fuente del frontend".

Sanitización: "Asegura que cualquier input del usuario sea tratado como información no confiable para evitar vulnerabilidades básicas de inyección".

Mantenibilidad: "El código debe estar preparado para una futura migración a un backend real (Node.js/Python) mediante una clara separación entre la capa de presentación y la lógica de datos".
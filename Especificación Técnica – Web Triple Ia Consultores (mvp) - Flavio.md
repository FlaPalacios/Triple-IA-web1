# **ESPECIFICACIÓN TÉCNICA**

## **Web Institucional – TRIPLE IA CONSULTORES (MVP)**

---

## **1\. VISIÓN GENERAL DEL PROYECTO**

### **1.1 Contexto**

TRIPLE IA CONSULTORES es una firma de consultoría orientada a innovación, transformación digital, inteligencia artificial y ciencia de datos. La web tendrá como objetivo principal servir como **plataforma de presentación profesional**, **validación de capacidades técnicas** y **soporte comercial**.

El sitio funcionará inicialmente como un **MVP institucional**, con énfasis en:

* Credibilidad técnica  
* Claridad de servicios  
* Evidencia visual de capacidades (dashboards, analítica, proyectos)

No se busca inicialmente una plataforma compleja ni autogestionable, sino una base sólida, escalable y técnicamente correcta.

### **1.2 Objetivos del Proyecto**

* Presentar la propuesta de valor de TRIPLE IA CONSULTORES  
* Mostrar servicios de forma clara y estructurada  
* Exhibir evidencia técnica mediante capturas de dashboards y proyectos reales  
* Facilitar el contacto con potenciales clientes  
* Sentar bases técnicas para futuras ampliaciones (blog, casos de estudio, autenticación)

### **1.3 Alcance del MVP**

Incluye:

* Web pública informativa  
* Secciones institucionales y de servicios  
* Galería / showcase de proyectos (estáticos)  
* Página de contacto

Excluye en esta fase:

* Panel administrativo  
* Autenticación de usuarios  
* Backend complejo o base de datos

---

## **2\. REQUERIMIENTOS FUNCIONALES**

### **2.1 Navegación General**

* Menú principal accesible desde todas las páginas  
* Navegación fluida entre secciones  
* Scroll suave y comportamiento responsive

### **2.2 Secciones del Sitio**

**Orden oficial:** Inicio → Nosotros → Servicios → Casos de Éxito → Contacto.

#### **2.2.1 Home / Landing**

* Hero section con mensaje claro de propuesta de valor  
* Llamado a la acción (CTA): contacto o servicios

#### **2.2.2 Quiénes Somos**

* Descripción institucional  
* Enfoque estratégico \+ tecnológico

#### **2.2.3 Servicios**

| Servicio | Descripción Breve | Elemento Visual |
| :---- | :---- | :---- |
| **Formulación de proyectos** | Estructuración técnica y económica de iniciativas de innovación. | Imagen de planificación/blueprint. |
| **Asesoría y ejecución de proyectos financiados** | Acompañamiento en la gestión y cumplimiento de fondos adjudicados. | Imagen de gestión de proyectos. |
| **Identificación de oportunidades de financiamiento** | Scouting de fondos nacionales e internacionales para I+D+i. | Imagen de análisis de mercado. |
| **Capacitación en Innovación e IA** | Talleres especializados para el fortalecimiento de capacidades. | Imagen de equipo en formación. |
| **Consultorías especializadas en IA** | Diseño e implementación de soluciones basadas en datos. | Imagen de analítica avanzada. |

**Interacción:** Cada servicio incluirá un botón **"Conversemos"** con redirección al formulario de captación.

#### **2.2.4 Proyectos / Capacidades Técnicas**

* Sección tipo **showcase**  
* Inclusión de:  
  * Capturas de dashboards  
  * Visualizaciones de analítica  
  * Descripción corta del problema y solución  
* No requiere datos sensibles ni accesos reales

#### **2.2.5 Contacto**

**Propuesta:** Menos texto, más beneficios de contactar (ej. "Diagnóstico inicial gratuito").  
**Canales de Acción:**

* Botón Primario: Formulario de Google (para recolección de datos).  
* Botón Secundario: Calendly (para agendar reunión directa).

**Información Institucional:**

* **Email:** (Pendiente por definir)  
* **Teléfono:** (Pendiente por definir)  
* **Ubicación:** Lima, Perú.  
* **Horario:** (Especificar franja horaria de atención).

---

## **3\. REQUERIMIENTOS NO FUNCIONALES**

### **3.1 Rendimiento**

* Tiempo de carga inicial \< 3 segundos  
* Optimización de imágenes (dashboards incluidos)  
* Lazy loading en secciones visuales

### **3.2 Escalabilidad**

* Arquitectura preparada para:  
  * Añadir backend  
  * Añadir CMS  
  * Añadir autenticación

### **3.3 Mantenibilidad**

* Código modular  
* Separación clara entre UI, lógica y configuración  
* Uso de convenciones estándar

### **3.4 Compatibilidad**

* Compatible con navegadores modernos (Chrome, Edge, Firefox)  
* Responsive (desktop, tablet, mobile)

### **3.5 Accesibilidad**

* Contraste adecuado  
* Tipografía legible  
* Navegación clara

---

## **4\. ARQUITECTURA TÉCNICA**

### **4.1 Enfoque General**

Arquitectura **frontend-first**, sin backend en el MVP.

### **4.2 Stack Tecnológico Propuesto**

**Frontend**

* Framework: React \+ Vite o Next.js (preferible)  
* Lenguaje: TypeScript  
* Estilos: Tailwind CSS

**Hosting**

* Vercel / Netlify

**Assets**

* Imágenes optimizadas (WebP)  
* Dashboards como imágenes estáticas

### **4.3 Estructura General del Proyecto**

* /components  
* /pages o /app  
* /assets  
* /styles  
* /config

---

## **5\. INTERFAZ DE USUARIO (UI)**

### **5.1 Principios de Diseño**

* Estilo corporativo, moderno y tecnológico  
* Uso de colores sobrios (azul \#1D4469, beige \#BDB6A0, blanco \#E6E6E6 y oscuro \#1F1F1F.  
* Jerarquía visual clara  
* No muy extensa, objetiva

### **5.2 Componentes Clave**

* Navbar fija  
* Hero section  
* Cards de servicios  
* Cards de proyectos  
* Footer institucional

### **5.3 Visualización de Dashboards**

* Mockups o capturas reales  
* Enmarcadas como productos profesionales  
* Texto explicativo breve

---

## **6\. LÓGICA DE NEGOCIO Y AUTENTICACIÓN**

### **6.1 Lógica de Negocio (MVP)**

En el MVP la lógica de negocio es **mínima y controlada**, enfocada en presentación de información.

Componentes clave:

* Renderizado de servicios desde configuración estática  
* Renderizado de proyectos/dashboards desde data mock (JSON / constants)  
* Manejo de estado simple para formularios (React state)

No se implementa:

* Persistencia de datos  
* Flujos transaccionales  
* Procesos asíncronos complejos

### **6.2 Autenticación**

En esta fase:

* ❌ No hay autenticación de usuarios

Decisión técnica consciente para:

* Reducir complejidad  
* Acelerar entrega  
* Evitar manejo innecesario de datos sensibles

La arquitectura quedará preparada para integrar en el futuro:

* Auth con OAuth (Google / Microsoft)  
* Roles (admin / editor)

---

## **7\. MANEJO DE ERRORES Y SEGURIDAD**

### **7.1 Manejo de Errores**

Frontend:

* Validación básica de formularios  
* Mensajes claros al usuario  
* Fallback UI para errores de renderizado

Ejemplos:

* Campos obligatorios no completados  
* Error en envío de formulario (mock)

### **7.2 Seguridad**

Medidas aplicables al MVP:

* No exposición de claves o secretos  
* No inclusión de datos reales o sensibles en proyectos  
* Uso de HTTPS (provisto por hosting)

Buenas prácticas:

* Sanitización básica de inputs  
* Protección contra spam (futuro: reCAPTCHA)

---

## **8\. MEJORAS FUTURAS (POST-MVP)**

### **8.1 Funcionales**

* CMS para gestión de contenido  
* Casos de estudio dinámicos  
* Blog técnico  
* Formularios avanzados con tracking

### **8.2 Técnicas**

* Backend (Node / Python)  
* Base de datos (PostgreSQL / Supabase)  
* Autenticación y roles  
* Integración con herramientas BI (embeds)

### **8.3 Negocio**

* Landing pages por servicio  
* Integración con CRM  
* Métricas de conversión

---

## **9\. CRITERIOS DE ACEPTACIÓN**

El MVP se considera aceptado cuando:

* La web carga correctamente en desktop y mobile  
* La navegación es clara y fluida  
* Los servicios están correctamente descritos  
* La sección de proyectos muestra evidencia técnica  
* El formulario de contacto funciona a nivel visual  
* El sitio transmite profesionalismo y solidez técnica

---

## **10\. GUÍA DE IMPLEMENTACIÓN**

### **10.1 Fases**

1. Definición de contenido  
2. Diseño UI básico  
3. Desarrollo frontend  
4. Optimización  
5. Deploy

### **10.2 Orden Técnico Sugerido**

* Setup del proyecto  
* Layout base  
* Componentes reutilizables  
* Secciones principales  
* Optimización de assets

---

## **11\. RECURSOS Y REFERENCIAS**

### **11.1 Técnicos**

* React / Next.js Docs  
* Tailwind CSS Docs  
* Vercel / Netlify

### **11.2 Inspiración**

* Sitios de consultoras tecnológicas  
* Dashboards BI profesionales

---

## **NOTA FINAL**

Este documento define el **MVP técnico inicial** de TRIPLE IA CONSULTORES. Está diseñado para evolucionar sin reescrituras mayores y servir como base sólida para futuras fases del producto.


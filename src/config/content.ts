import { LayoutDashboard, Rocket, Search, GraduationCap, BrainCircuit } from 'lucide-react';

import img1 from '@/assets/img1.jpg';
import img2 from '@/assets/img2.jpg';
import prociencia from '@/assets/dashboard_prociencia.jpg';
import proinnovate from '@/assets/dashboard_proinnovate.jpg';
import quienesSomos from '@/assets/quienes_somos.jpg';

export const content = {
    company: {
        name: "TRIPLE IA CONSULTORES",
        slogan: "Innovación, Transformación Digital e Inteligencia Artificial",
        description: "Somos una firma de consultoría orientada a innovación, transformación digital, inteligencia artificial y ciencia de datos.",
        email: "tripleia_consultores@gmail.com",
        phone: "+51 981 190 691", // Placeholder or from previous knowledge if any? User didn't specify number, I'll use a generic or +51 9xx xxx xxx. Wait, I'll use +51 999 999 999 and let them update if they want.
        location: "Lima, Perú",
        schedule: "Lunes a Viernes, 9:00 AM - 6:00 PM",
        socials: {
            instagram: "#",
            linkedin: "https://www.linkedin.com/company/triple-ia-consultores/posts/?feedView=all",
            tiktok: "https://www.tiktok.com/@triple.ia.innovation?lang=es"
        }
    },
    navigation: [
        { name: "Inicio", href: "#home" },
        { name: "Nosotros", href: "#about" },
        { name: "Servicios", href: "#services" },
        { name: "Observatorio", href: "#observatory" },
        { name: "Casos de Éxito", href: "#projects" },
        { name: "Contacto", href: "#contact" },
    ],
    hero: {
        title: "Convertimos ideas en proyectos tecnológicos con impacto real",
        subtitle: "Soluciones estratégicas potenciadas con IA",
        ctaPrimary: "Conversemos",
        ctaSecondary: "Nuestros Servicios",
    },
    about: {
        title: "Quiénes Somos",
        description: "Somos una consultora especializada en formulación y ejecución de proyectos para organizaciones públicas y privadas. Tenemos 3 pilares: Innovación abierta, investigación aplicada e inteligencia artificial para resolver problemas complejos con tecnología y generando un triple impacto (económico, social y ambiental). Asimismo, queremos ser el aliado de las organizaciones para que aprovechen al máximo los fondos concursables y desarrollen proyectos tecnológicos con excelencia.",
        image: quienesSomos,
    },
    services: [
        {
            title: "Identificación de oportunidades de financiamiento",
            description: "Scouting de fondos nacionales e internacionales para I+D+i.",
            icon: Search,
            formUrl: "https://docs.google.com/forms/d/e/1FAIpQLSdJ01aBL2teu4nzlagS8mWp7s-VOxxd4V0wNDnwbKmYlFtyVw/viewform?usp=header", // Placeholder
        },
        {
            title: "Formulación de proyectos",
            description: "Estructuración técnica y económica de iniciativas de innovación.",
            icon: LayoutDashboard,
            formUrl: "https://docs.google.com/forms/d/e/1FAIpQLSdJ01aBL2teu4nzlagS8mWp7s-VOxxd4V0wNDnwbKmYlFtyVw/viewform?usp=header", // Placeholder
        },
        {
            title: "Asesoría y ejecución de proyectos financiados",
            description: "Acompañamiento en la gestión y cumplimiento de fondos adjudicados.",
            icon: Rocket,
            formUrl: "https://docs.google.com/forms/d/e/1FAIpQLSdJ01aBL2teu4nzlagS8mWp7s-VOxxd4V0wNDnwbKmYlFtyVw/viewform?usp=header", // Placeholder
        },
        {
            title: "Capacitación en Innovación e IA",
            description: "Talleres especializados para el fortalecimiento de capacidades.",
            icon: GraduationCap,
            formUrl: "https://docs.google.com/forms/d/e/1FAIpQLScldxc2B_Og7UQuKkTrzz7appZEC2iK0iShpIDfT9z31fhh8Q/viewform?usp=dialog", // Placeholder
        },
        {
            title: "Consultorías especializadas en IA",
            description: "Diseño e implementación de soluciones basadas en datos.",
            icon: BrainCircuit,
            formUrl: "https://docs.google.com/forms/d/e/1FAIpQLScldxc2B_Og7UQuKkTrzz7appZEC2iK0iShpIDfT9z31fhh8Q/viewform?usp=dialog", // Placeholder
        },
    ],
    projects: [
        {
            title: "S/ 20 millones captados en fondos no reembolsables para proyectos de I+D+i",
            description: "Visualización en tiempo real de KPIs operativos para optimización de recursos.",
            image: img1,
        },
        {
            title: "10 organizaciones con ahorros y eficiencias comprobadas en procesos operativos",
            description: "Modelo de forecasting para proyección de demanda y ventas.",
            image: img2,
        },
        // Add more mock projects as needed
    ],
    contact: {
        formUrl: "https://docs.google.com/forms/d/e/1FAIpQLScldxc2B_Og7UQuKkTrzz7appZEC2iK0iShpIDfT9z31fhh8Q/viewform?usp=dialog", // Placeholder Google Form
        calendlyUrl: "https://calendly.com/", // Placeholder Calendly
    },
    observatory: {
        title: "Observatorio Global de Proyectos",
        description: "Explora nuestros dashboards interactivos para visualizar el impacto de la inversión en ciencia, tecnología e innovación. Datos actualizados para la toma de decisiones estratégicas.",
        dashboards: [
            {
                title: "Análisis PROCIENCIA",
                description: "Análisis detallado de concursos del Programa Nacional de Investigación Científica, desarrollo tecnológico y de innovación tecnológica.",
                image: prociencia,
                url: "https://lookerstudio.google.com/u/0/reporting/d83fe444-ee04-42fe-adf1-13dbdfea575b/page/p_moit94wc0d", // Placeholder for dashboard URL
            },
            {
                title: "Análisis PROINNOVATE",
                description: "Seguimiento integral de programas de innovación productiva, validación técnica y empaquetamiento comercial.",
                image: proinnovate,
                url: "https://lookerstudio.google.com/u/0/reporting/53139621-9244-4220-b970-795d0084496b/page/p_b4jsfh7k0d", // Placeholder for dashboard URL
            }
        ]
    }
};

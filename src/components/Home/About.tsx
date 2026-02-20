import React from 'react';
import { Section } from '@/components/UI/Section';
import { content } from '@/config/content';

export const About: React.FC = () => {
    const { title, description, image } = content.about;

    return (
        <Section id="about" className="bg-white">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="order-2 lg:order-1">
                    <h2 className="text-3xl font-bold text-primary mb-6 relative inline-block">
                        {title}
                        <span className="absolute bottom-0 left-0 w-1/3 h-1 bg-secondary rounded-full"></span>
                    </h2>
                    <p className="text-lg text-gray-600 leading-relaxed mb-6 text-justify">
                        {description}
                    </p>
                    <div className="grid grid-cols-2 gap-6 mt-8">
                        <div className="p-4 bg-gray-50 rounded-lg border-l-4 border-secondary">
                            <h4 className="font-bold text-primary text-xl mb-1">Estrategia</h4>
                            <p className="text-sm text-gray-500">Diseño estratégico y estructuración de proyectos de I+D+i alineados a objetivos institucionales.</p>
                        </div>
                        <div className="p-4 bg-gray-50 rounded-lg border-l-4 border-accent">
                            <h4 className="font-bold text-primary text-xl mb-1">Tecnología & IA</h4>
                            <p className="text-sm text-gray-500">Soluciones avanzadas para la toma de decisiones, automatización y optimización de procesos complejos.</p>
                        </div>
                        <div className="p-4 bg-gray-50 rounded-lg border-l-4 border-accent">
                            <h4 className="font-bold text-primary text-xl mb-1">Data-Driven</h4>
                            <p className="text-sm text-gray-500">Resultados medibles, basados en evidencia, con modelos escalables y replicables.</p>
                        </div>
                        <div className="p-4 bg-gray-50 rounded-lg border-l-4 border-secondary">
                            <h4 className="font-bold text-primary text-xl mb-1">Impacto</h4>
                            <p className="text-sm text-gray-500">Proyectos con impacto económico, social y ambiental claramente definido y medible.</p>
                        </div>
                    </div>
                </div>
                <div className="order-1 lg:order-2 relative">
                    <div className="absolute -inset-4 bg-accent/20 rounded-xl transform rotate-3 transition-transform duration-500 hover:rotate-6"></div>
                    <img
                        src={image}
                        alt="Equipo Triple IA"
                        className="relative rounded-xl shadow-lg w-full object-cover h-[400px] bg-gray-200"
                        onError={(e) => { e.currentTarget.src = 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800'; }}
                    />
                </div>
            </div>
        </Section>
    );
};

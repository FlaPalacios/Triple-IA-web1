import React from 'react';
import { Section } from '@/components/UI/Section';
import { Card } from '@/components/UI/Card';
import { content } from '@/config/content';

export const Projects: React.FC = () => {
    return (
        <Section id="projects" className="bg-gray-50">
            <div className="text-center mb-16">
                <h2 className="text-3xl font-bold text-primary mb-4">Casos de Éxito</h2>
                <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                    Resultados reales que demuestran nuestra capacidad técnica.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {content.projects.map((project, index) => (
                    <Card
                        key={index}
                        title={project.title}
                        description={project.description}
                        image={project.image}
                        className="hover:-translate-y-1 transition-transform duration-300"
                    />
                ))}
            </div>
        </Section>
    );
};

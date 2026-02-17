import React from 'react';
import { Section } from '@/components/UI/Section';
import { Card } from '@/components/UI/Card';
import { Button } from '@/components/UI/Button';
import { content } from '@/config/content';

export const Services: React.FC = () => {
    return (
        <Section id="services" className="bg-gray-50">
            <div className="text-center mb-16">
                <h2 className="text-3xl font-bold text-primary mb-4">Nuestros Servicios</h2>
                <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                    Innovación inteligente para empresas que crecen
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {content.services.map((service, index) => (
                    <Card
                        key={index}
                        title={service.title}
                        description={service.description}
                        icon={service.icon}
                        action={
                            <a href={service.formUrl} target="_blank" rel="noopener noreferrer" className="block w-full">
                                <Button variant="secondary" fullWidth>
                                    Conversemos
                                </Button>
                            </a>
                        }
                    />
                ))}
            </div>
        </Section>
    );
};

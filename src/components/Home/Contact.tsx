import React from 'react';
import { Section } from '@/components/UI/Section';
import { Button } from '@/components/UI/Button';
import { content } from '@/config/content';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';

export const Contact: React.FC = () => {
    return (
        <Section id="contact" className="bg-white text-gray-900 py-32 lg:py-40 scroll-mt-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <div>
                    <h2 className="text-4xl font-bold mb-8 text-primary">Empecemos a trabajar juntos</h2>
                    <p className="text-xl text-gray-600 mb-10 leading-relaxed">
                        ¿Listo para transformar tu negocio con Inteligencia Artificial?
                        Agenda una reunión con nosotros o llena el formulario para un diagnóstico inicial gratuito.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-6 mb-12">
                        <a href={content.contact.formUrl} target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
                            <Button className="w-full sm:w-auto text-lg px-8 py-4 shadow-xl bg-secondary text-white hover:bg-secondary/90 border-transparent">
                                Llenar Formulario
                            </Button>
                        </a>
                        <a href={content.contact.calendlyUrl} target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
                            <Button className="w-full sm:w-auto text-lg px-8 py-4 shadow-xl bg-primary text-white hover:bg-primary/90 border-transparent">
                                Agendar Reunión
                            </Button>
                        </a>
                    </div>
                </div>

                <div className="bg-primary p-10 rounded-2xl shadow-2xl border border-gray-800 text-white transform hover:-translate-y-2 transition-transform duration-300">
                    <h3 className="text-2xl font-bold mb-8 text-accent">Información de Contacto</h3>
                    <ul className="space-y-8">
                        <li className="flex items-start">
                            <div className="bg-white/10 p-3 rounded-lg mr-4">
                                <Mail className="w-6 h-6 text-accent" />
                            </div>
                            <div>
                                <span className="block text-sm text-gray-400 mb-1">Email</span>
                                <span className="text-lg font-medium">{content.company.email}</span>
                            </div>
                        </li>
                        <li className="flex items-start">
                            <div className="bg-white/10 p-3 rounded-lg mr-4">
                                <Phone className="w-6 h-6 text-accent" />
                            </div>
                            <div>
                                <span className="block text-sm text-gray-400 mb-1">Celular</span>
                                <span className="text-lg font-medium">{content.company.phone}</span>
                            </div>
                        </li>
                        <li className="flex items-start">
                            <div className="bg-white/10 p-3 rounded-lg mr-4">
                                <MapPin className="w-6 h-6 text-accent" />
                            </div>
                            <div>
                                <span className="block text-sm text-gray-400 mb-1">Ubicación</span>
                                <span className="text-lg font-medium">{content.company.location}</span>
                            </div>
                        </li>
                        <li className="flex items-start">
                            <div className="bg-white/10 p-3 rounded-lg mr-4">
                                <Clock className="w-6 h-6 text-accent" />
                            </div>
                            <div>
                                <span className="block text-sm text-gray-400 mb-1">Horario</span>
                                <span className="text-lg font-medium">{content.company.schedule}</span>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </Section>
    );
};

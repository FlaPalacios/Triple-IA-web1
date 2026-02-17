import React from 'react';
import { content } from '@/config/content';
import { Instagram, Linkedin } from 'lucide-react';

export const Footer: React.FC = () => {
    return (
        <footer className="bg-primary text-white py-12 border-t border-gray-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div className="col-span-1 md:col-span-2">
                        <h3 className="text-2xl font-bold mb-4">TRIPLE IA CONSULTORES</h3>
                        <p className="text-gray-300 max-w-sm mb-6">
                            {content.company.description}
                        </p>
                        <div className="flex space-x-4">
                            <a href={content.company.socials.instagram} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-accent transition-colors">
                                <Instagram size={24} />
                            </a>
                            <a href={content.company.socials.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-accent transition-colors">
                                <Linkedin size={24} />
                            </a>
                            <a href={content.company.socials.tiktok} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-accent transition-colors">
                                <svg
                                    viewBox="0 0 24 24"
                                    className="w-6 h-6 fill-current"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.17-2.81-.73-3.95-1.68-.1.49-.16.99-.17 1.25.12 6.64-4.22 12.3-10.74 13.56-3.13.6-6.42-.1-9.04-1.95C-1.87 18.33-3.16 11.23 2.5 7.15c2.47-1.78 5.86-2.15 8.71-.97V10.2c-1.76-.73-3.86-.48-5.3 1.14-1.49 1.67-1.43 4.39.12 6.13 1.54 1.73 4.23 2.08 6.18.72 1.15-.81 1.74-2.15 1.74-3.56V.02h-.42z" />
                                </svg>
                            </a>
                        </div>
                    </div>

                    <div>
                        <h4 className="text-lg font-semibold mb-4 text-accent">Navegación</h4>
                        <ul className="space-y-2">
                            {content.navigation.map((item) => (
                                <li key={item.name}>
                                    <a href={item.href} className="text-gray-300 hover:text-white transition-colors">
                                        {item.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-lg font-semibold mb-4 text-accent">Contacto</h4>
                        <ul className="space-y-2 text-gray-300">
                            <li>{content.company.location}</li>
                            <li>{content.company.email}</li>
                            <li>{content.company.phone}</li>
                            <li>{content.company.schedule}</li>
                        </ul>
                    </div>
                </div>

                <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-400 text-sm">
                    <p>&copy; {new Date().getFullYear()} {content.company.name}. Todos los derechos reservados.</p>
                </div>
            </div>
        </footer>
    );
};

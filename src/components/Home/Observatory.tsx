import React from 'react';
import { Section } from '@/components/UI/Section';
import { Button } from '@/components/UI/Button';
import { content } from '@/config/content';
import { ExternalLink } from 'lucide-react';

export const Observatory: React.FC = () => {
    return (
        <Section id="observatory" className="bg-white">
            <div className="text-center mb-16">
                <h2 className="text-3xl font-bold text-secondary mb-4">{content.observatory.title}</h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                    {content.observatory.description}
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
                {content.observatory.dashboards.map((dashboard, index) => (
                    <div
                        key={index}
                        className="group relative bg-[#E6E6E6] border border-[#BDB6A0] rounded-[12px] overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-2 flex flex-col"
                    >
                        {/* Image Container with overlay */}
                        <a href={dashboard.url} target="_blank" rel="noopener noreferrer" className="relative h-64 overflow-hidden border-b border-[#BDB6A0]/30 block cursor-pointer">
                            <img
                                src={dashboard.image}
                                alt={dashboard.title}
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-secondary/0 group-hover:bg-secondary/10 transition-colors duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                                <ExternalLink className="w-12 h-12 text-white drop-shadow-lg" />
                            </div>
                        </a>

                        {/* Content */}
                        <div className="p-8 flex flex-col flex-grow">
                            <h3 className="text-[#1D4469] text-[24px] font-bold mb-4">
                                {dashboard.title}
                            </h3>
                            <p className="text-gray-700 mb-8 flex-grow leading-relaxed">
                                {dashboard.description}
                            </p>

                            <a href={dashboard.url} target="_blank" rel="noopener noreferrer" className="block w-full">
                                <Button
                                    className="w-full bg-[#1D4469] text-[#E6E6E6] hover:bg-[#1D4469]/90 py-6 text-lg group-hover:shadow-md transition-all"
                                >
                                    Ver Dashboard
                                </Button>
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </Section>
    );
};

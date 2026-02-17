import React from 'react';
import { Button } from '@/components/UI/Button';
import { content } from '@/config/content';

export const Hero: React.FC = () => {
    return (
        <div id="home" className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden bg-primary">
            {/* Background with overlay */}
            <div className="absolute inset-0 z-0">
                {/* Placeholder for background image - using a gradient for now */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary via-secondary to-primary opacity-90"></div>
                <img
                    src="/assets/hero-bg.jpg"
                    alt="Hero Background"
                    className="w-full h-full object-cover mix-blend-overlay opacity-20"
                    onError={(e) => e.currentTarget.style.display = 'none'}
                />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white tracking-tight mb-6">
                    {content.hero.title}
                </h1>
                <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-200 mb-10">
                    {content.hero.subtitle}
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                    <a href="#contact">
                        <Button variant="primary" className="w-full sm:w-auto text-lg px-8 py-4">
                            {content.hero.ctaPrimary}
                        </Button>
                    </a>
                    <a href="#services">
                        <Button variant="outline" className="w-full sm:w-auto text-lg px-8 py-4 border-white text-white hover:bg-white/10">
                            {content.hero.ctaSecondary}
                        </Button>
                    </a>
                </div>
            </div>

            {/* Scroll indicator */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce hidden md:block">
                <svg className="w-6 h-6 text-white" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                    <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
                </svg>
            </div>
        </div>
    );
};

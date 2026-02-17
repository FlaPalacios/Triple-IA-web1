import React from 'react';
import { Hero } from '@/components/Home/Hero';
import { About } from '@/components/Home/About';
import { Services } from '@/components/Home/Services';
import { Observatory } from '@/components/Home/Observatory';
import { Projects } from '@/components/Home/Projects';
import { Contact } from '@/components/Home/Contact';

export const Home: React.FC = () => {
    return (
        <>
            <Hero />
            <About />
            <Services />
            <Observatory />
            <Projects />
            <Contact />
        </>
    );
};

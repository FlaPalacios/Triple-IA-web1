import React from 'react';

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
    id?: string;
    className?: string;
    children: React.ReactNode;
}

export const Section: React.FC<SectionProps> = ({
    id,
    className = '',
    children,
    ...props
}) => {
    return (
        <section
            id={id}
            className={`py-16 md:py-24 relative overflow-hidden ${className}`}
            {...props}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {children}
            </div>
        </section>
    );
};

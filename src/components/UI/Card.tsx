import React from 'react';

interface CardProps {
    title: string;
    description: string;
    icon?: React.ElementType; // For services
    image?: string; // For projects
    action?: React.ReactNode;
    className?: string;
}

export const Card: React.FC<CardProps> = ({
    title,
    description,
    icon: Icon,
    image,
    action,
    className = ''
}) => {
    return (
        <div className={`bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden flex flex-col h-full border border-gray-100 ${className}`}>
            {image && (
                <div className="h-48 w-full overflow-hidden bg-gray-100">
                    <img
                        src={image}
                        alt={title}
                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                        loading="lazy"
                    />
                </div>
            )}

            <div className="p-6 flex-1 flex flex-col">
                {Icon && (
                    <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mb-4 text-secondary">
                        <Icon size={24} />
                    </div>
                )}

                <h3 className="text-xl font-bold text-primary mb-3">{title}</h3>
                <p className="text-gray-600 mb-6 flex-1 leading-relaxed">
                    {description}
                </p>

                {action && (
                    <div className="mt-auto pt-4">
                        {action}
                    </div>
                )}
            </div>
        </div>
    );
};

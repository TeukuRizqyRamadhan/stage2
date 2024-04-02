import React from 'react';

interface CardProps {
    testi: string;
    name: string;
}

export const Testi = "Perfect app. My wife and use it to track all our expenses and income. We generate our household accounts and budget using this fab app."


const CardTestimonial: React.FC<CardProps> = ({ testi, name }) => {
    return (
        <div className="w-56 max-w-sm bg-white border rounded-lg pt-3 ps-2 pe-2">
            <h5 className="p-4 text-center mb-5">{testi}</h5>
            <h5 className="mb-4 text-md text-center font-semibold">{name}</h5>
        </div>
    );
};


export default CardTestimonial;

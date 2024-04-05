import React, { useContext } from 'react';
import { cardContext } from '../context/card'

const Card = (): React.JSX.Element => {
    const { cards } = useContext(cardContext)
    return (
        <>
            {cards.map((card) => (
                <div key={card.id} className="w-full max-w-sm bg-white border rounded-lg w-64">
                    <img className="p-8 rounded-t-lg w-1/2 mx-auto" src={card.imageSrc} alt="product image" />
                    <h5 className="mb-8 text-xl text-center font-semibold tracking-tight text-blue-900">{card.title}</h5>
                </div>
            ))}
        </>
    );
};

export default Card;

import React, { useContext } from 'react';
import { ICardTestimonial } from '../interface/cardTestimonial'
import { testiContext } from '../context/testimoni'

const CardTestimonial = (): React.JSX.Element => {
    const { testis } = useContext(testiContext)
    return (
        <>
            {testis.map((testi) => (
                <div key={testi.id} className="w-56 max-w-sm bg-white border rounded-lg pt-3 ps-2 pe-2">
                    <h5 className="p-4 text-center mb-5">{testi.testi}</h5>
                    <h5 className="mb-4 text-md text-center font-semibold">{testi.name}</h5>
                </div>
            ))}
        </>
    );
};


export default CardTestimonial;

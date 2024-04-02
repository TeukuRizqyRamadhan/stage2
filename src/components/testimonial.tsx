// import React from 'react'
import { Testi } from "../atom/cardTestimonial"

import CardTestimonial from "../atom/cardTestimonial"

const Testimonial = () => {
    return (
        <>
            <div className="text-center mt-5">
                <h1 className="text-5xl font-semibold text-blue-900 tracking-wide">See what others have to say</h1>
            </div>

            <div className="flex flex-wrap justify-center mt-5 gap-6">
                <div className="flex flex-wrap justify-center mt-10 gap-6">
                    <CardTestimonial testi={Testi} name="Ilham Fathullah" />
                    <CardTestimonial testi={Testi} name="Hilal Akbar" />
                    <CardTestimonial testi={Testi} name="Hizamrul Jaen" />
                </div>
            </div>

        </>
    )
}

export default Testimonial

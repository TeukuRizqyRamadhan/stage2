// import React from 'react'
import Card from '../atom/card'
import Card1 from '../assets/card1.png';
import Card2 from '../assets/card2.png';
import Card3 from '../assets/card3.png';
import Card4 from '../assets/card4.png';

const Hero = () => {
    return (
        <>
            <div className="text-center mt-5">
                <h1 className="text-5xl font-bold text-green-300 tracking-wide">Simple Way</h1>
                <h1 className="text-5xl font-bold">
                    <span className="text-blue-900 tracking-wide">to Manage </span>
                    <span className="text-green-300 tracking-wide">personal finance</span>
                </h1>
            </div>

            <div className="flex flex-wrap justify-center mt-10 gap-6">
                <Card imageSrc={Card1} title="100% Secured Data" />
                <Card imageSrc={Card2} title="Trusted by users" />
                <Card imageSrc={Card3} title="Easy to use" />
                <Card imageSrc={Card4} title="App of the day" />
            </div>

        </>
    )
}

export default Hero

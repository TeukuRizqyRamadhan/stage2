import React from "react";
import { CardProvider } from "../context/card/CardProvider";
import Card from "../atom/card"

const Hero = (): React.JSX.Element => {
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
                <CardProvider>
                    <Card />
                </CardProvider>
            </div>

        </>
    )
}

export default Hero

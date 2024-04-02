// import React from "react"
import TableMain1 from "../atom/tableMain1"
import TableMain2 from "../atom/tableMain2"
import TableMain3 from "../atom/tableMain3"
import AddTrans from "../assets/addtrans.png"

const MainDashboard = () => {
    return (
        <>
            <div className="container mx-auto mt-5 text-center justify-center grid grid-cols-3 flex gap-5 border-b border-green-500 ">
                <h1 className="font-bold text-xl text-blue-900">LAST MONTH</h1>
                <h1 className="font-bold text-xl text-blue-900 border-b-4 border-green-500">THIS MONTH</h1>
                <h1 className="font-bold text-xl text-blue-900">FUTURE</h1>
            </div>
            <div className="flex flex-wrap justify-center mt-10 gap-11 items-start">
                <div className="w-full sm:w-auto">
                    <TableMain1 />
                </div>
                <div className="w-full sm:w-auto">
                    <TableMain2 />
                </div>
                <div className="w-full sm:w-auto">
                    <TableMain3 />
                </div>
            </div>

            <img src={AddTrans} alt="" className="absolute bottom-4 right-4 cursor-pointer" />
        </>
    )
}

export default MainDashboard

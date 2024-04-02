// import React from 'react'
// import Family from '../assets/family.png'
// import Fnb from '../assets/fnb.png'
// import Salary from '../assets/salary.png'
import Inflow from '../assets/inflow.png'
import Outflow from '../assets/outflow.png'
import Balance from '../assets/balance.png'

const TableMain1 = () => {
    return (
        <>
            <div className='flex flex-col w-full max-w-sm'>

                <div className="mt-5 w-full max-w-sm bg-white rounded-lg overflow-hidden">

                    <div className="bg-white divide-gray-200 pe-5">
                        <tr>
                            <div className="flex items-center">
                                <td className="px-6 py-3"><img src={Inflow} alt="" className='w-12' /></td>
                                <td className="px-2 py-3 text-sm font-semibold tracking-tight text-left text-green-300">
                                    <div>
                                        <span>Inflow</span> <br />
                                        <span className='text-blue-900 text-2xl'>Rp. 8,890,000.00</span>
                                    </div>
                                </td>
                            </div>
                        </tr>
                    </div>
                </div>

                <div className="mt-5 w-full max-w-sm bg-white rounded-lg overflow-hidden">

                    <div className="bg-white divide-gray-200">
                        <tr>
                            <div className="flex items-center">
                                <td className="px-6 py-3"><img src={Outflow} alt="" className='w-12' /></td>
                                <td className="px-2 py-3 text-sm font-semibold tracking-tight text-left text-green-300">
                                    <div>
                                        <span>Outflow</span> <br />
                                        <span className='text-blue-900 text-2xl'>Rp. 8,890,000.00</span>
                                    </div>
                                </td>
                            </div>
                        </tr>
                    </div>
                </div>

                <div className="mt-5 w-full max-w-sm bg-white rounded-lg overflow-hidden">

                    <div className="bg-white divide-gray-200">
                        <tr>
                            <div className="flex items-center">
                                <td className="px-6 py-3"><img src={Balance} alt="" className='w-12' /></td>
                                <td className="px-2 py-3 text-sm font-semibold tracking-tight text-left text-green-300">
                                    <div>
                                        <span>Balance</span> <br />
                                        <span className='text-blue-900 text-2xl'>Rp. 8,890,000.00</span>
                                    </div>
                                </td>
                            </div>
                        </tr>
                    </div>
                </div>
            </div>
        </>


    )
}

export default TableMain1

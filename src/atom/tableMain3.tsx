// import React from 'react'
import Family from '../assets/family.png'
import Fnb from '../assets/fnb.png'
import Salary from '../assets/salary.png'
import Piechart from '../assets/piechart.png'

const TableMain3 = () => {
    return (
        <div className="mt-5 w-full max-w-sm bg-white border rounded-lg overflow-hidden w-100 ">
            <table className="min-w-full justify-end">
                <thead>
                    <tr>
                        <th colSpan={3} className="px-6 py-3 text-xl text-center font-semibold tracking-tight text-blue-900">Summary Expense</th>
                    </tr>

                </thead>
                <tbody className="bg-white divide-y divide-gray-200 border-t ">
                    <tr>
                        <div className="flex items-center">
                            <td className="px-6 py-3"><img src={Piechart} alt="" className='w-100' /></td>
                        </div>
                        <td className="px-6 py-3 text-xl text-end font-semibold tracking-tight text-red-500">4,662,000</td>
                    </tr>
                </tbody>

                <tbody className="bg-white divide-y divide-gray-200">
                    <tr>
                        <div className="flex items-center">
                            <td className="px-6 py-3"><img src={Family} alt="" className='w-8' /></td>
                            <td className="px-2 py-3 text-sm font-semibold tracking-tight text-left text-blue-900 ">
                                Family
                            </td>
                        </div>
                        <td className="px-6 py-3 text-sm text-end font-semibold tracking-tight text-red-500">278,000</td>
                    </tr>
                </tbody>
                <tbody className="bg-white divide-y divide-gray-200 border-y">
                    <tr>
                        <div className="flex items-center">
                            <td className="px-6 py-3"><img src={Fnb} alt="" className='w-8' /></td>
                            <td className="px-2 py-3 text-sm font-semibold tracking-tight text-left text-blue-900">
                                Food & Beverages
                            </td>
                        </div>
                        <td className="px-6 py-3 text-sm text-end font-semibold tracking-tight text-red-500">60,000</td>
                    </tr>
                </tbody>
                <tbody className="bg-white divide-y divide-gray-200 border-y">
                    <tr>
                        <div className="flex items-center">
                            <td className="px-6 py-3"><img src={Salary} alt="" className='w-8' /></td>
                            <td className="px-2 py-3 text-sm font-semibold tracking-tight text-left text-blue-900">
                                <div>
                                    <span>Sallary</span> <br />
                                    <span className='font-normal'>Gaji bulan juli</span>
                                </div>
                            </td>
                        </div>
                        <td className="px-6 py-3 text-sm text-end font-semibold tracking-tight text-blue-400">5,000,000</td>
                    </tr>
                </tbody>
            </table >
        </div >
    )
}

export default TableMain3

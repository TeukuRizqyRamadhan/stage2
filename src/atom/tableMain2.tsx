// import React from 'react'
import Family from '../assets/family.png'
import Fnb from '../assets/fnb.png'
import Salary from '../assets/salary.png'

const TableMain2 = () => {
    return (
        <div className="mt-5 w-full max-w-sm bg-white border rounded-lg overflow-hidden w-100 ">
            <table className="min-w-full justify-end">
                <thead>
                    <tr>
                        <th colSpan={3} className="px-6 py-3 text-xl text-center font-semibold tracking-tight text-blue-900">Transactions</th>
                    </tr>

                </thead>
                <tbody className="bg-white divide-y divide-gray-200 border-y ">
                    <tr>
                        <div className="flex items-center">
                            <td className="px-6 py-3 text-3xl text-end font-semibold tracking-tight text-blue-900">05</td>
                            <td className="px-2 py-3 text-sm font-semibold tracking-tight text-left text-green-300">
                                <div>
                                    <span>Friday</span> <br />
                                    <span>August 2022</span>
                                </div>
                            </td>
                        </div>
                        <td className="px-6 py-3 text-xl text-end font-semibold tracking-tight text-blue-900">-206,000</td>
                    </tr>
                </tbody>

                <tbody className="bg-white divide-y divide-gray-200">
                    <tr>
                        <div className="flex items-center">
                            <td className="px-6 py-3"><img src={Family} alt="" className='w-8' /></td>
                            <td className="px-2 py-3 text-sm font-semibold tracking-tight text-left text-blue-900 ">
                                <div>
                                    <span>Family</span> <br />
                                    <span className='font-normal'>Jajan malam minggu</span>
                                </div>
                            </td>
                        </div>
                        <td className="px-6 py-3 text-sm text-end font-semibold tracking-tight text-red-500">278,000</td>
                    </tr>
                </tbody>
                <tbody className="bg-white divide-y divide-gray-200">
                    <tr>
                        <div className="flex items-center">
                            <td className="px-6 py-3"><img src={Fnb} alt="" className='w-8' /></td>
                            <td className="px-2 py-3 text-sm font-semibold tracking-tight text-left text-blue-900">
                                <div>
                                    <span>Food & Beverages</span> <br />
                                    <span className='font-normal'>Ayam geprek mak cik</span>
                                </div>
                            </td>
                        </div>
                        <td className="px-6 py-3 text-sm text-end font-semibold tracking-tight text-red-500">28,000</td>
                    </tr>
                </tbody>
                <tbody className="bg-white divide-y divide-gray-200 border-t-4">
                    <tr>
                        <div className="flex items-center">
                            <td className="px-6 py-3 text-3xl text-end font-semibold tracking-tight text-blue-900">04</td>
                            <td className="px-2 py-3 text-sm font-semibold tracking-tight text-left text-green-300">
                                <div>
                                    <span>Thrusday</span> <br />
                                    <span>August 2022</span>
                                </div>
                            </td>
                        </div>
                        <td className="px-6 py-3 text-xl text-end font-semibold tracking-tight text-blue-900">-16,000</td>
                    </tr>
                </tbody>
                <tbody className="bg-white divide-y divide-gray-200 border-y">
                    <tr>
                        <div className="flex items-center">
                            <td className="px-6 py-3"><img src={Fnb} alt="" className='w-8' /></td>
                            <td className="px-2 py-3 text-sm font-semibold tracking-tight text-left text-blue-900">
                                <div>
                                    <span>Food & Beverages</span> <br />
                                    <span className='font-normal'>Bakso cuanki</span>
                                </div>
                            </td>
                        </div>
                        <td className="px-6 py-3 text-sm text-end font-semibold tracking-tight text-red-500">16,000</td>
                    </tr>
                </tbody>
                <tbody className="bg-white divide-y divide-gray-200 border-t-4">
                    <tr>
                        <div className="flex items-center">
                            <td className="px-6 py-3 text-3xl text-end font-semibold tracking-tight text-blue-900">03</td>
                            <td className="px-2 py-3 text-sm font-semibold tracking-tight text-left text-green-300">
                                <div>
                                    <span>Thrusday</span> <br />
                                    <span>August 2022</span>
                                </div>
                            </td>
                        </div>
                        <td className="px-6 py-3 text-xl text-end font-semibold tracking-tight text-blue-900">4,984,000</td>
                    </tr>
                </tbody>
                <tbody className="bg-white divide-y divide-gray-200 border-y">
                    <tr>
                        <div className="flex items-center">
                            <td className="px-6 py-3"><img src={Fnb} alt="" className='w-8' /></td>
                            <td className="px-2 py-3 text-sm font-semibold tracking-tight text-left text-blue-900">
                                <div>
                                    <span>Food & Beverages</span> <br />
                                    <span className='font-normal'>Bakso cuanki</span>
                                </div>
                            </td>
                        </div>
                        <td className="px-6 py-3 text-sm text-end font-semibold tracking-tight text-red-500">16,000</td>
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
            </table>
        </div>
    )
}

export default TableMain2

// import React from "react"

const Navbar = () => {
    return (
        <>
            <nav className="bg-white p-4 flex items-center justify-between shadow-lg">
                <a href="/" className="text-2xl text-blue-800 font-bold">Dumbcash</a>
                <div>
                    <a href="/login" className="bg-white text-blue-800 font-bold py-1 px-5 rounded">Login</a>
                    <a href="/register" className="bg-green-200 text-blue-800 font-bold py-1 px-5 rounded">Sign up</a>
                </div>
            </nav>

        </>
    )
}

export default Navbar
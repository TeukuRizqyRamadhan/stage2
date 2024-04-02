import Navbar from "../components/navbar"

import Footer from "../components/footer"
import RegisterPage from "../components/registerPage"

const Register = (): React.JSX.Element => {
    return (
        <>
            <div className="flex flex-col h-screen">
                <Navbar />
                <RegisterPage />
                <Footer />
            </div>

        </>
    )
}

export default Register
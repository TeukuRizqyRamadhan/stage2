import Navbar from "../components/navbar"

import Footer from "../components/footer"
import LoginPage from "../components/loginPage"

const Login = (): React.JSX.Element => {
    return (
        <>
            <div className="flex flex-col h-screen">
                <Navbar />
                <LoginPage />
                <Footer />
            </div>

        </>
    )
}

export default Login
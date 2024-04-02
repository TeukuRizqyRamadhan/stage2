import Navbar from "../components/navbar"

import Footer from "../components/footer"
import TransactionPage from "../components/transactionPage"

const Transaction = (): React.JSX.Element => {
    return (
        <>
            <div className="flex flex-col h-screen">
                <Navbar />
                <TransactionPage />
                <Footer />
            </div>

        </>
    )
}

export default Transaction
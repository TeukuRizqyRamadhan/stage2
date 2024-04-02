import Navbar from "../components/navbar"
import Hero from "../components/hero"
import Feature from "../components/feature"
import Testimonial from "../components/testimonial"
import Footer from "../components/footer"

const Home = (): React.JSX.Element => {
    return (
        <>
            <Navbar />
            <br></br><br></br><br></br>
            <Hero />
            <br></br><br></br><br></br>
            <Feature />
            <br></br><br></br><br></br><br></br><br></br><br></br>
            <Testimonial />
            <br></br><br></br><br></br><br></br>
            <Footer />
        </>
    )
}

export default Home
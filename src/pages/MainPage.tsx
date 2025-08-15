import BestSellerSection from "../components/BestSellerSection/BestSellerSection"
import HeroSection from "../components/HeroSection/HeroSection"
import '../components/styles/AIWindow.scss'
import '../components/styles/HeroSection.scss'
import '../components/styles/BestSellerSection.scss'
import '../components/styles/NavBar.scss'

const MainPage: React.FC = () => {
    
    return (
        <>
           <HeroSection />

           <BestSellerSection />
        </>
    )
}

export default MainPage
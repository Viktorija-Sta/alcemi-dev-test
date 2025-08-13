import BestSellerSection from "../components/BestSellerSection/BestSellerSection"
import HeroSection from "../components/HeroSection/HeroSection"
import '../components/AI-assistant/AIWindow/AIWindow.scss'
import '../components/HeroSection/HeroSection.scss'
import '../components/BestSellerSection/BestSellerSection.scss'

const MainPage: React.FC = () => {
    
    return (
        <>
           <HeroSection />

           <BestSellerSection />
        </>
    )
}

export default MainPage
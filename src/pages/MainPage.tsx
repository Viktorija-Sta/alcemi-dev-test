import BestSellerSection from "../components/BestSellerSection/BestSellerSection"
import HeroSection from "../components/HeroSection/HeroSection"
import '../components/AI-assistant/AIWindow/AIWindow.scss'

const MainPage: React.FC = () => {
    
    return (
        <>
           <HeroSection />

           <BestSellerSection />
        </>
    )
}

export default MainPage
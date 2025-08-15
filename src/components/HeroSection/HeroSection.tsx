import { Link } from "react-router-dom"

const HeroSection: React.FC = () => {
    return (
         <div className="main-image">
                <img src="/src/assets/7bc7f2091a75ab627779b90ac75b030ad4e08925.png" alt="Main Banner"/>
                <div className="image-title">
                    <p>
                        Biggest
                        <span className="animated-font"> discounts <img className="underline" src="/src/assets/Vector 1.png" alt="" /></span>
                         this season
                    </p>
                </div>
                <nav>
                    <Link to={'/sales'}>View sale</Link>
                </nav>
            </div>
    )
}
export default HeroSection
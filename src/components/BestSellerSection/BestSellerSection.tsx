import { useState } from "react"
import AIWindow from "../AI-assistant/AIWindow/AIWindow"

const BestSellerSection: React.FC = () => {
    const [isAiVisible, setIsAIVisible] = useState(false)
    return (
        <>
         <div className="bottom-images">
                <h2>BEST SELLERS</h2>
               
                <div className="image-container">

                    <img src="/src/assets/67a88cae6e72edc64d90dfacbbc96a25a9f7c7ff.png" alt="" width={'343px'} height={'227.81px'} />
               
                    <img src="/src/assets/67a88cae6e72edc64d90dfacbbc96a25a9f7c7ff.png" alt="" width={'343px'} height={'227.81px'}/>
               
                    <img src="/src/assets/67a88cae6e72edc64d90dfacbbc96a25a9f7c7ff.png" alt="" width={'343px'} height={'227.81px'}/>

                    <img src="/src/assets/6b3fb5e8f7fe3e2d05845e88db3a6a4b0c5d2324.png" alt="" width={'343px'} height={'227.81px'}/>
                    
                </div>
                <nav>
                    <button className="ai-search-button" onClick={() => setIsAIVisible(true)}>
                        
                    AI powered search <img src="/src/assets/fluent_search-sparkle-24-filled.svg" alt="" />
                    </button>
                </nav>
            </div>

            {isAiVisible && (
                <div className="modal-overlay">
                    <AIWindow onClose={() => setIsAIVisible(false)} />
                </div>
            )}
        </>
    )
}

export default BestSellerSection
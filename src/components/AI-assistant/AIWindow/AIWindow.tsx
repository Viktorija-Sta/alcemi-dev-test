import { useState } from "react";

interface AIWindowProps {
    onClose: () => void;
}
const AIWindow: React.FC<AIWindowProps> = ({ onClose }) => {
    const [activeOption, setActiveOption] = useState<string | null>(null)
    

    const options = [
        'Product',
        'Information',
        'Support',
        'Brand assets',
        'Consultation',
        'Dresses for summer'
    ]

    return (
        <>
             <div className="main-ai-window">
                <div className="action-buttons">
                    <div className="top-logo">
                        <img src="/src/assets/logo.png" alt="" />
                    </div>
                    <button  className='back-button' onClick={onClose}>
                        <img src="/src/assets/clarity_arrow-line.png" alt="Back" />
                    </button>
                    <button className="exit-button" onClick={onClose}>
                        <img src="/src/assets/right side.png" alt="Exit" />
                    </button>
                </div>

                 <div className="ai-options">
                    <h1 className="title">Hello, what are you looking for today?</h1>
                
                    <div className="buttons">
                        {options.map ((option) => (
                            <button key={option} 
                                className= {activeOption === option ? 'active' : ''}
                                onClick={() => setActiveOption(option)}>
                                {option}
                                </button>
                        ))}
                    </div>
                </div>
                
                <div className="ai-input">
                    <textarea id="ai-assistant" name="ai-assistant" placeholder="Ask anything..."></textarea>
                    <img src="/src/assets/mdi_microphone.png" alt="AI Assistant"
                    />
                </div>
                <div className="logo">
                    <img src="/src/assets/Powered by.png" alt="" />
                </div>
            </div>

        </>
    )
}

export default AIWindow
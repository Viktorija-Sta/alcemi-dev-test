
interface AIWindowProps {
    onClose: () => void;
}
const AIWindow: React.FC<AIWindowProps> = ({ onClose }) => {
    return (
        <>
             <div className="main-ai-window">
                <div className="action-buttons">
                    <button onClick={onClose}>
                    <img src="/src/assets/clarity_arrow-line.png" alt="Back" />
                    </button>
                    <button onClick={onClose}>
                    <img src="/src/assets/right side.png" alt="Exit" />
                    </button>
                </div>

                 <div className="ai-options">
                    <h1>Hello, what are you looking for today?</h1>
                
                    <div className="buttons">
                        <button>Product</button>
                        <button>Information</button>
                        <button>Support</button>
                        <button>Brand assets</button>
                        <button>Consultation</button>
                        <button>Dresses for summer</button>
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
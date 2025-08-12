import ActionButtons from "../Buttons/ActionButtons"

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

                <h1>Hello, what are you looking for today?</h1>
                
                 <div className="ai-options">
                    <button>Product</button>
                    <button>Information</button>
                    <button>Support</button>
                    <button>Brand assets</button>
                    <button>Consultation</button>
                    <button>Dresses for summer</button>
                </div>
                
                <div className="ai-input">
                    <input type="text" placeholder="Ask anything..." />
                    <img src="/src/assets/ai-assistant-icon.png" alt="AI Assistant"
                    />
                </div>
            </div>

            <div className="logo">
                <img src="/src/assets/Powered by.png" alt="" />
            </div>
        </>
    )
}

export default AIWindow
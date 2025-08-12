import ActionButtons from "../Buttons/ActionButtons"

const MainAIWindow: React.FC = () => {
    return (
        <>
            <div className="actionButtons">
                <ActionButtons />
            </div>
            <div className="main-ai-window">
                <h1>Hello, what are you looking for today?</h1>
                <button>Product</button>
                <button>Information</button>
                <button>Support</button>
                <button>Brand assets</button>
                <button>Consultation</button>
                <button>Dresses for summer</button>
                
                <div className="ai-assistant">
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

export default MainAIWindow
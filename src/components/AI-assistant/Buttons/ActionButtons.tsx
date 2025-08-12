import { Link } from "react-router-dom"

const ActionButtons: React.FC = () => {
    return (
        <div className="action-buttons">
            <button className="back"><Link to="/"><img src="/src/assets/clarity_arrow-line.png" alt="" /></Link></button>
            <button className="exit"><Link to="/"><img src="/src/assets/right side.png" alt="" /></Link></button>
            <button className="btn tertiary">Wishlist</button>
        </div>
    )
}

export default ActionButtons
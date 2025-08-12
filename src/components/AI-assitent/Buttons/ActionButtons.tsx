const ActionButtons: React.FC = () => {
    return (
        <div className="action-buttons">
            <button className="back"><a href="/"><img src="/src/assets/clarity_arrow-line.png" alt="" /></a></button>
            <button className="exit"><a href="/"><img src="/src/assets/right side.png" alt="" /></a></button>
            <button className="btn tertiary">Wishlist</button>
        </div>
    )
}

export default ActionButtons
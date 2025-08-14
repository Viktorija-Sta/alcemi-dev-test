import { useState } from "react";
import { Link } from "react-router-dom"

const Navbar: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const closeMenu = () => setIsMenuOpen(false)

    return (
        <>
        <nav className="navbar">
            <p className="logo">eshop logo</p>
            <ul className="menu">
                <li><Link to="/products">PRODUCTS</Link></li>
                <li><Link to="/about">ABOUT</Link></li>
                <li><Link to="/FQA">FQA</Link></li>
            </ul>
            <div className="hamburger" onClick={() => setIsMenuOpen(true)}>
                <span></span>
                <span></span>
                <span></span>
            </div>
        </nav>

        {isMenuOpen && <div className="overlay" onClick={closeMenu}></div>}

        <div className={`side-menu ${isMenuOpen ? "open" : ""}`}>
                <button className="close-btn" onClick={closeMenu}>×</button>
                <Link to="/products" onClick={closeMenu}>PRODUCTS</Link>
                <Link to="/about" onClick={closeMenu}>ABOUT</Link>
                <Link to="/FQA" onClick={closeMenu}>FQA</Link>
            </div>
        </>
    )
}

export default Navbar
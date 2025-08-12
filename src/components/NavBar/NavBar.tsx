import { Link } from "react-router-dom"

const Navbar: React.FC = () => {
    return (
        <nav>
            <p>eshop logo</p>
            <ul>
                <li><Link to="/products">PRODUCTS</Link></li>
                <li><Link to="/about">ABOUT</Link></li>
                <li><Link to="/FQA">FQA</Link></li>
            </ul>
        </nav>
    )
}

export default Navbar
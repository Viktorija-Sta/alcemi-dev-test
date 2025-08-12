import { Outlet } from "react-router-dom"
import Navbar from "../components/NavBar/NavBar"

const MainLayout = () => {
    return (
        <div className="layout-container">
            <header>
                <nav>
                    <Navbar />
                </nav>
            </header>

            <main>
                <Outlet />
            </main>

            <footer>
            
            </footer>
        </div>
    )
}

export default MainLayout
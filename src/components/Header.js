import { Link } from "react-router-dom"

function Header() {
    return (
        <header>
            <div className="headerContent container">
                <h2>Trend Shop</h2>
                <div>
                    <ul>
                        <li><Link to="/products">Home</Link></li>
                        <li><a>Cart</a></li>
                        <li><a>Contact</a></li>
                    </ul>
                </div>
            </div>
        </header>
    )
}

export default Header
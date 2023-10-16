import { NavLink } from 'react-router-dom';
import './navbar.css';

function Navbars() {
    return (
        <nav className="nav-bar container d-flex ps-0">
            <div className="menu1">
                <button className="dropmenu">Category
                </button>
                <div className="menu2">
                    <a href="#">Link 1</a>
                    <a href="#">Link 2</a>
                    <a href="#">Link 3</a>
                </div>
            </div>
            <NavLink to={"/"}>Home</NavLink>
            <NavLink to={"/products"}>Products</NavLink>
            <NavLink to={"/favourite"}>Favourite</NavLink>
        </nav>
    );
}

export default Navbars;
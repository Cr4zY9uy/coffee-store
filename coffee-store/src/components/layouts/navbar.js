import { NavLink } from 'react-router-dom';
import './navbar.css';
function Navbars() {
    return (
        <nav className="nav-bar container d-flex ps-0">
            <div className="menu1">
                <button className="dropmenu">Category
                </button>
                <div className="menu2">
                    <NavLink to={'/category'}>Link 1</NavLink>
                    <NavLink to={'/category'}>Link 1</NavLink>
                    <NavLink to={'/category'}>Link 1</NavLink>
                </div>
            </div>
            <NavLink to={"/"} className={'menu1_item'}>Home</NavLink>
            <NavLink to={"/products"} className={'menu1_item'}>Products</NavLink>
            <NavLink to={"/favourite"} className={'menu1_item'}>Favourite</NavLink>
        </nav>
    );
}

export default Navbars;
import { NavLink } from 'react-router-dom';
import './navbar.css';
function Navbars() {
    return (
        <nav className="nav-bar container d-flex ps-0">
            <div className="menu1">
                <button className="dropmenu">Category
                </button>
                <div className="menu2">
                    <NavLink to={'/category'}><a href="cate1">Link 1</a></NavLink>
                    <NavLink to={'/category'}><a href="cate1">Link 1</a></NavLink>
                    <NavLink to={'/category'}><a href="cate1">Link 1</a></NavLink>
                </div>
            </div>
            <NavLink to={"/"}>Home</NavLink>
            <NavLink to={"/products"}>Products</NavLink>
            <NavLink to={"/favourite"}>Favourite</NavLink>
        </nav>
    );
}

export default Navbars;
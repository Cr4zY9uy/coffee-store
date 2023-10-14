import './navbar.css';

function Navbars() {
    return (
        <nav class="nav-bar container d-flex ps-0">
            <div class="menu1">
                <button class="dropmenu">Category
                </button>
                <div class="menu2">
                    <a href="#">Link 1</a>
                    <a href="#">Link 2</a>
                    <a href="#">Link 3</a>
                </div>
            </div>
            <a href="#home">Home</a>
            <a href="#news">Products</a>
        </nav>
    );
}

export default Navbars;
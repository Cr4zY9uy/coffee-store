import './header.css';
function Header() {
    return (
        <header class="container pt-3">
            <div class="d-flex row header justify-content-between">
                <div class="col-2 d-flex">
                    <img src="./images/logo.png" alt="Logoimage" width="30px" height="40px" style={{ marginTop: "7px" }} /><span class="logo">Notos</span></div>
                <div class="col-8">
                    <form class="d-flex justify-content-end align-items-center me-5">
                        <input type="text" name="search" id="search" placeholder="Find our product..." class="w-75" /><i
                            class="bi bi-search"></i>
                    </form>
                </div>
                <div class="d-flex col-2 justify-content-end group-icon_header">
                    <div class="d-flex flex-column align-items-center me-4"> <i class="bi bi-person-circle"></i>
                        <p>Account</p>
                    </div>
                    <div class="d-flex flex-column  align-items-center"><i class="bi bi-cart3"></i>
                        <p>Cart</p>
                    </div>
                </div>
            </div>
        </header>
    );
}
export default Header;
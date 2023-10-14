import './product_list.css';
function Product_list() {
    return (
        <section class="container products">
            <div class="filter-title">
                <div><a href="#products" class="active">New</a></div>
                <div><a href="#">Hot</a></div>
                <div><a href="#">Limited</a></div>
            </div>
            <div class="product-list d-flex">
                <figure class="product-media text-center">
                    <a href="#">
                        <img src="./images/product1.jfif" height="270px" />
                    </a>
                    <p>COFFEE 1</p>
                    <p>500$</p>
                    <div class="product-action">
                        <button class="btn-product btn-cart"><span>Add to cart</span></button>
                    </div>
                </figure>
                <figure class="product-media text-center">
                    <a href="#">
                        <img src="./images/product1.jfif" height="270px" />
                    </a>
                    <p>COFFEE 1</p>
                    <p>500$</p>
                    <div class="product-action">
                        <button class="btn-product btn-cart"><span>Add to cart</span></button>
                    </div>
                </figure>
                <figure class="product-media text-center">
                    <a href="#">
                        <img src="./images/product1.jfif" height="270px" />
                    </a>
                    <p>COFFEE 1</p>
                    <p>500$</p>
                    <div class="product-action">
                        <button class="btn-product btn-cart"><span>Add to cart</span></button>
                    </div>
                </figure>
                <figure class="product-media text-center">
                    <a href="#">
                        <img src="./images/product1.jfif" height="270px" />
                    </a>
                    <p>COFFEE 1</p>
                    <p>500$</p>
                    <div class="product-action">
                        <button class="btn-product btn-cart"><span>Add to cart</span></button>
                    </div>
                </figure>
            </div>
        </section>
    );
}
export default Product_list;
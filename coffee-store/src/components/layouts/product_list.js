import './product_list.css';
function Product_list() {
    return (
        <section className="container products">
            <div className="product-list d-flex">
                <figure className="product-media text-center">
                    <a href="#">
                        <img src="./images/product1.jfif" height="270px" />
                    </a>
                    <p>COFFEE 1</p>
                    <p>500$</p>
                    <div className="product-action">
                        <button className="btn-product btn-cart"><span>Add to cart</span></button>
                    </div>
                </figure>
                <figure className="product-media text-center">
                    <a href="#">
                        <img src="./images/product1.jfif" height="270px" />
                    </a>
                    <p>COFFEE 1</p>
                    <p>500$</p>
                    <div className="product-action">
                        <button className="btn-product btn-cart"><span>Add to cart</span></button>
                    </div>
                </figure>
                <figure className="product-media text-center">
                    <a href="#">
                        <img src="./images/product1.jfif" height="270px" />
                    </a>
                    <p>COFFEE 1</p>
                    <p>500$</p>
                    <div className="product-action">
                        <button className="btn-product btn-cart"><span>Add to cart</span></button>
                    </div>
                </figure>
                <figure className="product-media text-center">
                    <a href="#">
                        <img src="./images/product1.jfif" height="270px" />
                    </a>
                    <p>COFFEE 1</p>
                    <p>500$</p>
                    <div className="product-action">
                        <button className="btn-product btn-cart"><span>Add to cart</span></button>
                    </div>
                </figure>
            </div>
        </section>
    );
}
export default Product_list;
import './products.css'
import ProductList from "../layouts/product_list";
import PaginationProduct from "../layouts/pagination";

function Products() {
    return (
        <>
            <div className='banner_products'>
                <h1>Products</h1>
            </div>

            <ProductList />
            <ProductList />
            <ProductList />
            <ProductList />
            <PaginationProduct />
        </>
    );
}
export default Products;
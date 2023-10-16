import Product_list from "../layouts/product_list";
import PaginationProduct from "../layouts/pagination";

function Products() {
    return (
        <>
        <h1>Products</h1>
            <Product_list />
            <Product_list />
            <Product_list />
            <Product_list />
            <PaginationProduct />
        </>
    );
}
export default Products;
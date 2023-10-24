import ProductList from "../layouts/product_list";
import PaginationProduct from "../layouts/pagination";

function Products() {
    return (
        <>
        <h1>Products</h1>
            <ProductList />
            <ProductList />
            <ProductList />
            <ProductList />
            <PaginationProduct />
        </>
    );
}
export default Products;
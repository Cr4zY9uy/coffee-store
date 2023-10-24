import PaginationProduct from "../layouts/pagination";
import ProductList from "../layouts/product_list";

function CategoryDetail() {
    return (
        <>
            <h1>Category Name</h1>
            <ProductList />
            <ProductList />
            <ProductList />
            <ProductList />
            <PaginationProduct />
        </>
    );
}
export default CategoryDetail;
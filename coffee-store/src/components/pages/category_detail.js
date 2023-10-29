import './category_detail.css';
import PaginationProduct from "../layouts/pagination";
import ProductList from "../layouts/product_list";

function CategoryDetail() {
    return (
        <>
            <div className='banner_category'>
                <h1>Category name</h1>
            </div>

            <ProductList />
            <ProductList />
            <ProductList />
            <ProductList />
            <PaginationProduct />
        </>
    );
}
export default CategoryDetail;
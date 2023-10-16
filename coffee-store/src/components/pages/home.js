import Filter from "../layouts/filter";

import Product_grid from "../layouts/product_grid";
import Product_list from "../layouts/product_list";
import Purchasing_policies from "../layouts/puchasing_policies";
import Slider from "../layouts/slider";

function Home() {
    return (
        <>
            <Slider />
            <Product_grid />
            <Filter />
            <Product_list />
            <Purchasing_policies />
        </>
    );
}
export default Home;
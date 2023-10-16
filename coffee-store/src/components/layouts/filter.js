import './filter.css';
function Filter() {
    return (
        <div className="filter-title">
            <div><a href="#products" className="active">New</a></div>
            <div><a href="#">Hot</a></div>
            <div><a href="#">Limited</a></div>
        </div>
    );
}
export default Filter;
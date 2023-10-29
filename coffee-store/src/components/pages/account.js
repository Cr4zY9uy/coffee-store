import './account.css';
function Account() {
    return (
        <section className='account_page container'>
            <div className='banner_account'>
                <h1>Personal information</h1>
            </div>
            <div className='information d-flex justify-content-around'>
                <div className='d-flex flex-column align-items-start title_box'>
                    <span>Username:</span>
                    <span>Email: </span>
                    <span>Birthday:</span>
                    <span>Address:</span>
                </div>
                <div className='d-flex flex-column align-items-start information_box'>
                    <span>David James</span>
                    <span>jame@gmail.com</span>
                    <span>11/22/2001</span>
                    <span>Kentucky, the US</span>
                </div>
            </div>
        </section>
    );
}
export default Account;
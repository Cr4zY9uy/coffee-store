import './purchasing_policies.css';
function PurchasingPolicies() {
    return (
        <section className="container purchasing-policies">
            <div className="row">
                <div className="col-3">
                    <span className='policies_icon'><i
                        className="bi bi-rocket-takeoff"></i></span>
                    <div>
                        <p className='caption'>Free shiping</p>
                        <h5 className="fs-6">Invoice over 100$</h5>
                    </div>
                </div>
                <div className="col-3">
                    <span className='policies_icon'><i
                        className="bi bi-arrow-counterclockwise"></i></span>
                    <div>
                        <p className='caption'>Refund</p>
                        <h5 className="fs-6">Within 30 days</h5>
                    </div>
                </div>
                <div className="col-3">
                    <span className='policies_icon'><i className="bi bi-info-circle"></i></span>
                    <div>
                        <p className='caption'>20% discount</p>
                        <h5 className="fs-6">Sign up an account</h5>
                    </div>
                </div>
                <div className="col-3">
                    <span className='policies_icon'><i className="bi bi-headset"></i></span>
                    <div>
                        <p className='caption'>Hotline</p>
                        <h5 className="fs-6">24/7</h5>
                    </div>
                </div>
            </div>
        </section>
    );

}

export default PurchasingPolicies;
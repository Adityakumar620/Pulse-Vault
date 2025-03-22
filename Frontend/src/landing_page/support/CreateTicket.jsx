import React from 'react';

function CreateTicket() {
    return (  
        <div className="container">
            <div className="row p-4">
                <h3 className='mb-5 mt-3 text-muted'>To create a ticket, select a relevant topic</h3>

                <div className="col-4 mb-4" style={{lineHeight:"3"}}>
                    <h4><i class="fa-solid fa-square-plus"></i>  Accout Opening</h4>
                    <a className="SupportList" href="">Resident individual</a><br />
                    <a className="SupportList" href="">Minor</a><br />
                    <a className="SupportList" href="">Non Resident Indian (NRI)</a><br />
                    <a className="SupportList" href="">Company.Partnership, HUF and LLP</a><br />
                    <a className="SupportList" href="">Glossary</a><br />
                </div>

                <div className="col-4 mb-4" style={{lineHeight:"3"}}>
                    <h4><i class="fa-solid fa-user"></i>  Your Zerodha Account</h4>
                    <a className="SupportList" href="">Your Profile</a><br />
                    <a className="SupportList" href="">Account modification</a><br />
                    <a className="SupportList" href="">Clint mater report(CMR)</a><br />
                    <a className="SupportList" href="">Nominaton</a><br />
                    <a className="SupportList" href="">Transfer and conversion of securities</a><br />
                </div>

                <div className="col-4 mb-4" style={{lineHeight:"3"}}>
                    <h4><i class="fa-solid fa-chart-simple"></i>  Kite</h4>
                    <a className="SupportList" href="">IPO</a><br />
                    <a className="SupportList" href="">Trading FAQs</a><br />
                    <a className="SupportList" href="">Margin Trading Facility(MTF)and Margins</a><br />
                    <a className="SupportList" href="">Charts and order</a><br />
                    <a className="SupportList" href="">Alerts and Nudges</a><br />
                    <a className="SupportList" href="">General</a><br />
                </div>

                <div className="col-4 mb-5" style={{lineHeight:"3"}}>
                    <h4><i class="fa-solid fa-address-card"></i>    Funds</h4>
                    <a className="SupportList" href="">Add money</a><br />
                    <a className="SupportList" href="">Withdraw money</a><br />
                    <a className="SupportList" href="">Add bank account</a><br />
                    <a className="SupportList" href="">eMandates</a><br />
                </div>

                <div className="col-4 mb-5" style={{lineHeight:"3"}}>
                    <h4><i class="fa-solid fa-at"></i>  Console</h4>
                    <a className="SupportList" href="">Portfolio</a><br />
                    <a className="SupportList" href="">Corporate actions</a><br />
                    <a className="SupportList" href="">Fund statement</a><br />
                    <a className="SupportList" href="">report</a><br />
                    <a className="SupportList" href="">Profile</a><br />
                    <a className="SupportList" href="">Segments</a><br />
                </div>

                <div className="col-4 mb-5" style={{lineHeight:"3"}}>
                    <h4><i class="fa-solid fa-coins"></i> Coin</h4>
                    <a className="SupportList" href="">Understanding mutual funds and coin</a><br />
                    <a className="SupportList" href="">coin app</a><br />
                    <a className="SupportList" href="">coin web</a><br />
                    <a className="SupportList" href="">Transations and reports</a><br />
                    <a className="SupportList" href="">National Pension Scheme(NPS)</a><br />
                </div>

           
            </div>
        </div>
    );
}

export default CreateTicket;
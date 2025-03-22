import React from 'react';

function Brokerage() {
    return (  
        <div className="container">
            <div className="row p-5 mt-5">

                <div className="col-8 p-3 ">
                    <a href=""><h4 className='text-center mb-3'>Brokerage calculater</h4></a>
                    <ul className='text-muted fs-6'>
                        <li>Charged by exchanges (NSE, BSE, MCX) on the value of your transactions.</li>
                        <li>BSE has revised transaction charges in XC, XD, XT, Z and ZP groups to ₹10,000 per crore w.e.f 01.01.2016. (XC and XD groups have been merged into a new group X w.e.f 01.12.2017)</li>
                        <li>BSE has revised transaction charges in SS and ST groups to ₹1,00,000 per crore of gross turnover.</li>
                        <li>BSE has revised transaction charges in M, MT, TS and MS groups to ₹275 per crore of gross turnover.</li>
                        <li>Additional charges of ₹50 per order for orders placed through a dealer at Zerodha including auto square off orders.</li>
                        <li>Stamp charges by the Government of India as per the Indian Stamp Act of 1899 for transacting in instruments on the stock exchanges and depositories.</li>
                    </ul>
                </div>

                <div className="col-4 p-3">
                    <a href=""><h4 className='text-center mb-3'>List of charges</h4></a>
                    <ul className='text-muted'>
                        <li>Equity and Futures - ₹10 per crore + GST of the traded value.</li>
                        <li>Options - ₹50 per crore + GST traded value (premium value).</li>
                        <li>Currency - ₹0.05 per lakh + GST of turnover for Futures and ₹2 per lakh + GST of premium for Options</li>
                        <li>MTF Brokerage: 0.3% or Rs. 20/executed order, whichever is lower.</li>
                        <li>MTF pledge charge: ₹30 + GST per pledge request per ISIN.</li>
                    </ul>
                </div>

            </div>
        </div>
    );
}

export default Brokerage;
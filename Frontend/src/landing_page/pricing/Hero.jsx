import React from 'react';

function Hero() {
    return ( 
       <div className="container">

        <div className="row p-4 mt-5  text-center">
            <h1>Pricing</h1>
            <h4 className='text-muted mt-3 fs-5'>List of all Charges and taxes</h4>
            
        </div>

        <div className="row p-4 mt-5">

            <div className="col-4 text-center">
                <img src="media\pricing0.svg" alt="" />
                <h2>Free equity delivery</h2>
                <p className='mt-3 text-muted'>All equity delivery investments(NSE,BSE), are absolutely free - ₹ 0 Brokerage</p>
            </div>

            <div className="col-4 text-center">
                <img src="media\intradayTrades.svg" alt="" />
                <h2>Free equity delivery</h2>
                <p className='mt-3 text-muted'>Flat ₹ 20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades. Flat ₹20 on all option trades</p>
            </div>

            <div className="col-4 text-center">
                <img src="media\pricing0.svg" alt="" />
                <h2>Free equity delivery</h2>
                <p className='mt-3 text-muted'>All direct mutual fund investments are absolutely free — ₹ 0 commissions & DP charges.</p>
            </div>

        </div>
       </div>
     );
}

export default Hero;
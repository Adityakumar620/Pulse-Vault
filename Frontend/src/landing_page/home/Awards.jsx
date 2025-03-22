import React from 'react';

function Awards() {
    return ( 
        <>

         <div className='container mt-5'>
            <div className="row">
                <div className="col-6 p-5">
                    <img src="media/largestBroker.svg" alt="largebroker" />
                </div>
                <div className="col-6 p-5 mt-5">
                    <h1>Largest stock broker in India</h1>

                    <p className='mb-5'>2+ million Zerodha clints contriute over 15% of all retail order volumes in india daily by trading and investing</p>
                    <div className="row">
                        <div className="col-6">
                        <ul>
                        <li>
                            <p>Features and Options</p>
                        </li>
                        <li>
                            <p>Commodity derivatives</p>
                        </li>
                        <li>
                            <p>Currency derivatives</p>
                        </li>
                    </ul>
                    </div>

                    <div className="col-6">
                    <ul>
                        <li>
                            <p>Stocks and IPOs</p>
                        </li>
                        <li>
                            <p>Direct mutual funds</p>
                        </li>
                        <li>
                            <p>Bond and Govt. Securites</p>
                        </li>
                    </ul>
                    </div>

                    </div>
                    <img src="media\pressLogos.png" alt="logo" style={{width:"90%"}} />
                    
                </div>
            </div>
         </div>
       
        </>
     );
}

export default Awards;
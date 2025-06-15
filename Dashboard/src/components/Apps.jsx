import React from "react";

const Apps = () => {
  return (
    <>
    <div className="container">
        <div className="row text-center p-5">
            <h1 className=' mb-4'>The Zerodha Universe</h1>
            <p>Extend your trading and investment experience even further with our partner platforms</p>

            <div className="col-4 p-3 mt-5">
                <img src="media\zerodhaFundhouse.png" alt="" className='logoUniverse'/>
                <p className='p-4 text-muted'>Our asset management venture that is creating simple and transparent index funds to help you save for your goals.</p>
            </div>

            <div className="col-4 p-3 mt-5">
                <img src="media\sensibullLogo.svg" alt="" className='logoUniverse'/>
                <p className='p-4 text-muted '>Options trading platform thats let you create strategies, analyze postions, and examine  data point like open intrest, FII/DII, and more.</p>
            </div>

            <div className="col-4 p-3 mt-5">
                <img src="media\goldenpiLogo.png" alt="" className='logoUniverse'/>
                <p className='p-4 text-muted'>India's leading and trusted platform to invest in bonds and other fixed income assets online. 900 K+ registered users & growing.</p>
            </div>

            <div className="col-4 p-3 mt-3">
                <img src="media\streakLogo.png" alt="" className='logoUniverse'/>
                <p className='p-4 text-muted'>Systematic trading platform that allows you to create and backtest stratrgies without coding.</p>
            </div>

            <div className="col-4 p-3 mt-3">
                <img src="media/smallcaseLogo.png" alt="" className='logoUniverse'/>
                <p className='text-muted p-4'>Thematic investing platform <br /> the helps you invest in diversified <br /> baskets of stocks on ETFs.</p>
            </div>

            <div className="col-4 p-3 mt-3">
                <img src="media\dittoLogo.png" alt="" className='logoUniverse'/>
                <p className='p-4 text-muted'>Personalized advice on life <br /> and health insurance. No spam <br /> and no mis-selling.</p>
            </div>
            
            <button className='p-2 btn btn-primary fs-5' style={{width:"20%",margin: "0 auto"}}>Signup for free</button>

        </div>
    </div> 
    </>
  )
};

export default Apps;
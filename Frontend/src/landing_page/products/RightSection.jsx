import React from 'react';

function RightSection({imageUrl, productName,productDescription, tryDemo}) {
    return ( 
        <div className="container">
            <div className="row">
                
                <div className=" console col-5 p-5">
                    <h1>{productName}</h1>
                    <p className='text-muted'>{productDescription}</p>
                    <a href={tryDemo}>{tryDemo}</a>
                </div>

                <div className="col-7 p-3">
                    <img src={imageUrl} />
                </div>
            </div>
        </div>
     );
}

export default RightSection;
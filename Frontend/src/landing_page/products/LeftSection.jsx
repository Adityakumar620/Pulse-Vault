import React from 'react';

function LeftSection({imageUrl, productName,productDescription, tryDemo, learnMore, googlePlay, appStore}) {
    return ( 
        <div className="container">
            <div className="row ">
                <div className="col-8 p-3">
                    <img src={imageUrl} />
                </div>
                <div className="col-4 mt-5 p-3">
                    <h1>{productName}</h1>
                    <p className='text-muted'>{productDescription}</p>

                    <div>
                    <a href={tryDemo}>{tryDemo}</a>
                    <a href={learnMore} style={{marginLeft:'80px'}}>{learnMore}</a>
                    </div>
                   
                   <div className='mt-3'>
                   <a href={googlePlay}><img src="media/googlePlayBadge.svg" alt="" /></a>
                   <a href={appStore} style={{marginLeft:'10px'}}><img src='media/appstoreBadge.svg' alt="" /></a>
                   </div>
                    
                </div>
            </div>
        </div>
        
     );
}

export default LeftSection;
import React from "react";


const Rating =(props)=>{
    const {rating,
     reviews
        } = props
    return(
        <div className="product-rating rating">
       <span>
           <i className={rating>=1? "fa fa-star": rating>=0.5? "fas fa-star-half": "far fa-star"}></i>
       </span>
       <span>
           <i className={rating>=2? "fa fa-star": rating>=1.5? "fas fa-star-half": "far fa-star"}></i>
       </span>
       <span>
           <i className={rating>=3? "fa fa-star": rating>=2.5? "fas fa-star-half": "far fa-star"}></i>
       </span>
       <span>
           <i className={rating>=4? "fa fa-star": rating>=3.5? "fas fa-star-half": "far fa-star"}></i>
       </span>
       <span>
           <i className={rating>=5? "fa fa-star": rating>=4.5? "fas fa-star-half": "far fa-star"}></i>
       </span>

    {(reviews>1 ? <span className='reviews'>{reviews + " reviews"}</span> :
    reviews===1? <span className='reviews'>1 review</span>: reviews === 0? <span className='reviews'>0 review</span>: null) }
    </div>
    )
};

export default Rating;
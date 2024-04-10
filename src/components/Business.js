import React from 'react';
import '../styles/BusinessList.css';
import '../styles/Business.css';


const business = {
    imgSrc: 'https://play-lh.googleusercontent.com/7AWR24mar0CgElbgJnKavdh-9bv2OQCJb15gpQkMVmBzoIHYdJqt1Lgr5I72liT3EA',
    name: 'Pizza Hut',
    address: 'East Service Road',
    city: 'Taguig',
    state: 'Philippines',
    zipcode: '1630',
    category: 'American',
    rating: 4.5,
    reviewCount: 200  
};

function Business() {
    return (
        <article className='card-business'>
            <img  
                src={business.imgSrc}
                alt={business.name}
                className='image'
            />
           <h3 className='name'>{business.name}</h3>
           <div className='details'>
                <p className='address left'>{business.address}</p>
                <p className='city left'>{business.city}</p>
                <p className='state left'>{business.state}</p>
                <p className='zipcode left'>{business.zipcode}</p>
                <p className='category right'>{business.category}</p>
                <p className='rating right'>{business.rating}</p>
                <p className='review-count right'>{business.reviewCount}</p>
           </div>
        </article>
    );
}

export default Business;
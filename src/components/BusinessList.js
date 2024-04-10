import React from 'react'
import Business from './Business';


function BusinessList({ data }) {

    const businesses = [];

    if (data) {
        data.forEach((item) => {
            businesses.push(<Business business={item}/>);
        });
    } else {
         for (let i = 0; i < 12; i++){
            businesses.push(<Business/>);
        }
    }

    return (
        <section className='businesses'>
            {businesses}
        </section>
    );  
}

export default BusinessList;
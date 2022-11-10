import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ServiceCard from '../ServiceCard/ServiceCard';


const Services = () => {
    const services=useLoaderData();
 
    return (
        
        <div className='lg:grid grid-cols-3 gap-4 mt-5 mb-5 '>
            {
                services.map((service)=>(<ServiceCard 
                key={service._id}
                service={service}
                ></ServiceCard>))
            }
        </div>
    );
};

export default Services;
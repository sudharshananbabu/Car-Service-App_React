import React from "react";
import AllItem from "../../Services/AllItem";
import "../popular/MostPopular.css";

const ServiceHome = () => {
    return(
        <>
           <section className='popular top'>
            <div className='full_container'>
                <div className='heading'>
                    <h1>Our Services</h1>
                    <div className='line'></div>
                </div>

                <div className='content'>
                    <AllItem />
                </div>
            </div>
           </section>
        </>    
    )
}

export default ServiceHome
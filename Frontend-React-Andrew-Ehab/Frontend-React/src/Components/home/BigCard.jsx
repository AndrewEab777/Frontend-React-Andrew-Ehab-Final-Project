import React from 'react'
import { Link } from 'react-router-dom';

export default function BigCard(props) {
    const { image, title } = props;

    return (
        <>
            <div className="card rounded-5">
                <div className="p-5 top-0 start-0">
                    <h3 className="fw-bold h2 mb-2">{title}</h3>
                    <Link to="/shop" className="text-dark fw-semibold text-decoration-none border-bottom border-dark pb-1">
                        Shop Now <i className="bi bi-arrow-right ms-1"></i>
                    </Link>
                </div>
                
                <img src={image} className="w-75 bottom-0 start-0 object-fit-contain" alt={title} />
            </div>
        </>
    );
}

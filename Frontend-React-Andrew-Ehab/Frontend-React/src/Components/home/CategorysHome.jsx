import React from 'react'
import BigCard from './BigCard';
import SmallCard from './SmallCard';

export default function CategorysHome(props) {
    const {image1, title1, image2, title2, image3, title3} = props;

    return (
        <>
            <div className="container my-5">
                <div className="row g-4">
                    <div className="col-md-6">
                        <BigCard
                            image={image1}
                            title={title1}
                        />
                    </div>

                    <div className="col-md-6 d-flex flex-column gap-4">
                        <SmallCard
                            image={image2}
                            title={title2}
                        />
                        <SmallCard
                            image={image3}
                            title={title3}
                        />
                    </div>
                </div>
            </div>
        </>
    );
}

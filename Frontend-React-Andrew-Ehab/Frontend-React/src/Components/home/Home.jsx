import React from 'react'

import BigCard from './BigCard'
import SmallCard from './SmallCard'

import image_1 from "../../assets/image_1.jpeg"
import image_2 from "../../assets/image_2.jpeg"
import image_3 from "../../assets/image_3.jpeg"
import image_4 from "../../assets/image_4.jpeg"
import image_5 from "../../assets/image_5.jpeg"
import image_6 from "../../assets/image_6.jpeg"
import Carousel from './Carousel'
import CategorysHome from './CategorysHome'
import NewArrivals from './NewArrivals'
import ServicesSection from './ServicesSection'
import ShopNowSection from './ShopNowSection'
import ArticlesSection from './ArticlesSection'

export default function Home() {
    return (
        <>
            <Carousel
                images={[image_1, image_2, image_3]}
            />
            
            <CategorysHome
                image1={image_4}
                title1="Living Room"
                image2={image_5}
                title2="Bedroom"
                image3={image_6}
                title3="Kitchen"
            />

            <NewArrivals />

            <ServicesSection />

            <ShopNowSection />

            <ArticlesSection />
        </>
    )
}

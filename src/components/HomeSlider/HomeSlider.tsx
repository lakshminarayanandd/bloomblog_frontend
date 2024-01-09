import React, { useEffect, useState } from 'react';
import img1 from '@/assets/sliderTemp/img1.png'
import img2 from '@/assets/sliderTemp/img2.png'
import img3 from '@/assets/sliderTemp/img3.png'
import img4 from '@/assets/sliderTemp/img4.png'
import img5 from '@/assets/sliderTemp/img5.png'
import img6 from '@/assets/sliderTemp/img6.png'

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper/modules';
import Image from 'next/image';


const HomeSlider = () => {
    const [width, setWidth] = useState(0);
    const [height, setHeight] = useState(0);

    useEffect(() => {
        // Calculate width and height only on the client side
        if (typeof window !== 'undefined') {
            setWidth(window.innerWidth);
            setHeight(window.innerHeight);
        }
    }, []);

    return (
        <Swiper
            slidesPerView={1}
            spaceBetween={30}
            loop={true}
            pagination={{
                clickable: true,
            }}
            navigation={true}
            modules={[Pagination, Navigation]}
            className="mySwiper"
        >
            <SwiperSlide>
                <Image src={img1} alt="" width={width} height={height / 2}
                    style={{
                        objectFit: "cover"
                    }} />
            </SwiperSlide>

            <SwiperSlide>
                <Image src={img2} alt="" width={width} height={height / 2}
                    style={{
                        objectFit: "cover"
                    }} />
            </SwiperSlide>

            <SwiperSlide>
                <Image src={img3} alt="" width={width} height={height / 2}
                    style={{
                        objectFit: "cover"
                    }} />
            </SwiperSlide>

            <SwiperSlide>
                <Image src={img4} alt="" width={width} height={height / 2}
                    style={{
                        objectFit: "cover"
                    }} />
            </SwiperSlide>

            <SwiperSlide>
                <Image src={img5} alt="" width={width} height={height / 2}
                    style={{
                        objectFit: "cover"
                    }} />
            </SwiperSlide>

            <SwiperSlide>
                <Image src={img6} alt="" width={width} height={height / 2}
                    style={{
                        objectFit: "cover"
                    }} />
            </SwiperSlide>

        </Swiper>
    )
}

export default HomeSlider
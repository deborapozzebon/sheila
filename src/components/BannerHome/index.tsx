import { BannerHomeStyle } from './style';
import SwiperCore, { Pagination, EffectFade, Autoplay, Lazy } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import Link from 'next/link'
import Image from 'next/image'
import { useState, useEffect } from 'react';
SwiperCore.use([Pagination, EffectFade, Autoplay, Lazy]);
import { isMobile } from 'react-device-detect';
import { BannerHomeInterface } from './interface';
interface BannerProps {
    data: BannerHomeInterface[];
}

export default function BannerHome({ data }: BannerProps) {
    const [loaded, setLoaded] = useState(false);
    const [loadedIframe, setLoadedIframe] = useState(false);
    let time = 0;
    let timeIframe = 4500;

    if (isMobile) {
        time = 4500
    }
    useEffect(() => {
        let isMounted = true
        setTimeout(() => {
            setLoaded(true)
        }, time);
        setTimeout(() => {
            setLoadedIframe(true)
        }, timeIframe);
        return () => { isMounted = false }
    })
    return (
        <BannerHomeStyle>
            <Swiper
                autoplay={{ delay: 6000, waitForTransition: true }}
                effect="fade"
                spaceBetween={0}
                slidesPerView={1}
                allowTouchMove={false}
                lazy={true}
                pagination={{ clickable: true }}>
                {data && data.map((banner) => {
                    return (
                        <SwiperSlide key={banner._id}>
                            <div className="item_slide swiper-lazy">
                                {loaded &&
                                    <>
                                        <div className="bg">
                                            <Image src={banner.img} width={1920} height={900} layout={'responsive'} priority={true} />
                                        </div>
                                        <div className="info_slide">
                                            <div className="title" dangerouslySetInnerHTML={{ __html: banner.title }}></div>
                                            {banner.description && <p><b>{banner.description}</b></p>}
                                            <a href={banner.link} target="_blank">{banner.buttonLabel}</a>
                                        </div>
                                    </>
                                }
                            </div>
                        </SwiperSlide>
                    )
                })}
            </Swiper>
        </BannerHomeStyle>
    )
}
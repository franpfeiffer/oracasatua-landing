'use client'
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';

const residenceImages = [
    "/faena-1.jpeg",
    "/render-first-content.jpeg",
];

const bedroomImages = [
    "/faena-1.jpeg",
    "/render-first-content.jpeg",
];

function FifthContent() {
    return (
        <div className="bg-white">
            <section className="relative">
                <div className="grid grid-cols-1 lg:grid-cols-2">
                    <div className="h-[600px] lg:h-screen relative">
                        <Swiper
                            modules={[Autoplay, EffectFade]}
                            effect="fade"
                            autoplay={{
                                delay: 5000,
                                disableOnInteraction: false,
                            }}
                            loop={true}
                            className="h-full w-full"
                        >
                            {residenceImages.map((image, index) => (
                                <SwiperSlide key={index}>
                                    <div
                                        className="h-full w-full bg-cover bg-center"
                                        style={{ backgroundImage: `url(${image})` }}
                                    />
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>

                    <div className="p-8 lg:p-16 flex flex-col justify-center bg-white">
                        <h2 className="text-4xl lg:text-7xl text-gray-900 mb-8">
                            THE RESIDENCES
                        </h2>

                        <p className='text-black mb-12 text-4xl'>Meticulous design, refined finishes, inspired interiors, anda sense of homebefore you even arrive.</p>
                        <ul className="text-black mb-12 text-4xl leading-relaxed list-disc">
                            <li>Studio to four-bedroom residences</li>
                            <li>Panoramic views overlooking Miami’s Brickell, Biscayne Bay,and Coconut Grove</li>
                            <li>Turnkey residences by the revered Italian design teamat m2atelier</li>
                        </ul>
                    </div>
                </div>
            </section>
            <section className="relative">
                <div className="grid grid-cols-1 lg:grid-cols-2">
                    <div className="p-8 lg:p-16 flex flex-col justify-center bg-white order-2 lg:order-1">
                        <ul className="text-4xl list-disc pl-5 space-y-4 text-black mb-12">
                            <li>Top-of-the-line appliances in all residences, with a wine coolerin select residences</li>
                            <li>Italian-designed baths with imported fixtures</li>
                            <li>Smart home technology allows global control</li>
                            <li>Pre-wired for high-speed internet and Wi-Fi</li>
                            <li>Ample closet space throughout residences</li>
                            <li>Ten-foot ceilings with floor-to-ceiling windows</li>
                            <li>Expansive terraces with sleek glass railings</li>
                            <li>Washer and dryer in every residence</li>
                            <li>Owner’s closet in select residences</li>
                        </ul>
                    </div>

                    <div className="h-[600px] lg:h-full relative order-1 lg:order-2">
                        <Swiper
                            modules={[Autoplay, EffectFade]}
                            effect="fade"
                            autoplay={{
                                delay: 5000,
                                disableOnInteraction: false,
                            }}
                            loop={true}
                            className="h-full w-full"
                        >
                            {bedroomImages.map((image, index) => (
                                <SwiperSlide key={index}>
                                    <div
                                        className="h-full w-full bg-cover bg-center"
                                        style={{ backgroundImage: `url(${image})` }}
                                    />
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default FifthContent;

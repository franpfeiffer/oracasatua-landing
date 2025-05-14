'use client'
import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

const locations = [
    {
        image: '/carru-1.jpg'
    },
    {
        image: '/carru-2.jpg'
    },
    {
        image: '/carru3.jpg'
    },
    {
        image: '/carru-4.jpg'
    },
];

function FourthContent() {
    return (
        <div className="bg-grey-100">
            <section className="mx-auto px-4 py-6 sm:px-6 lg:px-16">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                    <div className="space-y-6 text-center lg:text-left">
                        <h2 className="text-3xl sm:text-5xl text-gray-900 leading-tight">
                            ORA ES DONDE LA VIDA ACONTECE—UNA COLECCIÓN DE ESPACIOS QUE CONVERGEN PARA CREAR LAS AMENIDADES MÁS IMPRESIONANTES DE LA CIUDAD
                        </h2>
                        <button className="bg-black text-white px-6 sm:px-8 py-3 sm:py-4 text-xl sm:text-3xl font-black hover:bg-white hover:text-black border-2 border-black transition-colors">
                            SCHEDULE A VISIT
                        </button>
                    </div>
                    <div className="relative w-full">
                        <Swiper
                            modules={[Navigation]}
                            spaceBetween={16}
                            slidesPerView={1}
                            navigation={{
                                prevEl: '.swiper-button-prev',
                                nextEl: '.swiper-button-next',
                            }}
                            loop={true}
                            breakpoints={{
                                640: {
                                    slidesPerView: 1,
                                },
                            }}
                            className="w-full"
                        >
                            {locations.map((location, index) => (
                                <SwiperSlide key={index}>
                                    <div className="relative group overflow-hidden">
                                        <img
                                            src={location.image}
                                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                        />
                                        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4 sm:p-6">
                                            <p className="text-white/80 text-lg sm:text-2xl uppercase tracking-wider font-neue-plak-black">
                                            </p>
                                            <h3 className="text-white text-xl sm:text-2xl font-medium mt-1">
                                            </h3>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>

                        <button className="swiper-button-prev absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-10 bg-white/90 p-2 rounded-full shadow-lg hover:bg-white transition-colors">
                            <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
                        </button>
                        <button className="swiper-button-next absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-10 bg-white/90 p-2 rounded-full shadow-lg hover:bg-white transition-colors">
                            <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
                        </button>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default FourthContent;


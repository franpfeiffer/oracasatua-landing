'use client'
import React, { useState } from 'react';

export default function Gallery() {
    const images = [
        "/galery1.jpg",
        "/galery-2.jpg",
        "/galery-5.jpg",
        "/galery-3.jpg",
        "/galery-4.jpg",
        "/galery-6.jpg",
        "/carru-4.jpg",
        "/galery-7.jpg"
    ];

    const [isOpen, setIsOpen] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);

    const openCarousel = (index: number) => {
        setCurrentIndex(index);
        setIsOpen(true);
        document.body.style.overflow = 'hidden';
    };

    const closeCarousel = () => {
        setIsOpen(false);
        document.body.style.overflow = 'auto';
    };

    const goToPrevious = (e: React.MouseEvent) => {
        e.stopPropagation();
        const newIndex = (currentIndex - 1 + images.length) % images.length;
        setCurrentIndex(newIndex);
    };

    const goToNext = (e: React.MouseEvent) => {
        e.stopPropagation();
        const newIndex = (currentIndex + 1) % images.length;
        setCurrentIndex(newIndex);
    };

    return (
        <>
            <div className="m-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {images.map((image, index) => (
                    <div
                        key={index}
                        className="relative group overflow-hidden cursor-pointer"
                        onClick={() => openCarousel(index)}
                    >
                        <img
                            src={image}
                            alt={`Gallery image ${index + 1}`}
                            className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-all" />
                    </div>
                ))}
            </div>
            {isOpen && (
                <div
                    className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center"
                    onClick={closeCarousel}
                >
                    <div className="relative w-full max-w-5xl px-4">
                        <button
                            className="absolute top-4 right-4 text-white text-2xl z-10"
                            onClick={closeCarousel}
                        >
                            ✕
                        </button>

                        <div className="relative">
                            <img
                                src={images[currentIndex]}
                                alt={`Carousel image ${currentIndex + 1}`}
                                className="w-full h-auto max-h-[80vh] object-contain"
                            />

                            <button
                                className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2"
                                onClick={goToPrevious}
                            >
                                ←
                            </button>

                            <button
                                className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2"
                                onClick={goToNext}
                            >
                                →
                            </button>

                            <div className="absolute bottom-4 left-0 right-0 text-center text-white">
                                {currentIndex + 1} / {images.length}
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}

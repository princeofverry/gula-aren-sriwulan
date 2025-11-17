"use client";
import React from 'react';

const HeroHome = () => {
    return (
        <div className="relative w-full h-screen overflow-hidden pad-x">
            <video
                src="/assets/DJI_0670_2.mp4"
                autoPlay
                muted
                loop
                playsInline
                className="absolute inset-0 w-full h-full object-cover"
            />

            {/* Optional overlay biar teks/isi lebih jelas */}
            <div className="absolute inset-0 bg-black/20"></div>

            {/* Content di atas video */}
            <div className="relative z-10 md:top-64 flex flex-col md:items-start items-center justify-center h-full space-y-4">
                <h1 className="text-white text-xl md:text-6xl font-bold">
                    Gula Aren Organik & Wisata Edukasi
                </h1>
                <p className='text-white text-lg md:text-xl md:font-medium font-normal'>Temukan kebaikan alami gula aren dan rasakan pengalaman tak terlupakan dalam perjalanan edukasi kami.</p>
            </div>
        </div>
    );
};

export default HeroHome;

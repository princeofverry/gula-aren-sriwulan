"use client";
import Image from 'next/image';
import React from 'react';

const HeroEdukasi = () => {
    return (
        <div className="relative w-full h-screen overflow-hidden pad-x">
            <Image
                src="/assets/1-new.png"
                alt=""
                fill
                className="object-cover"
                priority
            />

            {/* Optional overlay biar teks/isi lebih jelas */}
            <div className="absolute inset-0 bg-black/20"></div>

            {/* Content di atas video */}
            <div className="relative z-10 flex flex-col items-center justify-center h-full">
                <h1 className="text-white text-xl md:text-6xl font-bold">
                    Gula Aren
                </h1>
            </div>
        </div>
    );
};

export default HeroEdukasi;

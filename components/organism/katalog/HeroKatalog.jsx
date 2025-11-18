"use client";
import Image from 'next/image';
import React from 'react';

const HeroKatalog = () => {
    return (
        <div className="relative w-full h-screen overflow-hidden pad-x">
            <Image
                src="/assets/3.png"
                alt=""
                fill
                className="object-cover"
                priority
            />

            {/* Optional overlay biar teks/isi lebih jelas */}
            <div className="absolute inset-0 bg-black/20"></div>

            {/* Content di atas video */}
            <div className="relative z-10 flex flex-col items-center justify-center h-full italic">
                <h1 className="text-white text-6xl font-bold font-playfair">
                    Katalog
                </h1>
            </div>
        </div>
    );
};

export default HeroKatalog;

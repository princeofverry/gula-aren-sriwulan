"use client";
import React, { useState, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';

// Generate particles sekali di luar component
const PARTICLES = [...Array(20)].map(() => ({
    left: `${Math.random() * 100}%`,
    top: `${Math.random() * 100}%`,
    delay: `${Math.random() * 5}s`,
    duration: `${10 + Math.random() * 10}s`,
}));

const HeroHome = () => {
    const [scrollY, setScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => setScrollY(window.scrollY);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className="relative w-full h-screen overflow-hidden">
            {/* Video Background */}
            <video
                src="/assets/DJI_0670_2.mp4"
                autoPlay
                muted
                loop
                playsInline
                className="absolute inset-0 w-full h-full object-cover"
                style={{ transform: `scale(${1 + scrollY * 0.0002})` }}
            />

            {/* Gradient Overlays */}
            <div className="absolute inset-0 bg-linear-to-b from-black/40 via-black/30 to-black/60"></div>
            <div className="absolute inset-0 bg-linear-to-r from-amber-900/20 to-transparent"></div>

            {/* Animated Particles */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {PARTICLES.map((p, i) => (
                    <div
                        key={i}
                        className="absolute w-1 h-1 bg-amber-200/30 rounded-full animate-float"
                        style={{
                            left: p.left,
                            top: p.top,
                            animationDelay: p.delay,
                            animationDuration: p.duration,
                        }}
                    ></div>
                ))}
            </div>

            {/* Main Content */}
            <div className="relative z-10 flex flex-col items-center justify-center h-full px-4 md:px-16 text-center md:text-left">

                <h1 className="text-white text-4xl md:text-7xl font-bold mb-6 leading-tight animate-fade-in-up-200">
                    <span className="block bg-linear-to-r from-white via-amber-100 to-white bg-clip-text text-transparent">
                        Gula Aren Organik
                    </span>
                    <span className="block text-3xl md:text-5xl mt-2 text-amber-200">
                        & Wisata Edukasi
                    </span>
                </h1>

                <p className="text-white/90 text-lg md:text-xl max-w-2xl mb-8 leading-relaxed animate-fade-in-up-300">
                    Temukan kebaikan alami gula aren dan rasakan pengalaman tak terlupakan dalam perjalanan edukasi kami.
                </p>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 mb-12 animate-fade-in-up-500">
                    <button className="group px-8 py-4 bg-linear-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white font-semibold rounded-full shadow-lg hover:shadow-amber-500/50 transition-all duration-300 transform hover:scale-105">
                        <span className="flex items-center justify-center gap-2">
                            Katalog
                            <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                        </span>
                    </button>

                    <button className="px-8 py-4 bg-white/10 backdrop-blur-md hover:bg-white/20 text-white font-semibold rounded-full border-2 border-white/30 hover:border-white/50 transition-all duration-300 transform hover:scale-105">
                        Edukasi
                    </button>
                </div>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 animate-bounce">
                <div className="flex flex-col items-center gap-2 text-white/70 hover:text-white transition-colors cursor-pointer">
                    <span className="text-sm font-medium">Scroll untuk lebih</span>
                    <ChevronDown className="w-6 h-6" />
                </div>
            </div>

            {/* Floating Animation */}
            <style jsx>{`
                @keyframes float {
                    0%, 100% {
                        transform: translateY(0) translateX(0);
                        opacity: 0;
                    }
                    10% { opacity: 0.3; }
                    50% {
                        transform: translateY(-100vh) translateX(50px);
                        opacity: 0.6;
                    }
                    90% { opacity: 0.3; }
                }
                .animate-float {
                    animation: float linear infinite;
                }
                
                @keyframes fadeInUp {
                    from {
                        opacity: 0;
                        transform: translateY(-2.5rem);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }
                
                .animate-fade-in-up-200 {
                    animation: fadeInUp 1s ease-out 0.2s both;
                }
                
                .animate-fade-in-up-300 {
                    animation: fadeInUp 1s ease-out 0.3s both;
                }
                
                .animate-fade-in-up-500 {
                    animation: fadeInUp 1s ease-out 0.5s both;
                }
            `}</style>
        </div>
    );
};

export default HeroHome;
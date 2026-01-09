import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Star, ArrowRight } from 'lucide-react';

import goreng from '/images/products/goreng.jpeg';
import otak2 from '/images/products/otak2.jpeg';
import pencuciSingkong from '/images/products/pencuci singkong.jpeg';
import rajangSingkong from '/images/products/rajang singkong.jpeg';
import rajangTempe from '/images/products/rajang tempe.jpeg';
import tortilla from '/images/products/tortilla.jpeg';
import company from '../assets/company.png';

const HeroSection = () => {
    const navigate = useNavigate();
    const [currentIndex, setCurrentIndex] = useState(0);
    const [touchStart, setTouchStart] = useState(0);
    const [touchEnd, setTouchEnd] = useState(0);
    const [isDragging, setIsDragging] = useState(false);
    const autoPlayRef = useRef(null);

    const images = [
        { src: goreng, alt: 'Mesin Goreng' },
        { src: otak2, alt: 'Mesin Otak-Otak' },
        { src: pencuciSingkong, alt: 'Mesin Pencuci Singkong' },
        { src: rajangSingkong, alt: 'Mesin Rajang Singkong' },
        { src: rajangTempe, alt: 'Mesin Rajang Tempe' },
        { src: tortilla, alt: 'Mesin Tortilla' }
    ];

    // Auto play carousel
    const stopAutoPlay = () => {
        if (autoPlayRef.current) {
            clearInterval(autoPlayRef.current);
            autoPlayRef.current = null;
        }
    };

    const startAutoPlay = () => {
        stopAutoPlay();
        autoPlayRef.current = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 3000);
    };

    useEffect(() => {
        startAutoPlay();
        return () => stopAutoPlay();
    },);

    const handleTouchStart = (e) => {
        setTouchStart(e.targetTouches[0].clientX);
        setIsDragging(true);
        stopAutoPlay();
    };

    const handleTouchMove = (e) => {
        if (isDragging) {
            setTouchEnd(e.targetTouches[0].clientX);
        }
    };

    const handleTouchEnd = () => {
        if (!isDragging) return;

        if (touchStart - touchEnd > 75) {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }

        if (touchStart - touchEnd < -75) {
            setCurrentIndex((prevIndex) =>
                prevIndex === 0 ? images.length - 1 : prevIndex - 1
            );
        }

        setTouchStart(0);
        setTouchEnd(0);
        setIsDragging(false);
        startAutoPlay();
    };

    const handleMouseDown = (e) => {
        e.preventDefault();
        setTouchStart(e.clientX);
        setIsDragging(true);
        stopAutoPlay();
    };

    const handleMouseMove = (e) => {
        if (isDragging) {
            setTouchEnd(e.clientX);
        }
    };

    const handleMouseUp = () => {
        if (!isDragging) return;

        if (touchStart - touchEnd > 75) {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }
        if (touchStart - touchEnd < -75) {
            setCurrentIndex((prevIndex) =>
                prevIndex === 0 ? images.length - 1 : prevIndex - 1
            );
        }

        setTouchStart(0);
        setTouchEnd(0);
        setIsDragging(false);
        startAutoPlay();
    };

    return (
        <div className="relative min-h-screen bg-gray-50 font-sans text-slate-900 selection:bg-orange-100 mt-20 overflow-hidden">
            {/* Background Image with Overlay */}
            <div className="absolute inset-0 z-0">
                <img
                    src={company}
                    alt="bg company"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-white/70" />
            </div>

            <main className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-8 lg:gap-12 items-center pt-6 sm:pt-12 pb-12 sm:pb-24">
                <div className="space-y-6 sm:space-y-8">
                    <div className="flex flex-wrap gap-2 sm:space-x-3">
                        {['Quality', 'Quantity', 'Efficiency'].map((tag) => (
                            <span key={tag} className="text-[9px] sm:text-[20px] font-semibold tracking-[0.2em] uppercase bg-black text-white px-2 sm:px-3 py-1 rounded-full">
                                {tag}
                            </span>
                        ))}
                    </div>

                    <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-black leading-[0.9] tracking-tight">
                        SOLUSI{" "}
                        <span className="text-yellow-500 inline-flex items-center sm:gap-2">
                            TEPAT
                            <Star className="fill-yellow-500 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12" />
                        </span> <br />
                        PRODUKSI HEBAT
                    </h1>

                    <p className="text-base sm:text-2xl text-black max-w-md leading-relaxed">
                        Menghadirkan teknologi mesin pemrosesan pangan berkualitas tinggi untuk menjawab tantangan industri manufaktur Anda.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-2 sm:pt-4">
                        <button
                            onClick={() => navigate('/katalog')}
                            className="bg-black text-white px-6 sm:px-8 py-3 sm:py-4 rounded-sm text-xl font-bold flex items-center justify-center gap-2 hover:text-amber-400 transition-colors group"
                        >
                            Lihat Produk
                            <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
                        </button>

                    </div>
                </div>

                {/* Carousel Section */}
                <div
                    className="relative w-full h-100 sm:h-125 lg:h-150 rounded-lg overflow-hidden shadow-2xl cursor-grab active:cursor-grabbing select-none"
                    onTouchStart={handleTouchStart}
                    onTouchMove={handleTouchMove}
                    onTouchEnd={handleTouchEnd}
                    onMouseDown={handleMouseDown}
                    onMouseMove={handleMouseMove}
                    onMouseUp={handleMouseUp}
                    onMouseLeave={handleMouseUp}
                >
                    {/* Gambar Carousel */}
                    <div className="top-6 relative w-full h-full">
                        {images.map((image, index) => (
                            <div
                                key={index}
                                className={`absolute inset-0 transition-opacity duration-700 ${index === currentIndex ? 'opacity-100' : 'opacity-0'
                                    }`}
                            >
                                <img
                                    src={image.src}
                                    alt={image.alt}
                                    className="w-full h-full object-cover pointer-events-none"
                                    draggable="false"
                                />
                            </div>
                        ))}
                    </div>

                    {/* Label Nama Mesin */}
                    <div className="w-full absolute top-4 bg-black/80 text-white px-4 py-3 rounded">
                        <p className="text-xl font-semibold text-center">
                            {images[currentIndex].alt}
                        </p>
                    </div>
                </div>

            </main>
        </div>
    );
};
export default HeroSection;
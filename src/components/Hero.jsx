import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Star, ArrowRight, Settings, ShieldCheck } from 'lucide-react';

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

    const products = [
        { src: goreng, name: 'MESIN GORENG', status: 'READY', model: 'RT-FRY-1000' },
        { src: otak2, name: 'MESIN OTAK-OTAK', status: 'PRE-ORDER', model: 'RT-OTK-2000' },
        { src: pencuciSingkong, name: 'MESIN PENCUCI SINGKONG', status: 'READY', model: 'RT-WASH-3000' },
        { src: rajangSingkong, name: 'MESIN RAJANG SINGKONG', status: 'READY', model: 'RT-SLC-1000' },
        { src: rajangTempe, name: 'MESIN RAJANG TEMPE', status: 'PRE-ORDER', model: 'RT-SLC-2000' },
        { src: tortilla, name: 'MESIN TORTILLA', status: 'READY', model: 'RT-TRS-500' }
    ];

    const stopAutoPlay = () => {
        if (autoPlayRef.current) {
            clearInterval(autoPlayRef.current);
            autoPlayRef.current = null;
        }
    };

    const startAutoPlay = () => {
        stopAutoPlay();
        autoPlayRef.current = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % products.length);
        }, 3000);
    };

    useEffect(() => {
        startAutoPlay();
        return () => stopAutoPlay();
    }, []);

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
            setCurrentIndex((prevIndex) => (prevIndex + 1) % products.length);
        }

        if (touchStart - touchEnd < -75) {
            setCurrentIndex((prevIndex) =>
                prevIndex === 0 ? products.length - 1 : prevIndex - 1
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
            setCurrentIndex((prevIndex) => (prevIndex + 1) % products.length);
        }
        if (touchStart - touchEnd < -75) {
            setCurrentIndex((prevIndex) =>
                prevIndex === 0 ? products.length - 1 : prevIndex - 1
            );
        }

        setTouchStart(0);
        setTouchEnd(0);
        setIsDragging(false);
        startAutoPlay();
    };

    const currentProduct = products[currentIndex];

    return (
        <div className="relative min-h-screen bg-[#f3f4f6] font-sans text-slate-900 selection:bg-orange-100 mt-20 overflow-hidden">
            {/* Background Image with Overlay */}
            <div className="absolute inset-0 z-0">
                <img
                    src={company}
                    alt="bg company"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-white/80 backdrop-blur-[2px]" />
            </div>

            <main className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-8 lg:gap-16 items-center pt-6 sm:pt-12 pb-12 sm:pb-24">
                <div className="space-y-6 sm:space-y-8">
                    <div className="flex flex-wrap gap-2 sm:space-x-3">
                        {['Quality', 'Quantity', 'Efficiency'].map((tag) => (
                            <span key={tag} className="text-[10px] sm:text-xs font-bold tracking-widest uppercase bg-slate-900 text-white px-3 py-1.5 rounded-sm">
                                {tag}
                            </span>
                        ))}
                    </div>

                    <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-[0.95] tracking-tight">
                        SOLUSI{" "}
                        <span className="text-yellow-500 inline-flex items-center sm:gap-2">
                            TEPAT
                            <Star className="fill-yellow-500 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 ml-2" />
                        </span> <br />
                        PRODUKSI HEBAT
                    </h1>

                    <p className="text-lg sm:text-xl text-slate-700 max-w-lg leading-relaxed font-medium">
                        Menghadirkan teknologi mesin pemrosesan pangan berkualitas tinggi untuk menjawab tantangan industri manufaktur Anda.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-2 sm:pt-4">
                        <button
                            onClick={() => navigate('/katalog')}
                            className="bg-black text-white px-8 py-4 rounded-lg text-lg font-bold flex items-center justify-center gap-3 hover:bg-black transition-all shadow-lg hover:shadow-xl hover:-translate-y-1 hover:text-amber-400"
                        >
                            Lihat Produk
                            <ArrowRight className="w-5 h-5" />
                        </button>
                    </div>
                </div>

                {/* Card Section */}
                <div
                    className="relative w-full max-w-md mx-auto perspective-1000"
                    onTouchStart={handleTouchStart}
                    onTouchMove={handleTouchMove}
                    onTouchEnd={handleTouchEnd}
                    onMouseDown={handleMouseDown}
                    onMouseMove={handleMouseMove}
                    onMouseUp={handleMouseUp}
                    onMouseLeave={handleMouseUp}
                >
                    {/* Modern Window UI Card */}
                    <div className="bg-white rounded-2xl shadow-2xl overflow-hidden relative transition-all duration-300 transform hover:scale-[1.02]">

                        {/* Window Header */}
                        <div className="bg-[#1e293b] p-4 sm:p-5 flex items-center justify-between">
                            <h2 className="text-white font-semibold text-base sm:text-lg tracking-wide capitalize">
                                {currentProduct.name.toLowerCase()}
                            </h2>
                            <div className="flex space-x-2">
                                <div className="w-3 h-3 rounded-full bg-[#ef4444]"></div>
                                <div className="w-3 h-3 rounded-full bg-[#eab308]"></div>
                                <div className="w-3 h-3 rounded-full bg-[#22c55e]"></div>
                            </div>
                        </div>

                        {/* Card Body */}
                        <div className="p-4 sm:p-6 bg-white relative">

                            {/* Accent Badge */}
                            <div className="absolute top-6 right-6 z-20">
                                <div className="bg-amber-500 w-10 h-10 sm:w-12 sm:h-12 rounded-lg flex items-center justify-center shadow-lg text-white">
                                    <ShieldCheck className="w-5 h-5 sm:w-6 sm:h-6" />
                                </div>
                            </div>

                            {/* Image Area */}
                            <div className="w-full aspect-4/3 relative rounded-xl overflow-hidden bg-gray-50 mb-6 border border-slate-100">
                                {products.map((product, index) => (
                                    <img
                                        key={index}
                                        src={product.src}
                                        alt={product.name}
                                        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ease-in-out mix-blend-multiply p-4 ${index === currentIndex ? 'opacity-100' : 'opacity-0'
                                            }`}
                                        draggable="false"
                                    />
                                ))}
                            </div>

                            {/* Footer Info */}
                            <div className="flex items-end justify-between">
                                <div>
                                    <p className="text-slate-400 text-xs font-bold tracking-widest uppercase mb-1">
                                        SERIES V-2024
                                    </p>
                                    <h3 className="text-xl sm:text-2xl font-bold text-slate-800">
                                        Industrial Grade
                                    </h3>
                                </div>


                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default HeroSection;
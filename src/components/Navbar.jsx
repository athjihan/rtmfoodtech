import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import logo from '../assets/logo.png';
import name from '../assets/name.png';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();

    const handleSmoothScroll = (e, targetId) => {
        e.preventDefault();

        if (location.pathname !== '/') {
            navigate('/#' + targetId);
            return;
        }

        const element = document.getElementById(targetId);
        if (element) {
            const navbarHeight = 80;
            const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
            const offsetPosition = elementPosition - navbarHeight;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
            setIsMenuOpen(false);
        }
    };

    return (
        <nav className="w-full fixed top-0 left-0 z-50 shadow-md bg-amber-400">
            <div className="text-white flex items-center justify-between px-4 sm:px-6 lg:px-8 py-3 sm:py-4">
                {/* Logo Section */}
                <div className="flex items-center shrink-0">
                    <img src={logo} alt="Logo" className="w-12 h-12" />
                    <img src={name} alt="Company Name" className="w-25 sm:w-35" />
                </div>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center gap-4 lg:gap-8 text-black font-medium text-sm">
                    <a href="#tentang" onClick={(e) => handleSmoothScroll(e, 'tentang')} className="relative hover:text-black transition-colors text-base lg:text-xl cursor-pointer group">
                        Tentang
                        <span className={`absolute left-0 -bottom-1 h-0.5 bg-black transition-all duration-300 ${location.pathname === '/' ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
                    </a>
                    <a href="/katalog" className="relative hover:text-black transition-colors text-base lg:text-xl group">
                        Katalog
                        <span className={`absolute left-0 -bottom-1 h-0.5 bg-black transition-all duration-300 ${location.pathname === '/katalog' ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
                    </a>
                    <a href="/cara-pesan" className="relative hover:text-black transition-colors text-base lg:text-xl group">
                        Cara Pesan
                        <span className={`absolute left-0 -bottom-1 h-0.5 bg-black transition-all duration-300 ${location.pathname === '/cara-pesan' ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
                    </a>
                    <a href="/kontak" className="relative hover:text-black transition-colors text-base lg:text-xl group">
                        Kontak
                        <span className={`absolute left-0 -bottom-1 h-0.5 bg-black transition-all duration-300 ${location.pathname === '/kontak' ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
                    </a>
                    <a href="/loker" className="relative hover:text-black transition-colors text-base lg:text-xl group">
                        Loker
                        <span className={`absolute left-0 -bottom-1 h-0.5 bg-black transition-all duration-300 ${location.pathname === '/loker' ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
                    </a>
                </div>

                {/* Desktop Button & Mobile Menu Toggle */}
                <div className="flex items-center gap-3">
                    <button className="px-4 lg:px-6 py-2 rounded-full text-xs lg:text-sm font-semibold active:scale-95 bg-black">
                        <a a href="tel:+6281328133337" className="bg-amber-400 bg-clip-text text-transparent">
                            Let's talk
                        </a>
                    </button>

                    {/* Mobile Menu Toggle */}
                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="md:hidden text-white p-2 hover:bg-gray-800 rounded-lg transition-colors"
                        aria-label="Toggle menu"
                    >
                        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className="md:hidden bg-black border-t border-gray-800">
                    <div className="flex flex-col px-4 py-4 space-y-3">
                        <a href="#tentang" onClick={(e) => handleSmoothScroll(e, 'tentang')} className={`transition-colors py-2 text-lg cursor-pointer ${location.pathname === '/' ? 'text-white' : 'text-gray-400 hover:text-white'}`}>Tentang</a>
                        <a href="/katalog" className={`transition-colors py-2 text-lg ${location.pathname === '/katalog' ? 'text-white' : 'text-gray-400 hover:text-white'}`}>Katalog</a>
                        <a href="/cara-pesan" className={`transition-colors py-2 text-lg ${location.pathname === '/cara-pesan' ? 'text-white' : 'text-gray-400 hover:text-white'}`}>Cara Pesan</a>
                        <a href="/kontak" className={`transition-colors py-2 text-lg ${location.pathname === '/kontak' ? 'text-white' : 'text-gray-400 hover:text-white'}`}>Kontak</a>
                        <a href="/loker" className={`transition-colors py-2 text-lg ${location.pathname === '/loker' ? 'text-white' : 'text-gray-400 hover:text-white'}`}>Loker</a>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
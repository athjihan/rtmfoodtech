import { useNavigate, useLocation } from 'react-router-dom';
import logo from '../assets/logo.png';
import name from '../assets/name.png';
import Tiktok from '../assets/icon/tiktok.svg';
import Youtube from '../assets/icon/youtube.svg';
import Tokopedia from '../assets/icon/tokopedia.svg';
import Shopee from '../assets/icon/shopee.svg'
import { PhoneCall } from 'lucide-react';

function Footer() {
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
        }
    };

    return (
        <footer className="bg-black text-white py-12 border-t border-gray-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr_1fr_1.2fr_1.8fr] gap-4 lg:gap-8 mb-8">
                    {/* Brand Section */}
                    <div className="space-y-4">
                        <div className="flex items-center shrink-0">
                            <img src={logo} alt="Logo" className="w-12 h-12" />
                            <img src={name} alt="Company Name" className="w-25 sm:w-35" />
                        </div>
                        <p className="text-gray-400 text-sm leading-relaxed">
                            RTMFOODTECH menyediakan solusi mesin pemrosesan makanan berkualitas tinggi untuk meningkatkan efisiensi produksi Anda.
                        </p>
                        {/* Social Icons */}
                        <div className="flex gap-4 pt-2 items-center">
                            <a href="https://www.tiktok.com/@rtmfoodtech" className="text-gray-400 hover:text-white transition-colors" aria-label="TikTok">
                                <img src={Tiktok} alt="TikTok" className="w-8 h-8" />
                            </a>
                            <a href="https://www.youtube.com/c/RTMFOODTECH/videos" className="text-gray-400 hover:text-white transition-colors" aria-label="Youtube">
                                <img src={Youtube} alt="Youtube" className="w-6 h-6" />
                            </a>
                            <a href="https://www.tokopedia.com/rtmfoodtech" className="text-gray-400 hover:text-white transition-colors" aria-label="Tokopedia">
                                <img src={Tokopedia} alt="Tokopedia" className="w-6 h-6" />
                            </a>
                            <a href="https://shopee.co.id/rtmfoodtech" className="text-gray-400 hover:text-white transition-colors" aria-label="Shopee">
                                <img src={Shopee} alt="Shopee" className="w-7 h-7" />
                            </a>
                        </div>
                    </div>

                    {/* Product Column */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Produk</h3>
                        <ul className="space-y-2 text-gray-400">
                            <li><a href="/katalog" className="hover:text-white transition-colors">Semua</a></li>
                            <li><a href="/katalog?category=Penggoreng" className="hover:text-white transition-colors">Penggoreng</a></li>
                            <li><a href="/katalog?category=Pencetak" className="hover:text-white transition-colors">Pencetak</a></li>
                            <li><a href="/katalog?category=Pengiris" className="hover:text-white transition-colors">Pengiris</a></li>
                            <li><a href="/katalog?category=Sparepart" className="hover:text-white transition-colors">Sparepart</a></li>
                        </ul>
                    </div>

                    {/* Resources Column */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Informasi</h3>
                        <ul className="space-y-2 text-gray-400">
                            <li><a href="#tentang" onClick={(e) => handleSmoothScroll(e, 'tentang')} className="hover:text-white transition-colors cursor-pointer">Tentang Kami</a></li>
                            <li><a href="/cara-pesan" className="hover:text-white transition-colors">Cara Pesan</a></li>
                            <li><a href="/loker" className="hover:text-white transition-colors">Lowongan Kerja</a></li>
                        </ul>
                    </div>

                    {/* Company Column */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Hubungi Kami</h3>
                        <ul className="space-y-2 text-gray-400">
                            <li><a href="/kontak" className="hover:text-white transition-colors"></a></li>
                            <li><a href="tel:+6281328133337" className="hover:text-white transition-colors">
                                <PhoneCall className="inline w-4 h-4 mr-1 mb-1" />
                                0813-2813-3337 (telepon)</a></li>
                            <li><a className="hover:text-white transition-colors">
                                Email</a></li>
                        </ul>
                    </div>

                    {/* Address Column */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Alamat</h3>
                        <ul className="space-y-2 text-gray-400">
                            <li><a
                                href="https://maps.app.goo.gl/o3sCr3YmSxcBGox19" className="hover:text-white transition-colors">
                                Jl. Blabak - Mendut No.KM.01, RT.04/RW.02, Panjangan, Mungkid, Kec. Mungkid, Kabupaten Magelang, Jawa Tengah 56512
                            </a></li>
                            <li><p className="hover:text-white transition-colors">
                                Senin - Sabtu (08.00 - 16.30 WIB)
                            </p></li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-gray-400 text-sm">© 2025 RTMFOODTECH. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
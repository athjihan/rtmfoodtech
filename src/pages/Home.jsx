import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Hero from '../components/Hero';
import { UserCheck, Building2, ShieldUser, Truck } from 'lucide-react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import { TypeAnimation } from 'react-type-animation';

const AnimatedCard = ({ children, delay = 0 }) => {
    const { ref, inView } = useInView({
        threshold: 0.3
    });

    return (
        <div
            ref={ref}
            className={`w-full h-20 rounded-3xl overflow-hidden bg-amber-400 shadow-xl flex items-center gap-4 px-4 transition-all duration-700 transform ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
            style={{
                transitionDelay: inView ? `${delay}ms` : '0ms'
            }}
        >
            {children}
        </div>
    );
};

const WhyChooseCard = ({ icon: Icon, title, description, index }) => {
    const { ref, inView } = useInView({
        threshold: 0.3
    });

    const isEven = index % 2 === 0;

    return (
        <div
            ref={ref}
            className={`flex flex-col items-center text-center space-y-4 p-6 transition-all duration-700 transform ${inView
                ? isEven ? 'opacity-100 translate-x-0' : 'opacity-100 translate-x-0'
                : isEven ? 'opacity-0 -translate-x-12' : 'opacity-0 translate-x-12'
                }`}
            style={{
                transitionDelay: inView ? `${index * 100}ms` : '0ms'
            }}
        >
            <div className="w-20 h-20 rounded-full bg-amber-100 flex items-center justify-center transition-all duration-300 hover:shadow-xl hover:shadow-black-300 hover:-translate-y-2">
                {Icon}
            </div>
            <h3 className="text-2xl font-bold text-gray-900">{title}</h3>
            <p className="text-gray-600 text-2xl">{description}</p>
        </div>
    );
};

const CounterStat = ({ end, suffix = '+', label }) => {
    const { ref, inView } = useInView({
        threshold: 0.3
    });

    return (
        <div ref={ref} className="space-y-2">
            <h3 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900">
                {inView ? (
                    <CountUp end={end} duration={2.5} separator="," suffix={suffix} />
                ) : (
                    '0'
                )}
            </h3>
            <p className="text-lg sm:text-xl font-medium text-gray-800">{label}</p>
        </div>
    );
};

const StatsSection = () => {
    return (
        <section className="bg-linear-to-t from-amber-100 to-amber-50 font-sans text-slate-900 selection:bg-orange-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-16 sm:py-24">
                <p className="text-2xl tracking-widest uppercase text-black mb-4">
                    DENGAN PENGALAMAN BERTAHUN-TAHUN
                </p>

                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-blackmb-4 leading-tight">
                    Sudah Banyak Pengusaha Mengandalkan Kami
                </h2>
                <p className="text-2xl  text-black mb-4 mt-4">Mesin kami telah membantu banyak pengusaha dan mayoritas dari mereka akan kembali menggunakan layanan kami.</p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 mt-8 mb-8">
                    <CounterStat end={500} suffix="+" label="Customer Terbantu" />
                    <CounterStat end={1000} suffix="+" label="Mesin Terjual" />
                    <CounterStat end={10} suffix="+" label="Tahun Pengalaman" />
                </div>
            </div>
        </section>
    );
};

const Home = () => {
    const location = useLocation();

    useEffect(() => {
        if (location.hash) {
            const id = location.hash.replace('#', '');
            setTimeout(() => {
                const element = document.getElementById(id);
                if (element) {
                    const navbarHeight = 80;
                    const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
                    const offsetPosition = elementPosition - navbarHeight;

                    window.scrollTo({
                        top: offsetPosition,
                        behavior: 'smooth'
                    });
                }
            }, 100);
        }
    }, [location]);

    return (
        <div className="relative flex flex-col min-h-screen bg-linear-to-b from-amber-50 via-white to-orange-100 overflow-hidden">
            <Hero />

            {/*About Section*/}
            <section className="min-h-screen bg-white/70 backdrop-blur-sm border border-white/40 shadow-lg font-sans text-slate-900 selection:bg-orange-100" id='tentang'>
                <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-8 lg:gap-12 items-center sm:pt-2 pb-12 sm:pb-24">
                    <div className="space-y-6 sm:space-y-8">
                        <h1 className="text-2xl font-bold my-8 ">Tentang Kami</h1>
                        <p className='text-2xl'>RTMFOODTECH adalah penyedia mesin pemrosesan makanan terpercaya yang menghadirkan rangkaian produk berkualitas tinggi dan suku cadang (sparepart) yang lengkap. Didirikan oleh Alm. Bapak Baehaqi, RTMFOODTECH kini terus berkembang di bawah pengelolaan Bapak Ruli serta Ibu Zulaiha.</p>

                        <p className='text-2xl'>RTMFOODTECH berkomitmen untuk memberikan solusi inovatif
                            yang memenuhi kebutuhan spesifik pelanggan kami. Setiap mesin yang kami tawarkan dirancang untuk memberikan performa optimal dan hasil terbaik. </p>
                    </div>

                    <div className="space-y-6 sm:space-y-8 mt-20 relative">

                        <AnimatedCard delay={0}>
                            <Building2 className="w-12 h-12 shrink-0 text-black ml-4" />
                            <h2 className="text-2xl font-semibold text-black mr-4">Berdiri sejak 2004</h2>
                        </AnimatedCard>

                        <AnimatedCard delay={100}>
                            <UserCheck className="w-12 h-12 shrink-0 text-black ml-4" />
                            <h2 className="text-2xl font-semibold text-black mr-4">Customer dari berbagai daerah</h2>
                        </AnimatedCard>

                        <AnimatedCard delay={200}>
                            <ShieldUser className="w-12 h-12 shrink-0 text-black ml-4 " />
                            <h2 className="text-2xl font-semibold text-black mr-4">Menangani banyak brand besar</h2>
                        </AnimatedCard>

                        <AnimatedCard delay={300}>
                            <Truck className="w-12 h-12 shrink-0 text-black ml-4" />
                            <h2 className="text-2xl font-semibold text-black mr-4">Pengiriman hingga ke luar pulau</h2>
                        </AnimatedCard>
                    </div>
                </main>

                <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 items-center sm:pt-2 pb-12 sm:pb-24">
                    <h1 className="text-2xl font-bold my-8 ">Mengapa memilih RTMFOODTECH?</h1>
                    <p className='text-2xl mb-12'>Kami memahami bahwa efisiensi produksi adalah kunci keberhasilan bisnis Anda. Itulah mengapa RTMFOODTECH bukan sekadar penyedia mesin, melainkan mitra pertumbuhan usaha Anda.
                    </p>

                    <div className="grid md:grid-cols-2 gap-8 mt-8">
                        <WhyChooseCard
                            index={0}
                            icon={<svg className="w-10 h-10 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" /></svg>}
                            title="Produk Lengkap"
                            description="Kami menyediakan berbagai pilihan mesin pemrosesan makanan untuk beragam skala industri."
                        />
                        <WhyChooseCard
                            index={1}
                            icon={<svg className="w-10 h-10 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>}
                            title="Kualitas Terjamin"
                            description="Setiap mesin yang kami tawarkan telah melalui seleksi ketat untuk memastikan ketahanan dan performa yang maksimal."
                        />
                        <WhyChooseCard
                            index={2}
                            icon={<svg className="w-10 h-10 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>}
                            title="Keamanan Bertransaksi"
                            description="Kami menjunjung tinggi transparansi dengan prosedur pemesanan yang jelas dan bukti transaksi yang sah."
                        />
                        <WhyChooseCard
                            index={3}
                            icon={<svg className="w-10 h-10 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>}
                            title="Dukungan Profesional"
                            description="Kami siap membantu Anda memilih solusi mesin yang paling sesuai dengan target produksi dan anggaran Anda."
                        />
                    </div>
                </main>
            </section>

            <StatsSection />
        </div>
    );
};

export default Home;
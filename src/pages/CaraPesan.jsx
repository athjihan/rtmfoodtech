import { useInView } from 'react-intersection-observer';
import { Phone, CreditCard, Package, Truck, MapPin, Clock, CircleDollarSign } from 'lucide-react';

const AnimatedCard = ({ children, delay = 0 }) => {
    const { ref, inView } = useInView({
        threshold: 0.3
    });

    return (
        <div
            ref={ref}
            className={`transition-all duration-700 transform ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
            style={{
                transitionDelay: inView ? `${delay}ms` : '0ms'
            }}
        >
            {children}
        </div>
    );
};

function CaraPesan() {
    const steps = [
        {
            icon: Phone,
            title: "1. Konsultasi & Pemesanan",
            description: "Silakan hubungi kami melalui telepon (bukan WhatsApp) di jam operasional. Kami juga sangat terbuka jika Anda ingin berkunjung langsung ke kantor kami untuk berdiskusi."
        },
        {
            icon: CircleDollarSign,
            title: "2. Ketentuan Pembayaran",
            description: "Sistem Pre-Order: DP 50% di awal, pelunasan dilakukan saat mesin siap kirim. Barang Ready Stock: Pembayaran lunas sebelum barang dikirim."
        },
        {
            icon: CreditCard,
            title: "3. Metode Pembayaran",
            description: "Pembayaran dapat dilakukan via transfer bank atau tunai di kantor. Anda akan menerima kuitansi resmi sebagai bukti sah transaksi."
        },
        {
            icon: Truck,
            title: "4. Biaya Pengiriman",
            description: "Harap diperhatikan bahwa harga produk yang tertera belum termasuk ongkos kirim. Besaran ongkir akan disesuaikan dengan jarak dan ekspedisi yang digunakan."
        },
        {
            icon: Package,
            title: "5. Pengiriman Barang",
            description: "Mesin akan segera kami proses pengirimannya setelah konfirmasi pelunasan atau pembayaran kami terima."
        }
    ];

    return (
        <div className="min-h-screen bg-gray-100 pt-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                {/* Header */}
                <div className="text-center mb-12">
                    <h1 className="text-4xl md:text-5xl font-bold mb-6 text-black">
                        Cara Pemesanan
                    </h1>
                    <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
                        Kami berkomitmen menyediakan mesin berkualitas dengan transaksi yang aman dan transparan. Berikut adalah panduan langkah-langkah pemesanan mesin di tempat kami:
                    </p>
                </div>

                {/* Steps Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16 auto-rows-fr">
                    {steps.map((step, index) => {
                        const Icon = step.icon;
                        return (
                            <AnimatedCard key={index} delay={index * 120}>
                                <div
                                    className="step-card bg-white rounded-xl p-8 shadow-md hover:shadow-xl transition-shadow duration-300 border-t-4 border-blue-700 w-full h-full flex flex-col items-center text-center"
                                >
                                    <div className="w-20 h-20 bg-blue-700 rounded-full flex items-center justify-center mb-6">
                                        <Icon className="w-10 h-10 text-white" />
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-4">
                                        {step.title}
                                    </h3>
                                    <p className="text-gray-700 leading-relaxed text-xl grow">
                                        {step.description}
                                    </p>
                                </div>
                            </AnimatedCard>
                        );
                    })}
                </div>

                {/* Informasi Pemesanan Section */}
                <div className="bg-white rounded-xl shadow-lg p-8 md:p-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-black">
                        Informasi Pemesanan
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {/* Kantor & Workshop */}
                        <div className="border-2 border-blue-700 rounded-lg p-6 hover:bg-blue-100 transition-colors">
                            <div className="flex flex-col items-center text-center">
                                <MapPin className="w-12 h-12 text-blue-700 mb-4" />
                                <h3 className="text-xl font-bold text-blue-700 mb-3">Kantor & Workshop</h3>
                                <p className="text-gray-800 text-xl leading-relaxed">
                                    Jl. Blabak - Mendut No.KM.01, RT.04/RW.02, Panjangan, Mungkid, Kec. Mungkid, Kabupaten Magelang, Jawa Tengah 56512
                                </p>
                            </div>
                        </div>

                        {/* Call Center */}
                        <div className="border-2 border-blue-700 rounded-lg p-6 hover:bg-blue-100 transition-colors">
                            <div className="flex flex-col items-center text-center">
                                <Phone className="w-12 h-12 text-blue-700 mb-4" />
                                <h3 className="text-xl font-bold text-blue-700 mb-3">Call Center</h3>
                                <a
                                    href="tel:+6281328133337"
                                    className="text-gray-800 text-2xl font-semibold hover:text-blue-700 transition-colors"
                                >
                                    0813-2813-3337
                                </a>
                                <p className="text-xl text-gray-600 mt-2">*Via telepon, bukan WhatsApp call</p>
                            </div>
                        </div>

                        {/* Jam Operasional */}
                        <div className="border-2 border-blue-700 rounded-lg p-6 hover:bg-blue-100 transition-colors">
                            <div className="flex flex-col items-center text-center">
                                <Clock className="w-12 h-12 text-blue-700 mb-4" />
                                <h3 className="text-xl font-bold text-blue-700 mb-3">Jam Operasional</h3>
                                <p className="text-gray-800 text-xl">
                                    Senin - Sabtu<br />
                                    08.00 - 16.30 WIB
                                </p>
                                <p className="text-blue-700 font-semibold mt-2 text-xl">Minggu Tutup</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default CaraPesan;
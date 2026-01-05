import { MapPin, Phone, Mail, Clock } from 'lucide-react';

function Kontak() {
    return (
        <div className="min-h-screen bg-white pt-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="mb-12">
                    <h1 className="text-5xl md:text-6xl font-bold text-blue-700 mb-6">RTMFOODTECH</h1>
                    <div className="space-y-4 text-gray-700 text-xl md:text-2xl leading-relaxed">
                        <p>
                            Hubungi kami untuk informasi lebih lanjut mengenai produk mesin pemrosesan makanan berkualitas tinggi.
                        </p>
                    </div>
                </div>

                <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
                    <div className="space-y-8">
                        <div className="flex gap-4">
                            <div className="shrink-0">
                                <MapPin className="w-7 h-7 text-blue-700" />
                            </div>
                            <div>
                                <h3 className="font-semibold text-gray-900 mb-2 text-2xl">Alamat</h3>
                                <p className="text-gray-800 leading-relaxed text-xl">
                                    Jl. Blabak - Mendut No.KM.01, RT.04/RW.02, Panjangan, Mungkid, Kec. Mungkid, Kabupaten Magelang, Jawa Tengah 56512
                                </p>
                            </div>
                        </div>

                        <div className="space-y-4">
                            <h3 className="font-semibold text-gray-900 text-2xl">Kontak Kami</h3>
                            <div className="space-y-3">
                                <div className="flex gap-4 items-start">
                                    <div className="shrink-0">
                                        <Phone className="w-7 h-7 text-blue-700" />
                                    </div>
                                    <div>
                                        <p className="text-gray-800 font-medium text-xl">Pemesanan</p>
                                        <a href="tel:+6281328133337" className="text-blue-700 hover:text-blue-800 text-2xl font-semibold">
                                            +62 813-2813-3337 (telepon)
                                        </a>
                                        <p className="text-xl text-gray-600 mt-1">*Mohon untuk menghubungi via telepon, bukan WhatsApp call</p>
                                    </div>
                                </div>
                                <div className="flex gap-4 items-start">
                                    <div className="shrink-0">
                                        <Phone className="w-7 h-7 text-blue-700" />
                                    </div>
                                    <div>
                                        <p className="text-gray-800 font-medium text-xl">Pembayaran</p>
                                        <a href="https://wa.me/6287887133337" target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:text-blue-700 text-2xl font-semibold">
                                            +62 878-8713-3337 (WA)
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-700">
                            <div className="flex gap-4 mb-4">
                                <Clock className="w-7 h-7 text-blue-700 shrink-0" />
                                <h3 className="text-2xl font-semibold text-gray-900">Jam Operasional</h3>
                            </div>
                            <div className="ml-10 space-y-2 text-gray-800">
                                <p className="text-xl">Senin - Sabtu (08.00 - 16.30 WIB)</p>
                                <p className="font-semibold text-red-600 text-xl">Minggu tutup</p>
                            </div>
                        </div>
                    </div>

                    <div className="space-y-4">
                        <div className="bg-gray-100 rounded-lg overflow-hidden shadow-md h-100 md:h-125">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126564.38524135416!2d110.11843876249996!3d-7.560033700000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a8be3a74263c7%3A0x1c83790f0f01b38d!2sRTM%20FOODTECH!5e0!3m2!1sen!2sid!4v1767234578741!5m2!1sen!2sid"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                title="Lokasi RTMFOODTECH"
                            ></iframe>
                        </div>
                        <button
                            onClick={() => window.open("https://maps.app.goo.gl/o3sCr3YmSxcBGox19", "_blank")}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block bg-blue-700 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition-colors font-semibold text-xl"
                        >
                            Lihat di Google Maps
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Kontak;
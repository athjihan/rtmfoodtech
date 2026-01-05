import { Info } from 'lucide-react';
import company from '../assets/company.png';

function Loker() {
    return (
        <div className="relative w-full min-h-screen overflow-hidden">
            <img
                src={company}
                alt="bg company"
                className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/70" />

            <div className="relative z-10 min-h-screen flex flex-col items-center justify-center p-6 text-white">
                <h1 className="text-4xl font-bold mb-6 text-center">Lowongan Kerja di RTMFOODTECH</h1>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-4xl text-center sm:text-left">
                    <Info className="w-12 h-12 text-yellow-400" />
                    <p className="text-2xl">
                        Tidak ada lowongan kerja tersedia saat ini. Silakan kunjungi kembali nanti untuk informasi terbaru.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Loker;
import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import { products, categories } from '../data/products.json';
import { X } from 'lucide-react';

function Katalog() {
    const [searchParams, setSearchParams] = useSearchParams();
    const [searchQuery, setSearchQuery] = useState('');

    const categoryFromURL = searchParams.get('category');
    const [selectedCategory, setSelectedCategory] = useState(
        categoryFromURL && categories.includes(categoryFromURL) ? categoryFromURL : 'Semua'
    );

    const handleCategoryChange = (category) => {
        if (selectedCategory === category && category !== 'Semua') {
            setSelectedCategory('Semua');
            setSearchParams({});
        } else {
            setSelectedCategory(category);
            if (category !== 'Semua') {
                setSearchParams({ category });
            } else {
                setSearchParams({});
            }
        }
    };

    const filteredProducts = products.filter(product => {
        const matchCategory = selectedCategory === 'Semua' || product.category === selectedCategory;
        const matchSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            product.description.toLowerCase().includes(searchQuery.toLowerCase());
        return matchCategory && matchSearch;
    });

    return (
        <div className="min-h-screen bg-gray-50 py-12 mt-20">
            <div className="container mx-auto px-4">
                {/* Header */}
                <div className="text-center mb-8">
                    <h1 className="text-4xl font-bold text-gray-800 mb-4">Katalog Mesin</h1>
                    <p className="text-gray-600 max-w-4xl mx-auto text-xl">
                        Jelajahi koleksi mesin berkualitas tinggi untuk berbagai kebutuhan produksi Anda
                    </p>
                </div>

                {/* Search Bar */}
                <div className="mb-8 max-w-2xl mx-auto relative">
                    <input
                        type="text"
                        placeholder="Cari mesin..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="w-full text-black text-xl px-6 py-3 pr-12 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                    />
                    {searchQuery && (
                        <button
                            onClick={() => setSearchQuery('')}
                            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 p-1"
                            aria-label="Clear search"
                        >
                            <X className="w-5 h-5" />
                        </button>
                    )}
                </div>

                {/* Category Filter */}
                <div className="mb-10 flex flex-wrap justify-center gap-3">
                    {categories.map(category => (
                        <button
                            key={category}
                            onClick={() => handleCategoryChange(category)}
                            className={`px-6 py-2 rounded-full font-semibold transition-all duration-200 focus:outline-none focus:ring-0 ${selectedCategory === category
                                ? 'bg-blue-700 text-white shadow-lg scale-105'
                                : 'bg-white text-gray-700 hover:bg-gray-100 shadow'
                                }`}
                        >
                            {category}
                        </button>
                    ))}
                </div>

                {/* Product Count */}
                <div className="mb-6 text-center text-gray-600">
                    Menampilkan {filteredProducts.length} produk
                </div>

                {/* Products Grid */}
                {filteredProducts.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {filteredProducts.map(product => (
                            <ProductCard key={product.id} product={product} />
                        ))}
                    </div>
                ) : (
                    <div className="text-center py-20">
                        <p className="text-gray-500 text-lg">Tidak ada produk ditemukan</p>
                    </div>
                )}

                {/* Call to Action - Tokopedia */}
                <div className="mt-16 bg-amber-400 rounded-2xl shadow-xl p-8 md:p-12 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
                        Lihat Katalog Lengkap Kami
                    </h2>
                    <p className="text-black text-xl mb-8 max-w-4xl mx-auto">
                        Temukan lebih banyak produk dan penawaran menarik di toko resmi kami di Tokopedia
                    </p>
                    <a
                        href="https://www.tokopedia.com/rtmfoodtech"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-3 bg-white text-black px-8 py-4 rounded-lg font-bold text-lg hover:bg-green-50 transition-all duration-200 shadow-lg hover:shadow-xl hover:scale-105"
                    >
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                        </svg>
                        Kunjungi Toko Tokopedia Kami
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Katalog;
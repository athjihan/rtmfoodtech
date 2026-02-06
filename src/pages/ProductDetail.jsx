import { useParams, useNavigate } from 'react-router-dom';
import { products, formatPrice } from '../data/products';

function ProductDetail() {
    const { id } = useParams();
    const navigate = useNavigate();
    const product = products.find(p => p.id === parseInt(id));

    if (!product) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-center">
                    <h2 className="text-2xl font-bold text-gray-800 mb-4">Produk tidak ditemukan</h2>
                    <button
                        onClick={() => navigate('/katalog')}
                        className="bg-black hover:bg-amber-600 text-white px-6 py-2 rounded-lg"
                    >
                        Kembali ke Katalog
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-50 py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Breadcrumb */}
                <nav className="mb-8">
                    <ol className="flex items-center space-x-2 text-sm">
                        <li>
                            <button onClick={() => navigate('/')} className="text-black hover:text-amber-600">
                                Home
                            </button>
                        </li>
                        <li className="text-gray-400">/</li>
                        <li>
                            <button onClick={() => navigate('/katalog')} className="text-black hover:text-amber-600">
                                Katalog
                            </button>
                        </li>
                        <li className="text-gray-400">/</li>
                        <li className="text-gray-600">{product.name}</li>
                    </ol>
                </nav>

                {/* Product Detail */}
                <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                    <div className="grid md:grid-cols-2 gap-8 p-8">
                        {/* Image Section */}
                        <div className="space-y-4">
                            <div className="relative aspect-square overflow-hidden rounded-lg bg-gray-100">
                                <img
                                    src={product.image}
                                    alt={product.name}
                                    className="w-full h-full object-cover"
                                />
                                {product.inStock ? (
                                    <span className="absolute top-4 right-4 bg-green-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                                        Tersedia
                                    </span>
                                ) : (
                                    <span className="absolute top-4 right-4 bg-red-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                                        Pre-Order
                                    </span>
                                )}
                            </div>
                        </div>

                        {/* Info Section */}
                        <div className="space-y-6">
                            <div>
                                <span className="inline-block bg-amber-100 text-black px-3 py-1 rounded-full text-sm font-medium mb-3">
                                    {product.category}
                                </span>
                                <h1 className="text-3xl font-bold text-gray-900 mb-4">
                                    {product.name}
                                </h1>
                                <p className="text-gray-600 leading-relaxed text-lg">
                                    {product.description}
                                </p>
                            </div>

                            {/* Price */}
                            <div className="border-t border-b">
                                <p className="text-4xl font-bold text-black">
                                    {formatPrice(product.price)}
                                </p>
                            </div>

                            {/* Specifications */}
                            <div>
                                <h2 className="text-xl font-bold text-gray-900 mb-4">Spesifikasi Lengkap</h2>
                                <ul className="space-y-3">
                                    {product.specifications.map((spec, index) => (
                                        <li key={index} className="flex items-start">
                                            <span className="text-amber-600 mr-3 mt-1 text-lg">✓</span>
                                            <span className="text-gray-700 text-lg">{spec}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Action Buttons */}
                            <div className="flex gap-4 pt-6">
                                <button
                                    onClick={() => navigate('/kontak')}
                                    className="flex-1  bg-amber-400 text-black px-8 py-4 rounded-lg font-semibold transition-colors duration-200"
                                >
                                    Hubungi Kami
                                </button>
                                <button
                                    onClick={() => navigate('/cara-pesan')}
                                    className="flex-1  bg-black hover:bg-amber-600 text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200"
                                >
                                    Cara Pesan
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProductDetail;

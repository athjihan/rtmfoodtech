import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import { formatPrice } from '../data/products';

function ProductCard({ product }) {
    const navigate = useNavigate();

    return (
        <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 flex flex-col h-full">
            {/* Image Container */}
            <div className="relative h-64 overflow-hidden bg-gray-100">
                <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
                {product.inStock ? (
                    <span className="absolute top-3 right-3 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                        Tersedia
                    </span>
                ) : (
                    <span className="absolute top-3 right-3 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                        Pre-Order
                    </span>
                )}
                <span className="absolute top-3 left-3 bg-amber-400-500 text-white px-3 py-1 rounded-full text-sm">
                    {product.category}
                </span>
            </div>

            {/* Content */}
            <div className="p-5 flex flex-col grow">
                <h3 className="text-xl font-bold text-gray-800 mb-2">{product.name}</h3>

                <p className="text-gray-600 text-lg mb-4 line-clamp-2">
                    {product.description}
                </p>

                {/* Specifications */}
                <div className="mb-4">
                    <h4 className="text-lg font-semibold text-gray-700 mb-2">Spesifikasi:</h4>
                    <ul className="text-lg text-gray-600 space-y-1">
                        {product.specifications.slice(0, 2).map((spec, index) => (
                            <li key={index} className="flex items-start">
                                <span className="text-amber-500 mr-2">•</span>
                                {spec}
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Price and Button*/}
                <div className="border-t mt-auto pt-4 flex items-center justify-between">
                    <div>
                        <p className="text-2xl font-bold text-black">
                            {formatPrice(product.price)}
                        </p>
                    </div>

                    <button
                        onClick={() => navigate(`/produk/${product.id}`)}
                        className="bg-black hover:bg-amber-600 text-white px-6 py-2 rounded-lg font-semibold transition-colors duration-200"
                    >
                        Detail
                    </button>
                </div>
            </div>
        </div>
    );
}

ProductCard.propTypes = {
    product: PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        category: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        image: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        specifications: PropTypes.arrayOf(PropTypes.string).isRequired,
        inStock: PropTypes.bool.isRequired
    }).isRequired
};

export default ProductCard;

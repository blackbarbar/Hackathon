import LimeProduct from "./products/lime";
import PeachProduct from "./products/peach";

const Products = () => {
    return (
        <div className="products">
            <LimeProduct />
            <div className="h-[30rem] bg-white flex items-center justify-center text-center px-8">
                <div className="max-w-4xl">
                    <h2 className="text-5xl font-extrabold text-gray-900 mb-6">
                        Quality Ingredients. Iconic Taste.
                    </h2>
                    <p className="text-2xl text-gray-600 leading-relaxed">
                        At Neo, we blend 100% natural sources with cutting-edge formulation. The result? Clean energy, no compromise on taste, and a refreshment you can trust – every single time.
                    </p>
                </div>
            </div>
            <PeachProduct />
        </div>
    );
};

export default Products;
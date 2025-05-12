import { Image } from "@heroui/image";

const Testimonials = () => {
    return (
        <section className="bg-gray-50 py-24 px-6">
            <div className="max-w-7xl mx-auto text-center">
                <h2 className="text-5xl font-extrabold text-gray-900 mb-12">
                    What Our Customers Say
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                    <div className="bg-white p-8 rounded-3xl shadow-md flex flex-col items-center text-center">
                        <Image
                            src="/testimonials/first.jpg"
                            alt="Customer 1"
                            className="w-20 h-20 rounded-full mb-4 object-cover"
                        />
                        <h3 className="text-xl font-semibold">Daniel F.</h3>
                        <p className="mt-3 text-gray-600">
                            “I drink Neo every morning — clean boost, no crash. And the lime flavor is absolutely 🔥.”
                        </p>
                    </div>

                    <div className="bg-white p-8 rounded-3xl shadow-md flex flex-col items-center text-center">
                        <Image
                            src="/testimonials/second.jpg"
                            alt="Customer 2"
                            className="w-20 h-20 rounded-full mb-4 object-cover"
                        />
                        <h3 className="text-xl font-semibold">Sophie M.</h3>
                        <p className="mt-3 text-gray-600">
                            “Finally an energy drink that doesn’t taste artificial. Neo is smooth, tasty and feels good.”
                        </p>
                    </div>

                    <div className="bg-white p-8 rounded-3xl shadow-md flex flex-col items-center text-center">
                        <Image
                            src="/testimonials/third.jpg"
                            alt="Customer 3"
                            className="w-20 h-20 rounded-full mb-4 object-cover"
                        />
                        <h3 className="text-xl font-semibold">Elena R.</h3>
                        <p className="mt-3 text-gray-600">
                            “I swapped coffee for Neo and I’m not going back. Instant focus, no jitters.”
                        </p>
                    </div>
                </div>
            </div>
        </section>

    );
};

export default Testimonials;
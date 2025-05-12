import { Button } from "@heroui/button";
import { Link } from "@heroui/link";

const CTABanner = () => {
    return (
        <section className="relative py-32 pt-56 px-6 text-center overflow-hidden">
            <div className="relative z-10 max-w-4xl mx-auto">
                <h2 className="text-5xl sm:text-6xl font-extrabold tracking-tight">
                    Ready to feel the difference?
                </h2>
                <p className="text-xl mt-6 text-black/90">
                    Clean energy. No crash. 100% focus. Join the movement now.
                </p>
                <div className="mt-10 flex gap-12 justify-center">
                    <Button
                        size="lg"
                        className="text-lg px-10 py-6 bg-gradient-to-r from-lime-400 to-green-500 text-black font-bold rounded-xl shadow-xl"
                        as={Link}
                        href="#lime"
                    >
                        Try Lime Now
                    </Button>
                    <Button
                        size="lg"
                        className="text-lg px-10 py-6 bg-gradient-to-r from-orange-300 to-pink-400 text-white font-bold rounded-xl shadow-xl"
                        as={Link}
                        href="#peach"
                    >
                        Try Peach Now
                    </Button>
                </div>
            </div>
        </section>
    );
};

export default CTABanner;

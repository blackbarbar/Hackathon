import { Button } from "@heroui/button";

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
                <div className="mt-10">
                    <Button
                        size="lg"
                        className="text-lg px-10 py-6 bg-black text-white font-bold rounded-xl shadow-xl"
                    >
                        Try NEO Now
                    </Button>
                </div>
            </div>
        </section>
    );
};

export default CTABanner;

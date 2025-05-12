import { Image } from "@heroui/image";
import { Button } from "@heroui/button";
import { Icon } from "@iconify/react";
import { Link } from "@heroui/link";

const PeachProduct = () => {
    return (
        <section id="peach" className="relative flex items-center h-[110dvh] bg-gradient-to-r from-orange-300 to-pink-400">
            <div className="absolute top-20 left-1/2 -translate-x-1/2">
                <Button
                    size="lg"
                    className="text-lg px-10 py-6 bg-gradient-to-r from-lime-400 to-green-500 text-black font-bold rounded-xl shadow-xl"
                    as={Link}
                    href="#lime"
                    startContent={
                        <Icon icon="mingcute:arrow-up-fill" height={30} className="text-black" />
                    }
                >
                    Explore Lime Energy
                </Button>
            </div>
            <div className="flex container mx-auto max-w-[130rem] items-center gap-48 justify-center px-8">
                <div className="text-white max-w-xl">
                    <h2 className="text-6xl font-extrabold mb-6 leading-tight">Neo Peach Energy</h2>
                    <p className="text-2xl mb-8 leading-relaxed">
                        Juicy, smooth, and powerful. Neo Peach delivers sweet energy from natural sources – no sugar, just pure performance.
                    </p>
                    <ul className="space-y-4 mb-10">
                        <li className="flex items-center gap-3">
                            <Icon icon="lets-icons:check-fill" height={30} />
                            <span className="text-xl font-semibold">Natural Peach Extract</span>
                        </li>
                        <li className="flex items-center gap-3">
                            <Icon icon="lets-icons:check-fill" height={30} />
                            <span className="text-xl font-semibold">0g Sugar – Naturally Sweet</span>
                        </li>
                        <li className="flex items-center gap-3">
                            <Icon icon="lets-icons:check-fill" height={30} />
                            <span className="text-xl font-semibold">Award-Winning Taste (ITI 2025)</span>
                        </li>
                        <li className="flex items-center gap-3">
                            <Icon icon="lets-icons:check-fill" height={30} />
                            <span className="text-xl font-semibold">Perfect for Focus & Calm Energy</span>
                        </li>
                    </ul>
                    <Button size="lg" className="text-lg px-10 py-6 bg-white text-orange-600 font-bold">
                        Pre Order Now
                    </Button>
                </div>
                <Image
                    isZoomed
                    src="/peach.jpg"
                    className="max-w-[40rem] drop-shadow-2xl rounded-2xl"
                    alt="Neo Peach Energy Drink"
                />
            </div>
        </section>
    );
};

export default PeachProduct;

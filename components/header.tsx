import { Image } from "@heroui/image";
import { Button } from "@heroui/button";
import { Icon } from "@iconify/react";
import { Link } from "@heroui/link";

const Header = () => {
    return (
        <header className="bg-gradient-to-br from-green-100 via-white to-green-50">
            <div className="container mx-auto max-w-[130rem] min-h-[100dvh] flex items-center justify-between px-8 py-24">
                <div className="max-w-3xl">
                    <h1 className="text-7xl md:text-8xl font-extrabold bg-gradient-to-r from-lime-500 to-green-500 text-transparent bg-clip-text leading-tight py-2">
                        NEO – Energy <br />correct,<br />Energy now!
                    </h1>
                    <h2 className="mt-10 text-3xl md:text-4xl font-semibold text-gray-800 italic">
                        "The best energy drink in the world." – ITI, 2025
                    </h2>
                    <div className="mt-12 space-y-4">
                        <div className="flex items-center gap-3">
                            <Icon icon="lets-icons:check-fill" height={32} className="text-green-500" />
                            <span className="text-xl font-medium text-gray-800">100% Natural Ingredients</span>
                        </div>
                        <div className="flex items-center gap-3">
                            <Icon icon="lets-icons:check-fill" height={32} className="text-green-500" />
                            <span className="text-xl font-medium text-gray-800">0g Sugar – Pure Energy</span>
                        </div>
                        <div className="flex items-center gap-3">
                            <Icon icon="lets-icons:check-fill" height={32} className="text-green-500" />
                            <span className="text-xl font-medium text-gray-800">Enriched with B-Vitamins</span>
                        </div>
                        <div className="flex items-center gap-3">
                            <Icon icon="lets-icons:check-fill" height={32} className="text-green-500" />
                            <span className="text-xl font-medium text-gray-800">Boosts Focus & Performance</span>
                        </div>
                    </div>
                    <Button
                        size="lg"
                        className="mt-16 text-lg font-bold px-10 py-6 bg-gradient-to-r from-lime-500 to-green-500 text-white rounded-xl shadow-lg"
                        as={Link}
                        href="#lime"
                    >
                        Explore Our Collection
                    </Button>
                </div>
                <div className="hidden md:block">
                    <Image
                        src="/header_can.jpg"
                        className="max-w-[48rem] drop-shadow-2xl rounded-3xl"
                        alt="Neo Energy Can"
                    />
                </div>
            </div>
        </header>
    );
};

export default Header;

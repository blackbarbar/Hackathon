import { Image } from "@heroui/image";
import { Button } from "@heroui/button";
import { Icon } from "@iconify/react";
import { Link } from "@heroui/link";

const Header = () => {
    return (
        <header id="welcome" className="bg-gradient-to-br from-green-100 via-white to-green-50">
            <div className="container mx-auto max-w-[130rem] md:min-h-screen flex flex-col-reverse md:flex-row px-6 md:px-8 py-32 md:py-24 md:pt-80 gap-12 md:gap-0">
                <div className="w-full md:w-1/2 max-w-3xl">
                    <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold bg-gradient-to-r from-lime-500 to-green-500 text-transparent bg-clip-text leading-tight py-2">
                        NEO – Energy <br />correct,<br />Energy now!
                    </h1>
                    <h2 className="mt-8 text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-800 italic">
                        "The best energy drink in the world." – ITI, 2025
                    </h2>
                    <div className="mt-10 space-y-4">
                        <div className="flex items-center gap-3">
                            <Icon icon="lets-icons:check-fill" height={28} className="text-green-500" />
                            <span className="text-lg sm:text-xl font-medium text-gray-800">100% Natural Ingredients</span>
                        </div>
                        <div className="flex items-center gap-3">
                            <Icon icon="lets-icons:check-fill" height={28} className="text-green-500" />
                            <span className="text-lg sm:text-xl font-medium text-gray-800">0g Sugar – Pure Energy</span>
                        </div>
                        <div className="flex items-center gap-3">
                            <Icon icon="lets-icons:check-fill" height={28} className="text-green-500" />
                            <span className="text-lg sm:text-xl font-medium text-gray-800">Enriched with B-Vitamins</span>
                        </div>
                        <div className="flex items-center gap-3">
                            <Icon icon="lets-icons:check-fill" height={28} className="text-green-500" />
                            <span className="text-lg sm:text-xl font-medium text-gray-800">Boosts Focus & Performance</span>
                        </div>
                    </div>
                    <Button
                        size="lg"
                        className="mt-12 text-base sm:text-lg font-bold px-8 sm:px-10 py-4 sm:py-6 bg-gradient-to-r from-lime-500 to-green-500 text-white rounded-xl shadow-lg"
                        as={Link}
                        href="#lime"
                    >
                        Explore Our Collection
                    </Button>
                </div>
                <div className="w-full 2xl:w-1/2 hidden 2xl:flex justify-center">
                    <Image
                        src="/header_can.jpg"
                        className="max-w-[36rem] lg:max-w-[48rem] drop-shadow-2xl rounded-3xl"
                        alt="Neo Energy Can"
                    />
                </div>
            </div>
        </header>
    );
};

export default Header;

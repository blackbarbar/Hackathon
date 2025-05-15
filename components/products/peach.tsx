import { Image } from "@heroui/image";
import { Button } from "@heroui/button";
import { Icon } from "@iconify/react";

const PeachProduct = () => {
	return (
		<section
			id="peach"
			className="flex items-center min-h-screen bg-gradient-to-r from-orange-300 to-pink-400 z-10 py-20"
		>
			<div className="flex flex-wrap container mx-auto max-w-[130rem] items-center justify-center gap-20 px-6 lg:px-8">
				<div className="text-white max-w-xl text-center lg:text-left">
					<h2 className="text-5xl sm:text-6xl font-extrabold mb-6 leading-tight">
						Neo Peach Energy
					</h2>
					<p className="text-xl sm:text-2xl mb-8 leading-relaxed">
						Juicy, smooth, and powerful. Neo Peach delivers sweet energy from
						natural sources – no sugar, just pure performance.
					</p>
					<ul className="space-y-4 mb-10">
						<li className="flex items-center gap-3 justify-center lg:justify-start">
							<Icon icon="lets-icons:check-fill" height={30} />
							<span className="text-lg sm:text-xl font-semibold">
								Natural Peach Extract
							</span>
						</li>
						<li className="flex items-center gap-3 justify-center lg:justify-start">
							<Icon icon="lets-icons:check-fill" height={30} />
							<span className="text-lg sm:text-xl font-semibold">
								0g Sugar – Naturally Sweet
							</span>
						</li>
						<li className="flex items-center gap-3 justify-center lg:justify-start">
							<Icon icon="lets-icons:check-fill" height={30} />
							<span className="text-lg sm:text-xl font-semibold">
								Award-Winning Taste (ITI 2025)
							</span>
						</li>
						<li className="flex items-center gap-3 justify-center lg:justify-start">
							<Icon icon="lets-icons:check-fill" height={30} />
							<span className="text-lg sm:text-xl font-semibold">
								Perfect for Focus & Calm Energy
							</span>
						</li>
					</ul>
					<Button
						size="lg"
						className="text-lg px-10 py-6 bg-white text-orange-600 font-bold"
					>
						Pre Order Now
					</Button>
				</div>
				<Image
					isZoomed
					src="/peach.jpg"
					className="max-h-[40%] mx-auto sm:max-h-[36rem] lg:max-h-[40rem] drop-shadow-2xl rounded-2xl"
					alt="Neo Peach Energy Drink"
				/>
			</div>
		</section>
	);
};

export default PeachProduct;

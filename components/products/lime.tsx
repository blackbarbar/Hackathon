import { Image } from "@heroui/image";
import { Button } from "@heroui/button";
import { Icon } from "@iconify/react";

const LimeProduct = () => {
	return (
		<section
			id="lime"
			className="flex items-center min-h-screen bg-gradient-to-r from-lime-400 to-green-500 z-10 py-20"
		>
			<div className="flex flex-wrap container mx-auto max-w-[130rem] items-center justify-center gap-20 px-6 lg:px-8">
				<Image
					isZoomed
					src="/lime.jpg"
					className="max-h-[40%] mx-auto sm:max-h-[36rem] lg:max-h-[40rem] drop-shadow-2xl rounded-2xl"
					alt="Neo Lime Energy Drink"
				/>
				<div className="max-w-xl text-center lg:text-left">
					<h2 className="text-5xl sm:text-6xl font-extrabold mb-6 leading-tight">
						Neo Lime Energy
					</h2>
					<p className="text-xl sm:text-2xl mb-8 leading-relaxed">
						Pure tropical power. Experience the unbeatable taste of lime,
						boosted with 100% natural energy – no sugar, no crash.
					</p>
					<ul className="space-y-4 mb-10">
						<li className="flex items-center gap-3 justify-center lg:justify-start">
							<Icon icon="lets-icons:check-fill" height={30} />
							<span className="text-lg sm:text-xl font-semibold">
								100% Natural Ingredients
							</span>
						</li>
						<li className="flex items-center gap-3 justify-center lg:justify-start">
							<Icon icon="lets-icons:check-fill" height={30} />
							<span className="text-lg sm:text-xl font-semibold">
								No Sugar, No Crash
							</span>
						</li>
						<li className="flex items-center gap-3 justify-center lg:justify-start">
							<Icon icon="lets-icons:check-fill" height={30} />
							<span className="text-lg sm:text-xl font-semibold">
								Awarded by ITI Brussels
							</span>
						</li>
						<li className="flex items-center gap-3 justify-center lg:justify-start">
							<Icon icon="lets-icons:check-fill" height={30} />
							<span className="text-lg sm:text-xl font-semibold">
								Vegan & Climate-Friendly
							</span>
						</li>
					</ul>
					<Button
						size="lg"
						className="text-lg px-10 py-6 bg-white text-green-600 font-bold"
					>
						Pre Order Now
					</Button>
				</div>
			</div>
		</section>
	);
};

export default LimeProduct;

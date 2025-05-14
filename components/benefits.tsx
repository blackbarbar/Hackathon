"use client";

import { Icon } from "@iconify/react";
import { Card } from "@heroui/card";
import { Button } from "@heroui/button";
import { useEffect } from "react";

const Benefits = () => {
    useEffect(() => {
        const items = document.querySelectorAll(".timeline-item");
        const onScroll = () => {
            items.forEach((item) => {
                const rect = item.getBoundingClientRect();
                if (rect.top < window.innerHeight * 0.9 && rect.bottom > 0) {
                    item.classList.add("in-view");
                } else {
                    item.classList.remove("in-view");
                }
            });
        };
        window.addEventListener("scroll", onScroll);
        onScroll();
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    const benefits = [
        {
            icon: "mdi:flash",
            title: "Instant Energy Surge",
            description:
                "Feel the rush within minutes – a clean, focused power boost that keeps you sharp, not shaky.",
        },
        {
            icon: "mdi:sugar-off",
            title: "0g Sugar – Pure Fuel",
            description:
                "No crash, no compromise. Neo delivers clean energy with zero sugar and no artificial nonsense.",
        },
        {
            icon: "mdi:leaf",
            title: "Sustainable Energy",
            description:
                "Natural caffeine and adaptogens provide steady energy without the jitters or burnout.",
        },
        {
            icon: "mdi:brain",
            title: "Enhanced Performance",
            description:
                "Unlock sharper thinking and physical drive – the perfect fuel for high-performers.",
        },
    ];

    return (
        <section id="features" className="relative bg-gradient-to-br from-indigo-600 via-purple-700 to-pink-600 py-24 sm:py-28 md:py-32 px-4 sm:px-6 md:px-10 overflow-hidden">
            <div className="max-w-3xl mx-auto text-center text-white mb-20 sm:mb-24 px-4">
                <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight tracking-tight">
                    The Neo Energy Difference
                </h2>
                <p className="text-lg sm:text-xl mt-4 opacity-90">
                    A new kind of power – clean, focused, unstoppable.
                </p>
            </div>

            <div className="text-center z-10 text-white text-xs sm:text-sm font-semibold tracking-wide">
                NEO - Since January, 2025
            </div>

            <div className="pointer-events-none absolute left-1/2 top-[27rem] h-[calc(100%-39rem)] w-[0.25rem] bg-white/5 -translate-x-1/2 z-20" />

            <div className="relative mt-[7rem] z-10 flex flex-col gap-20 sm:gap-24 max-w-xl sm:max-w-2xl mx-auto">
                {benefits.map((benefit, index) => (
                    <div
                        key={index}
                        className="timeline-item opacity-0 translate-y-10 transition-all duration-700 ease-out px-2 sm:px-8"
                    >
                        <div className="relative flex flex-col md:block items-center">
                            <div className="relative z-20 mb-4 md:mb-0 md:absolute md:-left-[3.5rem] md:top-1/2 md:transform md:-translate-y-1/2 bg-white/20 backdrop-blur-md p-3 md:p-4 rounded-full shadow-lg border border-white/30">
                                <Icon icon={benefit.icon} className="text-white" height={28} />
                            </div>
                            <Card className="relative bg-white/20 backdrop-blur-md border border-white/20 shadow-2xl p-6 sm:p-10 rounded-3xl text-white transition-colors duration-700 w-full text-center sm:text-left">
                                <h3 className="text-xl sm:text-2xl font-bold mb-3">{benefit.title}</h3>
                                <p className="text-base sm:text-lg opacity-90">{benefit.description}</p>
                            </Card>
                        </div>

                    </div>
                ))}
            </div>

            <div className="text-center mt-24 sm:mt-28 px-4">
                <Button
                    size="lg"
                    className="text-lg px-8 sm:px-10 py-5 sm:py-6 bg-white text-indigo-700 font-bold rounded-xl shadow-xl"
                >
                    Try Neo Now – Feel the Power
                </Button>
            </div>
        </section>
    );
};

export default Benefits;

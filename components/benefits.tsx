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
        <section id="features" className="relative bg-gradient-to-br from-indigo-600 via-purple-700 to-pink-600 py-32 px-6 overflow-hidden">
            <div className="max-w-3xl mx-auto text-center text-white mb-24">
                <h2 className="text-6xl font-extrabold leading-tight tracking-tight">The Neo Energy Difference</h2>
                <p className="text-xl mt-4 opacity-90">A new kind of power – clean, focused, unstoppable.</p>
            </div>

            {/* Start Label */}
            <div className="absolute left-1/2 top-[19rem] transform -translate-x-1/2 -translate-y-full z-10 text-white text-sm font-semibold tracking-wide">
                NEO - Since January, 2025
            </div>

            {/* Timeline Line – ÜBER den Cards */}
            <div className="pointer-events-none absolute left-1/2 top-[20rem] h-[calc(100%-32rem)] w-[0.25rem] bg-white/20 -translate-x-1/2 z-20" />



            {/* Timeline Items */}
            <div className="relative z-10 flex flex-col gap-24 max-w-2xl mx-auto">
                {benefits.map((benefit, index) => (
                    <div
                        key={index}
                        className="timeline-item opacity-0 translate-y-10 transition-all duration-700 ease-out"
                    >
                        <div className="relative px-8">
                            <div className="absolute -left-[3.5rem] top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-md p-4 rounded-full shadow-lg border border-white/30">
                                <Icon icon={benefit.icon} className="text-white" height={28} />
                            </div>
                            <Card className="relative bg-white/10 backdrop-blur-md border border-white/20 shadow-2xl p-10 rounded-3xl text-white transition-colors duration-700">
                                <h3 className="text-2xl font-bold mb-3">{benefit.title}</h3>
                                <p className="text-lg opacity-90">{benefit.description}</p>
                            </Card>
                        </div>
                    </div>
                ))}
            </div>

            <div className="text-center mt-28">
                <Button
                    size="lg"
                    className="text-lg px-10 py-6 bg-white text-indigo-700 font-bold rounded-xl shadow-xl"
                >
                    Try Neo Now – Feel the Power
                </Button>
            </div>
        </section>
    );
};

export default Benefits;

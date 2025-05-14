"use client";

import { Accordion, AccordionItem } from "@heroui/accordion";

const FAQ = () => {
    return (
        <section id="faq" className="bg-white py-32 px-6">
            <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-5xl font-extrabold mb-12 text-gray-900">
                    Frequently Asked Questions
                </h2>
                <Accordion variant="shadow" className="text-left" selectionMode="multiple">
                    <AccordionItem
                        key="1"
                        aria-label="What makes NEO different from other energy drinks?"
                        title="What makes NEO different from other energy drinks?"
                    >
                        NEO uses only 100% natural ingredients with no added sugar, artificial flavors, or synthetic stimulants. It’s energy done right — clean, effective, and crash-free.
                    </AccordionItem>
                    <AccordionItem
                        key="2"
                        aria-label="Is NEO suitable for athletes or active lifestyles?"
                        title="Is NEO suitable for athletes or active lifestyles?"
                    >
                        Absolutely. NEO is packed with B-vitamins and adaptogens to support both mental focus and physical performance. It’s a perfect fit for active people who demand more from their energy source.
                    </AccordionItem>
                    <AccordionItem
                        key="3"
                        aria-label="Does NEO contain any sugar or artificial sweeteners?"
                        title="Does NEO contain any sugar or artificial sweeteners?"
                    >
                        No. NEO is completely sugar-free and uses only natural sweetness derived from fruit extracts. No sucralose, aspartame, or other artificial stuff.
                    </AccordionItem>
                    <AccordionItem
                        key="4"
                        aria-label="Where is NEO manufactured?"
                        title="Where is NEO manufactured?"
                    >
                        NEO is proudly made in Germany under strict quality standards. Every can is crafted with precision and care to deliver uncompromising performance.
                    </AccordionItem>
                    <AccordionItem
                        key="5"
                        aria-label="When will my pre-order ship?"
                        title="When will my pre-order ship?"
                    >
                        Pre-orders are expected to ship in early Q3 2025. You’ll receive a tracking number as soon as your order is dispatched.
                    </AccordionItem>
                </Accordion>
            </div>
        </section>
    );
};

export default FAQ;

"use client";

import { Button } from "@heroui/button";
import { Form } from "@heroui/form";
import { Input } from "@heroui/input";
import { Icon } from "@iconify/react";

const Footer = () => {
    return (
        <footer id="contact" className="bg-white border-t border-gray-200 px-6 py-10">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 text-gray-700">
                {/* Branding & Newsletter */}
                <div className="md:col-span-2">
                    <h3 className="text-xl font-bold mb-4 text-gray-900">Stay in the Loop</h3>
                    <p className="mb-4 text-gray-600">
                        Sign up for energy insights, early access, and exclusive offers.
                    </p>
                    <Form className="w-full flex flex-row flex-wrap items-start gap-4 justify-center xl:justify-start" validationBehavior="native" onSubmit={(e) => e.preventDefault()}>
                        <Input
                            required
                            type="email"
                            placeholder="you@example.com"
                            className="max-w-sm"
                            errorMessage="Please enter a valid email address."
                        />
                        <Button
                            type="submit"
                            className="bg-gradient-to-r from-lime-500 to-green-500 text-white font-semibold"
                        >
                            Subscribe
                        </Button>
                    </Form>
                </div>

                {/* Navigation */}
                <div>
                    <h4 className="text-lg font-semibold mb-4 text-gray-900">Explore</h4>
                    <ul className="space-y-2 text-sm">
                        <li><a href="#lime" className="hover:text-green-600 transition">Lime Energy</a></li>
                        <li><a href="#peach" className="hover:text-green-600 transition">Peach Energy</a></li>
                        <li><a href="#reviews" className="hover:text-green-600 transition">Reviews</a></li>
                        <li><a href="#features" className="hover:text-green-600 transition">Features</a></li>
                        <li><a href="#faq" className="hover:text-green-600 transition">FAQ</a></li>
                    </ul>
                </div>

                {/* Contact & Socials */}
                <div>
                    <h4 className="text-lg font-semibold mb-4 text-gray-900">Contact</h4>
                    <p className="text-sm mb-4 text-gray-600">contact@neoenergy.com</p>
                    <div className="flex space-x-4 text-gray-500">
                        <a href="#"><Icon icon="mdi:instagram" className="hover:text-green-600" height={24} /></a>
                        <a href="#"><Icon icon="mdi:twitter" className="hover:text-green-600" height={24} /></a>
                        <a href="#"><Icon icon="mdi:facebook" className="hover:text-green-600" height={24} /></a>
                        <a href="#"><Icon icon="mdi:youtube" className="hover:text-green-600" height={24} /></a>
                    </div>
                </div>
            </div>

            <div className="mt-16 text-center text-sm text-gray-400">
                &copy; {new Date().getFullYear()} Neo Energy. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;
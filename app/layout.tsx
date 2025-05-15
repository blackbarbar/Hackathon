import "@/styles/globals.css";
import type { Metadata } from "next";
import clsx from "clsx";

import { Providers } from "./providers";

import { siteConfig } from "@/config/site";
import { fontSans } from "@/config/fonts";
import { Navbar } from "@/components/navbar";
import Footer from "@/components/footer";

export const metadata: Metadata = {
	title: {
		default: siteConfig.name,
		template: `%s - ${siteConfig.name}`,
	},
	description: siteConfig.description,
	icons: {
		icon: "/favicon.png",
	},
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html suppressHydrationWarning lang="en" className="light scroll-smooth">
			<head />
			<body
				className={clsx(
					"min-h-screen bg-background font-sans antialiased",
					fontSans.variable,
				)}
			>
				<Providers>
					<div className="relative flex flex-col h-screen">
						<Navbar />
						<main className="flex-grow">{children}</main>
						<Footer />
					</div>
				</Providers>
			</body>
		</html>
	);
}

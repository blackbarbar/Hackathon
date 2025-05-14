import Comparison from "@/components/comparison";
import CTABanner from "@/components/ctaBanner";
import Header from "@/components/header";
import Benefits from "@/components/benefits";
import Products from "@/components/products";
import Testimonials from "@/components/testimonials";
import FAQ from "@/components/faq";

export default function Home() {
  return (
    <>
      <Header />
      <Products />
      <Testimonials />
      <Benefits />
      <FAQ />
      <Comparison />
      <CTABanner />
    </>
  );
}

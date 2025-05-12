import Comparison from "@/components/comparison";
import CTABanner from "@/components/ctaBanner";
import Header from "@/components/header";
import Benefits from "@/components/benefits";
import Products from "@/components/products";
import Testimonials from "@/components/testimonials";

export default function Home() {
  return (
    <>
      <Header />
      <Products />
      <Testimonials />
      <Benefits />
      <Comparison />
      <CTABanner />
    </>
  );
}

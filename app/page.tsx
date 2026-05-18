import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Gallery from "@/components/Gallery";
import WhyPaloma from "@/components/WhyPaloma";
import Reviews from "@/components/Reviews";
import Location from "@/components/Location";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Hero />
      <Services />
      <Gallery />
      <WhyPaloma />
      <Reviews />
      <Location />
      <Footer />
    </main>
  );
}

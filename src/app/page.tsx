import Hero from "@/components/Hero";
import BrandPositioning from "@/components/BrandPositioning";
import FeaturedProducts from "@/components/FeaturedProducts";
import SalesChannels from "@/components/SalesChannels";
import SocialProof from "@/components/SocialProof";
import CTASection from "@/components/CTASection";

export default function Home() {
  return (
    <>
      <Hero />
      <BrandPositioning />
      <FeaturedProducts />
      <SalesChannels />
      <SocialProof />
      <CTASection />
    </>
  );
}

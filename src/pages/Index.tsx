import HeroSection from "@/components/HeroSection";
import PainSection from "@/components/PainSection";
import OutcomeSection from "@/components/OutcomeSection";
import ProductSection from "@/components/ProductSection";
import CTASection from "@/components/CTASection";
import FAQSection from "@/components/FAQSection";
import EmailCapture from "@/components/EmailCapture";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      <PainSection />
      <OutcomeSection />
      <ProductSection />
      <CTASection />
      <FAQSection />
      <EmailCapture />
      <Footer />
    </div>
  );
};

export default Index;

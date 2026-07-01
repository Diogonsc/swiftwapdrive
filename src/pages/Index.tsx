import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/sections/HeroSection";
import SocialProofBarSection from "@/components/sections/SocialProofBarSection";
import AboutSection from "@/components/sections/AboutSection";
import ComparisonSection from "@/components/sections/ComparisonSection";
import HowItWorksSection from "@/components/sections/HowItWorksSection";
import FlowDiagramSection from "@/components/sections/FlowDiagramSection";
import FeaturesSection from "@/components/sections/FeaturesSection";
import SocialProofSection from "@/components/sections/SocialProofSection";
import WhatsAppUsageSection from "@/components/sections/WhatsAppUsageSection";
import EcosystemSection from "@/components/sections/EcosystemSection";
import TargetAudienceSection from "@/components/sections/TargetAudienceSection";
import PlanGuidanceSection from "@/components/sections/PlanGuidanceSection";
import PricingSection from "@/components/sections/PricingSection";
import FaqSection from "@/components/sections/FaqSection";
import FinalCtaSection from "@/components/sections/FinalCtaSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <SocialProofBarSection />
        <AboutSection />
        <ComparisonSection />
        <HowItWorksSection />
        <FlowDiagramSection />
        <FeaturesSection />
        <SocialProofSection />
        <WhatsAppUsageSection />
        <EcosystemSection />
        <TargetAudienceSection />
        <PlanGuidanceSection />
        <PricingSection />
        <FaqSection />
        <FinalCtaSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;

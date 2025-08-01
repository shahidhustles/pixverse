import { HeroSection } from "../components/landing/hero-section";
import { FeaturesGrid } from "../components/landing/features-grid";
import { TeamsSection } from "../components/landing/teams-section";
import { FooterSection } from "../components/landing/footer-section";

export default function Home() {
  return (
    <div className="w-full gaming-bg-primary min-h-screen">
      {/* Hero Section with placeholder for gaming component */}
      <HeroSection />

      {/* Features Grid Section - Game photos and features */}
      <FeaturesGrid />

      {/* Teams Section - Placeholder for your custom component */}
      <TeamsSection />

      {/* Footer Section */}
      <FooterSection />
    </div>
  );
}

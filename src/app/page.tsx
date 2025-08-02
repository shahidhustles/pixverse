import { HeroSection } from "../components/landing/hero-section";
import { FeaturesGrid } from "../components/landing/features-grid";
import { TeamsSection } from "../components/landing/teams-section";
import { FooterSection } from "../components/landing/footer-section";

export default function Home() {
  return (
    <div className="w-full bg-white min-h-screen pt-20">
      {/* Hero Section with placeholder for gaming component */}
      <section id="hero">
        <HeroSection />
      </section>

      {/* About Section - Features Grid */}
      <section id="about">
        <FeaturesGrid />
      </section>

      {/* Games Section - Teams Section (can be renamed to showcase games) */}
      <section id="games">
        <TeamsSection />
      </section>

      {/* Features Section - Could add another section here or use existing */}
      <section id="features">
        {/* You can add a new features component here or repurpose an existing one */}
        <div className="py-16 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-8">Game Features</h2>
            <p className="text-lg text-gray-600">
              Discover the amazing features that make our games stand out!
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section - Footer */}
      <section id="contact">
        <FooterSection />
      </section>
    </div>
  );
}

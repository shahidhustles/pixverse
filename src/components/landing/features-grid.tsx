import React from "react";
import { RetroCard } from "../ui/retro-card";
import { InfiniteMovingCards } from "../../elements/infinite-marquee/infinite-scroll";

export const FeaturesGrid = () => {
  // Game features data for the infinite marquee
  const gameFeatures = [
    {
      image: "/collection-1.jpg",
      title: "Tactical Weapons",
    },
    {
      image: "/collection-2.jpg",
      title: "Competitive Modes",
    },
    {
      image: "/collection-3.jpg",
      title: "Agent Abilities",
    },
    {
      image: "/collection-4.jpg",
      title: "Dynamic Maps",
    },
    {
      image: "/collection-5.jpg",
      title: "Esports Ready",
    },
    {
      image: "/collection-6.jpg",
      title: "Team Strategy",
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <RetroCard className="inline-block px-8 py-3 mb-6" variant="red">
            <span className="font-bold uppercase tracking-wider text-sm">
              GAME FEATURES
            </span>
          </RetroCard>

          <h2 className="text-3xl md:text-5xl font-black text-black mb-6">
            <span className="retro-text-3d">TACTICAL</span>{" "}
            <span className="retro-text-gaming">GAMEPLAY</span>
          </h2>

          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Experience cutting-edge FPS gameplay with tactical depth,
            competitive integrity, and endless strategic possibilities.
          </p>
        </div>

        {/* Retro 3D Container for Infinite Marquee */}
        <RetroCard
          className="overflow-hidden p-8 mb-12"
          variant="purple"
          size="lg"
        >
          <div className="retro-marquee-container">
            <InfiniteMovingCards items={gameFeatures} />
          </div>
        </RetroCard>

        {/* Game Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <RetroCard className="p-6 text-center" variant="red" interactive>
            <div className="text-3xl font-black text-white mb-2 retro-text-3d">
              150+
            </div>
            <div className="text-sm font-medium text-black">
              Weapons & Items
            </div>
          </RetroCard>

          <RetroCard className="p-6 text-center" variant="blue" interactive>
            <div className="text-3xl font-black text-white mb-2 retro-text-3d">
              15
            </div>
            <div className="text-sm font-medium text-black">
              Competitive Maps
            </div>
          </RetroCard>

          <RetroCard className="p-6 text-center" variant="green" interactive>
            <div className="text-3xl font-black text-white mb-2 retro-text-3d">
              20+
            </div>
            <div className="text-sm font-medium text-black">
              Unique Agents
            </div>
          </RetroCard>

          <RetroCard className="p-6 text-center" variant="purple" interactive>
            <div className="text-3xl font-black text-white mb-2 retro-text-3d">
              ∞
            </div>
            <div className="text-sm font-medium text-black">
              Tactical Combinations
            </div>
          </RetroCard>
        </div>
      </div>
    </section>
  );
};

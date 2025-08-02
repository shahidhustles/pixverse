"use client";

import React from "react";
import { RetroCard } from "../ui/retro-card";
import { RetroButton } from "../ui/retro-button";
import { GamingIcon, GameStats } from "../ui/gaming-icons";
import { ShootingGame } from "../../elements/interactive-target/shooting-game";

export const HeroSection = () => {
  return (
    <section className="min-h-screen bg-white text-black py-20">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Hero Content */}
          <div>
            <RetroCard className="p-8" variant="red" interactive>
              <div className="mb-6">
                <div className="flex items-center mb-4">
                  <GamingIcon
                    icon="Target"
                    className="text-red-400 mr-3"
                    size="lg"
                  />
                  <span className="text-red-400 font-bold uppercase tracking-wider text-sm">
                    FPS SHOOTER
                  </span>
                </div>

                <h1 className="text-4xl md:text-6xl lg:text-7xl font-black mb-6 leading-tight">
                  <span className="retro-text-3d text-black">DOMINATE</span>
                  <br />
                  <span className="retro-text-gaming">THE RIFT</span>
                </h1>

                <p className="text-lg md:text-xl text-gray-700 mb-8 max-w-lg">
                  Experience the ultimate tactical FPS shooter. Master your aim,
                  coordinate with your team, and rise through the competitive
                  ranks in this Valorant-style gaming experience.
                </p>

                <div className="flex flex-col sm:flex-row gap-4">
                  <RetroButton variant="primary" size="lg">
                    PLAY NOW
                  </RetroButton>
                  <RetroButton variant="outline" size="lg">
                    WATCH GAMEPLAY
                  </RetroButton>
                </div>
              </div>
            </RetroCard>

            {/* Game Stats */}
            <div className="grid grid-cols-3 gap-4 mt-8">
              <RetroCard className="p-4" variant="blue" interactive>
                <GameStats
                  value="100K+"
                  label="Active Players"
                  icon="Target"
                  color="blue"
                />
              </RetroCard>
              <RetroCard className="p-4" variant="green" interactive>
                <GameStats
                  value="25+"
                  label="Game Modes"
                  icon="Lightning"
                  color="green"
                />
              </RetroCard>
              <RetroCard className="p-4" variant="purple" interactive>
                <GameStats
                  value="24/7"
                  label="Tournaments"
                  icon="Trophy"
                  color="purple"
                />
              </RetroCard>
            </div>
          </div>

          {/* Interactive Gaming Target */}
          <div className="flex justify-center">
            <RetroCard
              className="w-full max-w-lg aspect-square p-8"
              variant="orange"
            >
              <div className="h-full flex items-center justify-center">
                <ShootingGame
                  className="w-full h-full"
                  onKill={(score) => {
                    console.log("Target eliminated! Score:", score);
                  }}
                />
              </div>
            </RetroCard>
          </div>
        </div>
      </div>

      {/* Floating Gaming Elements */}
      <div className="absolute top-32 right-10 hidden xl:block">
        <RetroCard className="p-4" variant="yellow" interactive>
          <GamingIcon icon="Star" className="text-yellow-600" />
        </RetroCard>
      </div>

      <div className="absolute bottom-20 left-8 hidden xl:block">
        <RetroCard className="p-4" variant="green" interactive>
          <GamingIcon icon="Shield" className="text-green-500" />
        </RetroCard>
      </div>
    </section>
  );
};

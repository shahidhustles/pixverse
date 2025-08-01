import React from "react";
import { RetroCard } from "../ui/retro-card";
import { RetroButton } from "../ui/retro-button";
import { GamingIcon } from "../ui/gaming-icons";

export const FooterSection = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-16 gaming-bg-secondary">
      <div className="container mx-auto px-6">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <RetroCard className="p-6 h-full" variant="red">
              <div className="flex items-center mb-4">
                <GamingIcon
                  icon="Crosshair"
                  className="text-red-600 mr-3"
                  size="lg"
                />
                <h3 className="text-3xl font-black text-gray-800">PIXVERSE</h3>
              </div>

              <p className="text-gray-600 mb-6 max-w-md">
                The ultimate tactical FPS experience where legends are forged.
                Join thousands of competitive players in the most intense gaming
                battles.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <RetroButton variant="primary" size="md">
                  DOWNLOAD GAME
                </RetroButton>
                <RetroButton variant="outline" size="md">
                  VIEW STATS
                </RetroButton>
              </div>
            </RetroCard>
          </div>

          {/* Quick Links */}
          <div>
            <RetroCard className="p-6 h-full" variant="blue">
              <h4 className="text-lg font-bold text-gray-800 mb-4 retro-text-3d">
                GAME
              </h4>
              <ul className="space-y-3">
                {[
                  "Competitive Play",
                  "Game Modes",
                  "Leaderboards",
                  "Training Range",
                ].map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-gray-600 hover:text-blue-600 transition-colors duration-200 text-sm font-medium"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </RetroCard>
          </div>

          {/* Community */}
          <div>
            <RetroCard className="p-6 h-full" variant="green">
              <h4 className="text-lg font-bold text-gray-800 mb-4 retro-text-3d">
                COMMUNITY
              </h4>
              <ul className="space-y-3">
                {[
                  "Discord Server",
                  "Reddit Community",
                  "Forums",
                  "Support Center",
                ].map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-gray-600 hover:text-green-600 transition-colors duration-200 text-sm font-medium"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </RetroCard>
          </div>
        </div>

        {/* Social Media Section */}
        <RetroCard className="p-6 mb-8" variant="purple">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-4 md:mb-0">
              <h4 className="text-xl font-bold text-gray-800 mb-2 retro-text-3d">
                STAY CONNECTED
              </h4>
              <p className="text-gray-600">
                Follow us for updates, tournaments, and exclusive gaming content
              </p>
            </div>

            <div className="flex gap-4">
              {[
                { name: "Discord", color: "purple" as const },
                { name: "Twitter", color: "blue" as const },
                { name: "YouTube", color: "red" as const },
                { name: "Twitch", color: "purple" as const },
              ].map((platform) => (
                <RetroCard
                  key={platform.name}
                  className="p-3 cursor-pointer"
                  variant={platform.color}
                  interactive
                  size="sm"
                >
                  <span className="text-sm font-bold text-gray-800">
                    {platform.name}
                  </span>
                </RetroCard>
              ))}
            </div>
          </div>
        </RetroCard>

        {/* Newsletter Signup */}
        <RetroCard className="p-8 mb-8" variant="orange">
          <div className="max-w-2xl mx-auto text-center">
            <GamingIcon
              icon="Lightning"
              className="text-orange-600 mx-auto mb-4"
              size="xl"
            />
            <h4 className="text-2xl font-black text-gray-800 mb-2 retro-text-3d">
              JOIN THE ELITE
            </h4>
            <p className="text-gray-600 mb-6">
              Get exclusive access to beta releases, tournament invites, and pro
              gaming tips
            </p>

            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="retro-input flex-1"
              />
              <RetroButton variant="primary">SUBSCRIBE</RetroButton>
            </div>
          </div>
        </RetroCard>

        {/* Bottom Bar */}
        <div className="border-t-4 border-gray-600 pt-8">
          <RetroCard className="p-4" variant="black">
            <div className="flex flex-col md:flex-row items-center justify-between text-sm text-white">
              <div className="mb-2 md:mb-0 font-medium">
                © {currentYear} PIXVERSE Gaming. All rights reserved.
              </div>
              <div className="flex gap-6">
                <a
                  href="#"
                  className="hover:text-red-400 transition-colors font-medium"
                >
                  Privacy Policy
                </a>
                <a
                  href="#"
                  className="hover:text-blue-400 transition-colors font-medium"
                >
                  Terms of Service
                </a>
                <a
                  href="#"
                  className="hover:text-green-400 transition-colors font-medium"
                >
                  EULA
                </a>
              </div>
            </div>
          </RetroCard>
        </div>
      </div>
    </footer>
  );
};

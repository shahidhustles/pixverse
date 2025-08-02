"use client";

import React, { useState } from "react";
import Image from "next/image";
import { RetroCard } from "../ui/retro-card";

export const TeamsSection = () => {
  const [hoveredMember, setHoveredMember] = useState<number | null>(null);

  // Sentinels Valorant Team Members
  const teamMembers = [
    {
      id: 1,
      name: "Zekken",
      designation: "Duelist",
      image: "/zekken.jpg",
      color: "red" as const,
    },
    {
      id: 2,
      name: "Bang",
      designation: "Flex",
      image: "/bang.jpeg",
      color: "blue" as const,
    },
    {
      id: 3,
      name: "Zellsis",
      designation: "Sentinel",
      image: "/zellsis.jpg",
      color: "green" as const,
    },
    {
      id: 4,
      name: "JOHNQT",
      designation: "IGL",
      image: "/johnqt.jpg",
      color: "purple" as const,
    },
    {
      id: 5,
      name: "N4RRATE",
      designation: "Controller",
      image: "/n4rrate.jpeg",
      color: "orange" as const,
    },
  ];

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-black text-black mb-8">
            <span className="retro-text-3d">OUR TEAM</span>
          </h2>
        </div>

        {/* Team Members List */}
        <div className="max-w-5xl mx-auto space-y-1">
          {teamMembers.map((member) => (
            <div
              key={member.id}
              className="relative"
              onMouseEnter={() => setHoveredMember(member.id)}
              onMouseLeave={() => setHoveredMember(null)}
            >
              {/* Full Width Row */}
              <div className="w-full bg-white border-b-2 border-black py-6 px-8 cursor-pointer transition-all duration-300 hover:bg-gray-100">
                <div className="flex items-center justify-between">
                  {/* Left Side - Name */}
                  <div className="flex-1">
                    <h3 className="text-3xl md:text-4xl font-bold text-black">
                      {String(member.id).padStart(2, "0")} {member.name}
                    </h3>
                  </div>

                  {/* Right Side - Role */}
                  <div className="text-right">
                    <span className="text-lg md:text-xl font-bold text-black uppercase tracking-wider">
                      {member.designation}
                    </span>
                  </div>
                </div>

                {/* Circular Profile Image - Appears on Hover */}
                {hoveredMember === member.id && (
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
                    <div className="relative">
                      {/* Circular Image Container */}
                      <div className="w-56 h-56 rounded-full overflow-hidden border-4 border-black shadow-2xl animate-fade-in">
                        <Image
                          src={member.image}
                          alt={member.name}
                          width={224}
                          height={224}
                          className="w-full h-full object-cover"
                        />
                      </div>

                      {/* Optional: Add a subtle glow effect */}
                      <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500/30 to-purple-500/30 blur-lg -z-10"></div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Team Stats Section */}
        <div className="mt-20">
          <RetroCard className="p-12 text-center bg-gray-50" variant="yellow">
            <div className="max-w-4xl mx-auto">
              <h3 className="text-3xl font-black text-gray-700 mb-8 retro-text-3d">
                MEET THE WORLD CHAMPIONS
              </h3>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
                <div className="text-center">
                  <div className="text-4xl font-black retro-text-gaming mb-2">
                    #1
                  </div>
                  <p className="text-gray-600 font-semibold">Global Ranking</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-black retro-text-gaming mb-2">
                    5
                  </div>
                  <p className="text-gray-600 font-semibold">Major Titles</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-black retro-text-gaming mb-2">
                    87%
                  </div>
                  <p className="text-gray-600 font-semibold">Win Rate</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-black retro-text-gaming mb-2">
                    2M+
                  </div>
                  <p className="text-gray-600 font-semibold">Prize Money</p>
                </div>
              </div>

              <p className="text-gray-600 text-lg font-medium">
                The most dominant roster in Valorant history, setting records
                and defining the meta across multiple competitive seasons.
              </p>
            </div>
          </RetroCard>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translate(-50%, -50%) scale(0.8);
          }
          to {
            opacity: 1;
            transform: translate(-50%, -50%) scale(1);
          }
        }

        .animate-fade-in {
          animation: fade-in 0.3s ease-out forwards;
        }
      `}</style>
    </section>
  );
};

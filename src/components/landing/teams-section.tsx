import React from "react";
import { RetroCard } from "../ui/retro-card";
import { GamingIcon, GamingBadge } from "../ui/gaming-icons";

export const TeamsSection = () => {
  // Placeholder team data
  const placeholderTeams = [
    {
      id: 1,
      name: "Phoenix Squad",
      role: "Duelist Team",
      status: "active",
      color: "red" as const,
    },
    {
      id: 2,
      name: "Cypher Unit",
      role: "Intel Team",
      status: "active",
      color: "blue" as const,
    },
    {
      id: 3,
      name: "Sage Force",
      role: "Support Team",
      status: "recruiting",
      color: "green" as const,
    },
    {
      id: 4,
      name: "Viper Command",
      role: "Controller Team",
      status: "active",
      color: "purple" as const,
    },
  ];

  return (
    <section className="py-20 gaming-bg-primary">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <RetroCard className="inline-block px-8 py-3 mb-6" variant="orange">
            <span className="font-bold uppercase tracking-wider text-sm">
              ELITE SQUADS
            </span>
          </RetroCard>

          <h2 className="text-3xl md:text-5xl font-black text-white mb-6">
            <span className="retro-text-3d">JOIN THE</span>{" "}
            <span className="retro-text-gaming">LEGENDS</span>
          </h2>

          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Team up with skilled players or build your own squad. Each team
            brings unique strategies and coordination to dominate the
            competitive scene.
          </p>
        </div>

        {/* Teams Grid - Placeholder Cards */}
        <div className="retro-grid retro-grid-4 mb-12">
          {placeholderTeams.map((team) => (
            <RetroCard
              key={team.id}
              className="p-6 text-center"
              variant={team.color}
              interactive
            >
              {/* Team Icon */}
              <div className="mb-4">
                <RetroCard
                  className="w-16 h-16 mx-auto flex items-center justify-center gaming-bg-secondary"
                  variant="black"
                >
                  <GamingIcon icon="Shield" className="text-white" size="lg" />
                </RetroCard>
              </div>

              {/* Team Info */}
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                {team.name}
              </h3>
              <p className="text-sm text-gray-600 mb-3">{team.role}</p>

              {/* Status Badge */}
              <GamingBadge
                variant={team.status === "recruiting" ? "orange" : "green"}
              >
                {team.status === "recruiting" ? "RECRUITING" : "ACTIVE"}
              </GamingBadge>
            </RetroCard>
          ))}
        </div>

        {/* Main Placeholder Notice */}
        <RetroCard
          className="p-12 text-center gaming-bg-secondary"
          variant="yellow"
        >
          <div className="max-w-3xl mx-auto">
            <div className="w-24 h-24 gaming-bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
              <GamingIcon icon="Target" className="text-yellow-400" size="xl" />
            </div>

            <h3 className="text-3xl font-black text-white mb-4 retro-text-3d">
              TEAMS COMPONENT PLACEHOLDER
            </h3>

            <p className="text-gray-300 text-lg mb-8">
              This section is reserved for your custom teams component. Replace
              this placeholder with your team management system, member
              profiles, recruitment features, and squad statistics.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              <div className="text-center">
                <GamingIcon
                  icon="Trophy"
                  className="text-yellow-400 mx-auto mb-2"
                />
                <span className="text-sm text-gray-300">Team Profiles</span>
              </div>
              <div className="text-center">
                <GamingIcon
                  icon="Target"
                  className="text-yellow-400 mx-auto mb-2"
                />
                <span className="text-sm text-gray-300">Member Management</span>
              </div>
              <div className="text-center">
                <GamingIcon
                  icon="Lightning"
                  className="text-yellow-400 mx-auto mb-2"
                />
                <span className="text-sm text-gray-300">
                  Recruitment System
                </span>
              </div>
              <div className="text-center">
                <GamingIcon
                  icon="Star"
                  className="text-yellow-400 mx-auto mb-2"
                />
                <span className="text-sm text-gray-300">Team Statistics</span>
              </div>
            </div>

            <div className="w-full h-48 gaming-bg-primary rounded-lg border-4 border-dashed border-yellow-400 flex items-center justify-center">
              <div className="text-center">
                <GamingIcon
                  icon="Crosshair"
                  className="text-yellow-400 mx-auto mb-2"
                  size="xl"
                />
                <span className="text-yellow-400 font-bold text-lg">
                  Your Custom Teams Component Goes Here
                </span>
              </div>
            </div>
          </div>
        </RetroCard>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center mt-12">
          <RetroCard
            className="px-8 py-4 text-center cursor-pointer"
            variant="red"
            interactive
          >
            <span className="font-bold text-gray-800">CREATE YOUR SQUAD</span>
          </RetroCard>
          <RetroCard
            className="px-8 py-4 text-center cursor-pointer"
            variant="blue"
            interactive
          >
            <span className="font-bold text-gray-800">JOIN EXISTING TEAM</span>
          </RetroCard>
          <RetroCard
            className="px-8 py-4 text-center cursor-pointer"
            variant="green"
            interactive
          >
            <span className="font-bold text-gray-800">VIEW LEADERBOARDS</span>
          </RetroCard>
        </div>
      </div>
    </section>
  );
};

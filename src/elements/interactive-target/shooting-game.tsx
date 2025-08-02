"use client";

import React, { useState, useRef, useEffect, useCallback } from "react";
import { gsap } from "gsap";

interface Target {
  id: number;
  x: number;
  y: number;
  size: number;
  speed: number;
  color: string;
  isActive: boolean;
}

interface ShootingGameProps {
  onKill?: (score: number) => void;
  className?: string;
}

export const ShootingGame: React.FC<ShootingGameProps> = ({
  onKill,
  className = "",
}) => {
  const [targets, setTargets] = useState<Target[]>([]);
  const [score, setScore] = useState(0);
  const [gameState, setGameState] = useState<
    "waiting" | "active" | "paused" | "over"
  >("waiting");
  const containerRef = useRef<HTMLDivElement>(null);
  const targetsRef = useRef<{ [key: number]: HTMLDivElement | null }>({});
  const nextTargetId = useRef(0);
  const gameActive = useRef(false);
  const targetCreationTimeout = useRef<NodeJS.Timeout | null>(null);

  const getRandomPosition = useCallback(() => {
    const container = containerRef.current;
    if (!container) return { x: 50, y: 50 };

    const rect = container.getBoundingClientRect();
    const padding = 40; // Keep targets away from edges

    return {
      x: Math.random() * (rect.width - padding * 2) + padding,
      y: Math.random() * (rect.height - padding * 2) + padding,
    };
  }, []);

  const createTarget = useCallback(() => {
    if (!gameActive.current) return;

    const colors = [
      "bg-red-500",
      "bg-blue-500",
      "bg-green-500",
      "bg-yellow-500",
      "bg-purple-500",
      "bg-pink-500",
      "bg-orange-500",
    ];

    const position = getRandomPosition();
    const newTarget: Target = {
      id: nextTargetId.current++,
      x: position.x,
      y: position.y,
      size: Math.random() * 30 + 20, // 20-50px diameter
      speed: Math.random() * 3 + 1, // 1-4 seconds to disappear
      color: colors[Math.floor(Math.random() * colors.length)],
      isActive: true,
    };

    setTargets((prev) => [...prev, newTarget]);

    // Auto-remove target after its lifetime
    setTimeout(() => {
      setTargets((prev) => prev.filter((t) => t.id !== newTarget.id));
      delete targetsRef.current[newTarget.id];
    }, newTarget.speed * 1000);
  }, [getRandomPosition]);

  const startGame = useCallback(() => {
    setGameState("active");
    gameActive.current = true;
    setScore(0);
    setTargets([]);
  }, []);

  const pauseGame = useCallback(() => {
    setGameState("paused");
    gameActive.current = false;
    if (targetCreationTimeout.current) {
      clearTimeout(targetCreationTimeout.current);
    }
  }, []);

  const handleContainerClick = useCallback(
    (e: React.MouseEvent) => {
      e.stopPropagation();

      // Check if click is on a target element
      const isTargetClick = (e.target as HTMLElement).closest(
        "[data-target-id]"
      );

      // If not clicking on a target, handle game state
      if (!isTargetClick) {
        if (gameState === "waiting" || gameState === "paused") {
          startGame();
        }
      }
    },
    [gameState, startGame]
  );

  const handleOutsideClick = useCallback(() => {
    if (gameState === "active") {
      pauseGame();
    }
  }, [gameState, pauseGame]);

  // Handle clicks outside the game area
  useEffect(() => {
    const handleDocumentClick = (e: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(e.target as Node)
      ) {
        handleOutsideClick();
      }
    };

    document.addEventListener("click", handleDocumentClick);
    return () => document.removeEventListener("click", handleDocumentClick);
  }, [handleOutsideClick]);

  const shootTarget = useCallback(
    (targetId: number, event: React.MouseEvent) => {
      event.stopPropagation();

      const targetElement = targetsRef.current[targetId];
      if (!targetElement) return;

      // Create hit effect
      const hitEffect = document.createElement("div");
      hitEffect.className = "absolute pointer-events-none z-50";
      hitEffect.style.left = event.nativeEvent.offsetX + "px";
      hitEffect.style.top = event.nativeEvent.offsetY + "px";
      hitEffect.innerHTML = `
      <div class="w-8 h-8 bg-yellow-300 rounded-full animate-ping opacity-75"></div>
      <div class="absolute inset-0 w-6 h-6 bg-orange-400 rounded-full top-1 left-1"></div>
      <div class="absolute inset-0 w-4 h-4 bg-red-500 rounded-full top-2 left-2"></div>
    `;

      if (containerRef.current) {
        containerRef.current.appendChild(hitEffect);
        setTimeout(() => hitEffect.remove(), 500);
      }

      // Animate target destruction
      gsap.to(targetElement, {
        scale: 0,
        rotation: 360,
        opacity: 0,
        duration: 0.3,
        ease: "back.in(1.7)",
        onComplete: () => {
          setTargets((prev) => prev.filter((t) => t.id !== targetId));
          delete targetsRef.current[targetId];
        },
      });

      // Update score
      setScore((prev) => {
        const newScore = prev + 10;
        onKill?.(newScore);
        return newScore;
      });

      // Show score popup
      const scorePopup = document.createElement("div");
      scorePopup.className =
        "absolute pointer-events-none z-50 text-green-400 font-bold text-xl animate-bounce";
      scorePopup.style.left = event.nativeEvent.offsetX - 10 + "px";
      scorePopup.style.top = event.nativeEvent.offsetY - 30 + "px";
      scorePopup.textContent = "+10";

      if (containerRef.current) {
        containerRef.current.appendChild(scorePopup);
        gsap.fromTo(
          scorePopup,
          { y: 0, opacity: 1 },
          {
            y: -30,
            opacity: 0,
            duration: 1,
            onComplete: () => scorePopup.remove(),
          }
        );
      }
    },
    [onKill]
  );

  // Create targets at random intervals
  useEffect(() => {
    if (gameState !== "active") return;

    const createTargetInterval = () => {
      if (!gameActive.current) return;

      const delay = Math.random() * 2000 + 500; // 0.5-2.5 seconds
      targetCreationTimeout.current = setTimeout(() => {
        createTarget();
        if (gameActive.current) {
          createTargetInterval();
        }
      }, delay);
    };

    createTargetInterval();

    return () => {
      if (targetCreationTimeout.current) {
        clearTimeout(targetCreationTimeout.current);
      }
    };
  }, [gameState, createTarget]);

  // Animate targets when they appear
  useEffect(() => {
    targets.forEach((target) => {
      const element = targetsRef.current[target.id];
      if (element) {
        gsap.fromTo(
          element,
          { scale: 0, opacity: 0 },
          { scale: 1, opacity: 1, duration: 0.3, ease: "back.out(1.7)" }
        );
      }
    });
  }, [targets]);

  return (
    <div
      ref={containerRef}
      className={`relative w-full h-full bg-gradient-to-br from-slate-800 via-slate-900 to-black rounded-lg overflow-hidden ${className}`}
      style={{ cursor: "crosshair" }}
      onClick={handleContainerClick}
    >
      {/* Background grid pattern */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `
            radial-gradient(circle at 2px 2px, rgba(0,255,65,0.3) 1px, transparent 1px)
          `,
          backgroundSize: "40px 40px",
        }}
      />

      {/* Score display */}
      <div className="absolute top-4 left-4 z-30">
        <div className="bg-black bg-opacity-50 text-green-400 px-4 py-2 rounded-lg font-bold text-lg">
          SCORE: {score}
        </div>
      </div>

      {/* Game state indicator */}
      <div className="absolute top-4 right-4 z-20">
        <div
          className={`px-3 py-1 rounded-full text-xs font-semibold ${
            gameState === "active"
              ? "bg-green-500 text-white"
              : gameState === "paused"
              ? "bg-yellow-500 text-black"
              : "bg-gray-500 text-white"
          }`}
        >
          {gameState === "active"
            ? "ACTIVE"
            : gameState === "paused"
            ? "PAUSED"
            : "WAITING"}
        </div>
      </div>

      {/* Crosshair in center */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none z-30">
        <div className="relative">
          <div className="w-6 h-0.5 bg-green-400 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-30"></div>
          <div className="w-0.5 h-6 bg-green-400 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-30"></div>
          <div className="w-8 h-8 border border-green-400 rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-20"></div>
        </div>
      </div>

      {/* Dynamic targets */}
      {targets.map((target) => (
        <div
          key={target.id}
          data-target-id={target.id}
          ref={(el) => {
            targetsRef.current[target.id] = el;
          }}
          className={`absolute ${target.color} rounded-full cursor-crosshair border-2 border-white shadow-lg animate-pulse hover:scale-110 transition-transform duration-200`}
          style={{
            left: target.x - target.size / 2,
            top: target.y - target.size / 2,
            width: target.size,
            height: target.size,
            zIndex: 20,
          }}
          onClick={(e) => shootTarget(target.id, e)}
        >
          {/* Target center */}
          <div className="absolute inset-2 bg-white rounded-full opacity-80">
            <div className="absolute inset-1 bg-red-500 rounded-full">
              <div className="absolute inset-1 bg-white rounded-full">
                <div className="absolute inset-1 bg-red-500 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Instructions overlay */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-10">
        <div className="text-green-400 text-center font-semibold opacity-40">
          <div className="text-lg mb-2">🎯 SHOOTING RANGE</div>
          {gameState === "waiting" && (
            <div className="text-sm animate-pulse">
              Click anywhere to start shooting!
            </div>
          )}
          {gameState === "active" && (
            <div className="text-sm">Click targets to score points!</div>
          )}
          {gameState === "paused" && (
            <div className="text-sm animate-pulse">
              <div>GAME PAUSED</div>
              <div className="text-xs mt-1">Click here to resume</div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

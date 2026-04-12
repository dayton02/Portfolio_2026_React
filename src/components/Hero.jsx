import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import MapleWorld from './MapleWorld';
import ProjectPortal from './ProjectPortal';
import ProjectModal from './ProjectModal.jsx';
import InventoryModal from './InventoryModal';
import AudioControls from './AudioControls';
import MapleCharacter from './MapleCharacter';
import { useAudio } from '../contexts/AudioContext';

// --- PROJECT DATA DATABASE ---
const projectDatabase = {
  engine: {
    title: "Custom Game Engine",
    subtitle: "Architecture & Logic",
    description: "Architected a custom 2D game engine in C++. Integrated a comprehensive Lua scripting pipeline to handle entity behaviors (including custom slime enemy AI) and implemented an ECS (Entity Component System) for performance rendering and physics.",
    tech: ["C++", "Lua Scripting", "ECS Architecture"]
  },
  climb: {
    title: "Climb",
    subtitle: "2D Vertical Platformer",
    description: "A 2D vertical platformer that challenges players to ascend through treacherous rock formations. Built with a three-button control system for strategic movement, featuring a unique punch mechanism to clear obstacles and traverse dynamically.",
    tech: ["C++", "AEngine", "Procreate"]
  },
  leaderboard: {
    title: "Leaderboard System",
    subtitle: "Real-time Structure",
    description: "Engineered a highly efficient real-time game leaderboard application. Utilized Red-Black Trees as the core data structure to ensure logarithmic time complexity for insertions, deletions, and rank queries under heavy concurrent loads.",
    tech: ["C++", "Red-Black Trees", "Data Structures"]
  }
};

const Hero = ({ playerName = "Guest" }) => {
  const { playSFX } = useAudio();
  const [isWindowOpen, setIsWindowOpen] = useState(true);
  const [activeProject, setActiveProject] = useState(null); // State for the Quest Log
  const [isInventoryOpen, setIsInventoryOpen] = useState(false); // State for the Inventory

  return (
    <section className="relative w-full h-[100svh] overflow-hidden selection:bg-blue-500/30 font-sans">
      {/* --- THE RECRUITER HOTBAR (Safety Net Navigation) --- */}
      <div className="absolute top-0 right-0 w-full p-4 flex justify-between items-start z-[100] pointer-events-auto">
        {/* TOP LEFT WINDOWS: Audio & Location Tag */}
        <div className="flex gap-4 items-center">
          <AudioControls />
          <div className="bg-[#1e293b]/90 backdrop-blur-sm border border-[#94a3b8] px-3 py-1 shadow-md rounded-sm">
            <span className="text-[#38bdf8] text-[10px] font-bold uppercase tracking-wider drop-shadow-[1px_1px_0px_rgba(0,0,0,1)] flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-[#66cc33] animate-pulse"></span>
              World: Dayton Ng Zhi Jie
            </span>
          </div>
        </div>

        {/* TOP RIGHT: The Recruiter Hotbar */}
        <div className="bg-[#1e293b]/90 backdrop-blur-sm border border-[#94a3b8] px-4 py-2 flex gap-6 shadow-md rounded-sm">
          <button
            onClick={() => { playSFX('click'); setActiveProject(projectDatabase.engine); }}
            className="text-white text-xs font-bold hover:text-yellow-400 transition-colors uppercase tracking-widest cursor-pointer"
          >
            Projects
          </button>
          <button
            onClick={() => { playSFX('click'); setIsInventoryOpen(true); }}
            className="text-white text-xs font-bold hover:text-yellow-400 transition-colors uppercase tracking-widest cursor-pointer"
          >
            Skills
          </button>
          <a
            href="resume.pdf"
            target="_blank"
            className="text-cyan-300 text-xs font-bold hover:text-cyan-100 transition-colors uppercase tracking-widest cursor-pointer flex gap-1 items-center"
          >
            Resume ↓
          </a>
        </div>
      </div>

      <MapleWorld />

      {/* THE PORTALS */}
      <ProjectPortal
        xPosition="25%"
        title={projectDatabase.engine.title}
        subtitle={projectDatabase.engine.subtitle}
        tech={projectDatabase.engine.tech}
        onClick={() => setActiveProject(projectDatabase.engine)}
      />

      <ProjectPortal
        xPosition="70%"
        title={projectDatabase.climb.title}
        subtitle={projectDatabase.climb.subtitle}
        tech={projectDatabase.climb.tech}
        onClick={() => setActiveProject(projectDatabase.climb)}
      />

      <ProjectPortal
        xPosition="88%"
        title={projectDatabase.leaderboard.title}
        subtitle={projectDatabase.leaderboard.subtitle}
        tech={projectDatabase.leaderboard.tech}
        onClick={() => setActiveProject(projectDatabase.leaderboard)}
      />

      {/* THE QUEST LOG MODAL */}
      <AnimatePresence>
        {activeProject && (
          <ProjectModal
            project={activeProject}
            onClose={() => setActiveProject(null)}
          />
        )}

        {isInventoryOpen && (
          <InventoryModal onClose={() => setIsInventoryOpen(false)} />
        )}
      </AnimatePresence>

      {/* MAIN UI WINDOW (Character Stats) */}
      <AnimatePresence>
        {isWindowOpen && (
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            drag
            dragMomentum={false}
            className="absolute top-24 left-10 md:left-32 w-80 bg-[var(--color-maple-ui)] border-2 border-[var(--color-maple-border)] shadow-[4px_4px_0px_rgba(0,0,0,0.3)] rounded-sm z-40 cursor-move"
          >
            {/* Window Header */}
            <div className="bg-[#5c7a99] p-1 flex justify-between items-center border-b-2 border-[var(--color-maple-border)] cursor-move">
              <span className="text-white text-xs px-2 tracking-widest drop-shadow-[1px_1px_0px_rgba(0,0,0,0.8)]">Character Info</span>
              <button
                onClick={() => { playSFX('click'); setIsWindowOpen(false); }}
                className="bg-[#d95b5b] hover:bg-[#ff7a7a] w-5 h-5 border border-white text-white flex items-center justify-center text-xs pb-0.5 cursor-pointer"
              >
                x
              </button>
            </div>

            {/* Window Content */}
            <div className="p-4 text-[#3d3324] text-sm space-y-3 cursor-default">
              <div className="flex justify-between border-b border-[#a89f8b] pb-2">
                <span className="font-bold">Name</span>
                <span>{playerName}</span>
              </div>
              <div className="flex justify-between border-b border-[#a89f8b] pb-2">
                <span className="font-bold">Job</span>
                <span>Game Developer</span>
              </div>
              <div className="flex justify-between border-b border-[#a89f8b] pb-2">
                <span className="font-bold">Class</span>
                <span>Archer</span>
              </div>
              <div className="flex justify-between border-b border-[#a89f8b] pb-2">
                <span className="font-bold">Guild</span>
                <span>DigiPen</span>
              </div>
              <div className="flex justify-between border-b border-[#a89f8b] pb-2">
                <span className="font-bold">Weapon</span>
                <span>C++ / Lua</span>
              </div>
              <div className="pt-2 flex gap-2">
                {/* Linked the Quest Log button to open the first project as a default */}
                <button
                  onClick={() => { playSFX('click'); setActiveProject(projectDatabase.engine); }}
                  className="flex-1 text-center bg-[#c2b59b] hover:bg-[#d1c8b4] border border-[var(--color-maple-border)] py-1 shadow-[1px_1px_0px_rgba(0,0,0,0.2)] active:translate-y-[1px] active:shadow-none cursor-pointer text-xs"
                >
                  Quest Log (Works)
                </button>
                <button
                  onClick={() => { playSFX('click'); setIsInventoryOpen(true); }}
                  className="flex-1 text-center bg-[#9bc2b5] hover:bg-[#b4d1c8] border border-[var(--color-maple-border)] py-1 shadow-[1px_1px_0px_rgba(0,0,0,0.2)] active:translate-y-[1px] active:shadow-none cursor-pointer text-xs"
                >
                  Items (Skills)
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* THE PLAYER CHARACTER */}
      <div className="absolute bottom-[90px] left-1/2 -translate-x-1/2 z-20 flex flex-col items-center pointer-events-none">

        <img
          src="/Character/idle.gif"
          alt="Maple Character"
          className="drop-shadow-[2px_2px_0px_rgba(0,0,0,0.5)] object-contain"
          style={{
            /* Adjust translateY if the character is floating due to GIF padding */
            transform: "scaleX(-1) translateY(10px)",
            imageRendering: "pixelated"
          }}
        />

        {/* Tags anchored to the ground line */}
        <div className="flex flex-col items-center">
          <div className="bg-[#1a1a1a]/80 px-2 py-0.5 border-b-2 border-white shadow-md">
            <span className="text-white text-[10px] font-bold drop-shadow-[1px_1px_0px_rgba(0,0,0,1)] uppercase whitespace-nowrap">
              {playerName}
            </span>
          </div>
          <div className="mt-0.5">
            <span className="text-[#00ff00] text-[9px] font-bold drop-shadow-[1px_1px_0px_rgba(0,0,0,1)]">
              DigiPen
            </span>
          </div>
        </div>
      </div>
      {/* BOTTOM HUD */}
      <div className="absolute bottom-0 left-0 w-full h-[90px] bg-[#3d3324] border-t-4 border-[var(--color-maple-border)] p-2 flex gap-4 md:gap-8 items-center justify-center z-50 shadow-[0_-4px_10px_rgba(0,0,0,0.3)]">
        <div className="hidden md:flex flex-col items-center bg-[#241e15] px-4 py-1 border-2 border-[#524531] rounded-full">
          <span className="text-[#a89f8b] text-[10px] leading-none uppercase">Role</span>
          <span className="text-yellow-400 text-xl font-bold drop-shadow-[1px_1px_0px_rgba(0,0,0,1)]">DEV</span>
        </div>
        <div className="flex-1 max-w-xs">
          <div className="flex justify-between text-[10px] text-white mb-0.5 drop-shadow-[1px_1px_0px_rgba(0,0,0,1)]">
            <span>SLEEP</span><span>12 / 100</span>
          </div>
          <div className="h-5 w-full bg-gray-900 border-2 border-[#241e15] rounded-sm overflow-hidden p-[1px]">
            <div className="h-full bg-gradient-to-b from-[#ff3333] to-[#aa1111] animate-pulse" style={{ width: '12%' }}></div>
          </div>
        </div>
        <div className="flex-1 max-w-xs">
          <div className="flex justify-between text-[10px] text-white mb-0.5 drop-shadow-[1px_1px_0px_rgba(0,0,0,1)]">
            <span>CAFFEINE</span><span>9999 / 9999</span>
          </div>
          <div className="h-5 w-full bg-gray-900 border-2 border-[#241e15] rounded-sm overflow-hidden p-[1px]">
            <div className="h-full bg-gradient-to-b from-[#3399ff] to-[#1166dd] w-[100%]"></div>
          </div>
        </div>
        <div className="flex-1 max-w-md hidden sm:block">
          <div className="flex justify-between text-[10px] text-white mb-0.5 drop-shadow-[1px_1px_0px_rgba(0,0,0,1)]">
            <span>Progression</span><span>98.5%</span>
          </div>
          <div className="h-5 w-full bg-gray-900 border-2 border-[#241e15] rounded-sm overflow-hidden p-[1px]">
            <div className="h-full bg-gradient-to-b from-[#ffcc00] to-[#ddaa00] w-[98.5%]"></div>
          </div>
        </div>
        {!isWindowOpen && (
          <button
            onClick={() => { playSFX('window_open'); setIsWindowOpen(true); }}
            className="absolute right-4 bottom-4 bg-[#c2b59b] hover:bg-[#d1c8b4] border-2 border-[var(--color-maple-border)] px-2 py-1 text-[10px] shadow-[1px_1px_0px_rgba(0,0,0,0.2)] active:translate-y-[1px] active:shadow-none cursor-pointer"
          >
            Open Stats
          </button>
        )}
      </div>

    </section>
  );
};

export default Hero;
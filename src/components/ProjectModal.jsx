import React from 'react';
import { motion } from 'framer-motion';
import { useAudio } from '../contexts/AudioContext';

const ProjectModal = ({ project, onClose }) => {
    const { playSFX } = useAudio();
    if (!project) return null;

    return (
        <motion.div initial={{ scale: 0.9, opacity: 0, y: 20 }} animate={{ scale: 1, opacity: 1, y: 0 }} exit={{
            scale: 0.9,
            opacity: 0, y: 20
        }} drag dragMomentum={false} // Added a large z-index so it always floats above the character
            window
            className="absolute top-16 left-1/2 -translate-x-1/2 md:translate-x-0 md:left-1/3 w-[90%] max-w-[420px] bg-[var(--color-maple-ui)] border-2 border-[var(--color-maple-border)] shadow-[8px_8px_0px_rgba(0,0,0,0.4)] rounded-sm z-[60]">
            {/* Window Header (Draggable Area) */}
            <div
                className="bg-[#5c7a99] p-1 flex justify-between items-center border-b-2 border-[var(--color-maple-border)] cursor-move">
                <div className="flex items-center gap-2">
                    <span
                        className="bg-yellow-400 text-black text-[9px] font-bold px-1 py-0.5 rounded-sm border border-yellow-600">
                        QUEST
                    </span>

                    <span className="text-white text-xs tracking-widest drop-shadow-[1px_1px_0px_rgba(0,0,0,0.8)]">
                        Quest Log
                    </span>
                </div>
                <button onClick={() => { playSFX('click'); onClose(); }}
                    className="bg-[#d95b5b] hover:bg-[#ff7a7a] w-5 h-5 border border-white text-white flex items-center justify-center text-xs pb-0.5 cursor-pointer">
                    x
                </button>
            </div>

            {/* Window Content */}
            <div className="p-4 text-[#3d3324] cursor-default">

                {/* Quest Title */}
                <h2
                    className="text-xl font-bold border-b-2 border-[#a89f8b] pb-2 mb-3 drop-shadow-[1px_1px_0px_rgba(255,255,255,0.8)]">
                    {project.title}
                </h2>

                {/* Project "Screenshot" (Retro CRT style container) */}
                <div
                    className="w-full h-40 bg-[#1e293b] border-2 border-[#524531] rounded-sm mb-4 relative overflow-hidden flex items-center justify-center shadow-[inset_0_0_10px_rgba(0,0,0,0.8)]">
                    {/* We will replace this text with actual <img> or <video> tags later! */}
                    <span className="text-[#38bdf8] font-mono text-xs opacity-50 animate-pulse">[ NO SIGNAL / INSERT SPRITE
                        GIF ]</span>

                    {/* Scanline overlay for that retro screen effect */}
                    <div
                        className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_50%,transparent_50%)] bg-[length:100%_4px] pointer-events-none">
                    </div>
                </div>

                {/* Quest Details */}
                <div className="mb-4">
                    <h3 className="text-xs font-bold text-[#6b5c43] mb-1">Quest Details:</h3>
                    <p className="text-sm leading-relaxed">
                        {project.description}
                    </p>
                </div>

                {/* Skills Gained (Tech Stack) */}
                <div className="mb-5">
                    <h3 className="text-xs font-bold text-[#6b5c43] mb-1.5">Rewards (Tech Gained):</h3>
                    <div className="flex flex-wrap gap-1.5">
                        {project.tech.map((t, i) => (
                            <span key={i}
                                className="text-[10px] bg-[#c2b59b] text-[#3d3324] px-2 py-0.5 border border-[#8e7c61] shadow-[1px_1px_0px_rgba(0,0,0,0.1)]">
                                + {t}
                            </span>
                        ))}
                    </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-2 border-t-2 border-[#a89f8b] pt-3">
                    <button
                        onClick={() => playSFX('click')}
                        className="flex-1 bg-[#4b7a47] hover:bg-[#5a9155] text-white border-2 border-[#2c4a2a] py-1.5 text-xs font-bold shadow-[2px_2px_0px_rgba(0,0,0,0.3)] active:translate-y-[2px] active:shadow-none cursor-pointer drop-shadow-[1px_1px_0px_rgba(0,0,0,1)]">
                        [ ENTER PORTAL ]
                    </button>
                    <button
                        onClick={() => playSFX('click')}
                        className="flex-1 bg-[#c2b59b] hover:bg-[#d1c8b4] text-[#3d3324] border-2 border-[#6b5c43] py-1.5 text-xs font-bold shadow-[2px_2px_0px_rgba(0,0,0,0.3)] active:translate-y-[2px] active:shadow-none cursor-pointer">
                        View Source Code
                    </button>
                </div>

            </div>
        </motion.div>
    );
};

export default ProjectModal;
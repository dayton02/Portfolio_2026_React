import React from 'react';
import { useAudio } from '../contexts/AudioContext';

const ProjectPortal = ({ xPosition, title, subtitle, tech, onClick }) => {
    const { playSFX } = useAudio();

    const handlePortalClick = () => {
        playSFX('portal');
        onClick();
    };

    return (
        <div
            className="absolute bottom-[180px] z-10 group cursor-pointer"
            style={{ left: xPosition }}
            onClick={handlePortalClick}
        >
            {/* 1. THE PROJECT TEASE */}
            <div className="absolute bottom-24 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none animate-tooltip z-20 w-max">

                {/* 'CLICK' Arrow Indicator */}
                <div className="mb-2 text-center animate-bounce">
                    <span className="bg-yellow-400 text-black text-[10px] font-bold px-1.5 py-0.5 rounded-sm border-2 border-yellow-600 shadow-sm">
                        ▲ CLICK
                    </span>
                </div>

                {/* The Project Info Box */}
                <div className="bg-[#1e293b]/95 border-2 border-[#94a3b8] rounded-sm p-2 shadow-[4px_4px_0px_rgba(0,0,0,0.5)]">
                    <h4 className="text-[#38bdf8] text-sm font-bold drop-shadow-[1px_1px_0px_rgba(0,0,0,1)] mb-1">
                        {title}
                    </h4>
                    <p className="text-white text-[10px] drop-shadow-[1px_1px_0px_rgba(0,0,0,1)] mb-1">
                        {subtitle}
                    </p>
                    <div className="flex gap-1 mt-1.5">
                        {tech.map((t, i) => (
                            <span key={i} className="text-[8px] bg-black/50 text-[#a7f3d0] px-1 border border-[#059669]">
                                {t}
                            </span>
                        ))}
                    </div>
                </div>
            </div>

            {/* 2. THE PORTAL VISUAL */}
            <div className="relative w-12 h-20 animate-portal -translate-x-1/2 flex justify-center items-end">
                <div className="absolute w-8 h-16 bg-cyan-300 rounded-[100%] blur-[2px] opacity-80"></div>
                <div className="absolute w-12 h-20 border-4 border-cyan-400 rounded-[100%] blur-[1px] opacity-60"></div>
                <div className="absolute -bottom-2 w-16 h-4 bg-black/40 rounded-[100%] blur-[2px]"></div>
            </div>

        </div>
    );
};

export default ProjectPortal;
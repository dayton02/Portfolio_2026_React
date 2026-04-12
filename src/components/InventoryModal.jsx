import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useAudio } from '../contexts/AudioContext';

const InventoryModal = ({ onClose }) => {
    const { playSFX } = useAudio();
    const [activeTab, setActiveTab] = useState('Equip');

    // Your Tech Stack as Inventory Items
    const inventoryData = {
        Equip: [
            { name: "C++ Engine", type: "Custom Core", rarity: "Legendary" },
            { name: "AEngine", type: "Framework", rarity: "Rare" },
            { name: "React", type: "Web Lib", rarity: "Epic" },
            { name: "Tailwind", type: "CSS Lib", rarity: "Common" }
        ],
        Use: [
            { name: "C++", type: "Language", rarity: "Legendary" },
            { name: "Lua", type: "Scripting", rarity: "Epic" },
            { name: "JavaScript", type: "Language", rarity: "Rare" },
            { name: "HTML/CSS", type: "Markup", rarity: "Common" }
        ],
        Setup: [
            { name: "Git", type: "Version Control", rarity: "Epic" },
            { name: "Visual Studio", type: "IDE", rarity: "Rare" },
            { name: "Procreate", type: "Art Tool", rarity: "Rare" },
            { name: "Vite", type: "Build Tool", rarity: "Epic" }
        ],
        Etc: [
            { name: "Recurve Bow", type: "Ranged Wpn", rarity: "Legendary" },
            { name: "FujiFilm X100", type: "Camera", rarity: "Epic" },
            { name: "Scuba Gear", type: "Water Breathing", rarity: "Rare" },
            { name: "Teh Peng", type: "Consumable", rarity: "Mythic" }
        ]
    };

    const tabs = ['Equip', 'Use', 'Setup', 'Etc'];

    return (
        <motion.div
            initial={{ scale: 0.9, opacity: 0, x: -20 }}
            animate={{ scale: 1, opacity: 1, x: 0 }}
            exit={{ scale: 0.9, opacity: 0, x: -20 }}
            drag
            dragMomentum={false}
            className="absolute top-24 right-10 md:right-32 w-72 bg-[#1e3a5f] border-2 border-[#102030] shadow-[4px_4px_0px_rgba(0,0,0,0.5)] rounded-sm z-50 cursor-move"
        >
            {/* Window Header */}
            <div className="bg-[#4a7299] p-1 flex justify-between items-center border-b-2 border-[#102030] cursor-move">
                <span className="text-white text-xs px-2 tracking-widest drop-shadow-[1px_1px_0px_rgba(0,0,0,0.8)] font-bold">Item Inventory</span>
                <button
                    onClick={() => { playSFX('click'); onClose(); }}
                    className="bg-[#d95b5b] hover:bg-[#ff7a7a] w-5 h-5 border border-white text-white flex items-center justify-center text-xs pb-0.5 cursor-pointer"
                >
                    x
                </button>
            </div>

            {/* Inventory Tabs */}
            <div className="flex bg-[#2c4e70] border-b-2 border-[#102030]">
                {tabs.map((tab) => (
                    <button
                        key={tab}
                        onClick={() => { playSFX('click'); setActiveTab(tab); }}
                        className={`flex-1 text-[10px] py-1.5 font-bold border-r border-[#102030] ${activeTab === tab
                            ? 'bg-[#1e3a5f] text-yellow-400 border-b-0'
                            : 'bg-[#3b5e80] text-gray-300 border-b-2 hover:bg-[#4a7299]'
                            }`}
                    >
                        {tab}
                    </button>
                ))}
            </div>

            {/* Grid Content */}
            <div className="p-3 bg-[#1e3a5f]">
                <div className="grid grid-cols-4 gap-2 bg-[#152a45] p-2 border-2 border-[#102030] min-h-[160px] content-start">
                    {inventoryData[activeTab].map((item, i) => (
                        <div
                            key={i}
                            className="group relative w-12 h-12 bg-[#2c4e70] border-2 border-[#102030] hover:border-yellow-400 flex items-center justify-center cursor-help shadow-[inset_1px_1px_0px_rgba(255,255,255,0.2)]"
                        >
                            {/* Item Icon Placeholder (Initials for now) */}
                            <span className="text-[10px] font-bold text-[#8eb0d0] group-hover:text-white drop-shadow-md">
                                {item.name.substring(0, 3).toUpperCase()}
                            </span>

                            {/* Classic Item Tooltip */}
                            <div className="absolute top-14 left-1/2 -translate-x-1/2 w-32 bg-[#1e293b]/95 border-2 border-[#94a3b8] rounded-sm p-2 shadow-[4px_4px_0px_rgba(0,0,0,0.5)] opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-50">
                                <p className="text-white text-xs font-bold drop-shadow-[1px_1px_0px_rgba(0,0,0,1)] mb-1">{item.name}</p>
                                <p className="text-yellow-400 text-[9px] drop-shadow-[1px_1px_0px_rgba(0,0,0,1)] mb-0.5">{item.type}</p>
                                <p className="text-gray-400 text-[9px]">{item.rarity}</p>
                            </div>
                        </div>
                    ))}

                    {/* Empty Slots to make it look like a real inventory grid */}
                    {[...Array(8)].map((_, i) => (
                        <div key={`empty-${i}`} className="w-12 h-12 bg-[#2c4e70] border-2 border-[#102030] shadow-[inset_1px_1px_0px_rgba(255,255,255,0.1)]"></div>
                    ))}
                </div>

                {/* Currency/Meso Area at bottom */}
                <div className="mt-2 flex justify-between items-center bg-[#152a45] border-2 border-[#102030] px-2 py-1">
                    <span className="text-yellow-400 text-[10px] font-bold">MESO</span>
                    <span className="text-white text-[10px] drop-shadow-[1px_1px_0px_rgba(0,0,0,1)]">999,999,999</span>
                </div>
            </div>
        </motion.div>
    );
};

export default InventoryModal;
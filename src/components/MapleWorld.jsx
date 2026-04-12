import React from 'react';

const MapleWorld = () => {
    return (
        <div className="absolute inset-0 w-full h-full z-0 overflow-hidden pointer-events-none">

            {/* Layer 1: Arcana Background */}
            <div 
                className="absolute inset-0 bg-cover bg-bottom bg-no-repeat"
                style={{ backgroundImage: "url('/Character/Arcana.png')" }}
            >
                {/* A subtle dark gradient at the bottom to blend the background into the UI HUD */}
                <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-[#050b14] to-transparent pointer-events-none"></div>
            </div>

        </div>
    );
};

export default MapleWorld;
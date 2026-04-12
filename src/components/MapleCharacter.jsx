import React, { useState, useEffect } from 'react';

const MapleCharacter = ({
  action = "stand1",
  frameCount = 4,
  delay = 500,
  folder = "/Character/default/0",
  flip = true,
  offsetX = 0,
  offsetY = 0,
  playerName = "Guest"
}) => {
  const [frame, setFrame] = useState(0);

  useEffect(() => {
    for (let i = 0; i < frameCount; i++) {
      const img = new Image();
      img.src = `${folder}/${action}_${i}.png`;
    }
  }, [action, frameCount, folder]);

  const delays = Array.isArray(delay) ? delay : Array(frameCount).fill(delay);

  useEffect(() => {
    let timeoutId = null;
    const playNextFrame = (currentFrame) => {
      timeoutId = setTimeout(() => {
        const next = (currentFrame + 1) % frameCount;
        setFrame(next);
        playNextFrame(next);
      }, delays[currentFrame]);
    };
    playNextFrame(0);
    return () => clearTimeout(timeoutId);
  }, [action, frameCount, delay]);

  return (
    /* The container's bottom is now the "ground line" */
    <div className="relative flex flex-col items-center pointer-events-none" style={{ width: 80, height: 80 }}>
      {/* THE SPRITE */}
      <img
        src={`${folder}/${action}_${frame}.png`}
        alt="Maple Character"
        className="absolute drop-shadow-[2px_2px_0px_rgba(0,0,0,0.5)]"
        style={{
          bottom: `${offsetY}px`,
          left: `50%`,
          transform: `translateX(calc(-50% + ${offsetX}px)) ${flip ? "scaleX(-1)" : "scaleX(1)"}`,
          transformOrigin: "bottom center",
          imageRendering: "pixelated"
        }}
      />

      {/* THE NAME TAGS: Anchored to the bottom of the parent div */}
      <div className="absolute top-full mt-1 flex flex-col items-center z-30">
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
  );
};

export default MapleCharacter;
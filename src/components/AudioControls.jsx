import React from 'react';
import { useAudio } from '../contexts/AudioContext';

const AudioControls = () => {
  const { isMuted, toggleMute, playSFX } = useAudio();

  const handleToggle = () => {
    playSFX('click');
    toggleMute();
  };

  return (
    <div className="pointer-events-auto">
      <button
        onClick={handleToggle}
        className={`w-10 h-10 rounded-sm border-2 shadow-[2px_2px_0px_rgba(0,0,0,0.3)] flex items-center justify-center cursor-pointer transition-colors ${
          isMuted 
            ? 'bg-[#d95b5b] hover:bg-[#ff7a7a] border-white' 
            : 'bg-[#9bc2b5] hover:bg-[#b4d1c8] border-[var(--color-maple-border)]'
        }`}
        title={isMuted ? "Unmute Audio" : "Mute Audio"}
      >
        {isMuted ? (
          <span className="text-white font-bold text-sm">🔇</span>
        ) : (
          <span className="text-white font-bold text-sm">🔊</span>
        )}
      </button>
    </div>
  );
};

export default AudioControls;

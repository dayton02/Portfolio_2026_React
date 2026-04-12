import React, { useState } from 'react';
import { useAudio } from '../contexts/AudioContext';

const LoginScreen = ({ onLogin }) => {
  const { initAudio, playSFX } = useAudio();
  const [username, setUsername] = useState('Guest');

  const handleLogin = (e) => {
    e.preventDefault();
    initAudio();
    playSFX('login');
    // Add a slight delay for the sound to play before hiding
    setTimeout(() => {
      onLogin(username);
    }, 400);
  };

  return (
    <div className="absolute inset-0 w-full h-[100svh] bg-[var(--color-maple-bg)] bg-opacity-95 z-[9999] flex flex-col items-center justify-center font-sans overflow-hidden">

      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none opacity-20" style={{
        backgroundImage: 'radial-gradient(#3d3324 2px, transparent 2px)',
        backgroundSize: '40px 40px'
      }}></div>

      <div className="relative z-10 w-80 bg-[var(--color-maple-ui)] border-4 border-[#8c9fb3] shadow-[0px_10px_20px_rgba(0,0,0,0.5)] rounded-sm p-6 flex flex-col items-center animate-bounce-slow">

        {/* Title */}
        <h1 className="text-3xl font-black text-white mb-2 drop-shadow-[2px_2px_0px_#4a6b8c] tracking-wider text-center uppercase">
          Dayton's<br />Portfolio
        </h1>

        <p className="text-[#3d3324] text-xs font-bold mb-6 tracking-wide">v0.62 Beta</p>

        {/* Form */}
        <form onSubmit={handleLogin} className="w-full flex flex-col gap-4">
          <div className="flex flex-col gap-1">
            <label className="text-white text-xs font-bold drop-shadow-[1px_1px_0px_rgba(0,0,0,0.8)]">CHARACTER NAME</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Enter your name"
              maxLength={12}
              required
              className="w-full bg-white border-2 border-[#8c9fb3] px-2 py-1 text-sm outline-none text-[#3d3324] font-bold text-center uppercase"
            />
          </div>

          <button
            type="submit"
            className="mt-4 w-full bg-gradient-to-b from-[#6cb0ff] to-[#3a8cee] hover:from-[#8ec4ff] hover:to-[#579ff5] border-2 border-white text-white font-bold py-2 shadow-[2px_2px_0px_rgba(0,0,0,0.3)] active:translate-y-[2px] active:shadow-none transition-all cursor-pointer"
          >
            ENTER WORLD
          </button>
        </form>

      </div>

      <p className="absolute bottom-8 text-white/50 text-xs font-bold tracking-widest pointer-events-none">
        PRESS ENTER WORLD TO INITIALIZE AUDIO
      </p>
    </div>
  );
};

export default LoginScreen;

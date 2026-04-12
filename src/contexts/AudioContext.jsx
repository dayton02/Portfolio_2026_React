import React, { createContext, useContext, useState, useRef, useEffect } from 'react';

const AudioContext = createContext();

export const useAudio = () => useContext(AudioContext);

export const AudioProvider = ({ children }) => {
  const [isMuted, setIsMuted] = useState(false);
  const [bgmReady, setBgmReady] = useState(false);
  
  // Using a placeholder 8-bit track for BGM
  const bgmRef = useRef(new Audio('https://cdn.pixabay.com/download/audio/2022/02/10/audio_fc48af67b2.mp3?filename=8-bit-background-music-for-arcade-game-come-on-mario-164702.mp3'));
  const audioCtxRef = useRef(null);

  useEffect(() => {
    bgmRef.current.loop = true;
    bgmRef.current.volume = 0.3; // Default volume
    
    // We only create the Web Audio Context after user interaction or when needed
    // to comply with browser autoplay policies.
  }, []);

  useEffect(() => {
    if (bgmRef.current) {
      bgmRef.current.muted = isMuted;
    }
  }, [isMuted]);

  const initAudio = () => {
    if (!audioCtxRef.current) {
      audioCtxRef.current = new (window.AudioContext || window.webkitAudioContext)();
    }
    if (audioCtxRef.current.state === 'suspended') {
      audioCtxRef.current.resume();
    }
    
    setBgmReady(true);
    bgmRef.current.play().catch(e => console.log('BGM Play prevented:', e));
  };

  const toggleMute = () => {
    setIsMuted(!isMuted);
  };

  // --- Synthesized Sound Effects (No files needed!) ---
  
  const playSynthesizedSound = (type) => {
    if (isMuted || !audioCtxRef.current) return;
    
    const ctx = audioCtxRef.current;
    const osc = ctx.createOscillator();
    const gainNode = ctx.createGain();
    
    osc.connect(gainNode);
    gainNode.connect(ctx.destination);
    
    const now = ctx.currentTime;
    
    if (type === 'click') {
      // Short high pitched blip
      osc.type = 'square';
      osc.frequency.setValueAtTime(800, now);
      osc.frequency.exponentialRampToValueAtTime(1200, now + 0.05);
      gainNode.gain.setValueAtTime(0.1, now);
      gainNode.gain.exponentialRampToValueAtTime(0.01, now + 0.1);
      osc.start(now);
      osc.stop(now + 0.1);
    } 
    else if (type === 'portal') {
      // Ascending mystical bloop
      osc.type = 'sine';
      osc.frequency.setValueAtTime(300, now);
      osc.frequency.linearRampToValueAtTime(800, now + 0.3);
      gainNode.gain.setValueAtTime(0.2, now);
      gainNode.gain.linearRampToValueAtTime(0.01, now + 0.3);
      osc.start(now);
      osc.stop(now + 0.3);
    }
    else if (type === 'window_open') {
      // Quick double blip
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(400, now);
      osc.frequency.setValueAtTime(600, now + 0.05);
      gainNode.gain.setValueAtTime(0.15, now);
      gainNode.gain.linearRampToValueAtTime(0.01, now + 0.15);
      osc.start(now);
      osc.stop(now + 0.15);
    }
    else if (type === 'login') {
      // Triumphant chord/arpeggio
      osc.type = 'square';
      osc.frequency.setValueAtTime(440, now);
      osc.frequency.setValueAtTime(554.37, now + 0.1); // C#
      osc.frequency.setValueAtTime(659.25, now + 0.2); // E
      osc.frequency.setValueAtTime(880, now + 0.3); // A
      gainNode.gain.setValueAtTime(0.2, now);
      gainNode.gain.linearRampToValueAtTime(0.01, now + 0.6);
      osc.start(now);
      osc.stop(now + 0.6);
    }
  };

  const playSFX = (type) => {
    playSynthesizedSound(type);
  };

  return (
    <AudioContext.Provider value={{ isMuted, toggleMute, initAudio, playSFX, bgmReady }}>
      {children}
    </AudioContext.Provider>
  );
};

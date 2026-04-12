import React, { useState } from 'react';
import Hero from './components/Hero';
import LoginScreen from './components/LoginScreen';
import AudioControls from './components/AudioControls';
import { AudioProvider } from './contexts/AudioContext';

function AppContent() {
  const [playerName, setPlayerName] = useState(null);

  return (
    <div className="w-full h-[100svh] relative overflow-hidden">
      {!playerName && <LoginScreen onLogin={(name) => setPlayerName(name)} />}
      
      {playerName && (
        <>
          <Hero playerName={playerName} />
        </>
      )}
    </div>
  );
}

function App() {
  return (
    <AudioProvider>
      <AppContent />
    </AudioProvider>
  );
}

export default App;
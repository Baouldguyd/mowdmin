import  { useState } from 'react';



function AudioPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [audioSrc, setAudioSrc] = useState('');

  const togglePlay = (src) => {
    if (audioSrc === src) {
      setIsPlaying(!isPlaying);
    } else {
      setAudioSrc(src);
      setIsPlaying(true);
    }
  };

  return (
    <div className="App">
      <h1>Audio Player</h1>
      <div className="audio-controls">
        <audio src={audioSrc} controls autoPlay={isPlaying} />
        <button onClick={() => togglePlay('audio-file.mp3')}>
          {isPlaying ? 'Pause' : 'Play'}
        </button>
      </div>
    </div>
  );
}

export default AudioPlayer;
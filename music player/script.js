// Get HTML elements
const audio = document.getElementById('audio');
const playButton = document.getElementById('play');
const pauseButton = document.getElementById('pause');
const stopButton = document.getElementById('stop');
const songInfo = document.getElementById('song-info');

// Play button functionality
playButton.addEventListener('click', () => {
  audio.play();
  songInfo.textContent = 'Song: Playing...';
});

// Pause button functionality
pauseButton.addEventListener('click', () => {
  audio.pause();
  songInfo.textContent = 'Song: Paused';
});

// Stop button functionality
stopButton.addEventListener('click', () => {
  audio.pause();
  audio.currentTime = 0;
  songInfo.textContent = 'Song: Stopped';
});

document.addEventListener("DOMContentLoaded", () => {
  const video = document.getElementById("player1");
  const playButton = document.getElementById("play");
  const pauseButton = document.getElementById("pause");
  const slowerButton = document.getElementById("slower");
  const fasterButton = document.getElementById("faster");
  const skipButton = document.getElementById("skip");
  const muteButton = document.getElementById("mute");
  const volumeSlider = document.getElementById("slider");
  const volumeDisplay = document.getElementById("volume");
  const vintageButton = document.getElementById("vintage");
  const originalButton = document.getElementById("orig");

  // Initialize video settings
  video.autoplay = false;
  video.loop = false;

  // Play the video
  playButton.addEventListener("click", () => {
    video.play();
    volumeDisplay.textContent = `${Math.round(video.volume * 100)}%`;

  });

  // Pause the video
  pauseButton.addEventListener("click", () => {
    video.pause();
  });

  // Slow down the video
  slowerButton.addEventListener("click", () => {
    video.playbackRate = Math.max(video.playbackRate * 0.9, 0.1);
    console.log(`New speed: ${video.playbackRate.toFixed(5)}`);
  });

  // Speed up the video
  fasterButton.addEventListener("click", () => {
    video.playbackRate = Math.min(video.playbackRate / 0.9, 5);
    console.log(`New speed: ${video.playbackRate.toFixed(5)}`);
  });

  // Skip ahead
  skipButton.addEventListener("click", () => {
    video.currentTime = (video.currentTime + 10) % video.duration;
    console.log(`Current time: ${video.currentTime.toFixed(2)} seconds`);
  });

  // Mute/unmute the video
  muteButton.addEventListener("click", () => {
    video.muted = !video.muted;
    muteButton.textContent = video.muted ? "Unmute" : "Mute";
  });

  // Adjust volume
  volumeSlider.addEventListener("input", () => {
    video.volume = volumeSlider.value / 100;
    volumeDisplay.textContent = `${Math.round(video.volume * 100)}%`;
  });

  // Apply oldSchool styling
  vintageButton.addEventListener("click", () => {
    video.classList.add("oldSchool");
  });

  // Remove oldSchool styling
  originalButton.addEventListener("click", () => {
    video.classList.remove("oldSchool");
  });
});


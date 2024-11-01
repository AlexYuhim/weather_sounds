export function setText(el, text) {
  return (el.innerHTML = text);
}

export function createEL(tagName, classes = '') {
  const el = document.createElement(tagName);
  if (classes) {
    el.classList.add(classes);
  }
  return el;
}

export function playTrack(audioTrack, playButton, currentTrack) {
  if (audioTrack.paused) {
    setText(playButton, 'pause');
    audioTrack.play();
  } else {
    setText(playButton, 'play');
    audioTrack.pause();
  }
}

export function stopAllTrack(allTracks) {
  allTracks.forEach((el) => {
    console.log(el.pause());
  });
}

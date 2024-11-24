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

export function playTrack(audioTrack, playButton) {
  if (audioTrack.paused) {
    setText(playButton, 'pause');
    audioTrack.play();
  } else {
    setText(playButton, 'play');
    audioTrack.pause();
  }
}

export function stopAllTrack(allTracks, allBtn) {
  allTracks.forEach((el) => {
    el.pause();
  });
  allBtn.forEach((el) => {
    setText(el, 'play');
  });
}

export function setAttributes(el, attrs = {}) {
  el = Object.keys(attrs).map((key) => el.setAttribute(key, attrs[key]));
}

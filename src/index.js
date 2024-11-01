import './scss/style.scss';
import { dataTreks } from './API';
import { createEL, setText, playTrack, stopAllTrack } from './utils';
const root = document.getElementById('app');

dataTreks.forEach((el) => {
  const { icons, background, trek } = el;
  const audioBox = createEL('div', 'wr-track');
  audioBox.style.backgroundImage = `url(${background})`;

  const audioIcons = createEL('img');
  audioIcons.src = icons;

  const playButton = createEL('button');
  setText(playButton, 'play');

  const audioTrack = createEL('audio');
  audioTrack.src = trek;

  audioBox.append(audioIcons, audioTrack, playButton);
  root.append(audioBox);
});

const allTracks = document.querySelector('.container');
console.log('allTracks', allTracks);
const allAudioTag = document.querySelectorAll('audio');
let currentTrack = '';
allTracks.addEventListener('click', (e) => {
  const parent = e.target.closest('div');
  const track = parent.querySelector('audio');
  const playButton = parent.querySelector('button');
  if (currentTrack == track) {
    playTrack(track, playButton);
  } else {
    stopAllTrack(allAudioTag);
    playTrack(track, playButton);
  }
  currentTrack = track;
});

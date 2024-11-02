import './scss/style.scss';
import { dataTreks } from './API';
import {
  createEL,
  setText,
  playTrack,
  stopAllTrack,
  setAttributes,
} from './utils';

const root = document.getElementById('app');

const blockBlur = createEL('div', 'blur');
root.append(blockBlur);
const blockTrack = createEL('div', 'blockTracks');
const blockValue = createEL('div', 'blockVolume');
const volumeControl = createEL('input');

setAttributes(volumeControl, {
  type: 'range',
  min: '0',
  step: 'any',
  max: '1',
  value: '0.5',
});

blockValue.append(volumeControl);

blockBlur.append(blockValue);

dataTreks.forEach((el) => {
  const { icons, background, trek } = el;
  const audioBox = createEL('figure', 'box-track');
  audioBox.style.backgroundImage = `url(${background})`;

  const audioIcons = createEL('img');
  audioIcons.src = icons;

  const playButton = createEL('button');
  setText(playButton, 'play');

  const audioTrack = createEL('audio');
  audioTrack.src = trek;
  volumeControl.addEventListener('input', function () {
    audioTrack.volume = volumeControl.value;
  });

  audioBox.append(audioIcons, audioTrack, playButton);
  blockTrack.append(audioBox);
  blockBlur.append(blockTrack);
});

const allTracks = document.querySelector('.container');
let currentTrack = '';

allTracks.addEventListener('click', (e) => {
  if (!e.target.closest('.box-track')) return false;
  const parent = e.target.closest('.box-track');
  const compStyles = getComputedStyle(parent).backgroundImage;

  e.currentTarget.style.backgroundImage = compStyles;

  const track = parent.querySelector('audio');
  const playButton = parent.querySelector('button');
  if (currentTrack == track) {
    playTrack(track, playButton);
  } else {
    const allAudioTag = allTracks.querySelectorAll('audio');
    const allBtn = allTracks.querySelectorAll('button');
    stopAllTrack(allAudioTag, allBtn);
    playTrack(track, playButton);
  }
  currentTrack = track;
});

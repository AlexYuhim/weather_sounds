import './scss/style.scss';
import { dataTreks } from './API';
import {
  createEL,
  setText,
  playTrack,
  stopAllTrack,
  setAttributes,
} from './utils';

const root = <HTMLElement>document.getElementById('app');

const blockBlur = createEL('div', 'blur');
root.append(blockBlur);
const blockTrack = createEL('div', 'blockTracks');
const blockValue = createEL('div', 'blockVolume');
const volumeControl = <HTMLInputElement>createEL('input');
const attrVolumInput: {
  type: string;
  min: number;
  step: string;
  max: number;
  value: number;
} = {
  type: 'range',
  min: 0,
  step: 'any',
  max: 1,
  value: 0.5,
};

setAttributes(volumeControl, attrVolumInput);

blockValue.append(volumeControl);

blockBlur.append(blockValue);

dataTreks.forEach((el) => {
  const { id, icon, background, track } = el;
  const audioBox = createEL('figure', 'box-track', `${id}`);
  audioBox.style.backgroundImage = `url(${background})`;

  const audioIcons = <HTMLImageElement>createEL('img');
  audioIcons.src = icon;

  const playButton = createEL('button');
  setText(playButton, 'play');

  const audioTrack = <HTMLAudioElement>createEL('audio');
  audioTrack.src = track;
  audioTrack.loop = true;

  volumeControl.addEventListener('input', function () {
    audioTrack.volume = Number(volumeControl.value);
  });

  audioBox.append(audioIcons, audioTrack, playButton);
  blockTrack.append(audioBox);
  blockBlur.append(blockTrack);
});

const allTracks = <HTMLElement>document.querySelector('.container');
let currentTrack: string;

allTracks.addEventListener('click', (e) => {
  const parent = (e.target as HTMLElement).closest('.box-track');
  if (!parent) return false;
  const compStyles = getComputedStyle(parent).backgroundImage;
  (e.currentTarget as HTMLElement).style.backgroundImage = compStyles;

  const track = <HTMLAudioElement>parent.querySelector('audio');
  const playButton = <HTMLButtonElement>parent.querySelector('button');
  if (currentTrack == parent.id) {
    playTrack(track, playButton);
  } else {
    const allAudioTag: NodeListOf<HTMLAudioElement> =
      allTracks.querySelectorAll('audio');
    const allBtn = allTracks.querySelectorAll('button');
    stopAllTrack(allAudioTag, allBtn);
    playTrack(track, playButton);
  }
  currentTrack = parent.id;
});

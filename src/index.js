import './scss/style.scss';
import { dataTreks } from './utils';
const root = document.getElementById('app');

dataTreks.forEach((el) => {
  const { icons, background, trek } = el;
  const audioplayer = document.createElement('div');
  audioplayer.classList.add('wr-trecks');
  audioplayer.style.backgroundImage = background;
  const audioIcons = document.createElement('img');
  audioIcons.src = icons;
  const audioTrack = document.createElement('audio');
  audioTrack.src = trek;
  audioTrack.controls = true;

  audioplayer.append(audioIcons, audioTrack);
  root.append(audioplayer);
});

console.log('root', root);

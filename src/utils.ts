type htmlType =
  | HTMLElement
  | HTMLImageElement
  | HTMLAudioElement
  | HTMLInputElement;

export function setText(el: htmlType, text: string): string {
  return (el.innerHTML = text);
}

export function createEL(
  tagName: string,
  classes: string = '',
  id: string = ''
): htmlType {
  const el: htmlType = document.createElement(tagName);

  if (classes) {
    el.classList.add(classes);
  }

  if (id) {
    el.setAttribute('id', id);
  }

  return el;
}

export function playTrack(
  audioTrack: HTMLAudioElement,
  playButton: HTMLButtonElement
): void {
  if (audioTrack.paused) {
    setText(playButton, 'pause');
    audioTrack.play();
  } else {
    setText(playButton, 'play');
    audioTrack.pause();
  }
}

export function stopAllTrack(
  allTracks: NodeListOf<HTMLAudioElement>,
  allBtn: NodeListOf<HTMLButtonElement>
): void {
  allTracks.forEach((el: HTMLAudioElement) => {
    el.pause();
  });
  allBtn.forEach((el: HTMLButtonElement) => {
    setText(el, 'play');
  });
}

export function setAttributes(el: HTMLInputElement, attrs: any = {}): htmlType {
  Object.keys(attrs).map((key) => el.setAttribute(key, attrs[key]));
  return el;
}

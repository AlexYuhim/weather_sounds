(()=>{"use strict";const s=document.getElementById("app");[{icons:"/assets/icons/sun.svg",background:"assets/img/summer-bg.jpg",trek:"assets/sounds/summer.mp3"},{icons:"./assets/icons/cloud-rain.svg",background:"./assets/img/rainy-bg.jpg",trek:"./assets/sounds/rain.mp3"},{icons:"./assets/icons/cloud-rain.svg",background:"./assets/img/winter-bg.jpg",trek:"./assets/sounds/winter.mp3"}].forEach((e=>{const{icons:n,background:t,trek:o}=e,c=document.createElement("div");c.classList.add("wr-trecks"),c.style.backgroundImage=t;const a=document.createElement("img");a.src=n;const r=document.createElement("audio");r.src=o,r.controls=!0,c.append(a,r),s.append(c)})),console.log("root",s)})();
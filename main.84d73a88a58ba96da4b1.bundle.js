(()=>{"use strict";function s(s,e){return s.innerHTML=e}function e(s){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";const t=document.createElement(s);return e&&t.classList.add(e),t}const t=document.getElementById("app");[{dataAction:"sun",icons:"./assets/icons/sun.svg",background:"./assets/img/summer-bg.jpg",trek:"./assets/sounds/summer.mp3"},{icons:"./assets/icons/cloud-rain.svg",background:"./assets/img/rainy-bg.jpg",trek:"./assets/sounds/rain.mp3"},{icons:"./assets/icons/cloud-snow.svg",background:"./assets/img/winter-bg.jpg",trek:"./assets/sounds/winter.mp3"}].forEach((n=>{const{icons:o,background:c,trek:a}=n,r=e("div","wr-track");r.style.backgroundImage=`url(${c})`;const u=e("img");u.src=o;const i=e("button");s(i,"play");const l=e("audio");l.src=a,r.append(u,l,i),t.append(r)}));const n=document.querySelector(".container");console.log("allTracks",n);const o=n.querySelectorAll("audio"),c=n.querySelectorAll("button");let a="";n.addEventListener("click",(e=>{const t=e.target.closest("div"),n=t.querySelector("audio"),r=t.querySelector("button");a==n||function(e,t){e.forEach((s=>{s.pause()})),t.forEach((e=>{s(e,"play")}))}(o,c),function(e,t){e.paused?(s(t,"pause"),e.play()):(s(t,"play"),e.pause())}(n,r),a=n}))})();
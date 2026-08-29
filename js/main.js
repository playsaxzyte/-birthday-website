/*
  Main UI / animation logic.
  Usually you should not need to edit this file.
*/


if ("scrollRestoration" in history) {
    history.scrollRestoration = "manual";
}

window.scrollTo(0, 0);
const loader = document.getElementById("loader");
const site = document.getElementById("site");
const bar = document.getElementById("bar");
const pct = document.getElementById("pct");

document.title = `${SITE.name} — a little corner of the internet`;
document.getElementById("brand").innerHTML = `${SITE.name.toUpperCase()} <small>/ ${SITE.birthday.slice(0,5).replace(" ",".")}</small>`;
document.getElementById("footerBrand").textContent = `${SITE.name.toUpperCase()} / ${SITE.birthday.slice(0,5).replace(" ",".")}`;
document.getElementById("loaderBrand").textContent = `${SITE.name.toUpperCase()} / ${SITE.birthday.slice(0,5).replace(" ",".")}`;

document.getElementById("heroEyebrow").textContent = SITE.hero.eyebrow;
document.getElementById("heroTitle").innerHTML = SITE.hero.title;
document.getElementById("heroSubtitle").innerHTML = SITE.hero.subtitle;
document.getElementById("archiveDescription").textContent = SITE.archive.description;
document.getElementById("thoughtDescription").textContent = SITE.thoughts.description;




function startLoader() {
  const start = performance.now();
  const duration = 8800;

  function tick(now) {
    const p = Math.min((now - start) / duration, 1);
    const n = Math.floor((1 - (1 - p) ** 2) * 100);
    bar.style.width = `${n}%`;
    pct.textContent = `${String(n).padStart(2, "0")}%`;

    if (p < 1) {
      requestAnimationFrame(tick);
    } else {
      setTimeout(() => {
        loader.style.transition = ".8s";
        loader.style.opacity = "0";
        site.style.visibility = "visible";
        setTimeout(() => loader.remove(), 850);
      }, 250);
    }
  }

  requestAnimationFrame(tick);
}

startLoader();

const progress = document.querySelector(".progress span");
addEventListener("scroll", () => {
  const max = document.documentElement.scrollHeight - innerHeight;
  progress.style.width = `${max ? (scrollY / max) * 100 : 0}%`;
});

const sections = [...document.querySelectorAll("main section[id]")];
const navLinks = [...document.querySelectorAll(".side a")];

sections.forEach(section => {
  new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        navLinks.forEach(a => a.classList.toggle("active", a.hash === `#${entry.target.id}`));
      }
    });
  }, { threshold: 0.4 }).observe(section);
});

/* Build photo archive */
const photoGallery = document.getElementById("photoGallery");
SITE.archive.photos.forEach((photo, i) => {
  const figure = document.createElement("figure");
  figure.innerHTML = `
    <div class="photo photo-${(i % 6) + 1}">
      <img src="media/photos/${photo.file}" alt="${photo.caption}" loading="lazy"
           onerror="this.style.display='none'; this.parentElement.classList.add('placeholder'); this.parentElement.textContent='PHOTO ${String(i+1).padStart(2,'0')}';">
    </div>
    <figcaption>${photo.caption}</figcaption>
  `;
  photoGallery.appendChild(figure);
});

/* Build videos */
const videoGrid = document.getElementById("videoGrid");
SITE.videos.forEach((video, i) => {
  const card = document.createElement("article");
  card.className = "film-card";
  card.innerHTML = `
    <video muted loop playsinline preload="metadata">
      <source src="media/videos/${video.file}" type="video/mp4">
    </video>
    <div class="film-ui">
      <span>${String(i + 1).padStart(2, "0")} / ${video.label}</span>
      <div>
        <button class="mute" aria-label="Unmute video">⌁</button>
        <button class="full" aria-label="Fullscreen video">↗</button>
      </div>
    </div>
  `;
  videoGrid.appendChild(card);

  const v = card.querySelector("video");
  const mute = card.querySelector(".mute");
  const full = card.querySelector(".full");

  card.addEventListener("mouseenter", () => v.play().catch(() => {}));
  card.addEventListener("mouseleave", () => {
    if (!document.fullscreenElement) v.pause();
  });

  mute.addEventListener("click", event => {
    event.stopPropagation();
    v.muted = !v.muted;
    mute.textContent = v.muted ? "⌁" : "◉";
    v.play().catch(() => {});
  });

  full.addEventListener("click", event => {
    event.stopPropagation();
    v.requestFullscreen?.();
  });
});

/* Thoughts typewriter */
const typeTarget = document.getElementById("type");
let phraseIndex = 0;
let charIndex = 0;
let deleting = false;

function typeThought() {
  const phrase = SITE.thoughts.rotating[phraseIndex];
  typeTarget.textContent = phrase.slice(0, charIndex);

  if (!deleting && charIndex < phrase.length) {
    charIndex++;
    setTimeout(typeThought, 38);
  } else if (!deleting) {
    deleting = true;
    setTimeout(typeThought, 1500);
  } else if (charIndex) {
    charIndex--;
    setTimeout(typeThought, 18);
  } else {
    deleting = false;
    phraseIndex = (phraseIndex + 1) % SITE.thoughts.rotating.length;
    setTimeout(typeThought, 450);
  }
}
setTimeout(typeThought, 1000);

/* Lightweight reveal system */
const revealTargets = [
  ...document.querySelectorAll(".heading,.gallery,.film-head,.film-card,.music-inner,.people h2,.person,.thought-inner,.about-inner,.build-row")
];

revealTargets.forEach(el => el.classList.add("reveal"));

const revealIO = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("is-visible");
      revealIO.unobserve(entry.target);
    }
  });
}, { threshold: 0.14, rootMargin: "0px 0px -8% 0px" });

revealTargets.forEach(el => revealIO.observe(el));

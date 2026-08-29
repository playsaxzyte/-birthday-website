
const audio = document.getElementById("audio");
const play = document.getElementById("play");
const next = document.getElementById("next");
const now = document.getElementById("now");
const fill = document.getElementById("fill");
const songList = document.getElementById("songList");

let songIndex = 0;

function loadSong(index, autoplay = true) {
  songIndex = (index + SITE.songs.length) % SITE.songs.length;
  const song = SITE.songs[songIndex];

  now.textContent = song.title;
  audio.src = `media/music/${song.file}`;
  audio.load();

  if (autoplay) audio.play().catch(() => {});
  play.textContent = "Ⅱ";
}

SITE.songs.forEach((song, index) => {
  const button = document.createElement("button");
  button.innerHTML = `
    <span>${String(index + 1).padStart(2, "0")}</span>
    <strong>${song.title}</strong>
    <i>play</i>
  `;
  button.addEventListener("click", () => loadSong(index));
  songList.appendChild(button);
});

play.addEventListener("click", () => {
  if (!audio.src) {
    loadSong(0);
  } else if (audio.paused) {
    audio.play().catch(() => {});
    play.textContent = "Ⅱ";
  } else {
    audio.pause();
    play.textContent = "▶";
  }
});

next.addEventListener("click", () => loadSong(songIndex + 1));

audio.addEventListener("timeupdate", () => {
  fill.style.width = `${audio.duration ? (audio.currentTime / audio.duration) * 100 : 0}%`;
});

audio.addEventListener("ended", () => loadSong(songIndex + 1));

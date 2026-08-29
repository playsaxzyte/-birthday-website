

const peopleModal = document.getElementById("peopleModal");
const peopleClose = document.getElementById("peopleClose");
const modalGallery = document.getElementById("modalGallery");

function closePeople() {
  peopleModal.classList.remove("open");
  peopleModal.setAttribute("aria-hidden", "true");
}

document.getElementById("peopleGrid").innerHTML = Object.entries(SITE.people).map(([key, person], index) => `
  <button class="person" data-cat="${key}">
    <span>${String(index + 1).padStart(2, "0")}</span>
    <strong>${person.title}</strong>
    <small>${person.description} ↗</small>
  </button>
`).join("");

document.querySelectorAll(".person").forEach(button => {
  button.addEventListener("click", () => {
    const person = SITE.people[button.dataset.cat];

    document.getElementById("catKicker").textContent = person.title;
    document.getElementById("catTitle").textContent = person.title;
    document.getElementById("catDesc").textContent = person.description;

    modalGallery.innerHTML = person.photos.map((file, index) => `
      <div class="modal-photo ${index === 2 ? "wide" : ""}">
        <img src="media/people/${button.dataset.cat}/${file}" alt="${person.title} photo ${index + 1}"
             onerror="this.style.display='none'; this.parentElement.textContent='${person.title} / PHOTO ${String(index + 1).padStart(2, "0")}';">
      </div>
    `).join("");

    peopleModal.classList.add("open");
    peopleModal.setAttribute("aria-hidden", "false");
  });
});

peopleClose.addEventListener("click", closePeople);
peopleModal.addEventListener("click", event => {
  if (event.target === peopleModal) closePeople();
});

/* Lore */
const pass = document.getElementById("pass");
const lore = document.getElementById("lore");
const input = document.getElementById("passInput");
const wrong = document.getElementById("wrong");
const loreGallery = document.getElementById("loreGallery");

document.getElementById("loreBtn").addEventListener("click", () => {
  pass.classList.add("open");
  pass.setAttribute("aria-hidden", "false");
  setTimeout(() => input.focus(), 50);
});

document.getElementById("passClose").addEventListener("click", () => {
  pass.classList.remove("open");
  pass.setAttribute("aria-hidden", "true");
});

document.getElementById("passForm").addEventListener("submit", event => {
  event.preventDefault();

  if (input.value === SITE.lore.passphrase) {
    pass.classList.remove("open");
    pass.setAttribute("aria-hidden", "true");
    input.value = "";
    wrong.classList.remove("show");

    loreGallery.innerHTML = SITE.lore.files.map(item => {
      if (item.type === "video") {
        return `
          <div class="modal-photo lore-media">
            <video controls playsinline preload="metadata">
              <source src="media/lore/${item.file}" type="video/mp4">
            </video>
            <span>${item.label}</span>
          </div>
        `;
      }

      return `
        <div class="modal-photo lore-media">
          <img src="media/lore/${item.file}" alt="${item.label}"
               onerror="this.style.display='none'; this.parentElement.classList.add('placeholder');">
          <span>${item.label}</span>
        </div>
      `;
    }).join("");

    lore.classList.add("open");
    lore.setAttribute("aria-hidden", "false");
  } else {
    wrong.classList.add("show");
    input.select();
  }
});

document.getElementById("loreClose").addEventListener("click", () => {
  lore.classList.remove("open");
  lore.setAttribute("aria-hidden", "true");
});

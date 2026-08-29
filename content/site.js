/*
  ==========================================================
  MAKING MY BOY — CONTENT FILE
  ==========================================================
  THIS is the file you will edit most often.

  1. Change text here.
  2. Put media in the matching media/ folder.
  3. Save.
  4. Refresh index.html.

  You do NOT need to edit the HTML for normal content changes.
*/

window.SITE = {
  name: "NAME",
  birthday: "02 October",

  hero: {
    eyebrow: "02 OCTOBER / A LITTLE CORNER OF THE INTERNET",
    title: "HAPPY<br><em>BIRTHDAY, NAME.</em>",
    subtitle: "Everyone gets a story.<br>I'll make one for you."
  },

  archive: {
    description: "Drag, swipe, click. tiny pieces of our friendship.",
    photos: [
      { file: "01.jpg", caption: " / add your caption" },
      { file: "02.jpg", caption: " / add your caption" },
      { file: "03.jpg", caption: " / add your caption" },
      { file: "04.jpg", caption: " / add your caption" },
      { file: "05.jpg", caption: " / add your caption" },
      { file: "06.jpg", caption: " / add your caption" }
    ]
  },

  videos: [
    { file: "01.mp4", label: "US BEING US" },
    { file: "02.mp4", label: "ANOTHER DAY" }
  ],

  songs: [
    { title: "Song One", file: "song-01.mp3" },
    { title: "Song Two", file: "song-02.mp3" },
    { title: "Song Three", file: "song-03.mp3" }
  ],

  people: {
family: {
  title: "FAMILY",
  description: "Add a short family description.",
  photos: ["01.jpg", "02.jpg", "03.jpg", "04.jpg"]
},
friends: {
  title: "FRIENDS",
  description: "Add a short friends description.",
  photos: ["01.jpg", "02.jpg", "03.jpg", "04.jpg"]
},
us: {
  title: "US",
  description: "Add a short description about you two.",
  photos: ["01.jpg", "02.jpg", "03.jpg", "04.jpg"]
}
  },

  thoughts: {
    rotating: [
      "the person who makes ordinary days memorable.",
      "someone I can be completely stupid around.",
      "one of the safest places to be myself.",
      "a genuinely good human, annoyingly enough."
    ],
    description: "Write your personal birthday message here."
  },

  about: {
    text: "Write why you made this site and what you used to build it.",
    note: "Replace the links below with your own references or project links.",
    links: [
      { label: "MY GITHUB ↗", url: "https://github.com/YOUR-USERNAME" },
      { label: "WEB REFERENCES ↗", url: "https://developer.mozilla.org/en-US/docs/Learn_web_development" }
    ]
  },

  lore: {
    /*
      This is a fun front-end easter egg, NOT real security.
      Do not put a real laptop/account password here.
    */
    passphrase: "pass",
    files: [
      { label: "VLOG 01", file: "01.mp4", type: "video" },
      { label: "VLOG 02", file: "02.mp4", type: "video" },
      { label: "FUNNY PHOTO 01", file: "01.jpg", type: "image" },
      { label: "FUNNY PHOTO 02", file: "02.jpg", type: "image" }
    ]
  }
};

window.SITE = SITE;

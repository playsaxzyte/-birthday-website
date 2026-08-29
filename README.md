# Birthday Website Template

A customizable, interactive birthday website template built as a static site.

No framework. No database. No build step.

Open it in VS Code, change the content in `content/site.js`, add your media to `media/`, preview it locally, and publish it with GitHub Pages.

---

## 1. The only file you normally edit

Open:

```text
content/site.js
```

This is the site's content/configuration file.

You normally do **not** need to edit:

```text
index.html
css/style.css
js/main.js
js/music.js
js/gallery.js
```

Those files control the layout, styling, animation, and interaction.

---

# 2. Change the person's name

In `content/site.js`, find:

```js
name: "NAME",
```

Change it to the person's name:

```js
name: "Alex",
```

The name is used throughout the site automatically.

---

# 3. Change the birthday

Find:

```js
birthday: "02 October",
```

Change it:

```js
birthday: "14 March",
```

---

# 4. Change the hero text

Find:

```js
hero: {
  eyebrow: "...",
  title: "...",
  subtitle: "..."
}
```

Edit those three values.

`<br>` creates a line break.

Example:

```js
title: "HAPPY<br><em>BIRTHDAY, ALEX.</em>",
subtitle: "Everyone gets a story.<br>I'll make one for you."
```

---

# 5. Add the hero video

Put one MP4 file here:

```text
media/hero/hero.mp4
```

The hero video is intentionally:

- autoplay
- muted
- looping
- inline on mobile

Keep the hero video reasonably compressed.

The site's top-right music player is the audio source, so the hero video should remain silent.

---

# 6. Add archive photos

Put your photos here:

```text
media/photos/
```

Example:

```text
media/photos/
├── 01.jpg
├── 02.jpg
├── birthday.jpg
└── chaos.jpg
```

Then edit `content/site.js`:

```js
archive: {
  photos: [
    { file: "01.jpg", caption: "the beginning" },
    { file: "birthday.jpg", caption: "birthday behaviour" },
    { file: "chaos.jpg", caption: "proof we were there" }
  ]
}
```

The filename must match exactly.

---

# 7. Add videos

Put MP4 files here:

```text
media/videos/
```

Then edit:

```js
videos: [
  { file: "01.mp4", label: "THE CHAOS" },
  { file: "my-video.mp4", label: "THAT ONE DAY" }
]
```

The video cards support:

- hover-to-play on desktop
- mute/unmute
- fullscreen
- mobile-friendly playback

---

# 8. Add songs

Put allowed audio files here:

```text
media/music/
```

Example:

```text
media/music/
├── song-01.mp3
├── song-02.mp3
└── song-03.mp3
```

Then edit:

```js
songs: [
  { title: "Song Name", file: "song-01.mp3" },
  { title: "Another Song", file: "song-02.mp3" }
]
```

Only use music you have permission to distribute or otherwise legally use.

---

# 9. Add Family / Friends / Us photos

Use these folders:

```text
media/people/family/
media/people/friends/
media/people/us/
```

Example:

```text
media/people/family/
├── 01.jpg
├── 02.jpg
└── 03.jpg
```

Then update the matching section in `content/site.js`:

```js
family: {
  title: "FAMILY",
  description: "The people who knew them first.",
  photos: ["01.jpg", "02.jpg", "03.jpg"]
}
```

The same structure is used for `friends` and `us`.

---

# 10. Change the rotating thoughts

Find:

```js
thoughts: {
  rotating: [
    "...",
    "...",
    "..."
  ]
}
```

Replace those lines with your own memories, inside jokes, compliments, or messages.

Example:

```js
rotating: [
  "the person who makes ordinary days memorable.",
  "the guy who somehow turns every plan into chaos.",
  "someone I can always be myself around."
]
```

Also change:

```js
description: "Write your personal birthday message here."
```

to your final message.

---

# 11. Change the "Made by me" section

Find:

```js
about: {
```

Change:

```js
text:
```

to explain why you made the website.

You can also replace the GitHub/reference links:

```js
links: [
  { label: "MY GITHUB ↗", url: "https://github.com/YOUR-USERNAME" },
  { label: "WEB REFERENCES ↗", url: "https://developer.mozilla.org/en-US/docs/Learn_web_development" }
]
```

Use real links that you actually used or want to show.

---

# 12. Change the Lore passphrase

Find:

```js
passphrase: "pass",
```

Change it to your chosen phrase.

Example:

```js
passphrase: "bluecarpet"
```

### Important

This is a fun front-end unlock, **not real security**.

The passphrase exists in the website's JavaScript, so anyone who downloads/inspects the source can discover it.

Never put a real:

- laptop password
- email password
- account password
- banking password
- authentication secret

in this field.

---

# 13. Add Lore media

Put hidden photos/videos here:

```text
media/lore/
```

Then list them:

```js
files: [
  { label: "VLOG 01", file: "01.mp4", type: "video" },
  { label: "FUNNY PHOTO", file: "01.jpg", type: "image" }
]
```

Use:

```text
type: "video"
```

for MP4 files.

Use:

```text
type: "image"
```

for images.

---

# 14. Preview the site

Recommended:

1. Open the project folder in VS Code.
2. Install the **Live Server** extension.
3. Open `index.html`.
4. Right-click → **Open with Live Server**.

Test:

- loading screen
- hero video
- music player
- archive
- videos
- people galleries
- thoughts
- lore unlock
- mobile layout

---

# 15. Publish with GitHub

Create a new GitHub repository.

Then open the VS Code terminal in the project folder:

```bash
git init
git add .
git commit -m "Initial birthday website"
git branch -M main
git remote add origin YOUR_REPOSITORY_URL
git push -u origin main
```

For later changes:

```bash
git add .
git commit -m "Update birthday site"
git push
```

---

# 16. GitHub Pages

In the GitHub repository:

**Settings → Pages**

Choose:

```text
Deploy from a branch
Branch: main
Folder: / (root)
```

Save.

GitHub will provide the live Pages address.

---

# 17. Custom domain

After the site works on GitHub Pages, connect your purchased domain from:

**Repository → Settings → Pages → Custom domain**

Follow the DNS records provided by GitHub/the domain provider.

---

# 18. Project structure

```text
birthday-website/
│
├── index.html
├── README.md
├── .gitignore
│
├── css/
│   └── style.css
│
├── js/
│   ├── main.js
│   ├── music.js
│   └── gallery.js
│
├── content/
│   └── site.js          ← EDIT THIS
│
├── media/
│   ├── hero/
│   │   └── hero.mp4
│   ├── photos/
│   ├── videos/
│   ├── music/
│   ├── people/
│   │   ├── family/
│   │   ├── friends/
│   │   └── us/
│   └── lore/
│
└── docs/
    └── HOW-TO-CUSTOMIZE.md
```

---

## Quick rule

**Text/content → `content/site.js`**

**Photos/videos/music → `media/`**

**Visual design → `css/style.css`**

**Site behaviour → `js/`**

If you only want to personalize the website, start with `content/site.js`.

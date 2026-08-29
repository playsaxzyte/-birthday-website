# HOW TO CUSTOMIZE

This project is designed so most people only need to edit one file:

```text
content/site.js
```

## Name

Find:

```js
name: "NAME",
```

Replace `NAME` with the birthday person's name.

## Birthday

Find:

```js
birthday: "02 October",
```

Replace the date.

## Hero

Edit:

```js
hero: {
  eyebrow: "...",
  title: "...",
  subtitle: "..."
}
```

Use `<br>` for a new line and `<em>` for italic/emphasis styling.

## Main photos

Put images in:

```text
media/photos/
```

Then list them in:

```js
archive.photos
```

Example:

```js
{ file: "birthday.jpg", caption: "the birthday" }
```

## Videos

Put MP4 files in:

```text
media/videos/
```

Then list them in:

```js
videos
```

## Music

Put allowed audio files in:

```text
media/music/
```

Then list them in:

```js
songs
```

## Family / Friends / Us

Put photos in:

```text
media/people/family/
media/people/friends/
media/people/us/
```

Update the corresponding `photos` array in `site.js`.

## Thoughts

Edit:

```js
thoughts.rotating
```

and:

```js
thoughts.description
```

## Lore

Put hidden media in:

```text
media/lore/
```

Then list them in:

```js
lore.files
```

Change:

```js
passphrase: "pass",
```

to your chosen fun phrase.

**This is not real security. Do not use a real password.**

## About / Build Notes

Edit:

```js
about.text
about.note
about.links
```

Use real references/links that you actually used.

## Preview

Use VS Code + Live Server and open `index.html`.

## Publish

```bash
git add .
git commit -m "Update birthday site"
git push
```

Then deploy the repository with GitHub Pages.

## Troubleshooting

If media does not appear:

1. Check the file is in the correct folder.
2. Check the filename matches exactly.
3. Check `.jpg` vs `.JPG`, `.mp4` vs `.MP4`, etc.
4. Save `site.js`.
5. Refresh the page.

Keep media reasonably compressed so the live site loads quickly.

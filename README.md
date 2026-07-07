# The Public Record — Digital Archive Template

A static, searchable archive site for speeches, social media posts, and press releases. No build step, no dependencies — just HTML, CSS, and JS.

## What's in here
- `index.html` — page structure
- `styles.css` — the "records office" visual design (manila paper, folder tabs, rubber-stamp accents)
- `data.js` — **your content lives here.** Sample/placeholder entries are included so you can see the design working.
- `script.js` — search, filtering, and the "case file" pop-up viewer

## 1. Replace the sample content
Open `data.js` and edit the `ARCHIVE_ENTRIES` array. Each entry looks like:

```js
{
  id: "unique-id-for-this-entry",
  type: "speech",   // or "social" or "release"
  title: "Title of the document",
  date: "2024-05-01",
  venue: "Where it was delivered / posted",
  docNumber: "SPCH-001",   // any label you like, purely decorative
  tags: ["tag1", "tag2"],
  summary: "One sentence shown in the list view.",
  body: [
    "First paragraph of the full text.",
    "Second paragraph."
  ]
}
```

For `type: "social"`, `body` can just be a single string instead of an array.

Delete the placeholder entries once you've added your real ones. Also update the site title/tagline in `index.html` (`<title>`, the `<h1>`, and the tagline paragraph) and the footer.

## 2. Preview it locally
No build tools needed. Just open `index.html` in a browser, or run a quick local server:

```bash
python3 -m http.server 8000
```

Then visit `http://localhost:8000`.

## 3. Publish on GitHub Pages
1. Create a new repository on GitHub (or use an existing one).
2. Push these files to the repo root (or to a `/docs` folder — your choice).
3. In the repo, go to **Settings → Pages**.
4. Under "Build and deployment," set **Source** to "Deploy from a branch."
5. Choose your branch (e.g. `main`) and the folder (`/root` or `/docs`).
6. Save. GitHub will give you a URL like `https://yourusername.github.io/your-repo-name/` within a minute or two.

That's it — no build pipeline, no npm install. Any time you edit `data.js` and push, the live site updates automatically.

## Notes
- The search box filters on title, summary, and tags — not full document body text. If you want full-text search, that's a straightforward extension to `script.js`.
- Entries are sorted newest-first automatically based on the `date` field.
- Colors and fonts are all defined as CSS variables at the top of `styles.css` if you want to adjust the palette.

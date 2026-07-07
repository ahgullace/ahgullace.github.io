# Commissioner Neil Makhija — Public Archive

A static, searchable archive of speeches, press releases, and Facebook posts. No coding required to add new entries — you can do it all from github.com in your browser.

## How to add a new entry (no git required)

1. Go to your repository on github.com
2. Click on the file **`data.js`**
3. Click the **pencil icon** (top right of the file view) to edit it
4. Find the `ARCHIVE_ENTRIES` list. Copy one existing entry (an entire `{ ... }` block, including the curly braces and the comma after it), and paste a new copy right above or below it
5. Edit the fields in your new copy:

```js
{
  id: "2026-07-10-budget-speech",     // must be unique — just make up any short label
  type: "speech",                      // one of: "speech", "release", "facebook", "other"
  title: "Remarks on the 2027 Budget",
  date: "2026-07-10",                  // YYYY-MM-DD
  venue: "Norristown Courthouse",
  docNumber: "SPCH-014",               // any label — purely for display
  tags: ["budget", "affordability"],
  summary: "One sentence shown in the list view.",
  body: [
    "First paragraph of the real text.",
    "Second paragraph."
  ]
}
```

For a Facebook post, `body` can just be one line of text instead of a list:
```js
body: "Great turnout at today's town hall in Lansdale!"
```

6. Scroll to the bottom, add a short commit message like "Add budget speech," and click **Commit changes directly to the main branch**
7. Give it a minute — your live site will update automatically

## Tags

Tags power the tag-filter chips at the top of the site. Reuse these spellings so entries group together correctly:

**Policy areas:** `voting rights`, `elections`, `affordability`, `innovation & ai`, `public safety`, `human services`, `opioid crisis`, `behavioral health`, `infrastructure`, `criminal justice`, `budget`

**Other:** `jokes`, `family stories`, `county announcement`

You're not limited to this list — any tag you add to an entry will automatically show up as a filter chip on the site.

## A note on accuracy

The placeholder entries currently in `data.js` are **not real quotes** — they're bracketed stand-ins like `[Replace with the real text]`. Please make sure every entry you publish reflects the actual, verified text of the speech, release, or post before it goes live, since this is a public record of an elected official's statements.

## Files
- `index.html` — page structure
- `styles.css` — visual design
- `data.js` — **your content lives here**
- `script.js` — search, filtering, and the case-file viewer

## Publishing (if you haven't already)
This repo is already set up for GitHub Pages if you followed the earlier setup steps: **Settings → Pages → Deploy from a branch → main → / (root) → Save**. Your site is live at whatever URL that screen shows you.

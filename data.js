// ============================================================
// ARCHIVE DATA — Commissioner Neil Makhija
// ============================================================
// Replace every entry below with the real speech, post, or
// release text. The bracketed placeholder text is a stand-in
// ONLY — do not publish it as-is.
//
// HOW TO ADD A NEW ENTRY:
// Copy one of the objects below, give it a new unique "id",
// and fill in the real details. See README.md for the full
// field guide.
//
// type must be one of: "speech" | "release" | "facebook" | "other"
// date format: "YYYY-MM-DD"
// body: array of paragraph strings (speeches/releases/other)
//       OR a single string (facebook posts)
//
// SUGGESTED TAGS — reuse these spellings so the tag filter
// stays consistent. Add your own as needed.
//   Policy areas: "voting rights", "elections", "affordability",
//     "innovation & ai", "public safety", "human services",
//     "opioid crisis", "behavioral health", "infrastructure",
//     "criminal justice", "budget"
//   Other: "jokes", "family stories", "county announcement"
// ============================================================

const ARCHIVE_ENTRIES = [
  {
    id: "sample-1-swearing-in",
    type: "speech",
    title: "[Placeholder] Swearing-In Remarks",
    date: "2024-01-02",
    venue: "Montgomery County Courthouse",
    docNumber: "SPCH-001",
    tags: ["elections", "family stories"],
    summary: "[Placeholder summary — replace with a one-line description of the actual speech.]",
    body: [
      "[Replace this paragraph with the real text of the speech.]",
      "[Add additional paragraphs as needed — one array entry per paragraph.]"
    ]
  },
  {
    id: "sample-2-ai-initiative",
    type: "release",
    title: "[Placeholder] Statement on County AI Initiative",
    date: "2025-04-14",
    venue: "Office of the Commissioner",
    docNumber: "PR-014",
    tags: ["innovation & ai", "budget"],
    summary: "[Placeholder summary — replace with the real release summary.]",
    body: [
      "[Replace this paragraph with the real press release text.]",
      "[Add additional paragraphs as needed.]"
    ]
  },
  {
    id: "sample-3-facebook-behavioral-health",
    type: "facebook",
    title: "[Placeholder] Facebook post — behavioral health center groundbreaking",
    date: "2025-06-02",
    venue: "facebook.com/neilmakhija",
    docNumber: "FB-088",
    tags: ["behavioral health", "human services"],
    summary: "[Placeholder — one-line description of the post.]",
    body: "[Replace with the real post text.]"
  },
  {
    id: "sample-4-opioid-settlement",
    type: "release",
    title: "[Placeholder] Statement on Opioid Settlement Funds",
    date: "2025-09-18",
    venue: "Office of the Commissioner",
    docNumber: "PR-052",
    tags: ["opioid crisis", "public safety"],
    summary: "[Placeholder summary — replace with the real release summary.]",
    body: [
      "[Replace this paragraph with the real press release text.]"
    ]
  },
  {
    id: "sample-5-town-hall-joke",
    type: "other",
    title: "[Placeholder] Remarks at Community Town Hall",
    date: "2025-11-06",
    venue: "Norristown Community Center",
    docNumber: "OTH-023",
    tags: ["jokes", "affordability"],
    summary: "[Placeholder — e.g. 'Opened with a story about his commute before discussing the county budget.']",
    body: [
      "[Replace with the real remarks. If part of this was a joke or personal anecdote, you can still tag the whole entry \"jokes\" or \"family stories\" so it's easy to find later.]"
    ]
  },
  {
    id: "sample-6-facebook-family",
    type: "facebook",
    title: "[Placeholder] Facebook post — family moment",
    date: "2026-02-14",
    venue: "facebook.com/neilmakhija",
    docNumber: "FB-101",
    tags: ["family stories"],
    summary: "[Placeholder — one-line description of the post.]",
    body: "[Replace with the real post text.]"
  }
];

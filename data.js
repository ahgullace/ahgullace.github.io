// ============================================================
// ARCHIVE DATA
// Replace these entries with your real speeches, posts, and
// press releases. Each entry is one "case file."
//
// type must be one of: "speech" | "social" | "release"
// date format: "YYYY-MM-DD"
// body: array of paragraph strings (speeches/releases) OR
//       a single short string (social posts)
// ============================================================

const ARCHIVE_ENTRIES = [
  {
    id: "1984-03-12-founding-address",
    type: "speech",
    title: "Founding Address to the Assembly",
    date: "1984-03-12",
    venue: "City Assembly Hall",
    docNumber: "SPCH-001",
    tags: ["founding", "policy", "assembly"],
    summary: "Opening remarks delivered at the first session of the newly formed assembly, outlining founding priorities.",
    body: [
      "[Replace with real excerpt] Members of the assembly, we gather today not to mark an ending, but a beginning. The work ahead of us is not glamorous — it is budgets, ordinances, and long evenings in rooms like this one.",
      "But it is also the work that decides whether a town remains a place people can afford to live, work, and raise a family. I do not intend to waste a single session on anything less than that standard.",
      "I ask each of you, across whatever disagreements we will inevitably have, to hold that standard with me."
    ]
  },
  {
    id: "1991-07-04-press-release-water",
    type: "release",
    title: "Statement on the Riverside Water Treatment Agreement",
    date: "1991-07-04",
    venue: "Office of the Assembly",
    docNumber: "PR-014",
    tags: ["infrastructure", "water", "agreement"],
    summary: "Official statement announcing the finalized agreement on the Riverside water treatment facility.",
    body: [
      "[Replace with real release text] FOR IMMEDIATE RELEASE — After eighteen months of negotiation, the Riverside Water Treatment Agreement has been finalized and signed by all three participating municipalities.",
      "The agreement secures funding for a shared treatment facility expected to serve an estimated 40,000 residents upon completion, with construction slated to begin next spring.",
      "Further details, including the full text of the agreement, are available upon request from this office."
    ]
  },
  {
    id: "2003-11-02-social-thankyou",
    type: "social",
    title: "Post — Election night thanks",
    date: "2003-11-02",
    venue: "@officialaccount",
    docNumber: "SOC-088",
    tags: ["election", "gratitude"],
    summary: "Short public message posted on election night.",
    body: "[Replace with real post text] Thank you to every volunteer who knocked on a door this year. Whatever tonight brings, that work mattered. More tomorrow."
  },
  {
    id: "2008-01-15-speech-budget",
    type: "speech",
    title: "Remarks on the Annual Budget Proposal",
    date: "2008-01-15",
    venue: "County Chambers",
    docNumber: "SPCH-047",
    tags: ["budget", "fiscal policy"],
    summary: "Remarks introducing the annual budget proposal and its central priorities.",
    body: [
      "[Replace with real excerpt] This year's proposal makes a simple bet: that the roads, schools, and clinics we maintain now are cheaper than the ones we would be forced to rebuild in ten years if we let them fail.",
      "It is not the largest budget this office has ever proposed, but I believe it is the most honest one — every line item here can be traced to a specific, named need.",
      "I welcome the committee's scrutiny, and I welcome the public's."
    ]
  },
  {
    id: "2012-09-30-press-release-schools",
    type: "release",
    title: "Statement on New School Funding Formula",
    date: "2012-09-30",
    venue: "Office of the Assembly",
    docNumber: "PR-091",
    tags: ["education", "funding"],
    summary: "Statement responding to the newly passed school funding formula.",
    body: [
      "[Replace with real release text] FOR IMMEDIATE RELEASE — This office welcomes the passage of the revised school funding formula, which directs additional per-pupil funding to districts with the highest need.",
      "This change follows more than two years of advocacy from parents, teachers, and district administrators across the region.",
      "We will continue monitoring implementation to ensure funds reach classrooms as intended."
    ]
  },
  {
    id: "2016-06-21-social-heatwave",
    type: "social",
    title: "Post — Heatwave safety notice",
    date: "2016-06-21",
    venue: "@officialaccount",
    docNumber: "SOC-142",
    tags: ["public safety", "weather"],
    summary: "Public safety notice posted during a regional heatwave.",
    body: "[Replace with real post text] Cooling centers are open through the weekend at the addresses linked below. Please check on elderly neighbors — the forecast highs this week are no joke."
  },
  {
    id: "2019-04-08-speech-retirement",
    type: "speech",
    title: "Farewell Remarks to Staff",
    date: "2019-04-08",
    venue: "Assembly Office",
    docNumber: "SPCH-133",
    tags: ["farewell", "staff"],
    summary: "Informal remarks delivered to office staff ahead of a transition.",
    body: [
      "[Replace with real excerpt] I have given a lot of formal speeches in this building, and I want this one to be different — I want it to be true, plainly, without the flourishes.",
      "You are the reason any of the work this office is credited with actually happened. I hope the next chapter treats you as well as you've treated this one."
    ]
  },
  {
    id: "2021-02-11-press-release-transit",
    type: "release",
    title: "Statement on Regional Transit Expansion",
    date: "2021-02-11",
    venue: "Office of the Assembly",
    docNumber: "PR-156",
    tags: ["transit", "infrastructure"],
    summary: "Statement on newly approved funding for regional transit expansion.",
    body: [
      "[Replace with real release text] FOR IMMEDIATE RELEASE — Newly approved state funding will extend the regional transit line by an additional 6.2 miles, adding three new stops in previously underserved areas.",
      "Planning is expected to conclude by the end of next year, with construction to follow pending final environmental review."
    ]
  },
  {
    id: "2023-10-05-social-thankyou2",
    type: "social",
    title: "Post — Community garden opening",
    date: "2023-10-05",
    venue: "@officialaccount",
    docNumber: "SOC-201",
    tags: ["community", "parks"],
    summary: "Post marking the opening of a new community garden project.",
    body: "[Replace with real post text] Ribbon cut this morning on the new community garden lots — years of neighborhood organizing finally has a place to grow. Literally."
  }
];

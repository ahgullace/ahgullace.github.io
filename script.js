const TYPE_LABEL = {
  speech: "Speech",
  social: "Social Post",
  release: "Press Release"
};

const listEl = document.getElementById("file-list");
const countEl = document.getElementById("count-readout");
const searchEl = document.getElementById("search-input");
const tabButtons = Array.from(document.querySelectorAll(".filter-tab"));
const modalOverlay = document.getElementById("modal-overlay");
const modalContent = document.getElementById("modal-content");
const closeBtn = document.getElementById("modal-close");

let activeType = "all";
let query = "";

function formatDate(iso) {
  const d = new Date(iso + "T00:00:00");
  return d.toLocaleDateString(undefined, { year: "numeric", month: "short", day: "2-digit" });
}

function matches(entry) {
  const typeOk = activeType === "all" || entry.type === activeType;
  if (!typeOk) return false;
  if (!query) return true;
  const haystack = `${entry.title} ${entry.summary} ${entry.tags.join(" ")}`.toLowerCase();
  return haystack.includes(query.toLowerCase());
}

function render() {
  const results = ARCHIVE_ENTRIES
    .filter(matches)
    .sort((a, b) => new Date(b.date) - new Date(a.date));

  countEl.textContent = `${results.length} ${results.length === 1 ? "file" : "files"}`;

  if (results.length === 0) {
    listEl.innerHTML = `<div class="empty-state">No files match that search. Try a different term or filter.</div>`;
    return;
  }

  listEl.innerHTML = results.map(entry => `
    <button class="file-row" data-id="${entry.id}">
      <span class="doc-date">${formatDate(entry.date)}</span>
      <span class="doc-main">
        <h3>${escapeHtml(entry.title)}</h3>
        <p>${escapeHtml(entry.summary)}</p>
      </span>
      <span class="doc-tab ${entry.type}">${TYPE_LABEL[entry.type]}</span>
    </button>
  `).join("");

  listEl.querySelectorAll(".file-row").forEach(row => {
    row.addEventListener("click", () => openFile(row.dataset.id));
  });
}

function escapeHtml(str) {
  const div = document.createElement("div");
  div.textContent = str;
  return div.innerHTML;
}

function openFile(id) {
  const entry = ARCHIVE_ENTRIES.find(e => e.id === id);
  if (!entry) return;

  const bodyHtml = Array.isArray(entry.body)
    ? entry.body.map(p => `<p>${escapeHtml(p)}</p>`).join("")
    : `<p>${escapeHtml(entry.body)}</p>`;

  modalContent.innerHTML = `
    <div class="case-file-header">
      <div>
        <h2>${escapeHtml(entry.title)}</h2>
        <div class="case-file-meta">
          <span>${formatDate(entry.date)}</span>
          <span>${escapeHtml(entry.venue)}</span>
          <span>${escapeHtml(entry.docNumber)}</span>
        </div>
      </div>
      <span class="stamp ${entry.type}">${TYPE_LABEL[entry.type]}</span>
    </div>
    <div class="case-file-body">${bodyHtml}</div>
    <div class="case-file-tags">
      ${entry.tags.map(t => `<span class="tag-chip">${escapeHtml(t)}</span>`).join("")}
    </div>
  `;

  modalOverlay.classList.add("open");
  document.body.style.overflow = "hidden";
  closeBtn.focus();
}

function closeFile() {
  modalOverlay.classList.remove("open");
  document.body.style.overflow = "";
}

closeBtn.addEventListener("click", closeFile);
modalOverlay.addEventListener("click", (e) => {
  if (e.target === modalOverlay) closeFile();
});
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closeFile();
});

tabButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    tabButtons.forEach(b => b.setAttribute("aria-pressed", "false"));
    btn.setAttribute("aria-pressed", "true");
    activeType = btn.dataset.type;
    render();
  });
});

searchEl.addEventListener("input", (e) => {
  query = e.target.value;
  render();
});

render();

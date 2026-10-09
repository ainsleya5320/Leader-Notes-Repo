/* ============================================================
   THE LEADERSHIP ATLAS — app logic
   Index · Chronicle · Map · Convergence · Compare · Patterns ·
   Temperament · Carrots & Sticks · Library · Insights · Frameworks
   ============================================================ */

const ERAS = [
  { key: "ancients",    label: "Ancients",       color: "#b8862b" },
  { key: "warlords",    label: "Warlords",       color: "#b5452f" },
  { key: "medieval",    label: "Medieval Kings", color: "#7b5aa6" },
  { key: "renaissance", label: "Renaissance",    color: "#3e8a5e" },
  { key: "earlymodern", label: "Early Modern",   color: "#2f7fb0" },
  { key: "colonial",    label: "Colonial",       color: "#7a8a3e" },
  { key: "c19",         label: "19th Century",   color: "#b04d7c" },
  { key: "c20",         label: "20th Century",   color: "#4a67c0" },
  { key: "c21",         label: "21st Century",   color: "#2a9d8f" }
];
const ERA_BY_KEY = Object.fromEntries(ERAS.map(e => [e.key, e]));

// trait key -> {name, section, sectionId}; and the ordered list of taggable keys
const TRAIT_BY_KEY = {};
const TAGGABLE = [];
(window.TRAIT_SECTIONS || []).forEach(sec =>
  sec.traits.forEach(t => {
    if (!t.key) return;
    TRAIT_BY_KEY[t.key] = { name: t.name, section: sec.title, sectionId: sec.id };
    if (t.taggable !== false) TAGGABLE.push({ key: t.key, name: t.name, section: sec.title, sectionId: sec.id, icon: sec.icon });
  })
);

const EXITS = {
  voluntary: "Stepped down voluntarily", defeated: "Lost an election", termlimit: "Term limit reached",
  died: "Died in office", assassinated: "Assassinated", deposed: "Deposed / forced out", incumbent: "Still in power"
};
const SUCCESSIONS = { orderly: "Orderly succession", crisis: "Succession crisis", na: "Succession n/a" };

// Wikipedia page titles for portraits where the display name won't resolve
const WIKI_OVERRIDES = {
  parkchunghee: "Park Chung Hee",
  peron: "Juan Perón",
  ramesses2: "Ramesses II", cyrus: "Cyrus the Great", darius1: "Darius the Great",
  qinshihuang: "Qin Shi Huang", jcaesar: "Julius Caesar", alexander: "Alexander the Great",
  william1: "William the Conqueror", louis9: "Louis IX of France", louis14: "Louis XIV",
  frederick2p: "Frederick the Great", frederick2: "Frederick II, Holy Roman Emperor",
  catherine2: "Catherine the Great", peter1: "Peter the Great", meiji: "Emperor Meiji",
  napoleon: "Napoleon", victoria: "Queen Victoria", elizabeth1: "Elizabeth I", henry8: "Henry VIII",
  charles5: "Charles V, Holy Roman Emperor", justinian: "Justinian I", marcusaurelius: "Marcus Aurelius",
  mariatheresa: "Maria Theresa", cixi: "Empress Dowager Cixi", kangxi: "Kangxi Emperor",
  mehmed2: "Mehmed II", suleiman: "Suleiman the Magnificent", isabella: "Isabella I of Castile",
  richelieu: "Cardinal Richelieu", cromwell: "Oliver Cromwell", nzinga: "Njinga of Ndongo and Matamba",
  goldameir: "Golda Meir", indira: "Indira Gandhi", troosevelt: "Theodore Roosevelt",
  fdr: "Franklin D. Roosevelt", jfk: "John F. Kennedy", lbj: "Lyndon B. Johnson", gwbush: "George W. Bush",
  mckinley: "William McKinley", taft: "William Howard Taft", wilson: "Woodrow Wilson",
  harding: "Warren G. Harding", coolidge: "Calvin Coolidge", hoover: "Herbert Hoover",
  truman: "Harry S. Truman", eisenhower: "Dwight D. Eisenhower", nixon: "Richard Nixon",
  ford: "Gerald Ford", carter: "Jimmy Carter", ghwbush: "George H. W. Bush", clinton: "Bill Clinton",
  taizong: "Emperor Taizong of Tang", robertbruce: "Robert the Bruce", chiang: "Chiang Kai-shek",
  hueylong: "Huey Long", goh: "Goh Chok Tong", kissinger: "Henry Kissinger", rjdaley: "Richard J. Daley"
};

const $ = sel => document.querySelector(sel);
const pad = id => String(id).padStart(3, "0");
function esc(v) { return (v == null ? "" : String(v)).replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;").replace(/>/g, "&gt;"); }

/* ---------------- per-leader layered data (own field > seeded map > none) ---------------- */

function getBio(l)     { return (l && l.bio) || (window.BIOS && window.BIOS[l.id]) || ""; }
function getCollabs(l) { return (l && Array.isArray(l.collaborators)) ? l.collaborators : ((window.COLLABORATORS && window.COLLABORATORS[l.id]) || []); }
function getOutcome(l) {
  const o = (l && l.outcome) || (window.OUTCOMES && window.OUTCOMES[l.id]) || {};
  return { exit: o.exit || "", succession: o.succession || "" };
}

function normName(s) { return String(s).normalize("NFD").replace(/[̀-ͯ]/g, "").toLowerCase().replace(/[^a-z0-9]/g, ""); }
let NAME_TO_ID = {};
function rebuildNameIndex() {
  NAME_TO_ID = {};
  window.ALL_LEADERS.forEach(l => { NAME_TO_ID[normName(l.name)] = l.id; });
}

function startYear(l) {
  const s = l.years || "";
  const first = s.match(/\d{1,4}/);
  if (!first) return 99999;
  const y = parseInt(first[0], 10), idx = first.index;
  if (/AD\s*$/.test(s.slice(0, idx))) return y;
  if (/BC/.test(s)) {
    const after = s.slice(idx), adPos = after.search(/AD/), bcPos = after.search(/BC/);
    if (adPos === -1 || (bcPos !== -1 && bcPos < adPos)) return -y;
  }
  return y;
}

/* ---------------- state ---------------- */

const state = {
  view: "index",
  leaderId: null,
  eras: new Set(ERAS.map(e => e.key)),
  presidentsOnly: false,
  country: null, countryName: null,
  tags: new Set(),          // every selected concept must be present (AND)
  search: "",
  traitCat: "all",
  compare: { a: null, b: null },
  insightSearch: "",
  library: { search: "", shelf: "all", sort: "title", leader: "", genre: "", gaps: false, limit: 150 },
  instruments: { reg: "all", search: "", focus: null },
  temperament: { mode: "ranked", sort: "composite", search: "", a: null, b: null, ltaSort: "style" },
  index: { mode: "table", sort: "chron", dir: 1 },
  chron: { preset: "all", scrollX: null, scrollKey: null },
  conv: { sig: "all", sort: "score", dir: -1 },
  time: { domain: "all" },
  surv: { tab: "svolik" },
  orgs: { mode: "catalogue", kind: "all", search: "", dcmp: ["pap", "ldp", "umno", "kmt", "golkar"] },
  orgId: null,
  pat: { mode: "cases", caseId: null, yAxis: "coercion", focusDebate: null, rotParties: true },
  prac: { mode: "leader", leader: "lbj", cat: "all", cmp: ["lbj", "clinton", "churchill", "napoleon", "baker"], bq: "", bcat: "all", bgrade: "all", bself: false, bera: "all" },
  gloss: "",
  rhet: { mode: "styles", cmp: ["orator", "fireside", "bypass"], caseStyle: "all", yAxis: "register" }
};

/* ---------------- leader store (seeded + custom) ---------------- */

const SEEDED = window.LEADERS.slice();
const CUSTOM_KEY = "atlas-leaders";
const INSIGHTS_KEY = "atlas-insights";

function loadCustom() { try { const v = JSON.parse(localStorage.getItem(CUSTOM_KEY)); return Array.isArray(v) ? v : []; } catch (e) { return []; } }
function saveCustom(arr) { localStorage.setItem(CUSTOM_KEY, JSON.stringify(arr)); }
function loadInsights() { try { const v = JSON.parse(localStorage.getItem(INSIGHTS_KEY)); return Array.isArray(v) ? v : []; } catch (e) { return []; } }
function saveInsights(arr) { localStorage.setItem(INSIGHTS_KEY, JSON.stringify(arr)); }

let customIds = new Set();
function rebuildAll() {
  const custom = loadCustom();
  customIds = new Set(custom.map(l => l.id));
  const map = new Map(SEEDED.map(l => [l.id, l]));
  custom.forEach(l => map.set(l.id, l));
  window.ALL_LEADERS = [...map.values()];
  rebuildNameIndex();
  MATCHERS = null;          // leader set changed — rebuild import matchers lazily
  CONV_CACHE = null;        // …and the convergence scores
}
rebuildAll();
function isSeeded(id) { return SEEDED.some(l => l.id === id); }
const byId = id => window.ALL_LEADERS.find(x => x.id === id);

/* ---------------- book store (seeded library + your edits) ---------------- */

const SEEDED_BOOKS = (window.LIBRARY || []).slice();
const BOOKS_KEY = "atlas-books";
const SHELVES = { toread: "To read", reading: "Reading", read: "Read", reference: "Reference" };
const SHELF_CYCLE = ["", "read", "reading", "toread", "reference"];

function loadCustomBooks() { try { const v = JSON.parse(localStorage.getItem(BOOKS_KEY)); return Array.isArray(v) ? v : []; } catch (e) { return []; } }
function saveCustomBooks(arr) { localStorage.setItem(BOOKS_KEY, JSON.stringify(arr)); }

let customBookIds = new Set();
function rebuildBooks() {
  const custom = loadCustomBooks();
  customBookIds = new Set(custom.map(b => b.id));
  const map = new Map(SEEDED_BOOKS.map(b => [b.id, Object.assign({}, b)]));
  // a custom record may be partial (e.g. just a shelf) — merge it over the seeded book
  custom.forEach(b => map.set(b.id, Object.assign({}, map.get(b.id) || {}, b)));
  window.ALL_BOOKS = [...map.values()];
}
rebuildBooks();
function isSeededBook(id) { return SEEDED_BOOKS.some(b => b.id === id); }
const bookById = id => window.ALL_BOOKS.find(b => b.id === id);
function booksForLeader(id) { return window.ALL_BOOKS.filter(b => (b.leaders || []).includes(id)); }
function booksForConcept(key) { return window.ALL_BOOKS.filter(b => (b.tags || []).includes(key)); }
function stars(n) { return n ? "★".repeat(n) + "☆".repeat(5 - n) : ""; }
function shelfBadge(b) {
  const s = b.shelf || "";
  return `<span class="shelf-badge ${s}" data-shelf-id="${b.id}" title="Click to change shelf">${s ? SHELVES[s] : "Unmarked"}</span>`;
}
// merge a partial change into a book without losing seeded fields
function patchBook(id, patch) {
  const custom = loadCustomBooks();
  const i = custom.findIndex(b => b.id === id);
  if (i >= 0) custom[i] = Object.assign({}, custom[i], patch);
  else custom.push(Object.assign({ id }, patch));
  saveCustomBooks(custom);
  rebuildBooks();
}
function cycleShelf(id) {
  const b = bookById(id);
  if (!b) return;
  const next = SHELF_CYCLE[(SHELF_CYCLE.indexOf(b.shelf || "") + 1) % SHELF_CYCLE.length];
  patchBook(id, { shelf: next, updated: Date.now() });
}

/* ---------------- filtering ---------------- */

function matchesBase(l) {
  const q = state.search.trim().toLowerCase();
  if (!state.eras.has(l.era)) return false;
  if (state.presidentsOnly && !l.president) return false;
  for (const t of state.tags) if (!(l.tags || []).includes(t)) return false;
  if (q && !(l.name + " " + l.title + " " + l.country + " " + l.years).toLowerCase().includes(q)) return false;
  return true;
}
function visibleLeaders() { return window.ALL_LEADERS.filter(l => matchesBase(l) && (!state.country || l.iso === state.country)); }

/* ---------------- similarity (Jaccard over concept tags) ---------------- */

function similarity(a, b) {
  const A = new Set(a.tags || []), B = new Set(b.tags || []);
  if (!A.size && !B.size) return 0;
  let inter = 0; A.forEach(t => { if (B.has(t)) inter++; });
  return inter / (A.size + B.size - inter);
}
function sharedTags(a, b) { const B = new Set(b.tags || []); return (a.tags || []).filter(t => B.has(t)); }
function mostSimilar(l, n) {
  return window.ALL_LEADERS.filter(x => x.id !== l.id)
    .map(x => ({ l: x, s: similarity(l, x) })).filter(x => x.s > 0)
    .sort((p, q) => q.s - p.s).slice(0, n || 3);
}

/* ---------------- avatars & portraits ---------------- */

function initials(name) {
  const w = String(name).replace(/\(.*?\)/g, "").trim().split(/\s+/).filter(Boolean);
  if (!w.length) return "?";
  if (w.length === 1) return w[0].slice(0, 2).toUpperCase();
  if (w.length > 2 && /^(II|III|IV|Jr\.?|Sr\.?)$/i.test(w[w.length - 1])) w.pop();   // 'James A. Baker III' -> JB, not JI
  return (w[0][0] + w[w.length - 1][0]).toUpperCase();
}
function cachedImg(l) {
  const c = (loadCustom().find(x => x.id === l.id) || {});
  if (c.img) return c.img;
  if (l.img) return l.img;
  const v = localStorage.getItem("atlas-img-" + l.id);
  return v ? v : null;
}
function avatarMarkup(l, cls) {
  const c = ERA_BY_KEY[l.era] ? ERA_BY_KEY[l.era].color : "var(--accent)";
  const img = cachedImg(l);
  if (img) return `<span class="avatar ${cls || ""}" style="--era-color:${c}"><img src="${img}" alt="" onerror="this.parentElement.classList.add('mono');this.parentElement.textContent='${initials(l.name)}'"></span>`;
  return `<span class="avatar mono ${cls || ""}" data-lid="${l.id}" style="--era-color:${c}">${initials(l.name)}</span>`;
}
function wikiTitle(l) { return WIKI_OVERRIDES[l.id] || l.wiki || String(l.name).replace(/\s*\(.*?\)\s*/g, " ").trim(); }
async function fetchPortrait(l) {
  const custom = cachedImg(l);
  if (custom) return custom;
  const key = "atlas-img-" + l.id;
  const seen = localStorage.getItem(key);
  if (seen !== null) return seen || null;
  try {
    const r = await fetch("https://en.wikipedia.org/api/rest_v1/page/summary/" + encodeURIComponent(wikiTitle(l)) + "?redirect=true");
    if (!r.ok) return null;
    const j = await r.json();
    const url = (j.thumbnail && j.thumbnail.source) || "";
    localStorage.setItem(key, url);
    return url || null;
  } catch (e) { return null; }
}

/* ---------------- era chips & toolbar ---------------- */

function buildChips() {
  const wrap = $("#era-chips");
  ERAS.forEach(era => {
    const b = document.createElement("button");
    b.className = "chip on";
    b.style.setProperty("--era-color", era.color);
    b.innerHTML = `<span class="dot"></span>${era.label}`;
    b.dataset.era = era.key;
    b.onclick = () => {
      state.eras.has(era.key) ? state.eras.delete(era.key) : state.eras.add(era.key);
      b.classList.toggle("on", state.eras.has(era.key));
      render();
    };
    wrap.appendChild(b);
  });
  $("#chip-presidents").onclick = () => { state.presidentsOnly = !state.presidentsOnly; $("#chip-presidents").classList.toggle("on", state.presidentsOnly); render(); };
  $("#chip-all").onclick = () => {
    state.eras = new Set(ERAS.map(e => e.key)); state.presidentsOnly = false; state.tags = new Set();
    state.country = null; state.countryName = null; state.search = ""; $("#search").value = "";
    document.querySelectorAll("#era-chips .chip").forEach(c => c.classList.add("on"));
    $("#chip-presidents").classList.remove("on");
    render();
  };
  $("#btn-add").onclick = () => openForm(null);
  $("#btn-export").onclick = exportBackup;
  $("#btn-import").onclick = () => $("#import-file").click();
  $("#import-file").onchange = importBackup;
}

function renderActiveFilters() {
  const wrap = $("#active-filters");
  wrap.innerHTML = "";
  if (state.country) {
    const b = document.createElement("button");
    b.className = "chip"; b.textContent = `✕ ${state.countryName || "Country"}`;
    b.onclick = () => setCountry(null, null);
    wrap.appendChild(b);
  }
  state.tags.forEach(k => {
    const t = TRAIT_BY_KEY[k];
    const b = document.createElement("button");
    b.className = "chip"; b.textContent = `✕ ${t ? t.name : k}`;
    b.onclick = () => { state.tags.delete(k); render(); };
    wrap.appendChild(b);
  });
}
function filterByTags(keys) { state.tags = new Set(keys); switchView("index"); render(); }

/* ---------------- list ---------------- */

function renderList() {
  const leaders = visibleLeaders();
  const list = $("#leader-list");
  list.innerHTML = "";
  const parts = [];
  if (state.country) parts.push(state.countryName);
  if (state.presidentsOnly) parts.push("Presidents");
  state.tags.forEach(k => { if (TRAIT_BY_KEY[k]) parts.push(TRAIT_BY_KEY[k].name); });
  $("#list-meta").textContent = `${leaders.length} leader${leaders.length === 1 ? "" : "s"}` + (parts.length ? ` · ${parts.join(" · ")}` : "") + ` · ${window.ALL_LEADERS.length} in the index`;
  if (!leaders.length) { list.innerHTML = `<div class="empty-note">No leaders match the current filters.<br>Toggle more eras on, clear a filter above, or add a new leader.</div>`; return; }

  ERAS.forEach(era => {
    const group = leaders.filter(l => l.era === era.key).sort((a, b) => startYear(a) - startYear(b));
    if (!group.length) return;
    const h = document.createElement("div");
    h.className = "era-group-header"; h.style.setProperty("--era-color", era.color); h.textContent = era.label;
    list.appendChild(h);
    group.forEach(l => {
      const row = document.createElement("div");
      row.className = "leader-row"; row.style.setProperty("--era-color", era.color);
      const mine = customIds.has(l.id) && !isSeeded(l.id), editedSeed = customIds.has(l.id) && isSeeded(l.id);
      row.innerHTML = avatarMarkup(l) +
        `<span class="lname">${esc(l.name)}${l.president ? ' <span class="star" title="President">★</span>' : ""}` +
        `${mine ? ' <span class="custom-dot" title="Added by you">●</span>' : ""}${editedSeed ? ' <span class="custom-dot" title="Edited by you">✎</span>' : ""}</span>` +
        `<span class="lmeta">${esc(l.country)}<br>${esc(l.years)}</span>`;
      row.onclick = () => openDetail(l.id);
      list.appendChild(row);
    });
  });
}

/* ---------------- shared fragments ---------------- */

function outcomeChips(l) {
  const o = getOutcome(l);
  if (!o.exit && !o.succession) return "";
  const ex = o.exit ? `<span class="outcome-chip ${o.exit === "incumbent" ? "incumbent" : ""}">${EXITS[o.exit] || o.exit}</span>` : "";
  const su = (o.succession && o.succession !== "na") ? `<span class="outcome-chip ${o.succession}">${SUCCESSIONS[o.succession] || o.succession}</span>` : "";
  return `<div class="outcomes">${ex}${su}</div>`;
}
function collabsHtml(l, compact) {
  const list = getCollabs(l);
  if (!list.length) return "";
  const rows = list.map(c => {
    const linkId = NAME_TO_ID[normName(c.name)];
    const nameHtml = (linkId && linkId !== l.id) ? `<a class="collab-link" data-id="${linkId}">${esc(c.name)}</a>` : `<span class="collab-name">${esc(c.name)}</span>`;
    return `<li>${nameHtml}${c.role ? ` <span class="collab-role">— ${esc(c.role)}</span>` : ""}</li>`;
  }).join("");
  return compact
    ? `<div class="cmp-field"><h5>Key Subordinates &amp; Collaborators</h5><ul class="collab-list">${rows}</ul></div>`
    : `<div class="d-field d-collabs"><h4>Key Subordinates &amp; Collaborators</h4><ul class="collab-list">${rows}</ul></div>`;
}
function insightsFor(id) { return loadInsights().filter(i => (i.leaders || []).includes(id)); }

/* ---------------- temperament (Rubenzer facets) ---------------- */

const FACETS = window.RUBENZER_FACETS || [];
const FACET_BY_KEY = Object.fromEntries(FACETS.map(f => [f.key, f]));
const RGROUPS = window.RUBENZER_GROUPS || [];

function getTemperament(l) {
  if (l && l.temperament) return l.temperament;
  return (window.TEMPERAMENT && window.TEMPERAMENT[l.id]) || null;
}
function fMid(rec, k) { const v = rec.f[k]; return v ? (v[0] + v[1]) / 2 : null; }
function fBand(rec, k) { const v = rec.f[k]; return v ? v[1] - v[0] : 0; }
function composite(rec) {
  const vals = FACETS.map(f => fMid(rec, f.key)).filter(v => v != null);
  return vals.length ? vals.reduce((a, b) => a + b, 0) / vals.length : 0;
}
function compositeBand(rec) {
  const lo = FACETS.map(f => rec.f[f.key] && rec.f[f.key][0]).filter(v => v != null);
  const hi = FACETS.map(f => rec.f[f.key] && rec.f[f.key][1]).filter(v => v != null);
  return [lo.reduce((a, b) => a + b, 0) / lo.length, hi.reduce((a, b) => a + b, 0) / hi.length];
}
function groupScore(rec, gkey) {
  const vals = FACETS.filter(f => f.group === gkey).map(f => fMid(rec, f.key)).filter(v => v != null);
  return vals.length ? vals.reduce((a, b) => a + b, 0) / vals.length : 0;
}
const SSTYLES = window.SIMONTON_STYLES || [];
const SSTYLE_BY_KEY = Object.fromEntries(SSTYLES.map(x => [x.key, x]));
const DOMAIN_LABEL = { core: "U.S. president", adapted: "modern executive", extended: "outside validated domain" };

function getStyles(l) { return (l && l.styles) || (window.LEADER_STYLES && window.LEADER_STYLES[l.id]) || null; }
function dominantStyle(rec) {
  let best = null;
  SSTYLES.forEach(x => { if (!best || rec.s[x.key] > rec.s[best.key]) best = x; });
  return best;
}
function styleSignature(rec) {
  const ranked = SSTYLES.slice().sort((a, b) => rec.s[b.key] - rec.s[a.key]);
  return ranked.slice(0, 2).map(x => x.name).join("–");
}
function styleBars(rec, opts) {
  return `<span class="sm-bars ${opts && opts.wide ? "wide" : ""}">` + SSTYLES.map(x =>
    `<span class="sm-bar" title="${esc(x.name)}: ${rec.s[x.key]}"><i style="height:${Math.max(rec.s[x.key], 3)}%;background:${x.color}"></i></span>`).join("") + `</span>`;
}
function styledLeaders() {
  return window.ALL_LEADERS.filter(l => getStyles(l)).map(l => ({ l, rec: getStyles(l) }));
}

const ANECDOTES = window.ANECDOTES || [];
function anecdotesFor(opts) {
  return ANECDOTES.filter(a => (!opts.leader || a.l === opts.leader) && (!opts.facet || a.f === opts.facet) && (!opts.end || a.end === opts.end));
}
function anecdoteCard(a, opts) {
  const L = byId(a.l), f = FACET_BY_KEY[a.f];
  if (!L || !f) return "";
  const head = (opts && opts.showLeader === false)
    ? `<span class="an-facet ${a.end}">${esc(f.short)} · ${a.end}</span>`
    : `<span class="an-who" data-id="${a.l}">${avatarMarkup(L)}<b>${esc(L.name)}</b></span><span class="an-facet ${a.end}">${esc(f.short)} · ${a.end}</span>`;
  return `<div class="an-card ${a.end}">
    <div class="an-head">${head}${a.legend ? `<span class="an-legend" title="Famous but probably apocryphal — kept because what a culture invents about a leader is evidence of a kind">apocryphal</span>` : ""}</div>
    <div class="an-text">${esc(a.text)}</div>
    ${a.src ? `<div class="an-src">${esc(a.src)}</div>` : ""}
  </div>`;
}
function wireAnecdotes(root) {
  root.querySelectorAll(".an-who").forEach(x => x.onclick = () => openDetail(x.dataset.id));
}

function scoredLeaders() {
  return window.ALL_LEADERS.filter(l => getTemperament(l)).map(l => ({ l, rec: getTemperament(l) }));
}
function eraColor(l) { return (ERA_BY_KEY[l.era] || {}).color || "var(--accent)"; }

// Replicates Chart 12.2 of Rubenzer & Faschingbauer: a percentile profile across the
// nine facets, with the three group brackets beneath. Ranges are drawn as a shaded
// band; markers turn to diamonds below the 50th percentile, as liabilities do in the book.
function profileChartSvg(entries, opts) {
  opts = opts || {};
  const W = 820, H = opts.compact ? 320 : 480;
  const L = 54, R = 96, T = 18, B = opts.compact ? 104 : 168;
  const pw = W - L - R, ph = H - T - B;
  const x = i => L + (pw * (i + 0.5)) / FACETS.length;
  const y = v => T + ph * (1 - v / 100);

  let g = "";
  // gridlines
  [0, 25, 50, 75, 100].forEach(v => {
    g += `<line class="rz-grid" x1="${L}" y1="${y(v)}" x2="${L + pw}" y2="${y(v)}"/>`;
    g += `<text class="rz-ytick" x="${L - 8}" y="${y(v) + 4}">${v}</text>`;
  });
  g += `<line class="rz-axis" x1="${L}" y1="${T}" x2="${L}" y2="${T + ph}"/>`;
  g += `<line class="rz-axis" x1="${L}" y1="${T + ph}" x2="${L + pw}" y2="${T + ph}"/>`;
  g += `<text class="rz-ylabel" transform="translate(14,${T + ph / 2}) rotate(-90)">Percentile (Pres.)</text>`;

  // one series per leader
  entries.forEach(e => {
    const c = e.color || eraColor(e.l);
    const pts = FACETS.map((f, i) => ({ i, k: f.key, lo: e.rec.f[f.key][0], hi: e.rec.f[f.key][1], m: fMid(e.rec, f.key) }));
    if (!opts.noBand) {
      const top = pts.map(p => `${x(p.i)},${y(p.hi)}`).join(" ");
      const bot = pts.slice().reverse().map(p => `${x(p.i)},${y(p.lo)}`).join(" ");
      g += `<polygon class="rz-band" fill="${c}" fill-opacity="0.16" points="${top} ${bot}"/>`;
    }
    g += `<polyline class="rz-line" style="stroke:${c}" points="${pts.map(p => `${x(p.i)},${y(p.m)}`).join(" ")}"/>`;
    pts.forEach(p => {
      const cx = x(p.i), cy = y(p.m), s = 4.5;
      const liability = p.m < 50;
      const shape = liability
        ? `<polygon class="rz-mk liab" style="fill:${c}" points="${cx},${cy - s - 1} ${cx + s + 1},${cy} ${cx},${cy + s + 1} ${cx - s - 1},${cy}"/>`
        : `<rect class="rz-mk" style="fill:${c}" x="${cx - s}" y="${cy - s}" width="${s * 2}" height="${s * 2}"/>`;
      g += `<g class="rz-pt" data-facet="${p.k}"><title>${esc(e.l.name)} · ${esc(FACET_BY_KEY[p.k].name)}: ${p.lo}–${p.hi}</title>${shape}</g>`;
    });
  });

  // facet labels, rotated as in the original
  FACETS.forEach((f, i) => {
    g += `<text class="rz-xtick" transform="translate(${x(i) + 3},${T + ph + 14}) rotate(-45)">${esc(f.short)}</text>`;
  });

  // group brackets
  if (!opts.compact) {
    const by = T + ph + 122;
    RGROUPS.forEach(gr => {
      const idx = FACETS.map((f, i) => (f.group === gr.key ? i : -1)).filter(i => i >= 0);
      const x0 = x(idx[0]) - 14, x1 = x(idx[idx.length - 1]) + 14;
      g += `<line class="rz-bracket" x1="${x0}" y1="${by}" x2="${x1}" y2="${by}"/>`;
      g += `<text class="rz-gname" x="${(x0 + x1) / 2}" y="${by + 17}">${esc(gr.label)}</text>`;
    });
  }
  return `<svg class="rz-chart" viewBox="0 0 ${W} ${H}" width="100%" preserveAspectRatio="xMidYMid meet">${g}</svg>`;
}

function sourceBadge(rec) {
  const m = { published: ["Published", "Values read from Rubenzer & Faschingbauer's own chart"],
              user: ["Your assessment", "Your own scoring, kept in your words"],
              estimate: ["Estimate", "My estimate in the Rubenzer framework, not his data"] };
  const [lab, tip] = m[rec.source] || m.estimate;
  return `<span class="rz-src ${rec.source}" title="${tip}">${lab}</span>`;
}

// the Simonton style block on a leader profile
function stylesHtml(l) {
  const rec = getStyles(l);
  if (!rec) return "";
  const dom = dominantStyle(rec);
  const rows = SSTYLES.map(x => `<div class="sm-row"><span class="sm-name">${esc(x.name)}</span>
    <span class="sm-track"><span class="sm-fill" style="width:${rec.s[x.key]}%;background:${x.color}"></span></span>
    <span class="sm-val">${rec.s[x.key]}</span></div>`).join("");
  return `<div class="d-field d-styles">
    <h4>Leadership Style <span class="pb-h4sub">\u2014 Simonton's five factors</span> <span class="sm-domain ${rec.domain}" title="${esc(DOMAIN_LABEL[rec.domain])}">${esc(DOMAIN_LABEL[rec.domain])}</span></h4>
    <div class="sm-dom">Dominant: <b style="color:${dom.color}">${esc(dom.name)}</b> \u00b7 signature <b>${esc(styleSignature(rec))}</b></div>
    <div class="sm-list">${rows}</div>
    <div class="rz-note">${esc(rec.note)}</div>
    <div class="d-actions" style="margin-top:9px"><button id="d-styles-open">\u2197 Open in Styles</button></div>
  </div>`;
}

// the "Temperament" block on a leader profile
function temperamentHtml(l) {
  const rec = getTemperament(l);
  if (!rec) {
    const why = (window.UNSCOREABLE || {})[l.id];
    return why ? `<div class="d-field"><h4>Temperament</h4><div class="rz-none"><b>Not responsibly scoreable.</b> ${esc(why)}</div></div>` : "";
  }
  const notes = Object.entries(rec.notes || {}).map(([k, t]) =>
    `<div class="rz-note"><b>${esc(FACET_BY_KEY[k] ? FACET_BY_KEY[k].name : k)}</b> — ${esc(t)}</div>`).join("");
  return `<div class="d-field d-temperament">
    <h4>Temperament <span class="pb-h4sub">— Rubenzer facet profile</span> ${sourceBadge(rec)}</h4>
    <div class="rz-profile">${esc(rec.profile)}</div>
    ${profileChartSvg([{ l, rec }], { compact: true })}
    <div class="rz-scores">${FACETS.map(f => `<span class="rz-chip ${fMid(rec, f.key) < 50 ? "liab" : ""}" title="${esc(f.name)} (${esc(f.neo)}) — high: ${esc(f.adjHigh.slice(0,4).join(", "))} · low: ${esc(f.adjLow.slice(0,4).join(", "))}">${esc(f.short)} <b>${rec.f[f.key][0]}–${rec.f[f.key][1]}</b></span>`).join("")}</div>
    ${rec.contested ? `<div class="rz-contested"><b>Contested</b> — ${esc(rec.contested)}</div>` : ""}
    ${notes}
    ${(() => { const mine = anecdotesFor({ leader: l.id });
      return mine.length ? `<div class="an-onprofile"><h5>Illustrations</h5>${mine.map(a => anecdoteCard(a, { showLeader: false })).join("")}</div>` : ""; })()}
    <div class="d-actions" style="margin-top:9px"><button id="d-temp-open">↗ Open in Temperament</button></div>
  </div>`;
}

/* ---------------- power base (selectorate theory) ---------------- */

function getPowerBase(l) {
  if (l && l.powerbase) return l.powerbase;
  return (window.POWER_BASE && window.POWER_BASE[l.id]) || null;
}
const W_SCALE = ["", "Dozens", "Hundreds", "Thousands", "Hundreds of thousands", "Millions"];

function powerBaseHtml(l) {
  const pb = getPowerBase(l);
  if (!pb) return "";
  // ring radii on a log scale so 25 and 100,000,000 both fit in one diagram
  const ring = n => 9 + 10 * Math.log10(Math.max(2, n));
  const R = { n: ring(pb.sizes.n), s: ring(pb.sizes.s), w: ring(pb.sizes.w) };
  const max = Math.max(R.n, R.s, R.w), c = max + 3, D = 2 * max + 6;
  const svg = `<svg class="pb-rings" viewBox="0 0 ${D} ${D}" width="${D}" height="${D}" aria-hidden="true">
    <circle cx="${c}" cy="${c}" r="${R.n}" class="pb-ring-n"/>
    <circle cx="${c}" cy="${c}" r="${R.s}" class="pb-ring-s"/>
    <circle cx="${c}" cy="${c}" r="${R.w}" class="pb-ring-w"/>
    <text x="${c}" y="${c + 3}" class="pb-ring-label">W</text>
  </svg>`;
  const circle = (k, label, sub, d) => `<div class="pb-circle pb-${k}"><div class="pb-ck"><span class="pb-swatch pb-sw-${k}"></span><b>${label}</b> <i>${sub}</i><span class="pb-size">${esc(d.size)}</span></div><div class="pb-who">${esc(d.who)}</div></div>`;
  const meter = `<div class="pb-meter"><span class="pb-meter-l">Tiny coalition</span><div class="pb-track">${[1, 2, 3, 4, 5].map(i => `<span class="pb-tick ${i === pb.w_scale ? "on" : ""}" title="${W_SCALE[i]}"></span>`).join("")}</div><span class="pb-meter-l">Mass coalition</span><span class="pb-meter-v">W ≈ ${W_SCALE[pb.w_scale] || ""}</span></div>`;
  const row = (label, txt) => txt ? `<div class="pb-row"><div class="pb-rl">${label}</div><div class="pb-rt">${esc(txt)}</div></div>` : "";
  return `<div class="d-field d-powerbase">
    <h4>Power Base <span class="pb-h4sub">— selectorate analysis</span></h4>
    <div class="pb-system">${esc(pb.system)}</div>
    <div class="pb-top">${svg}<div class="pb-circles">
      ${circle("n", "N", "Interchangeables · nominal selectorate", pb.n)}
      ${circle("s", "S", "Influentials · real selectorate", pb.s)}
      ${circle("w", "W", "Essentials · winning coalition", pb.w)}
    </div></div>
    ${meter}
    ${row("Loyalty norm (W/S)", pb.loyalty)}
    ${row("Paid in", pb.currency)}
    ${row("Revenue", pb.revenue)}
    ${row("Coalition shuffle", pb.shuffle)}
    ${row("Danger moments", pb.danger)}
    ${row("Survival verdict", pb.verdict)}
    <div class="pb-src">Framework: Bueno de Mesquita, Smith, Siverson &amp; Morrow, <a class="pb-book" data-book="logic-political-survival">The Logic of Political Survival</a> · <a class="pb-book" data-book="dictators-handbook">The Dictator's Handbook</a></div>
    <div class="d-actions" style="margin-top:10px"><button id="d-bdm-open">↗ Compare with the other ${Object.keys(window.POWER_BASE || {}).length - 1} in Survival</button></div>
  </div>`;
}

/* ---------------- carrots & sticks ---------------- */

const REGISTERS = [
  { key: "trust",    label: "Trust",      color: "var(--reg-trust)",    blurb: "getting people to believe you" },
  { key: "loyalty",  label: "Loyalty",    color: "var(--reg-loyalty)",  blurb: "binding them to you" },
  { key: "fear",     label: "Fear",       color: "var(--reg-fear)",     blurb: "making them afraid to cross you" },
  { key: "motivate", label: "Motivation", color: "var(--reg-motivate)", blurb: "making them act" }
];
const REG_BY_KEY = Object.fromEntries(REGISTERS.map(r => [r.key, r]));
const INSTRUMENT_BY_KEY = Object.fromEntries((window.INSTRUMENTS || []).map(i => [i.key, i]));

// effective instrument record: own field > seeded map > null
function getInstruments(l) {
  if (l && l.instruments) return l.instruments;
  return (window.LEADER_INSTRUMENTS && window.LEADER_INSTRUMENTS[l.id]) || null;
}
// every leader who used a given instrument, with their specific detail
function usersOf(key) {
  const out = [];
  window.ALL_LEADERS.forEach(l => {
    const rec = getInstruments(l);
    if (!rec) return;
    (rec.tools || []).forEach(t => { if (t.key === key) out.push({ l, detail: t.detail }); });
  });
  return out.sort((a, b) => startYear(a.l) - startYear(b.l));
}

// the "Carrots & Sticks" block on a leader profile
function instrumentsHtml(l) {
  const rec = getInstruments(l);
  if (!rec) return "";
  const creed = (rec.creed && rec.creed !== "—")
    ? `<div class="d-creed"><div class="said"><span class="cr-label">What they said moved people</span>${esc(rec.creed)}</div>${rec.practice ? `<div class="did"><span class="cr-label">What they actually used</span>${esc(rec.practice)}</div>` : ""}</div>`
    : (rec.practice ? `<div class="d-creed"><div class="did"><span class="cr-label">In practice</span>${esc(rec.practice)}</div></div>` : "");
  const groups = REGISTERS.map(r => {
    const tools = (rec.tools || []).filter(t => t.reg === r.key);
    if (!tools.length) return "";
    return `<div class="cs-reg" style="--reg-color:${r.color}"><h5>${r.label}</h5>` +
      tools.map(t => {
        const inst = INSTRUMENT_BY_KEY[t.key];
        return `<div class="cs-item"><b class="cs-tool" data-inst="${t.key}" style="cursor:pointer">${esc(inst ? inst.name : t.key)}</b> <span class="cs-d">— ${esc(t.detail)}</span></div>`;
      }).join("") + `</div>`;
  }).join("");
  return `<div class="d-field"><h4>Carrots &amp; Sticks</h4>${creed}${groups}</div>`;
}

// the "Reading" block for a leader profile
function readingHtml(l) {
  const books = booksForLeader(l.id).sort((a, b) => (a.title || "").localeCompare(b.title || ""));
  const rows = books.map(b => `<div class="read-row" data-book="${b.id}">
      <div class="rr-top"><span class="rr-title">${esc(b.title)}</span><span class="rr-author">${esc(b.author)}${b.year ? ", " + b.year : ""}</span><span class="rr-shelf">${shelfBadge(b)}</span>${b.rating ? `<span class="bk-stars">${stars(b.rating)}</span>` : ""}</div>
      ${b.takeaway ? `<div class="rr-take">“${esc(b.takeaway)}”</div>` : ""}
      ${b.note ? `<div class="rr-note">${esc(b.note)}</div>` : ""}
    </div>`).join("");
  return `<div class="d-field d-reading"><h4>Reading</h4>
    ${books.length ? `<div class="read-list">${rows}</div>` : `<div class="gap-note">No books linked to this leader yet.</div>`}
    <div class="d-actions" style="margin-top:9px"><button id="d-addbook">＋ Add a book</button></div></div>`;
}

/* ---------------- detail panel ---------------- */

let currentDetailId = null;   // the profile page on screen — see renderLeader() near the end of the file

/* ---------------- add / edit leader form ---------------- */

let editingId = null;

function countryOptions() {
  const m = new Map();
  window.ALL_LEADERS.forEach(l => { if (l.iso && !m.has(l.iso)) m.set(l.iso, l.country); });
  if (WORLD_FEATURES) WORLD_FEATURES.forEach(f => { const iso = pad(f.id); if (!m.has(iso)) m.set(iso, f.properties.name); });
  return [...m.entries()].map(([iso, name]) => ({ iso, name })).sort((a, b) => a.name.localeCompare(b.name));
}
function tagPickerHtml(chosenKeys) {
  const chosen = new Set(chosenKeys || []);
  return (window.TRAIT_SECTIONS || []).map(sec => {
    const opts = sec.traits.filter(t => t.key && t.taggable !== false);
    if (!opts.length) return "";
    return `<div class="tag-group"><h5>${sec.icon} ${sec.title}</h5><div class="tag-opts">` +
      opts.map(t => `<span class="tag-opt ${chosen.has(t.key) ? "on" : ""}" data-key="${t.key}">${t.name}</span>`).join("") + `</div></div>`;
  }).join("");
}

function openForm(leader) {
  editingId = leader ? leader.id : null;
  const l = leader || { era: "c20", tags: [] };
  const o = getOutcome(l);
  const instRec = getInstruments(l) || { creed: "", practice: "", tools: [] };
  const body = $("#form-body");
  const eraOpts = ERAS.map(e => `<option value="${e.key}" ${l.era === e.key ? "selected" : ""}>${e.label}</option>`).join("");
  const cOpts = ['<option value="">— none (won\'t appear on map) —</option>']
    .concat(countryOptions().map(c => `<option value="${c.iso}" ${l.iso === c.iso ? "selected" : ""}>${esc(c.name)} (${c.iso})</option>`)).join("");
  const exitOpts = ['<option value="">— unknown —</option>'].concat(Object.entries(EXITS).map(([k, v]) => `<option value="${k}" ${o.exit === k ? "selected" : ""}>${v}</option>`)).join("");
  const sucOpts = ['<option value="">— unknown —</option>'].concat(Object.entries(SUCCESSIONS).map(([k, v]) => `<option value="${k}" ${o.succession === k ? "selected" : ""}>${v}</option>`)).join("");
  const removable = leader && customIds.has(leader.id);

  body.innerHTML = `
    <h2>${leader ? "Edit leader" : "Add a leader"}</h2>
    <p class="form-hint">${leader && isSeeded(leader.id) ? "Editing a built-in leader saves your version locally (the original file is untouched)." : "Saved in this browser. Use Export to back up or move into data/leaders.js."}</p>
    <div class="f-row"><label>Name *</label><input type="text" id="f-name" value="${esc(l.name)}"></div>
    <div class="f-row two">
      <div><label>Title / Office</label><input type="text" id="f-title" value="${esc(l.title)}"></div>
      <div><label>Years / Dates</label><input type="text" id="f-years" value="${esc(l.years)}"></div>
    </div>
    <div class="f-row two">
      <div><label>Country (places on map)</label><select id="f-country">${cOpts}</select></div>
      <div><label>Era</label><select id="f-era">${eraOpts}</select></div>
    </div>
    <div class="f-row f-check"><input type="checkbox" id="f-pres" ${l.president ? "checked" : ""}><label style="margin:0;letter-spacing:0;text-transform:none;color:var(--text);font-size:13.5px">★ Show under the Presidents filter</label></div>
    <div class="f-row two">
      <div><label>How power ended (exit)</label><select id="f-exit">${exitOpts}</select></div>
      <div><label>What followed (succession)</label><select id="f-succ">${sucOpts}</select></div>
    </div>
    <div class="f-row"><label>Biography (narrative notes)</label><textarea id="f-bio" style="min-height:120px">${esc(getBio(l))}</textarea></div>
    <div class="f-row"><label>Leadership Style</label><textarea id="f-style">${esc(l.style)}</textarea></div>
    <div class="f-row"><label>Organizational Structure</label><textarea id="f-structure">${esc(l.structure)}</textarea></div>
    <div class="f-row"><label>Delegation</label><textarea id="f-delegation">${esc(l.delegation)}</textarea></div>
    <div class="f-row"><label>Stated creed — what they said moved people</label><textarea id="f-creed" style="min-height:55px" placeholder="A quote or doctrine, if one is recorded">${esc(instRec.creed && instRec.creed !== "—" ? instRec.creed : "")}</textarea></div>
    <div class="f-row"><label>In practice — what they actually reached for</label><textarea id="f-practice" style="min-height:70px">${esc(instRec.practice)}</textarea></div>
    <div class="f-row"><label>Carrots &amp; sticks (one per line: <code>register: tool-key — detail</code>)</label><textarea id="f-tools" style="min-height:110px" placeholder="fear: f_exemplary — what they did&#10;loyalty: l_honors — what they did">${esc((instRec.tools || []).map(t => `${t.reg}: ${t.key} — ${t.detail}`).join("\n"))}</textarea>
      <div class="save-state" style="margin-top:5px">Registers: trust · loyalty · fear · motivate. Tool keys: ${(window.INSTRUMENTS || []).map(i => i.key).join(", ")}</div></div>
    <div class="f-row"><label>Key subordinates &amp; collaborators (one per line: Name — role)</label><textarea id="f-collabs" style="min-height:100px" placeholder="Name — their role&#10;Another name — their role">${esc(getCollabs(l).map(c => c.role ? c.name + " — " + c.role : c.name).join("\n"))}</textarea></div>
    <div class="f-row"><label>Portrait image URL (optional — leave blank to auto-fetch from Wikipedia)</label><input type="text" id="f-img" value="${esc(l.img)}" placeholder="https://…"></div>
    <div class="f-row"><label>Traits &amp; Concepts</label><div class="tag-picker">${tagPickerHtml(l.tags)}</div></div>
    <div class="form-buttons">
      <button class="btn-save" id="f-save">${leader ? "Save changes" : "Add leader"}</button>
      <button class="btn-cancel" id="f-cancel">Cancel</button>
      ${removable ? `<button class="btn-delete" id="f-delete">${isSeeded(leader.id) ? "Reset to original" : "Delete"}</button>` : ""}
    </div>
    <div class="form-msg" id="f-msg"></div>`;

  body.querySelectorAll(".tag-opt").forEach(o => o.onclick = () => o.classList.toggle("on"));
  $("#f-save").onclick = saveForm;
  $("#f-cancel").onclick = closeForm;
  if (removable) $("#f-delete").onclick = () => deleteLeader(leader.id);
  $("#form-panel").hidden = false; $("#form-overlay").hidden = false; $("#form-panel").scrollTop = 0;
}
function closeForm() { editingId = null; $("#form-panel").hidden = true; $("#form-overlay").hidden = true; }
function slugify(s) { return String(s).toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "") || "leader"; }
function uniqueId(name) {
  let base = slugify(name), id = base, i = 2;
  const taken = new Set(window.ALL_LEADERS.map(l => l.id));
  while (taken.has(id)) id = base + "-" + (i++);
  return id;
}

function saveForm() {
  const name = $("#f-name").value.trim();
  if (!name) { $("#f-msg").textContent = "Name is required."; return; }
  const iso = $("#f-country").value;
  const country = iso ? (countryOptions().find(c => c.iso === iso) || {}).name || "" : "";
  const tags = [...document.querySelectorAll("#form-body .tag-opt.on")].map(o => o.dataset.key);
  const rec = {
    id: editingId || uniqueId(name), name,
    title: $("#f-title").value.trim(), years: $("#f-years").value.trim(),
    country, iso, era: $("#f-era").value, president: $("#f-pres").checked,
    style: $("#f-style").value.trim(), structure: $("#f-structure").value.trim(), delegation: $("#f-delegation").value.trim(),
    tags
  };
  const img = $("#f-img").value.trim();
  if (img) rec.img = img;

  const bio = $("#f-bio").value.trim();
  if (bio && bio !== ((window.BIOS && window.BIOS[rec.id]) || "")) rec.bio = bio;

  const collabs = $("#f-collabs").value.split("\n").map(line => {
    const parts = line.split(/\s[—–-]\s/);
    const nm = (parts.shift() || "").trim();
    return nm ? { name: nm, role: parts.join(" — ").trim() } : null;
  }).filter(Boolean);
  const seededCollabs = (window.COLLABORATORS && window.COLLABORATORS[rec.id]) || [];
  if (JSON.stringify(collabs) !== JSON.stringify(seededCollabs)) rec.collaborators = collabs;

  // carrots & sticks — "register: tool-key — detail" per line
  const tools = $("#f-tools").value.split("\n").map(line => {
    const m = line.match(/^\s*(trust|loyalty|fear|motivate)\s*:\s*([A-Za-z0-9_]+)\s*[—–-]\s*(.+)$/i);
    return m ? { reg: m[1].toLowerCase(), key: m[2].trim(), detail: m[3].trim() } : null;
  }).filter(Boolean);
  const instNew = { creed: $("#f-creed").value.trim() || "—", practice: $("#f-practice").value.trim(), tools };
  const seededInst = (window.LEADER_INSTRUMENTS && window.LEADER_INSTRUMENTS[rec.id]) || null;
  const instChanged = !seededInst || JSON.stringify(instNew) !== JSON.stringify({ creed: seededInst.creed || "—", practice: seededInst.practice || "", tools: seededInst.tools || [] });
  if (instChanged && (tools.length || instNew.practice || instNew.creed !== "—")) rec.instruments = instNew;

  const outcome = { exit: $("#f-exit").value, succession: $("#f-succ").value };
  const seededOut = (window.OUTCOMES && window.OUTCOMES[rec.id]) || { exit: "", succession: "" };
  if ((outcome.exit || outcome.succession) && (outcome.exit !== (seededOut.exit || "") || outcome.succession !== (seededOut.succession || ""))) rec.outcome = outcome;

  const custom = loadCustom().filter(x => x.id !== rec.id);
  custom.push(rec);
  saveCustom(custom);
  if (img) localStorage.removeItem("atlas-img-" + rec.id);
  rebuildAll(); closeForm(); render(); refreshView(); openDetail(rec.id);
}
function deleteLeader(id) {
  const seeded = isSeeded(id);
  if (!confirm(seeded ? "Reset this leader to the built-in version? Your edits will be discarded." : "Delete this leader from your index?")) return;
  saveCustom(loadCustom().filter(x => x.id !== id));
  localStorage.removeItem("atlas-img-" + id);
  rebuildAll(); closeForm(); render(); refreshView();
}

/* ---------------- backup: export / import (leaders + notes + insights) ---------------- */

function allNotes() {
  const notes = {};
  for (let i = 0; i < localStorage.length; i++) {
    const k = localStorage.key(i);
    if (k && k.startsWith("atlas-note-") && localStorage.getItem(k)) notes[k.slice(11)] = localStorage.getItem(k);
  }
  return notes;
}
function exportBackup() {
  const bundle = { format: "leader-atlas-backup", version: 3, exportedAt: new Date().toISOString(), leaders: loadCustom(), notes: allNotes(), insights: loadInsights(), books: loadCustomBooks() };
  if (!bundle.leaders.length && !Object.keys(bundle.notes).length && !bundle.insights.length && !bundle.books.length) { alert("Nothing to export yet — add a leader, write a note, shelve a book, or record an insight first."); return; }
  const blob = new Blob([JSON.stringify(bundle, null, 2)], { type: "application/json" });
  const a = document.createElement("a");
  a.href = URL.createObjectURL(blob); a.download = "leader-atlas-backup.json"; a.click();
  URL.revokeObjectURL(a.href);
}
function importBackup(ev) {
  const file = ev.target.files[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = () => {
    try {
      const data = JSON.parse(reader.result);
      let nL = 0, nN = 0, nI = 0, nB = 0;
      const leaders = Array.isArray(data) ? data : (Array.isArray(data.leaders) ? data.leaders : []);
      if (leaders.length) {
        const m = new Map(loadCustom().map(l => [l.id, l]));
        leaders.forEach(l => { if (l && l.id && l.name) { m.set(l.id, l); nL++; } });
        saveCustom([...m.values()]);
      }
      if (data && data.notes && typeof data.notes === "object") Object.entries(data.notes).forEach(([id, txt]) => { if (txt) { localStorage.setItem("atlas-note-" + id, txt); nN++; } });
      if (data && Array.isArray(data.insights)) {
        const m = new Map(loadInsights().map(i => [i.id, i]));
        data.insights.forEach(i => { if (i && i.id) { m.set(i.id, i); nI++; } });
        saveInsights([...m.values()]);
      }
      if (data && Array.isArray(data.books)) {
        const m = new Map(loadCustomBooks().map(b => [b.id, b]));
        data.books.forEach(b => { if (b && b.id) { m.set(b.id, b); nB++; } });
        saveCustomBooks([...m.values()]);
      }
      if (!nL && !nN && !nI && !nB) throw new Error("No leaders, notes, insights, or books found in that file.");
      rebuildAll(); rebuildBooks(); render(); refreshView();
      alert(`Imported ${nL} leader record(s), ${nN} note(s), ${nI} insight(s), ${nB} book(s).`);
    } catch (e) { alert("Couldn't read that file.\n\n" + e.message); }
    ev.target.value = "";
  };
  reader.readAsText(file);
}

/* ---------------- map ---------------- */

let mapCtx = null, mapStarted = false;
var WORLD_FEATURES = null;
const WORLD = fetch("vendor/countries-110m.json").then(r => r.json())
  .then(w => { WORLD_FEATURES = topojson.feature(w, w.objects.countries).features; return WORLD_FEATURES; })
  .catch(() => null);
// the map is built the first time its view is shown, when it has a size to fit
async function initMap() {
  if (mapStarted) return;
  mapStarted = true;
  const wrap = $("#map-wrap");
  const features = await WORLD;
  if (!features) { $("#map-error").hidden = false; $("#map-hint").hidden = true; return; }
  const w = wrap.clientWidth || 800, h = wrap.clientHeight || 520;
  const svg = d3.select("#map").append("svg").attr("viewBox", `0 0 ${w} ${h}`).attr("width", "100%").attr("height", "100%");
  const projection = d3.geoNaturalEarth1().fitExtent([[10, 10], [w - 10, h - 10]], { type: "Sphere" });
  const path = d3.geoPath(projection);
  const g = svg.append("g");
  g.append("path").attr("class", "map-sphere").attr("d", path({ type: "Sphere" }));
  g.append("path").attr("class", "map-grat").attr("d", path(d3.geoGraticule10())).attr("fill", "none").attr("stroke", "var(--line)").attr("stroke-width", 0.5);
  const tooltip = $("#map-tooltip");
  g.selectAll("path.country").data(features).join("path").attr("class", "country").attr("d", path)
    .on("mousemove", (event, d) => {
      const iso = pad(d.id), n = countryCounts()[iso] || 0;
      tooltip.hidden = false;
      tooltip.innerHTML = `<strong>${esc(d.properties.name)}</strong><br><span class="tt-count">${n} leader${n === 1 ? "" : "s"} in current filters</span>`;
      const r = wrap.getBoundingClientRect();
      tooltip.style.left = Math.min(event.clientX - r.left + 14, r.width - 250) + "px";
      tooltip.style.top = (event.clientY - r.top + 10) + "px";
    })
    .on("mouseleave", () => tooltip.hidden = true)
    .on("click", (event, d) => { const iso = pad(d.id); state.country === iso ? setCountry(null, null) : setCountry(iso, d.properties.name); });
  svg.call(d3.zoom().scaleExtent([1, 9]).on("zoom", ev => g.attr("transform", ev.transform)));
  mapCtx = { svg, g, path, features };
  paintMap();
}
function countryCounts() { const c = {}; window.ALL_LEADERS.forEach(l => { if (matchesBase(l)) c[l.iso] = (c[l.iso] || 0) + 1; }); return c; }
function paintMap() {
  if (!mapCtx) return;
  const counts = countryCounts();
  const max = Math.max(1, ...Object.values(counts));
  const scale = d3.scaleSqrt().domain([0, max]).range([0, 1]);
  const land = cssVar("--map-land"), hot = cssVar("--map-hot");
  const color = t => d3.interpolateRgb(land, hot)(0.22 + 0.78 * t);
  mapCtx.g.selectAll("path.country")
    .attr("fill", d => { const n = counts[pad(d.id)] || 0; return n ? color(scale(n)) : land; })
    .classed("has-leaders", d => !!counts[pad(d.id)])
    .classed("selected", d => state.country === pad(d.id));
}
function setCountry(iso, name) { state.country = iso; state.countryName = name; render(); }

/* ================================================================
   COMPARE
   ================================================================ */

function renderCompare() {
  const ctl = $("#compare-controls"), body = $("#compare-body");
  const sorted = window.ALL_LEADERS.slice().sort((a, b) => a.name.localeCompare(b.name));
  const opts = sel => ['<option value="">— choose a leader —</option>'].concat(sorted.map(l => `<option value="${l.id}" ${sel === l.id ? "selected" : ""}>${esc(l.name)} (${esc(l.years)})</option>`)).join("");
  ctl.innerHTML = `
    <select id="cmp-a">${opts(state.compare.a)}</select>
    <span class="cmp-vs">versus</span>
    <select id="cmp-b">${opts(state.compare.b)}</select>
    <button class="cmp-btn" id="cmp-similar" title="Fill the second slot with the closest case by shared concepts">Most similar to A</button>
    <button class="cmp-btn" id="cmp-different" title="Fill the second slot with a leader who shares as little as possible with A">Most different from A</button>
    <button class="cmp-btn" id="cmp-swap">⇄ Swap</button>`;
  $("#cmp-a").onchange = e => { state.compare.a = e.target.value || null; renderCompare(); };
  $("#cmp-b").onchange = e => { state.compare.b = e.target.value || null; renderCompare(); };
  $("#cmp-swap").onclick = () => { [state.compare.a, state.compare.b] = [state.compare.b, state.compare.a]; renderCompare(); };
  $("#cmp-similar").onclick = () => { const a = byId(state.compare.a); if (!a) return; const s = mostSimilar(a, 1)[0]; if (s) { state.compare.b = s.l.id; renderCompare(); } };
  $("#cmp-different").onclick = () => {
    const a = byId(state.compare.a); if (!a) return;
    const cand = window.ALL_LEADERS.filter(x => x.id !== a.id && (x.tags || []).length >= 3).map(x => ({ x, s: similarity(a, x) })).sort((p, q) => p.s - q.s)[0];
    if (cand) { state.compare.b = cand.x.id; renderCompare(); }
  };

  const A = byId(state.compare.a), B = byId(state.compare.b);
  if (!A || !B) { body.innerHTML = `<div class="cmp-empty">Pick two leaders — or open any profile and press <strong>⇄ Compare</strong> to start from there.</div>`; return; }

  const shared = new Set(sharedTags(A, B));
  const sim = Math.round(similarity(A, B) * 100);
  const col = (L, other) => {
    const era = ERA_BY_KEY[L.era] || { label: L.era, color: "#888" };
    const tags = (L.tags || []).map(k => `<span class="cmp-tag ${shared.has(k) ? "shared" : ""}">${TRAIT_BY_KEY[k] ? TRAIT_BY_KEY[k].name : k}</span>`).join("");
    const f = (h, v) => `<div class="cmp-field"><h5>${h}</h5><p>${esc(v) || "—"}</p></div>`;
    return `<div class="cmp-col" style="--era-color:${era.color}">
      <div class="cmp-head"><div class="cmp-portrait" data-pid="${L.id}">${initials(L.name)}</div><div><h3><a class="cmp-open" data-id="${L.id}" style="cursor:pointer">${esc(L.name)}</a></h3><div class="cmp-sub">${esc(L.title)} · ${esc(L.country)} · ${esc(L.years)}</div>${outcomeChips(L)}</div></div>
      <div class="cmp-field"><h5>Concepts</h5><div class="cmp-tags">${tags || "—"}</div></div>
      ${getBio(L) ? f("Biography", getBio(L)) : ""}
      ${f("Leadership Style", L.style)}${f("Organizational Structure", L.structure)}${f("Delegation", L.delegation)}
      ${collabsHtml(L, true)}
    </div>`;
  };
  body.innerHTML = `<div class="cmp-summary">Similarity <strong>${sim}%</strong> · <strong>${shared.size}</strong> shared concept${shared.size === 1 ? "" : "s"}${shared.size ? ": " + [...shared].map(k => TRAIT_BY_KEY[k] ? TRAIT_BY_KEY[k].name : k).join(", ") : ""}. Highlighted concepts are shared; the rest is where they differ — that difference is the variable to interrogate.</div>
    <div class="cmp-grid">${col(A, B)}${col(B, A)}</div>`;
  body.querySelectorAll(".cmp-open").forEach(a => a.onclick = () => openDetail(a.dataset.id));
  body.querySelectorAll(".collab-link").forEach(a => a.onclick = () => openDetail(a.dataset.id));
  [A, B].forEach(L => fetchPortrait(L).then(url => { const p = body.querySelector(`.cmp-portrait[data-pid="${L.id}"]`); if (p && url) p.innerHTML = `<img src="${url}" alt="">`; }));
}

/* ================================================================
   PATTERNS
   ================================================================ */

function renderPatterns() {
  const body = $("#patterns-body");
  const L = window.ALL_LEADERS;
  const has = (l, k) => (l.tags || []).includes(k);
  const known = L.filter(l => { const o = getOutcome(l); return o.succession === "orderly" || o.succession === "crisis"; });
  const baseCrisis = known.length ? known.filter(l => getOutcome(l).succession === "crisis").length / known.length : 0;
  const pct = x => Math.round(x * 100) + "%";
  const tName = k => TRAIT_BY_KEY[k] ? TRAIT_BY_KEY[k].name : k;

  // ---- overview
  const tagged = L.filter(l => (l.tags || []).length).length;
  let html = `<section class="pat-section"><h3>Overview</h3><div class="pat-stats">
    <div class="stat"><div class="v">${L.length}</div><div class="k">leaders</div></div>
    <div class="stat"><div class="v">${tagged}</div><div class="k">tagged</div></div>
    <div class="stat"><div class="v">${known.length}</div><div class="k">with known succession</div></div>
    <div class="stat"><div class="v">${pct(baseCrisis)}</div><div class="k">base rate: succession crisis</div></div>
    <div class="stat"><div class="v">${loadInsights().length}</div><div class="k">insights recorded</div></div>
  </div><p class="how">The base rate is the number to beat. A concept only "predicts" a crisis if its rate is meaningfully above ${pct(baseCrisis)} — and only with enough cases to trust.</p></section>`;

  // ---- concept × outcome
  const rows = TAGGABLE.map(t => {
    const grp = L.filter(l => has(l, t.key));
    const k = grp.filter(l => ["orderly", "crisis"].includes(getOutcome(l).succession));
    const crisis = k.filter(l => getOutcome(l).succession === "crisis").length;
    const exits = {};
    grp.forEach(l => { const e = getOutcome(l).exit; if (e && e !== "incumbent") exits[e] = (exits[e] || 0) + 1; });
    const exitStr = Object.entries(exits).sort((a, b) => b[1] - a[1]).slice(0, 3).map(([e, n]) => `${EXITS[e].toLowerCase()} ${n}`).join(" · ");
    return { t, n: grp.length, kn: k.length, crisis, rate: k.length ? crisis / k.length : null, exitStr };
  }).filter(r => r.kn >= 2).sort((a, b) => (b.rate ?? -1) - (a.rate ?? -1));
  html += `<section class="pat-section"><h3>Concept → How Power Ends</h3>
    <p class="how">For each concept: of the leaders tagged with it whose succession is known, what share ended in a succession crisis — and how did they leave? Sorted by crisis rate. Rows with fewer than 5 known cases are flagged; treat those as hints, not findings.</p>
    <table class="xtab"><thead><tr><th>Concept</th><th>Section</th><th>Tagged</th><th>Succession crisis rate</th><th>How they left (top exits)</th></tr></thead><tbody>
    <tr class="base"><td>All leaders (base rate)</td><td>—</td><td class="num">${L.length}</td><td><span class="bar" style="width:${Math.round(baseCrisis * 120)}px"></span>${pct(baseCrisis)} <span class="lowN">(${known.length} known)</span></td><td class="exit-dist">${(() => { const ex = {}; L.forEach(l => { const e = getOutcome(l).exit; if (e && e !== "incumbent") ex[e] = (ex[e] || 0) + 1; }); return Object.entries(ex).sort((a, b) => b[1] - a[1]).slice(0, 3).map(([e, n]) => `${EXITS[e].toLowerCase()} ${n}`).join(" · "); })()}</td></tr>
    ${rows.map(r => `<tr><td><a class="tlink" data-tag="${r.t.key}">${esc(r.t.name)}</a></td><td style="color:var(--muted);font-size:12px">${r.t.icon} ${esc(r.t.section)}</td><td class="num">${r.n}</td>
      <td><span class="bar ${r.rate <= baseCrisis ? "good" : ""}" style="width:${Math.round((r.rate || 0) * 120)}px"></span>${pct(r.rate || 0)} <span class="lowN">(${r.crisis}/${r.kn}${r.kn < 5 ? ", low n" : ""})</span></td><td class="exit-dist">${r.exitStr || "—"}</td></tr>`).join("")}
    </tbody></table></section>`;

  // ---- era × outcome
  html += `<section class="pat-section"><h3>Era → How Power Ends</h3><p class="how">Does succession get more orderly over time — or do modern institutions just move the failure elsewhere?</p>
    <table class="xtab"><thead><tr><th>Era</th><th>Leaders</th><th>Succession crisis rate</th><th>Top exits</th></tr></thead><tbody>
    ${ERAS.map(e => {
      const grp = L.filter(l => l.era === e.key), k = grp.filter(l => ["orderly", "crisis"].includes(getOutcome(l).succession));
      const c = k.filter(l => getOutcome(l).succession === "crisis").length, rate = k.length ? c / k.length : 0;
      const ex = {}; grp.forEach(l => { const x = getOutcome(l).exit; if (x && x !== "incumbent") ex[x] = (ex[x] || 0) + 1; });
      const exitStr = Object.entries(ex).sort((a, b) => b[1] - a[1]).slice(0, 3).map(([x, n]) => `${EXITS[x].toLowerCase()} ${n}`).join(" · ");
      return `<tr><td style="color:${e.color}">${e.label}</td><td class="num">${grp.length}</td><td><span class="bar ${rate <= baseCrisis ? "good" : ""}" style="width:${Math.round(rate * 120)}px"></span>${pct(rate)} <span class="lowN">(${c}/${k.length})</span></td><td class="exit-dist">${exitStr || "—"}</td></tr>`;
    }).join("")}</tbody></table></section>`;

  // ---- co-occurrence matrix
  const keys = TAGGABLE.filter(t => L.some(l => has(l, t.key)));
  const count = (a, b) => L.filter(l => has(l, a) && has(l, b)).length;
  const maxOff = Math.max(1, ...keys.flatMap((a, i) => keys.slice(i + 1).map(b => count(a.key, b.key))));
  const heatI = d3.interpolateRgb(cssVar("--heat-lo"), cssVar("--heat-hi"));
  const heat = n => { const t = 0.2 + 0.8 * Math.sqrt(n / maxOff); return `background:${heatI(t)};color:${t > 0.62 ? "#fff" : "var(--text)"}`; };
  let secSeen = null;
  html += `<section class="pat-section"><h3>Concept Co-occurrence</h3>
    <p class="how">How many leaders carry both concepts. Bright cells are syndromes — traits that travel together across centuries. Empty cells (—) are combinations that never occur in your index: sometimes a gap in tagging, sometimes a real tension in the nature of power. Click any cell to see those leaders in the Index; the diagonal is the concept's total.</p>
    <div class="matrix-wrap"><table class="matrix"><thead><tr><th></th>${keys.map(k => `<th class="colh"><div>${esc(k.name)}</div></th>`).join("")}</tr></thead><tbody>
    ${keys.map(r => {
      let secRow = "";
      if (r.section !== secSeen) { secSeen = r.section; secRow = `<tr><th class="sech" colspan="${keys.length + 1}">${r.icon} ${esc(r.section)}</th></tr>`; }
      return secRow + `<tr><th class="rowh">${esc(r.name)}</th>${keys.map(c => {
        const n = count(r.key, c.key), diag = r.key === c.key;
        if (diag) return `<td class="cell diag" data-a="${r.key}" title="${esc(r.name)}: ${n} leaders">${n}</td>`;
        return n ? `<td class="cell" style="${heat(n)}" data-a="${r.key}" data-b="${c.key}" title="${esc(r.name)} × ${esc(c.name)}: ${n}">${n}</td>` : `<td class="cell zero" title="${esc(r.name)} × ${esc(c.name)}: never co-occur">—</td>`;
      }).join("")}</tr>`;
    }).join("")}</tbody></table></div></section>`;

  body.innerHTML = html;
  body.querySelectorAll("a.tlink").forEach(a => a.onclick = () => filterByTags([a.dataset.tag]));
  body.querySelectorAll("td.cell:not(.zero)").forEach(td => td.onclick = () => filterByTags(td.dataset.b ? [td.dataset.a, td.dataset.b] : [td.dataset.a]));
}

/* ================================================================
   CARROTS & STICKS
   ================================================================ */

function renderInstruments() {
  const S = state.instruments, tb = $("#instruments-toolbar"), body = $("#instruments-body");
  const pill = (k, label, color) => `<button class="chip reg-pill ${S.reg === k ? "on" : ""}" data-reg="${k}" style="--reg-color:${color || "var(--accent)"}">${color ? '<span class="dot"></span>' : ""}${label}</button>`;
  tb.innerHTML = pill("all", "All registers") + REGISTERS.map(r => pill(r.key, r.label, r.color)).join("") +
    `<span class="toolbar-sep"></span>` + pill("creeds", "Creeds vs. practice") +
    `<input type="search" id="inst-search" class="tb-search" placeholder="Search tools, leaders, details…" value="${esc(S.search)}">`;
  tb.querySelectorAll("[data-reg]").forEach(b => b.onclick = () => { S.reg = b.dataset.reg; S.focus = null; renderInstruments(); });
  $("#inst-search").oninput = e => { S.search = e.target.value; S.focus = null; renderInstrumentsBody(); };
  renderInstrumentsBody();
}

function renderInstrumentsBody() {
  const S = state.instruments, body = $("#instruments-body");
  const q = S.search.trim().toLowerCase();

  if (S.reg === "creeds") {
    const withCreed = window.ALL_LEADERS
      .filter(l => { const r = getInstruments(l); return r && ((r.creed && r.creed !== "—") || r.practice); })
      .filter(l => { if (!q) return true; const r = getInstruments(l); return (l.name + " " + (r.creed || "") + " " + (r.practice || "")).toLowerCase().includes(q); })
      .sort((a, b) => startYear(a) - startYear(b));
    if (!withCreed.length) { body.innerHTML = `<div class="ins-empty">No creeds match that search.</div>`; return; }
    body.innerHTML = `<div class="cmp-summary">What a leader <strong>says</strong> moves people and what they <strong>reach for</strong> are rarely the same thing — and the gap is usually the most informative fact about them. ${withCreed.length} leaders with a recorded doctrine.</div>` +
      withCreed.map(l => {
        const r = getInstruments(l);
        const mix = {};
        (r.tools || []).forEach(t => mix[t.reg] = (mix[t.reg] || 0) + 1);
        return `<div class="creed-card">
          <div class="cr-top" data-id="${l.id}">${avatarMarkup(l)}<span class="cr-name">${esc(l.name)}</span><span class="cr-years">${esc(l.years)}</span></div>
          ${r.creed && r.creed !== "—" ? `<div class="cr-said"><span class="cr-label">Said</span>${esc(r.creed)}</div>` : ""}
          ${r.practice ? `<div class="cr-did"><span class="cr-label">Did</span>${esc(r.practice)}</div>` : ""}
          <div class="cr-mix">${REGISTERS.filter(x => mix[x.key]).map(x => `<span class="mix-chip" style="--reg-color:${x.color}">${x.label} ${mix[x.key]}</span>`).join("")}</div>
        </div>`;
      }).join("");
    body.querySelectorAll(".cr-top").forEach(c => c.onclick = () => openDetail(c.dataset.id));
    return;
  }

  const regs = S.reg === "all" ? REGISTERS : REGISTERS.filter(r => r.key === S.reg);
  let html = "";
  regs.forEach(r => {
    let list = (window.INSTRUMENTS || []).filter(i => i.reg === r.key);
    if (S.focus) list = list.filter(i => i.key === S.focus);
    if (q) list = list.filter(i => (i.name + " " + i.def + " " + i.cost).toLowerCase().includes(q) ||
      usersOf(i.key).some(u => (u.l.name + " " + u.detail).toLowerCase().includes(q)));
    if (!list.length) return;
    html += `<div class="reg-head" style="--reg-color:${r.color}"><h3>${r.label}</h3><span class="reg-sub">${r.blurb}</span></div>`;
    html += list.map(i => {
      let users = usersOf(i.key);
      if (q) { const f = users.filter(u => (u.l.name + " " + u.detail).toLowerCase().includes(q)); if (f.length) users = f; }
      return `<div class="inst-card" style="--reg-color:${r.color}">
        <h4>${esc(i.name)}</h4>
        <div class="i-def">${esc(i.def)}</div>
        <div class="i-cost"><b>The cost</b> — ${esc(i.cost)}</div>
        <div class="i-q">Ask: ${esc(i.q)}</div>
        ${users.length ? `<div class="inst-users">${users.map(u => `<div class="inst-use" data-id="${u.l.id}"><span class="iu-name">${esc(u.l.name)}</span> <span class="iu-detail">— ${esc(u.detail)}</span></div>`).join("")}</div>`
                       : `<div class="inst-none">No leader catalogued with this tool yet — add it on a profile via ✎ Edit.</div>`}
      </div>`;
    }).join("");
  });
  body.innerHTML = (S.focus ? `<div class="cmp-summary">Showing one tool. <a id="inst-clear" style="color:var(--accent);cursor:pointer">Show all</a></div>` : "") +
    (html || `<div class="ins-empty">Nothing matches that search.</div>`);
  const clr = $("#inst-clear");
  if (clr) clr.onclick = () => { S.focus = null; renderInstrumentsBody(); };
  body.querySelectorAll(".inst-use").forEach(u => u.onclick = () => openDetail(u.dataset.id));
}

/* ================================================================
   TEMPERAMENT — Rubenzer facet profiles
   ================================================================ */

function renderTemperament() {
  const S = state.temperament, tb = $("#temperament-toolbar");
  const mode = (k, label) => `<button class="chip ${S.mode === k ? "on" : ""}" data-tmode="${k}">${label}</button>`;
  tb.innerHTML = mode("ranked", "Ranked") + mode("profile", "Profile chart") + mode("anecdotes", "Anecdotes") + mode("facets", "The nine facets") + mode("styles", "Simonton styles") + mode("lta", "Hermann traits") +
    (S.mode === "ranked" || S.mode === "anecdotes" || S.mode === "styles" || S.mode === "lta"
      ? `<input type="search" id="rz-search" placeholder="${S.mode === "anecdotes" ? "Search anecdotes…" : "Search leaders…"}" value="${esc(S.search)}" class="tb-search">`
      : "");
  if (S.mode === "ranked" || S.mode === "anecdotes") {
    const pill = (k, label, cls) => `<button class="chip rz-sortpill ${cls || ""} ${S.sort === k ? "on" : ""}" data-sortk="${k}">${esc(label)}</button>`;
    tb.insertAdjacentHTML("beforeend",
      `<div class="rz-sortbar"><span class="rz-sortlab">${S.mode === "anecdotes" ? "Facet" : "Rank by"}</span>` +
      pill("composite", S.mode === "anecdotes" ? "All facets" : "Composite", "strong") +
      (S.mode === "anecdotes" ? "" : RGROUPS.map(g => pill("g:" + g.key, g.label, "grp")).join("")) +
      `<span class="rz-sortsep"></span>` +
      FACETS.map(f => pill(f.key, f.short)).join("") + `</div>`);
    tb.querySelectorAll("[data-sortk]").forEach(b => b.onclick = () => { S.sort = b.dataset.sortk; renderTemperament(); });
  }
  if (S.mode === "lta") {
    const pill = (k, label, cls) => `<button class="chip rz-sortpill ${cls || ""} ${S.ltaSort === k ? "on" : ""}" data-ltak="${k}">${esc(label)}</button>`;
    tb.insertAdjacentHTML("beforeend", `<div class="rz-sortbar"><span class="rz-sortlab">View</span>${pill("style", "Group by style", "strong")}<span class="rz-sortsep"></span><span class="rz-sortlab">Rank by</span>${(window.LTA_TRAITS || []).map(t => pill(t.key, t.short)).join("")}</div>`);
    tb.querySelectorAll("[data-ltak]").forEach(b => b.onclick = () => { S.ltaSort = b.dataset.ltak; renderTemperament(); });
  }
  tb.querySelectorAll("[data-tmode]").forEach(b => b.onclick = () => { S.mode = b.dataset.tmode; renderTemperament(); });
  if ($("#rz-search")) $("#rz-search").oninput = e => { S.search = e.target.value; renderTemperamentBody(); };
  renderTemperamentBody();
}

function renderLTABody(body) {
  const S = state.temperament, q = S.search.trim().toLowerCase();
  const all = window.ALL_LEADERS.map(l => ({ l, r: getLTA(l) })).filter(e => e.r && (!q || e.l.name.toLowerCase().includes(q)));
  const k = LTA_TRAIT_BY_KEY[S.ltaSort] ? S.ltaSort : "style";
  const intro = `<div class="rz-explain"><div class="rz-exhead"><b>Leadership Trait Analysis</b><span class="rz-neo">Margaret G. Hermann · seven traits · eight styles</span></div>
    <div class="rz-exdef">A third psychology, built for leaders nobody can interview: seven traits scored from what a leader says off-script, combined into three questions — do they <em>challenge or respect constraints</em>, are they <em>open or closed to information</em>, are they moved by <em>the problem or by relationships</em>. Where Rubenzer asks what a leader is like and Simonton what they do in office, Hermann asks how they will <em>handle</em> a situation.</div>
    <div class="rz-misread"><b>How to read it</b> — 50 is the norm among the world leaders in Hermann's reference group. Every score here is my estimate in her framework, not a coded text analysis. <em>Letters &amp; recorded speech</em> and <em>analogy only</em> mark leaders whose spontaneous words are thin or survive through others.</div></div>`;
  if (!all.length) { body.innerHTML = intro + `<div class="ins-empty">No leaders match that.</div>`; return; }
  if (k === "style") {
    const groups = (window.LTA_STYLES || []).map(st => ({ st, mem: all.filter(e => e.r.style.key === st.key).sort((a, b) => startYear(a.l) - startYear(b.l)) }));
    const xt = groups.map(g => {
      const kn = g.mem.filter(e => ["orderly", "crisis"].includes(getOutcome(e.l).succession));
      const cr = kn.filter(e => getOutcome(e.l).succession === "crisis").length;
      return { st: g.st, n: g.mem.length, kn: kn.length, cr, rate: kn.length ? cr / kn.length : null };
    });
    body.innerHTML = intro + `<div class="cmp-summary">${all.length} leaders analysed. The eight styles are the eight combinations of the three answers — the first three words on each card.</div>` +
      groups.map(g => g.mem.length ? `<div class="sm-group" style="--sm-color:${g.st.color}">
        <div class="sm-ghead"><b>${esc(g.st.name)}</b><span>${g.st.c === "challenges" ? "challenges" : "respects"} constraints · ${g.st.o} to information · ${g.st.m === "problem" ? "problem" : "relationship"}-focused</span><span class="sm-count">${g.mem.length}</span></div>
        <div class="sm-gdef">${esc(g.st.def)}</div>
        <div class="sm-grid">${g.mem.map(e => `<div class="sm-card" data-id="${e.l.id}">${avatarMarkup(e.l)}<span class="sm-who"><b>${esc(e.l.name)}</b><i>${esc(LTA_DOMAIN[e.r.domain])}</i></span>${ltaBars(e.r)}</div>`).join("")}</div>
      </div>` : "").join("") +
      `<div class="reg-head" style="--reg-color:var(--accent)"><h3>Hermann style × how power ended</h3><span class="reg-sub">against this atlas's outcome data</span></div>
      <table class="xtab"><thead><tr><th>Style</th><th>Leaders</th><th>Succession crisis rate</th></tr></thead><tbody>
        ${xt.filter(r => r.n).map(r => `<tr><td style="color:${r.st.color};font-weight:600">${esc(r.st.name)}</td><td class="num">${r.n}</td><td>${r.rate == null ? "—" : `<span class="bar ${r.rate <= 0.29 ? "good" : ""}" style="width:${Math.round(r.rate * 120)}px"></span>${Math.round(r.rate * 100)}% <span class="lowN">(${r.cr}/${r.kn}${r.kn < 5 ? ", low n" : ""})</span>`}</td></tr>`).join("")}
      </tbody></table>`;
  } else {
    const tr = LTA_TRAIT_BY_KEY[k];
    const list = all.slice().sort((a, b) => b.r.t[k] - a.r.t[k]);
    body.innerHTML = intro + `<div class="rz-explain"><div class="rz-exhead"><b>${esc(tr.name)}</b></div><div class="rz-exdef">${esc(tr.def)}</div>
      <div class="rz-adj"><span class="rz-adjlab hi">High</span><span class="rz-a hi">${esc(tr.high)}</span></div><div class="rz-adj"><span class="rz-adjlab lo">Low</span><span class="rz-a lo">${esc(tr.low)}</span></div></div>
      <div class="cmp-summary">${list.length} leaders ranked by <strong>${esc(tr.name)}</strong>. The line at the middle is the world-leader norm.</div>
      <div class="rz-rank">${list.map((e, i) => `<div class="rz-row" data-id="${e.l.id}"><span class="rz-n">${i + 1}</span>${avatarMarkup(e.l)}
        <span class="rz-name">${esc(e.l.name)}<span class="rz-yr">${esc(e.r.style.name)} · ${esc(e.l.years)}</span></span>
        <span class="rz-track"><span class="rz-mid" style="left:50%"></span><span class="rz-bar" style="left:0;width:${e.r.t[k]}%;background:${e.r.style.color}"></span><span class="rz-notch" style="left:${e.r.t[k]}%;background:${e.r.style.color}"></span></span>
        <span class="rz-val">${e.r.t[k]}</span></div>`).join("")}</div>`;
  }
  body.querySelectorAll("[data-id]").forEach(c => c.onclick = () => openDetail(c.dataset.id));
  hydrateAvatars(body);
}

function renderTemperamentBody() {
  const S = state.temperament, body = $("#temperament-body");

  if (S.mode === "lta") { renderLTABody(body); return; }
  if (S.mode === "styles") {
    const all = styledLeaders();
    const q = S.search.trim().toLowerCase();
    const groups = SSTYLES.map(x => ({
      st: x,
      members: all.filter(e => dominantStyle(e.rec).key === x.key && (!q || e.l.name.toLowerCase().includes(q)))
                  .sort((a, b) => b.rec.s[x.key] - a.rec.s[x.key])
    }));
    // dominant style vs. how power actually ended — uses the Outcomes data
    const xtab = groups.map(g => {
      const known = g.members.filter(e => ["orderly", "crisis"].includes(getOutcome(e.l).succession));
      const crisis = known.filter(e => getOutcome(e.l).succession === "crisis").length;
      return { st: g.st, n: g.members.length, kn: known.length, crisis, rate: known.length ? crisis / known.length : null };
    });
    const pctf = v => v == null ? "\u2014" : Math.round(v * 100) + "%";
    // where trait and style diverge: temperamentally warm vs. governing through relationships
    const div = all.filter(e => getTemperament(e.l)).map(e => {
      const t = getTemperament(e.l);
      return { l: e.l, warm: Math.round(fMid(t, "pos")), inter: e.rec.s.inter, d: Math.round(fMid(t, "pos")) - e.rec.s.inter };
    }).sort((a, b) => Math.abs(b.d) - Math.abs(a.d)).slice(0, 6);

    body.innerHTML = `
      <div class="rz-explain"><div class="rz-exhead"><b>Styles, not traits</b><span class="rz-neo">Simonton 1988 \u00b7 five behavioural factors</span></div>
        <div class="rz-exdef">Rubenzer measures what a leader <em>is</em>, from personality inventories. Simonton measures what a leader <em>does in office</em>, from factor-analysed behavioural descriptors. They are different objects and the interesting cases are where they diverge \u2014 a temperamentally warm person who does not govern through relationships, for instance.</div>
        <div class="rz-misread"><b>Domain</b> \u2014 these factors were derived from U.S. presidents, and several underlying items assume an electoral executive. Entries are marked <em>U.S. president</em>, <em>modern executive</em>, or <em>outside validated domain</em>; read the last group as analogy, not measurement.</div></div>

      <div class="reg-head" style="--reg-color:var(--accent)"><h3>Categorised by dominant style</h3><span class="reg-sub">${all.length} leaders scored</span></div>
      ${groups.map(g => g.members.length ? `
        <div class="sm-group" style="--sm-color:${g.st.color}">
          <div class="sm-ghead"><b>${esc(g.st.name)}</b><span>${esc(g.st.blurb)}</span><span class="sm-count">${g.members.length}</span></div>
          <div class="sm-gdef">${esc(g.st.def)}</div>
          <div class="sm-adj">${g.st.adj.map(a => `<span class="rz-a hi">${esc(a)}</span>`).join("")}</div>
          <div class="sm-grid">${g.members.map(e => `<div class="sm-card" data-id="${e.l.id}">
            ${avatarMarkup(e.l)}
            <span class="sm-who"><b>${esc(e.l.name)}</b><i>${esc(styleSignature(e.rec))}</i></span>
            ${styleBars(e.rec)}
            <span class="sm-top">${e.rec.s[g.st.key]}</span>
          </div>`).join("")}</div>
        </div>` : "").join("")}

      <div class="reg-head" style="--reg-color:var(--accent)"><h3>Dominant style \u00d7 how power ended</h3><span class="reg-sub">Simonton's factors against this atlas's own outcome data</span></div>
      <div class="cmp-summary">Simonton found Deliberative and Charismatic positively related to greatness ratings and Neurotic negatively. Greatness ratings are not in this index \u2014 but succession outcomes are, so here is the same question asked of a harder dependent variable. Small samples; read as a hint.</div>
      <table class="xtab"><thead><tr><th>Dominant style</th><th>Leaders</th><th>Succession crisis rate</th><th>Simonton on greatness</th></tr></thead><tbody>
        ${xtab.map(r => `<tr><td style="color:${r.st.color}">${esc(r.st.name)}</td><td class="num">${r.n}</td>
          <td>${r.rate == null ? "\u2014" : `<span class="bar ${r.rate <= 0.29 ? "good" : ""}" style="width:${Math.round(r.rate * 120)}px"></span>${pctf(r.rate)} <span class="lowN">(${r.crisis}/${r.kn})</span>`}</td>
          <td style="font-size:12.5px;color:var(--muted)">${esc(r.st.greatness)}</td></tr>`).join("")}
      </tbody></table>

      <div class="reg-head" style="--reg-color:var(--accent)"><h3>Where trait and style diverge</h3><span class="reg-sub">Rubenzer Positive Emotions against Simonton Interpersonal</span></div>
      <div class="cmp-summary">Warmth as a disposition and warmth as a governing method are not the same variable. A positive gap means a leader warmer than their working style suggests; a negative gap means one who governs through relationships more than their temperament would predict.</div>
      <div class="rz-rank">${div.map(x => `<div class="rz-row" data-id="${x.l.id}">
        ${avatarMarkup(x.l)}<span class="rz-name">${esc(x.l.name)}</span>
        <span class="sm-div">warmth <b>${x.warm}</b> \u00b7 interpersonal <b>${x.inter}</b></span>
        <span class="rz-val" style="color:${x.d > 0 ? "var(--reg-trust)" : "var(--era-warlords)"}">${x.d > 0 ? "+" : ""}${x.d}</span>
      </div>`).join("")}</div>`;
    body.querySelectorAll("[data-id]").forEach(c => c.onclick = () => openDetail(c.dataset.id));
    return;
  }

  if (S.mode === "anecdotes") {
    const q = S.search.trim().toLowerCase();
    const facet = FACET_BY_KEY[S.sort] ? S.sort : null;
    let list = anecdotesFor({ facet: facet });
    if (q) list = list.filter(a => (a.text + " " + ((byId(a.l) || {}).name || "") + " " + (a.src || "")).toLowerCase().includes(q));
    const sf = facet && FACET_BY_KEY[facet];
    const head = sf
      ? `<div class="rz-explain"><div class="rz-exhead"><b>${esc(sf.name)}</b><span class="rz-neo">${esc(sf.neo)}</span></div>
          <div class="rz-exdef">${esc(sf.def)}</div>
          <div class="rz-adj"><span class="rz-adjlab hi">High</span>${sf.adjHigh.map(a => `<span class="rz-a hi">${esc(a)}</span>`).join("")}</div>
          <div class="rz-adj"><span class="rz-adjlab lo">Low</span>${sf.adjLow.map(a => `<span class="rz-a lo">${esc(a)}</span>`).join("")}</div></div>`
      : "";
    if (!list.length) { body.innerHTML = head + `<div class="ins-empty">No anecdotes match that.</div>`; return; }
    const hi = list.filter(a => a.end === "high"), lo = list.filter(a => a.end === "low");
    const sec = (arr, title, sub, col) => arr.length
      ? `<div class="reg-head" style="--reg-color:${col}"><h3>${title}</h3><span class="reg-sub">${esc(sub)}</span></div>
         <div class="an-grid">${arr.map(a => anecdoteCard(a)).join("")}</div>` : "";
    body.innerHTML = head +
      `<div class="cmp-summary">${list.length} anecdote${list.length === 1 ? "" : "s"}${sf ? ` illustrating <strong>${esc(sf.name)}</strong>` : " across all nine facets"}. A score is an assertion; these are the reasons. Stories marked <em>apocryphal</em> are famous and probably untrue — kept, and labelled, because what a culture invents about a leader is evidence of a kind.</div>` +
      sec(hi, "High end", sf ? sf.adjHigh.slice(0, 4).join(" · ") : "the facet at its strongest", "var(--reg-trust)") +
      sec(lo, "Low end", sf ? sf.adjLow.slice(0, 4).join(" · ") : "the facet at its weakest", "var(--era-warlords)");
    wireAnecdotes(body);
    return;
  }

  if (S.mode === "facets") {
    body.innerHTML = RGROUPS.map(g => `<div class="reg-head" style="--reg-color:var(--accent)"><h3>${esc(g.label)}</h3><span class="reg-sub">${esc(g.blurb)}</span></div><div class="cmp-summary">${esc(g.note)}</div>` +
      FACETS.filter(f => f.group === g.key).map(f => {
        const scored = scoredLeaders().filter(e => e.rec.f[f.key]);
        const top = scored.slice().sort((a, b) => fMid(b.rec, f.key) - fMid(a.rec, f.key)).slice(0, 5);
        const bot = scored.slice().sort((a, b) => fMid(a.rec, f.key) - fMid(b.rec, f.key)).slice(0, 5);
        return `<div class="inst-card" style="--reg-color:var(--accent)">
          <h4>${esc(f.name)} <span class="rz-neo">${esc(f.neo)}</span></h4>
          <div class="i-def">${esc(f.def)}</div>
          <div class="rz-adj"><span class="rz-adjlab hi">High</span>${f.adjHigh.map(a => `<span class="rz-a hi">${esc(a)}</span>`).join("")}</div>
          <div class="rz-adj"><span class="rz-adjlab lo">Low</span>${f.adjLow.map(a => `<span class="rz-a lo">${esc(a)}</span>`).join("")}</div>
          <div class="rz-hl"><span><b>At the top</b> ${esc(f.high)}</span><span><b>At the bottom</b> ${esc(f.low)}</span></div>
          <div class="rz-misread"><b>Often misread</b> — ${esc(f.misread)}</div>
          ${(() => { const ill = anecdotesFor({ facet: f.key }).slice(0, 3);
            return ill.length ? `<div class="an-inline">${ill.map(a => anecdoteCard(a)).join("")}</div>` : ""; })()}
          <button class="t-showall" data-rankby="${f.key}">Rank all ${scored.length} by this facet &rarr;</button>
          <button class="t-showall" data-anecf="${f.key}">All ${anecdotesFor({ facet: f.key }).length} anecdotes &rarr;</button>
          <div class="inst-users">
            <div class="rz-rankrow"><span class="rz-rlab">Highest</span>${top.map(e => `<span class="bk-leader" data-id="${e.l.id}">${esc(e.l.name)} ${Math.round(fMid(e.rec, f.key))}</span>`).join("")}</div>
            <div class="rz-rankrow"><span class="rz-rlab">Lowest</span>${bot.map(e => `<span class="bk-leader" data-id="${e.l.id}">${esc(e.l.name)} ${Math.round(fMid(e.rec, f.key))}</span>`).join("")}</div>
          </div></div>`;
      }).join("")).join("");
    body.querySelectorAll("[data-id]").forEach(s => s.onclick = () => openDetail(s.dataset.id));
    body.querySelectorAll("[data-rankby]").forEach(b => b.onclick = () => { S.sort = b.dataset.rankby; S.mode = "ranked"; renderTemperament(); });
    body.querySelectorAll("[data-anecf]").forEach(b => b.onclick = () => { S.sort = b.dataset.anecf; S.mode = "anecdotes"; S.search = ""; renderTemperament(); });
    wireAnecdotes(body);
    return;
  }

  if (S.mode === "profile") {
    const all = scoredLeaders().sort((a, b) => a.l.name.localeCompare(b.l.name));
    const opts = sel => ['<option value="">— none —</option>'].concat(all.map(e => `<option value="${e.l.id}" ${sel === e.l.id ? "selected" : ""}>${esc(e.l.name)}</option>`)).join("");
    const A = S.a && byId(S.a), B = S.b && byId(S.b);
    const entries = [];
    if (A && getTemperament(A)) entries.push({ l: A, rec: getTemperament(A) });
    if (B && getTemperament(B)) entries.push({ l: B, rec: getTemperament(B) });
    body.innerHTML = `<div id="compare-controls" style="margin-bottom:14px">
        <select id="rz-a">${opts(S.a)}</select><span class="cmp-vs">overlay</span><select id="rz-b">${opts(S.b)}</select>
        <button class="cmp-btn" id="rz-anchor">Overlay the published anchor (TR)</button>
      </div>` +
      (entries.length
        ? `<div class="rz-legend">${entries.map(e => `<span class="rz-leg" style="--c:${eraColor(e.l)}"><i></i><span class="rz-legname">${esc(e.l.name)}</span>${sourceBadge(e.rec)}</span>`).join("")}</div>
           <div class="rz-chartwrap">${profileChartSvg(entries)}</div>
           <div class="rz-readout">${entries.map(e => `<div class="rz-rd"><b>${esc(e.l.name)}</b> — composite ${Math.round(composite(e.rec))} · ${RGROUPS.map(g => `${esc(g.label)} ${Math.round(groupScore(e.rec, g.key))}`).join(" · ")}</div>`).join("")}</div>
           ${entries.map(e => `<div class="creed-card"><div class="cr-top" data-id="${e.l.id}">${avatarMarkup(e.l)}<span class="cr-name">${esc(e.l.name)}</span><span class="cr-years">${esc(e.l.years)}</span></div><div class="rz-profile">${esc(e.rec.profile)}</div>${e.rec.contested ? `<div class="rz-contested"><b>Contested</b> — ${esc(e.rec.contested)}</div>` : ""}</div>`).join("")}`
        : `<div class="ins-empty">Pick a leader to draw their profile. The shaded band is the range where historians disagree; markers drop to diamonds below the 50th percentile, as liabilities do in the original chart.</div>`);
    $("#rz-a").onchange = e => { S.a = e.target.value || null; renderTemperamentBody(); };
    $("#rz-b").onchange = e => { S.b = e.target.value || null; renderTemperamentBody(); };
    $("#rz-anchor").onclick = () => { S.b = "troosevelt"; renderTemperamentBody(); };
    body.querySelectorAll(".cr-top").forEach(c => c.onclick = () => openDetail(c.dataset.id));
    return;
  }

  // ---- ranked ----
  const q = S.search.trim().toLowerCase();
  const val = e => S.sort === "composite" ? composite(e.rec)
    : S.sort.startsWith("g:") ? groupScore(e.rec, S.sort.slice(2))
    : fMid(e.rec, S.sort);
  const band = e => S.sort === "composite" ? compositeBand(e.rec)
    : S.sort.startsWith("g:") ? null
    : e.rec.f[S.sort];
  let list = scoredLeaders().filter(e => !q || e.l.name.toLowerCase().includes(q));
  list = list.sort((a, b) => val(b) - val(a));
  const label = S.sort === "composite" ? "Composite" : S.sort.startsWith("g:")
    ? (RGROUPS.find(g => g.key === S.sort.slice(2)) || {}).label
    : (FACET_BY_KEY[S.sort] || {}).name;

  const unscored = Object.entries(window.UNSCOREABLE || {}).filter(([id]) => byId(id));
  const sf = FACET_BY_KEY[S.sort];
  const sg = S.sort.startsWith("g:") && RGROUPS.find(g => g.key === S.sort.slice(2));
  const explain = sf
    ? `<div class="rz-explain"><div class="rz-exhead"><b>${esc(sf.name)}</b><span class="rz-neo">${esc(sf.neo)}</span></div>
        <div class="rz-exdef">${esc(sf.def)}</div>
        <div class="rz-adj"><span class="rz-adjlab hi">High</span>${sf.adjHigh.map(a => `<span class="rz-a hi">${esc(a)}</span>`).join("")}</div>
        <div class="rz-adj"><span class="rz-adjlab lo">Low</span>${sf.adjLow.map(a => `<span class="rz-a lo">${esc(a)}</span>`).join("")}</div>
        <div class="rz-misread"><b>Often misread</b> — ${esc(sf.misread)}</div></div>`
    : sg ? `<div class="rz-explain"><div class="rz-exhead"><b>${esc(sg.label)}</b><span class="rz-neo">${esc(sg.blurb)}</span></div><div class="rz-exdef">${esc(sg.note)}</div></div>` : "";
  body.innerHTML = explain + `
    <div class="cmp-summary">${list.length} leaders scored, ranked by <strong>${esc(label)}</strong>. The bar is the range where the scholarship disagrees; the notch is the midpoint. ${S.sort === "composite" ? "Composite is an unweighted mean of all nine facets — my construction, not Rubenzer's regression weights." : ""}</div>
    <div class="rz-rank">${list.map((e, i) => {
      const v = val(e), bd = band(e), c = eraColor(e.l);
      const lo = bd ? bd[0] : v, hi = bd ? bd[1] : v;
      return `<div class="rz-row" data-id="${e.l.id}">
        <span class="rz-n">${i + 1}</span>
        ${avatarMarkup(e.l)}
        <span class="rz-name">${esc(e.l.name)}<span class="rz-yr">${esc(e.l.years)}</span></span>
        <span class="rz-track"><span class="rz-mid" style="left:50%"></span>
          <span class="rz-bar" style="left:${lo}%;width:${Math.max(hi - lo, 0.8)}%;background:${c}"></span>
          <span class="rz-notch" style="left:${v}%;background:${c}"></span></span>
        <span class="rz-val">${Math.round(v)}${bd && hi - lo > 2 ? `<i>${Math.round(lo)}–${Math.round(hi)}</i>` : ""}</span>
      </div>`;
    }).join("")}</div>
    ${unscored.length ? `<div class="reg-head" style="--reg-color:var(--muted);margin-top:30px"><h3>Not scoreable</h3><span class="reg-sub">${unscored.length} leaders the record cannot support at facet level</span></div>
      <div class="cmp-summary">Personality inference needs letters, reported speech, and eyewitness description of behaviour under stress. Where we have monuments and hostile summaries instead, a number would be invention. That is information about the record, not a gap in the index.</div>
      <div class="rz-unscored">${unscored.map(([id, why]) => `<div class="rz-un" data-id="${id}"><b>${esc(byId(id).name)}</b> <span>${esc(why)}</span></div>`).join("")}</div>` : ""}`;
  body.querySelectorAll(".rz-row,.rz-un").forEach(r => r.onclick = () => openDetail(r.dataset.id));
}

/* ================================================================
   LIBRARY
   ================================================================ */

function renderLibrary() {
  const S = state.library;
  const all = window.ALL_BOOKS;
  const counts = { all: all.length, "": 0, toread: 0, reading: 0, read: 0, reference: 0 };
  all.forEach(b => counts[b.shelf || ""]++);
  const coveredIds = new Set(all.flatMap(b => b.leaders || []));
  const gaps = window.ALL_LEADERS.filter(l => !coveredIds.has(l.id));

  $("#library-stats").innerHTML = `
    <div class="stat"><div class="v">${all.length}</div><div class="k">books</div></div>
    <div class="stat"><div class="v">${counts.read}</div><div class="k">read</div></div>
    <div class="stat"><div class="v">${counts.reading}</div><div class="k">reading</div></div>
    <div class="stat"><div class="v">${counts.toread}</div><div class="k">to read</div></div>
    <div class="stat"><div class="v">${counts[""]}</div><div class="k">unmarked</div></div>
    <div class="stat"><div class="v">${window.ALL_LEADERS.length - gaps.length}</div><div class="k">leaders covered</div></div>
    <div class="stat"><div class="v">${gaps.length}</div><div class="k">reading gaps</div></div>`;

  const genres = [...new Set(all.map(b => b.genre).filter(Boolean))].sort();
  const pill = (k, label) => `<button class="chip ${S.shelf === k ? "on" : ""}" data-shelf="${k}">${label}${k !== "all" ? ` <span style="opacity:.6">${counts[k === "unmarked" ? "" : k]}</span>` : ""}</button>`;
  $("#library-toolbar").innerHTML = `
    <button class="chip action" id="lib-add">＋ Add book</button>
    <button class="chip action" id="lib-import">⤒ Import shelf</button>
    <div class="shelf-pills">${pill("all", "All")}${pill("unmarked", "Unmarked")}${pill("toread", "To read")}${pill("reading", "Reading")}${pill("read", "Read")}${pill("reference", "Reference")}</div>
    <input type="search" id="lib-search" placeholder="Search title, author, note, takeaway…" value="${esc(S.search)}">
    <select id="lib-leader"><option value="">All leaders</option>${window.ALL_LEADERS.slice().sort((a, b) => a.name.localeCompare(b.name)).map(l => `<option value="${l.id}" ${S.leader === l.id ? "selected" : ""}>${esc(l.name)}</option>`).join("")}</select>
    ${genres.length ? `<select id="lib-genre"><option value="">All genres</option>${genres.map(g => `<option value="${esc(g)}" ${S.genre === g ? "selected" : ""}>${esc(g)}</option>`).join("")}</select>` : ""}
    <select id="lib-sort">${[["title", "Title"], ["author", "Author"], ["year", "Year"], ["rating", "Rating"], ["updated", "Recently updated"]].map(([k, v]) => `<option value="${k}" ${S.sort === k ? "selected" : ""}>Sort: ${v}</option>`).join("")}</select>
    <button class="chip ${S.gaps ? "on" : "ghost"}" id="lib-gaps">Reading gaps</button>`;

  $("#lib-add").onclick = () => openBookEditor(null);
  $("#lib-import").onclick = openImportBooks;
  $("#library-toolbar").querySelectorAll("[data-shelf]").forEach(b => b.onclick = () => { S.shelf = b.dataset.shelf; S.gaps = false; renderLibrary(); });
  $("#lib-search").oninput = e => { S.search = e.target.value; renderLibraryList(); };
  $("#lib-leader").onchange = e => { S.leader = e.target.value; renderLibraryList(); };
  if ($("#lib-genre")) $("#lib-genre").onchange = e => { S.genre = e.target.value; renderLibraryList(); };
  $("#lib-sort").onchange = e => { S.sort = e.target.value; renderLibraryList(); };
  $("#lib-gaps").onclick = () => { S.gaps = !S.gaps; renderLibrary(); };

  renderLibraryList(gaps);
}

function renderLibraryList(gapsIn) {
  const S = state.library, body = $("#library-body");
  if (S.gaps) {
    const covered = new Set(window.ALL_BOOKS.flatMap(b => b.leaders || []));
    const gaps = gapsIn || window.ALL_LEADERS.filter(l => !covered.has(l.id));
    body.innerHTML = gaps.length
      ? `<div class="cmp-summary">${gaps.length} leaders have no book attached — the unread territory in your index. Click one to open the profile and add a book.</div>
         <div class="book-grid">${gaps.map(l => `<div class="book-card" data-leader="${l.id}"><div class="bk-title">${esc(l.name)}</div><div class="bk-author">${esc(l.title)} · ${esc(l.years)}</div><div class="bk-note">No reading linked yet.</div></div>`).join("")}</div>`
      : `<div class="ins-empty">Every leader in the index has at least one book attached.</div>`;
    body.querySelectorAll("[data-leader]").forEach(c => c.onclick = () => openDetail(c.dataset.leader));
    return;
  }

  const q = S.search.trim().toLowerCase();
  let books = window.ALL_BOOKS.filter(b => {
    if (S.shelf !== "all") { const want = S.shelf === "unmarked" ? "" : S.shelf; if ((b.shelf || "") !== want) return false; }
    if (S.leader && !(b.leaders || []).includes(S.leader)) return false;
    if (S.genre && b.genre !== S.genre) return false;
    if (q && !((b.title || "") + " " + (b.author || "") + " " + (b.note || "") + " " + (b.takeaway || "") + " " + (b.notes || "")).toLowerCase().includes(q)) return false;
    return true;
  });
  const cmp = {
    title: (a, b) => (a.title || "").localeCompare(b.title || ""),
    author: (a, b) => (a.author || "").localeCompare(b.author || ""),
    year: (a, b) => (a.year || 0) - (b.year || 0),
    rating: (a, b) => (b.rating || 0) - (a.rating || 0),
    updated: (a, b) => (b.updated || 0) - (a.updated || 0)
  }[S.sort] || ((a, b) => 0);
  books = books.sort(cmp);

  if (!books.length) { body.innerHTML = `<div class="ins-empty">No books match those filters.</div>`; return; }
  const total = books.length, cap = S.limit || 150;
  const shown = books.slice(0, cap);
  body.innerHTML = (total > cap ? `<div class="cmp-summary">Showing <strong>${cap}</strong> of <strong>${total}</strong> — search or filter to narrow, or <a id="lib-more" style="color:var(--accent);cursor:pointer">show ${Math.min(300, total - cap)} more</a>.</div>` : "")
    + `<div class="book-grid">${shown.map(b => {
    const leaders = (b.leaders || []).map(byId).filter(Boolean);
    const concepts = (b.tags || []).filter(k => TRAIT_BY_KEY[k]);
    return `<div class="book-card" data-book="${b.id}">
      <div><div class="bk-title">${esc(b.title)}</div><div class="bk-author">${esc(b.author)}${b.year ? " · " + b.year : ""}${b.genre ? " · " + esc(b.genre) : ""}</div></div>
      ${b.takeaway ? `<div class="bk-takeaway">“${esc(b.takeaway)}”</div>` : ""}
      ${b.note ? `<div class="bk-note">${esc(b.note)}</div>` : ""}
      <div class="bk-foot">${shelfBadge(b)}${b.rating ? `<span class="bk-stars">${stars(b.rating)}</span>` : ""}
        <div class="bk-leaders">${leaders.slice(0, 4).map(l => `<span class="bk-leader" data-leader="${l.id}">${esc(l.name)}</span>`).join("")}${leaders.length > 4 ? `<span class="bk-leader">+${leaders.length - 4}</span>` : ""}${concepts.slice(0, 2).map(k => `<span class="bk-leader" data-tag="${k}">${TRAIT_BY_KEY[k].name}</span>`).join("")}</div>
      </div></div>`;
  }).join("")}</div>`;

  const more = $("#lib-more");
  if (more) more.onclick = () => { S.limit = cap + 300; renderLibraryList(); };
  body.querySelectorAll(".book-card").forEach(c => c.onclick = ev => {
    const t = ev.target;
    if (t.dataset.shelfId) { ev.stopPropagation(); cycleShelf(t.dataset.shelfId); renderLibrary(); return; }
    if (t.dataset.leader) { ev.stopPropagation(); openDetail(t.dataset.leader); return; }
    if (t.dataset.tag) { ev.stopPropagation(); filterByTags([t.dataset.tag]); return; }
    openBookEditor(c.dataset.book);
  });
}

/* ---------------- bulk import: match free-text titles to leaders ---------------- */

// shorthand people actually write on a shelf list
const LEADER_ALIASES = {
  fdr: ["FDR", "Franklin Roosevelt", "Franklin D Roosevelt", "Franklin Delano Roosevelt"],
  troosevelt: ["Teddy Roosevelt", "TR", "Theodore Roosevelt", "Theodore Rex", "Rough Riders"],
  ghwbush: ["George H W Bush", "George Bush", "Bush 41", "Poppy Bush"],
  gwbush: ["George W Bush", "Bush 43", "Dubya"],
  jfk: ["JFK", "Jack Kennedy", "John F Kennedy", "John Kennedy"],
  lbj: ["LBJ", "Lyndon Johnson", "Lyndon B Johnson"],
  eisenhower: ["Ike"],
  jcaesar: ["Caesar", "Julius Caesar"],
  augustus: ["Octavian", "Augustus"],
  marcusaurelius: ["Marcus Aurelius"],
  genghis: ["Genghis", "Chinggis", "Temujin", "Genghis Khan"],
  kublai: ["Kublai", "Khubilai", "Kubla Khan"],
  qinshihuang: ["Qin Shi Huang", "Qin Shihuang", "First Emperor"],
  ataturk: ["Ataturk", "Kemal", "Mustafa Kemal"],
  mao: ["Mao", "Mao Zedong", "Mao Tse-tung", "Chairman Mao"],
  leekuanyew: ["Lee Kuan Yew", "LKY"],
  napoleon: ["Napoleon", "Bonaparte"],
  peter1: ["Peter the Great"], catherine2: ["Catherine the Great"],
  frederick2p: ["Frederick the Great"], alexander: ["Alexander the Great"],
  cyrus: ["Cyrus the Great"], mansamusa: ["Mansa Musa"], mehmed2: ["Mehmed", "Mehmet"],
  suleiman: ["Suleiman", "Suleyman"], elizabeth1: ["Gloriana"], victoria: ["Queen Victoria"],
  hochiminh: ["Ho Chi Minh", "Uncle Ho"], bengurion: ["Ben Gurion", "Ben-Gurion"],
  degaulle: ["De Gaulle", "Charles de Gaulle"], goldameir: ["Golda"],
  indira: ["Indira Gandhi"], cixi: ["Cixi", "Tzu Hsi"], nzinga: ["Njinga", "Nzinga"],
  toussaint: ["Toussaint", "Louverture", "L'Ouverture"], bolivar: ["Bolivar"],
  sanmartin: ["San Martin"], juarez: ["Juarez"], menelik2: ["Menelik"],
  zelensky: ["Zelenskyy", "Zelensky"], erdogan: ["Erdogan"], modi: ["Modi"],
  ieyasu: ["Ieyasu", "Tokugawa"], nobunaga: ["Nobunaga"], meiji: ["Meiji"],
  william1: ["William the Conqueror"], frederick2: ["Frederick II"],
  richelieu: ["Richelieu"], cromwell: ["Oliver Cromwell"], thatcher: ["Thatcher"],
  gorbachev: ["Gorbachev"], mandela: ["Mandela"], castro: ["Fidel", "Castro"],
  lula: ["Lula"], merkel: ["Merkel"], putin: ["Putin"], xi: ["Xi Jinping"],
  taizong: ["Tang Taizong", "Li Shimin", "Taizong", "T'ai-tsung", "Emperor Taizong", "Zhenguan"],
  robertbruce: ["Robert the Bruce", "Robert Bruce", "Bannockburn"],
  chiang: ["Chiang Kai-shek", "Chiang Kaishek", "Chiang Kai Shek", "Generalissimo"],
  hueylong: ["Huey Long", "Kingfish"],
  rjdaley: ["Richard J Daley", "Richard J. Daley", "Mayor Daley", "Boss Daley"],
  goh: ["Goh Chok Tong"],
  kissinger: ["Kissinger"],
  suharto: ["Soeharto", "Pak Harto"],
  parkchunghee: ["Park Chung Hee", "Park Chunghee"],
  mussolini: ["Mussolini", "Il Duce"], berlusconi: ["Berlusconi", "Il Cavaliere"],
  franco: ["Francisco Franco", "General Franco", "Generalísimo Franco", "Francoist"], salazar: ["Oliveira Salazar", "Salazarist"],
  pinochet: ["General Pinochet", "Pinochetista"], peron: ["Juan Peron", "General Peron", "Peronism", "Peronist"]
};
const NUMERAL = /^(I|II|III|IV|V|VI|VII|VIII|IX|X|XI|XII|XIII|XIV|XV)$/i;
// surnames that are also ordinary English words — never match on these alone
// ("Long" would otherwise pull in Long Walk to Freedom, "Ford" the Ford Motor Company)
const SURNAME_STOPWORDS = new Set(["long", "ford", "franco", "bush", "grant", "king", "pope", "young", "white",
  "black", "green", "brown", "stone", "wood", "hill", "field", "park", "price", "best", "moore", "rice",
  "bruce", "daley", "huang", "conqueror"]);   // "Bruce" would match every author named Bruce; "Daley" alone would catch books on Richard M. Daley, the son

var MATCHERS = null;   // var: assigned from rebuildAll(), which runs earlier in the file
function buildMatchers() {
  const bySurname = {};
  window.ALL_LEADERS.forEach(l => {
    const w = l.name.replace(/\(.*?\)/g, "").trim().split(/\s+/);
    const last = w[w.length - 1];
    if (w.length > 1 && last.length > 3 && !NUMERAL.test(last) && !SURNAME_STOPWORDS.has(last.toLowerCase()))
      (bySurname[last] = bySurname[last] || []).push(l.id);
  });
  const out = [];
  const add = (phrase, id, minLen, isSurname) => {
    const p = String(phrase).trim().normalize("NFD").replace(/[̀-ͯ]/g, "");   // matchLeaders strips accents from the text, so strip them here too
    if (p.length < (minLen || 4)) return;   // explicit aliases may be short (FDR, JFK, Ike)
    const esc = p.replace(/[.*+?^${}()|[\]\\]/g, "\\$&").replace(/[\s\-']+/g, "[\\s\\-']+");
    try { out.push({ re: new RegExp("(^|[^\\p{L}])" + esc + "($|[^\\p{L}])", "iu"), id, sur: !!isSurname }); } catch (e) { /* skip */ }
  };
  window.ALL_LEADERS.forEach(l => {
    add(l.name.replace(/\(.*?\)/g, "").trim(), l.id);
    (LEADER_ALIASES[l.id] || []).forEach(a => add(a, l.id, 2));
  });
  // a bare surname only counts when it is unambiguous (skips Roosevelt, Bush…)
  Object.entries(bySurname).forEach(([s, ids]) => { if (ids.length === 1) add(s, ids[0], 4, true); });
  MATCHERS = out;
}
// allowSurname=false for author fields: an author named Bruce is not Robert the Bruce,
// but an explicit alias in an author slot ("Emperor Napoleon Bonaparte") still counts.
function matchLeaders(text, allowSurname) {
  if (!MATCHERS) buildMatchers();
  const s = String(text || "").normalize("NFD").replace(/[̀-ͯ]/g, "");
  const useSur = allowSurname !== false;
  const hits = [];
  MATCHERS.forEach(m => { if ((useSur || !m.sur) && !hits.includes(m.id) && m.re.test(s)) hits.push(m.id); });
  return hits;
}

function parseCSV(text) {
  const rows = []; let row = [], field = "", inQ = false;
  for (let i = 0; i < text.length; i++) {
    const c = text[i];
    if (inQ) { if (c === '"') { if (text[i + 1] === '"') { field += '"'; i++; } else inQ = false; } else field += c; }
    else if (c === '"') inQ = true;
    else if (c === ",") { row.push(field); field = ""; }
    else if (c === "\n") { row.push(field); rows.push(row); row = []; field = ""; }
    else if (c !== "\r") field += c;
  }
  if (field.length || row.length) { row.push(field); rows.push(row); }
  return rows.filter(r => r.some(f => f.trim()));
}
const GR_SHELF = { read: "read", "currently-reading": "reading", "to-read": "toread" };

// surname from "Caro, Robert A." or "Robert A. Caro" — used to tell same-title books apart
function surnameOf(author) {
  const a = String(author || "").trim();
  if (!a) return "";
  if (a.includes(",")) return normName(a.split(",")[0]);
  const w = a.replace(/\b(Jr|Sr|II|III|IV|PhD|MD)\.?\b/gi, "").trim().split(/\s+/);
  return normName(w[w.length - 1] || "");
}

// accepts a Goodreads/LibraryThing CSV, a generic CSV, or one book per line
function parseBookInput(text) {
  const t = text.trim();
  if (!t) return [];
  const looksCSV = /,/.test(t.split("\n")[0]) && parseCSV(t.split("\n").slice(0, 1).join("\n"))[0];
  if (looksCSV) {
    const rows = parseCSV(t);
    const head = rows[0].map(h => h.trim().toLowerCase());
    const ti = head.findIndex(h => h === "title" || h === "book title");
    const ai = head.findIndex(h => h === "author" || h === "primary author" || h === "author l-f");
    if (ti >= 0) {
      const si = head.findIndex(h => h === "exclusive shelf" || h === "shelf" || h === "collections");
      const ri = head.findIndex(h => h === "my rating" || h === "rating");
      const yi = head.findIndex(h => h === "year published" || h === "original publication year" || h === "date published" || h === "year");
      // an explicit people column (Notion "Historical Figures", etc.) beats scanning the title
      const fi = head.findIndex(h => /^(historical figures|figures|people|leaders|persons|subjects|related figures)$/.test(h));
      const gi = head.findIndex(h => h === "genre" || h === "category" || h === "subject");
      return rows.slice(1).map(r => {
        const g = i => (i >= 0 && r[i] != null ? String(r[i]).trim() : "");
        const rate = parseInt(g(ri), 10);
        return { title: g(ti), author: ai >= 0 ? g(ai) : "", year: (g(yi).match(/\d{4}/) || [""])[0],
                 shelf: GR_SHELF[g(si).toLowerCase()] || "", rating: rate > 0 && rate <= 5 ? rate : 0,
                 figures: g(fi), genre: g(gi) };
      }).filter(b => b.title);
    }
  }
  // plain lines: "Title — Author" / "Title - Author" / "Title by Author" / "Title, Author"
  return t.split("\n").map(line => {
    const s = line.trim().replace(/^[-*•\d.\s]+/, "");
    if (!s) return null;
    let m = s.split(/\s+[—–]\s+|\s+-\s+|\s+by\s+/i);
    let title = (m.shift() || "").trim(), author = m.join(" — ").trim();
    if (!author && s.includes(",")) { const p = s.split(","); if (p.length === 2 && p[1].trim().split(/\s+/).length <= 4) { title = p[0].trim(); author = p[1].trim(); } }
    const y = (author.match(/\((\d{4})\)/) || [])[1] || "";
    author = author.replace(/\s*\(\d{4}\)\s*/, "").trim();
    return title ? { title, author, year: y, shelf: "", rating: 0 } : null;
  }).filter(Boolean);
}

let importStaged = null;
function openImportBooks() {
  importStaged = null;
  const body = $("#book-body");
  body.innerHTML = `
    <h2>Import books</h2>
    <p class="form-hint">Load your real shelf. Each book is matched to the leaders it names, so imports land on the right profiles.</p>
    <div class="seeded-note"><b>Accepted formats</b>A <strong>Goodreads / LibraryThing CSV export</strong> (shelves and ratings come across automatically), a generic CSV with Title/Author columns, or simply <strong>one book per line</strong> — “Title — Author”, “Title by Author”, or just the title.</div>
    <div class="f-row"><label>Upload a CSV or text file</label><input type="file" id="imp-file" accept=".csv,.txt,text/csv,text/plain"></div>
    <div class="f-row"><label>…or paste your list</label><textarea id="imp-text" style="min-height:190px" placeholder="Team of Rivals — Doris Kearns Goodwin&#10;The Guns of August by Barbara Tuchman&#10;Master of the Senate — Robert Caro"></textarea></div>
    <div class="form-buttons"><button class="btn-save" id="imp-preview">Preview &amp; match</button><button class="btn-cancel" id="imp-cancel">Cancel</button></div>
    <div id="imp-report"></div>`;
  $("#imp-cancel").onclick = closeBookEditor;
  $("#imp-file").onchange = e => {
    const f = e.target.files[0]; if (!f) return;
    const r = new FileReader();
    r.onload = () => { $("#imp-text").value = r.result; previewImport(); };
    r.readAsText(f);
  };
  $("#imp-preview").onclick = previewImport;
  $("#book-panel").hidden = false; $("#book-overlay").hidden = false; $("#book-panel").scrollTop = 0;
}

function previewImport() {
  const rows = parseBookInput($("#imp-text").value);
  const rep = $("#imp-report");
  if (!rows.length) { rep.innerHTML = `<div class="form-msg">Couldn't find any books in that. Try one title per line.</div>`; return; }

  const existing = window.ALL_BOOKS.map(b => ({ b, key: normName(b.title), sur: surnameOf(b.author) }));
  const seen = new Set();
  const staged = rows.map(r => {
    const key = normName(r.title);
    const sur = surnameOf(r.author);
    if (!key || seen.has(key + "|" + sur)) return null;
    seen.add(key + "|" + sur);   // same title by a different author is a different book
    // exact title, else a distinctive prefix (catches subtitle differences:
    // "Master of the Senate" vs "Master of the Senate (The Years of Lyndon Johnson…)")
    // — but only when the authors agree, so three "Napoleon" biographies stay three books
    const sameAuthor = e => !sur || !e.sur || e.sur === sur;
    let dup = (existing.find(e => e.key === key && sameAuthor(e)) || {}).b;
    if (!dup && key.length >= 12) {
      const hit = existing.find(e => sameAuthor(e) && (e.key.startsWith(key) || (e.key.length >= 12 && key.startsWith(e.key))));
      if (hit) dup = hit.b;
    }
    // an explicit people column is the strongest signal; fall back to scanning the title
    let leaders = [], viaFigures = false;
    if (r.figures) {
      String(r.figures).split(/[;,]|\s\/\s/).forEach(n => {
        matchLeaders(n.trim()).forEach(id => { if (!leaders.includes(id)) leaders.push(id); });
      });
      viaFigures = leaders.length > 0;
    }
    matchLeaders(r.title).forEach(id => { if (!leaders.includes(id)) leaders.push(id); });
    // the author field matches only on full names/aliases, never a bare surname
    matchLeaders(r.author, false).forEach(id => { if (!leaders.includes(id)) leaders.push(id); });
    const authorId = NAME_TO_ID[normName(r.author)];   // an autobiography
    if (authorId && !leaders.includes(authorId)) leaders.unshift(authorId);
    if (dup && !leaders.length) leaders = (dup.leaders || []).slice();   // show what it will land on
    return { ...r, leaders, viaFigures, dupId: dup ? dup.id : null };
  }).filter(Boolean);
  importStaged = staged;

  const matched = staged.filter(s => s.leaders.length).length;
  const dups = staged.filter(s => s.dupId).length;
  const viaFig = staged.filter(s => s.viaFigures).length;

  // names in a people column that matched nobody in the index — i.e. gaps in the atlas
  const unknownFigures = {};
  staged.forEach(s => String(s.figures || "").split(/[;,]|\s\/\s/).forEach(n => {
    n = n.trim();
    if (n && !matchLeaders(n).length) unknownFigures[n] = (unknownFigures[n] || 0) + 1;
  }));
  const topUnknown = Object.entries(unknownFigures).sort((a, b) => b[1] - a[1]).slice(0, 12);
  const preview = staged.slice(0, 40).map(s => `<div class="read-row" style="cursor:default">
      <div class="rr-top"><span class="rr-title">${esc(s.title)}</span><span class="rr-author">${esc(s.author)}</span>${s.shelf ? `<span class="rr-shelf"><span class="shelf-badge ${s.shelf}">${SHELVES[s.shelf]}</span></span>` : ""}</div>
      <div class="rr-note">${s.leaders.length ? s.leaders.map(id => { const l = byId(id); return `<span class="bk-leader">${esc(l ? l.name : id)}</span>`; }).join(" ") : "<em>no leader matched — imports unlinked</em>"}${s.dupId ? ` <span class="shelf-badge">updates existing</span>` : ""}</div>
    </div>`).join("");

  rep.innerHTML = `
    <div class="pat-stats" style="margin-top:16px">
      <div class="stat"><div class="v">${staged.length}</div><div class="k">books found</div></div>
      <div class="stat"><div class="v">${matched}</div><div class="k">matched to leaders</div></div>
      <div class="stat"><div class="v">${staged.length - matched}</div><div class="k">unlinked</div></div>
      <div class="stat"><div class="v">${dups}</div><div class="k">already in library</div></div>
    </div>
    ${viaFig ? `<p class="form-hint">${viaFig} matched from an explicit people column — those are exact, not guesses from the title.</p>` : ""}
    <p class="form-hint">Books already in the library keep their existing entry and take on your shelf and rating. Unlinked books still import — you can attach leaders later, or search for them in the Library.</p>
    ${topUnknown.length ? `<div class="seeded-note"><b>Named people not in the atlas</b>${topUnknown.map(([n, c]) => `${esc(n)}${c > 1 ? ` (${c})` : ""}`).join(" · ")}${Object.keys(unknownFigures).length > 12 ? ` … and ${Object.keys(unknownFigures).length - 12} more` : ""}<br><br>These are gaps in your index — worth adding as leaders if you want their books to link up.</div>` : ""}
    <div class="read-list" style="margin-bottom:14px">${preview}</div>
    ${staged.length > 40 ? `<p class="form-hint">…and ${staged.length - 40} more.</p>` : ""}
    <div class="form-buttons"><button class="btn-save" id="imp-go">Import ${staged.length} book${staged.length === 1 ? "" : "s"}</button><button class="btn-cancel" id="imp-back">Cancel</button></div>`;
  $("#imp-back").onclick = closeBookEditor;
  $("#imp-go").onclick = commitImport;
}

function commitImport() {
  if (!importStaged) return;
  const custom = loadCustomBooks();
  const idx = new Map(custom.map((b, i) => [b.id, i]));
  const taken = new Set(window.ALL_BOOKS.map(b => b.id));
  let added = 0, updated = 0;
  importStaged.forEach(s => {
    if (s.dupId) {
      const patch = { id: s.dupId, updated: Date.now() };
      if (s.shelf) patch.shelf = s.shelf;
      if (s.rating) patch.rating = s.rating;
      if (idx.has(s.dupId)) custom[idx.get(s.dupId)] = Object.assign({}, custom[idx.get(s.dupId)], patch);
      else { custom.push(patch); idx.set(s.dupId, custom.length - 1); }
      updated++;
    } else {
      let id = slugify(s.title), n = 2;
      while (taken.has(id)) id = slugify(s.title) + "-" + (n++);
      taken.add(id);
      const rec = { id, title: s.title, author: s.author, year: s.year, shelf: s.shelf, rating: s.rating,
                    takeaway: "", notes: "", leaders: s.leaders, tags: [], updated: Date.now() };
      if (s.genre) rec.genre = s.genre;
      custom.push(rec);
      added++;
    }
  });
  saveCustomBooks(custom);
  rebuildBooks(); closeBookEditor(); switchView("library");
  alert(`Imported ${added} new book${added === 1 ? "" : "s"}; updated ${updated} already in your library.`);
}

let bookPickLeaders = [], bookRating = 0;
function openBookEditor(id, seedLeaderId) {
  const existing = id ? bookById(id) : null;
  const b = existing || { id: null, title: "", author: "", year: "", leaders: seedLeaderId ? [seedLeaderId] : [], tags: [], shelf: "", rating: 0, takeaway: "", notes: "" };
  bookPickLeaders = (b.leaders || []).filter(byId);
  bookRating = b.rating || 0;
  const seeded = existing && isSeededBook(existing.id);
  const body = $("#book-body");

  body.innerHTML = `
    <h2>${existing ? "Edit book" : "Add a book"}</h2>
    <p class="form-hint">${seeded ? "A seeded book. Your shelf, rating, takeaway and notes are saved locally." : "Saved in this browser and included in Export."}</p>
    ${seeded && b.note ? `<div class="seeded-note"><b>Why this book matters</b>${esc(b.note)}</div>` : ""}
    <div class="f-row"><label>Title *</label><input type="text" id="b-title" value="${esc(b.title)}"></div>
    <div class="f-row two">
      <div><label>Author</label><input type="text" id="b-author" value="${esc(b.author)}"></div>
      <div><label>Year</label><input type="text" id="b-year" value="${esc(b.year)}"></div>
    </div>
    <div class="f-row two">
      <div><label>Shelf</label><select id="b-shelf"><option value="">— unmarked —</option>${Object.entries(SHELVES).map(([k, v]) => `<option value="${k}" ${(b.shelf || "") === k ? "selected" : ""}>${v}</option>`).join("")}</select></div>
      <div><label>Rating</label><div class="star-pick" id="b-stars">${[1, 2, 3, 4, 5].map(n => `<span data-n="${n}">★</span>`).join("")}<span class="clear" id="b-star-clear">clear</span></div></div>
    </div>
    <div class="f-row"><label>What this book taught me</label><textarea id="b-takeaway" style="min-height:70px" placeholder="The one thing you want to remember from it…">${esc(b.takeaway)}</textarea></div>
    <div class="f-row"><label>Notes</label><textarea id="b-notes" style="min-height:110px" placeholder="Page references, arguments to revisit, what it got wrong…">${esc(b.notes)}</textarea></div>
    <div class="f-row"><label>Leaders it covers</label><input type="text" id="b-leader" list="b-leader-list" placeholder="Type a name and press Enter…" autocomplete="off"><datalist id="b-leader-list">${window.ALL_LEADERS.slice().sort((a, c) => a.name.localeCompare(c.name)).map(l => `<option value="${esc(l.name)}">`).join("")}</datalist><div class="picked" id="b-picked"></div></div>
    <div class="f-row"><label>Concepts it illuminates</label><div class="tag-picker">${tagPickerHtml(b.tags)}</div></div>
    ${!seeded && existing && b.note ? `<div class="seeded-note"><b>Note</b>${esc(b.note)}</div>` : ""}
    <div class="form-buttons">
      <button class="btn-save" id="b-save">${existing ? "Save changes" : "Add book"}</button>
      <button class="btn-cancel" id="b-cancel">Cancel</button>
      ${existing && customBookIds.has(existing.id) ? `<button class="btn-delete" id="b-delete">${seeded ? "Reset to original" : "Delete"}</button>` : ""}
    </div>
    <div class="form-msg" id="b-msg"></div>`;

  const drawStars = () => body.querySelectorAll("#b-stars span[data-n]").forEach(s => s.classList.toggle("on", +s.dataset.n <= bookRating));
  body.querySelectorAll("#b-stars span[data-n]").forEach(s => s.onclick = () => { bookRating = +s.dataset.n; drawStars(); });
  $("#b-star-clear").onclick = () => { bookRating = 0; drawStars(); };
  drawStars();

  const drawPicked = () => {
    $("#b-picked").innerHTML = bookPickLeaders.map(pid => { const l = byId(pid); return l ? `<span class="pk">${esc(l.name)} <b data-id="${pid}" title="Remove">✕</b></span>` : ""; }).join("");
    $("#b-picked").querySelectorAll("b").forEach(x => x.onclick = () => { bookPickLeaders = bookPickLeaders.filter(p => p !== x.dataset.id); drawPicked(); });
  };
  drawPicked();
  const addLeader = () => {
    const inp = $("#b-leader"), pid = NAME_TO_ID[normName(inp.value)];
    if (pid && !bookPickLeaders.includes(pid)) { bookPickLeaders.push(pid); drawPicked(); }
    if (pid) inp.value = "";
  };
  $("#b-leader").addEventListener("keydown", e => { if (e.key === "Enter") { e.preventDefault(); addLeader(); } });
  $("#b-leader").addEventListener("change", addLeader);
  body.querySelectorAll(".tag-opt").forEach(o => o.onclick = () => o.classList.toggle("on"));

  $("#b-save").onclick = () => {
    const title = $("#b-title").value.trim();
    if (!title) { $("#b-msg").textContent = "Give it a title."; return; }
    const rec = {
      id: b.id || uniqueBookId(title), title,
      author: $("#b-author").value.trim(), year: $("#b-year").value.trim(),
      shelf: $("#b-shelf").value, rating: bookRating,
      takeaway: $("#b-takeaway").value.trim(), notes: $("#b-notes").value.trim(),
      leaders: bookPickLeaders.slice(),
      tags: [...document.querySelectorAll("#book-body .tag-opt.on")].map(o => o.dataset.key),
      updated: Date.now()
    };
    if (b.note) rec.note = b.note;   // keep the seeded context line
    saveCustomBooks(loadCustomBooks().filter(x => x.id !== rec.id).concat([rec]));
    rebuildBooks(); closeBookEditor(); refreshView();
  };
  $("#b-cancel").onclick = closeBookEditor;
  if (existing && customBookIds.has(existing.id)) $("#b-delete").onclick = () => {
    if (!confirm(seeded ? "Reset this book to the built-in version? Your shelf, rating and notes on it will be discarded." : "Delete this book from your library?")) return;
    saveCustomBooks(loadCustomBooks().filter(x => x.id !== existing.id));
    rebuildBooks(); closeBookEditor(); refreshView();
  };
  $("#book-panel").hidden = false; $("#book-overlay").hidden = false; $("#book-panel").scrollTop = 0;
}
function closeBookEditor() { $("#book-panel").hidden = true; $("#book-overlay").hidden = true; }
function uniqueBookId(title) {
  let base = slugify(title), id = base, i = 2;
  const taken = new Set(window.ALL_BOOKS.map(b => b.id));
  while (taken.has(id)) id = base + "-" + (i++);
  return id;
}

/* ================================================================
   INSIGHTS
   ================================================================ */

function renderInsights() {
  const tb = $("#insights-toolbar"), body = $("#insights-body");
  tb.innerHTML = `<button class="chip action" id="ins-new">＋ New insight</button><input type="search" id="ins-search" placeholder="Search your insights…" value="${esc(state.insightSearch)}">`;
  $("#ins-new").onclick = () => openInsightEditor(null);
  $("#ins-search").oninput = e => { state.insightSearch = e.target.value; renderInsightList(); };
  renderInsightList();
}
function renderInsightList() {
  const body = $("#insights-body");
  const q = state.insightSearch.trim().toLowerCase();
  const list = loadInsights().filter(i => !q || (i.title + " " + i.body).toLowerCase().includes(q)).sort((a, b) => (b.updated || 0) - (a.updated || 0));
  if (!list.length) {
    body.innerHTML = `<div class="ins-empty">${q ? "No insights match that search." : "No insights yet. This is where the cross-cutting conclusions go — the thing you notice reading your third biography of a founder that the first two only hinted at.<br><br>Open any leader and press <strong>＋ Insight</strong>, or start one here."}</div>`;
    return;
  }
  body.innerHTML = list.map(i => {
    const leaders = (i.leaders || []).map(byId).filter(Boolean);
    const tags = (i.tags || []).filter(k => TRAIT_BY_KEY[k]);
    const d = i.updated ? new Date(i.updated) : null;
    return `<div class="ins-card">
      <div class="ins-top"><h3>${esc(i.title || "(untitled)")}</h3><span class="ins-date">${d ? d.toLocaleDateString(undefined, { year: "numeric", month: "short", day: "numeric" }) : ""}</span><button class="ins-edit" data-id="${i.id}">✎ Edit</button></div>
      <div class="ins-body">${esc(i.body)}</div>
      <div class="ins-links">${leaders.map(l => `<span class="ins-leader" data-id="${l.id}">${avatarMarkup(l)}${esc(l.name)}</span>`).join("")}${tags.map(k => `<span class="ins-concept" data-tag="${k}">${TRAIT_BY_KEY[k].name}</span>`).join("")}${(i.books || []).map(bookById).filter(Boolean).map(b => `<span class="ins-concept" data-book="${b.id}" title="Source book">📖 ${esc(b.title)}</span>`).join("")}</div>
    </div>`;
  }).join("");
  body.querySelectorAll(".ins-edit").forEach(b => b.onclick = () => openInsightEditor(b.dataset.id));
  body.querySelectorAll(".ins-leader").forEach(s => s.onclick = () => openDetail(s.dataset.id));
  body.querySelectorAll(".ins-concept").forEach(s => s.onclick = () => { if (s.dataset.book) openBookEditor(s.dataset.book); else filterByTags([s.dataset.tag]); });
}

let insightPick = [], insightPickBooks = [];   // leader / book ids picked in the editor
function openInsightEditor(id, seedLeaderId) {
  const existing = id ? loadInsights().find(i => i.id === id) : null;
  const ins = existing || { id: null, title: "", body: "", leaders: seedLeaderId ? [seedLeaderId] : [], tags: [], books: [] };
  insightPick = (ins.leaders || []).filter(byId);
  insightPickBooks = (ins.books || []).filter(bookById);
  const body = $("#insight-body");
  body.innerHTML = `
    <h2>${existing ? "Edit insight" : "New insight"}</h2>
    <p class="form-hint">A thesis, a pattern, a contradiction worth holding onto. Link the leaders and concepts it rests on.</p>
    <div class="f-row"><label>Title *</label><input type="text" id="i-title" value="${esc(ins.title)}" placeholder="e.g. Charisma without institutions dies with the founder"></div>
    <div class="f-row"><label>The insight</label><textarea id="i-body" style="min-height:170px" placeholder="Write it out. What's the claim, which cases support it, which cut against it, what would change your mind?">${esc(ins.body)}</textarea></div>
    <div class="f-row"><label>Leaders it draws on</label><input type="text" id="i-leader" list="i-leader-list" placeholder="Type a name and press Enter…" autocomplete="off"><datalist id="i-leader-list">${window.ALL_LEADERS.slice().sort((a, b) => a.name.localeCompare(b.name)).map(l => `<option value="${esc(l.name)}">`).join("")}</datalist><div class="picked" id="i-picked"></div></div>
    <div class="f-row"><label>Source books</label><input type="text" id="i-book" list="i-book-list" placeholder="Type a title and press Enter…" autocomplete="off"><datalist id="i-book-list">${window.ALL_BOOKS.slice().sort((a, b) => (a.title || "").localeCompare(b.title || "")).map(b => `<option value="${esc(b.title)}">`).join("")}</datalist><div class="picked" id="i-bpicked"></div></div>
    <div class="f-row"><label>Concepts it involves</label><div class="tag-picker">${tagPickerHtml(ins.tags)}</div></div>
    <div class="form-buttons">
      <button class="btn-save" id="i-save">${existing ? "Save changes" : "Save insight"}</button>
      <button class="btn-cancel" id="i-cancel">Cancel</button>
      ${existing ? `<button class="btn-delete" id="i-delete">Delete</button>` : ""}
    </div>
    <div class="form-msg" id="i-msg"></div>`;

  const drawPicked = () => {
    $("#i-picked").innerHTML = insightPick.map(pid => { const l = byId(pid); return l ? `<span class="pk">${esc(l.name)} <b data-id="${pid}" title="Remove">✕</b></span>` : ""; }).join("");
    $("#i-picked").querySelectorAll("b").forEach(b => b.onclick = () => { insightPick = insightPick.filter(x => x !== b.dataset.id); drawPicked(); });
  };
  drawPicked();
  const addLeader = () => {
    const inp = $("#i-leader"), pid = NAME_TO_ID[normName(inp.value)];
    if (pid && !insightPick.includes(pid)) { insightPick.push(pid); drawPicked(); }
    if (pid) inp.value = "";
  };
  $("#i-leader").addEventListener("keydown", e => { if (e.key === "Enter") { e.preventDefault(); addLeader(); } });
  $("#i-leader").addEventListener("change", addLeader);

  const drawBooks = () => {
    $("#i-bpicked").innerHTML = insightPickBooks.map(bid => { const b = bookById(bid); return b ? `<span class="pk">${esc(b.title)} <b data-id="${bid}" title="Remove">✕</b></span>` : ""; }).join("");
    $("#i-bpicked").querySelectorAll("b").forEach(x => x.onclick = () => { insightPickBooks = insightPickBooks.filter(p => p !== x.dataset.id); drawBooks(); });
  };
  drawBooks();
  const addBook = () => {
    const inp = $("#i-book"), t = inp.value.trim().toLowerCase();
    const hit = window.ALL_BOOKS.find(b => (b.title || "").toLowerCase() === t);
    if (hit && !insightPickBooks.includes(hit.id)) { insightPickBooks.push(hit.id); drawBooks(); }
    if (hit) inp.value = "";
  };
  $("#i-book").addEventListener("keydown", e => { if (e.key === "Enter") { e.preventDefault(); addBook(); } });
  $("#i-book").addEventListener("change", addBook);
  body.querySelectorAll(".tag-opt").forEach(o => o.onclick = () => o.classList.toggle("on"));

  $("#i-save").onclick = () => {
    const title = $("#i-title").value.trim();
    if (!title) { $("#i-msg").textContent = "Give it a title."; return; }
    const rec = {
      id: ins.id || ("ins-" + Date.now().toString(36)),
      title, body: $("#i-body").value.trim(),
      leaders: insightPick.slice(), books: insightPickBooks.slice(),
      tags: [...document.querySelectorAll("#insight-body .tag-opt.on")].map(o => o.dataset.key),
      created: ins.created || Date.now(), updated: Date.now()
    };
    saveInsights(loadInsights().filter(i => i.id !== rec.id).concat([rec]));
    closeInsightEditor(); switchView("insights");
  };
  $("#i-cancel").onclick = closeInsightEditor;
  if (existing) $("#i-delete").onclick = () => { if (confirm("Delete this insight?")) { saveInsights(loadInsights().filter(i => i.id !== ins.id)); closeInsightEditor(); refreshView(); } };
  $("#insight-panel").hidden = false; $("#insight-overlay").hidden = false; $("#insight-panel").scrollTop = 0;
}
function closeInsightEditor() { $("#insight-panel").hidden = true; $("#insight-overlay").hidden = true; }

/* ================================================================
   FRAMEWORKS (traits, tiled)
   ================================================================ */

function renderTraitsNav() {
  const nav = $("#traits-nav");
  nav.innerHTML = "";
  [{ id: "all", title: "All Concepts", icon: "✦", count: null }]
    .concat((window.TRAIT_SECTIONS || []).map(s => ({ id: s.id, title: s.title, icon: s.icon, count: s.traits.length })))
    .forEach(t => {
      const b = document.createElement("button");
      b.className = "cat-tile" + (state.traitCat === t.id ? " on" : "");
      b.innerHTML = `<span class="cat-ico">${t.icon}</span><span><span class="cat-name">${t.title}</span>${t.count != null ? `<br><span class="cat-count">${t.count} concept${t.count === 1 ? "" : "s"}</span>` : ""}</span>`;
      b.onclick = () => { state.traitCat = t.id; renderTraits(); };
      nav.appendChild(b);
    });
}
function renderTraits() {
  renderTraitsNav();
  const body = $("#traits-body");
  body.innerHTML = "";
  (window.TRAIT_SECTIONS || []).filter(s => state.traitCat === "all" || s.id === state.traitCat).forEach(sec => {
    const s = document.createElement("section");
    s.className = "trait-section";
    s.innerHTML = `<h2>${sec.icon} ${sec.title}</h2><p class="blurb">${sec.blurb}</p>`;
    sec.traits.forEach(t => {
      const tagged = t.key ? window.ALL_LEADERS.filter(l => (l.tags || []).includes(t.key)) : [];
      const card = document.createElement("div");
      card.className = "trait-card";
      let ex;
      if (t.key && tagged.length) ex = `<div class="t-ex">Exemplars: ${tagged.slice(0, 8).map(l => `<a data-id="${l.id}">${esc(l.name)}</a>`).join(", ")}${tagged.length > 8 ? ` &amp; ${tagged.length - 8} more` : ""}</div><button class="t-showall" data-tag="${t.key}">Show all ${tagged.length} in the Index &rarr;</button>`;
      else if (t.key) ex = `<div class="t-ex">Taggable concept — no leaders tagged yet. Add it to a leader via ✎ Edit.</div>`;
      else ex = `<div class="t-ex">A diagnostic lens — apply it to any leader in the index.</div>`;
      const bks = t.key ? booksForConcept(t.key) : [];
      const bkHtml = bks.length ? `<div class="t-ex">Reading: ${bks.slice(0, 5).map(b => `<a data-book="${b.id}">${esc(b.title)}</a>`).join(", ")}${bks.length > 5 ? ` &amp; ${bks.length - 5} more` : ""}</div>` : "";
      const ors = t.key ? orgsForTag(t.key) : [];
      const orgHtml = ors.length ? `<div class="t-ex">Organizations: ${ors.map(o => `<a data-org="${o.id}">${esc(o.name)}</a>`).join(", ")}</div>` : "";
      card.innerHTML = `<h3>${t.name}</h3><div class="t-def">${t.def}</div><div class="t-q">Ask: ${t.question}</div>${ex}${orgHtml}${bkHtml}`;
      s.appendChild(card);
    });
    body.appendChild(s);
  });
  body.querySelectorAll(".t-ex a").forEach(a => a.onclick = () => { if (a.dataset.book) openBookEditor(a.dataset.book); else if (a.dataset.org) openOrg(a.dataset.org); else openDetail(a.dataset.id); });
  body.querySelectorAll(".t-showall").forEach(b => b.onclick = () => filterByTags([b.dataset.tag]));
}

/* ================================================================
   TIME SPANS — tenure end years, for the Chronicle and contemporaries
   ================================================================ */

const NOW_YEAR = new Date().getFullYear();
function endYear(l) {
  const s = l.years || "";
  if (/present/i.test(s)) return NOW_YEAR;
  const nums = [...s.matchAll(/\d{1,4}/g)];
  if (!nums.length) return startYear(l);
  const last = nums[nums.length - 1], v = parseInt(last[0], 10);
  let y = v;
  if (/AD\s*$/.test(s.slice(0, last.index))) y = v;
  else if (/BC/.test(s.slice(last.index))) y = -v;
  else if (last[0].length <= 2 && nums.length > 1) {
    // "PM 1940–45": a two-digit tail takes the century of the number before it
    const prev = parseInt(nums[nums.length - 2][0], 10);
    if (prev >= 100) { y = Math.floor(prev / 100) * 100 + v; if (y < prev) y += 100; }
  }
  return Math.max(y, startYear(l));
}
function contemporaries(l, n) {
  const s = startYear(l), e = endYear(l);
  return window.ALL_LEADERS.filter(x => x.id !== l.id)
    .map(x => ({ l: x, o: Math.min(e, endYear(x)) - Math.max(s, startYear(x)) }))
    .filter(x => x.o > 0).sort((a, b) => b.o - a.o).slice(0, n || 8);
}

/* ================================================================
   CHRONICLE — every leader on one timeline, in regional lanes
   ================================================================ */

const REGIONS = [
  { key: "americas", label: "Americas", iso: ["840", "124", "484", "332", "192", "862", "032", "076", "152", "604", "170", "218", "068", "858", "600", "591", "188", "340", "222", "320", "558", "214", "388"] },
  { key: "europe", label: "Europe", iso: ["300", "380", "348", "250", "826", "724", "276", "040", "688", "804", "620", "528", "056", "756", "616", "203", "752", "578", "208", "246", "372", "642", "100", "191", "705", "070", "807", "499", "008", "440", "428", "233", "112", "498", "703", "352"] },
  { key: "steppe", label: "Russia & the Steppe", iso: ["643", "496", "860", "398", "417", "762", "795", "031", "051", "268"] },
  { key: "mena", label: "Middle East & North Africa", iso: ["368", "818", "364", "788", "792", "376", "682", "760", "012", "504", "434", "400", "422", "887", "512", "784", "414", "634", "048", "275", "729"] },
  { key: "africa", label: "Sub-Saharan Africa", iso: ["710", "466", "024", "231", "288", "566", "404", "834", "800", "180", "716", "894", "508", "562", "686", "324", "854", "120", "140", "148", "072", "426", "748", "454", "646", "108", "706", "178", "266", "226", "430", "694", "204", "768", "270", "624", "478", "232", "262", "450"] },
  { key: "southasia", label: "South Asia", iso: ["356", "586", "050", "144", "524", "004", "064"] },
  { key: "eastasia", label: "East Asia & Pacific", iso: ["156", "392", "704", "702", "158", "554", "036", "410", "408", "360", "608", "764", "116", "104", "458", "418", "096", "598", "242"] },
  { key: "other", label: "Elsewhere", iso: [] }
];
const REGION_OF = {};
REGIONS.forEach(r => r.iso.forEach(i => { REGION_OF[i] = r.key; }));
function regionOf(l) { return REGION_OF[l.iso] || "other"; }

const CHRON_PRESETS = [
  { key: "all", label: "All history", px: 1900, stops: [[-1850, 0], [-500, 0.1], [0, 0.17], [600, 0.26], [1100, 0.34], [1450, 0.43], [1650, 0.52], [1800, 0.62], [1900, 0.76], [NOW_YEAR + 2, 1]],
    ticks: [-1800, -1500, -1000, -500, 0, 500, 1000, 1200, 1400, 1500, 1600, 1700, 1750, 1800, 1850, 1900, 1925, 1950, 1975, 2000] },
  { key: "1400", label: "Since 1400", px: 1900, stops: [[1400, 0], [1700, 0.24], [1800, 0.4], [1900, 0.62], [NOW_YEAR + 2, 1]],
    ticks: [1400, 1450, 1500, 1550, 1600, 1650, 1700, 1750, 1800, 1825, 1850, 1875, 1900, 1925, 1950, 1975, 2000, 2025] },
  { key: "1800", label: "Since 1800", px: 2000, stops: [[1780, 0], [1900, 0.4], [NOW_YEAR + 2, 1]],
    ticks: [1780, 1800, 1820, 1840, 1860, 1880, 1900, 1910, 1920, 1930, 1940, 1950, 1960, 1970, 1980, 1990, 2000, 2010, 2020] },
  { key: "1900", label: "Since 1900", px: 2300, stops: [[1895, 0], [NOW_YEAR + 2, 1]],
    ticks: [1900, 1910, 1920, 1930, 1940, 1950, 1960, 1970, 1980, 1990, 2000, 2010, 2020] }
];
function fmtYear(y) { return y < 0 ? `${-y} BC` : y === 0 ? "AD 1" : String(y); }
function shortName(l) { return String(l.name).replace(/\s*\(.*?\)\s*/g, " ").trim(); }

function renderChronicle() {
  const S = state.chron;
  const P = CHRON_PRESETS.find(p => p.key === S.preset) || CHRON_PRESETS[0];
  $("#chronicle-toolbar").innerHTML =
    `<div class="seg">${CHRON_PRESETS.map(p => `<button data-preset="${p.key}" class="${p.key === P.key ? "on" : ""}">${p.label}</button>`).join("")}</div>
     <div class="ch-legend">${ERAS.map(e => `<span style="--era-color:${e.color}"><i></i>${e.label}</span>`).join("")}</div>`;
  $("#chronicle-toolbar").querySelectorAll("[data-preset]").forEach(b => b.onclick = () => { S.preset = b.dataset.preset; renderChronicle(); });

  const body = $("#chronicle-body");
  const LAB = 150, ROW = 22, PADY = 9, BAR = 10;
  const avail = (body.clientWidth || ($("#stage").clientWidth - 80)) - LAB - 2;
  const W = Math.max(avail - 170, P.px);   // time runs to W; the extra room is for the last names
  const SW = W + 170;
  const d0 = P.stops[0][0];
  const sc = d3.scaleLinear().domain(P.stops.map(s => s[0])).range(P.stops.map(s => 14 + s[1] * (W - 28))).clamp(true);
  const leaders = visibleLeaders().filter(l => endYear(l) >= d0);
  if (!leaders.length) { body.innerHTML = `<div class="empty-note">No leaders in this window with the current filters.</div>`; return; }

  const tickSvg = h => P.ticks.filter(t => t >= d0).map(t => `<line class="ch-tick ${t % 100 === 0 ? "major" : ""}" x1="${sc(t)}" y1="0" x2="${sc(t)}" y2="${h}"/>`).join("");
  const axis = `<div class="ch-lane ch-axis"><div class="ch-lab">&nbsp;</div><svg class="ch-track" width="${SW}" height="26">${
    P.ticks.filter(t => t >= d0).map(t => `<text class="ch-ticklab" x="${sc(t)}" y="17">${fmtYear(t)}</text>`).join("")}</svg></div>`;

  let lanes = "";
  REGIONS.forEach(reg => {
    const items = leaders.filter(l => regionOf(l) === reg.key).map(l => {
      const s = startYear(l), e = endYear(l);
      const x0 = sc(Math.max(s, d0)), x1 = Math.max(x0 + 4, sc(e));
      const name = shortName(l);
      return { l, s, e, x0, x1, name, end: x1 + 6 + name.length * 6.3 + 10 };
    }).sort((a, b) => a.x0 - b.x0);
    if (!items.length) return;
    const rows = [];
    items.forEach(it => {
      let r = rows.findIndex(end => end <= it.x0);
      if (r < 0) { r = rows.length; rows.push(0); }
      rows[r] = it.end; it.row = r;
    });
    const h = rows.length * ROW + PADY * 2;
    const g = items.map(it => {
      const y = PADY + it.row * ROW;
      const c = eraColor(it.l);
      return `<g class="ch-item" data-id="${it.l.id}" data-s="${it.s}" data-e="${it.e}">
        <rect class="bar" x="${it.x0}" y="${y + (ROW - BAR) / 2}" width="${it.x1 - it.x0}" height="${BAR}" fill="${c}"/>
        <rect x="${it.x0}" y="${y}" width="${it.end - it.x0 - 10}" height="${ROW}" fill="transparent"/>
        <text x="${it.x1 + 6}" y="${y + ROW / 2 + 4}">${esc(it.name)}</text></g>`;
    }).join("");
    lanes += `<div class="ch-lane"><div class="ch-lab">${esc(reg.label)}<span>${items.length} leader${items.length === 1 ? "" : "s"}</span></div>
      <svg class="ch-track" width="${SW}" height="${h}">${tickSvg(h)}<rect class="ch-band" x="0" y="0" width="0" height="${h}"/>${g}</svg></div>`;
  });

  const keepX = S.scrollX != null && S.scrollKey === P.key ? S.scrollX : null;
  body.innerHTML = `<div class="ch-wrap"><div class="ch-scroll"><div class="ch-inner">${axis}${lanes}${axis}</div></div></div>
    <p class="ch-note" style="margin-top:10px">${leaders.length} leaders · bars run from the start to the end of their time in power (for a few early figures, their lifetime). ${P.key === "all" ? "The axis is compressed before 1800 — equal widths are not equal spans of years." : ""} Click any bar to open the profile.</p>`;
  const scroller = body.querySelector(".ch-scroll");
  // open scrolled to the modern end, where most leaders are, unless the user had scrolled
  scroller.scrollLeft = keepX != null ? keepX : (P.key === "all" ? scroller.scrollWidth : 0);
  scroller.addEventListener("scroll", () => { S.scrollX = scroller.scrollLeft; S.scrollKey = P.key; }, { passive: true });

  const tip = tipEl();
  const inner = body.querySelector(".ch-inner");
  const all = [...body.querySelectorAll(".ch-item")];
  const bands = [...body.querySelectorAll(".ch-band")];
  all.forEach(gEl => {
    gEl.onmouseenter = () => {
      const s = +gEl.dataset.s, e = +gEl.dataset.e;
      inner.classList.add("ch-dim");
      let n = 0;
      all.forEach(x => {
        const co = x === gEl || (+x.dataset.s < e && +x.dataset.e > s);
        x.classList.toggle("co", co); if (co && x !== gEl) n++;
      });
      gEl.classList.add("self");
      const bx = sc(Math.max(s, d0)), bw = Math.max(2, sc(e) - bx);
      bands.forEach(b => { b.setAttribute("x", bx); b.setAttribute("width", bw); });
      const l = byId(gEl.dataset.id);
      tip.innerHTML = `<b>${esc(l.name)}</b><div class="m">${esc(l.title)} · ${esc(l.country)} · ${esc(l.years)}</div><div class="co">${n} contemporar${n === 1 ? "y" : "ies"} in power at the same time</div>`;
      tip.hidden = false;
    };
    gEl.onmousemove = ev => {
      tip.style.left = Math.min(ev.clientX + 14, window.innerWidth - 300) + "px";
      tip.style.top = (ev.clientY + 14) + "px";
    };
    gEl.onmouseleave = () => {
      inner.classList.remove("ch-dim");
      all.forEach(x => x.classList.remove("co", "self"));
      bands.forEach(b => b.setAttribute("width", 0));
      tip.hidden = true;
    };
    gEl.onclick = () => { tip.hidden = true; openDetail(gEl.dataset.id); };
  });
}

/* ================================================================
   CONVERGENCE — do the five frameworks agree about a leader?
   Every reading is re-expressed as a percentile rank among the
   leaders in this atlas who have it, so a Rubenzer facet and a
   count of fear instruments speak the same units. Agreement on a
   signal is 100 minus the spread between its highest and lowest
   reading; a leader's convergence is the mean over signals with
   two or more readings. My construction, not any author's.
   ================================================================ */

const FRAMEWORKS = [
  { key: "rz", label: "Rubenzer traits",  short: "Traits",      color: "var(--fw-rz)" },
  { key: "sm", label: "Simonton styles",  short: "Styles",      color: "var(--fw-sm)" },
  { key: "cs", label: "Carrots & Sticks", short: "Instruments", color: "var(--fw-cs)" },
  { key: "pb", label: "Power Base",       short: "Selectorate", color: "var(--fw-pb)" },
  { key: "oc", label: "Outcome",          short: "Outcome",     color: "var(--fw-oc)" },
  { key: "lt", label: "Hermann traits",   short: "LTA",         color: "var(--fw-lt)" },
  { key: "sv", label: "Svolik autocracy", short: "Autocracy",   color: "var(--fw-sv)" }
];
const FW_BY_KEY = Object.fromEntries(FRAMEWORKS.map(f => [f.key, f]));

function facetMid(l, k) { const t = getTemperament(l); return t && t.f && t.f[k] ? fMid(t, k) : null; }
function styleVal(l, k) { const s = getStyles(l); return s && s.s && s.s[k] != null ? s.s[k] : null; }
function ltaVal(l, k) { const r = getLTA(l); return r ? r.t[k] : null; }
function autoVal(l, k) { const r = getAutocracy(l); return r ? r[k] : null; }
function toolShare(l, regs) {
  const r = getInstruments(l), tools = (r && r.tools) || [];
  return tools.length < 2 ? null : tools.filter(t => regs.includes(t.reg)).length / tools.length;
}

const SIGNALS = [
  { key: "fear", label: "Rules by fear", hi: "coercive", lo: "restrained",
    def: "How far their power rested on the threat of harm rather than on consent or reward.",
    readings: [
      { fw: "rz", label: "low Tender-Mindedness", get: l => { const v = facetMid(l, "ten"); return v == null ? null : 100 - v; } },
      { fw: "cs", label: "fear share of their instruments", get: l => toolShare(l, ["fear"]) },
      { fw: "pb", label: "small winning coalition", get: l => { const p = getPowerBase(l); return p && p.w_scale ? 6 - p.w_scale : null; } },
      { fw: "sv", label: "reliance on repression", get: l => autoVal(l, "rep") },
      { fw: "lt", label: "distrust of others", get: l => ltaVal(l, "dis") }
    ] },
  { key: "bond", label: "Rules through people", hi: "relational", lo: "detached",
    def: "Whether they governed through personal bonds — warmth, loyalty, trust — or at arm's length.",
    readings: [
      { fw: "rz", label: "Positive Emotions", get: l => facetMid(l, "pos") },
      { fw: "sm", label: "Interpersonal style", get: l => styleVal(l, "inter") },
      { fw: "cs", label: "trust & loyalty share of their instruments", get: l => toolShare(l, ["trust", "loyalty"]) },
      { fw: "lt", label: "relationship focus (low task focus)", get: l => { const v = ltaVal(l, "ta"); return v == null ? null : 100 - v; } },
      { fw: "sv", label: "reliance on co-optation", get: l => autoVal(l, "coopt") }
    ] },
  { key: "mind", label: "Governs by thinking", hi: "deliberative", lo: "instinctive",
    def: "Intellect as a working method: reading, weighing and reasoning before acting.",
    readings: [
      { fw: "rz", label: "Intellectual Brilliance", get: l => facetMid(l, "int") },
      { fw: "sm", label: "Deliberative style", get: l => styleVal(l, "delib") },
      { fw: "lt", label: "conceptual complexity", get: l => ltaVal(l, "cc") }
    ] },
  { key: "force", label: "Force of personality", hi: "commanding", lo: "self-effacing",
    def: "Dominance and presence — the capacity to fill a room and take it over.",
    readings: [
      { fw: "rz", label: "Assertiveness", get: l => facetMid(l, "ass") },
      { fw: "sm", label: "Charismatic style", get: l => styleVal(l, "charis") },
      { fw: "lt", label: "need for power", get: l => ltaVal(l, "pwr") }
    ] },
  { key: "steady", label: "Holds steady", hi: "steady", lo: "brittle",
    def: "Composure under pressure — and whether what they built outlived them.",
    readings: [
      { fw: "rz", label: "Not Vulnerable", get: l => facetMid(l, "nvul") },
      { fw: "sm", label: "low Neurotic style", get: l => { const v = styleVal(l, "neuro"); return v == null ? null : 100 - v; } },
      { fw: "oc", label: "orderly vs. crisis succession", fixed: true, get: l => { const s = getOutcome(l).succession; return s === "orderly" ? 85 : s === "crisis" ? 15 : null; } }
    ] }
];

var CONV_CACHE = null;   // var: reset from rebuildAll(), which runs earlier in the file
function convergenceData() {
  if (CONV_CACHE) return CONV_CACHE;
  const L = window.ALL_LEADERS;
  const rankers = SIGNALS.map(sig => sig.readings.map(r => {
    if (r.fixed) return null;
    const vals = L.map(l => r.get(l)).filter(v => v != null);
    return v => {
      let lo = 0, eq = 0;
      vals.forEach(x => { if (x < v) lo++; else if (x === v) eq++; });
      return Math.round(100 * (lo + eq / 2) / vals.length);
    };
  }));
  const byLeader = {};
  L.forEach(l => {
    const fws = new Set();
    const sigs = SIGNALS.map((sig, si) => {
      const reads = [];
      sig.readings.forEach((r, ri) => {
        const raw = r.get(l);
        if (raw == null) return;
        fws.add(r.fw);
        reads.push({ fw: r.fw, label: r.label, v: r.fixed ? raw : rankers[si][ri](raw) });
      });
      const vs = reads.map(x => x.v);
      return { sig, reads,
        spread: reads.length >= 2 ? Math.max(...vs) - Math.min(...vs) : null,
        mean: reads.length ? vs.reduce((a, b) => a + b, 0) / vs.length : null };
    });
    const compared = sigs.filter(s => s.spread != null);
    const score = compared.length ? Math.round(100 - compared.reduce((a, s) => a + s.spread, 0) / compared.length) : null;
    const split = compared.slice().sort((a, b) => b.spread - a.spread)[0] || null;
    byLeader[l.id] = { l, fws, sigs, compared, score, split, eligible: fws.size >= 3 && compared.length >= 3 };   // agreement on only two signals is too easy
  });
  CONV_CACHE = { byLeader, eligible: Object.values(byLeader).filter(c => c.eligible) };
  return CONV_CACHE;
}
function convergenceOf(l) { return l ? convergenceData().byLeader[l.id] || null : null; }
// with seven frameworks the atlas-wide scores run roughly 45–93 with a median near 71; the bands are the top and bottom fifths
function scoreClass(v) { return v == null ? "" : v >= 78 ? "hi" : v <= 61 ? "lo" : "mid"; }

function fwTag(k) { const f = FW_BY_KEY[k]; return `<span class="fw" style="--c:${f.color}">${esc(f.short)}</span>`; }
// one sentence about one signal: a split if the readings are far apart, a verdict if they agree
function describeSignal(s) {
  if (!s || !s.reads.length) return "";
  if (s.reads.length < 2) return `<b>${esc(s.sig.label)}</b> — only ${fwTag(s.reads[0].fw)} speaks to this (${s.reads[0].v}).`;
  if (s.spread >= 35) {
    const hi = s.reads.reduce((a, b) => (b.v > a.v ? b : a)), lo = s.reads.reduce((a, b) => (b.v < a.v ? b : a));
    return `<b>${esc(s.sig.label)}</b> — ${fwTag(hi.fw)} reads ${esc(s.sig.hi)} (${hi.v}, ${esc(hi.label)}); ${fwTag(lo.fw)} reads ${esc(s.sig.lo)} (${lo.v}, ${esc(lo.label)}).`;
  }
  const word = s.mean >= 62 ? s.sig.hi : s.mean <= 38 ? s.sig.lo : "middling";
  return `<b>${esc(s.sig.label)}</b> — ${s.reads.map(r => fwTag(r.fw)).join(" ")} ${s.reads.length === 2 ? "both" : "all"} read ${esc(word)} (${s.reads.map(r => r.v).join(" · ")}).`;
}
function splitSentence(c) { return describeSignal(c.split); }
function agreeSentence(c) {
  const cands = c.compared.filter(s => s.spread <= 25).sort((a, b) => Math.abs(b.mean - 50) - Math.abs(a.mean - 50));
  return describeSignal(cands[0] || c.compared.slice().sort((a, b) => a.spread - b.spread)[0]);
}
function cvStrip(s) {
  if (!s || !s.reads.length) return `<span class="cv-strip none" title="No framework reads this"></span>`;
  const vs = s.reads.map(r => r.v), mn = Math.min(...vs), mx = Math.max(...vs);
  const rc = s.spread == null ? "var(--muted)" : s.spread >= 50 ? "var(--bad)" : s.spread <= 20 ? "var(--good)" : "var(--muted)";
  const tip = `${s.sig.label}: ` + s.reads.map(r => `${FW_BY_KEY[r.fw].short} ${r.v} (${r.label})`).join(" · ") + (s.spread != null ? ` — spread ${s.spread}` : "");
  return `<span class="cv-strip ${s.reads.length < 2 ? "solo" : ""}" title="${esc(tip)}">` +
    (s.reads.length >= 2 ? `<span class="cv-range" style="left:${mn}%;width:${Math.max(mx - mn, 0.5)}%;--rc:${rc}"></span>` : "") +
    s.reads.map(r => `<i class="cv-dot" style="left:${r.v}%;--c:${FW_BY_KEY[r.fw].color}"></i>`).join("") + `</span>`;
}
function fwDots(c) {
  return `<span class="cv-fwdots" title="${FRAMEWORKS.map(f => `${f.label}: ${c.fws.has(f.key) ? "yes" : "no"}`).join(" · ")}">` +
    FRAMEWORKS.map(f => `<i class="${c.fws.has(f.key) ? "" : "off"}" style="--c:${f.color}"></i>`).join("") + `</span>`;
}
function pearson(xs, ys) {
  const n = xs.length; if (n < 3) return null;
  const mx = xs.reduce((a, b) => a + b, 0) / n, my = ys.reduce((a, b) => a + b, 0) / n;
  let sxy = 0, sxx = 0, syy = 0;
  for (let i = 0; i < n; i++) { sxy += (xs[i] - mx) * (ys[i] - my); sxx += (xs[i] - mx) ** 2; syy += (ys[i] - my) ** 2; }
  return sxx && syy ? sxy / Math.sqrt(sxx * syy) : null;
}

// the Convergence block on a leader profile
function convergenceHtml(l) {
  const c = convergenceOf(l);
  if (!c || !c.sigs.some(s => s.reads.length)) return "";
  const focus = c.split && c.split.spread >= 35 ? c.split : null;
  const rows = c.sigs.map(s => `<span class="cv-lab ${focus === s ? "top" : ""}" title="${esc(s.sig.def)}">${esc(s.sig.label)}</span>${cvStrip(s)}
      <span class="cv-reads">${s.reads.length ? s.reads.map(r => `<span><i style="--c:${FW_BY_KEY[r.fw].color}"></i>${FW_BY_KEY[r.fw].short} ${r.v}</span>`).join(" · ") : "—"}</span>`).join("");
  const head = c.score != null
    ? `<div class="cv-bigscore ${scoreClass(c.score)}">${c.score}</div><div class="cv-headtext"><b>${c.score >= 78 ? "The frameworks largely agree." : c.score <= 61 ? "The frameworks contradict each other." : "Partial agreement."}</b><br>${c.fws.size} of ${FRAMEWORKS.length} frameworks cover this leader ${fwDots(c)}${c.eligible ? "" : " — a full reading needs three frameworks agreeing or disagreeing on at least three signals, so treat this as partial."}</div>`
    : `<div class="cv-headtext"><b>Not enough overlap to compare.</b><br>${c.fws.size} of ${FRAMEWORKS.length} frameworks cover this leader ${fwDots(c)}.</div>`;
  return `<div class="cv-panel">
    <div class="cv-head">${head}</div>
    <div class="cv-sigs">${rows}</div>
    ${c.compared.length ? `<div class="cv-sentence" style="margin-top:12px">${focus ? splitSentence(c) : agreeSentence(c)}</div>` : ""}
    <div class="cv-foot"><div class="cv-legend">${FRAMEWORKS.map(f => `<span style="--c:${f.color}"><i></i>${f.short}</span>`).join("")}</div>
      <div class="d-actions" style="margin-left:auto"><button id="d-conv-open">↗ Open in Convergence</button></div></div>
  </div>`;
}

function renderConvergence() {
  const S = state.conv, D = convergenceData();
  const tb = $("#convergence-toolbar"), body = $("#convergence-body");
  tb.innerHTML = `<div class="cv-pills"><span class="lab">Judge agreement on</span>
      <button class="chip ${S.sig === "all" ? "on" : ""}" data-sig="all">All five signals</button>
      ${SIGNALS.map(s => `<button class="chip ${S.sig === s.key ? "on" : ""}" data-sig="${s.key}" title="${esc(s.def)}">${esc(s.label)}</button>`).join("")}</div>
    <div class="cv-legend" style="margin-left:auto">${FRAMEWORKS.map(f => `<span style="--c:${f.color}"><i></i>${f.label}</span>`).join("")}</div>`;
  tb.querySelectorAll("[data-sig]").forEach(b => b.onclick = () => { S.sig = b.dataset.sig; renderConvergence(); });

  const si = S.sig === "all" ? -1 : SIGNALS.findIndex(x => x.key === S.sig);
  const metric = c => si < 0 ? c.score : (c.sigs[si].spread == null ? null : 100 - c.sigs[si].spread);
  const pool = D.eligible.filter(c => metric(c) != null);
  const agree = pool.slice().sort((a, b) => metric(b) - metric(a) || b.fws.size - a.fws.size).slice(0, 6);
  const split = pool.slice().sort((a, b) => metric(a) - metric(b) || b.fws.size - a.fws.size).slice(0, 6);
  const sentence = (c, kind) => si >= 0 ? describeSignal(c.sigs[si]) : kind === "agree" ? agreeSentence(c) : splitSentence(c);
  const card = (c, kind) => {
    const m = metric(c);
    return `<div class="cv-card" data-id="${c.l.id}">
      <div class="cv-card-top">${avatarMarkup(c.l)}<div><b>${esc(c.l.name)}</b><span class="m">${esc(c.l.years)} · ${fwDots(c)}</span></div>
        <div class="cv-score ${scoreClass(m)}"><b>${m}</b><span>${si >= 0 ? "agreement" : "convergence"}</span></div></div>
      <div class="cv-sigs">${c.sigs.map((s, i) => `<span class="cv-lab ${i === si || (si < 0 && kind === "split" && s === c.split) ? "top" : ""}">${esc(s.sig.label)}</span>${cvStrip(s)}`).join("")}</div>
      <div class="cv-sentence">${sentence(c, kind)}</div>
    </div>`;
  };

  // do the frameworks measure the same thing? correlation of each reading pair, per signal
  const pairRows = [];
  SIGNALS.forEach((sig, k) => {
    for (let i = 0; i < sig.readings.length; i++) for (let j = i + 1; j < sig.readings.length; j++) {
      const a = sig.readings[i], b = sig.readings[j], xs = [], ys = [];
      Object.values(D.byLeader).forEach(c => {
        const ra = c.sigs[k].reads.find(r => r.fw === a.fw), rb = c.sigs[k].reads.find(r => r.fw === b.fw);
        if (ra && rb) { xs.push(ra.v); ys.push(rb.v); }
      });
      const r = pearson(xs, ys);
      const gap = xs.length ? Math.round(xs.reduce((acc, x, n) => acc + Math.abs(x - ys[n]), 0) / xs.length) : null;
      pairRows.push({ sig, a, b, n: xs.length, r, gap });
    }
  });
  const verdict = r => r == null ? "too few cases" : r >= 0.5 ? "strong agreement" : r >= 0.25 ? "moderate agreement" : r > -0.1 ? "largely independent" : "pull in opposite directions";

  // the full table
  const sortVal = c => S.sort === "name" ? c.l.name : S.sort === "fw" ? c.fws.size : S.sort === "score" ? metric(c)
    : (() => { const s = c.sigs.find(x => x.sig.key === S.sort); return s && s.spread != null ? s.spread : null; })();
  const rows = D.eligible.slice().sort((a, b) => {
    const va = sortVal(a), vb = sortVal(b);
    if (va == null && vb == null) return 0; if (va == null) return 1; if (vb == null) return -1;
    return (typeof va === "string" ? va.localeCompare(vb) : va - vb) * S.dir;
  });
  const th = (k, label, cls) => `<th class="${cls || ""} ${S.sort === k ? "sorted" : ""}" data-sort="${k}">${label}${S.sort === k ? `<span class="arr">${S.dir > 0 ? "▲" : "▼"}</span>` : ""}</th>`;
  const notEligible = window.ALL_LEADERS.length - D.eligible.length;

  body.innerHTML = `
    <details class="cv-method"><summary>How the score is built <span>— my construction, not any of the five authors'</span></summary><div class="body">
      <p>Seven frameworks are asked the same five questions; not every framework can answer every question. Three lenses in the atlas are deliberately left out: Skowronek's political time and the Archigos fate data describe a leader's <em>situation</em> and <em>aftermath</em>, not their disposition, and Olson's bandits describe a fiscal strategy that none of the five questions asks about — so they are things convergence should be tested against rather than part of it. Every answer is converted to a <em>percentile rank among the leaders in this atlas</em> who have that reading, so a Rubenzer facet, a Simonton factor, a count of fear instruments and the size of a winning coalition all speak the same units. The succession outcome is binary and cannot be ranked, so it enters as 85 (orderly) or 15 (crisis).</p>
      <p>On each question, <strong>agreement</strong> is 100 minus the gap between the highest and lowest reading. A leader's <strong>convergence</strong> is the average agreement across the questions at least two frameworks answer. Leaders qualify when three or more frameworks cover them and at least three of the five questions get two or more answers &mdash; ${D.eligible.length} do; ${notEligible} don't yet.</p>
      <p>Read the result as a pointer, not a measurement. A low score means <em>look here</em>: either one framework misreads this leader, or the leader really was two things at once &mdash; warm in temperament and cold in method, or composed in person while building something that shattered at their death.</p>
      <div class="cv-sigdefs">${SIGNALS.map(s => `<div class="cv-sigdef"><b>${esc(s.label)}</b><div style="font-family:var(--font-serif);font-size:13.5px;margin-bottom:6px">${esc(s.def)}</div><ul>${s.readings.map(r => `<li style="--c:${FW_BY_KEY[r.fw].color}"><i></i>${FW_BY_KEY[r.fw].label}: ${esc(r.label)}</li>`).join("")}</ul></div>`).join("")}</div>
    </div></details>

    <div class="cv-duo">
      <div class="cv-col agree"><h3><span class="glyph">◎</span>Where they agree</h3><p>${si >= 0 ? `Highest agreement on <em>${esc(SIGNALS[si].label)}</em>.` : "The leaders every lens reads the same way. These portraits are probably sound."}</p>${agree.map(c => card(c, "agree")).join("")}</div>
      <div class="cv-col split"><h3><span class="glyph">⟷</span>Where they contradict</h3><p>${si >= 0 ? `Widest disagreement on <em>${esc(SIGNALS[si].label)}</em>.` : "The leaders the lenses cannot agree on. Start your reading here."}</p>${split.map(c => card(c, "split")).join("")}</div>
    </div>

    <div class="reg-head"><h3>Do the frameworks measure the same thing?</h3><span class="reg-sub">correlation between each pair of readings, across every leader both cover</span></div>
    <div class="cmp-summary">If two frameworks track the same underlying quality, their readings should rise and fall together across the whole atlas. A weak or negative correlation is not a bug in one of them &mdash; it says the two are measuring different things under the same name, which is itself a finding about leadership.</div>
    <table class="xtab" style="margin-bottom:30px"><thead><tr><th>Signal</th><th>Reading A</th><th>Reading B</th><th>Leaders</th><th>Correlation</th><th>Mean gap</th><th>Verdict</th></tr></thead><tbody>
      ${pairRows.map(p => `<tr><td><b>${esc(p.sig.label)}</b></td>
        <td><span class="fw" style="--c:${FW_BY_KEY[p.a.fw].color};color:var(--c);font-weight:600">${FW_BY_KEY[p.a.fw].short}</span> <span style="color:var(--muted)">${esc(p.a.label)}</span></td>
        <td><span class="fw" style="--c:${FW_BY_KEY[p.b.fw].color};color:var(--c);font-weight:600">${FW_BY_KEY[p.b.fw].short}</span> <span style="color:var(--muted)">${esc(p.b.label)}</span></td>
        <td class="num">${p.n}</td><td class="num"><b>${p.r == null ? "—" : (p.r >= 0 ? "+" : "") + p.r.toFixed(2)}</b></td><td class="num">${p.gap == null ? "—" : p.gap}</td>
        <td style="color:${p.r == null ? "var(--muted)" : p.r >= 0.25 ? "var(--good)" : p.r > -0.1 ? "var(--muted)" : "var(--bad)"}">${verdict(p.r)}${p.n < 12 ? ` <span class="lowN">(low n)</span>` : ""}</td></tr>`).join("")}
    </tbody></table>

    <div class="reg-head"><h3>Every qualifying leader</h3><span class="reg-sub">${D.eligible.length} leaders · click a column to sort · each strip shows where the frameworks place them, 0–100</span></div>
    <table class="cv-table"><thead><tr>${th("name", "Leader")}${th("fw", "Frameworks")}${SIGNALS.map(s => th(s.key, esc(s.label), "strip")).join("")}${th("score", si >= 0 ? "Agreement" : "Convergence")}</tr></thead><tbody>
      ${rows.map(c => { const m = metric(c); return `<tr data-id="${c.l.id}"><td><div class="ix-who">${avatarMarkup(c.l)}<div><div class="ix-name">${esc(c.l.name)}</div><div class="ix-sub">${esc(c.l.years)}</div></div></div></td>
        <td>${fwDots(c)}</td>${c.sigs.map(s => `<td class="strip">${cvStrip(s)}</td>`).join("")}<td class="cv-num ${scoreClass(m)}">${m == null ? "—" : m}</td></tr>`; }).join("")}
    </tbody></table>`;

  body.querySelectorAll("[data-id]").forEach(el => el.onclick = () => openDetail(el.dataset.id));
  body.querySelectorAll("th[data-sort]").forEach(h => h.onclick = () => {
    const k = h.dataset.sort;
    if (S.sort === k) S.dir = -S.dir; else { S.sort = k; S.dir = k === "name" ? 1 : k === "fw" || k === "score" ? -1 : -1; }
    renderConvergence();
  });
  hydrateAvatars(body);
}

/* ================================================================
   INDEX — the home view: a sortable register of every leader
   ================================================================ */

const EXIT_SHORT = { voluntary: "Stepped down", defeated: "Lost election", termlimit: "Term limit", died: "Died in office", assassinated: "Assassinated", deposed: "Deposed", incumbent: "In power" };
const IX_COLS = [
  { k: "name", label: "Leader" }, { k: "era", label: "Era", cls: "c-era" }, { k: "chron", label: "Tenure" },
  { k: "country", label: "Country", cls: "c-country" }, { k: "style", label: "Dominant style", cls: "c-style" },
  { k: "comp", label: "Temperament", cls: "c-comp" }, { k: "conv", label: "Convergence", cls: "c-conv" },
  { k: "exit", label: "How it ended", cls: "c-exit" }, { k: "books", label: "Books", cls: "c-books" }
];
function ixValue(l, k) {
  if (k === "name") return shortName(l);
  if (k === "chron") return startYear(l);
  if (k === "era") return ERAS.findIndex(e => e.key === l.era) * 100000 + startYear(l);
  if (k === "country") return l.country || null;
  if (k === "style") { const s = getStyles(l); return s ? SSTYLES.indexOf(dominantStyle(s)) * 1000 - s.s[dominantStyle(s).key] : null; }
  if (k === "comp") { const t = getTemperament(l); return t ? composite(t) : null; }
  if (k === "conv") { const c = convergenceOf(l); return c && c.eligible ? c.score : null; }
  if (k === "exit") return getOutcome(l).exit || null;
  if (k === "books") return booksForLeader(l.id).length;
  return null;
}
function dailyContradiction() {
  const list = convergenceData().eligible.filter(c => c.score != null).sort((a, b) => a.score - b.score).slice(0, 12);
  if (!list.length) return null;
  const day = Math.floor(Date.now() / 86400000);
  return list[day % list.length];
}

function renderIndex() {
  const S = state.index;
  const n = window.ALL_LEADERS.length;
  const dc = dailyContradiction();
  $("#index-hero").innerHTML = `<div class="ix-hero">
      <div class="ix-title"><h2>${n} leaders, eight lenses</h2>
        <p>An index of political leadership from Hammurabi to the present &mdash; each leader read through temperament, trait and style, the instruments they reached for, the coalition and the armed men who kept them in power, their moment in political time, and how their power &mdash; and they &mdash; ended.</p>
        <div class="ix-stats">
          <a data-go="temperament"><b>${scoredLeaders().length}</b>temperament profiles</a>
          <a data-go="temperament" data-tmode="styles"><b>${styledLeaders().length}</b>style profiles</a>
          <a data-go="temperament" data-tmode="lta"><b>${window.ALL_LEADERS.filter(l => getLTA(l)).length}</b>trait analyses</a>
          <a data-go="instruments"><b>${window.ALL_LEADERS.filter(l => getInstruments(l)).length}</b>toolkits</a>
          <a data-go="time"><b>${window.ALL_LEADERS.filter(l => getTime(l)).length}</b>political-time readings</a>
          <a data-go="survival"><b>${window.ALL_LEADERS.filter(l => getAutocracy(l)).length}</b>autocracies</a>
          <a data-go="convergence"><b>${convergenceData().eligible.length}</b>convergence reads</a>
          <a data-go="library"><b>${window.ALL_BOOKS.length}</b>books</a>
        </div></div>
      ${dc ? `<div class="ix-callout" data-id="${dc.l.id}"><span class="k">Contradiction of the day</span>
        <div class="who">${avatarMarkup(dc.l)}<b>${esc(dc.l.name)}</b><span class="cv-score ${scoreClass(dc.score)}" style="margin-left:auto"><b>${dc.score}</b><span>convergence</span></span></div>
        <div class="cv-sentence">${splitSentence(dc)}</div>
        <span class="more"><a data-go="convergence" style="cursor:pointer;color:var(--accent)">All contradictions in Convergence →</a></span></div>` : ""}
    </div>`;
  $("#index-hero").querySelectorAll("[data-go]").forEach(a => a.onclick = ev => {
    ev.stopPropagation();
    if (a.dataset.tmode) state.temperament.mode = a.dataset.tmode;
    switchView(a.dataset.go);
  });
  const call = $("#index-hero .ix-callout");
  if (call) call.onclick = () => openDetail(call.dataset.id);

  const leaders = visibleLeaders();
  const parts = [];
  if (state.country) parts.push(esc(state.countryName));
  if (state.presidentsOnly) parts.push("Presidents");
  state.tags.forEach(k => { if (TRAIT_BY_KEY[k]) parts.push(esc(TRAIT_BY_KEY[k].name)); });
  $("#index-toolbar").innerHTML = `<span class="ix-count"><b>${leaders.length}</b> of ${n} leaders${parts.length ? " · " + parts.join(" · ") : ""}</span>
    ${S.mode === "cards" ? `<select id="ix-sort">${IX_COLS.filter(c => c.k !== "exit").map(c => `<option value="${c.k}" ${S.sort === c.k ? "selected" : ""}>Sort: ${c.label}</option>`).join("")}</select>` : ""}
    <div class="seg"><button data-mode="table" class="${S.mode === "table" ? "on" : ""}">Table</button><button data-mode="cards" class="${S.mode === "cards" ? "on" : ""}">Cards</button></div>`;
  $("#index-toolbar").querySelectorAll("[data-mode]").forEach(b => b.onclick = () => { S.mode = b.dataset.mode; renderIndex(); });
  if ($("#ix-sort")) $("#ix-sort").onchange = e => { S.sort = e.target.value; S.dir = ["name", "chron", "era", "country"].includes(S.sort) ? 1 : -1; renderIndex(); };

  const body = $("#index-body");
  if (!leaders.length) { body.innerHTML = `<div class="empty-note">No leaders match the current filters.<br>Toggle more eras on, clear a filter above, or add a new leader.</div>`; return; }
  const sorted = leaders.slice().sort((a, b) => {
    const va = ixValue(a, S.sort), vb = ixValue(b, S.sort);
    if (va == null && vb == null) return startYear(a) - startYear(b);
    if (va == null) return 1; if (vb == null) return -1;
    const d = typeof va === "string" ? va.localeCompare(vb) : va - vb;
    return d * S.dir || startYear(a) - startYear(b);
  });

  const styleCell = l => { const s = getStyles(l); if (!s) return `<span class="ix-dash">—</span>`; const d = dominantStyle(s); return `<span class="ix-style" title="${esc(styleSignature(s))}"><i style="background:${d.color}"></i>${esc(d.name)}</span>`; };
  const compCell = l => { const t = getTemperament(l); if (!t) return `<span class="ix-dash">—</span>`; const v = Math.round(composite(t)); return `<span class="ix-meter"><i style="width:${v}%"></i></span>${v}`; };
  const convCell = l => { const c = convergenceOf(l); return c && c.eligible ? `<span class="cv-num ${scoreClass(c.score)}">${c.score}</span>` : `<span class="ix-dash">—</span>`; };
  const exitCell = l => { const o = getOutcome(l); return o.exit ? `<span class="ix-exit ${o.succession === "crisis" ? "crisis" : o.succession === "orderly" ? "orderly" : ""}" title="${esc(EXITS[o.exit] || "")}${o.succession && o.succession !== "na" ? " · " + esc(SUCCESSIONS[o.succession]) : ""}">${EXIT_SHORT[o.exit] || o.exit}</span>` : `<span class="ix-dash">—</span>`; };
  const marks = l => (l.president ? '<span class="star" title="President">★</span>' : "") +
    (customIds.has(l.id) ? `<span class="custom-dot" title="${isSeeded(l.id) ? "Edited by you" : "Added by you"}">${isSeeded(l.id) ? "✎" : "●"}</span>` : "");

  if (S.mode === "cards") {
    body.innerHTML = `<div class="ix-grid">${sorted.map(l => {
      const s = getStyles(l), c = convergenceOf(l);
      return `<div class="ix-card" data-id="${l.id}" style="--era-color:${eraColor(l)}">
        ${avatarMarkup(l)}
        <div><div class="ix-cname">${esc(l.name)} <span class="ix-name">${marks(l)}</span></div><div class="ix-cmeta">${esc(l.title)}</div><div class="ix-cmeta">${esc(l.country)} · ${esc(l.years)}</div></div>
        <div class="ix-cfoot">${s ? styleCell(l) : ""}${c && c.eligible ? `<span>convergence ${convCell(l)}</span>` : ""}${exitCell(l)}</div>
      </div>`; }).join("")}</div>`;
  } else {
    const grouped = S.sort === "chron" && S.dir > 0 || S.sort === "era";
    let lastEra = null, html = "";
    sorted.forEach(l => {
      if (grouped && l.era !== lastEra) {
        lastEra = l.era;
        const e = ERA_BY_KEY[l.era] || { label: l.era, color: "var(--muted)" };
        html += `<tr class="era-row" style="--era-color:${e.color}"><td colspan="${IX_COLS.length}">${esc(e.label)}<span>${sorted.filter(x => x.era === l.era).length}</span></td></tr>`;
      }
      html += `<tr class="row" data-id="${l.id}">
        <td><div class="ix-who">${avatarMarkup(l)}<div><div class="ix-name">${esc(l.name)}${marks(l)}</div><div class="ix-sub">${esc(l.title)}</div></div></div></td>
        <td class="c-era"><span class="ix-era" style="--era-color:${eraColor(l)}"><i></i>${esc((ERA_BY_KEY[l.era] || {}).label || l.era)}</span></td>
        <td><span class="ix-yr">${esc(l.years)}</span></td>
        <td class="c-country">${esc(l.country) || '<span class="ix-dash">—</span>'}</td>
        <td class="c-style">${styleCell(l)}</td>
        <td class="c-comp ix-num">${compCell(l)}</td>
        <td class="c-conv ix-num">${convCell(l)}</td>
        <td class="c-exit">${exitCell(l)}</td>
        <td class="c-books ix-num">${booksForLeader(l.id).length || '<span class="ix-dash">—</span>'}</td></tr>`;
    });
    body.innerHTML = `<table class="ix"><thead><tr>${IX_COLS.map(c => `<th class="${c.cls || ""} ${S.sort === c.k ? "sorted" : ""} ${c.k === "comp" || c.k === "conv" || c.k === "books" ? "ix-num" : ""}" data-sort="${c.k}">${c.label}${S.sort === c.k ? `<span class="arr">${S.dir > 0 ? "▲" : "▼"}</span>` : ""}</th>`).join("")}</tr></thead><tbody>${html}</tbody></table>`;
    body.querySelectorAll("th[data-sort]").forEach(h => h.onclick = () => {
      const k = h.dataset.sort;
      if (S.sort === k) S.dir = -S.dir; else { S.sort = k; S.dir = ["name", "chron", "era", "country", "exit"].includes(k) ? 1 : -1; }
      renderIndex();
    });
  }
  body.querySelectorAll("[data-id]").forEach(r => r.onclick = () => openDetail(r.dataset.id));
  hydrateAvatars(body);
  hydrateAvatars($("#index-hero"));
}

/* ---------------- lazy portraits for list avatars ---------------- */

const PORTRAIT_QUEUE = [];
let portraitActive = 0;
let portraitObserver = null;
function hydrateAvatars(root) {
  if (!root || !("IntersectionObserver" in window)) return;
  if (!portraitObserver) portraitObserver = new IntersectionObserver(entries => entries.forEach(en => {
    if (!en.isIntersecting) return;
    portraitObserver.unobserve(en.target);
    PORTRAIT_QUEUE.push(en.target); pumpPortraits();
  }), { root: $("#stage"), rootMargin: "300px" });
  root.querySelectorAll(".avatar.mono[data-lid]").forEach(el => {
    if (localStorage.getItem("atlas-img-" + el.dataset.lid) === "") return;   // known to have no portrait
    portraitObserver.observe(el);
  });
}
function pumpPortraits() {
  while (portraitActive < 4 && PORTRAIT_QUEUE.length) {
    const el = PORTRAIT_QUEUE.shift(), l = byId(el.dataset.lid);
    if (!l || !el.isConnected) continue;
    portraitActive++;
    fetchPortrait(l).then(url => {
      if (url && el.isConnected) { el.classList.remove("mono"); el.innerHTML = `<img src="${url}" alt="" onerror="this.parentElement.classList.add('mono');this.parentElement.textContent='${initials(l.name)}'">`; }
    }).finally(() => { portraitActive--; pumpPortraits(); });
  }
}

/* ================================================================
   LEADER PROFILE — a full page, reached at #/leader/<id>
   ================================================================ */

function openDetail(id) {
  const target = "#/leader/" + encodeURIComponent(id);
  if (location.hash !== target) location.hash = target;
  else showView("leader", id);
}
function closeDetail() { /* profiles are pages now, not a drawer — nothing to close */ }

// ---------- essays (long-form pieces from data/essays.js) ----------
function essaysFor(id) {
  const E = window.ESSAYS || {};
  const shared = Object.keys(E).filter(k => k !== id).flatMap(k => E[k].filter(e => (e.also || []).includes(id)).map(e => Object.assign({ home: k }, e)));
  return (E[id] || []).concat(shared);
}
function mdInline(t) {
  return esc(t).replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>").replace(/\*([^*]+)\*/g, "<em>$1</em>");
}
function mdToHtml(src) {
  const lines = String(src || "").split("\n"), out = [];
  let i = 0;
  while (i < lines.length) {
    const line = lines[i];
    if (!line.trim()) { i++; continue; }
    if (line.startsWith("## ")) { out.push(`<h4>${mdInline(line.slice(3))}</h4>`); i++; continue; }
    if (line.trim().startsWith("|")) {
      const rows = [];
      while (i < lines.length && lines[i].trim().startsWith("|")) { rows.push(lines[i].trim()); i++; }
      const cells = r => r.replace(/^\||\|$/g, "").split("|").map(c => c.trim());
      const head = cells(rows[0]), bodyRows = rows.slice(1).filter(r => !/^\|[\s\-:|]+\|$/.test(r));
      out.push(`<div class="es-tablewrap"><table class="es-table"><thead><tr>${head.map(c => `<th>${mdInline(c)}</th>`).join("")}</tr></thead><tbody>${bodyRows.map(r => `<tr>${cells(r).map(c => `<td>${mdInline(c)}</td>`).join("")}</tr>`).join("")}</tbody></table></div>`);
      continue;
    }
    if (/^- /.test(line)) {
      const items = [];
      while (i < lines.length && /^- /.test(lines[i])) { items.push(lines[i].slice(2)); i++; }
      out.push(`<ul>${items.map(x => `<li>${mdInline(x)}</li>`).join("")}</ul>`); continue;
    }
    if (/^\d+\. /.test(line)) {
      const items = [];
      while (i < lines.length && /^\d+\. /.test(lines[i])) { items.push(lines[i].replace(/^\d+\. /, "")); i++; }
      out.push(`<ol>${items.map(x => `<li>${mdInline(x)}</li>`).join("")}</ol>`); continue;
    }
    const para = [];
    while (i < lines.length && lines[i].trim() && !/^(## |- |\d+\. |\s*\|)/.test(lines[i])) { para.push(lines[i]); i++; }
    out.push(`<p>${mdInline(para.join(" "))}</p>`);
  }
  return out.join("");
}
function essaysHtml(l) {
  const list = essaysFor(l.id);
  if (!list.length) return "";
  return list.map(e => `<details class="es-essay">
    <summary><span class="es-title">${esc(e.title)}</span>${e.date ? `<span class="es-date">${esc(e.date)}</span>` : ""}${e.dek ? `<span class="es-dek">${esc(e.dek)}</span>` : ""}${e.home && byId(e.home) ? `<span class="es-from">Filed under ${esc(byId(e.home).name)}</span>` : ""}<span class="es-open">Read essay</span></summary>
    <div class="es-body">${mdToHtml(e.body)}</div>
  </details>`).join("");
}

function renderLeader(id) {
  const l = byId(id);
  if (!l) { location.hash = "#/index"; return; }
  const st = $("#stage"), keep = st.dataset.leader === id ? st.scrollTop : null;
  st.dataset.leader = id;
  currentDetailId = id;
  const era = ERA_BY_KEY[l.era] || { label: l.era, color: "var(--muted)" };
  const body = $("#leader-body");
  const o = getOutcome(l);
  const temp = getTemperament(l), sty = getStyles(l), pb = getPowerBase(l), cv = convergenceOf(l);
  const wUrl = "https://en.wikipedia.org/wiki/" + encodeURIComponent(wikiTitle(l));
  const tagsHtml = (l.tags || []).map(k => {
    const t = TRAIT_BY_KEY[k];
    return `<button class="d-tag" data-tag="${k}" title="${t ? esc(t.section) : ""} — show every leader with this concept">${t ? esc(t.name) : k}</button>`;
  }).join("");

  const nav = [];
  const sec = (sid, label, title, sub, inner) => {
    if (!inner) return "";
    nav.push({ sid, label });
    return `<section class="lp-sec" id="${sid}"><h3 class="lp-h">${title}${sub ? ` <small>${sub}</small>` : ""}</h3>${inner}</section>`;
  };
  const bio = getBio(l);
  const overview = (bio ? `<p class="lp-lede">${esc(bio)}</p>` : `<p class="gap-note">No biography yet — add one with ✎ Edit.</p>`) +
    `<div class="lp-trio"><div><h5>How they led</h5><p>${esc(l.style) || "—"}</p></div><div><h5>Organisation</h5><p>${esc(l.structure) || "—"}</p></div><div><h5>Delegation</h5><p>${esc(l.delegation) || "—"}</p></div></div>` +
    (tagsHtml ? `<div class="lp-tags">${tagsHtml}</div>` : "");
  const notes = `<div class="d-notes"><textarea id="note-box" placeholder="Books read, page references, your own read on this leader&hellip;"></textarea><div class="save-state" id="note-state">Saved locally in this browser</div></div>`;

  const main =
    sec("sec-portrait", "Portrait", "Portrait", "", overview) +
    sec("sec-essays", "Essays", "Essays", `${essaysFor(l.id).length} long-form`, essaysHtml(l)) +
    sec("sec-convergence", "Convergence", "Convergence", "do the five frameworks agree?", convergenceHtml(l)) +
    sec("sec-temperament", "Temperament", "Temperament", `Rubenzer facet profile ${temp ? sourceBadge(temp) : ""}`, temperamentHtml(l)) +
    sec("sec-style", "Style", "Leadership style", sty ? `Simonton's five factors <span class="sm-domain ${sty.domain}">${esc(DOMAIN_LABEL[sty.domain])}</span>` : "", stylesHtml(l)) +
    sec("sec-lta", "Trait analysis", "Trait analysis", getLTA(l) ? `Hermann's seven traits <span class="sm-domain ${getLTA(l).domain === "core" ? "core" : getLTA(l).domain === "extended" ? "extended" : ""}">${esc(LTA_DOMAIN[getLTA(l).domain])}</span>` : "", ltaHtml(l)) +
    sec("sec-time", "Political time", "Political time", getTime(l) ? `Skowronek <span class="sm-domain ${getTime(l).domain === "core" ? "core" : getTime(l).domain === "extended" ? "extended" : ""}">${esc(TIME_DOMAIN[getTime(l).domain])}</span>` : "", timeHtml(l)) +
    sec("sec-power", "Power base", "Power base", "selectorate analysis", powerBaseHtml(l)) +
    sec("sec-olson", "Bandit & horizon", "Bandit &amp; horizon", "Olson — how they taxed, and how long they expected to", olsonHtml(l)) +
    sec("sec-autocracy", "Autocratic survival", "Autocratic survival", "Svolik — power-sharing and control", autocracyHtml(l)) +
    sec("sec-instruments", "Carrots & sticks", "Carrots &amp; sticks", "the instruments they reached for", instrumentsHtml(l)) +
    sec("sec-people", "People", "Key subordinates &amp; collaborators", "", collabsHtml(l)) +
    sec("sec-orgs", "Organizations", "Organizations &amp; machines", "the apparatus they built, used or fought", orgsHtml(l)) +
    sec("sec-practices", "Practices", "Practices", "the blocking and tackling — what they actually did every day", practicesProfileHtml(l)) +
    sec("sec-rhetoric", "Rhetoric", "Rhetoric &amp; the press", "style, set pieces and press relations", rhetProfileHtml(l)) +
    sec("sec-reading", "Reading", "Reading", `${booksForLeader(l.id).length} linked`, readingHtml(l)) +
    sec("sec-notes", "Notes", "My notes", "", notes);

  // right rail
  const glance = [];
  if (sty) { const d = dominantStyle(sty); glance.push(`<div class="rg-row" data-sec="sec-style"><span class="rg-k">Dominant style</span><span class="rg-v" style="color:${d.color}">${esc(d.name)}</span></div>`); }
  const lta = getLTA(l), tm = getTime(l), au = getAutocracy(l), fate = getFate(l);
  if (lta) glance.push(`<div class="rg-row" data-sec="sec-lta"><span class="rg-k">Hermann style</span><span class="rg-v" style="color:${lta.style.color}">${esc(lta.style.name)}</span></div>`);
  if (tm) glance.push(`<div class="rg-row" data-sec="sec-time"><span class="rg-k">Political time</span><span class="rg-v" style="color:${TIME_TYPE_BY_KEY[tm.t].color}">${esc(TIME_TYPE_BY_KEY[tm.t].name)}</span></div>`);
  const ol = getOlson(l);
  if (ol) glance.push(`<div class="rg-row" data-sec="sec-olson"><span class="rg-k">Bandit</span><span class="rg-v" style="color:${OLSON_TYPE_BY_KEY[ol.type].color}">${esc(OLSON_TYPE_BY_KEY[ol.type].name)}</span></div>`);
  if (au) glance.push(`<div class="rg-row" data-sec="sec-autocracy"><span class="rg-k">Autocracy</span><span class="rg-v">${au.sharing === "contested" ? "Contested" : "Established"}</span></div>`);
  if (temp) glance.push(`<div class="rg-row" data-sec="sec-temperament"><span class="rg-k">Temperament</span><span class="rg-v">${Math.round(composite(temp))}<span style="color:var(--muted);font-weight:400"> / 100</span></span></div>`);
  if (cv && cv.score != null) glance.push(`<div class="rg-row" data-sec="sec-convergence"><span class="rg-k">Convergence</span><span class="rg-v cv-num ${scoreClass(cv.score)}">${cv.score}</span></div>`);
  if (pb) glance.push(`<div class="rg-row" data-sec="sec-power"><span class="rg-k">Coalition</span><span class="rg-v">W ≈ ${esc(W_SCALE[pb.w_scale] || "?")}</span></div>`);
  glance.push(`<div class="rg-row" data-sec="sec-reading"><span class="rg-k">Books</span><span class="rg-v">${booksForLeader(l.id).length}</span></div>`);
  const cons = contemporaries(l, 8), sims = mostSimilar(l, 5), ins = insightsFor(l.id);
  const rail = `
    <div class="rail-card"><h4>Vitals</h4><dl>
      <dt>Era</dt><dd>${esc(era.label)}</dd><dt>Tenure</dt><dd>${esc(l.years) || "—"}</dd>
      <dt>Country</dt><dd>${esc(l.country) || "—"}</dd><dt>Office</dt><dd>${esc(l.title) || "—"}</dd>
    </dl></div>
    <div class="rail-card"><h4>Entry &amp; exit</h4><dl>
      <dt>Came to power</dt><dd>${fate ? esc(ENTRY_SHORT[fate.entry]) : "—"}</dd>
      <dt>How it ended</dt><dd>${o.exit ? esc(EXITS[o.exit]) : "—"}</dd>
      <dt>Succession</dt><dd>${o.succession && o.succession !== "na" ? esc(SUCCESSIONS[o.succession]) : "—"}</dd>
      <dt>Afterwards</dt><dd class="fate-${fate ? window.FATES[fate.fate].tone : ""}">${fate ? esc(window.FATES[fate.fate].name) : "—"}</dd>
    </dl>${fate && fate.note ? `<p class="rail-note">${esc(fate.note)}</p>` : ""}</div>
    <div class="rail-card"><h4>At a glance</h4><div class="rail-glance">${glance.join("")}</div></div>
    ${cons.length ? `<div class="rail-card"><h4>Contemporaries</h4><div class="rail-list">${cons.map(x => `<div class="rl-row" data-id="${x.l.id}">${avatarMarkup(x.l)}<b>${esc(shortName(x.l))}</b><span class="m">${esc(x.l.country)}</span></div>`).join("")}</div></div>` : ""}
    ${sims.length ? `<div class="rail-card"><h4>Most similar <span style="text-transform:none;letter-spacing:0;font-weight:400">· shared concepts</span></h4><div class="similar-list">${sims.map(s => `<div class="similar-row" data-id="${s.l.id}">${avatarMarkup(s.l)}<span class="sname">${esc(shortName(s.l))}</span><span class="sscore" title="${sharedTags(l, s.l).length} shared concepts">${Math.round(s.s * 100)}%</span></div>`).join("")}</div></div>` : ""}
    ${ins.length ? `<div class="rail-card"><h4>Insights drawing on this leader</h4><div class="d-insights-list">${ins.map(i => `<a data-ins="${i.id}">${esc(i.title || "(untitled)")}</a>`).join("")}</div></div>` : ""}`;

  body.innerHTML = `
    <button class="lp-back" id="lp-back">← Back</button>
    <header class="lp-hero" style="--era-color:${era.color}">
      <div class="lp-portrait" id="lp-portrait">${initials(l.name)}</div>
      <div class="lp-headtext">
        <div class="lp-kicker"><i></i>${esc(era.label)}${l.president ? " · ★ President" : ""}</div>
        <h1 class="lp-name">${esc(l.name)}</h1>
        <div class="lp-sub">${esc(l.title)}${l.country ? " · " + esc(l.country) : ""} · ${esc(l.years)}</div>
        ${outcomeChips(l)}
        <div class="lp-actions">
          <button id="d-edit">✎ Edit</button><button id="d-compare">⇄ Compare</button><button id="d-insight">＋ Insight</button>
          <a href="${wUrl}" target="_blank" rel="noopener"><button>↗ Wikipedia</button></a>
        </div>
      </div>
    </header>
    <nav class="lp-secnav" id="lp-secnav">${nav.map(n => `<button data-sec="${n.sid}">${n.label}</button>`).join("")}</nav>
    <div class="lp-grid"><div class="lp-main">${main}</div><aside class="lp-rail">${rail}</aside></div>`;

  const scrollTo = sid => { const el = document.getElementById(sid); if (el) el.scrollIntoView({ behavior: "smooth", block: "start" }); };
  $("#lp-back").onclick = () => { if (history.length > 1) history.back(); else switchView("index"); };
  body.querySelectorAll("[data-sec]").forEach(b => b.onclick = () => scrollTo(b.dataset.sec));
  body.querySelectorAll(".d-tag").forEach(btn => btn.onclick = () => filterByTags([btn.dataset.tag]));
  body.querySelectorAll(".collab-link, .similar-row, .rl-row").forEach(a => a.onclick = () => openDetail(a.dataset.id));
  body.querySelectorAll("[data-org]").forEach(a => a.onclick = () => openOrg(a.dataset.org));
  body.querySelectorAll("[data-pcase]").forEach(a => a.onclick = () => openPatCase(a.dataset.pcase));
  body.querySelectorAll("[data-prac]").forEach(a => a.onclick = () => openPractices(a.dataset.prac, a.dataset.pid));
  body.querySelectorAll("[data-rhopen]").forEach(a => a.onclick = () => switchView("rhetoric"));
  body.querySelectorAll(".d-insights-list a").forEach(a => a.onclick = () => openInsightEditor(a.dataset.ins));
  body.querySelectorAll(".read-row").forEach(r => r.onclick = ev => {
    if (ev.target.dataset.shelfId) { ev.stopPropagation(); cycleShelf(ev.target.dataset.shelfId); renderLeader(id); return; }
    openBookEditor(r.dataset.book);
  });
  if ($("#d-addbook")) $("#d-addbook").onclick = () => openBookEditor(null, l.id);
  if ($("#d-styles-open")) $("#d-styles-open").onclick = () => { state.temperament.mode = "styles"; state.temperament.styleFocus = null; switchView("temperament"); };
  if ($("#d-temp-open")) $("#d-temp-open").onclick = () => { state.temperament.mode = "profile"; state.temperament.a = l.id; state.temperament.b = null; switchView("temperament"); };
  if ($("#d-conv-open")) $("#d-conv-open").onclick = () => { state.conv.sig = "all"; switchView("convergence"); };
  if ($("#d-lta-open")) $("#d-lta-open").onclick = () => { state.temperament.mode = "lta"; state.temperament.ltaSort = "style"; switchView("temperament"); };
  if ($("#d-time-open")) $("#d-time-open").onclick = () => { state.time.domain = getTime(l).domain; switchView("time"); };
  if ($("#d-sv-open")) $("#d-sv-open").onclick = () => { state.surv.tab = "svolik"; switchView("survival"); };
  if ($("#d-bdm-open")) $("#d-bdm-open").onclick = () => { state.surv.tab = "bdm"; switchView("survival"); };
  if ($("#d-ol-open")) $("#d-ol-open").onclick = () => { state.surv.tab = "olson"; switchView("survival"); };
  body.querySelectorAll(".pb-book").forEach(a => a.onclick = () => { if (bookById(a.dataset.book)) openBookEditor(a.dataset.book); });
  body.querySelectorAll(".cs-tool").forEach(b => b.onclick = () => { state.instruments.reg = "all"; state.instruments.focus = b.dataset.inst; switchView("instruments"); });
  $("#d-edit").onclick = () => openForm(l);
  $("#d-compare").onclick = () => { state.compare.a = l.id; if (state.compare.b === l.id) state.compare.b = null; switchView("compare"); };
  $("#d-insight").onclick = () => openInsightEditor(null, l.id);

  const nkey = "atlas-note-" + l.id, box = $("#note-box");
  box.value = localStorage.getItem(nkey) || "";
  let t;
  box.addEventListener("input", () => {
    clearTimeout(t); $("#note-state").textContent = "Saving…";
    t = setTimeout(() => { localStorage.setItem(nkey, box.value); $("#note-state").textContent = "Saved locally in this browser"; }, 400);
  });

  if (keep != null) st.scrollTop = keep;
  leaderSpy();
  hydrateAvatars(body);
  fetchPortrait(l).then(url => {
    if (currentDetailId !== id || !url) return;
    const p = $("#lp-portrait");
    if (p) p.innerHTML = `<img src="${url}" alt="${esc(l.name)}" onerror="this.parentElement.textContent='${initials(l.name)}'">`;
  });
}
// highlight the section currently under the sticky section nav
let spyQueued = false;
function leaderSpy() {
  const isOrg = state.view === "org";
  const nav = isOrg ? $("#org-secnav") : $("#lp-secnav");
  if (!nav || (state.view !== "leader" && !isOrg)) return;
  const root = isOrg ? "#org-body" : "#leader-body";
  const top = $("#stage").getBoundingClientRect().top;
  let cur = null;
  document.querySelectorAll(root + " .lp-sec").forEach(s => { if (s.getBoundingClientRect().top - top <= 110) cur = s.id; });
  if (!cur) { const f = document.querySelector(root + " .lp-sec"); cur = f && f.id; }
  nav.querySelectorAll("button").forEach(b => b.classList.toggle("on", b.dataset.sec === cur));
}

/* ================================================================
   HERMANN · SKOWRONEK · SVOLIK · ARCHIGOS
   four further lenses: trait analysis, political time,
   autocratic survival, and entry / exit / fate
   ================================================================ */

const LTA_KEYS = ["bace", "pwr", "cc", "sc", "ta", "dis", "igb"];
const LTA_TRAIT_BY_KEY = Object.fromEntries((window.LTA_TRAITS || []).map(t => [t.key, t]));
const LTA_DOMAIN = { core: "modern — spoken record", adapted: "letters & recorded speech", extended: "analogy only" };
const TIME_TYPE_BY_KEY = Object.fromEntries((window.TIME_TYPES || []).map(t => [t.key, t]));
const TIME_DOMAIN = { core: "U.S. president", adapted: "modern executive", extended: "dynastic analogy" };
const ENTRY_SHORT = { regular: "By the rules", irregular: "Irregularly — coup, revolt, conquest", foreign: "Installed by a foreign power" };

function getTime(l) { return (l && l.time) || (window.LEADER_TIME && window.LEADER_TIME[l.id]) || null; }
function getAutocracy(l) { return (l && l.autocracy) || (window.LEADER_AUTOCRACY && window.LEADER_AUTOCRACY[l.id]) || null; }
function getFate(l) { return (l && l.fate) || (window.LEADER_FATE && window.LEADER_FATE[l.id]) || null; }
// Hermann: the three questions, and the style their answers pick out
function getLTA(l) {
  const r = (l && l.lta) || (window.LEADER_LTA && window.LEADER_LTA[l.id]);
  if (!r) return null;
  const t = Object.fromEntries(LTA_KEYS.map((k, i) => [k, r.t[i]]));
  const c = (t.bace + t.pwr) / 2 > 50 ? "challenges" : "respects";
  const o = t.cc >= t.sc ? "open" : "closed";
  const m = t.ta >= 50 ? "problem" : "relationship";
  const style = (window.LTA_STYLES || []).find(s => s.c === c && s.o === o && s.m === m);
  return { domain: r.domain, note: r.note, t, c, o, m, style };
}
function ltaBars(r) {
  return `<span class="sm-bars">` + LTA_KEYS.map(k => `<span class="sm-bar" title="${esc(LTA_TRAIT_BY_KEY[k].short)}: ${r.t[k]}"><i style="height:${Math.max(r.t[k], 3)}%;background:${r.style.color}"></i></span>`).join("") + `</span>`;
}
// a compact label that still identifies the person: "Henry VIII", "Peter", "Bismarck"
const TAG_NAMES = { fdr: "FDR", troosevelt: "T. Roosevelt", jfk: "JFK", lbj: "LBJ", ghwbush: "Bush 41", gwbush: "Bush 43",
  hannibal: "Hannibal", harun: "Harun", degaulle: "de Gaulle", lula: "Lula", leekuanyew: "Lee Kuan Yew", mandela: "Mandela", meiji: "Meiji" };
function tagName(l) {
  if (TAG_NAMES[l.id]) return TAG_NAMES[l.id];
  const n = shortName(l);
  if (n.length <= 13) return n;
  if (/ of /.test(n)) return n.split(" of ")[0];
  if (/ the /.test(n)) return n.split(" the ")[0];
  const w = n.split(" ");
  if (NUMERAL.test(w[w.length - 1])) return w[0] + " " + w[w.length - 1];
  return w[w.length - 1];
}
function badFate(f) { return !!f && ["killed", "exile", "prison"].includes(f.fate); }

// shared hover tip (also used by the Chronicle)
function tipEl() {
  let tip = $("#ch-tip");
  if (!tip) { tip = document.createElement("div"); tip.id = "ch-tip"; tip.hidden = true; document.body.appendChild(tip); }
  return tip;
}
function moveTip(ev) { const tip = tipEl(); tip.style.left = Math.min(ev.clientX + 14, window.innerWidth - 300) + "px"; tip.style.top = (ev.clientY + 14) + "px"; }

/* ---------------- profile blocks ---------------- */

function ltaHtml(l) {
  const r = getLTA(l);
  if (!r) return "";
  const s = r.style;
  const bars = LTA_KEYS.map(k => {
    const tr = LTA_TRAIT_BY_KEY[k], v = r.t[k];
    return `<div class="sm-row" title="${esc(tr.name)} — high: ${esc(tr.high)} · low: ${esc(tr.low)}"><span class="sm-name">${esc(tr.short)}</span>
      <span class="sm-track lta-track"><span class="sm-fill" style="width:${v}%;background:${v > 50 ? s.color : "var(--line-strong)"}"></span><span class="lta-mid"></span></span><span class="sm-val">${v}</span></div>`;
  }).join("");
  const qs = [
    ["Constraints", r.c === "challenges" ? "Challenges them" : "Respects them", `control ${r.t.bace} · power ${r.t.pwr}`],
    ["Information", r.o === "open" ? "Open to it" : "Closed to it", `complexity ${r.t.cc} vs confidence ${r.t.sc}`],
    ["Motivation", r.m === "problem" ? "The problem" : "Relationships", `task focus ${r.t.ta}`]
  ];
  return `<div class="d-styles lta-panel" style="--c:${s.color}">
    <div class="lta-head"><span class="lta-style">${esc(s.name)}</span><span class="lta-def">${esc(s.def)}</span></div>
    <div class="lta-qs">${qs.map(([k, v, why]) => `<div class="lta-q"><span class="k">${k}</span><b>${v}</b><span class="why">${why}</span></div>`).join("")}</div>
    <div class="sm-list">${bars}</div>
    <div class="rz-note">${esc(r.note)}</div>
    <div class="d-actions" style="margin-top:10px"><button id="d-lta-open">↗ Open in Temperament</button></div>
  </div>`;
}

function timeHtml(l) {
  const r = getTime(l);
  if (!r) {
    const why = (window.TIME_NA || {})[l.id];
    return why ? `<div class="rz-none"><b>Outside the framework.</b> ${esc(why)}</div>` : "";
  }
  const ty = TIME_TYPE_BY_KEY[r.t];
  return `<div class="d-styles pt-panel" style="--c:${ty.color}">
    <div class="pt-head"><span class="pt-badge">${esc(ty.name)}</span><span class="pt-posture">${esc(ty.posture)}</span></div>
    <div class="pt-order"><span class="k">The order</span>${esc(r.order)}</div>
    <p class="pt-note">${esc(r.note)}</p>
    ${r.contested ? `<div class="rz-contested"><b>Contested</b> — ${esc(r.contested)}</div>` : ""}
    <div class="pt-rows">
      <div><span class="k">Authority available</span>${esc(ty.authority)}</div>
      <div><span class="k">Characteristic failure</span>${esc(ty.failure)}</div>
      <div><span class="k">Ask</span><i>${esc(ty.q)}</i></div>
    </div>
    <div class="d-actions" style="margin-top:10px"><button id="d-time-open">↗ Open in Political Time</button></div>
  </div>`;
}

function autocracyHtml(l) {
  const r = getAutocracy(l);
  if (!r) return "";
  const sh = window.SVOLIK_SHARING[r.sharing], ar = window.SVOLIK_ARMY[r.army];
  const meter = (label, v, c) => `<div class="sm-row"><span class="sm-name">${label}</span><span class="sm-track"><span class="sm-fill" style="width:${v}%;background:${c}"></span></span><span class="sm-val">${v}</span></div>`;
  return `<div class="d-styles sv-panel">
    <div class="sv-top"><span class="sv-badge ${r.sharing}">${esc(sh.name)}</span>${r.path ? `<span class="sv-path">${esc(r.path)}</span>` : ""}<span class="sv-end ${r.end}">${esc(window.SVOLIK_ENDS[r.end])}</span></div>
    <p class="pt-note">${esc(r.note)}</p>
    <div class="sm-list">${meter("Repression", r.rep, "var(--reg-fear)")}${meter("Co-optation", r.coopt, "var(--reg-loyalty)")}</div>
    <div class="pt-rows">
      <div><span class="k">Power shared through</span>${esc(r.council)}</div>
      <div><span class="k">The armed agent</span><b>${esc(ar.name)}.</b> ${esc(ar.def)}</div>
      <div><span class="k">${esc(sh.name)}</span>${esc(sh.def)}</div>
    </div>
    <div class="pb-src">Framework: Milan Svolik, <i>The Politics of Authoritarian Rule</i> (2012). Scores are my estimates in his framework.</div>
    <div class="d-actions" style="margin-top:10px"><button id="d-sv-open">↗ Open in Survival</button></div>
  </div>`;
}

/* ================================================================
   POLITICAL TIME — Skowronek's four positions
   ================================================================ */

function renderTime() {
  const S = state.time;
  const all = window.ALL_LEADERS.map(l => ({ l, r: getTime(l) })).filter(e => e.r);
  const list = all.filter(e => S.domain === "all" || e.r.domain === S.domain).sort((a, b) => startYear(a.l) - startYear(b.l));
  const pill = (k, label, n) => `<button class="chip ${S.domain === k ? "on" : ""}" data-dom="${k}">${label} <span style="opacity:.6">${n}</span></button>`;
  $("#time-toolbar").innerHTML = `<div class="cv-pills"><span class="lab">Show</span>
    ${pill("all", "Everyone", all.length)}${pill("core", "U.S. presidents", all.filter(e => e.r.domain === "core").length)}
    ${pill("adapted", "Modern executives", all.filter(e => e.r.domain === "adapted").length)}${pill("extended", "Pre-modern (dynastic analogy)", all.filter(e => e.r.domain === "extended").length)}</div>`;
  $("#time-toolbar").querySelectorAll("[data-dom]").forEach(b => b.onclick = () => { S.domain = b.dataset.dom; renderTime(); });

  const chip = e => `<span class="pt-chip" data-id="${e.l.id}" title="${esc(e.r.order)}${e.r.contested ? " · contested" : ""}">${esc(shortName(e.l))}${e.r.contested ? "<sup>?</sup>" : ""}</span>`;
  const cell = key => {
    const ty = TIME_TYPE_BY_KEY[key], mem = list.filter(e => e.r.t === key);
    return `<div class="pt-cell" style="--c:${ty.color}">
      <div class="pt-cell-h"><b>${esc(ty.name)}</b><span>${mem.length}</span></div>
      <div class="pt-cell-def">${esc(ty.def)}</div>
      <div class="pt-cell-fail"><span class="k">Characteristic failure</span>${esc(ty.failure)}</div>
      <div class="pt-chips">${mem.map(chip).join("") || `<span class="gap-note">none in this selection</span>`}</div>
    </div>`;
  };

  // the U.S. cycle — each order should open with a reconstruction and close with a disjunction
  const pres = all.filter(e => e.r.domain === "core").sort((a, b) => startYear(a.l) - startYear(b.l));
  const cycle = (S.domain === "all" || S.domain === "core") ? `
    <div class="reg-head"><h3>The American cycle</h3><span class="reg-sub">each governing order, in the presidents this atlas holds</span></div>
    <div class="cmp-summary">Skowronek's pattern: an order opens with a reconstruction, runs through articulators and preempters, and closes with a disjunction that sets up the next reconstruction. Presidents not in the index (Madison, Polk, Buchanan…) are simply missing from the strip — the gaps are the atlas's, not history's.</div>
    <div class="pt-cycle">${[{ name: "Founding", from: 1789, to: 1800 }].concat(window.TIME_ORDERS_US || []).map(o => {
      const mem = pres.filter(e => { const y = startYear(e.l); return y >= o.from && y <= o.to; });
      return `<div class="pt-order-row"><div class="pt-order-name"><b>${esc(o.name)}</b><span>${o.from}–${o.to > NOW_YEAR ? "" : o.to}</span></div>
        <div class="pt-seq">${mem.map(e => { const ty = TIME_TYPE_BY_KEY[e.r.t]; return `<span class="pt-step" data-id="${e.l.id}" style="--c:${ty.color}" title="${esc(ty.name)}${e.r.contested ? " (contested)" : ""}"><b>${esc(shortName(e.l))}</b><i>${esc(ty.name)}</i></span>`; }).join("")}</div></div>`;
    }).join("")}</div>` : "";

  // does position predict fate better than talent? — computed from the other lenses
  const rows = (window.TIME_TYPES || []).map(ty => {
    const mem = list.filter(e => e.r.t === ty.key);
    const comps = mem.map(e => getTemperament(e.l)).filter(Boolean).map(composite);
    const known = mem.filter(e => ["orderly", "crisis"].includes(getOutcome(e.l).succession));
    const crisis = known.filter(e => getOutcome(e.l).succession === "crisis").length;
    const fates = mem.map(e => getFate(e.l)).filter(f => f && f.fate !== "incumbent");
    const bad = fates.filter(badFate).length;
    const styles = {};
    mem.forEach(e => { const s = getStyles(e.l); if (s) { const d = dominantStyle(s); styles[d.name] = (styles[d.name] || 0) + 1; } });
    const topStyle = Object.entries(styles).sort((a, b) => b[1] - a[1])[0];
    return { ty, n: mem.length, comp: comps.length ? Math.round(comps.reduce((a, b) => a + b, 0) / comps.length) : null, nc: comps.length,
      rate: known.length ? crisis / known.length : null, crisis, kn: known.length, bad, nf: fates.length, topStyle };
  });
  const pct = v => v == null ? "—" : Math.round(v * 100) + "%";

  $("#time-body").innerHTML = `
    <div class="pt-grid">
      <div></div><div class="pt-ax">The order is <b>resilient</b></div><div class="pt-ax">The order is <b>vulnerable</b></div>
      <div class="pt-ax side">Leader is <b>opposed</b></div>${cell("preempt")}${cell("reconstruct")}
      <div class="pt-ax side">Leader is <b>affiliated</b></div>${cell("articulate")}${cell("disjunct")}
    </div>
    <p class="ch-note" style="margin-top:8px"><sup>?</sup> marks a contested placement — open the profile for the argument. Readings outside U.S. presidents are my extension of Skowronek's scheme; for pre-modern rulers the "order" is a dynasty or imperial settlement.</p>
    ${cycle}
    <div class="reg-head"><h3>Position against the other lenses</h3><span class="reg-sub">computed from temperament, outcomes and fate for the leaders shown</span></div>
    <div class="cmp-summary">Skowronek's claim is that position, not talent, decides what a leader can achieve — Hoover and Carter were among the ablest men to hold the office. If that is right, the temperament column should not track the outcome columns. Small samples; read as a prompt.</div>
    <table class="xtab"><thead><tr><th>Position</th><th>Leaders</th><th>Mean temperament composite</th><th>Succession crisis rate</th><th>Ended killed, exiled or imprisoned</th><th>Most common Simonton style</th></tr></thead><tbody>
      ${rows.map(r => `<tr><td style="color:${r.ty.color};font-weight:600">${esc(r.ty.name)}</td><td class="num">${r.n}</td>
        <td class="num">${r.comp == null ? "—" : r.comp} <span class="lowN">(${r.nc} scored)</span></td>
        <td>${r.rate == null ? "—" : `<span class="bar ${r.rate <= 0.29 ? "good" : ""}" style="width:${Math.round(r.rate * 100)}px"></span>${pct(r.rate)} <span class="lowN">(${r.crisis}/${r.kn})</span>`}</td>
        <td class="num">${r.nf ? pct(r.bad / r.nf) : "—"} <span class="lowN">(${r.bad}/${r.nf})</span></td>
        <td style="color:var(--muted)">${r.topStyle ? `${esc(r.topStyle[0])} (${r.topStyle[1]})` : "—"}</td></tr>`).join("")}
    </tbody></table>`;
  $("#time-body").querySelectorAll("[data-id]").forEach(el => el.onclick = () => openDetail(el.dataset.id));
}

/* ================================================================
   SURVIVAL — Svolik on autocracy; Archigos & Goemans on fate
   ================================================================ */

function renderSurvival() {
  const auto = window.ALL_LEADERS.map(l => ({ l, r: getAutocracy(l) })).filter(e => e.r).sort((a, b) => startYear(a.l) - startYear(b.l));
  const chip = e => `<span class="pt-chip" data-id="${e.l.id}" style="--c:${eraColor(e.l)}">${esc(shortName(e.l))}</span>`;
  const pct = (a, b) => b ? Math.round(100 * a / b) + "%" : "—";

  // 1 — power-sharing
  const sharing = ["contested", "established"].map(k => {
    const d = window.SVOLIK_SHARING[k], mem = auto.filter(e => e.r.sharing === k);
    const moved = mem.filter(e => e.r.path);
    return `<div class="pt-cell" style="--c:${k === "contested" ? "var(--reg-loyalty)" : "var(--reg-fear)"}">
      <div class="pt-cell-h"><b>${esc(d.name)}</b><span>${mem.length}</span></div>
      <div class="pt-cell-def">${esc(d.def)}</div>
      <div class="pt-chips">${mem.map(e => `<span class="pt-chip" data-id="${e.l.id}" title="${esc(e.r.path || "")}">${esc(shortName(e.l))}${e.r.path ? " ↗" : ""}</span>`).join("")}</div>
      ${moved.length ? `<div class="ch-note" style="margin-top:8px">↗ ${moved.length} made the move from contested to established during their reign — the transition Svolik identifies as the most dangerous moment of any dictatorship.</div>` : ""}
    </div>`;
  }).join("");

  // 2 — repression against co-optation
  const W = 640, H = 430, M = { l: 52, r: 18, t: 18, b: 48 };
  const x = v => M.l + (W - M.l - M.r) * v / 100, y = v => H - M.b - (H - M.t - M.b) * v / 100;
  let pts = "", labels = "";
  const placed = [];
  auto.slice().sort((a, b) => (b.r.rep + b.r.coopt) - (a.r.rep + a.r.coopt)).forEach(e => {
    const cx = x(e.r.coopt), cy = y(e.r.rep);
    pts += `<circle class="sv-pt" data-id="${e.l.id}" cx="${cx}" cy="${cy}" r="5.5" fill="${eraColor(e.l)}"/>`;
    const name = tagName(e.l), w = name.length * 5.6 + 4, box = [cx + 7, cy - 6, cx + 7 + w, cy + 5];
    if (box[2] < W - 4 && !placed.some(p => !(box[2] < p[0] || box[0] > p[2] || box[3] < p[1] || box[1] > p[3]))) {
      placed.push(box); labels += `<text class="sv-lab" x="${box[0]}" y="${cy + 3.5}">${esc(name)}</text>`;
    }
  });
  const axis = [0, 25, 50, 75, 100].map(v => `<line class="rz-grid" x1="${x(v)}" y1="${M.t}" x2="${x(v)}" y2="${H - M.b}"/><line class="rz-grid" x1="${M.l}" y1="${y(v)}" x2="${W - M.r}" y2="${y(v)}"/>
    <text class="rz-ytick" x="${M.l - 8}" y="${y(v) + 4}">${v}</text><text class="rz-ytick" style="text-anchor:middle" x="${x(v)}" y="${H - M.b + 16}">${v}</text>`).join("");
  const quad = (tx, ty, t, anchor) => `<text class="sv-quad" x="${tx}" y="${ty}" style="text-anchor:${anchor}">${t}</text>`;
  const scatter = `<svg class="sv-scatter" viewBox="0 0 ${W} ${H}" width="100%">${axis}
    <line class="rz-axis" x1="${x(50)}" y1="${M.t}" x2="${x(50)}" y2="${H - M.b}" stroke-dasharray="4 4"/><line class="rz-axis" x1="${M.l}" y1="${y(50)}" x2="${W - M.r}" y2="${y(50)}" stroke-dasharray="4 4"/>
    ${quad(M.l + 8, M.t + 14, "RULE BY FEAR", "start")}${quad(W - M.r - 8, M.t + 14, "FEAR AND PURCHASE", "end")}
    ${quad(M.l + 8, H - M.b - 8, "NEITHER — LEGITIMACY OR WEAKNESS", "start")}${quad(W - M.r - 8, H - M.b - 8, "RULE BY PURCHASE", "end")}
    <text class="rz-ylabel" x="${(M.l + W - M.r) / 2}" y="${H - 8}">Reliance on co-optation →</text>
    <text class="rz-ylabel" transform="translate(14,${(M.t + H - M.b) / 2}) rotate(-90)">Reliance on repression →</text>
    ${pts}${labels}</svg>`;

  // 3 — the armed agent
  const armies = Object.entries(window.SVOLIK_ARMY).map(([k, d]) => {
    const mem = auto.filter(e => e.r.army === k);
    const ins = mem.filter(e => e.r.end === "insider").length;
    return `<tr><td><b>${esc(d.name)}</b><div class="lowN" style="font-style:normal;max-width:360px">${esc(d.def)}</div></td><td class="num">${mem.length}</td><td class="num">${pct(ins, mem.length)} <span class="lowN">(${ins})</span></td><td><div class="pt-chips">${mem.map(chip).join("")}</div></td></tr>`;
  }).join("");

  // 4 — how autocrats fell
  const ends = Object.entries(window.SVOLIK_ENDS).map(([k, label]) => ({ k, label, mem: auto.filter(e => e.r.end === k) })).filter(x => x.mem.length);
  const removed = auto.filter(e => ["insider", "popular", "foreign"].includes(e.r.end));
  const maxN = Math.max(...ends.map(x => x.mem.length));

  // 5 — entry, exit & fate for every leader
  const everyone = window.ALL_LEADERS.map(l => ({ l, f: getFate(l) })).filter(e => e.f);
  const done = everyone.filter(e => e.f.fate !== "incumbent");
  const fateCount = Object.keys(window.FATES).map(k => ({ k, n: everyone.filter(e => e.f.fate === k).length }));
  const byEntry = Object.keys(window.ENTRIES).map(k => { const g = done.filter(e => e.f.entry === k); return { k, n: g.length, bad: g.filter(e => badFate(e.f)).length }; });
  const isAuto = e => !!getAutocracy(e.l);
  const regimeRows = [["Autocrats (Svolik-scored)", done.filter(isAuto)], ["Everyone else", done.filter(e => !isAuto(e))]].map(([label, g]) => ({ label, n: g.length, bad: g.filter(e => badFate(e.f)).length, exPr: g.filter(e => ["exile", "prison"].includes(e.f.fate)).length }));
  const fearOf = l => { const r = getInstruments(l), t = (r && r.tools) || []; return t.length >= 2 ? t.filter(x => x.reg === "fear").length / t.length : null; };
  const withTools = done.filter(e => fearOf(e.l) != null);
  const fearRows = [["Fear is 40%+ of their instruments", withTools.filter(e => fearOf(e.l) >= 0.4)], ["Fear under 40%", withTools.filter(e => fearOf(e.l) < 0.4)]].map(([label, g]) => ({ label, n: g.length, bad: g.filter(e => badFate(e.f)).length }));
  const punished = done.filter(e => badFate(e.f)).sort((a, b) => startYear(a.l) - startYear(b.l));
  // say what the data actually shows, whichever way it cuts
  const [hiF, loF] = fearRows;
  const hiOffice = withTools.filter(e => fearOf(e.l) >= 0.4 && e.f.fate === "office").length;
  const fearNote = !hiF.n || !loF.n ? "Too few catalogued toolkits to compare."
    : hiF.bad / hiF.n > loF.bad / loF.n
      ? `Leaders with a catalogued toolkit only. The fear-heavy group ends badly more often (${pct(hiF.bad, hiF.n)} against ${pct(loF.bad, loF.n)}) — consistent with Goemans: rulers who govern by fear rarely get a quiet retirement, which is why they cannot afford to lose.`
      : `Leaders with a catalogued toolkit only. Not what Goemans would predict: the fear-heavy group ends badly <em>less</em> often (${pct(hiF.bad, hiF.n)} against ${pct(loF.bad, loF.n)}). The likely reason is that most of them never left — ${hiOffice} of ${hiF.n} died in power. Goemans's punishment falls on those who lose office; the fear-rulers here mostly didn't, and the violent ends in the other group include assassinations in office.`;

  const tabs = [["svolik", "Autocracy — Svolik"], ["bdm", "Selectorate — Bueno de Mesquita"], ["olson", "Bandits — Olson"], ["fate", "Entry, exit & fate"]];
  $("#survival-body").innerHTML = `<div class="seg sv-tabs">${tabs.map(([k, label]) => `<button data-svtab="${k}" class="${state.surv.tab === k ? "on" : ""}">${label}</button>`).join("")}</div>
    <div data-tab="bdm">${bdmSectionHtml()}</div>
    <div data-tab="olson">${olsonSectionHtml()}</div>
    <div data-tab="svolik">
    <div class="reg-head"><h3>Power-sharing</h3><span class="reg-sub">${auto.length} autocrats · can the allies still remove the ruler?</span></div>
    <div class="cmp-summary">A dictator cannot sign a contract with his allies: nothing enforces it. So he promises to share, they promise to stay loyal, and each watches for the moment the other becomes too strong to be bound. Councils, politburos and parties exist, in Svolik's account, so the allies can <em>see</em> what the ruler is doing.</div>
    <div class="sv-duo">${sharing}</div>

    <div class="reg-head"><h3>Controlling everyone else</h3><span class="reg-sub">repression against co-optation — hover or click a point</span></div>
    <div class="cmp-summary">The two tools of control. Repression is cheap but needs armed men who then know how much the ruler needs them; co-optation is expensive but makes large numbers of people want the regime to survive. Colours are eras. Scores are my estimates in Svolik's framework.</div>
    <div class="rz-chartwrap">${scatter}</div>

    <div class="reg-head"><h3>The moral hazard of repression</h3><span class="reg-sub">who holds the guns, and how often the end came from inside</span></div>
    <table class="xtab"><thead><tr><th>The armed agent</th><th>Rulers</th><th>Removed by insiders</th><th>Who</th></tr></thead><tbody>${armies}</tbody></table>

    <div class="reg-head"><h3>How autocrats fell</h3><span class="reg-sub">Svolik: most dictators removed unconstitutionally are removed by insiders</span></div>
    <div class="cmp-summary">Of the ${removed.length} autocrats in this atlas who were removed rather than dying in power or leaving by choice, <strong>${removed.filter(e => e.r.end === "insider").length}</strong> fell to insiders, <strong>${removed.filter(e => e.r.end === "foreign").length}</strong> to foreign force and <strong>${removed.filter(e => e.r.end === "popular").length}</strong> to a popular uprising. Pre-modern monarchs mostly died in office — heredity is itself a power-sharing arrangement — which is why the natural-death row is so long.</div>
    <div class="sv-ends">${ends.map(x => `<div class="sv-end-row"><span class="sv-end-lab">${esc(x.label)}</span><span class="sv-end-bar"><i style="width:${Math.round(100 * x.mem.length / maxN)}%"></i></span><span class="sv-end-n">${x.mem.length}</span><div class="pt-chips">${x.mem.map(chip).join("")}</div></div>`).join("")}</div>

    </div>
    <div data-tab="fate">
    <div class="reg-head"><h3>Entry, exit &amp; fate</h3><span class="reg-sub">every leader in the atlas · after Archigos and Goemans</span></div>
    <div class="cmp-summary">Goemans's argument: leaders who expect to be exiled, imprisoned or killed after losing power fight harder to keep it — including by prolonging wars they are losing. The punishment regime shapes the ruler. "Killed" here includes assassination in office and suicide in defeat, so it is a harder test than Archigos's post-exit fate alone.</div>
    <div class="pat-stats">${fateCount.map(f => `<div class="stat"><div class="v" style="color:${window.FATES[f.k].tone === "bad" ? "var(--bad)" : window.FATES[f.k].tone === "good" ? "var(--good)" : "var(--text)"}">${f.n}</div><div class="k">${esc(window.FATES[f.k].name)}</div></div>`).join("")}</div>
    <div class="sv-duo" style="margin-top:14px">
      <table class="xtab"><thead><tr><th>How they came to power</th><th>Leaders</th><th>Ended killed, exiled or imprisoned</th></tr></thead><tbody>
        ${byEntry.filter(r => r.n).map(r => `<tr><td>${esc(window.ENTRIES[r.k])}</td><td class="num">${r.n}</td><td><span class="bar" style="width:${Math.round(100 * r.bad / r.n)}px"></span>${pct(r.bad, r.n)} <span class="lowN">(${r.bad}/${r.n})</span></td></tr>`).join("")}
        ${regimeRows.map(r => `<tr><td>${esc(r.label)}</td><td class="num">${r.n}</td><td><span class="bar" style="width:${Math.round(100 * r.bad / r.n)}px"></span>${pct(r.bad, r.n)} <span class="lowN">(${r.bad}/${r.n}; exile or prison ${r.exPr})</span></td></tr>`).join("")}
      </tbody></table>
      <table class="xtab"><thead><tr><th>Goemans, tested on the toolkit</th><th>Leaders</th><th>Ended killed, exiled or imprisoned</th></tr></thead><tbody>
        ${fearRows.map(r => `<tr><td>${esc(r.label)}</td><td class="num">${r.n}</td><td><span class="bar" style="width:${Math.round(100 * r.bad / Math.max(r.n, 1))}px"></span>${pct(r.bad, r.n)} <span class="lowN">(${r.bad}/${r.n})</span></td></tr>`).join("")}
        <tr><td colspan="3" class="lowN" style="font-style:normal">${fearNote}</td></tr>
      </tbody></table>
    </div>
    <div class="reg-head"><h3>Those who ended badly</h3><span class="reg-sub">${punished.length} leaders</span></div>
    <div class="sv-fates">${punished.map(e => `<div class="sv-fate" data-id="${e.l.id}">${avatarMarkup(e.l)}<div><b>${esc(e.l.name)}</b> <span class="sv-fate-tag ${e.f.fate}">${esc(window.FATES[e.f.fate].name)}</span><div class="lowN" style="font-style:normal">${esc(e.f.note)}</div></div></div>`).join("")}</div>
    </div>`;

  const body = $("#survival-body");
  body.querySelectorAll("[data-tab]").forEach(t => { t.hidden = t.dataset.tab !== state.surv.tab; });
  body.querySelectorAll("[data-svtab]").forEach(b => b.onclick = () => { state.surv.tab = b.dataset.svtab; renderSurvival(); });
  body.querySelectorAll("[data-id]").forEach(el => el.onclick = () => openDetail(el.dataset.id));
  body.querySelectorAll(".bdm-book").forEach(a => a.onclick = () => openBookEditor(a.dataset.book));
  body.querySelectorAll(".bdm-link").forEach(a => a.onclick = () => { state.traitCat = "machines"; switchView("traits"); });
  const tip = tipEl();
  body.querySelectorAll(".sv-pt").forEach(p => {
    const l = byId(p.dataset.id), inOlson = !!p.closest('[data-tab="olson"]'), inBdm = !!p.closest('[data-tab="bdm"]');
    p.onmouseenter = () => {
      if (inBdm) { const pb = getPowerBase(l); tip.innerHTML = `<b>${esc(l.name)}</b><div class="m">${esc(l.years)} · W ≈ ${fmtCount(pb.sizes.w)} · S ≈ ${fmtCount(pb.sizes.s)} · N ≈ ${fmtCount(pb.sizes.n)}</div><div class="co">loyalty norm ${oneIn(pb.sizes.w, pb.sizes.s)}</div>`; }
      else if (inOlson) { const r = getOlson(l); tip.innerHTML = `<b>${esc(l.name)}</b><div class="m">${esc(l.years)} · ${esc(OLSON_TYPE_BY_KEY[r.type].name)}</div><div class="co">horizon ${r.horizon} · take ${r.take} · public goods ${r.goods}</div>`; }
      else { const r = getAutocracy(l); tip.innerHTML = `<b>${esc(l.name)}</b><div class="m">${esc(l.years)} · ${esc(window.SVOLIK_SHARING[r.sharing].name)}</div><div class="co">repression ${r.rep} · co-optation ${r.coopt}</div>`; }
      tip.hidden = false;
    };
    p.onmousemove = moveTip;
    p.onmouseleave = () => { tip.hidden = true; };
  });
  hydrateAvatars(body);
}

/* ================================================================
   OLSON — roving and stationary bandits, horizons, coalitions
   ================================================================ */

const OLSON_TYPE_BY_KEY = Object.fromEntries((window.OLSON_TYPES || []).map(t => [t.key, t]));
function getOlson(l) { return (l && l.olson) || (window.LEADER_OLSON && window.LEADER_OLSON[l.id]) || null; }
function olsonSign(k) { const s = (window.OLSON_SIGNS || {})[k]; return s ? `<span class="ol-sign ${s.pole}" title="${s.pole === "short" ? "a short-horizon marker" : s.pole === "long" ? "a long-horizon marker" : "an extraction instrument"}">${esc(s.label)}</span>` : ""; }

function olsonHtml(l) {
  const r = getOlson(l);
  if (!r) {
    const why = (window.OLSON_NA || {})[l.id];
    return why ? `<div class="rz-none"><b>Outside the framework.</b> ${esc(why)}</div>` : "";
  }
  const ty = OLSON_TYPE_BY_KEY[r.type], dc = r.dc && window.OLSON_DC[r.dc];
  const meter = (label, v, c) => `<div class="sm-row"><span class="sm-name">${label}</span><span class="sm-track"><span class="sm-fill" style="width:${v}%;background:${c}"></span></span><span class="sm-val">${v}</span></div>`;
  return `<div class="d-styles pt-panel ol-panel" style="--c:${ty.color}">
    <div class="pt-head"><span class="pt-badge">${esc(ty.name)}</span></div>
    <p class="pt-note">${esc(r.note)}</p>
    <div class="sm-list">${meter("Horizon", r.horizon, ty.color)}${meter("Take", r.take, "var(--reg-fear)")}${meter("Public goods", r.goods, "var(--reg-trust)")}</div>
    ${r.signs.length ? `<div class="ol-signs">${r.signs.map(olsonSign).join("")}</div>` : ""}
    <div class="pt-rows">
      <div><span class="k">How they raised money</span>${esc(r.revenue)}</div>
      ${dc ? `<div><span class="k">Interest groups</span><b>${esc(dc.label)}.</b> ${esc(dc.def)}</div>` : ""}
      <div><span class="k">${esc(ty.name)}</span>${esc(ty.def)}</div>
    </div>
    <div class="pb-src">Framework: Mancur Olson, "Dictatorship, Democracy, and Development" (1993); <i>The Rise and Decline of Nations</i> (1982). Scores are my estimates in his framework.</div>
    <div class="d-actions" style="margin-top:10px"><button id="d-ol-open">↗ Open in Survival</button></div>
  </div>`;
}

// a labelled scatter: points {id, x, y, color, label}, axes 0–100
function scatterSvg(points, o) {
  const W = 640, H = 430, M = { l: o.yt ? 96 : 52, r: 18, t: 18, b: 48 };
  const x = v => M.l + (W - M.l - M.r) * v / 100, y = v => H - M.b - (H - M.t - M.b) * v / 100;
  let dots = "", labels = "";
  const placed = [];
  points.forEach(p => {
    const cx = x(p.x), cy = y(p.y);
    dots += `<circle class="sv-pt" data-id="${p.id}" cx="${cx}" cy="${cy}" r="5.5" fill="${p.color}"/>`;
    const w = p.label.length * 5.6 + 4, box = [cx + 7, cy - 6, cx + 7 + w, cy + 5];
    if (box[2] < W - 4 && !placed.some(b => !(box[2] < b[0] || box[0] > b[2] || box[3] < b[1] || box[1] > b[3]))) {
      placed.push(box); labels += `<text class="sv-lab" x="${box[0]}" y="${cy + 3.5}">${esc(p.label)}</text>`;
    }
  });
  const def = [0, 25, 50, 75, 100].map(v => [v, String(v)]);
  const grid = (o.xt || def).map(([v, t]) => `<line class="rz-grid" x1="${x(v)}" y1="${M.t}" x2="${x(v)}" y2="${H - M.b}"/><text class="rz-ytick" style="text-anchor:middle" x="${x(v)}" y="${H - M.b + 16}">${t}</text>`).join("") +
    (o.yt || def).map(([v, t]) => `<line class="rz-grid" x1="${M.l}" y1="${y(v)}" x2="${W - M.r}" y2="${y(v)}"/><text class="rz-ytick" x="${M.l - 8}" y="${y(v) + 4}">${t}</text>`).join("");
  const q = (tx, ty, t, a) => `<text class="sv-quad" x="${tx}" y="${ty}" style="text-anchor:${a}">${t}</text>`;
  return `<svg class="sv-scatter" viewBox="0 0 ${W} ${H}" width="100%">${grid}
    ${q(M.l + 8, M.t + 14, o.q[0], "start")}${q(W - M.r - 8, M.t + 14, o.q[1], "end")}${q(M.l + 8, H - M.b - 8, o.q[2], "start")}${q(W - M.r - 8, H - M.b - 8, o.q[3], "end")}
    <text class="rz-ylabel" x="${(M.l + W - M.r) / 2}" y="${H - 8}">${o.xl} →</text>
    <text class="rz-ylabel" transform="translate(12,${(M.t + H - M.b) / 2}) rotate(-90)">${o.yl} →</text>
    ${dots}${labels}</svg>`;
}

function olsonSectionHtml() {
  const all = window.ALL_LEADERS.map(l => ({ l, r: getOlson(l) })).filter(e => e.r).sort((a, b) => startYear(a.l) - startYear(b.l));
  const chip = e => `<span class="pt-chip" data-id="${e.l.id}">${esc(shortName(e.l))}</span>`;
  const pct = (a, b) => b ? Math.round(100 * a / b) + "%" : "—";
  const mean = arr => arr.length ? Math.round(arr.reduce((a, b) => a + b, 0) / arr.length) : null;
  const types = (window.OLSON_TYPES || []).map(ty => {
    const mem = all.filter(e => e.r.type === ty.key);
    return `<div class="pt-cell" style="--c:${ty.color}"><div class="pt-cell-h"><b>${esc(ty.name)}</b><span>${mem.length}</span></div>
      <div class="pt-cell-def">${esc(ty.def)}</div><div class="pt-chips">${mem.map(chip).join("")}</div></div>`;
  }).join("");

  const rulers = all.filter(e => e.r.type !== "majority");
  const rHG = pearson(rulers.map(e => e.r.horizon), rulers.map(e => e.r.goods));
  const rTG = pearson(rulers.map(e => e.r.take), rulers.map(e => e.r.goods));
  const fmtR = r => r == null ? "—" : (r >= 0 ? "+" : "") + r.toFixed(2);
  const scatter = scatterSvg(all.slice().sort((a, b) => b.r.goods - a.r.goods).map(e => ({ id: e.l.id, x: e.r.horizon, y: e.r.goods, color: OLSON_TYPE_BY_KEY[e.r.type].color, label: tagName(e.l) })),
    { xl: "Horizon", yl: "Public goods supplied", q: ["BUILDERS IN A HURRY", "THE STATIONARY BANDIT'S BARGAIN", "RAIDERS", "SECURE BUT UNINVESTED"] });

  // the observable markers, and whether they really mark a short horizon
  const signRows = Object.entries(window.OLSON_SIGNS).map(([k, s]) => {
    const mem = all.filter(e => e.r.signs.includes(k));
    return { k, s, mem, h: mean(mem.map(e => e.r.horizon)) };
  }).filter(x => x.mem.length);
  const shortSigned = all.filter(e => e.r.signs.some(k => window.OLSON_SIGNS[k].pole === "short"));
  const clean = all.filter(e => !e.r.signs.some(k => window.OLSON_SIGNS[k].pole === "short"));

  // against the outcome data, which was recorded separately
  const tie = (window.OLSON_TYPES || []).map(ty => {
    const mem = all.filter(e => e.r.type === ty.key);
    const kn = mem.filter(e => ["orderly", "crisis"].includes(getOutcome(e.l).succession));
    const cr = kn.filter(e => getOutcome(e.l).succession === "crisis").length;
    const fates = mem.map(e => getFate(e.l)).filter(f => f && f.fate !== "incumbent");
    const auto = mem.map(e => getAutocracy(e.l)).filter(Boolean);
    return { ty, n: mem.length, kn: kn.length, cr, bad: fates.filter(badFate).length, nf: fates.length, rep: mean(auto.map(a => a.rep)), na: auto.length };
  });
  const horizonSplit = (lo, hi) => {
    const g = rulers.filter(e => e.r.horizon >= lo && e.r.horizon < hi);
    const kn = g.filter(e => ["orderly", "crisis"].includes(getOutcome(e.l).succession));
    return { n: g.length, kn: kn.length, cr: kn.filter(e => getOutcome(e.l).succession === "crisis").length };
  };
  const hs = [["Short horizon (under 50)", horizonSplit(0, 50)], ["Middling (50–79)", horizonSplit(50, 80)], ["Long horizon (80+)", horizonSplit(80, 101)]];

  const dcCells = Object.entries(window.OLSON_DC).map(([k, d]) => {
    const mem = all.filter(e => e.r.dc === k);
    return `<div class="pt-cell" style="--c:${k === "fed" ? "var(--reg-fear)" : k === "fought" ? "var(--reg-motivate)" : "var(--reg-trust)"}"><div class="pt-cell-h"><b>${esc(d.label)}</b><span>${mem.length}</span></div>
      <div class="pt-cell-def">${esc(d.def)}</div><div class="pt-chips">${mem.map(chip).join("")}</div></div>`;
  }).join("");

  return `
    <div class="cmp-summary">Olson's founding scene: a warlord who stops raiding a territory and starts taxing it has, for the first time, an interest in its prosperity — so he takes less than everything and supplies order. What governs behaviour is the <strong>horizon</strong>. A secure ruler invests; an insecure one confiscates, debases and defaults, however long he has already reigned. ${all.length} rulers are placed here; the one leader in the index who never held the power to tax is left out.</div>
    <div class="ol-types">${types}</div>

    <div class="reg-head"><h3>Horizon against public goods</h3><span class="reg-sub">hover or click a point · colour is the bandit type</span></div>
    <div class="cmp-summary">Among the non-democratic rulers, horizon and public goods correlate at <strong>${fmtR(rHG)}</strong>, and the take against public goods at <strong>${fmtR(rTG)}</strong>. Be careful with those numbers: both axes are my estimates, made with Olson in mind, so the correlation partly measures my own reading of him. The tests further down use outcomes and fates recorded separately — though not blind, since I knew them when scoring.</div>
    <div class="rz-chartwrap">${scatter}</div>

    <div class="reg-head"><h3>The markers of a short horizon</h3><span class="reg-sub">what a ruler does when the future isn't theirs</span></div>
    <div class="cmp-summary">Olson's tell-tales are observable: confiscation, debasement, forced loans, default. The ${shortSigned.length} rulers with at least one of them have a mean horizon of <strong>${mean(shortSigned.map(e => e.r.horizon))}</strong>, against <strong>${mean(clean.map(e => e.r.horizon))}</strong> for the ${clean.length} without. The exceptions are the interesting part — Henry VIII, Frederick the Great and Mehmed II debased the coin in long, secure reigns, because a war made the future feel short.</div>
    <table class="xtab"><thead><tr><th>Marker</th><th>Reads as</th><th>Rulers</th><th>Mean horizon</th><th>Who</th></tr></thead><tbody>
      ${signRows.map(x => `<tr><td>${olsonSign(x.k)}</td><td style="color:var(--muted)">${x.s.pole === "short" ? "short horizon" : x.s.pole === "long" ? "long horizon" : "extraction"}</td><td class="num">${x.mem.length}</td><td class="num">${x.h}</td><td><div class="pt-chips">${x.mem.map(chip).join("")}</div></td></tr>`).join("")}
    </tbody></table>

    <div class="reg-head"><h3>Does the bandit type predict the ending?</h3><span class="reg-sub">against the outcome and fate data</span></div>
    <div class="sv-duo">
      <table class="xtab"><thead><tr><th>Type</th><th>Leaders</th><th>Succession crisis</th><th>Ended badly</th><th>Mean repression (Svolik)</th></tr></thead><tbody>
        ${tie.filter(t => t.n).map(t => `<tr><td style="color:${t.ty.color};font-weight:600">${esc(t.ty.name)}</td><td class="num">${t.n}</td>
          <td class="num">${pct(t.cr, t.kn)} <span class="lowN">(${t.cr}/${t.kn})</span></td><td class="num">${pct(t.bad, t.nf)} <span class="lowN">(${t.bad}/${t.nf})</span></td><td class="num">${t.rep == null ? "—" : t.rep} <span class="lowN">${t.na ? `(${t.na})` : ""}</span></td></tr>`).join("")}
      </tbody></table>
      <table class="xtab"><thead><tr><th>Non-democratic rulers by horizon</th><th>Rulers</th><th>Succession crisis</th></tr></thead><tbody>
        ${hs.map(([label, g]) => `<tr><td>${label}</td><td class="num">${g.n}</td><td><span class="bar ${g.kn && g.cr / g.kn <= 0.29 ? "good" : ""}" style="width:${g.kn ? Math.round(100 * g.cr / g.kn) : 0}px"></span>${pct(g.cr, g.kn)} <span class="lowN">(${g.cr}/${g.kn})</span></td></tr>`).join("")}
        <tr><td colspan="3" class="lowN" style="font-style:normal">If the horizon is real, rulers who acted as though they would last should leave more orderly successions. The succession data were coded before this layer existed — but I knew how each reign ended when I estimated its horizon, so this is not a blind test. A strong gradient here deserves suspicion as well as interest.</td></tr>
      </tbody></table>
    </div>

    <div class="reg-head"><h3>Distributional coalitions</h3><span class="reg-sub">Olson's second idea — The Rise and Decline of Nations</span></div>
    <div class="cmp-summary">Stable societies accumulate narrow interest groups — cartels, guilds, tariff lobbies, protected unions — each taxing everyone else a little, together slowing growth. Olson thought defeat or revolution explained the postwar German and Japanese booms: the coalitions were swept away. Only leaders where the relationship is clear-cut are marked.</div>
    <div class="ol-dc">${dcCells}</div>`;
}

/* ================================================================
   ORGANIZATIONS & MACHINES — first-class records, like books
   ================================================================ */

const ORGS = window.ORGANIZATIONS || [];
const ORG_BY_ID = Object.fromEntries(ORGS.map(o => [o.id, o]));
const ORG_KIND_BY_KEY = Object.fromEntries((window.ORG_KINDS || []).map(k => [k.key, k]));
function orgsForLeader(id) {
  const out = [];
  ORGS.forEach(o => (o.leaders || []).forEach(x => { if (x.id === id) out.push({ o, link: x }); }));
  return out;
}
function orgsForTag(key) { return ORGS.filter(o => (o.tags || []).includes(key)); }
function orgYears(o) {
  const y = v => v < 0 ? `${-v} BC` : String(v);
  return `${y(o.from)}–${o.to == null ? "present" : y(o.to)}`;
}
function orgSpan(o) { return (o.to == null ? NOW_YEAR : o.to) - o.from; }
function orgMark(o) { return (o.short || o.name).replace(/[^A-Za-z0-9 ]/g, "").split(/\s+/).filter(Boolean).slice(0, 2).map(w => w[0]).join("").toUpperCase(); }
function openOrg(id) {
  const target = "#/org/" + encodeURIComponent(id);
  if (location.hash !== target) location.hash = target;
  else showView("org", id);
}

// the Organizations block on a leader profile
function orgsHtml(l) {
  const list = orgsForLeader(l.id), pc = patCasesForLeader(l.id);
  if (!list.length && !pc.length) return "";
  const patLine = pc.length ? `<div class="pat-leader-link">Patronage case study: ${pc.map(c => `<a data-pcase="${c.id}">${esc(c.country)} — ${esc(c.title)}</a>`).join(" · ")}</div>` : "";
  return patLine + `<div class="org-mini-list">${list.map(({ o, link }) => {
    const k = ORG_KIND_BY_KEY[o.kind];
    return `<div class="org-mini" data-org="${o.id}" style="--c:${k.color}">
      <div class="org-mini-top"><b>${esc(o.name)}</b><span class="org-rel ${link.rel}">${esc(window.ORG_RELS[link.rel])}</span></div>
      <div class="org-mini-role">${esc(link.role)}</div>
      <div class="org-mini-meta">${esc(k.name)} · ${esc(o.place)} · ${orgYears(o)}</div>
    </div>`;
  }).join("")}</div>`;
}

function orgCard(o) {
  const k = ORG_KIND_BY_KEY[o.kind];
  const ls = (o.leaders || []).map(x => byId(x.id)).filter(Boolean);
  return `<div class="org-card" data-org="${o.id}" style="--c:${k.color}">
    <div class="org-card-top"><span class="org-mark">${orgMark(o)}</span><div><b>${esc(o.name)}</b><span class="m">${esc(o.place)} · ${orgYears(o)}</span></div>${DOSSIERS[o.id] ? `<span class="dossier-badge" title="Has a deep dossier: glue, engine, rot ledger and arc">Dossier</span>` : ""}</div>
    <p class="org-sum">${esc(o.summary)}</p>
    <div class="org-lesson">${esc(o.lesson)}</div>
    <div class="org-card-foot">${ls.map(l => `<span class="org-av" title="${esc(l.name)}">${avatarMarkup(l)}</span>`).join("")}<span class="org-end ${o.end}">${esc(window.ORG_ENDS[o.end])}</span></div>
  </div>`;
}

function renderOrgs() {
  const S = state.orgs, tb = $("#orgs-toolbar"), body = $("#orgs-body");
  const modes = [["catalogue", "Catalogue"], ["dossiers", "Compare the dossiers"], ["science", "The science of machines"], ["patterns", "Patterns"]];
  tb.innerHTML = `<div class="seg">${modes.map(([k, label]) => `<button data-omode="${k}" class="${S.mode === k ? "on" : ""}">${label}</button>`).join("")}</div>` +
    (S.mode === "catalogue" ? `<div class="cv-pills" style="width:100%;margin-top:8px"><button class="chip ${S.kind === "all" ? "on" : ""}" data-okind="all">All <span style="opacity:.6">${ORGS.length}</span></button>${(window.ORG_KINDS || []).map(k => `<button class="chip ${S.kind === k.key ? "on" : ""}" data-okind="${k.key}" style="--era-color:${k.color}"><span class="dot"></span>${esc(k.name)} <span style="opacity:.6">${ORGS.filter(o => o.kind === k.key).length}</span></button>`).join("")}
      <input type="search" id="org-search" class="tb-search" placeholder="Search organizations, places, bosses…" value="${esc(S.search)}"></div>` : "");
  tb.querySelectorAll("[data-omode]").forEach(b => b.onclick = () => { S.mode = b.dataset.omode; renderOrgs(); });
  tb.querySelectorAll("[data-okind]").forEach(b => b.onclick = () => { S.kind = b.dataset.okind; renderOrgs(); });
  if ($("#org-search")) $("#org-search").oninput = e => { S.search = e.target.value; renderOrgsBody(); };
  renderOrgsBody();
}

function renderOrgsBody() {
  const S = state.orgs, body = $("#orgs-body");
  if (S.mode === "dossiers") { renderDossierCompare(body); body.querySelectorAll("[data-org]").forEach(el => { if (!el.classList.contains("dc-pt")) el.onclick = () => openOrg(el.dataset.org); }); return; }
  if (S.mode === "science") {
    body.innerHTML = `<div class="cmp-summary">Ten ideas from political science and sociology for reading any machine, party or court. Each lists the organizations in the catalogue it explains best.</div>
      <div class="org-theories">${(window.ORG_THEORIES || []).map(t => `<div class="inst-card" style="--reg-color:var(--accent)">
        <h4>${esc(t.name)}</h4><div class="rz-neo" style="margin:-2px 0 8px">${esc(t.who)}</div>
        <div class="i-def">${esc(t.claim)}</div>
        <div class="i-q">Ask: ${esc(t.look)}</div>
        <div class="pt-chips" style="margin-top:10px">${t.orgs.map(id => ORG_BY_ID[id]).filter(Boolean).map(o => `<span class="pt-chip" data-org="${o.id}" style="--c:${ORG_KIND_BY_KEY[o.kind].color}">${esc(o.short || o.name)}</span>`).join("")}</div>
      </div>`).join("")}</div>`;
  } else if (S.mode === "patterns") {
    body.innerHTML = orgPatternsHtml();
    const tip = tipEl();
    body.querySelectorAll(".sv-pt").forEach(p => {
      const o = ORG_BY_ID[p.dataset.id];
      p.dataset.org = o.id;
      p.onmouseenter = () => { tip.innerHTML = `<b>${esc(o.name)}</b><div class="m">${esc(o.place)} · ${orgYears(o)}</div><div class="co">patronage ${o.s.client} · discipline ${o.s.disc} · reach ${o.s.reach} · coercion ${o.s.coerce}</div>`; tip.hidden = false; };
      p.onmousemove = moveTip;
      p.onmouseleave = () => { tip.hidden = true; };
    });
  } else {
    const q = S.search.trim().toLowerCase();
    const match = o => !q || [o.name, o.short, o.place, o.summary, o.figures, o.lesson, ...(o.leaders || []).map(x => (byId(x.id) || {}).name)].join(" ").toLowerCase().includes(q);
    const kinds = (window.ORG_KINDS || []).filter(k => S.kind === "all" || S.kind === k.key);
    let html = "";
    kinds.forEach(k => {
      const list = ORGS.filter(o => o.kind === k.key && match(o)).sort((a, b) => a.from - b.from);
      if (!list.length) return;
      html += `<div class="reg-head" style="--reg-color:${k.color}"><h3>${esc(k.name)}</h3><span class="reg-sub">${list.length}</span></div>
        <div class="cmp-summary">${esc(k.def)}</div><div class="org-grid">${list.map(orgCard).join("")}</div>`;
    });
    body.innerHTML = html || `<div class="ins-empty">Nothing matches that search.</div>`;
  }
  body.querySelectorAll("[data-org]").forEach(el => el.onclick = () => openOrg(el.dataset.org));
  hydrateAvatars(body);
}

function orgPatternsHtml() {
  const pct = (a, b) => b ? Math.round(100 * a / b) + "%" : "—";
  const mean = arr => arr.length ? Math.round(arr.reduce((a, b) => a + b, 0) / arr.length) : null;
  const scatter = scatterSvg(ORGS.map(o => ({ id: o.id, x: o.s.client, y: o.s.disc, color: ORG_KIND_BY_KEY[o.kind].color, label: o.short || o.name })),
    { xl: "Patronage — material exchange rather than programme", yl: "Internal discipline", q: ["DISCIPLINE WITHOUT PATRONAGE", "THE CLASSIC MACHINE", "LOOSE PROGRAMME PARTIES", "PATRONAGE RUN BY BROKERS"] });
  const ended = ORGS.filter(o => o.end !== "alive");
  const ends = Object.entries(window.ORG_ENDS).map(([k, label]) => ({ k, label, list: ORGS.filter(o => o.end === k) })).filter(x => x.list.length);
  const n = k => ended.filter(o => o.end === k).length;
  const kinds = (window.ORG_KINDS || []).map(k => {
    const list = ORGS.filter(o => o.kind === k.key);
    return { k, n: list.length, alive: list.filter(o => o.end === "alive").length, span: mean(list.map(orgSpan)), coerce: mean(list.map(o => o.s.coerce)), client: mean(list.map(o => o.s.client)) };
  });
  const rels = Object.entries(window.ORG_RELS).map(([rel, label]) => {
    const pairs = [];
    ORGS.forEach(o => (o.leaders || []).forEach(x => { if (x.rel === rel && byId(x.id)) pairs.push({ o, l: byId(x.id) }); }));
    return { rel, label, pairs };
  }).filter(r => r.pairs.length);
  return `
    <div class="reg-head"><h3>Patronage against discipline</h3><span class="reg-sub">hover or click a point · colour is the kind of organization</span></div>
    <div class="cmp-summary">The classic machine sits top right: it trades material benefits and controls its members tightly. Cadre and programme parties sit top left — discipline without patronage. Bottom right is clientelism run by brokers with their own interests, which Stokes and her co-authors argue is where most modern patronage actually lives. Scores are my estimates.</div>
    <div class="rz-chartwrap">${scatter}</div>

    <div class="reg-head"><h3>How machines die</h3><span class="reg-sub">${ended.length} of ${ORGS.length} have ended</span></div>
    <div class="cmp-summary">Of the ${ended.length} that ended, <strong>${n("voters")}</strong> lost to new voters or reformers at the polls, <strong>${n("courts")}</strong> were broken by prosecutors or court orders, <strong>${n("resources")}</strong> ran out of patronage, <strong>${n("founder")}</strong> did not outlive their boss, <strong>${n("regime")}</strong> fell with their regime and <strong>${n("abolished")}</strong> were abolished by the ruler they served. Read the American machines row by row: Byrd's ended when the electorate was enlarged, Daley's, Pendergast's and Parr's when courts or prosecutors took away the power to hire or the boss himself, Tammany's when the New Deal took over its welfare. In these cases the reform crusade tends to arrive as the final blow rather than the cause — a pattern in a small, hand-coded sample, not a law.</div>
    <div class="sv-ends">${ends.map(x => `<div class="sv-end-row"><span class="sv-end-lab">${esc(x.label)}</span><span class="sv-end-bar"><i style="width:${Math.round(100 * x.list.length / ORGS.length * 2.5)}%"></i></span><span class="sv-end-n">${x.list.length}</span>
      <div class="pt-chips">${x.list.map(o => `<span class="pt-chip" data-org="${o.id}" style="--c:${ORG_KIND_BY_KEY[o.kind].color}">${esc(o.short || o.name)} <span style="opacity:.55">${orgSpan(o)} yrs</span></span>`).join("")}</div></div>`).join("")}</div>

    <div class="reg-head"><h3>By kind</h3><span class="reg-sub">lifespan, patronage and force</span></div>
    <table class="xtab"><thead><tr><th>Kind</th><th>Organizations</th><th>Still operating</th><th>Mean lifespan</th><th>Mean patronage</th><th>Mean coercion</th></tr></thead><tbody>
      ${kinds.filter(r => r.n).map(r => `<tr><td style="color:${r.k.color};font-weight:600">${esc(r.k.name)}</td><td class="num">${r.n}</td><td class="num">${r.alive}</td><td class="num">${r.span} years</td><td class="num">${r.client}</td><td class="num">${r.coerce}</td></tr>`).join("")}
    </tbody></table>

    <div class="reg-head"><h3>Leaders and machines</h3><span class="reg-sub">who built them, who they made, who fought them</span></div>
    <div class="org-rels">${rels.map(r => `<div class="org-rel-group"><h5><span class="org-rel ${r.rel}">${esc(r.label)}</span> <span style="color:var(--muted);font-weight:400">${r.pairs.length}</span></h5>
      ${r.pairs.map(p => `<div class="org-rel-row"><span class="rl-row" data-id="${p.l.id}">${avatarMarkup(p.l)}<b>${esc(shortName(p.l))}</b></span><span class="org-arrow">→</span><span class="pt-chip" data-org="${p.o.id}" style="--c:${ORG_KIND_BY_KEY[p.o.kind].color}">${esc(p.o.short || p.o.name)}</span></div>`).join("")}</div>`).join("")}</div>`;
}

function renderOrg(id) {
  const o = ORG_BY_ID[id];
  if (!o) { location.hash = "#/orgs"; return; }
  const k = ORG_KIND_BY_KEY[o.kind], body = $("#org-body");
  const meter = (label, v, c, tip) => `<div class="sm-row" title="${esc(tip)}"><span class="sm-name">${label}</span><span class="sm-track"><span class="sm-fill" style="width:${v}%;background:${c}"></span></span><span class="sm-val">${v}</span></div>`;
  const row = (label, txt) => txt ? `<div><span class="k">${label}</span>${esc(txt)}</div>` : "";
  const theories = (window.ORG_THEORIES || []).filter(t => t.orgs.includes(o.id));
  const DS = DOSSIERS[o.id] || null;
  const books = [...new Set([...(o.books || []), ...((DS && DS.books) || [])])].map(bookById).filter(Boolean);
  const reading = [...new Set([...(o.reading || []), ...((DS && DS.reading) || [])])];
  const dsecs = DS ? dossierSections(o, DS) : [];
  const navItems = [["osec-summary", "Overview"]].concat(dsecs.map(x => [x.id, x.label]), [["osec-anatomy", "Anatomy"], ["osec-leaders", "Leaders"], ["osec-reading", "Reading"], ["osec-notes", "Notes"]]);
  const dist = x => Math.abs(x.s.client - o.s.client) + Math.abs(x.s.disc - o.s.disc) + Math.abs(x.s.reach - o.s.reach) + Math.abs(x.s.coerce - o.s.coerce) + (x.kind === o.kind ? 0 : 40);
  const similar = ORGS.filter(x => x.id !== o.id).sort((a, b) => dist(a) - dist(b)).slice(0, 5);
  const nkey = "atlas-note-org:" + o.id;
  body.innerHTML = `
    <button class="lp-back" id="org-back">← Back</button>
    <header class="lp-hero" style="--era-color:${k.color}">
      <div class="lp-portrait org-big-mark">${orgMark(o)}</div>
      <div class="lp-headtext">
        <div class="lp-kicker"><i></i>${esc(k.name)} · ${esc(o.linkage)} linkage</div>
        <h1 class="lp-name">${esc(o.name)}</h1>
        <div class="lp-sub">${esc(o.place)} · ${orgYears(o)}</div>
        <div class="outcomes"><span class="outcome-chip ${o.end === "alive" ? "incumbent" : ""}">${esc(window.ORG_ENDS[o.end])}</span><span class="outcome-chip">${orgSpan(o)} years</span></div>
      </div>
    </header>
    ${DS ? `<nav class="lp-secnav" id="org-secnav">${navItems.map(([id, label]) => `<button data-sec="${id}">${label}</button>`).join("")}</nav>` : ""}
    <div class="lp-grid" style="margin-top:22px"><div class="lp-main">
      <section class="lp-sec" id="osec-summary"><p class="lp-lede">${esc(o.summary)}</p></section>
      ${dsecs.map(x => x.html).join("")}
      <section class="lp-sec" id="osec-anatomy"><h3 class="lp-h">Anatomy of the machine</h3>
        <div class="d-styles"><div class="pt-rows" style="border-top:none">
          ${row("Who it mobilised", o.base)}${row("What it traded", o.currency)}${row("The brokerage chain", o.chain)}
          ${row("How it kept people in line", o.control)}${row("Where the money came from", o.revenue)}${row("How it ended", o.ending)}
        </div>
        <div class="org-lesson big">${esc(o.lesson)}</div></div></section>
      ${(o.leaders || []).length ? `<section class="lp-sec" id="osec-leaders"><h3 class="lp-h">Leaders <small>in the atlas</small></h3><div class="org-leaders">${o.leaders.map(x => { const l = byId(x.id); return l ? `<div class="org-leader" data-id="${l.id}">${avatarMarkup(l)}<div><b>${esc(l.name)}</b> <span class="org-rel ${x.rel}">${esc(window.ORG_RELS[x.rel])}</span><div class="org-mini-role">${esc(x.role)}</div></div></div>` : ""; }).join("")}</div></section>` : ""}
      ${theories.length ? `<section class="lp-sec"><h3 class="lp-h">Read it through <small>the science of machines</small></h3>${theories.map(t => `<div class="inst-card" style="--reg-color:${k.color}"><h4>${esc(t.name)}</h4><div class="rz-neo" style="margin:-2px 0 8px">${esc(t.who)}</div><div class="i-def">${esc(t.claim)}</div><div class="i-q">Ask: ${esc(t.look)}</div></div>`).join("")}</section>` : ""}
      ${books.length || reading.length ? `<section class="lp-sec" id="osec-reading"><h3 class="lp-h">Reading</h3>
        ${books.length ? `<div class="read-list">${books.map(b => `<div class="read-row" data-book="${b.id}"><div class="rr-top"><span class="rr-title">${esc(b.title)}</span><span class="rr-author">${esc(b.author)}${b.year ? ", " + b.year : ""}</span><span class="rr-shelf">${shelfBadge(b)}</span></div></div>`).join("")}</div>` : ""}
        ${reading.length ? `<ul class="org-cites">${reading.map(r => `<li>${esc(r)}</li>`).join("")}</ul>` : ""}</section>` : ""}
      <section class="lp-sec" id="osec-notes"><h3 class="lp-h">My notes</h3><div class="d-notes"><textarea id="org-note" placeholder="What this organization explains, what it gets wrong, page references…"></textarea><div class="save-state" id="org-note-state">Saved locally in this browser — included in Export</div></div></section>
    </div><aside class="lp-rail">
      ${DS ? dossierRail(o, DS) : ""}
      <div class="rail-card"><h4>Profile</h4><div class="sm-list">
        ${meter("Patronage", o.s.client, "var(--reg-loyalty)", "material exchange rather than programme or ideology")}
        ${meter("Discipline", o.s.disc, "var(--reg-motivate)", "control over its own members")}
        ${meter("Reach", o.s.reach, "var(--reg-trust)", "how far down into society it reached")}
        ${meter("Coercion", o.s.coerce, "var(--reg-fear)", "force, fraud and intimidation")}
      </div><p class="rail-note">Linkage: <b>${esc(o.linkage)}</b>. Scores are my estimates.</p></div>
      ${patCasesForOrg(o.id).length ? `<div class="rail-card"><h4>Patronage case study</h4><div class="rail-list">${patCasesForOrg(o.id).map(c => `<div class="rl-row" data-pcase="${c.id}"><b>${esc(c.country)}</b><span class="m">${esc(c.period)}</span></div>`).join("")}</div><p class="rail-note">${esc(patCasesForOrg(o.id)[0].title)}</p></div>` : ""}
      ${o.figures ? `<div class="rail-card"><h4>Key figures</h4><p class="rail-note" style="border:none;margin:0;padding:0">${esc(o.figures)}</p></div>` : ""}
      ${(o.tags || []).length ? `<div class="rail-card"><h4>Concepts</h4><div class="lp-tags" style="margin:0">${o.tags.filter(t => TRAIT_BY_KEY[t]).map(t => `<button class="d-tag" data-tag="${t}">${esc(TRAIT_BY_KEY[t].name)}</button>`).join("")}</div></div>` : ""}
      <div class="rail-card"><h4>Most similar organizations</h4><div class="rail-list">${similar.map(x => `<div class="rl-row" data-org="${x.id}"><span class="org-mark sm" style="--c:${ORG_KIND_BY_KEY[x.kind].color}">${orgMark(x)}</span><b>${esc(x.short || x.name)}</b><span class="m">${esc(x.place)}</span></div>`).join("")}</div></div>
    </aside></div>`;
  $("#org-back").onclick = () => { if (history.length > 1) history.back(); else switchView("orgs"); };
  body.querySelectorAll("[data-sec]").forEach(b => b.onclick = () => { const el = document.getElementById(b.dataset.sec); if (el) el.scrollIntoView({ behavior: "smooth", block: "start" }); });
  if ($("#org-dcmp")) $("#org-dcmp").onclick = () => { state.orgs.mode = "dossiers"; if (!state.orgs.dcmp.includes(o.id)) state.orgs.dcmp.push(o.id); switchView("orgs"); };
  body.querySelectorAll("[data-id]").forEach(el => el.onclick = () => openDetail(el.dataset.id));
  body.querySelectorAll("[data-org]").forEach(el => el.onclick = () => openOrg(el.dataset.org));
  body.querySelectorAll(".d-tag").forEach(b => b.onclick = () => filterByTags([b.dataset.tag]));
  body.querySelectorAll("[data-pcase]").forEach(el => el.onclick = () => openPatCase(el.dataset.pcase));
  body.querySelectorAll(".read-row").forEach(r => r.onclick = ev => {
    if (ev.target.dataset.shelfId) { ev.stopPropagation(); cycleShelf(ev.target.dataset.shelfId); renderOrg(id); return; }
    openBookEditor(r.dataset.book);
  });
  const box = $("#org-note");
  box.value = localStorage.getItem(nkey) || "";
  leaderSpy();
  let t;
  box.addEventListener("input", () => {
    clearTimeout(t); $("#org-note-state").textContent = "Saving…";
    t = setTimeout(() => { localStorage.setItem(nkey, box.value); $("#org-note-state").textContent = "Saved locally in this browser — included in Export"; }, 400);
  });
  hydrateAvatars(body);
}

/* ================================================================
   SELECTORATE — Bueno de Mesquita, tested on the atlas
   ================================================================ */

// years in power, correcting the few records whose `years` is a lifetime
function getTenure(l) {
  const o = window.TENURE_YEARS || {};
  if (Object.prototype.hasOwnProperty.call(o, l.id)) { const t = o[l.id]; return t ? { years: t[1] - t[0], censored: false } : null; }
  return { years: Math.max(1, endYear(l) - startYear(l)), censored: /present/i.test(l.years || "") };
}
// the coalition proxy: Bueno de Mesquita and colleagues built W from regime-type indicators,
// so the atlas does the same — Svolik-scored autocracies are small-coalition, Olson's democratic majorities large
function coalitionClass(l) {
  const pb = getPowerBase(l);
  if (pb && pb.w_scale) return pb.w_scale <= 2 ? "small" : pb.w_scale >= 4 ? "large" : "middle";
  if (getAutocracy(l)) return "small";
  const o = getOlson(l);
  return o && o.type === "majority" ? "large" : null;
}
function fmtCount(n) {
  if (n >= 1e9) return (n / 1e9).toFixed(1).replace(/\.0$/, "") + "B";
  if (n >= 1e6) return (n / 1e6).toFixed(n < 1e7 ? 1 : 0).replace(/\.0$/, "") + "M";
  if (n >= 1e4) return Math.round(n / 1e3) + "k";
  return n.toLocaleString();
}
function oneIn(w, s) { const x = s / w; return x < 10 ? "1 in " + x.toFixed(1).replace(/\.0$/, "") : "1 in " + fmtCount(Math.round(x)); }
function median(arr) { if (!arr.length) return null; const a = arr.slice().sort((x, y) => x - y), m = Math.floor(a.length / 2); return a.length % 2 ? a[m] : (a[m - 1] + a[m]) / 2; }

function bdmSectionHtml() {
  const pct = (a, b) => b ? Math.round(100 * a / b) + "%" : "—";
  const mean = arr => arr.length ? Math.round(arr.reduce((a, b) => a + b, 0) / arr.length) : null;
  const leaderChip = (x, cls) => { const l = byId(x.id); return l ? `<div class="bdm-case ${cls}"><span class="rl-row" data-id="${l.id}">${avatarMarkup(l)}<b>${esc(shortName(l))}</b></span><div class="bdm-how">${esc(x.how)}</div></div>` : ""; };

  // 1 — the five rules
  const rules = (window.BDM_RULES || []).map(r => `<div class="inst-card bdm-rule" style="--reg-color:var(--reg-fear)">
      <div class="bdm-n">Rule ${r.n}</div><h4>${esc(r.rule)}</h4><div class="i-def">${esc(r.gloss)}</div>
      <div class="bdm-cases"><h5>Followed it</h5>${r.followed.map(x => leaderChip(x, "kept")).join("")}
      <h5 class="broke">${r.n === 3 ? "The counter-case" : "Broke it"}</h5>${r.broke.map(x => leaderChip(x, "broke")).join("")}</div>
    </div>`).join("");

  // 2 — the twenty-three measured power bases
  const pbs = window.ALL_LEADERS.map(l => ({ l, pb: getPowerBase(l) })).filter(e => e.pb && e.pb.sizes);
  const X = w => Math.max(0, Math.min(100, Math.log10(w) / 9 * 100));
  const Y = r => Math.max(0, Math.min(100, (Math.log10(r) + 6) / 6 * 100));
  const scatter = scatterSvg(pbs.map(e => ({ id: e.l.id, x: X(e.pb.sizes.w), y: Y(e.pb.sizes.w / e.pb.sizes.s), color: eraColor(e.l), label: tagName(e.l) })), {
    xl: "Winning coalition W (log scale)", yl: "W as a share of S — the loyalty norm (log)",
    q: ["", "", "", ""],   // the caption names the regions; with every leader plotted, labels would sit on the clusters
    xt: [[0, "1"], [33.33, "1,000"], [66.67, "1 million"], [100, "1 billion"]],
    yt: [[0, "1 in a million"], [33.33, "1 in 10,000"], [66.67, "1 in 100"], [100, "all of S"]]
  });
  const pbRows = pbs.slice().sort((a, b) => a.pb.sizes.w / a.pb.sizes.s - b.pb.sizes.w / b.pb.sizes.s).map(e => {
    const t = getTenure(e.l), ol = getOlson(e.l), f = getFate(e.l);
    return `<tr data-id="${e.l.id}" style="cursor:pointer"><td><div class="ix-who" style="min-width:0">${avatarMarkup(e.l)}<b>${esc(shortName(e.l))}</b></div></td>
      <td class="num">${fmtCount(e.pb.sizes.w)}</td><td class="num">${fmtCount(e.pb.sizes.s)}</td><td class="num"><b>${oneIn(e.pb.sizes.w, e.pb.sizes.s)}</b></td>
      <td class="num">${t ? t.years + (t.censored ? "+" : "") : "—"}</td><td class="num">${ol ? ol.goods : "—"}</td>
      <td class="${f ? "fate-" + window.FATES[f.fate].tone : ""}">${f ? esc(window.FATES[f.fate].name) : "—"}</td></tr>`;
  }).join("");
  const nm = e => esc(shortName(e.l));
  const trapNames = pbs.slice().sort((a, b) => a.pb.sizes.w / a.pb.sizes.s - b.pb.sizes.w / b.pb.sizes.s).slice(0, 6).map(nm).join(", ");
  const courtNames = pbs.filter(e => e.pb.sizes.w < 1000).sort((a, b) => b.pb.sizes.w / b.pb.sizes.s - a.pb.sizes.w / a.pb.sizes.s).slice(0, 6).map(nm).join(", ");
  const rLog = pearson(pbs.map(e => Math.log10(e.pb.sizes.w)), pbs.map(e => (getOlson(e.l) || {}).goods ?? 0));

  // 3 — the propositions, tested on the whole atlas with the regime-type proxy
  const cls = window.ALL_LEADERS.map(l => ({ l, c: coalitionClass(l), t: getTenure(l), o: getOlson(l), f: getFate(l) })).filter(e => e.c && e.t);
  const small = cls.filter(e => e.c === "small"), large = cls.filter(e => e.c === "large"), middleN = cls.filter(e => e.c === "middle").length;
  const goodsS = mean(small.filter(e => e.o).map(e => e.o.goods)), goodsL = mean(large.filter(e => e.o).map(e => e.o.goods));
  const tenS = median(small.map(e => e.t.years)), tenL = median(large.map(e => e.t.years));
  const doneS = small.filter(e => e.f && e.f.fate !== "incumbent"), doneL = large.filter(e => e.f && e.f.fate !== "incumbent");
  const badS = doneS.filter(e => badFate(e.f)).length, badL = doneL.filter(e => badFate(e.f)).length;
  const bp = small.filter(e => e.o && !e.t.censored);
  const rBP = pearson(bp.map(e => e.o.goods), bp.map(e => e.t.years));
  const fr = r => r == null ? "—" : (r >= 0 ? "+" : "") + r.toFixed(2);
  const verdict = v => v == null ? `<span class="bdm-v none">not testable here</span>` : v === "mixed" ? `<span class="bdm-v mixed">weak or mixed</span>` : v ? `<span class="bdm-v yes">consistent</span>` : `<span class="bdm-v no">not consistent</span>`;
  const exS = doneS.filter(e => ["exile", "prison"].includes(e.f.fate)).length, exL = doneL.filter(e => ["exile", "prison"].includes(e.f.fate)).length;
  const assassL = doneL.filter(e => badFate(e.f) && getOutcome(e.l).exit === "assassinated").length;
  const tri = (d, strong) => d >= strong ? true : d > 0 ? "mixed" : false;
  const shows = {
    goods: [`Mean public goods ${goodsS} in small-coalition systems against ${goodsL} in large ones. Across all ${pbs.length} power bases, log W correlates with public goods at ${fr(rLog)}. Both goods scores are my Olson estimates, so this is a check on consistency, not independent evidence. The small-coalition group includes long-horizon builders — Akbar, Lee Kuan Yew, Deng — which is Olson's point cutting across Bueno de Mesquita's.`, goodsL != null && goodsS != null ? tri(goodsL - goodsS, 10) : null],
    badpolicy: [`Among ${bp.length} small-coalition rulers whose reign has ended, public goods and years in power correlate at ${fr(rBP)}. The theory predicts little or no relationship — autocrats who deliver nothing survive as long as those who build. The tenures are recorded facts; the goods scores are my estimates.`, rBP == null ? null : rBP < 0.15 ? true : rBP < 0.35 ? "mixed" : false],
    tenure: [`Median years in power: ${tenS} for small-coalition leaders (${small.length}), ${tenL} for large-coalition leaders (${large.length}). Term limits account for part of the gap — which is the theory's point: large coalitions build rules that remove leaders.`, tenS != null && tenL != null ? tenS > tenL : null],
    fate: [`Exiled or imprisoned after losing power — the punishment the theory is about: ${pct(exS, doneS.length)} of small-coalition leaders (${exS}/${doneS.length}) against ${pct(exL, doneL.length)} of large-coalition leaders (${exL}/${doneL.length}). Counting violent deaths too, ${pct(badS, doneS.length)} against ${pct(badL, doneL.length)} — but ${assassL} of the ${badL} large-coalition cases are assassinations in office, a different thing.`, doneS.length && doneL.length ? tri(100 * exS / doneS.length - 100 * exL / doneL.length, 5) : null]
  };
  const props = (window.BDM_PROPOSITIONS || []).map(p => {
    const s = p.test && shows[p.test];
    return `<tr><td class="bdm-claim">${esc(p.claim)}</td><td>${s ? s[0] : `<span style="color:var(--muted)">The atlas has no war-outcome, aid or tenure-hazard data to test this against.</span>`}</td><td>${verdict(s ? s[1] : null)}</td></tr>`;
  }).join("");

  // 4 — the work
  const works = (window.BDM_WORKS || []).map(w => { const b = bookById(w.book); return `<div class="inst-card" style="--reg-color:var(--accent)">
      <h4>${b ? `<a class="bdm-book" data-book="${b.id}">${esc(w.title)}</a>` : esc(w.title)} <span class="rz-neo">${w.year}</span></h4>
      <div class="i-def">${esc(w.claim)}</div><div class="i-q">In the atlas: ${esc(w.atlas)}</div></div>`; }).join("");

  return `
    <div class="cmp-summary">Bruce Bueno de Mesquita's question is who a leader actually has to keep happy. Everyone answers to three nested groups: the <strong>nominal selectorate</strong> (N — everyone with a formal say), the <strong>real selectorate</strong> (S — those whose say counts) and the <strong>winning coalition</strong> (W — those the leader cannot survive without). A small W is cheapest to buy with private rewards; a large W can only be reached with public goods. And the smaller W is as a share of S, the more replaceable each essential is — the <em>loyalty norm</em> — and the longer a bad ruler lasts. The <a class="bdm-link" data-go="traits">Selectorate Theory card</a> in Frameworks has the concept; ${pbs.length} profiles carry a Power Base section with estimated sizes for all three circles.</div>

    <div class="reg-head"><h3>The five rules</h3><span class="reg-sub">The Dictator's Handbook (2011), read through the atlas</span></div>
    <div class="bdm-rules">${rules}</div>

    <div class="reg-head"><h3>${pbs.length} power bases</h3><span class="reg-sub">W, S and N as estimated on each profile · hover or click a point</span></div>
    <div class="cmp-summary">Bottom left is the loyalty trap — a handful of essentials drawn from millions of possible replacements, where every insider knows how easily he could be dropped. The strongest loyalty norms in the atlas: ${trapNames}. Top left is the court — few essentials who are hard to replace, the regimes where the threat comes from inside the room: ${courtNames}. Top right is every mass democracy. Two oddities are worth reading as limits of the measure: Zelensky lands near the loyalty trap because wartime government narrowed his coalition to a few hundred people while the selectorate stayed national, and Ford lands among the courts because his winning coalition was the Congress that confirmed him.</div>
    <div class="rz-chartwrap">${scatter}</div>
    <details class="cv-method" style="margin-top:12px"><summary>All ${pbs.length} power bases as a table <span>— sorted from the strongest loyalty norm to the weakest; + marks a leader still in power</span></summary>
      <table class="xtab" style="margin:0;border-radius:0 0 var(--radius) var(--radius)"><thead><tr><th>Leader</th><th>W</th><th>S</th><th>Loyalty norm (W/S)</th><th>Years in power</th><th>Public goods</th><th>Afterwards</th></tr></thead><tbody>${pbRows}</tbody></table></details>

    <div class="reg-head"><h3>The propositions, tested on the whole atlas</h3><span class="reg-sub">${small.length} small-coalition and ${large.length} large-coalition leaders</span></div>
    <div class="cmp-summary">Every leader now has an estimated coalition, so the tests use W itself: dozens to hundreds of essentials count as small, hundreds of thousands and up as large, and the ${middleN} in the thousands — early republics of notables and machine bosses — are set aside. The sizes are my estimates, built mostly from regime type, as Bueno de Mesquita and his co-authors built theirs. Tenures for the dozen leaders whose dates in the atlas are lifetimes have been corrected to their years in power.</div>
    <table class="xtab bdm-props"><thead><tr><th>Bueno de Mesquita's claim</th><th>What the atlas shows</th><th>Verdict</th></tr></thead><tbody>${props}</tbody></table>

    <div class="reg-head"><h3>The work</h3><span class="reg-sub">five books over forty years</span></div>
    <div class="org-theories">${works}</div>`;
}

/* ================================================================
   DOSSIERS — the deep layer: glue, engine, rot, arc
   ================================================================ */

const DOSSIERS = window.ORG_DOSSIERS || {};
const DOSSIER_COLORS = { pap: "var(--reg-motivate)", ldp: "var(--reg-loyalty)", umno: "var(--reg-fear)", kmt: "var(--era-c21)", golkar: "var(--era-c19)", congress: "var(--era-c20)", pri: "var(--reg-trust)", drp: "var(--era-renaissance)" };
function dossierColor(id) { return DOSSIER_COLORS[id] || "var(--accent)"; }
function rotMean(ph) { const v = (window.ROT_TYPES || []).map(r => ph.rot[r.key]); return Math.round(v.reduce((a, b) => a + b, 0) / v.length); }
// entrenched rot: how much rot there is, how far it leaked, and how hard it was to remove — my construction
function entrenched(ph) { return Math.round(rotMean(ph) * (ph.leakage / 100) * (1 - ph.reversibility / 100)); }
// shade lets a small-range score (entrenched rot runs 0 to about 40) use the full colour range
function heatCell(v, good, shade) {
  const c = good ? "var(--good)" : "var(--bad)", sh = Math.min(100, shade == null ? v : shade);
  return `<td class="rot-cell" style="background:color-mix(in srgb, ${c} ${Math.round(sh * 0.85)}%, var(--bg-2));color:${sh > 58 ? "#fff" : "var(--text)"}">${v}</td>`;
}
function phaseYears(ph) { return `${ph.from}–${ph.to >= NOW_YEAR ? "now" : ph.to}`; }

function dossierSections(o, D) {
  const secs = [];
  const add = (id, label, title, sub, html) => { secs.push({ id, label, html: `<section class="lp-sec" id="${id}"><h3 class="lp-h">${title}${sub ? ` <small>${sub}</small>` : ""}</h3>${html}</section>` }); };
  const latest = D.phases[D.phases.length - 1];

  add("osec-verdict", "Verdict", "The verdict", "what held it together, what made it work, what it corroded",
    `<div class="org-verdict">
      <div><h5>What held it together</h5><p>${esc(D.verdict.held)}</p></div>
      <div><h5>What made it work</h5><p>${esc(D.verdict.worked)}</p></div>
      <div class="rot"><h5>What it corroded</h5><p>${esc(D.verdict.rotted)}</p></div>
    </div>`);

  add("osec-glue", "Glue", "The glue", "what held it together",
    `<div class="d-styles"><div class="pt-rows" style="border-top:none">${(window.GLUE_KEYS || []).map(k => `<div><span class="k">${esc(k.name)}</span>${esc(D.glue[k.key])}</div>`).join("")}</div></div>`);

  add("osec-engine", "Engine", "The engine", "what made it effective — or not",
    `<div class="d-styles"><div class="eng-list">${(window.ENGINE_KEYS || []).map(k => { const e = D.engine[k.key]; return `<div class="eng-row">
      <div class="eng-head"><b>${esc(k.name)}</b><span class="eng-q">${esc(k.def)}</span><span class="eng-score">${e.score}</span></div>
      <div class="sm-track"><span class="sm-fill" style="width:${e.score}%;background:${dossierColor(o.id)}"></span></div>
      <p>${esc(e.text)}</p></div>`; }).join("")}</div></div>`);

  const head = D.phases.map((ph, i) => `<th title="${esc(ph.name)}"><span class="rot-ph">${i + 1}</span>${phaseYears(ph)}</th>`).join("");
  const rows = (window.ROT_TYPES || []).map(r => `<tr><th class="rot-name" title="${esc(r.def)}">${esc(r.name)}</th>${D.phases.map(ph => heatCell(ph.rot[r.key])).join("")}</tr>`).join("");
  add("osec-rot", "Rot", "The rot ledger", "seven kinds of decay, phase by phase",
    `<div class="rot-wrap"><table class="rot-table"><thead><tr><th></th>${head}</tr></thead><tbody>${rows}
      <tr class="rot-sum"><th class="rot-name">Mean rot</th>${D.phases.map(ph => heatCell(rotMean(ph))).join("")}</tr>
      <tr class="rot-gap"><td colspan="${D.phases.length + 1}"></td></tr>
      <tr><th class="rot-name" title="${esc(window.ROT_AXES[0].def)}">Leakage into the state</th>${D.phases.map(ph => heatCell(ph.leakage)).join("")}</tr>
      <tr><th class="rot-name" title="${esc(window.ROT_AXES[1].def)}">Reversibility</th>${D.phases.map(ph => heatCell(ph.reversibility, true)).join("")}</tr>
      <tr class="rot-sum"><th class="rot-name" title="Mean rot × leakage × (1 − reversibility): how much rot there was, how far it spread, and how hard it was to remove">Entrenched rot</th>${D.phases.map(ph => heatCell(entrenched(ph), false, entrenched(ph) * 2.2)).join("")}</tr>
    </tbody></table></div>
    <details class="cv-method" style="margin-top:10px"><summary>What the rows mean <span>— and how entrenched rot is calculated</span></summary><div class="body">
      ${(window.ROT_TYPES || []).map(r => `<p><b>${esc(r.name)}</b> — ${esc(r.def)}</p>`).join("")}
      ${(window.ROT_AXES || []).map(r => `<p><b>${esc(r.name)}</b> — ${esc(r.def)}</p>`).join("")}
      <p><b>Entrenched rot</b> — mean rot × leakage × (1 − reversibility). A party can be corrupt and still low here if the rot stays inside it and voters can remove it; a clean party can score high if its control reaches into every institution and cannot be dislodged. My construction, and deliberately so: it separates <em>how much</em> rot from <em>how pernicious</em>.</p>
      <p>All scores are my estimates; the events in the arc below are the evidence for them.</p></div></details>`);

  add("osec-arc", "Arc", "The arc", `${D.phases.length} phases, ${D.phases[0].from}–${latest.to >= NOW_YEAR ? "now" : latest.to}`,
    `<div class="arc-list">${D.phases.map((ph, i) => `<div class="arc-phase" style="--c:${dossierColor(o.id)}">
      <div class="arc-top"><span class="rot-ph">${i + 1}</span><b>${esc(ph.name)}</b><span class="arc-yr">${phaseYears(ph)}</span>
        <span class="arc-stats">rot ${rotMean(ph)} · leakage ${ph.leakage} · reversibility ${ph.reversibility}</span></div>
      <p>${esc(ph.summary)}</p>
      <ul>${ph.events.map(ev => `<li>${esc(ev)}</li>`).join("")}</ul>
    </div>`).join("")}</div>`);

  const flow = (list, side) => { const max = Math.max(...list.map(f => f.w)); return list.map(f => `<div class="mm-card ${side}"><b>${esc(f.label)}</b><span>${esc(f.note)}</span><i style="width:${Math.round(100 * f.w / max)}%"></i></div>`).join(""); };
  add("osec-money", "Money", "The money map", "schematic — bar lengths show relative importance, not measured sums",
    `<div class="mm-grid"><div class="mm-col"><h5>What flows in</h5>${flow(D.money.inflows, "in")}</div>
      <div class="mm-core" style="--c:${dossierColor(o.id)}"><span>→</span><b>${esc(o.short || o.name)}</b><span>→</span></div>
      <div class="mm-col"><h5>What flows out</h5>${flow(D.money.outflows, "out")}</div></div>`);

  add("osec-ladder", "Ladder", "The career ladder", "how a typical member rose",
    `<ol class="ladder">${D.ladder.map(s => `<li style="--c:${dossierColor(o.id)}"><b>${esc(s.stage)}</b><span>${esc(s.text)}</span></li>`).join("")}</ol>`);
  return secs;
}

function dossierRail(o, D) {
  const latest = D.phases[D.phases.length - 1];
  const peak = D.phases.slice().sort((a, b) => entrenched(b) - entrenched(a))[0];
  const meter = (label, v, c) => `<div class="sm-row"><span class="sm-name">${label}</span><span class="sm-track"><span class="sm-fill" style="width:${v}%;background:${c}"></span></span><span class="sm-val">${v}</span></div>`;
  return `<div class="rail-card"><h4>Rot now</h4><div class="sm-list">
      ${meter("Mean rot", rotMean(latest), "var(--bad)")}${meter("Leakage", latest.leakage, "var(--reg-loyalty)")}${meter("Reversibility", latest.reversibility, "var(--good)")}
    </div><p class="rail-note">Entrenched rot <b>${entrenched(latest)}</b> now; peak <b>${entrenched(peak)}</b> in “${esc(peak.name)}” (${phaseYears(peak)}).</p>
    <div class="d-actions" style="margin-top:8px"><button id="org-dcmp">↗ Compare the dossiers</button></div></div>`;
}

// the comparison mode in the Organizations view
function renderDossierCompare(body) {
  const S = state.orgs;
  const ids = Object.keys(DOSSIERS).filter(id => ORG_BY_ID[id]);
  const sel = ids.filter(id => S.dcmp.includes(id));
  const W = 640, H = 430, M = { l: 56, r: 24, t: 20, b: 48 };
  const x = v => M.l + (W - M.l - M.r) * v / 100, y = v => H - M.b - (H - M.t - M.b) * v / 100;
  let g = [0, 25, 50, 75, 100].map(v => `<line class="rz-grid" x1="${x(v)}" y1="${M.t}" x2="${x(v)}" y2="${H - M.b}"/><line class="rz-grid" x1="${M.l}" y1="${y(v)}" x2="${W - M.r}" y2="${y(v)}"/>
    <text class="rz-ytick" x="${M.l - 8}" y="${y(v) + 4}">${v}</text><text class="rz-ytick" style="text-anchor:middle" x="${x(v)}" y="${H - M.b + 16}">${v}</text>`).join("");
  const q = (tx, ty, t, a) => `<text class="sv-quad" x="${tx}" y="${ty}" style="text-anchor:${a}">${t}</text>`;
  const nowLabels = [];
  g += q(M.l + 8, M.t + 14, "CLEAN AND REMOVABLE", "start") + q(W - M.r - 8, M.t + 14, "ROTTEN BUT REMOVABLE", "end") + q(M.l + 8, H - M.b - 8, "CLEAN BUT ENTRENCHED", "start") + q(W - M.r - 8, H - M.b - 8, "ROTTEN AND ENTRENCHED", "end");
  sel.forEach(id => {
    const D = DOSSIERS[id], c = dossierColor(id), o = ORG_BY_ID[id];
    const pts = D.phases.map(ph => [x(rotMean(ph)), y(ph.reversibility)]);
    g += `<polyline points="${pts.map(p => p.join(",")).join(" ")}" fill="none" stroke="${c}" stroke-width="2" stroke-opacity="0.7"/>`;
    D.phases.forEach((ph, i) => {
      const [px, py] = pts[i], r = 4 + ph.leakage / 14;
      g += `<circle class="dc-pt" data-org="${id}" data-ph="${i}" cx="${px}" cy="${py}" r="${r}" fill="${c}" fill-opacity="${i === D.phases.length - 1 ? 1 : 0.55}" stroke="var(--bg-2)" stroke-width="1.2"/>`;
      g += `<text class="dc-lab" x="${px}" y="${py + 3.5}" text-anchor="middle">${i + 1}</text>`;
    });
    const [lx, ly] = pts[pts.length - 1];
    nowLabels.push({ lx, ly, c, text: `${o.short || o.name} now` });
  });
  // place the "now" labels so they don't sit on each other: try four offsets around each point
  const placedBoxes = [];
  nowLabels.forEach(L => {
    const w = L.text.length * 6.6;
    const tries = [[12, -10], [12, 18], [-12 - w, -10], [-12 - w, 18]];
    let [dx, dy] = tries[0];
    for (const t of tries) {
      const b = [L.lx + t[0], L.ly + t[1] - 11, L.lx + t[0] + w, L.ly + t[1] + 2];
      if (!placedBoxes.some(p => !(b[2] < p[0] || b[0] > p[2] || b[3] < p[1] || b[1] > p[3]))) { [dx, dy] = t; break; }
    }
    placedBoxes.push([L.lx + dx, L.ly + dy - 11, L.lx + dx + w, L.ly + dy + 2]);
    g += `<text class="dc-name" x="${L.lx + dx}" y="${L.ly + dy}" fill="${L.c}">${esc(L.text)}</text>`;
  });
  g += `<text class="rz-ylabel" x="${(M.l + W - M.r) / 2}" y="${H - 8}">Mean rot →</text><text class="rz-ylabel" transform="translate(14,${(M.t + H - M.b) / 2}) rotate(-90)">Reversibility →</text>`;

  const ranking = sel.map(id => { const D = DOSSIERS[id]; const peak = D.phases.slice().sort((a, b) => entrenched(b) - entrenched(a))[0]; return { id, D, peak, now: D.phases[D.phases.length - 1] }; })
    .sort((a, b) => entrenched(b.peak) - entrenched(a.peak));
  const col = id => `<th style="color:${dossierColor(id)}">${esc(ORG_BY_ID[id].short || ORG_BY_ID[id].name)}</th>`;
  const row = (label, f, cls) => `<tr class="${cls || ""}"><th class="rot-name">${label}</th>${sel.map(id => `<td>${f(DOSSIERS[id], id)}</td>`).join("")}</tr>`;
  const latest = D => D.phases[D.phases.length - 1];

  body.innerHTML = `
    <div class="cmp-summary">The deep dossiers side by side. Each line on the map is one party's history, phase by phase: left to right is how much rot it carried, bottom to top how removable that rot was, and the size of each point how far it leaked into the state. Numbers mark the phases; the solid point is now.</div>
    <div class="cv-pills" style="margin-bottom:12px"><span class="lab">Show</span>${ids.map(id => `<button class="chip ${sel.includes(id) ? "on" : ""}" data-dc="${id}" style="--era-color:${dossierColor(id)}"><span class="dot"></span>${esc(ORG_BY_ID[id].name)}</button>`).join("")}</div>
    <div class="rz-chartwrap"><svg class="sv-scatter" viewBox="0 0 ${W} ${H}" width="100%">${g}</svg></div>

    <div class="reg-head"><h3>Which was most pernicious?</h3><span class="reg-sub">ranked by peak entrenched rot — mean rot × leakage × (1 − reversibility)</span></div>
    <div class="cmp-summary">${ranking.map((r, i) => `<strong>${i + 1}. ${esc(ORG_BY_ID[r.id].short)}</strong> — peak ${entrenched(r.peak)} in “${esc(r.peak.name)}” (${phaseYears(r.peak)}), ${entrenched(r.now)} now`).join("; ")}. The construction deliberately separates how <em>much</em> rot a party carried from how <em>pernicious</em> it was: a party whose graft voters and prosecutors could remove can rank below a cleaner one whose control could not be dislodged. If you weigh graft above control, read the ledger rows rather than this single number.</div>

    <div class="reg-head"><h3>Side by side</h3><span class="reg-sub">every lens of the dossier</span></div>
    <div class="dc-table-wrap"><table class="xtab dc-table"><thead><tr><th></th>${sel.map(col).join("")}</tr></thead><tbody>
      ${row("What held it together", D => esc(D.verdict.held))}
      ${row("What made it work", D => esc(D.verdict.worked))}
      ${row("What it corroded", D => esc(D.verdict.rotted))}
      <tr class="dc-sec"><td colspan="${sel.length + 1}">The engine</td></tr>
      ${(window.ENGINE_KEYS || []).map(k => row(esc(k.name), (D, id) => `<div class="dc-meter"><span class="sm-track"><span class="sm-fill" style="width:${D.engine[k.key].score}%;background:${dossierColor(id)}"></span></span><b>${D.engine[k.key].score}</b></div>`)).join("")}
      <tr class="dc-sec"><td colspan="${sel.length + 1}">Rot now (latest phase)</td></tr>
      ${(window.ROT_TYPES || []).map(r => `<tr><th class="rot-name" title="${esc(r.def)}">${esc(r.name)}</th>${sel.map(id => heatCell(latest(DOSSIERS[id]).rot[r.key])).join("")}</tr>`).join("")}
      <tr><th class="rot-name">Leakage</th>${sel.map(id => heatCell(latest(DOSSIERS[id]).leakage)).join("")}</tr>
      <tr><th class="rot-name">Reversibility</th>${sel.map(id => heatCell(latest(DOSSIERS[id]).reversibility, true)).join("")}</tr>
      <tr class="dc-sec"><td colspan="${sel.length + 1}">The glue</td></tr>
      ${(window.GLUE_KEYS || []).map(k => row(esc(k.name), D => esc(D.glue[k.key]))).join("")}
    </tbody></table></div>`;

  body.querySelectorAll("[data-dc]").forEach(b => b.onclick = () => {
    const id = b.dataset.dc;
    S.dcmp = S.dcmp.includes(id) ? S.dcmp.filter(x => x !== id) : S.dcmp.concat(id);
    renderOrgsBody();
  });
  const tip = tipEl();
  body.querySelectorAll(".dc-pt").forEach(p => {
    const D = DOSSIERS[p.dataset.org], ph = D.phases[+p.dataset.ph], o = ORG_BY_ID[p.dataset.org];
    p.onmouseenter = () => { tip.innerHTML = `<b>${esc(o.short)} · ${esc(ph.name)}</b><div class="m">${phaseYears(ph)}</div><div class="co">rot ${rotMean(ph)} · leakage ${ph.leakage} · reversibility ${ph.reversibility} · entrenched ${entrenched(ph)}</div>`; tip.hidden = false; };
    p.onmousemove = moveTip;
    p.onmouseleave = () => { tip.hidden = true; };
    p.onclick = () => { tip.hidden = true; openOrg(p.dataset.org); };
  });
}

/* ================================================================
   PATRONAGE — 21st-century patronage systems in depth
   ================================================================ */

const PAT_CASES = window.PAT_CASES || [];
const PAT_BY_ID = Object.fromEntries(PAT_CASES.map(c => [c.id, c]));
const PAT_AXES = {
  scale: { name: "Scale", lo: "retail — individual voters", hi: "wholesale — firms, elites, sectors", color: "var(--reg-trust)" },
  centre: { name: "Network", lo: "party-centred", hi: "candidate- or leader-centred", color: "var(--reg-loyalty)" },
  coercion: { name: "Coercion", lo: "inducements only", hi: "threats, conditionality, violence", color: "var(--reg-fear)" }
};
function patCentreColor(c) { return `color-mix(in oklch, var(--reg-loyalty) ${c.centre}%, var(--reg-motivate))`; }
function patCasesForOrg(id) { return PAT_CASES.filter(c => (c.orgs || []).includes(id)); }
function patCasesForLeader(id) { return PAT_CASES.filter(c => (c.leaders || []).includes(id)); }
function openPatCase(id) { state.pat.caseId = id; state.pat.mode = "cases"; const h = "#/patronage/" + encodeURIComponent(id); if (location.hash !== h) location.hash = h; else renderPatronage(); }
function patDebatesFor(id) {
  return (window.PAT_DEBATES || []).map(d => ({ d, hits: d.answers.filter(a => a.cases.includes(id)) })).filter(x => x.hits.length);
}

function renderPatronage() {
  const S = state.pat, tb = $("#pat-toolbar"), body = $("#pat-body");
  const modes = [["cases", "Case studies"], ["anatomy", "Anatomy & debates"], ["map", "Typology"], ["rot", "Rot ledger"], ["reading", "Reading"]];
  tb.innerHTML = `<div class="seg">${modes.map(([k, label]) => `<button data-pmode="${k}" class="${S.mode === k ? "on" : ""}">${label}</button>`).join("")}</div>`;
  tb.querySelectorAll("[data-pmode]").forEach(b => b.onclick = () => { S.mode = b.dataset.pmode; S.caseId = null; if (location.hash !== "#/patronage") location.hash = "#/patronage"; else renderPatronage(); });
  $("#view-patronage .page-intro").hidden = !!(S.mode === "cases" && S.caseId);
  if (S.mode === "cases" && S.caseId && PAT_BY_ID[S.caseId]) body.innerHTML = patCaseHtml(PAT_BY_ID[S.caseId]);
  else if (S.mode === "anatomy") body.innerHTML = patAnatomyHtml();
  else if (S.mode === "map") body.innerHTML = patMapHtml();
  else if (S.mode === "rot") body.innerHTML = patRotHtml();
  else if (S.mode === "reading") body.innerHTML = patReadingHtml();
  else body.innerHTML = patGridHtml();
  body.querySelectorAll("[data-pcase]").forEach(el => el.onclick = () => openPatCase(el.dataset.pcase));
  body.querySelectorAll("[data-id]").forEach(el => el.onclick = () => openDetail(el.dataset.id));
  body.querySelectorAll("[data-org]").forEach(el => el.onclick = () => openOrg(el.dataset.org));
  body.querySelectorAll("[data-pdeb]").forEach(el => el.onclick = () => { S.mode = "anatomy"; S.caseId = null; S.focusDebate = el.dataset.pdeb; if (location.hash !== "#/patronage") location.hash = "#/patronage"; else renderPatronage(); });
  body.querySelectorAll("[data-pyax]").forEach(b => b.onclick = () => { S.yAxis = b.dataset.pyax; renderPatronage(); });
  body.querySelectorAll("[data-prot]").forEach(b => b.onclick = () => { S.rotParties = !S.rotParties; renderPatronage(); });
  body.querySelectorAll(".read-row").forEach(r => r.onclick = ev => {
    if (ev.target.dataset.shelfId) { ev.stopPropagation(); cycleShelf(ev.target.dataset.shelfId); renderPatronage(); return; }
    openBookEditor(r.dataset.book);
  });
  if ($("#pat-back")) $("#pat-back").onclick = () => { S.caseId = null; location.hash = "#/patronage"; };
  const tip = tipEl();
  body.querySelectorAll(".pat-pt").forEach(p => {
    const c = PAT_BY_ID[p.dataset.pcase];
    p.onmouseenter = () => { tip.innerHTML = `<b>${esc(c.country)}</b><div class="m">${esc(c.title)}</div><div class="co">scale ${c.scale} · network ${c.centre} · coercion ${c.coercion}</div>`; tip.hidden = false; };
    p.onmousemove = moveTip;
    p.onmouseleave = () => { tip.hidden = true; };
  });
  body.querySelectorAll(".pat-rpt").forEach(p => {
    const c = PAT_BY_ID[p.dataset.pcase], R = window.PAT_ROT[c.id];
    p.onmouseenter = () => { tip.innerHTML = `<b>${esc(c.country)}</b><div class="m">${esc(c.title)}</div><div class="co">mean rot ${rotMean(R)} · leakage ${R.leakage} · reversibility ${R.reversibility} · entrenched ${entrenched(R)}</div>`; tip.hidden = false; };
    p.onmousemove = moveTip;
    p.onmouseleave = () => { tip.hidden = true; };
  });
  body.querySelectorAll(".pat-rring").forEach(p => {
    const D = DOSSIERS[p.dataset.org], ph = D.phases[+p.dataset.ph], o = ORG_BY_ID[p.dataset.org];
    p.onmouseenter = () => { tip.innerHTML = `<b>${esc(o.short)} · ${esc(ph.name)}</b><div class="m">${phaseYears(ph)} · party dossier, peak phase</div><div class="co">mean rot ${rotMean(ph)} · leakage ${ph.leakage} · reversibility ${ph.reversibility} · entrenched ${entrenched(ph)}</div>`; tip.hidden = false; };
    p.onmousemove = moveTip;
    p.onmouseleave = () => { tip.hidden = true; };
  });
  if (S.focusDebate) {
    const el = document.getElementById("pdeb-" + S.focusDebate); S.focusDebate = null;
    if (el) { el.classList.add("flash"); requestAnimationFrame(() => el.scrollIntoView({ block: "start" })); }
  } else if (S.caseId) $("#stage").scrollTop = 0;
}

function patMeter(c, k) {
  const a = PAT_AXES[k];
  return `<div class="pat-meter" title="${esc(a.name)}: ${esc(a.lo)} (0) → ${esc(a.hi)} (100)"><span class="pm-name">${a.name}</span><span class="pm-track"><span class="pm-dot" style="left:${c[k]}%;background:${a.color}"></span></span><span class="pm-val">${c[k]}</span></div>`;
}

function patGridHtml() {
  const n = PAT_CASES.length, books = new Set(PAT_CASES.flatMap(c => c.books || [])).size;
  return `<div class="cmp-summary">${n} patronage systems of the twenty-first century, each drawn from the in-depth studies — ethnographies, field experiments, surveys and commissions — rather than from corruption rankings. Each case sets out how the exchange actually works, who brokers it, whom it targets, what particular studies found, the nuance that complicates the headline, and where it is heading. ${books} of the books cited are in the Library. The three placement meters are my estimates.</div>
    <div class="pat-legend">${Object.values(PAT_AXES).map(a => `<span><b>${a.name}</b> ${esc(a.lo)} → ${esc(a.hi)}</span>`).join("")}</div>
    <div class="pat-grid">${PAT_CASES.map(c => `<button class="pat-card" data-pcase="${c.id}" style="--c:${patCentreColor(c)}">
      <div class="pc-kicker">${esc(c.country)} <span>${esc(c.period)}</span></div>
      <h4>${esc(c.title)}</h4>
      <p>${esc(c.summary.length > 230 ? c.summary.slice(0, c.summary.lastIndexOf(" ", 225)) + "…" : c.summary)}</p>
      <div class="pat-meters">${["scale", "centre", "coercion"].map(k => patMeter(c, k)).join("")}</div>
      <div class="pc-foot">${c.evidence.length} studies · ${(c.books || []).length} books</div>
    </button>`).join("")}</div>`;
}

function patCaseHtml(c) {
  const i = PAT_CASES.indexOf(c), prev = PAT_CASES[(i - 1 + PAT_CASES.length) % PAT_CASES.length], next = PAT_CASES[(i + 1) % PAT_CASES.length];
  const dist = x => Math.abs(x.scale - c.scale) + Math.abs(x.centre - c.centre) + Math.abs(x.coercion - c.coercion);
  const near = PAT_CASES.filter(x => x !== c).sort((a, b) => dist(a) - dist(b)).slice(0, 3);
  const far = PAT_CASES.filter(x => x !== c).sort((a, b) => dist(b) - dist(a))[0];
  const books = (c.books || []).map(bookById).filter(Boolean);
  const orgs = (c.orgs || []).map(id => ORG_BY_ID[id]).filter(Boolean);
  const leaders = (c.leaders || []).map(byId).filter(Boolean);
  const debates = patDebatesFor(c.id);
  const block = (h, t) => `<div class="pat-block"><h5>${h}</h5><p>${esc(t)}</p></div>`;
  return `<button class="lp-back" id="pat-back">← All ${PAT_CASES.length} cases</button>
    <header class="pat-hero" style="--c:${patCentreColor(c)}">
      <div class="pc-kicker">${esc(c.country)} <span>${esc(c.period)}</span></div>
      <h2>${esc(c.title)}</h2>
      <p class="pat-lede">${esc(c.summary)}</p>
    </header>
    <div class="pat-case"><div class="pat-main">
      ${block("How it works", c.how)}
      <div class="pat-two">${block("Brokers", c.brokers)}${block("Who is targeted", c.targeting)}</div>
      <div class="pat-block"><h5>What the studies found</h5><ol class="pat-evidence">${c.evidence.map(e => `<li><b>${esc(e.study)}</b><span>${esc(e.finding)}</span></li>`).join("")}</ol></div>
      <div class="pat-nuance"><h5>The nuance</h5><p>${esc(c.nuance)}</p></div>
      ${block("Where it is heading", c.trajectory)}
      ${books.length ? `<div class="pat-block"><h5>Reading</h5><div class="read-list">${books.map(b => `<div class="read-row" data-book="${b.id}"><div class="rr-top"><span class="rr-title">${esc(b.title)}</span><span class="rr-author">${esc(b.author)}${b.year ? ", " + b.year : ""}</span><span class="rr-shelf">${shelfBadge(b)}</span></div></div>`).join("")}</div></div>` : ""}
      <div class="pat-pager"><button data-pcase="${prev.id}">← ${esc(prev.country)}</button><button data-pcase="${next.id}">${esc(next.country)} →</button></div>
    </div><aside class="pat-rail">
      <div class="rail-card"><h4>Placement</h4><div class="pat-meters">${["scale", "centre", "coercion"].map(k => patMeter(c, k)).join("")}</div>
        <p class="rail-note">${Object.values(PAT_AXES).map(a => `<b>${a.name}</b>: ${esc(a.lo)} → ${esc(a.hi)}`).join("<br>")}<br>My estimates, for comparison between cases — not measurements.</p></div>
      ${patRotCard(c)}
      ${debates.length ? `<div class="rail-card"><h4>Debates this case speaks to</h4><div class="rail-list">${debates.map(x => `<div class="rl-row pat-deb-link" data-pdeb="${x.d.key}"><b>${esc(x.d.q)}</b><span class="m">${x.hits.map(a => esc(a.view)).join(" · ")}</span></div>`).join("")}</div></div>` : ""}
      ${orgs.length ? `<div class="rail-card"><h4>Organizations in the atlas</h4><div class="rail-list">${orgs.map(o => `<div class="rl-row" data-org="${o.id}"><span class="org-mark sm" style="--c:${ORG_KIND_BY_KEY[o.kind].color}">${orgMark(o)}</span><b>${esc(o.short || o.name)}</b><span class="m">${esc(o.place)}</span></div>`).join("")}</div></div>` : ""}
      ${leaders.length ? `<div class="rail-card"><h4>Leaders in the atlas</h4><div class="pt-chips">${leaders.map(l => `<span class="pt-chip" data-id="${l.id}">${esc(shortName(l))}</span>`).join("")}</div></div>` : ""}
      <div class="rail-card"><h4>Nearest cases</h4><div class="rail-list">${near.map(x => `<div class="rl-row" data-pcase="${x.id}"><b>${esc(x.country)}</b><span class="m">${esc(x.title)}</span></div>`).join("")}</div>
        <p class="rail-note">Most unlike it: <a data-pcase="${far.id}">${esc(far.country)}</a>. Distance is summed over the three placements.</p></div>
    </aside></div>`;
}

function patAnatomyHtml() {
  const chips = ids => ids.map(id => PAT_BY_ID[id]).filter(Boolean).map(c => `<span class="pt-chip" data-pcase="${c.id}" style="--c:${patCentreColor(c)}">${esc(c.country)}</span>`).join("");
  return `<div class="cmp-summary">The literature's first lesson is vocabulary. "Patronage", "clientelism", "vote buying" and "pork" are used interchangeably in journalism and mean different things in research — and the differences decide whether a programme is corrupt, merely popular, or both.</div>
    <div class="pat-concepts">${(window.PAT_CONCEPTS || []).map(k => `<div class="pat-concept"><h4>${esc(k.name)}</h4><p>${esc(k.def)}</p><p class="pc-distinct">${esc(k.distinct)}</p></div>`).join("")}</div>
    <h3 class="pat-h">What the research is still arguing about</h3>
    <div class="pat-debates">${(window.PAT_DEBATES || []).map(d => `<div class="pat-debate" id="pdeb-${d.key}"><h4>${esc(d.q)}</h4>
      <div class="pd-answers">${d.answers.map(a => `<div class="pd-answer"><div class="pd-view">${esc(a.view)}</div><div class="pd-who">${esc(a.who)}</div>${a.cases.length ? `<div class="pt-chips">${chips(a.cases)}</div>` : ""}</div>`).join("")}</div></div>`).join("")}</div>
    <h3 class="pat-h">What the cases teach <small>my synthesis, not a finding</small></h3>
    <ol class="pat-lessons">
      <li><b>Contingency is the test, not targeting.</b> Rules-based transfers reward incumbents too (${chips(["mexico", "brazil"])}); what makes a benefit clientelist is that it can be withdrawn from those who vote wrong.</li>
      <li><b>Enforcement is rarely surveillance.</b> Reciprocity, self-interested jobholders, community-level rewards and simple signalling do most of the work (${chips(["argentina", "indonesia", "kenya"])}).</li>
      <li><b>Development changes the form more than the fact.</b> Retail vote buying gives way to wholesale patronage — contracts, licences, state firms and media — which is harder to see and more corrosive (${chips(["hungary", "russia", "turkey", "southafrica", "china"])}).</li>
      <li><b>Who owns the network matters.</b> Party-owned networks are disciplined and durable; candidate-owned networks are rented, leaky and expensive, and tie campaign costs to corruption in office (${chips(["argentina", "indonesia", "philippines"])}).</li>
      <li><b>Vulnerability is the fuel.</b> Where citizens gain insurance of their own — water, direct transfers, working public services — the demand for patrons falls (${chips(["brazil", "india"])}).</li>
      <li><b>Wholesale patronage erodes the institutions that could end it — but not always enough.</b> Courts, auditors, the press and voters reversed or defeated entrenched systems (${chips(["southafrica", "hungary"])}), while others still await the test.</li>
    </ol>
    <h3 class="pat-h">Articles worth knowing <small>not books, so not in the Library</small></h3>
    <ul class="pat-articles">${(window.PAT_ARTICLES || []).map(a => `<li><b>${esc(a.cite)}</b> — ${esc(a.note)}</li>`).join("")}</ul>`;
}

function patMapHtml() {
  const S = state.pat, yk = S.yAxis || "coercion", ya = PAT_AXES[yk], xa = PAT_AXES.scale;
  const W = 640, H = 440, M = { l: 52, r: 18, t: 22, b: 50 };
  const x = v => M.l + (W - M.l - M.r) * v / 100, y = v => H - M.b - (H - M.t - M.b) * v / 100;
  const grid = [0, 25, 50, 75, 100].map(v => `<line class="rz-grid" x1="${x(v)}" y1="${M.t}" x2="${x(v)}" y2="${H - M.b}"/><line class="rz-grid" x1="${M.l}" y1="${y(v)}" x2="${W - M.r}" y2="${y(v)}"/><text class="rz-ytick" style="text-anchor:middle" x="${x(v)}" y="${H - M.b + 16}">${v}</text><text class="rz-ytick" x="${M.l - 8}" y="${y(v) + 4}">${v}</text>`).join("");
  const Q = yk === "coercion"
    ? ["Coercive, retail", "Coercive, wholesale", "Inducement, retail", "Inducement, wholesale"]
    : ["Personalist, retail", "Personalist, wholesale", "Party-run, retail", "Party-run, wholesale"];
  let dots = "", labels = ""; const placed = [];
  PAT_CASES.slice().sort((a, b) => a.scale - b.scale).forEach(c => {
    const cx = x(c.scale), cy = y(c[yk]), fill = yk === "coercion" ? patCentreColor(c) : `color-mix(in oklch, var(--reg-fear) ${c.coercion}%, var(--reg-trust))`;
    dots += `<circle class="sv-pt pat-pt" data-pcase="${c.id}" cx="${cx}" cy="${cy}" r="7" style="fill:${fill}"/>`;
    const name = c.country, w = name.length * 5.8 + 4;
    const tries = [[cx + 9, cy + 3.5], [cx - 9 - w, cy + 3.5], [cx - w / 2, cy - 11], [cx - w / 2, cy + 18]];
    for (const [tx, ty] of tries) {
      const box = [tx, ty - 9, tx + w, ty + 2];
      if (box[0] < M.l || box[2] > W - 4) continue;
      if (!placed.some(p => !(box[2] < p[0] || box[0] > p[2] || box[3] < p[1] || box[1] > p[3]))) { placed.push(box); labels += `<text class="sv-lab pat-lab" x="${tx}" y="${ty}">${esc(name)}</text>`; break; }
    }
  });
  const q = (tx, ty, t, a) => `<text class="sv-quad" x="${tx}" y="${ty}" style="text-anchor:${a}">${t.toUpperCase()}</text>`;
  const svg = `<svg class="sv-scatter" viewBox="0 0 ${W} ${H}" width="100%">${grid}
    ${q(M.l + 8, M.t + 14, Q[0], "start")}${q(W - M.r - 8, M.t + 14, Q[1], "end")}${q(M.l + 8, H - M.b - 8, Q[2], "start")}${q(W - M.r - 8, H - M.b - 8, Q[3], "end")}
    <text class="rz-ylabel" x="${(M.l + W - M.r) / 2}" y="${H - 10}">${xa.name}: ${xa.lo} → ${xa.hi}</text>
    <text class="rz-ylabel" transform="translate(12,${(M.t + H - M.b) / 2}) rotate(-90)">${ya.name} →</text>${dots}${labels}</svg>`;
  // captions computed from the placements, so they cannot drift from the chart
  const quad = (hx, hy) => PAT_CASES.filter(c => (c.scale >= 50) === hx && (c[yk] >= 50) === hy);
  const names = arr => arr.length ? arr.map(c => `<a data-pcase="${c.id}">${esc(c.country)}</a>`).join(", ") : "none";
  const cells = [[false, true, Q[0]], [true, true, Q[1]], [false, false, Q[2]], [true, false, Q[3]]]
    .map(([hx, hy, label]) => `<div class="pat-quad"><b>${label}</b> <span>${quad(hx, hy).length}</span><div>${names(quad(hx, hy))}</div></div>`).join("");
  const r = (a, b) => { const n = PAT_CASES.length, ma = PAT_CASES.reduce((s, c) => s + c[a], 0) / n, mb = PAT_CASES.reduce((s, c) => s + c[b], 0) / n;
    let num = 0, da = 0, db = 0; PAT_CASES.forEach(c => { num += (c[a] - ma) * (c[b] - mb); da += (c[a] - ma) ** 2; db += (c[b] - mb) ** 2; }); return num / Math.sqrt(da * db); };
  const rv = r("scale", yk), sign = rv >= 0 ? "+" : "−";
  return `<div class="cmp-summary">Where each system sits. The horizontal axis asks whether patronage buys individual voters or whole sectors; the vertical axis switches between coercion and who owns the network. ${yk === "coercion" ? "Colour shows the network: blue party-centred, gold leader- or candidate-centred." : "Colour shows coercion: green inducement, red threat."} All placements are my estimates from the studies, so the chart organises judgement — it does not test anything.</div>
    <div class="seg" style="margin-bottom:10px"><button data-pyax="coercion" class="${yk === "coercion" ? "on" : ""}">Scale × coercion</button><button data-pyax="centre" class="${yk === "centre" ? "on" : ""}">Scale × network</button></div>
    <div class="pat-map">${svg}</div>
    <div class="pat-quads">${cells}</div>
    <p class="ch-note">Across the ${PAT_CASES.length} placements, scale and ${ya.name.toLowerCase()} correlate at r = ${sign}${Math.abs(rv).toFixed(2)} — a description of my own coding, not evidence about patronage.</p>`;
}

const ROT_SHORT = { graft: "Graft", capture: "Capture", closure: "Closure", suppression: "Suppression", feedback: "Feedback", sclerosis: "Sclerosis", succession: "Succession" };
function patRotRows() {
  const R = window.PAT_ROT || {};
  return PAT_CASES.filter(c => R[c.id]).map(c => ({ c, R: R[c.id], m: rotMean(R[c.id]), e: entrenched(R[c.id]) })).sort((x, y) => y.e - x.e);
}
function patRotCard(c) {
  const R = (window.PAT_ROT || {})[c.id];
  if (!R) return "";
  const rows = patRotRows(), rank = rows.findIndex(x => x.c.id === c.id) + 1;
  const meter = (label, v, col, tip) => `<div class="sm-row" title="${esc(tip)}"><span class="sm-name">${label}</span><span class="sm-track"><span class="sm-fill" style="width:${v}%;background:${col}"></span></span><span class="sm-val">${v}</span></div>`;
  return `<div class="rail-card"><h4>Rot ledger</h4><div class="sm-list">
    ${(window.ROT_TYPES || []).map(r => meter(ROT_SHORT[r.key] || esc(r.name), R.rot[r.key], "var(--bad)", r.def)).join("")}
    ${meter("Leakage", R.leakage, "var(--reg-fear)", (window.ROT_AXES || [])[0].def)}
    ${meter("Reversible", R.reversibility, "var(--good)", (window.ROT_AXES || [])[1].def)}
    </div><p class="rail-note"><b>Entrenched rot ${entrenched(R)}</b> — ${rank} of ${rows.length} systems here. ${esc(R.why)}<br>My estimates, for the system at its most developed within the period shown; entrenched = mean rot × leakage × (1 − reversibility).</p></div>`;
}

function patRotHtml() {
  const S = state.pat, rows = patRotRows();
  const W = 640, H = 430, M = { l: 56, r: 24, t: 20, b: 48 };
  const x = v => M.l + (W - M.l - M.r) * v / 100, y = v => H - M.b - (H - M.t - M.b) * v / 100;
  let g = [0, 25, 50, 75, 100].map(v => `<line class="rz-grid" x1="${x(v)}" y1="${M.t}" x2="${x(v)}" y2="${H - M.b}"/><line class="rz-grid" x1="${M.l}" y1="${y(v)}" x2="${W - M.r}" y2="${y(v)}"/>
    <text class="rz-ytick" x="${M.l - 8}" y="${y(v) + 4}">${v}</text><text class="rz-ytick" style="text-anchor:middle" x="${x(v)}" y="${H - M.b + 16}">${v}</text>`).join("");
  const q = (tx, ty, t, a) => `<text class="sv-quad" x="${tx}" y="${ty}" style="text-anchor:${a}">${t}</text>`;
  g += q(M.l + 8, M.t + 14, "CLEAN AND REMOVABLE", "start") + q(W - M.r - 8, M.t + 14, "ROTTEN BUT REMOVABLE", "end") + q(M.l + 8, H - M.b - 8, "CLEAN BUT ENTRENCHED", "start") + q(W - M.r - 8, H - M.b - 8, "ROTTEN AND ENTRENCHED", "end");
  const labels = []; let dots = "";
  // party dossiers, peak phase, as hollow rings on the same scale
  const parties = S.rotParties ? Object.keys(DOSSIERS).filter(id => ORG_BY_ID[id]).map(id => {
    const D = DOSSIERS[id], i = D.phases.map((ph, k) => [entrenched(ph), k]).sort((a, b) => b[0] - a[0])[0][1];
    return { id, i, ph: D.phases[i], o: ORG_BY_ID[id] };
  }) : [];
  parties.forEach(P => {
    const cx = x(rotMean(P.ph)), cy = y(P.ph.reversibility), r = 4 + P.ph.leakage / 14;
    dots += `<circle class="pat-rring" data-org="${P.id}" data-ph="${P.i}" cx="${cx}" cy="${cy}" r="${r}" fill="none" stroke="${dossierColor(P.id)}" stroke-width="2" stroke-dasharray="3 2"/>`;
    labels.push({ cx, cy, r, text: `${P.o.short || P.o.name} ${P.ph.from}–${P.ph.to >= NOW_YEAR ? "now" : P.ph.to}`, fill: dossierColor(P.id), it: true });
  });
  rows.forEach(({ c, R }) => {
    const cx = x(rotMean(R)), cy = y(R.reversibility), r = 4 + R.leakage / 14;
    dots += `<circle class="sv-pt pat-rpt" data-pcase="${c.id}" cx="${cx}" cy="${cy}" r="${r}" style="fill:${patCentreColor(c)};fill-opacity:.85"/>`;
    labels.push({ cx, cy, r, text: c.country, fill: "var(--text)" });
  });
  const placed = []; let lab = "";
  labels.forEach(L => {
    const w = L.text.length * 5.9 + 4, off = L.r + 3;
    const tries = [[off, 3.5], [-off - w, 3.5], [-w / 2, -off - 3], [-w / 2, off + 10], [off, -off], [-off - w, -off]];
    for (const [dx, dy] of tries) {
      const tx = L.cx + dx, ty = L.cy + dy, b = [tx, ty - 9, tx + w, ty + 2];
      if (b[0] < M.l - 2 || b[2] > W - 2 || b[1] < 2 || b[3] > H - M.b + 4) continue;
      if (!placed.some(p => !(b[2] < p[0] || b[0] > p[2] || b[3] < p[1] || b[1] > p[3]))) { placed.push(b); lab += `<text class="sv-lab pat-lab" x="${tx}" y="${ty}" style="fill:${L.fill};${L.it ? "font-style:italic" : ""}">${esc(L.text)}</text>`; break; }
    }
  });
  const svg = `<svg class="sv-scatter" viewBox="0 0 ${W} ${H}" width="100%">${g}
    <text class="rz-ylabel" x="${(M.l + W - M.r) / 2}" y="${H - 8}">Mean rot →</text><text class="rz-ylabel" transform="translate(14,${(M.t + H - M.b) / 2}) rotate(-90)">Reversibility →</text>${dots}${lab}</svg>`;

  // captions computed from the scores
  const corner = rows.filter(r => r.m >= 50 && r.R.reversibility < 50), clean = rows.filter(r => r.m < 50 && r.R.reversibility >= 50);
  const names = arr => arr.length ? arr.map(r => `<a data-pcase="${r.c.id}">${esc(r.c.country)}</a>`).join(", ") : "none";
  const top = rows.slice(0, 3), bottom = rows.slice(-3).reverse();
  const partyRank = parties.slice().sort((a, b) => entrenched(b.ph) - entrenched(a.ph));
  const table = `<div class="dc-table-wrap"><table class="rot-table pat-rtable"><thead><tr><th></th>${(window.ROT_TYPES || []).map(r => `<th title="${esc(r.def)}">${ROT_SHORT[r.key] || esc(r.name)}</th>`).join("")}<th>Leakage</th><th>Reversible</th><th>Entrenched</th></tr></thead><tbody>
    ${rows.map(({ c, R, e }) => `<tr class="pat-rrow" data-pcase="${c.id}"><th class="rot-name">${esc(c.country)}</th>${(window.ROT_TYPES || []).map(r => heatCell(R.rot[r.key])).join("")}${heatCell(R.leakage)}${heatCell(R.reversibility, true)}${heatCell(e)}</tr>`).join("")}
    </tbody></table></div>`;
  return `<div class="cmp-summary">The party dossiers ask how rotten a machine got and how hard it was to remove. This page asks the same of each patronage system, on the same seven kinds of decay and the same two axes. Left to right is how much rot the system carried, bottom to top how removable it was, and the size of each point how far it leaked into the state and economy. <strong>All scores are my estimates</strong>; each case page says what drove them, and a different reader would move several by 10–15 points. Colour runs from blue (party-centred network) to gold (leader- or candidate-centred), as on the Typology tab.</div>
    <div class="seg" style="margin-bottom:10px"><button data-prot="1" class="${S.rotParties ? "on" : ""}">Party peaks from the dossiers: ${S.rotParties ? "shown" : "hidden"}</button></div>
    <div class="pat-map">${svg}</div>
    <div class="cmp-summary" style="margin-top:12px"><strong>Most entrenched:</strong> ${top.map(r => `<a data-pcase="${r.c.id}">${esc(r.c.country)}</a> (${r.e})`).join(", ")}. <strong>Least:</strong> ${bottom.map(r => `<a data-pcase="${r.c.id}">${esc(r.c.country)}</a> (${r.e})`).join(", ")}. In the rotten-and-entrenched corner (mean rot 50 or more, reversibility under 50): ${names(corner)}. Clean and removable (mean rot under 50, reversibility 50 or more): ${names(clean)}.${partyRank.length ? ` The hollow rings are the party dossiers at their peak entrenched phase, ranked ${partyRank.map(P => `${esc(P.o.short || P.o.name)} ${entrenched(P.ph)}`).join(", ")} — the same formula.` : ""}</div>
    <p class="ch-note">Read across the two sets with care: a party dossier scores one organisation in five historical phases, while these score a whole system of exchange, at one moment, in the period shown. Entrenched rot is mean rot × leakage × (1 − reversibility) — my construction.</p>
    ${table}`;
}

function patReadingHtml() {
  const row = b => `<div class="read-row" data-book="${b.id}"><div class="rr-top"><span class="rr-title">${esc(b.title)}</span><span class="rr-author">${esc(b.author)}${b.year ? ", " + b.year : ""}</span><span class="rr-shelf">${shelfBadge(b)}</span></div>${b.note ? `<div class="rr-note">${esc(b.note)}</div>` : ""}</div>`;
  const general = (window.PAT_GENERAL || []).map(bookById).filter(Boolean);
  const seen = new Set(general.map(b => b.id));
  const byCase = PAT_CASES.map(c => ({ c, books: (c.books || []).filter(id => !seen.has(id) && (seen.add(id), true)).map(bookById).filter(Boolean) })).filter(x => x.books.length);
  return `<div class="cmp-summary">Start with the frameworks, then read the case that interests you most. Ethnographies (Auyero), field experiments and surveys (Stokes, Nichter, Mares &amp; Young) and elite studies (Hale, Magyar) answer different questions; the richest picture comes from pairing one of each.</div>
    <h3 class="pat-h">Frameworks</h3><div class="read-list">${general.map(row).join("")}</div>
    ${byCase.map(x => `<h3 class="pat-h"><a data-pcase="${x.c.id}">${esc(x.c.country)}</a> <small>${esc(x.c.title)}</small></h3><div class="read-list">${x.books.map(row).join("")}</div>`).join("")}`;
}

/* ================================================================
   PRACTICES — the blocking and tackling
   ================================================================ */

const PRACTICES = window.PRACTICES || {};
const PRAC_CAT = Object.fromEntries((window.PRACTICE_CATS || []).map(c => [c.key, c]));
const PRAC_TEMPLATE = `## Practice: [short name]
Leader:
Category: network | patrons | intelligence | persuasion | preparation | energy & routine | machinery
Career stage (years):

What they actually did:
How often / how much (the number, if there is one):
Why it worked (the link to their success):
What it cost them, or others:
Who credits it: they did / witnesses / a biographer
Evidence grade: documented / reported / legend
Source (book, page):

How I would use it:`;

// a practices subject may be outside the leader index (an operator, not a principal)
function pracPerson(id) {
  const l = byId(id); if (l) return l;
  const P = PRACTICES[id]; if (!P || !P.person) return null;
  return Object.assign({ id, ext: true }, P.person);
}
function openPractices(leader, pid) {
  if (leader && PRACTICES[leader]) { state.prac.leader = leader; state.prac.mode = "leader"; }
  state.prac.focus = pid || null;
  const h = "#/practices" + (leader ? "/" + encodeURIComponent(leader) : "");
  if (location.hash !== h) location.hash = h; else renderPractices();
}

function pracBadges(p) {
  const g = (window.PRACTICE_GRADES || {})[p.grade] || { name: p.grade, def: "" };
  return `<span class="pr-grade ${p.grade}" title="${esc(g.def)}">${esc(g.name)}</span>` +
    (p.attrib || []).map(a => `<span class="pr-attrib ${a}">${esc((window.PRACTICE_ATTRIB || {})[a] || a)}</span>`).join("");
}

function pracCard(p) {
  const row = (label, txt, cls) => txt ? `<div class="pr-row ${cls || ""}"><span class="k">${label}</span><p>${esc(txt)}</p></div>` : "";
  return `<article class="pr-card" id="pr-${p.id}">
    <div class="pr-top"><h4>${esc(p.name)}</h4><span class="pr-stage">${esc(p.stage)}</span></div>
    <div class="pr-badges">${pracBadges(p)}${p.volume ? `<span class="pr-vol">${esc(p.volume)}</span>` : ""}</div>
    <p class="pr-what">${esc(p.what)}</p>
    ${row("Why it worked", p.mechanism)}
    ${row("What it cost", p.cost, "cost")}
    ${row("Try it", p.tryit, "try")}
    <div class="pr-src">Source: ${esc(p.source)}</div>
  </article>`;
}

// practice subjects in index order (by era, then start), operators outside the index last
function pracIds() {
  const inIndex = window.ALL_LEADERS.filter(l => PRACTICES[l.id]).map(l => l.id);
  return inIndex.concat(Object.keys(PRACTICES).filter(id => !byId(id) && pracPerson(id)));
}
function pracSelect(domId, current, placeholder) {
  const ids = pracIds(), groups = {};
  ids.forEach(id => { const p = pracPerson(id), k = p.ext ? "ext" : p.era; (groups[k] = groups[k] || []).push(p); });
  const label = k => k === "ext" ? "Outside the leader index" : (ERA_BY_KEY[k] || {}).label || k;
  const order = ERAS.map(e => e.key).concat("ext").filter(k => groups[k]);
  return `<select id="${domId}" class="pr-select">${placeholder ? `<option value="">${esc(placeholder)}</option>` : ""}${order.map(k => `<optgroup label="${esc(label(k))}">${groups[k].map(p => `<option value="${p.id}" ${p.id === current ? "selected" : ""}>${esc(p.name)}</option>`).join("")}</optgroup>`).join("")}</select>`;
}
// every practice across every subject, for the browse mode
function pracAll() {
  return pracIds().flatMap(id => PRACTICES[id].practices.map(p => ({ id, p, person: pracPerson(id) })));
}
function pracBrowseHtml() {
  const S = state.prac, all = pracAll(), q = S.bq.trim().toLowerCase();
  const eraOf = r => r.person.ext ? "ext" : r.person.era;
  const pass = r => (S.bcat === "all" || r.p.cat === S.bcat) && (S.bgrade === "all" || r.p.grade === S.bgrade) && (!S.bself || (r.p.attrib || []).includes("self")) && (S.bera === "all" || eraOf(r) === S.bera) &&
    (!q || [r.p.name, r.p.what, r.p.mechanism, r.p.tryit, r.person.name].join(" ").toLowerCase().includes(q));
  const shown = all.filter(pass);
  const cats = window.PRACTICE_CATS || [];
  const eras = ERAS.map(e => e.key).concat("ext").filter(k => all.some(r => eraOf(r) === k));
  const chip = (attr, val, cur, label, n) => `<button class="chip ${cur === val ? "on" : ""}" data-${attr}="${val}">${esc(label)}${n != null ? ` <span style="opacity:.6">${n}</span>` : ""}</button>`;
  return `<div class="cmp-summary">All ${all.length} practices across ${pracIds().length} people, filterable. Use it to ask one question of everyone — who managed their sleep, who kept a card file, who learned from a defeat.</div>
    <div class="pr-browse-bar">
      <input type="search" id="pr-bq" class="tb-search" placeholder="Search practices — 'sleep', 'letters', 'notes', 'radio'…" value="${esc(S.bq)}">
      <label class="pr-toggle"><input type="checkbox" id="pr-bself" ${S.bself ? "checked" : ""}> Only what they credited themselves</label>
    </div>
    <div class="cv-pills"><span class="lab">Category</span>${chip("bcat", "all", S.bcat, "All", all.length)}${cats.map(c => chip("bcat", c.key, S.bcat, c.name, all.filter(r => r.p.cat === c.key).length)).join("")}</div>
    <div class="cv-pills"><span class="lab">Evidence</span>${chip("bgrade", "all", S.bgrade, "Any")}${Object.entries(window.PRACTICE_GRADES || {}).map(([k, g]) => chip("bgrade", k, S.bgrade, g.name, all.filter(r => r.p.grade === k).length)).join("")}</div>
    <div class="cv-pills"><span class="lab">Era</span>${chip("bera", "all", S.bera, "All")}${eras.map(k => chip("bera", k, S.bera, k === "ext" ? "Outside the index" : (ERA_BY_KEY[k] || {}).label || k)).join("")}</div>
    <p class="ch-note">${shown.length} shown.</p>
    <div class="pr-rows">${shown.map(r => `<div class="pr-brow" data-pjump="${r.id}:${r.p.id}">
      <div class="pr-brow-who">${avatarMarkup(r.person, "sm")}<b>${esc(shortName(r.person))}</b></div>
      <div class="pr-brow-main"><div class="pr-brow-top"><span class="pr-brow-name">${esc(r.p.name)}</span><span class="pr-brow-cat">${esc((PRAC_CAT[r.p.cat] || {}).name || r.p.cat)}</span>${pracBadges(r.p)}</div>
      <p>${esc(r.p.what.length > 230 ? r.p.what.slice(0, r.p.what.lastIndexOf(" ", 225)) + "…" : r.p.what)}</p></div>
    </div>`).join("") || `<p class="pr-none">Nothing matches.</p>`}</div>`;
}
function pracBrowseWire(body) {
  const S = state.prac;
  const q = $("#pr-bq");
  if (q) { q.oninput = e => { S.bq = e.target.value; const pos = e.target.selectionStart; renderPractices(); const n = $("#pr-bq"); n.focus(); n.setSelectionRange(pos, pos); }; }
  if ($("#pr-bself")) $("#pr-bself").onchange = e => { S.bself = e.target.checked; renderPractices(); };
  body.querySelectorAll("[data-bcat]").forEach(b => b.onclick = () => { S.bcat = b.dataset.bcat; renderPractices(); });
  body.querySelectorAll("[data-bgrade]").forEach(b => b.onclick = () => { S.bgrade = b.dataset.bgrade; renderPractices(); });
  body.querySelectorAll("[data-bera]").forEach(b => b.onclick = () => { S.bera = b.dataset.bera; renderPractices(); });
}

function renderPractices() {
  const S = state.prac, tb = $("#prac-toolbar"), body = $("#prac-body");
  const ids = pracIds();
  if (!PRACTICES[S.leader]) S.leader = ids[0];
  const i = ids.indexOf(S.leader);
  tb.innerHTML = `<div class="seg">${[["leader", "One leader"], ["browse", "Browse all"], ["compare", "Compare"], ["template", "The template"]].map(([k, l]) => `<button data-prm="${k}" class="${S.mode === k ? "on" : ""}">${l}</button>`).join("")}</div>
    ${S.mode === "leader" ? `<div class="pr-picker"><button class="chip" data-prstep="-1" aria-label="Previous">←</button>${pracSelect("pr-pick", S.leader)}<button class="chip" data-prstep="1" aria-label="Next">→</button><span class="pr-count">${i + 1} of ${ids.length}</span></div>` : ""}`;
  if ($("#pr-pick")) $("#pr-pick").onchange = e => openPractices(e.target.value);
  tb.querySelectorAll("[data-prstep]").forEach(b => b.onclick = () => openPractices(ids[(i + +b.dataset.prstep + ids.length) % ids.length]));
  tb.querySelectorAll("[data-prm]").forEach(b => b.onclick = () => { S.mode = b.dataset.prm; if (location.hash !== "#/practices") location.hash = "#/practices"; else renderPractices(); });
  if (S.mode === "compare") body.innerHTML = pracCompareHtml(S.cmp.filter(id => PRACTICES[id] && pracPerson(id)));
  else if (S.mode === "browse") { body.innerHTML = pracBrowseHtml(); pracBrowseWire(body); }
  else if (S.mode === "template") body.innerHTML = pracTemplateHtml();
  else body.innerHTML = pracLeaderHtml(S.leader);
  body.querySelectorAll("[data-id]").forEach(el => el.onclick = () => openDetail(el.dataset.id));
  body.querySelectorAll("[data-pjump]").forEach(el => el.onclick = () => { const [lid, pid] = el.dataset.pjump.split(":"); openPractices(lid, pid); });
  body.querySelectorAll("[data-prcat]").forEach(b => b.onclick = () => { S.cat = b.dataset.prcat; renderPractices(); });
  body.querySelectorAll("[data-prdel]").forEach(b => b.onclick = () => { S.cmp = S.cmp.filter(x => x !== b.dataset.prdel); renderPractices(); });
  if ($("#pr-add")) $("#pr-add").onchange = e => { if (e.target.value && !S.cmp.includes(e.target.value)) S.cmp = S.cmp.concat(e.target.value).slice(-6); renderPractices(); };
  body.querySelectorAll(".read-row").forEach(r => r.onclick = ev => {
    if (ev.target.dataset.shelfId) { ev.stopPropagation(); cycleShelf(ev.target.dataset.shelfId); renderPractices(); return; }
    openBookEditor(r.dataset.book);
  });
  if ($("#pr-copy")) $("#pr-copy").onclick = () => {
    const t = $("#pr-template"); t.select();
    (navigator.clipboard ? navigator.clipboard.writeText(t.value) : Promise.reject()).then(() => { $("#pr-copy").textContent = "Copied"; }, () => { document.execCommand("copy"); $("#pr-copy").textContent = "Copied"; });
  };
  if (S.focus) {
    const el = document.getElementById("pr-" + S.focus); S.focus = null;
    if (el) { el.classList.add("flash"); requestAnimationFrame(() => el.scrollIntoView({ block: "start" })); }
  }
}

function pracLeaderHtml(id) {
  const P = PRACTICES[id], l = pracPerson(id), S = state.prac;
  const cats = (window.PRACTICE_CATS || []).filter(c => P.practices.some(p => p.cat === c.key));
  const shown = cats.filter(c => S.cat === "all" || S.cat === c.key);
  const books = (P.books || []).map(bookById).filter(Boolean);
  const nSelf = P.practices.filter(p => (p.attrib || []).includes("self")).length;
  return `<header class="pr-hero" style="--era-color:${eraColor(l)}">
      <div class="pr-hero-who" ${l.ext ? "" : `data-id="${l.id}"`}>${avatarMarkup(l)}<div><b>${esc(l.name)}</b><span>${esc(l.title)} · ${esc(l.years)}${l.ext ? " · not in the leader index" : ""}</span></div></div>
      <p class="pr-one">${esc(P.oneLine)}</p>
      <div class="pr-stats"><span><b>${P.practices.length}</b> practices</span><span><b>${nSelf}</b> that they credited themselves</span><span><b>${P.practices.filter(p => p.grade === "documented").length}</b> documented</span></div>
    </header>
    <div class="pr-top-grid">
      <div class="pr-panel"><h5>In their own words</h5>${(P.ownWords || []).length ? "" : `<p class="pr-note">No first-person statement about these habits could be verified, so none is quoted.</p>`}${(P.ownWords || []).map(q => q.para ? `<p class="pr-para"><span class="pr-tag">Paraphrase</span>${esc(q.text)}<cite>${esc(q.src)}</cite></p>` : `<blockquote class="pr-quote">“${esc(q.text)}”<cite>${esc(q.src)}</cite></blockquote>`).join("")}</div>
      <div class="pr-panel"><h5>Operating rhythm</h5><ol class="pr-rhythm">${(P.rhythm || []).map(r => `<li><span class="t">${esc(r.t)}</span><span class="d">${esc(r.d)}</span></li>`).join("")}</ol><p class="pr-note">${esc(P.rhythmSrc)}</p></div>
    </div>
    <div class="cv-pills pr-cats"><span class="lab">Show</span><button class="chip ${S.cat === "all" ? "on" : ""}" data-prcat="all">All <span style="opacity:.6">${P.practices.length}</span></button>${cats.map(c => `<button class="chip ${S.cat === c.key ? "on" : ""}" data-prcat="${c.key}">${esc(c.name)} <span style="opacity:.6">${P.practices.filter(p => p.cat === c.key).length}</span></button>`).join("")}</div>
    ${shown.map(c => `<section class="pr-sec"><h3 class="pat-h">${esc(c.name)} <small>${esc(c.q)}</small></h3><div class="pr-grid">${P.practices.filter(p => p.cat === c.key).map(pracCard).join("")}</div></section>`).join("")}
    ${books.length ? `<h3 class="pat-h">Sources</h3><div class="read-list">${books.map(b => `<div class="read-row" data-book="${b.id}"><div class="rr-top"><span class="rr-title">${esc(b.title)}</span><span class="rr-author">${esc(b.author)}${b.year ? ", " + b.year : ""}</span><span class="rr-shelf">${shelfBadge(b)}</span></div>${b.note ? `<div class="rr-note">${esc(b.note)}</div>` : ""}</div>`).join("")}</div>` : ""}`;
}

function pracCompareHtml(ids) {
  const cats = window.PRACTICE_CATS || [];
  const cell = (id, c) => PRACTICES[id].practices.filter(p => p.cat === c.key).map(p => `<button class="pr-chipbtn" data-pjump="${id}:${p.id}" title="${esc(p.what)}">${esc(p.name)}${(p.attrib || []).includes("self") ? ' <span class="pr-self" title="They credited it themselves">●</span>' : ""}</button>`).join("") || `<span class="pr-none">—</span>`;
  return `<div class="cmp-summary">Up to six people side by side, by category. A filled dot marks a practice the leader credited themselves; the rest come from witnesses and biographers. Click any practice to read it.</div>
    <div class="pr-cmp-pick">${ids.map(id => `<span class="pr-cmp-chip">${esc(shortName(pracPerson(id)))}<button data-prdel="${id}" aria-label="Remove">×</button></span>`).join("")}${ids.length < 6 ? pracSelect("pr-add", "", "Add someone…") : ""}</div>
    <div class="dc-table-wrap"><table class="xtab pr-table"><thead><tr><th></th>${ids.map(id => `<th>${byId(id) ? `<a data-id="${id}">${esc(shortName(byId(id)))}</a>` : esc(shortName(pracPerson(id)))}</th>`).join("")}</tr></thead><tbody>
      ${cats.map(c => `<tr><th class="rot-name" title="${esc(c.q)}">${esc(c.name)}</th>${ids.map(id => `<td>${cell(id, c)}</td>`).join("")}</tr>`).join("")}
    </tbody></table></div>
    <h3 class="pat-h">Patterns across the worked examples <small>my synthesis, drawn from Johnson, Clinton, Baker, Churchill and Napoleon — not a finding</small></h3>
    <div class="pr-patterns">${(window.PRACTICE_PATTERNS || []).map(p => `<div class="pat-concept"><h4>${esc(p.name)}</h4><p>${esc(p.text)}</p></div>`).join("")}</div>`;
}

function pracTemplateHtml() {
  const G = window.PRACTICE_GRADES || {}, A = window.PRACTICE_ATTRIB || {};
  const fields = [["What they actually did", "The concrete behaviour, not the trait. 'Called donors' is a habit; 'charismatic' is not."], ["How often / how much", "The number, if there is one: calls a day, cards in the file, hours slept."], ["Career stage", "When it mattered. Many practices belong to the climb and fade once someone has power."], ["Why it worked", "The causal link to their success — my reading or the source's, said plainly."], ["What it cost", "Every practice here had a price: health, sleep, staff, relationships, reputation."], ["Who credits it", "They did, witnesses did, or a biographer infers it. Self-credit is the most quoted and the least neutral."], ["Evidence grade", "How solid the account is (below). Self-help writing about famous people is full of legends."], ["Try it", "The transferable version for someone building a practice today."]];
  return `<div class="cmp-summary">The template behind every entry, so you can fill it from your own reading — Churchill's rehearsed rhetoric, Ari Emanuel's calls, whoever you are reading next. The seven categories are the questions to ask of any biography.</div>
    <div class="pr-top-grid">
      <div class="pr-panel"><h5>Seven questions to ask of any biography</h5><ol class="pr-qs">${(window.PRACTICE_CATS || []).map(c => `<li><b>${esc(c.name)}.</b> ${esc(c.q)}</li>`).join("")}</ol></div>
      <div class="pr-panel"><h5>Each entry records</h5><dl class="pr-fields">${fields.map(([k, v]) => `<dt>${k}</dt><dd>${v}</dd>`).join("")}</dl></div>
    </div>
    <div class="pr-top-grid">
      <div class="pr-panel"><h5>Evidence grades</h5>${Object.entries(G).map(([k, g]) => `<p class="pr-def"><span class="pr-grade ${k}">${esc(g.name)}</span> ${esc(g.def)}</p>`).join("")}<h5 style="margin-top:12px">Who credits it</h5>${Object.entries(A).map(([k, a]) => `<p class="pr-def"><span class="pr-attrib ${k}">${esc(a)}</span></p>`).join("")}</div>
      <div class="pr-panel"><h5>Capture template <button class="pr-copybtn" id="pr-copy">Copy</button></h5><textarea id="pr-template" class="pr-template" readonly>${esc(PRAC_TEMPLATE)}</textarea><p class="pr-note">Paste it into your notes while you read; send the filled entries back and they can be added here.</p></div>
    </div>`;
}

// the Practices block on a leader profile
function practicesProfileHtml(l) {
  const P = PRACTICES[l.id];
  if (!P) return "";
  const cats = (window.PRACTICE_CATS || []).filter(c => P.practices.some(p => p.cat === c.key));
  return `<p class="pr-one" style="margin-top:0">${esc(P.oneLine)}</p>
    <div class="pr-mini">${cats.map(c => `<div><h5>${esc(c.name)}</h5>${P.practices.filter(p => p.cat === c.key).map(p => `<a data-prac="${l.id}" data-pid="${p.id}">${esc(p.name)}</a>`).join("")}</div>`).join("")}</div>
    <button class="chip action" data-prac="${l.id}">Open all ${P.practices.length} practices →</button>`;
}

/* ================================================================
   GLOSSARY — hover definitions for terms of art
   ================================================================ */
// Gathered at load from every framework file that carries definitions, plus
// data/glossary.js for the rest. Multi-word or distinctive terms are marked in
// running text (first use per page); ordinary single words (Graft, Network…) are
// marked only where they stand alone as a label.

const GL = new Map();   // normalised term -> { key, term, senses: [{ src, def, main, hide }], prose, cs }
const glNorm = s => String(s).toLowerCase().replace(/[’‘]/g, "'").replace(/\s+/g, " ").trim();
function glAdd(term, def, src, opts) {
  opts = opts || {};
  if (!term || !def) return;
  [term].concat(opts.aliases || []).flatMap(n => String(n).replace(/\(s\)/g, "").split(/\s+\/\s+/)).forEach(n => {
    n = n.trim();
    const k = glNorm(n);
    if (k.length < 3) return;
    let e = GL.get(k);
    if (!e) { e = { key: k, term: n, senses: [], prose: false, cs: !!opts.cs }; GL.set(k, e); }
    if (!e.senses.some(s => s.def === def)) e.senses.push({ src, def, main: glNorm(term) === k ? null : String(term).trim(), hide: !!opts.hide });
    if (opts.prose === true || (/[\s-]/.test(n) && opts.prose !== false)) e.prose = true;
  });
}
const PAT_GL_OPTS = {
  patronage: { prose: false }, clientelism: { prose: true }, brokers: { prose: false }, neopatrimonialism: { prose: true },
  votebuying: { aliases: ["vote buying", "turnout buying", "abstention buying"] },
  pork: { aliases: ["pork-barrel"] },
  capture: { aliases: ["state capture", "wholesale patronage"] }
};
function glBuild() {
  GL.clear();
  const W = window;
  (W.RUBENZER_FACETS || []).forEach(f => {
    glAdd(f.name, f.def, "Rubenzer facet" + (f.neo ? " · " + f.neo : ""));
    if (f.short) glAdd(f.short, f.def, "Rubenzer facet — " + f.name, { prose: false, hide: true });
  });
  (W.SIMONTON_STYLES || []).forEach(s => glAdd(s.name, s.def, "Simonton leadership style"));
  (W.LTA_TRAITS || []).forEach(t => { glAdd(t.name, t.def, "Hermann trait"); glAdd(t.short, t.def, "Hermann trait — " + t.name, { prose: false, hide: true }); });
  (W.LTA_STYLES || []).forEach(s => glAdd(s.name, s.def, "Hermann style", { prose: false }));
  (W.TIME_TYPES || []).forEach(t => glAdd(t.name, (t.posture ? t.posture + ". " : "") + t.def, "Skowronek: political time", { prose: false }));
  Object.values(W.SVOLIK_SHARING || {}).forEach(s => glAdd(s.name, s.def, "Svolik: power-sharing"));
  Object.values(W.SVOLIK_ARMY || {}).forEach(s => glAdd(s.name, s.def, "Svolik: the army's role", { prose: false }));
  (W.OLSON_TYPES || []).forEach(t => glAdd(t.name, t.def, "Olson"));
  Object.values(W.OLSON_DC || {}).forEach(d => glAdd(d.label, d.def, "Olson: distributional coalitions", { prose: false }));
  (W.ORG_KINDS || []).forEach(k => glAdd(k.name, k.def, "Organization type", { prose: false }));
  (W.ROT_TYPES || []).forEach(r => {
    glAdd(r.name, r.def, "Rot ledger");
    if (typeof ROT_SHORT !== "undefined" && ROT_SHORT[r.key] && ROT_SHORT[r.key] !== r.name) glAdd(ROT_SHORT[r.key], r.def, "Rot ledger — " + r.name, { prose: false, hide: true });
  });
  (W.ROT_AXES || []).forEach(a => glAdd(a.name, a.def, "Rot ledger", a.key === "reversibility" ? { aliases: ["Reversible"] } : {}));
  (W.ENGINE_KEYS || []).forEach(k => glAdd(k.name, k.def, "Dossier engine"));
  (W.PAT_CONCEPTS || []).forEach(c => glAdd(c.name, c.def + (c.distinct ? " " + c.distinct : ""), "Patronage", PAT_GL_OPTS[c.key] || {}));
  if (typeof PAT_AXES !== "undefined") Object.values(PAT_AXES).forEach(a => glAdd(a.name, `0 = ${a.lo}; 100 = ${a.hi}.`, "Patronage placement", { prose: false }));
  Object.values(W.PRACTICE_GRADES || {}).forEach(g => glAdd(g.name, g.def, "Practices: evidence grade", { prose: false }));
  (W.PRACTICE_CATS || []).forEach(c => glAdd(c.name, c.q, "Practices category", { prose: false }));
  (W.TRAIT_SECTIONS || []).forEach(s => s.traits.filter(t => t.def).forEach(t => glAdd(t.name, t.def, "Concept · " + s.title, t.key ? {} : { prose: false })));
  (W.INSTRUMENTS || []).forEach(i => glAdd(i.name, i.def, "Carrots & sticks · " + ((REG_BY_KEY[i.reg] || {}).label || i.reg), { prose: false }));
  const RH_PROSE = { anaphora: 1, epistrophe: 1, tricolon: 1, antithesis: 1, chiasmus: 1, kairos: 1, ethos: 1, pathos: 1, soundbite: 1 };
  (W.RHET_TOOLKIT || []).forEach(g => g.terms.forEach(t => glAdd(t.term, t.def, "Rhetoric · " + g.group, /\s|-/.test(t.term) ? {} : { prose: !!RH_PROSE[t.term.toLowerCase()] })));
  (W.RHET_STYLES || []).forEach(s => glAdd(s.name, s.def, "Communication style", { prose: false }));
  (W.GLOSSARY_EXTRA || []).forEach(g => glAdd(g.term, g.def, g.src, g));
  glCompile();
}
let GL_RE = null, GL_RE_CS = null;
function glCompile() {
  const pat = k => k.replace(/[.*+?^${}()|[\]\\]/g, "\\$&").replace(/ /g, "\\s+");
  const all = [...GL.values()].filter(e => e.prose);
  const mk = (arr, fl) => arr.length ? new RegExp("(^|[^\\p{L}\\p{N}-])(" + arr.sort((a, b) => b.length - a.length).map(pat).join("|") + ")(?![\\p{L}\\p{N}])", fl) : null;
  GL_RE = mk(all.filter(e => !e.cs).map(e => e.key), "giu");
  GL_RE_CS = mk(all.filter(e => e.cs).map(e => e.term), "gu");
}
const GL_SKIP_TAGS = /^(SCRIPT|STYLE|TEXTAREA|INPUT|SELECT|OPTION|CODE|PRE|A|LABEL)$/;
function glSkip(el) {
  for (let n = el; n && n.nodeType === 1; n = n.parentElement) {
    if (GL_SKIP_TAGS.test(n.tagName) || n.namespaceURI === "http://www.w3.org/2000/svg" || n.isContentEditable) return true;
    if (n.classList.contains("gl") || n.classList.contains("gl-off")) return true;
    if (n.classList.contains("view")) return false;
  }
  return false;
}
function glSpan(e, text) { const s = document.createElement("span"); s.className = "gl"; s.dataset.gl = e.key; s.tabIndex = 0; s.textContent = text; return s; }
function glossify(root) {
  if (!root || !GL.size) return;
  const used = new Set([...root.querySelectorAll(".gl")].map(g => g.dataset.gl));
  const labelCount = {};
  root.querySelectorAll(".gl").forEach(g => { labelCount[g.dataset.gl] = (labelCount[g.dataset.gl] || 0) + 1; });
  const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, {
    acceptNode: n => n.nodeValue.trim().length > 2 && !glSkip(n.parentElement) ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_REJECT
  });
  const nodes = [];
  while (walker.nextNode()) nodes.push(walker.currentNode);
  nodes.forEach(node => {
    const raw = node.nodeValue, t = raw.trim();
    // a label: the whole text is a term (allowing a trailing count); at most 8 per term per page
    if (t.length <= 48) {
      const e = GL.get(glNorm(t.replace(/\s*[\d.,]+\s*%?$/, "").replace(/[\s:·•–—]+$/, "")));
      if (e) {
        if ((labelCount[e.key] = (labelCount[e.key] || 0) + 1) > 8) return;
        const i = raw.indexOf(t); node.replaceWith(raw.slice(0, i), glSpan(e, t), raw.slice(i + t.length)); return;
      }
    }
    if (node.parentElement.closest("button")) return;   // inside controls, only whole-label terms
    // running text: first use of each distinctive term on the page
    const hits = [];
    [GL_RE, GL_RE_CS].forEach(re => {
      if (!re) return;
      re.lastIndex = 0;
      let m;
      while ((m = re.exec(raw))) { const start = m.index + m[1].length; hits.push({ start, end: start + m[2].length, k: glNorm(m[2]) }); }
    });
    if (!hits.length) return;
    hits.sort((a, b) => a.start - b.start);
    const frag = document.createDocumentFragment();
    let pos = 0, any = false;
    hits.forEach(h => {
      const e = GL.get(h.k);
      if (!e || h.start < pos || used.has(h.k)) return;
      used.add(h.k); any = true;
      frag.append(raw.slice(pos, h.start), glSpan(e, raw.slice(h.start, h.end)));
      pos = h.end;
    });
    if (!any) return;
    frag.append(raw.slice(pos));
    node.replaceWith(frag);
  });
}
function glTipHtml(e) {
  const senses = e.senses.slice(0, 3);
  return `<b>${esc(e.term)}</b>` + senses.map(s => `<div class="gl-sense"><span class="gl-src">${esc(s.src)}</span>${esc(s.def)}</div>`).join("") +
    (e.senses.length > 3 ? `<div class="gl-more">+${e.senses.length - 3} more senses in the Glossary</div>` : "");
}
function glShow(el, x, y) {
  const e = GL.get(el.dataset.gl); if (!e) return;
  const tip = tipEl(); tip.innerHTML = glTipHtml(e); tip.classList.add("gl-tip"); tip.hidden = false;
  tip.style.left = Math.max(8, Math.min(x + 14, window.innerWidth - 340)) + "px";
  const h = tip.offsetHeight; tip.style.top = (y + 18 + h > window.innerHeight ? Math.max(8, y - h - 12) : y + 18) + "px";
}
function glHide() { const tip = tipEl(); if (tip.classList.contains("gl-tip")) { tip.hidden = true; tip.classList.remove("gl-tip"); } }
document.addEventListener("mouseover", ev => { const g = ev.target.closest && ev.target.closest(".gl"); if (g) glShow(g, ev.clientX, ev.clientY); });
document.addEventListener("mousemove", ev => { const g = ev.target.closest && ev.target.closest(".gl"); if (g) glShow(g, ev.clientX, ev.clientY); });
document.addEventListener("mouseout", ev => { const g = ev.target.closest && ev.target.closest(".gl"); if (g && !g.contains(ev.relatedTarget)) glHide(); });
document.addEventListener("focusin", ev => { if (ev.target.classList && ev.target.classList.contains("gl")) { const r = ev.target.getBoundingClientRect(); glShow(ev.target, r.left, r.bottom - 6); } });
document.addEventListener("focusout", ev => { if (ev.target.classList && ev.target.classList.contains("gl")) glHide(); });
let glTimer = null, glObs = null;
function glRun() {
  const root = document.getElementById("view-" + state.view);
  if (!root || !glObs) return;
  glObs.disconnect();
  try { glossify(root); } finally { glObs.observe($("#stage"), { childList: true, subtree: true }); }
}
function glInit() {
  glBuild();
  glObs = new MutationObserver(() => { clearTimeout(glTimer); glTimer = setTimeout(glRun, 60); });
  glObs.observe($("#stage"), { childList: true, subtree: true });
}

const GL_GROUPS = [
  ["Temperament & style", ["Rubenzer facet", "Simonton leadership style", "Hermann trait", "Hermann style", "Hermann", "Personality psychology", "Rubenzer & Faschingbauer", "Domain label"]],
  ["Power & survival", ["Bueno de Mesquita et al.", "Svolik", "Olson", "Goemans, Gleditsch & Chiozza", "Skowronek", "Convergence view"]],
  ["Organizations & dossiers", ["Organization type", "Rot ledger", "Dossier engine", "Kitschelt & Wilkinson", "This atlas (my construction)", "Robert Michels"]],
  ["Patronage", ["Patronage", "Patronage placement", "Kanchan Chandra", "Richard Joseph", "Nigerian politics", "Electoral systems", "Mexico", "Japan", "Indonesia", "South Korea", "Argentina", "India", "Singapore", "South Africa"]],
  ["Concepts", ["Concept", "Max Weber"]],
  ["Carrots & sticks", ["Carrots & sticks"]],
  ["Practices", ["Practices", "Practices category", "Lyndon Johnson", "James Baker", "Martin van Creveld"]],
  ["Rhetoric & propaganda", ["Rhetoric", "Communication style"]]
];
function glGroup(f) { const g = GL_GROUPS.find(([, fs]) => fs.includes(f)); return g ? g[0] : "Other"; }
function renderGlossary() {
  const tb = $("#gloss-toolbar"), body = $("#gloss-body");
  if (!$("#gloss-search")) {
    tb.innerHTML = `<input type="search" id="gloss-search" class="tb-search" placeholder="Search terms and definitions…" value="${esc(state.gloss || "")}">`;
    $("#gloss-search").oninput = e => { state.gloss = e.target.value; renderGlossaryBody(); };
  }
  renderGlossaryBody();
}
function renderGlossaryBody() {
  const q = (state.gloss || "").trim().toLowerCase(), body = $("#gloss-body");
  const rows = [];
  GL.forEach(e => e.senses.filter(s => !s.main && !s.hide).forEach(s => rows.push({ term: e.term, src: s.src, def: s.def })));
  const shown = rows.filter(r => !q || (r.term + " " + r.src + " " + r.def).toLowerCase().includes(q));
  const fam = src => glGroup(src.split(/\s+[·—]\s+|:\s+/)[0]);
  const groups = {};
  shown.forEach(r => (groups[fam(r.src)] = groups[fam(r.src)] || []).push(r));
  const order = GL_GROUPS.map(g => g[0]).concat("Other");
  const names = Object.keys(groups).sort((a, b) => order.indexOf(a) - order.indexOf(b));
  body.innerHTML = `<div class="cmp-summary">${shown.length} of ${rows.length} definitions${q ? ` matching “${esc(q)}”` : ""}. Hover any underlined term anywhere in the atlas to see its definition; this page lists them all.</div>
    <div class="gl-index">${names.map(n => `<a data-gjump="${esc(n)}">${esc(n)} <span>${groups[n].length}</span></a>`).join("")}</div>
    ${names.map(n => `<section class="gl-group" id="glg-${esc(n).replace(/[^a-z0-9]+/gi, "-")}"><h3 class="pat-h">${esc(n)}</h3><dl class="gl-list">${groups[n].sort((a, b) => a.term.localeCompare(b.term)).map(r => `<dt>${esc(r.term)} <small>${esc(r.src)}</small></dt><dd>${esc(r.def)}</dd>`).join("")}</dl></section>`).join("")}`;
  body.querySelectorAll("[data-gjump]").forEach(a => a.onclick = () => { const el = document.getElementById("glg-" + a.dataset.gjump.replace(/[^a-z0-9]+/gi, "-")); if (el) el.scrollIntoView({ behavior: "smooth", block: "start" }); });
}

/* ================================================================
   RHETORIC — communication, propaganda and the press
   ================================================================ */

const RHET_STYLE = Object.fromEntries((window.RHET_STYLES || []).map(s => [s.key, s]));
function rhetChip(id) { const l = byId(id); return l ? `<span class="pt-chip" data-id="${id}" style="--c:${eraColor(l)}">${esc(shortName(l))}</span>` : ""; }
function rhetStyleBadge(key) { const s = RHET_STYLE[key]; return s ? `<span class="rh-badge" style="--c:${s.color}">${esc(s.name)}</span>` : ""; }
// persuasion practices of a style's exemplars, from the Practices layer
function rhetPractices(ids, n) {
  return ids.flatMap(id => ((PRACTICES[id] || {}).practices || []).filter(p => p.cat === "persuasion").map(p => ({ id, p }))).slice(0, n || 4);
}

function renderRhetoric() {
  const S = state.rhet, tb = $("#rhet-toolbar"), body = $("#rhet-body");
  const modes = [["styles", "Styles"], ["compare", "Compare styles"], ["map", "Map"], ["cases", "Set pieces"], ["press", "The press"], ["channels", "Channels"], ["toolkit", "Toolkit"], ["reading", "Reading"]];
  tb.innerHTML = `<div class="seg">${modes.map(([k, l]) => `<button data-rhm="${k}" class="${S.mode === k ? "on" : ""}">${l}</button>`).join("")}</div>`;
  tb.querySelectorAll("[data-rhm]").forEach(b => b.onclick = () => { S.mode = b.dataset.rhm; renderRhetoric(); });
  body.innerHTML = S.mode === "compare" ? rhetCompareHtml() : S.mode === "map" ? rhetMapHtml() : S.mode === "cases" ? rhetCasesHtml() : S.mode === "press" ? rhetPressHtml() :
    S.mode === "channels" ? rhetChannelsHtml() : S.mode === "toolkit" ? rhetToolkitHtml() : S.mode === "reading" ? rhetReadingHtml() : rhetStylesHtml();
  body.querySelectorAll("[data-id]").forEach(el => el.onclick = () => openDetail(el.dataset.id));
  body.querySelectorAll("[data-pjump]").forEach(el => el.onclick = () => { const [lid, pid] = el.dataset.pjump.split(":"); openPractices(lid, pid); });
  body.querySelectorAll("[data-rhstyle]").forEach(el => el.onclick = () => { S.caseStyle = el.dataset.rhstyle; S.mode = "cases"; renderRhetoric(); });
  body.querySelectorAll("[data-rhcs]").forEach(b => b.onclick = () => { S.caseStyle = b.dataset.rhcs; renderRhetoric(); });
  body.querySelectorAll("[data-rhcmp]").forEach(b => b.onclick = () => { const k = b.dataset.rhcmp; S.cmp = S.cmp.includes(k) ? S.cmp.filter(x => x !== k) : S.cmp.concat(k).slice(-4); renderRhetoric(); });
  body.querySelectorAll("[data-rhy]").forEach(b => b.onclick = () => { S.yAxis = b.dataset.rhy; renderRhetoric(); });
  body.querySelectorAll(".read-row").forEach(r => r.onclick = ev => {
    if (ev.target.dataset.shelfId) { ev.stopPropagation(); cycleShelf(ev.target.dataset.shelfId); renderRhetoric(); return; }
    openBookEditor(r.dataset.book);
  });
  const tip = tipEl();
  body.querySelectorAll(".rh-pt").forEach(p => {
    const l = byId(p.dataset.id), m = window.RHET_MAP[p.dataset.id], st = RHET_STYLE[m[3]];
    p.onmouseenter = () => { tip.innerHTML = `<b>${esc(l.name)}</b><div class="m">${esc(st ? st.name : "")}</div><div class="co">register ${m[0]} · route ${m[1]} · control ${m[2]}</div>`; tip.hidden = false; };
    p.onmousemove = moveTip;
    p.onmouseleave = () => { tip.hidden = true; };
  });
}

function rhetStylesHtml() {
  return `<div class="cmp-summary">Ten recognisable ways leaders have communicated. They are not exclusive — Churchill was orator and writer, FDR fireside speaker and press courtier — but most leaders lean on one. Each card says how the style works, its techniques, what it does well, how it fails, and who used it. The exemplars' own persuasion habits link through to Practices.</div>
    <div class="rh-grid">${(window.RHET_STYLES || []).map(s => {
      const prs = rhetPractices(s.exemplars, 3);
      const nCases = (window.RHET_CASES || []).filter(c => c.style === s.key).length;
      return `<article class="rh-card" style="--c:${s.color}">
        <h4>${esc(s.name)}</h4>
        <p class="rh-def">${esc(s.def)}</p>
        <div class="rh-row"><span class="k">How it works</span><p>${esc(s.mechanism)}</p></div>
        <div class="rh-row"><span class="k">Techniques</span><ul>${s.techniques.map(t => `<li>${esc(t)}</li>`).join("")}</ul></div>
        <div class="rh-row good"><span class="k">Strengths</span><p>${esc(s.strengths)}</p></div>
        <div class="rh-row bad"><span class="k">Failure mode</span><p>${esc(s.failure)}</p></div>
        <div class="pt-chips">${s.exemplars.map(rhetChip).join("")}</div>
        ${prs.length ? `<div class="rh-prac"><span class="k">Related practices</span>${prs.map(r => `<a data-pjump="${r.id}:${r.p.id}">${esc(shortName(byId(r.id) || pracPerson(r.id)))}: ${esc(r.p.name)}</a>`).join("")}</div>` : ""}
        ${nCases ? `<button class="chip" data-rhstyle="${s.key}">${nCases} set piece${nCases > 1 ? "s" : ""} →</button>` : ""}
      </article>`; }).join("")}</div>`;
}

function rhetCompareHtml() {
  const S = state.rhet, sel = S.cmp.map(k => RHET_STYLE[k]).filter(Boolean);
  const rows = [["What it is", s => esc(s.def)], ["How it works", s => esc(s.mechanism)], ["Techniques", s => `<ul>${s.techniques.map(t => `<li>${esc(t)}</li>`).join("")}</ul>`], ["Strengths", s => esc(s.strengths)], ["Failure mode", s => esc(s.failure)],
    ["Exemplars", s => `<div class="pt-chips">${s.exemplars.map(rhetChip).join("")}</div>`],
    ["On the map", s => { const pts = Object.entries(window.RHET_MAP).filter(([, m]) => m[3] === s.key); if (!pts.length) return "—"; const avg = i => Math.round(pts.reduce((a, [, m]) => a + m[i], 0) / pts.length); return `register ${avg(0)} · route ${avg(1)} · control ${avg(2)} <span class="rh-note">(mean of ${pts.length})</span>`; }]];
  return `<div class="cmp-summary">Pick up to four styles to set side by side.</div>
    <div class="cv-pills">${(window.RHET_STYLES || []).map(s => `<button class="chip ${S.cmp.includes(s.key) ? "on" : ""}" data-rhcmp="${s.key}" style="--era-color:${s.color}"><span class="dot"></span>${esc(s.name)}</button>`).join("")}</div>
    ${sel.length ? `<div class="dc-table-wrap"><table class="xtab dc-table rh-cmp"><thead><tr><th></th>${sel.map(s => `<th style="color:${s.color}">${esc(s.name)}</th>`).join("")}</tr></thead><tbody>
      ${rows.map(([label, f]) => `<tr><th class="rot-name">${label}</th>${sel.map(s => `<td>${f(s)}</td>`).join("")}</tr>`).join("")}
    </tbody></table></div>` : `<p class="pr-none">Choose at least one style.</p>`}`;
}

function rhetMapHtml() {
  const S = state.rhet, yk = S.yAxis || "register", yi = yk === "register" ? 0 : 2;
  const W = 640, H = 440, M = { l: 52, r: 18, t: 22, b: 50 };
  const x = v => M.l + (W - M.l - M.r) * v / 100, y = v => H - M.b - (H - M.t - M.b) * v / 100;
  let g = [0, 25, 50, 75, 100].map(v => `<line class="rz-grid" x1="${x(v)}" y1="${M.t}" x2="${x(v)}" y2="${H - M.b}"/><line class="rz-grid" x1="${M.l}" y1="${y(v)}" x2="${W - M.r}" y2="${y(v)}"/><text class="rz-ytick" style="text-anchor:middle" x="${x(v)}" y="${H - M.b + 16}">${v}</text><text class="rz-ytick" x="${M.l - 8}" y="${y(v) + 4}">${v}</text>`).join("");
  const Q = yk === "register" ? ["ELEVATED, VIA THE PRESS", "ELEVATED, DIRECT", "PLAIN, VIA THE PRESS", "PLAIN, DIRECT"] : ["CONTROLLED, VIA THE PRESS", "CONTROLLED, DIRECT", "OPEN, VIA THE PRESS", "OPEN, DIRECT"];
  const q = (tx, ty, t, a) => `<text class="sv-quad" x="${tx}" y="${ty}" style="text-anchor:${a}">${t}</text>`;
  g += q(M.l + 8, M.t + 14, Q[0], "start") + q(W - M.r - 8, M.t + 14, Q[1], "end") + q(M.l + 8, H - M.b - 8, Q[2], "start") + q(W - M.r - 8, H - M.b - 8, Q[3], "end");
  const entries = Object.entries(window.RHET_MAP).filter(([id]) => byId(id));
  let dots = "", lab = ""; const placed = [];
  entries.forEach(([id, m]) => { const st = RHET_STYLE[m[3]]; dots += `<circle class="sv-pt rh-pt" data-id="${id}" cx="${x(m[1])}" cy="${y(m[yi])}" r="6.5" style="fill:${st ? st.color : "var(--accent)"}"/>`; });
  entries.slice().sort((a, b) => a[1][1] - b[1][1]).forEach(([id, m]) => {
    const name = tagName(byId(id)), w = name.length * 5.6 + 4, cx = x(m[1]), cy = y(m[yi]);
    for (const [dx, dy] of [[9, 3.5], [-9 - w, 3.5], [-w / 2, -10], [-w / 2, 17]]) {
      const b = [cx + dx, cy + dy - 9, cx + dx + w, cy + dy + 2];
      if (b[0] < M.l - 2 || b[2] > W - 2) continue;
      if (!placed.some(p => !(b[2] < p[0] || b[0] > p[2] || b[3] < p[1] || b[1] > p[3]))) { placed.push(b); lab += `<text class="sv-lab" x="${cx + dx}" y="${cy + dy}">${esc(name)}</text>`; break; }
    }
  });
  const svg = `<svg class="sv-scatter" viewBox="0 0 ${W} ${H}" width="100%">${g}<text class="rz-ylabel" x="${(M.l + W - M.r) / 2}" y="${H - 10}">Route: through the press → direct to the public</text><text class="rz-ylabel" transform="translate(12,${(M.t + H - M.b) / 2}) rotate(-90)">${yk === "register" ? "Register: plain → elevated" : "Control of information: open → controlled"}</text>${dots}${lab}</svg>`;
  const quad = (hx, hy) => entries.filter(([, m]) => (m[1] >= 50) === hx && (m[yi] >= 50) === hy).map(([id]) => `<a data-id="${id}">${esc(tagName(byId(id)))}</a>`);
  const cells = [[false, true, Q[0]], [true, true, Q[1]], [false, false, Q[2]], [true, false, Q[3]]].map(([hx, hy, label]) => { const arr = quad(hx, hy); return `<div class="pat-quad"><b>${label.toLowerCase().replace(/^./, c => c.toUpperCase())}</b> <span>${arr.length}</span><div>${arr.join(", ") || "none"}</div></div>`; }).join("");
  return `<div class="cmp-summary">Where ${entries.length} leaders sit. Left to right: do they reach the public through journalists, or go direct — by rally, radio, broadcast or social media? Bottom to top: plain speech or elevated oratory — or, switched, how far they controlled what information could circulate. Colour is the main style. <strong>All placements are my estimates</strong>, to organise comparison, not to measure.</div>
    <div class="seg" style="margin-bottom:10px"><button data-rhy="register" class="${yk === "register" ? "on" : ""}">Route × register</button><button data-rhy="control" class="${yk === "control" ? "on" : ""}">Route × control</button></div>
    <div class="pat-map">${svg}</div>
    <div class="rh-legend">${(window.RHET_STYLES || []).map(s => `<span><i style="background:${s.color}"></i>${esc(s.name)}</span>`).join("")}</div>
    <div class="pat-quads">${cells}</div>`;
}

function rhetCasesHtml() {
  const S = state.rhet, all = window.RHET_CASES || [];
  const yr = c => +((String(c.date).match(/\d{4}/) || [9999])[0]);
  const shown = all.filter(c => !S.caseStyle || S.caseStyle === "all" || c.style === S.caseStyle).slice().sort((a, b) => yr(a) - yr(b));
  const styles = (window.RHET_STYLES || []).filter(s => all.some(c => c.style === s.key));
  return `<div class="cmp-summary">${all.length} famous speeches and moments, in date order, read for technique: what the leader did, what to notice, and what it achieved. Filter by style to compare like with like.</div>
    <div class="cv-pills"><button class="chip ${!S.caseStyle || S.caseStyle === "all" ? "on" : ""}" data-rhcs="all">All <span style="opacity:.6">${all.length}</span></button>${styles.map(s => `<button class="chip ${S.caseStyle === s.key ? "on" : ""}" data-rhcs="${s.key}" style="--era-color:${s.color}"><span class="dot"></span>${esc(s.name)} <span style="opacity:.6">${all.filter(c => c.style === s.key).length}</span></button>`).join("")}</div>
    <div class="rh-cases">${shown.map(c => { const l = byId(c.leader); return `<article class="rh-case" style="--c:${(RHET_STYLE[c.style] || {}).color || "var(--accent)"}">
      <div class="rh-case-top"><div class="rh-who" data-id="${c.leader}">${l ? avatarMarkup(l, "sm") : ""}<b>${esc(l ? shortName(l) : c.leader)}</b></div>${rhetStyleBadge(c.style)}</div>
      <h4>${esc(c.title)}</h4><div class="rh-meta">${esc(c.date)} · ${esc(c.channel)}</div>
      ${c.quote ? `<blockquote class="pr-quote">“${esc(c.quote)}”</blockquote>` : ""}
      <p class="rh-ctx">${esc(c.context)}</p>
      <div class="rh-row"><span class="k">Technique</span><ul>${c.technique.map(t => `<li>${esc(t)}</li>`).join("")}</ul></div>
      <div class="rh-row"><span class="k">What to notice</span><p>${esc(c.look)}</p></div>
      <div class="rh-row"><span class="k">Effect</span><p>${esc(c.effect)}</p></div>
    </article>`; }).join("")}</div>`;
}

function rhetPressHtml() {
  const models = window.RHET_PRESS || [];
  return `<div class="cmp-summary">Six ways leaders have handled the press, from courting it to owning it. Most leaders mix several; the cases show each model at its clearest. The spectrum runs from the most open relationship to the most controlled.</div>
    <div class="rh-spectrum">${models.map((m, i) => `<span style="--i:${i}">${esc(m.name)}</span>`).join("")}</div>
    <div class="rh-press">${models.map(m => `<section class="rh-model"><h4>${esc(m.name)}</h4><p class="rh-def">${esc(m.def)}</p>
      ${m.cases.map(c => { const l = byId(c.id); return `<div class="rh-pcase"><div class="rh-who" data-id="${c.id}">${l ? avatarMarkup(l, "sm") : ""}<b>${esc(l ? shortName(l) : c.id)}</b><span class="rh-meta">${esc(c.when)}</span></div><p>${esc(c.how)}</p></div>`; }).join("")}
    </section>`).join("")}</div>`;
}

function rhetChannelsHtml() {
  return `<div class="cmp-summary">Each new medium changed what worked — and the leaders who mastered it first gained an edge over rivals still working the old way.</div>
    <div class="rh-channels">${(window.RHET_CHANNELS || []).map(c => `<section class="rh-channel"><div class="rh-meta">${esc(c.years)}</div><h4>${esc(c.name)}</h4><p class="rh-def">${esc(c.def)}</p><div class="rh-row"><span class="k">What changed</span><p>${esc(c.shift)}</p></div>
      ${c.cases.map(x => { const l = byId(x.id); return `<div class="rh-pcase"><div class="rh-who" data-id="${x.id}">${l ? avatarMarkup(l, "sm") : ""}<b>${esc(l ? shortName(l) : x.id)}</b></div><p>${esc(x.how)}</p></div>`; }).join("")}
    </section>`).join("")}</div>`;
}

function rhetToolkitHtml() {
  return `<div class="cmp-summary">The vocabulary for describing what you see: Aristotle's appeals and the classical canons, the figures that make lines memorable, how applause and soundbites are built, the 1937 propaganda devices, and the modern theory of propaganda and the press. These terms also have hover definitions wherever they appear in the atlas.</div>
    ${(window.RHET_TOOLKIT || []).map(g => `<section class="gl-group"><h3 class="pat-h">${esc(g.group)}</h3><p class="rh-intro">${esc(g.intro)}</p><dl class="gl-list gl-off">${g.terms.map(t => `<dt>${esc(t.term)}</dt><dd>${esc(t.def)}</dd>`).join("")}</dl></section>`).join("")}`;
}

function rhetReadingHtml() {
  const books = (window.RHET_BOOKS || []).map(bookById).filter(Boolean);
  return `<div class="cmp-summary">Where to start: Leith for a lively tour of rhetoric, Atkinson for how political speeches actually win applause, Wills for one speech read closely; then Lippmann, Bernays and Ellul on propaganda, Kershaw and Pomerantsev on two propaganda states, and Tulis and Kernell on presidents and the public.</div>
    <div class="read-list">${books.map(b => `<div class="read-row" data-book="${b.id}"><div class="rr-top"><span class="rr-title">${esc(b.title)}</span><span class="rr-author">${esc(b.author)}${b.year ? ", " + (b.year < 0 ? -b.year + " BC" : b.year) : ""}</span><span class="rr-shelf">${shelfBadge(b)}</span></div>${b.note ? `<div class="rr-note">${esc(b.note)}</div>` : ""}</div>`).join("")}</div>`;
}

// the Rhetoric block on a leader profile
function rhetProfileHtml(l) {
  const m = (window.RHET_MAP || {})[l.id];
  const cases = (window.RHET_CASES || []).filter(c => c.leader === l.id);
  const press = (window.RHET_PRESS || []).flatMap(p => p.cases.filter(c => c.id === l.id).map(c => ({ p, c })));
  if (!m && !cases.length && !press.length) return "";
  const st = m ? RHET_STYLE[m[3]] : null;
  return `${st ? `<p class="pr-one" style="margin-top:0">Main style: ${rhetStyleBadge(st.key)} — ${esc(st.def)}</p><p class="rh-note">Placement (my estimate): register ${m[0]} · route ${m[1]} · control ${m[2]}.</p>` : ""}
    ${cases.map(c => `<div class="rh-pcase"><b>${esc(c.title)}</b> <span class="rh-meta">${esc(c.date)}</span><p>${esc(c.look)}</p></div>`).join("")}
    ${press.map(({ p, c }) => `<div class="rh-pcase"><b>Press: ${esc(p.name)}</b> <span class="rh-meta">${esc(c.when)}</span><p>${esc(c.how)}</p></div>`).join("")}
    <button class="chip action" data-rhopen="1">Open Rhetoric →</button>`;
}

/* ================================================================
   JUMP SEARCH — one box for leaders, concepts, books and views
   ================================================================ */

const NAV_VIEWS = [
  { v: "index", label: "Index", hint: "every leader" }, { v: "chronicle", label: "Chronicle", hint: "timeline by region" },
  { v: "map", label: "Map", hint: "leaders by country" }, { v: "orgs", label: "Organizations", hint: "machines, parties, cadres and courts" }, { v: "convergence", label: "Convergence", hint: "where the frameworks agree and contradict" },
  { v: "compare", label: "Compare", hint: "two leaders side by side" }, { v: "patterns", label: "Patterns", hint: "concepts × outcomes" },
  { v: "temperament", label: "Temperament", hint: "Rubenzer · Simonton · Hermann" },
  { v: "time", label: "Political Time", hint: "Skowronek — reconstruction, articulation, preemption, disjunction" },
  { v: "survival", label: "Survival", hint: "Svolik · Bueno de Mesquita · Olson · entry, exit & fate" },
  { v: "patronage", label: "Patronage", hint: "21st-century patronage systems in depth" }, { v: "practices", label: "Practices", hint: "the daily habits behind their success" }, { v: "rhetoric", label: "Rhetoric", hint: "communication, propaganda and the press" }, { v: "instruments", label: "Carrots & Sticks", hint: "trust · loyalty · fear · motivation" },
  { v: "library", label: "Library", hint: "your books" }, { v: "insights", label: "Insights", hint: "your theses" }, { v: "traits", label: "Frameworks", hint: "the concept library" }, { v: "glossary", label: "Glossary", hint: "every term of art, defined" }
];
let jumpItems = [], jumpActive = 0;
function renderJump() {
  const q = $("#jump").value.trim().toLowerCase(), box = $("#jump-results");
  if (!q) { box.hidden = true; jumpItems = []; return; }
  const starts = s => s.toLowerCase().startsWith(q) || s.toLowerCase().includes(" " + q) ? 0 : 1;
  const leaders = window.ALL_LEADERS.filter(l => (l.name + " " + l.title + " " + l.country).toLowerCase().includes(q))
    .sort((a, b) => starts(a.name) - starts(b.name) || a.name.localeCompare(b.name)).slice(0, 7);
  const concepts = TAGGABLE.filter(t => t.name.toLowerCase().includes(q)).slice(0, 4);
  const books = window.ALL_BOOKS.filter(b => ((b.title || "") + " " + (b.author || "")).toLowerCase().includes(q)).slice(0, 4);
  const views = NAV_VIEWS.filter(v => v.label.toLowerCase().includes(q));
  const tools = (window.INSTRUMENTS || []).filter(i => (i.name + " " + ((REG_BY_KEY[i.reg] || {}).label || "")).toLowerCase().includes(q)).slice(0, 5);
  const facets = FACETS.filter(f => f.name.toLowerCase().includes(q) || f.short.toLowerCase().includes(q)).slice(0, 3);
  jumpItems = []; let html = "";
  const group = (title, arr, row, go) => {
    if (!arr.length) return;
    html += `<div class="jr-h">${title}</div>`;
    arr.forEach(x => { html += `<div class="jr-item" data-i="${jumpItems.length}">${row(x)}</div>`; jumpItems.push(() => go(x)); });
  };
  group("Leaders", leaders, l => `${avatarMarkup(l)}<b>${esc(l.name)}</b><span class="jr-meta">${esc(l.country)} · ${esc(l.years)}</span>`, l => openDetail(l.id));
  group("Views", views, v => `<span class="jr-glyph">→</span><b>${esc(v.label)}</b><span class="jr-meta">${esc(v.hint)}</span>`, v => switchView(v.v));
  group("Concepts", concepts, t => `<span class="jr-glyph">${t.icon}</span><b>${esc(t.name)}</b><span class="jr-meta">${esc(t.section)}</span>`, t => filterByTags([t.key]));
  group("Carrots & sticks", tools, i => `<span class="jr-glyph" style="color:${(REG_BY_KEY[i.reg] || {}).color}">●</span><b>${esc(i.name)}</b><span class="jr-meta">${esc((REG_BY_KEY[i.reg] || {}).label || "")} · ${usersOf(i.key).length} leaders</span>`,
    i => { state.instruments.reg = "all"; state.instruments.search = ""; state.instruments.focus = i.key; switchView("instruments"); });
  group("Temperament facets", facets, f => `<span class="jr-glyph">≋</span><b>${esc(f.name)}</b><span class="jr-meta">rank every leader by it</span>`,
    f => { state.temperament.mode = "ranked"; state.temperament.sort = f.key; switchView("temperament"); });
  const orgHits = ORGS.filter(o => (o.name + " " + (o.short || "") + " " + o.place + " " + (o.figures || "")).toLowerCase().includes(q)).slice(0, 4);
  group("Organizations", orgHits, o => `<span class="org-mark sm" style="--c:${ORG_KIND_BY_KEY[o.kind].color}">${orgMark(o)}</span><b>${esc(o.name)}</b><span class="jr-meta">${esc(o.place)} · ${orgYears(o)}</span>`, o => openOrg(o.id));
  const patHits = PAT_CASES.filter(c => (c.country + " " + c.title).toLowerCase().includes(q) || (q.length > 3 && "patronage clientelism".includes(q))).slice(0, 4);
  group("Patronage cases", patHits, c => `<span class="jr-glyph">◎</span><b>${esc(c.country)}</b><span class="jr-meta">${esc(c.title)}</span>`, c => openPatCase(c.id));
  group("Books", books, b => `<span class="jr-glyph">📖</span><b>${esc(b.title)}</b><span class="jr-meta">${esc(b.author)}</span>`, b => openBookEditor(b.id));
  box.innerHTML = html || `<div class="jr-empty">Nothing matches “${esc(q)}”.</div>`;
  box.hidden = false;
  jumpActive = 0; markJump();
  box.querySelectorAll(".jr-item").forEach(el => {
    el.onmousedown = ev => { ev.preventDefault(); runJump(+el.dataset.i); };
    el.onmouseenter = () => { jumpActive = +el.dataset.i; markJump(); };
  });
}
function markJump() { document.querySelectorAll("#jump-results .jr-item").forEach(el => el.classList.toggle("on", +el.dataset.i === jumpActive)); }
function runJump(i) {
  const go = jumpItems[i]; if (!go) return;
  $("#jump").value = ""; $("#jump-results").hidden = true; $("#jump").blur();
  go();
}

/* ================================================================
   THEME
   ================================================================ */

function cssVar(n) { return getComputedStyle(document.documentElement).getPropertyValue(n).trim(); }
function currentTheme() {
  const a = document.documentElement.getAttribute("data-theme");
  if (a) return a;
  return window.matchMedia && matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}
function onThemeChange() { paintMap(); if (state.view === "patterns") renderPatterns(); }

/* ================================================================
   VIEWS & ROUTING — #/index, #/convergence, #/leader/<id> …
   ================================================================ */

const VIEWS = ["index", "chronicle", "map", "orgs", "org", "convergence", "compare", "patterns", "temperament", "time", "survival", "patronage", "practices", "rhetoric", "instruments", "library", "insights", "traits", "glossary", "leader"];
const FILTERED_VIEWS = ["index", "chronicle", "map"];

function switchView(v) {
  const target = "#/" + v;
  if (location.hash !== target) location.hash = target;
  else showView(v);
}
function applyRoute() {
  const h = location.hash.replace(/^#\/?/, "");
  const [v, raw] = h.split("/");
  const id = raw ? decodeURIComponent(raw) : null;
  if (v === "leader" && id && byId(id)) showView("leader", id);
  else if (v === "org" && id && ORG_BY_ID[id]) showView("org", id);
  else if (v === "practices") { if (id && (window.PRACTICES || {})[id]) { state.prac.leader = id; state.prac.mode = "leader"; } showView("practices"); }
  else if (v === "patronage") { state.pat.caseId = id && PAT_BY_ID[id] ? id : null; if (state.pat.caseId) state.pat.mode = "cases"; showView("patronage"); }
  else showView(VIEWS.includes(v) && v !== "leader" && v !== "org" ? v : "index");
}
function showView(v, id) {
  const prevLeader = state.view === "leader" ? state.leaderId : null;
  const prevOrg = state.view === "org" ? state.orgId : null;
  state.view = v;
  if (v === "leader") state.leaderId = id;
  if (v === "org") state.orgId = id;
  else { currentDetailId = null; delete $("#stage").dataset.leader; }
  document.querySelectorAll(".nav-item").forEach(t => t.classList.toggle("active", t.dataset.view === (v === "org" ? "orgs" : v)));
  VIEWS.forEach(k => { $("#view-" + k).hidden = k !== v; });
  $("#filterbar").hidden = !FILTERED_VIEWS.includes(v);
  $("#stage").classList.toggle("is-flush", v === "map");
  document.body.classList.remove("nav-open");
  if (!(v === "leader" && prevLeader === id) && !(v === "org" && prevOrg === id)) $("#stage").scrollTop = 0;
  const title = v === "leader" ? (byId(id) || {}).name : v === "org" ? (ORG_BY_ID[id] || {}).name : v === "patronage" && state.pat.caseId ? "Patronage in " + PAT_BY_ID[state.pat.caseId].country : (NAV_VIEWS.find(x => x.v === v) || {}).label;
  document.title = (title ? title + " — " : "") + "The Leadership Atlas";
  refreshView();
  syncFilterbarHeight();
}
function refreshView() {
  const v = state.view;
  if (v === "index") renderIndex();
  else if (v === "chronicle") renderChronicle();
  else if (v === "orgs") renderOrgs();
  else if (v === "org") renderOrg(state.orgId);
  else if (v === "map") { renderList(); if (mapCtx) paintMap(); else requestAnimationFrame(initMap); }
  else if (v === "convergence") renderConvergence();
  else if (v === "compare") renderCompare();
  else if (v === "patterns") renderPatterns();
  else if (v === "temperament") renderTemperament();
  else if (v === "time") renderTime();
  else if (v === "survival") renderSurvival();
  else if (v === "patronage") renderPatronage();
  else if (v === "practices") renderPractices();
  else if (v === "rhetoric") renderRhetoric();
  else if (v === "instruments") renderInstruments();
  else if (v === "library") renderLibrary();
  else if (v === "insights") renderInsights();
  else if (v === "traits") renderTraits();
  else if (v === "glossary") renderGlossary();
  else if (v === "leader") renderLeader(state.leaderId);
  updateNav();
}
function render() {
  renderActiveFilters();
  if (state.view === "index") renderIndex();
  else if (state.view === "chronicle") renderChronicle();
  else if (state.view === "map") { renderList(); paintMap(); }
  updateNav();
  syncFilterbarHeight();
}
function updateNav() {
  const vis = visibleLeaders().length, all = window.ALL_LEADERS.length;
  $("#nc-index").textContent = vis === all ? all : `${vis}/${all}`;
  $("#nc-library").textContent = window.ALL_BOOKS.length;
  const ni = loadInsights().length;
  $("#nc-insights").textContent = ni || "";
  $("#nav-foot").innerHTML = `<b>${all}</b> leaders across <b>${ERAS.length}</b> eras<br><b>${window.ALL_BOOKS.length}</b> books · <b>${ni}</b> insight${ni === 1 ? "" : "s"}<br><span style="color:var(--faint)">Saved in this browser — Export to back up.</span>`;
}
function syncFilterbarHeight() {
  const fb = $("#filterbar");
  $("#stage").style.setProperty("--fb-h", fb.hidden ? "0px" : fb.offsetHeight + "px");
}

/* ---------------- boot ---------------- */

buildChips();
document.querySelectorAll(".nav-item").forEach(t => t.onclick = () => switchView(t.dataset.view));
$("#nav-toggle").onclick = () => document.body.classList.toggle("nav-open");
$("#form-close").onclick = closeForm; $("#form-overlay").onclick = closeForm;
$("#insight-close").onclick = closeInsightEditor; $("#insight-overlay").onclick = closeInsightEditor;
$("#book-close").onclick = closeBookEditor; $("#book-overlay").onclick = closeBookEditor;
$("#search").addEventListener("input", e => { state.search = e.target.value; render(); });

$("#jump").addEventListener("input", renderJump);
$("#jump").addEventListener("focus", renderJump);
$("#jump").addEventListener("blur", () => setTimeout(() => { $("#jump-results").hidden = true; }, 120));
$("#jump").addEventListener("keydown", e => {
  if (e.key === "ArrowDown") { e.preventDefault(); jumpActive = Math.min(jumpActive + 1, jumpItems.length - 1); markJump(); }
  else if (e.key === "ArrowUp") { e.preventDefault(); jumpActive = Math.max(jumpActive - 1, 0); markJump(); }
  else if (e.key === "Enter") { e.preventDefault(); runJump(jumpActive); }
  else if (e.key === "Escape") { $("#jump").value = ""; $("#jump-results").hidden = true; $("#jump").blur(); }
});
document.addEventListener("keydown", e => {
  const typing = /^(INPUT|TEXTAREA|SELECT)$/.test(document.activeElement.tagName);
  if ((e.key === "/" && !typing) || (e.key.toLowerCase() === "k" && (e.ctrlKey || e.metaKey))) { e.preventDefault(); $("#jump").focus(); $("#jump").select(); return; }
  if (e.key === "Escape") { closeForm(); closeInsightEditor(); closeBookEditor(); document.body.classList.remove("nav-open"); }
});

$("#theme-toggle").onclick = () => {
  const next = currentTheme() === "dark" ? "light" : "dark";
  document.documentElement.setAttribute("data-theme", next);
  try { localStorage.setItem("atlas-theme", next); } catch (e) { /* private mode */ }
  onThemeChange();
};
if (window.matchMedia) matchMedia("(prefers-color-scheme: dark)").addEventListener("change", onThemeChange);

$("#stage").addEventListener("scroll", () => {
  if ((state.view !== "leader" && state.view !== "org") || spyQueued) return;
  spyQueued = true; requestAnimationFrame(() => { spyQueued = false; leaderSpy(); });
}, { passive: true });
let resizeT;
window.addEventListener("resize", () => {
  clearTimeout(resizeT);
  resizeT = setTimeout(() => { syncFilterbarHeight(); if (state.view === "chronicle") renderChronicle(); }, 150);
});

glInit();
window.addEventListener("hashchange", applyRoute);
if (!location.hash || location.hash === "#" || location.hash === "#/") history.replaceState(null, "", "#/index");
applyRoute();

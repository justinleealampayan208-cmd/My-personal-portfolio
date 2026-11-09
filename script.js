
const CONFIG = {
  name: "Justin Lee M. Alampayan",
  roles: ["Problem Solving", "Programmer", "Digital Creator"], // rotates on Home
  tagline: "Turning ideas into powerful digital experiences.",
  bio: "I design and build stylish, user-focused web experiences that combine creativity with strategy. Passionate about clean design, smooth interactions, and details that make a difference.",
  availability: "Available for freelance",
  availableWorldwide: "Available worldwide",
  email: "justinleealampayan515@gmail.com",
  phone: "0906 210 3357",
  location: "Cebu City, Phililppines",
  facebook: "https://www.facebook.com/Acre.Uchiha207",
  instagram: "https://www.instagram.com/leezitski/",
  showPhotoButtons: true   // set false to hide the photo upload buttons (e.g. when you publish)
};

const PROJECTS = [
  { title: "Veloce Bikes", type: "E-commerce Website", cat: "ACADEMIC", theme: "dark", year: 2026,
    head: "VELOCE|BICYCLE", sub: "Ride beyond limits",
    desc: "A fast, bold online store for performance bicycles with a smooth product browsing and checkout experience.",
    tags: ["UI/UX", "Figma", "HTML/CSS", "JavaScript"], link: "#", image:"Images/2.png" },
  { title: "Woodcraft", type: "Furniture Website", cat: "PRESENTATIONS", theme: "light", year: 2026,
    head: "Timeless|Crafted|Furniture", sub: "Handmade collections",
    desc: "A warm, minimal brand website that showcases handmade furniture with large photography and calm typography.",
    tags: ["Branding", "Webflow", "Responsive"], link: "#", image: "" },
  { title: "Urbanic", type: "Fashion Magazine", cat: "Magazine", theme: "red", year: 2025,
    head: "STAY AHEAD|IN STYLE", sub: "Fashion & culture",
    desc: "An editorial-style fashion magazine layout with dramatic imagery and smooth page transitions.",
    tags: ["Editorial", "Framer", "Animation"], link: "#", image: "" },
  { title: "BeatBox", type: "Music Web App", cat: "PERSONAL", theme: "mono", year: 2025,
    head: "BEAT|BOX", sub: "Your sound, your way",
    desc: "A music player web app with playlists, search and a clean dark interface.",
    tags: ["JavaScript", "UI/UX"], link: "#", image: "" },
  { title: "DashPro", type: "Analytics Dashboard", cat: "App", theme: "dark", year: 2025,
    head: "DASH|PRO", sub: "Data made simple",
    desc: "A clear analytics dashboard with live charts, filters and simple reports.",
    tags: ["Dashboard", "Charts", "UX"], link: "#", image: "" },
  { title: "Nova Store", type: "Clothing Store", cat: "E-WEB PROJECTS", theme: "red", year: 2024,
    head: "NOVA|STORE", sub: "Wear your world",
    desc: "A modern clothing store with a quick cart, wishlists and bold product pages.",
    tags: ["E-commerce", "HTML/CSS", "JavaScript"], link: "#", image: "" }
];

/* ---------------- icons ---------------- */
const ICONS = {
  mail: '<rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/>',
  globe: '<circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c3 3 3 15 0 18M12 3c-3 3-3 15 0 18"/>',
  phone: '<path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2z"/>',
  pin: '<path d="M12 21s-7-6.2-7-11a7 7 0 0 1 14 0c0 4.8-7 11-7 11z"/><circle cx="12" cy="10" r="2.5"/>',
  search: '<circle cx="11" cy="11" r="6"/><path d="m20 20-4-4"/>',
  bulb: '<path d="M9 18h6M10 21h4M12 3a6 6 0 0 0-4 10.5c.7.7 1 1.5 1 2.5h6c0-1 .3-1.8 1-2.5A6 6 0 0 0 12 3z"/>',
  pen: '<path d="M4 20l1-4L16 5l3 3L8 19z"/><path d="M14 7l3 3"/>',
  code: '<path d="m8 8-4 4 4 4M16 8l4 4-4 4M14 5l-4 14"/>',
  send: '<path d="M21 3 3 10l7 3 3 7z"/><path d="m10 13 11-10"/>',
  spark: '<path d="M12 2c.6 5.5 4.5 9.4 10 10-5.5.6-9.4 4.5-10 10-.6-5.5-4.5-9.4-10-10 5.5-.6 9.4-4.5 10-10z" fill="currentColor" stroke="none"/>',
  facebook: '<path d="M14 8h3V4h-3a4 4 0 0 0-4 4v3H7v4h3v6h4v-6h3l1-4h-4V8.5c0-.3.2-.5.5-.5z"/>',
  instagram: '<rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r=".8" fill="currentColor"/>',
  camera: '<path d="M4 8h3l2-3h6l2 3h3v11H4z"/><circle cx="12" cy="13" r="3.5"/>',
  arrow: '<path d="M4 12h16m-6-6 6 6-6 6"/>',
  quote: '<path d="M4 20v-7c0-5 2-8 6-9v3c-2 .8-3 2.500-3 4h3v9zM14 20v-7c0-5 2-8 6-9v3c-2 .8-3 2.500-3 4h3v9z" stroke="none" fill="currentColor"/>',
  close: '<path d="M6 6l12 12M18 6 6 18"/>',
  reset: '<path d="M4 12a8 8 0 1 0 3-6.2M4 4v5h5"/>'
};
function svg(n) {
  return `<svg viewBox="0 0 24 24" aria-hidden="true">${ICONS[n] || ""}</svg>`;
}
const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => [...r.querySelectorAll(s)];

/* ---------------- helpers ---------------- */
function toast(msg) {
  let t = $(".toast");
  if (!t) { t = document.createElement("div"); t.className = "toast"; document.body.appendChild(t); }
  t.textContent = msg; t.classList.add("show");
  clearTimeout(toast._t); toast._t = setTimeout(() => t.classList.remove("show"), 2200);
}
const store = {
  get(k) { try { return localStorage.getItem(k); } catch (e) { return null; } },
  set(k, v) { try { localStorage.setItem(k, v); return true; } catch (e) { return false; } },
  del(k) { try { localStorage.removeItem(k); } catch (e) {} }
};

/* ---------------- 1. fill in icons + config ---------------- */
function applyConfig() {
  $$("[data-icon]").forEach(el => { el.classList.add("ic"); el.innerHTML = svg(el.dataset.icon); });
  $$("[data-bind]").forEach(el => { const v = CONFIG[el.dataset.bind]; if (v != null) el.textContent = v; });
  $$("[data-link]").forEach(el => {
    const k = el.dataset.link;
    if (k === "email") el.href = "mailto:" + CONFIG.email;
    else { el.href = CONFIG[k] || "#"; el.target = "_blank"; el.rel = "noopener"; }
  });
  $$("[data-year]").forEach(el => el.textContent = new Date().getFullYear());
  if (!CONFIG.showPhotoButtons) document.body.classList.add("no-tools");
}

/* ---------------- 2. changeable photo ---------------- */
const PLACEHOLDER = "data:image/svg+xml;utf8," + encodeURIComponent(
  `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 750">
    <defs><linearGradient id="g" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#2a0306"/><stop offset="1" stop-color="#070707"/></linearGradient></defs>
    <rect width="600" height="750" fill="url(#g)"/>
    <ellipse cx="300" cy="260" rx="105" ry="125" fill="#3a1114"/>
    <path d="M70 750c0-170 95-260 230-260s230 90 230 260z" fill="#3a1114"/>
    <text x="300" y="640" text-anchor="middle" font-family="Arial" font-size="22" letter-spacing="4" fill="#d3141b">YOUR PHOTO HERE</text>
    <text x="300" y="672" text-anchor="middle" font-family="Arial" font-size="14" letter-spacing="2" fill="#8a8a8a">hover and click “Change photo”</text>
  </svg>`);
const PHOTO_KEY = "portfolio.photo";

function setPhoto(src) { $$("[data-photo]").forEach(i => i.src = src); }

function loadPhoto() {
  const saved = store.get(PHOTO_KEY);
  if (saved) return setPhoto(saved);
  // try a local file called photo.jpg / photo.png next to the pages
  const tryFiles = ["photo.jpg", "photo.png", "photo.jpeg", "photo.webp"];
  (function next(i) {
    if (i >= tryFiles.length) return setPhoto(PLACEHOLDER);
    const im = new Image();
    im.onload = () => setPhoto(tryFiles[i]);
    im.onerror = () => next(i + 1);
    im.src = tryFiles[i];
  })(0);
}

function handleFile(file) {
  if (!file || !file.type.startsWith("image/")) return toast("Please choose an image file");
  const fr = new FileReader();
  fr.onload = () => {
    const im = new Image();
    im.onload = () => {
      const max = 1400, s = Math.min(1, max / Math.max(im.width, im.height));
      const c = document.createElement("canvas");
      c.width = im.width * s; c.height = im.height * s;
      c.getContext("2d").drawImage(im, 0, 0, c.width, c.height);
      const type = file.type === "image/png" ? "image/png" : "image/jpeg";
      let data = c.toDataURL(type, .9);
      if (!store.set(PHOTO_KEY, data)) {
        data = c.toDataURL("image/jpeg", .75);
        if (!store.set(PHOTO_KEY, data)) toast("Photo applied (too large to remember after refresh)");
      }
      setPhoto(data); toast("Photo updated ✔");
    };
    im.src = fr.result;
  };
  fr.readAsDataURL(file);
}

function initPhoto() {
  loadPhoto();
  $$("[data-photo-input]").forEach(inp => inp.addEventListener("change", e => { handleFile(e.target.files[0]); inp.value = ""; }));
  $$("[data-photo-reset]").forEach(b => b.addEventListener("click", () => { store.del(PHOTO_KEY); loadPhoto(); toast("Photo reset"); }));
  $$(".photo-box").forEach(box => {
    ["dragenter", "dragover"].forEach(ev => box.addEventListener(ev, e => { e.preventDefault(); box.classList.add("dragging"); }));
    ["dragleave", "drop"].forEach(ev => box.addEventListener(ev, e => { e.preventDefault(); box.classList.remove("dragging"); }));
    box.addEventListener("drop", e => handleFile(e.dataTransfer.files[0]));
  });
}

/* ---------------- 3. header, menu, page fade ---------------- */
function initNav() {
  const header = $("#header"), burger = $("#burger"), nav = $("#nav");
  const page = document.body.dataset.page;
  $$("#nav a").forEach(a => a.classList.toggle("active", a.dataset.page === page));
  window.addEventListener("scroll", () => header.classList.toggle("scrolled", scrollY > 30), { passive: true });
  burger.addEventListener("click", () => {
    const open = nav.classList.toggle("open");
    burger.classList.toggle("open", open); burger.setAttribute("aria-expanded", open);
    document.body.style.overflow = open ? "hidden" : "";
  });
  // smooth page fade between pages
  $$("a[href]").forEach(a => {
    const h = a.getAttribute("href");
    if (!h || h.startsWith("#") || h.startsWith("mailto:") || a.target === "_blank" || !h.endsWith(".html")) return;
    a.addEventListener("click", e => {
      e.preventDefault(); document.body.classList.add("leaving");
      setTimeout(() => location.href = h, 280);
    });
  });
  $$('a[href="#top"]').forEach(a => a.addEventListener("click", e => { e.preventDefault(); scrollTo({ top: 0, behavior: "smooth" }); }));
}

/* ---------------- 4. home: rotating role ---------------- */
function initRoles() {
  const el = $("#role"); if (!el || !CONFIG.roles.length) return;
  let i = 0; el.textContent = CONFIG.roles[0];
  setInterval(() => {
    el.classList.add("fade");
    setTimeout(() => { i = (i + 1) % CONFIG.roles.length; el.textContent = CONFIG.roles[i]; el.classList.remove("fade"); }, 350);
  }, 3200);
}

/* ---------------- 5. reveal, counters, skill bars ---------------- */
function initReveal() {
  const io = new IntersectionObserver(es => es.forEach(e => {
    if (!e.isIntersecting) return;
    const t = e.target; t.classList.add("show");
    $$(".bar i", t).forEach(b => b.style.width = b.dataset.w + "%");
    io.unobserve(t);
  }), { threshold: .15 });
  $$(".reveal").forEach(el => io.observe(el));

  const co = new IntersectionObserver(es => es.forEach(e => {
    if (!e.isIntersecting) return;
    const el = e.target, end = +el.dataset.count, suf = el.dataset.suffix || "+";
    let n = 0; const step = Math.max(1, Math.ceil(end / 40));
    const t = setInterval(() => { n = Math.min(end, n + step); el.textContent = n + suf; if (n >= end) clearInterval(t); }, 35);
    co.unobserve(el);
  }), { threshold: .6 });
  $$("[data-count]").forEach(el => co.observe(el));
}

/* ---------------- 6. projects: render, filter, modal ---------------- */
function thumbHTML(p) {
  const lines = p.head.split("|");
  const hl = lines.map((l, i) => i === lines.length - 1 && lines.length > 1 ? `<em>${l}</em>` : l).join("<br>");
  if (p.image) return `<div class="thumb has-img t-${p.theme}" style="background-image:url('${p.image}')"></div>`;
  return `<div class="thumb t-${p.theme}"><small>${p.title.toUpperCase()}</small><strong>${hl}</strong><span>${p.sub}</span></div>`;
}
function initProjects() {
  const grid = $("#projGrid"); if (!grid) return;
  grid.innerHTML = PROJECTS.map((p, i) => `
    <article class="proj reveal" data-cat="${p.cat}" data-i="${i}" tabindex="0">
      ${thumbHTML(p)}
      <div class="cap"><span class="no">${String(i + 1).padStart(2, "0")}</span>
        <div><h4>${p.title}</h4><p>${p.type}</p></div><span class="ic">${svg("arrow")}</span></div>
    </article>`).join("");

  const cats = ["All", ...new Set(PROJECTS.map(p => p.cat))];
  $("#filters").innerHTML = cats.map((c, i) => `<button class="chip${i ? "" : " on"}" data-f="${c}">${c}</button>`).join("");
  $$("#filters .chip").forEach(b => b.addEventListener("click", () => {
    $$("#filters .chip").forEach(x => x.classList.toggle("on", x === b));
    $$(".proj").forEach(c => c.classList.toggle("hide", b.dataset.f !== "All" && c.dataset.cat !== b.dataset.f));
  }));

  const dlg = $("#modal");
  const open = i => {
    const p = PROJECTS[i];
    $("#dlgBody").innerHTML = `${thumbHTML(p)}<div class="dlg-body"><h3>${p.title}</h3>
      <div class="meta">${p.type} · ${p.year}</div><p>${p.desc}</p>
      <div class="tags">${p.tags.map(t => `<span class="tag">${t}</span>`).join("")}</div>
      <p style="margin-top:22px"><a class="btn" href="${p.link}" target="_blank" rel="noopener">View project <span class="ic">${svg("arrow")}</span></a></p></div>`;
    dlg.showModal();
  };
  grid.addEventListener("click", e => { const c = e.target.closest(".proj"); if (c) open(+c.dataset.i); });
  grid.addEventListener("keydown", e => { if (e.key === "Enter") { const c = e.target.closest(".proj"); if (c) open(+c.dataset.i); } });
  $(".dlg-close").addEventListener("click", () => dlg.close());
  dlg.addEventListener("click", e => { if (e.target === dlg) dlg.close(); });
}

/* ---------------- 7. contact: copy rows + validated form ---------------- */
function initContact() {
  $$(".clist li").forEach(li => li.addEventListener("click", () => {
    const txt = $("span", li).textContent.trim();
    navigator.clipboard?.writeText(txt).then(() => toast("Copied: " + txt)).catch(() => {});
  }));
  const form = $("#cform"); if (!form) return;
  const rules = {
    name: v => v.trim().length >= 2 || "Please enter your name",
    email: v => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v) || "Please enter a valid email",
    message: v => v.trim().length >= 10 || "Message should be at least 10 characters"
  };
  const check = el => {
    const r = rules[el.name](el.value), f = el.closest(".field");
    f.classList.toggle("err", r !== true); $(".msg", f).textContent = r === true ? "" : r;
    return r === true;
  };
  $$("input,textarea", form).forEach(el => el.addEventListener("blur", () => check(el)));
  form.addEventListener("submit", e => {
    e.preventDefault();
    const ok = $$("input,textarea", form).map(check).every(Boolean);
    if (!ok) return;
    const d = Object.fromEntries(new FormData(form));
    const body = `${d.message}\n\n— ${d.name} (${d.email})`;
    location.href = `mailto:${CONFIG.email}?subject=${encodeURIComponent("Portfolio message from " + d.name)}&body=${encodeURIComponent(body)}`;
    $("#ok").textContent = "Thanks! Your email app should open with your message ready to send.";
    form.reset();
  });
}

/* ---------------- start ---------------- */
document.addEventListener("DOMContentLoaded", () => {
  applyConfig(); initPhoto(); initNav(); initRoles(); initProjects(); initContact(); initReveal();
  requestAnimationFrame(() => document.body.classList.add("ready"));
});
window.addEventListener("pageshow", e => { if (e.persisted) document.body.classList.remove("leaving"); });
/* Projects page: filter buttons + click-to-open pop-up (you normally don't need to edit this) */
document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll("#pfilters .chip");
  const cards = document.querySelectorAll("#pgrid .pcard");

  /* ----- filter ----- */
  buttons.forEach(btn => btn.addEventListener("click", () => {
    buttons.forEach(b => b.classList.toggle("on", b === btn));
    const f = btn.dataset.filter;
    cards.forEach(c => c.classList.toggle("hide", f !== "all" && c.dataset.cat !== f));
  }));

  /* ----- pop-up ----- */
  const dlg = document.getElementById("pmodal");
  const pmImg = dlg.querySelector(".pm-img");
  const ICON_ARROW = '<svg viewBox="0 0 24 24"><path d="M4 12h16m-6-6 6 6-6 6"/></svg>';

  function openCard(card) {
    const img = card.querySelector(".pcard-img img");
    const title = card.querySelector("h3").textContent;
    const sub = card.querySelector(".pcard-text p").textContent;
    const d = card.dataset;

    pmImg.classList.toggle("empty", !img);
    const pi = pmImg.querySelector("img");
    if (img) { pi.src = img.src; pi.alt = title; pi.style.display = ""; }
    else { pi.removeAttribute("src"); pi.style.display = "none"; }

    document.getElementById("pm-title").textContent = title;
    document.getElementById("pm-meta").textContent = [sub, d.projectYear].filter(Boolean).join(" · ");
    document.getElementById("pm-desc").textContent = d.desc || "";
    document.getElementById("pm-tags").innerHTML = (d.tags || "").split(",").map(t => t.trim()).filter(Boolean)
      .map(t => `<span class="tag">${t}</span>`).join("");

    const link = document.getElementById("pm-link");
    const has = d.link && d.link !== "#";
    document.getElementById("pm-btn-wrap").style.display = has ? "" : "none";
    if (has) link.href = d.link;

    dlg.showModal();
  }

  cards.forEach(card => {
    card.addEventListener("click", () => openCard(card));
    card.addEventListener("keydown", e => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); openCard(card); } });
  });
  dlg.querySelector(".dlg-close").addEventListener("click", () => dlg.close());
  dlg.addEventListener("click", e => { if (e.target === dlg) dlg.close(); });
});
/* Projects page: filter buttons (you normally don't need to edit this) */
document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll("#pfilters .chip");
  const cards = document.querySelectorAll("#pgrid .pcard");

  buttons.forEach(btn => btn.addEventListener("click", () => {
    buttons.forEach(b => b.classList.toggle("on", b === btn));
    const f = btn.dataset.filter;
    cards.forEach(c => c.classList.toggle("hide", f !== "all" && c.dataset.cat !== f));
  }));
});
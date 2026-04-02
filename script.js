/* =============================================
   TRAVELOOP - Main JavaScript (Enhanced v2)
   ============================================= */

/* ── City Metadata ─────────────────────────── */
const CITY_META = {
  chennai: {
    name: "Chennai", tagline: "The Gateway of South India",
    description: "Chennai is the cultural capital of South India, known for its rich Dravidian heritage, Marina Beach — the world's second longest urban beach — Kapaleeshwarar Temple, and its vibrant classical music and dance scene. It's a city where tradition meets modernity.",
    img: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=1200&q=80",
    mapCenter: [13.0827, 80.2707], mapZoom: 12,
    areaIcons: { "t-nagar":"🛍️","adyar":"🌳","velachery":"🏙️","mylapore":"🛕","anna-nagar":"🌆" },
    areaDesc: { "t-nagar":"The shopping hub of Chennai, known for silk sarees and street food.","adyar":"A green residential neighbourhood along the Adyar river.","velachery":"A busy commercial suburb with great connectivity.","mylapore":"The cultural heart of Chennai with temples and heritage.","anna-nagar":"A well-planned residential and commercial area." },
    areaCoords: {
      "t-nagar":    [13.0418, 80.2341],
      "adyar":      [13.0067, 80.2573],
      "velachery":  [12.9815, 80.2180],
      "mylapore":   [13.0339, 80.2619],
      "anna-nagar": [13.0850, 80.2101]
    }
  },
  shimla: {
    name: "Shimla", tagline: "The Queen of Hill Stations",
    description: "Shimla, the capital of Himachal Pradesh, is a charming colonial hill town set at 2,200 metres in the Himalayas. Famous for its Mall Road, Viceregal Lodge, and sweeping cedar forests, it's the perfect escape from the Indian plains.",
    img: "https://images.unsplash.com/photo-1472396961693-142e6e269027?w=1200&q=80",
    mapCenter: [31.1048, 77.1734], mapZoom: 13,
    areaIcons: { "mall-road":"🛍️","kufri":"⛷️","sanjauli":"🏘️","chotta-shimla":"🌲","lakkar-bazaar":"🪵" },
    areaDesc: { "mall-road":"The iconic promenade — shops, cafes, and views.","kufri":"Famous for skiing and adventure sports.","sanjauli":"Serene suburb with stunning valley views.","chotta-shimla":"Quiet area with lush pine forests.","lakkar-bazaar":"Famous for wooden crafts and local market." },
    areaCoords: {
      "mall-road":     [31.1048, 77.1734],
      "kufri":         [31.0987, 77.2633],
      "sanjauli":      [31.0936, 77.1675],
      "chotta-shimla": [31.0965, 77.1510],
      "lakkar-bazaar": [31.1020, 77.1691]
    }
  },
  varanasi: {
    name: "Varanasi", tagline: "The Spiritual Capital of India",
    description: "Varanasi, one of the world's oldest continuously inhabited cities, sits on the banks of the sacred Ganga. The evening Ganga Aarti at Dashashwamedh Ghat is a transcendent experience that draws pilgrims and travellers from across the world.",
    img: "https://images.unsplash.com/photo-1516483638261-f4dbaf036963?w=1200&q=80",
    mapCenter: [25.3176, 82.9739], mapZoom: 13,
    areaIcons: { "dashashwamedh":"🪔","assi":"🛕","godowlia":"🛍️","cantt":"🏨","lanka":"🎓" },
    areaDesc: { "dashashwamedh":"Home to the famous ghat and grand Ganga Aarti.","assi":"Popular with travellers and yogis.","godowlia":"The bustling commercial centre of old Varanasi.","cantt":"Modern area near the railway station.","lanka":"Lively area near BHU, great for budget stays." },
    areaCoords: {
      "dashashwamedh": [25.3109, 83.0107],
      "assi":          [25.2875, 82.9997],
      "godowlia":      [25.3132, 83.0094],
      "cantt":         [25.3274, 82.9677],
      "lanka":         [25.2692, 82.9907]
    }
  }
};

const SUPPORTED_CITIES = ["chennai", "shimla", "varanasi"];
const HOTEL_IMAGES = [
  "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600&q=80",
  "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=600&q=80",
  "https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=600&q=80",
  "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=600&q=80",
  "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=600&q=80",
  "https://images.unsplash.com/photo-1584132967334-10e028bd69f7?w=600&q=80",
];

const STATE = {
  data: null, currentCity: "", currentArea: "",
  currentHotels: [], allCityHotels: [],
  activeFilters: { wifi:false, wheelchair:false, pet_friendly:false, pool:false, restaurant:false }
};

/* ═══════════════════════════════════════════
   MULTI-LANGUAGE SUPPORT
   ═══════════════════════════════════════════ */
const translations = {

 en:{
  home:"Home",
  explore:"Explore",
  planner:"Planner",
  travel_buddy:"Travel Buddy",
  login:"Login",

  hero_title:"Explore the World with Traveloop",
  hero_sub:"Discover breathtaking destinations",
  search_placeholder:"Where do you want to go?"
 },

 hi:{
  home:"होम",
  explore:"खोजें",
  planner:"प्लानर",
  travel_buddy:"यात्रा साथी",
  login:"लॉग इन",

  hero_title:"Traveloop के साथ दुनिया घूमें",
  hero_sub:"अद्भुत स्थान खोजें",
  search_placeholder:"आप कहाँ जाना चाहते हैं?"
 },

 ta:{
  home:"முகப்பு",
  explore:"ஆராயுங்கள்",
  planner:"திட்டமிடுபவர்",
  travel_buddy:"பயண நண்பர்",
  login:"உள்நுழை",

  hero_title:"Traveloop உடன் உலகத்தை ஆராயுங்கள்",
  hero_sub:"அற்புதமான இடங்களை கண்டறியுங்கள்",
  search_placeholder:"நீங்கள் எங்கு செல்ல விரும்புகிறீர்கள்?"
 }

}

let currentLang = localStorage.getItem("traveloop-lang") || "en";
function t(key) { return (translations[currentLang] || translations.en)[key] || key; }

function setLanguage(lang) {
  currentLang = lang;
  localStorage.setItem("traveloop-lang", lang);
  applyTranslations();
  document.querySelectorAll(".lang-btn").forEach(b => b.classList.toggle("active", b.dataset.lang === lang));
}

function applyTranslations() {
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    if (el.placeholder !== undefined && el.tagName === "INPUT") el.placeholder = t(key);
    else el.textContent = t(key);
  });
}

/*function injectLangToggle() {
  if (document.getElementById("lang-toggle")) return;
  const wrapper = document.createElement("div");
  wrapper.id = "lang-toggle";
  ["en","hi","ta"].forEach(lang => {
    const labels = { en:"EN", hi:"हिंदी", ta:"தமிழ்" };
    const btn = document.createElement("button");
    btn.className = "lang-btn" + (currentLang === lang ? " active" : "");
    btn.dataset.lang = lang;
    btn.textContent = labels[lang];
    btn.onclick = () => setLanguage(lang);
    wrapper.appendChild(btn);
  });
  document.body.appendChild(wrapper);
}

/* ═══════════════════════════════════════════
   DARK MODE
   ═══════════════════════════════════════════ */
function initTheme() {
  const saved = localStorage.getItem("traveloop-theme") || "light";
  document.documentElement.setAttribute("data-theme", saved);
  updateThemeIcon(saved);
}
function toggleTheme() {
  const cur = document.documentElement.getAttribute("data-theme") || "light";
  const next = cur === "light" ? "dark" : "light";
  document.documentElement.setAttribute("data-theme", next);
  localStorage.setItem("traveloop-theme", next);
  updateThemeIcon(next);
}
function updateThemeIcon(theme) {
  const btn = document.getElementById("theme-toggle");
  if (btn) btn.innerHTML = theme === "dark" ? "☀️" : "🌙";
}
function injectThemeToggle() {
  if (document.getElementById("theme-toggle")) return;
  const btn = document.createElement("button");
  btn.id = "theme-toggle"; btn.onclick = toggleTheme; btn.title = "Toggle theme"; btn.innerHTML = "🌙";
  document.body.appendChild(btn);
}

/* ═══════════════════════════════════════════
   NAVBAR
   ═══════════════════════════════════════════ */
document.addEventListener("DOMContentLoaded", () => {
  initTheme(); injectThemeToggle(); injectLangToggle();
  setTimeout(applyTranslations, 100);
  const hamburger = document.querySelector(".hamburger");
  const navLinks  = document.querySelector(".nav-links");
  if (hamburger && navLinks) hamburger.addEventListener("click", () => navLinks.classList.toggle("open"));
  const page = window.location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll(".nav-links a").forEach(link => {
    if (link.getAttribute("href") === page) link.classList.add("active");
  });
  window.addEventListener("scroll", () => {
    const nav = document.querySelector(".navbar");
    if (nav) nav.classList.toggle("scrolled", window.scrollY > 20);
  });
});

/* ═══════════════════════════════════════════
   HELPERS
   ═══════════════════════════════════════════ */
function starsHTML(rating) {
  const full = Math.floor(rating), half = rating % 1 >= 0.5;
  let s = ""; for (let i=0;i<full;i++) s+="★"; if(half) s+="½";
  return `<span class="stars">${s}</span> <span style="color:#aaa;font-size:0.85rem">${rating}</span>`;
}
function formatPrice(p) { return "₹" + Number(p||0).toLocaleString("en-IN"); }
function getParam(key) { return new URLSearchParams(window.location.search).get(key); }
function getPageName() { return window.location.pathname.split("/").pop() || "index.html"; }
function toSlug(v)  { return (v||"").toString().trim().toLowerCase().replace(/[^a-z0-9]+/g,"-").replace(/^-+|-+$/g,""); }
function toTitle(v) { return (v||"").split("-").filter(Boolean).map(w=>w[0].toUpperCase()+w.slice(1)).join(" "); }
function showMsg(el, msg, type) {
  if (!el) return;
  el.className = type==="error" ? "error-msg" : "success-msg";
  el.textContent = msg; el.style.display = "block";
}
function getHotelImage(i) { return HOTEL_IMAGES[i % HOTEL_IMAGES.length]; }
function getReviews(slug) { try { return JSON.parse(localStorage.getItem("reviews_"+slug)||"[]"); } catch { return []; } }
function saveReview(slug, review) { const l=getReviews(slug); l.unshift(review); localStorage.setItem("reviews_"+slug, JSON.stringify(l)); }

/* ═══════════════════════════════════════════
   DATA LOADING
   ═══════════════════════════════════════════ */
async function loadData() {
  if (STATE.data) return STATE.data;
  try {
    const res = await fetch("./data.json");
    if (!res.ok) throw new Error("failed");
    STATE.data = await res.json(); return STATE.data;
  } catch(e) { console.error("loadData:",e); return null; }
}

function getCityData(raw, city) {
  const cityRaw = raw[city];
  if (!cityRaw || !cityRaw.areas) return null;
  const allHotels=[], allRest=[], allAttr=[], allRentals=[], areaList=[];
  const meta = CITY_META[city] || {};
  Object.entries(cityRaw.areas).forEach(([slug, areaData]) => {
    const areaName = toTitle(slug);
    const coords = (meta.areaCoords||{})[slug] || null;
    areaList.push({ slug, name:areaName, icon:(meta.areaIcons||{})[slug]||"📍", desc:(meta.areaDesc||{})[slug]||`Explore ${areaName}`, coords });
    (areaData.hotels||[]).forEach(h => allHotels.push({...h,area:slug,areaName,img:getHotelImage(allHotels.length),amenities:h.amenities||["WiFi","AC","Parking","Room Service"]}));
    (areaData.restaurants||[]).forEach(r => allRest.push({...r,area:slug,areaName}));
    (areaData.attractions||[]).forEach(a => allAttr.push({...a,area:slug}));
    (areaData.rentals||[]).forEach(r => allRentals.push({...r,area:slug,areaName}));
  });
  return { name:meta.name||toTitle(city), tagline:meta.tagline||"", description:meta.description||"",
    img:meta.img||"", areas:areaList, hotels:allHotels, restaurants:allRest, attractions:allAttr, rentals:allRentals,
    mapCenter:meta.mapCenter||[20.5937,78.9629], mapZoom:meta.mapZoom||12 };
}

function resolveCity(raw) {
  const params = new URLSearchParams(window.location.search);
  const p = (params.get("city")||params.get("place")||"").toLowerCase().trim();
  if (!p) return null;
  return SUPPORTED_CITIES.find(c => c===p || p.startsWith(c)) || null;
}

/* ═══════════════════════════════════════════
   SEARCH
   ═══════════════════════════════════════════ */
function handleSearch() {
  const input = document.getElementById("search-input"); if(!input) return;
  const city = input.value.trim().toLowerCase(); if(!city) return;
  const match = SUPPORTED_CITIES.find(c=>c.includes(city)||city.includes(c));
  window.location.href = match ? `destination.html?city=${match}` : "explore.html";
}
const _si = document.getElementById("search-input");
if (_si) _si.addEventListener("keydown", e => { if(e.key==="Enter") handleSearch(); });

/* ═══════════════════════════════════════════
   FEATURE 1: INTERACTIVE LEAFLET MAP
   ═══════════════════════════════════════════ */
let _leafletMap = null;

function initLeafletMap(city, cityData) {
  const container = document.getElementById("interactive-map");
  if (!container) return;
  if (!document.getElementById("leaflet-css")) {
    const link = document.createElement("link");
    link.id="leaflet-css"; link.rel="stylesheet";
    link.href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css";
    document.head.appendChild(link);
  }
  const doInit = () => _renderLeafletMap(city, cityData);
  if (window.L) doInit();
  else {
    const s = document.createElement("script");
    s.src="https://unpkg.com/leaflet@1.9.4/dist/leaflet.js";
    s.onload = doInit; document.head.appendChild(s);
  }
}

function _renderLeafletMap(city, cityData) {
  if (_leafletMap) return;
  const container = document.getElementById("interactive-map");
  if (!container) return;
  _leafletMap = L.map("interactive-map", { center:cityData.mapCenter, zoom:cityData.mapZoom, scrollWheelZoom:false });
  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution:"© OpenStreetMap contributors", maxZoom:18
  }).addTo(_leafletMap);

  const meta = CITY_META[city] || {};
  cityData.areas.forEach(area => {
    if (!area.coords) return;
    const emoji = (meta.areaIcons||{})[area.slug] || "📍";
    const icon = L.divIcon({
      className:"",
      html:`<div class="map-pin-wrap"><div class="map-pin-bubble">${emoji}</div><div class="map-pin-name">${area.name}</div></div>`,
      iconSize:[60,60], iconAnchor:[30,55], popupAnchor:[0,-55]
    });
    const hotels = cityData.hotels.filter(h=>h.area===area.slug).length;
    const rests  = cityData.restaurants.filter(r=>r.area===area.slug).length;
    L.marker(area.coords, {icon}).addTo(_leafletMap).bindPopup(`
      <div style="font-family:'DM Sans',sans-serif;min-width:200px">
        <div style="font-size:1.5rem;margin-bottom:4px">${emoji}</div>
        <div style="font-weight:700;font-size:1rem;color:#1a1a2e;margin-bottom:4px">${area.name}</div>
        <div style="font-size:0.82rem;color:#777;margin-bottom:8px">${area.desc}</div>
        <div style="display:flex;gap:8px;font-size:0.78rem;color:#555;margin-bottom:10px">
          <span>🏨 ${hotels} hotels</span><span>🍽️ ${rests} restaurants</span>
        </div>
        <div style="display:flex;flex-direction:column;gap:5px">
          <a href="hotels.html?city=${city}&area=${area.slug}" style="background:#ff9800;color:#fff;padding:5px 10px;border-radius:6px;font-size:0.8rem;font-weight:600;text-align:center;text-decoration:none">🏨 Hotels</a>
          <a href="restaurants.html?city=${city}&area=${area.slug}" style="background:#1a1a2e;color:#fff;padding:5px 10px;border-radius:6px;font-size:0.8rem;font-weight:600;text-align:center;text-decoration:none">🍽️ Restaurants</a>
          <a href="events.html?city=${city}&area=${area.slug}"
            style="background:#ff9800;color:#fff;padding:5px 10px;border-radius:6px;font-size:0.8rem;font-weight:600;text-align:center;text-decoration:none">
            🎉 Events
          </a>
          <a href="rentals.html?city=${city}&area=${area.slug}" style="border:1px solid #ff9800;color:#ff9800;padding:5px 10px;border-radius:6px;font-size:0.8rem;font-weight:600;text-align:center;text-decoration:none">🚗 Rentals</a>
        </div>
      </div>
    `, {maxWidth:240});
  });
}

/* ═══════════════════════════════════════════
   DESTINATION PAGE
   ═══════════════════════════════════════════ */
async function loadDestinationPage() {
  const raw = await loadData();
  if (!raw) { showDestError("Could not load travel data."); return; }
  const city = resolveCity(raw);
  if (!city) { showDestError("Try Chennai, Shimla, or Varanasi."); return; }
  const cityData = getCityData(raw, city);
  if (!cityData) { showDestError("Data not found."); return; }

  const url = new URL(window.location.href);
  url.searchParams.set("city",city); url.searchParams.delete("place");
  window.history.replaceState({}, "", url.toString());
  document.title = `${cityData.name} – Traveloop`;

  const set = (id,v) => { const el=document.getElementById(id); if(el) el.textContent=v; };
  set("dest-name",cityData.name); set("dest-name-hero",cityData.name);
  set("dest-tagline",cityData.tagline); set("dest-desc",cityData.description);
  const crumb = document.querySelector(".breadcrumb span"); if(crumb) crumb.textContent=cityData.name;

  // Replace iframe with Leaflet map
  const mapCont = document.querySelector(".map-container");
  if (mapCont) {
    const iframe = mapCont.querySelector("iframe");
    const mapDiv = document.createElement("div");
    mapDiv.id = "interactive-map";
    mapDiv.style.cssText = "width:100%;height:450px;border-radius:16px;overflow:hidden;box-shadow:0 8px 40px rgba(0,0,0,0.15);";
    if (iframe) iframe.replaceWith(mapDiv);
    else mapCont.appendChild(mapDiv);
  }
  setTimeout(() => initLeafletMap(city, cityData), 300);

  const infoEl = document.getElementById("dest-info");
  if (infoEl) infoEl.innerHTML = `
    <div class="info-box"><h4>📍 City</h4><p>${cityData.name}</p></div>
    <div class="info-box"><h4>🏨 Hotels</h4><p>${cityData.hotels.length} listed</p></div>
    <div class="info-box"><h4>🍽️ Restaurants</h4><p>${cityData.restaurants.length} listed</p></div>
    <div class="info-box"><h4>🎯 Attractions</h4><p>${cityData.attractions.length} places</p></div>
  `;

  const areasEl = document.getElementById("dest-areas");
  if (areasEl) areasEl.innerHTML = cityData.areas.map(area=>`
    <div class="area-card fade-in">
      <div class="area-icon">${area.icon}</div>
      <div class="area-name">${area.name}</div>
      <div class="area-desc">${area.desc}</div>
      <div style="margin-top:0.8rem;display:flex;gap:0.5rem;justify-content:center;flex-wrap:wrap;">
        <a class="btn btn-outline" style="font-size:0.8rem;padding:0.35rem 0.75rem" href="hotels.html?city=${city}&area=${area.slug}">🏨 Hotels</a>
        <a class="btn btn-primary" style="font-size:0.8rem;padding:0.35rem 0.75rem" href="restaurants.html?city=${city}&area=${area.slug}">🍽️ Restaurants</a>
        <a class="btn btn-outline" style="font-size:0.8rem;padding:0.35rem 0.75rem;border-color:#ff9800;color:#ff9800"
          href="events.html?city=${city}&area=${area.slug}">
          🎉 Events
        </a>
        <a class="btn btn-outline" style="font-size:0.8rem;padding:0.35rem 0.75rem;border-color:var(--primary-dark);color:var(--primary-dark)" href="rentals.html?city=${city}&area=${area.slug}">🚗 Rentals</a>
      </div>
    </div>`).join("");

  const thingsEl = document.getElementById("dest-things");
  if (thingsEl) thingsEl.innerHTML = cityData.attractions.slice(0,12).map(a=>`
    <div class="thing-card"><div class="thing-icon">🏛️</div>
    <div class="thing-info"><h4>${a.name}</h4><p>${a.type||"Attraction"} · ${toTitle(a.area)}</p></div></div>`).join("") || "<p>No attraction data.</p>";

  const restEl = document.getElementById("dest-restaurants");
  if (restEl) restEl.innerHTML = cityData.restaurants.slice(0,12).map(r=>`
    <div class="thing-card"><div class="thing-icon">🍽️</div>
    <div class="thing-info"><h4>${r.name}</h4><p>${toTitle(r.area)} · ${formatPrice(r.price)} avg/person</p></div></div>`).join("");

  const allLink = document.getElementById("all-hotels-link");
  if (allLink) allLink.href = `hotels.html?city=${city}`;
}
function showDestError(msg) {
  const h = document.querySelector(".page-hero-content");
  if(h) h.innerHTML=`<h1>Not Available</h1><p>${msg}</p><a href="explore.html" class="btn btn-primary" style="margin-top:1rem">Browse Destinations</a>`;
}

/* ═══════════════════════════════════════════
   HOTELS PAGE
   ═══════════════════════════════════════════ */
async function loadHotelsPage() {
  const raw = await loadData(); if(!raw) return;
  const city = resolveCity(raw);
  if (!city) { const g=document.getElementById("hotels-grid"); if(g) g.innerHTML=`<div class="info-box"><h4>No city selected</h4><a href="explore.html">Browse Destinations</a></div>`; return; }
  const cityData = getCityData(raw, city); if(!cityData) return;
  const areaParam = (getParam("area")||"").toLowerCase().trim();
  STATE.currentCity=city; STATE.currentArea=areaParam;
  STATE.allCityHotels=cityData.hotels;
  STATE.activeFilters={wifi:false,wheelchair:false,pet_friendly:false,pool:false,restaurant:false};
  let hotels = areaParam ? cityData.hotels.filter(h=>h.area===areaParam) : cityData.hotels;
  STATE.currentHotels=hotels;
  const h=document.getElementById("hotels-heading");
  if(h) h.textContent = areaParam ? `Hotels in ${toTitle(areaParam)}, ${cityData.name}` : `Hotels in ${cityData.name}`;
  buildAreaTabs(cityData.areas, city, areaParam);
  buildAmenityFilters();
  renderHotels(hotels);
}

function buildAreaTabs(areas, city, activeArea) {
  const el = document.getElementById("area-tabs"); if(!el) return;
  el.innerHTML = `<button class="tab-btn ${!activeArea?"active":""}" onclick="goToArea('','${city}')">${t("All Areas")}</button>` +
    areas.map(a=>`<button class="tab-btn ${activeArea===a.slug?"active":""}" onclick="goToArea('${a.slug}','${city}')">${a.icon} ${a.name}</button>`).join("");
}
function goToArea(slug, city) {
  const url = new URL(window.location.href);
  url.searchParams.set("city",city);
  if(slug) url.searchParams.set("area",slug); else url.searchParams.delete("area");
  window.location.href = url.toString();
}
function buildAmenityFilters() {
  const container = document.getElementById("amenity-filters"); if(!container) return;
  const filters = [{key:"wifi",label:"📶 WiFi"},{key:"wheelchair",label:"♿ Accessible"},{key:"pet_friendly",label:"🐾 Pet Friendly"},{key:"pool",label:"🏊 Pool/Spa"},{key:"restaurant",label:"🍽️ Restaurant"}];
  container.innerHTML = `<span style="font-weight:600;color:var(--dark);font-size:0.9rem;white-space:nowrap">${t("Filter By")}:</span>` +
    filters.map(f=>`<button class="filter-chip" id="chip-${f.key}" onclick="toggleAmenityFilter('${f.key}')">${f.label}</button>`).join("");
}
function toggleAmenityFilter(key) {
  STATE.activeFilters[key]=!STATE.activeFilters[key];
  const chip=document.getElementById("chip-"+key); if(chip) chip.classList.toggle("active",STATE.activeFilters[key]);
  applyFilters();
}
function applyFilters() {
  let hotels=[...STATE.currentHotels];
  Object.entries(STATE.activeFilters).forEach(([key,active])=>{if(active) hotels=hotels.filter(h=>h[key]);});
  renderHotels(hotels);
}
function renderHotels(hotels) {
  const container=document.getElementById("hotels-grid"); if(!container) return;
  if(!hotels.length) { container.innerHTML=`<div class="info-box" style="grid-column:1/-1"><h4>No Hotels Found</h4><p>Try removing filters or selecting a different area.</p></div>`; const c=document.getElementById("hotel-count");if(c)c.textContent="0 hotels found"; return; }
  container.innerHTML = hotels.map(h=>`
    <div class="card fade-in" style="cursor:pointer" onclick="viewHotel('${toSlug(h.name)}')">
      <div class="card-img-wrap"><img class="card-img" src="${h.img}" alt="${h.name}" loading="lazy"><div class="card-badge">🏨 ${toTitle(h.area)}</div></div>
      <div class="card-body">
        <div class="card-title">${h.name}</div>
        <div class="card-meta"><div>${starsHTML(h.rating||4)}</div><div class="price">${formatPrice(h.price)} <small>/ night</small></div></div>
        <div class="chips">${(h.amenities||[]).slice(0,4).map(a=>`<span class="chip">✓ ${a}</span>`).join("")}</div>
        <button class="btn btn-primary btn-full" style="margin-top:0.8rem">${t("View Details")} →</button>
      </div></div>`).join("");
  const c=document.getElementById("hotel-count"); if(c) c.textContent=`${hotels.length} hotel${hotels.length!==1?"s":""} found`;
}
function sortHotels() {
  const mode=document.getElementById("sort-hotels")?.value||"rating";
  let hotels=[...STATE.currentHotels];
  Object.entries(STATE.activeFilters).forEach(([k,a])=>{if(a)hotels=hotels.filter(h=>h[k]);});
  if(mode==="price-asc") hotels.sort((a,b)=>a.price-b.price);
  else if(mode==="price-desc") hotels.sort((a,b)=>b.price-a.price);
  else hotels.sort((a,b)=>(b.rating||0)-(a.rating||0));
  renderHotels(hotels);
}
function viewHotel(slug) {
  const hotel=STATE.currentHotels.find(h=>toSlug(h.name)===slug)||STATE.allCityHotels.find(h=>toSlug(h.name)===slug);
  if(!hotel) return;
  sessionStorage.setItem("selectedHotel",JSON.stringify(hotel));
  window.location.href=`hotel-details.html?city=${STATE.currentCity}&hotel=${encodeURIComponent(slug)}`;
}

/* ═══════════════════════════════════════════
   HOTEL DETAILS + REVIEWS
   ═══════════════════════════════════════════ */
function loadHotelDetails() {
  let hotel=null;
  const stored=sessionStorage.getItem("selectedHotel"); if(stored) hotel=JSON.parse(stored);
  if(!hotel) hotel={name:"Selected Hotel",rating:4.4,price:3000,area:"city-centre",areaName:"City Centre",amenities:["WiFi","AC","Parking","Room Service"],img:HOTEL_IMAGES[0]};
  sessionStorage.setItem("bookingHotel",JSON.stringify(hotel));
  const set=(id,v)=>{const el=document.getElementById(id);if(el)el.textContent=v;};
  set("hotel-name",hotel.name); set("hotel-name-crumb",hotel.name); set("hotel-area",hotel.areaName||toTitle(hotel.area||""));
  const imgEl=document.getElementById("hotel-img"); if(imgEl) imgEl.src=hotel.img||HOTEL_IMAGES[0];
  const rEl=document.getElementById("hotel-rating"); if(rEl) rEl.innerHTML=starsHTML(hotel.rating||4.2);
  const pEl=document.getElementById("hotel-price"); if(pEl) pEl.innerHTML=`${formatPrice(hotel.price)} <small>/ night</small>`;
  const aEl=document.getElementById("hotel-amenities"); if(aEl) aEl.innerHTML=(hotel.amenities||[]).map(a=>`<div class="amenity">✓ ${a}</div>`).join("");
  document.title=`${hotel.name} – Traveloop`;
  setTimeout(updateTotal,50); renderReviewSection(toSlug(hotel.name));
}
function updateTotal() {
  const nights=parseInt(document.getElementById("nights-input")?.value||"2")||1;
  const hotel=JSON.parse(sessionStorage.getItem("bookingHotel")||sessionStorage.getItem("selectedHotel")||"{}");
  const price=Number(hotel.price||3000);
  const set=(id,v)=>{const el=document.getElementById(id);if(el)el.textContent=v;};
  set("nights-display",nights); set("price-per-night",formatPrice(price)); set("subtotal",formatPrice(price*nights));
}
function bookNow() {
  const hotel=JSON.parse(sessionStorage.getItem("bookingHotel")||"{}");
  const nights=parseInt(document.getElementById("nights-input")?.value||"1")||1;
  const price=Number(hotel.price||0);
  sessionStorage.setItem("bookingSummary",JSON.stringify({type:"hotel",name:hotel.name||"Hotel Stay",price,nights,total:price*nights}));
  window.location.href="billing.html";
}
function renderReviewSection(hotelSlug) {
  const section=document.getElementById("reviews-section"); if(!section) return;
  const reviews=getReviews(hotelSlug);
  const avg=reviews.length?(reviews.reduce((s,r)=>s+r.rating,0)/reviews.length).toFixed(1):null;
  section.innerHTML=`<div class="divider"></div><div class="section-label" style="margin-bottom:1rem;">⭐ Guest Reviews</div>
    ${avg?`<div style="display:flex;align-items:center;gap:1rem;margin-bottom:1.5rem"><div style="font-size:3rem;font-weight:900;color:var(--primary);font-family:'Playfair Display',serif">${avg}</div><div>${starsHTML(parseFloat(avg))}<div style="font-size:0.82rem;color:var(--text-light);margin-top:0.2rem">${reviews.length} review${reviews.length!==1?"s":""}</div></div></div>`:""}
    <div class="review-form-card"><div style="font-weight:700;font-size:1rem;margin-bottom:1rem">✍️ Write a Review</div>
      <div class="form-group"><label>Your Name</label><input type="text" id="review-name" placeholder="e.g. Priya K." style="max-width:260px"></div>
      <div class="form-group"><label>Rating</label><div class="star-picker" id="star-picker">${[1,2,3,4,5].map(n=>`<span class="star-btn" data-val="${n}" onclick="selectStar(${n})">★</span>`).join("")}</div></div>
      <div class="form-group"><label>Your Review</label><textarea id="review-text" rows="3" placeholder="Share your experience..."></textarea></div>
      <button class="btn btn-primary" onclick="submitReview('${hotelSlug}')">Submit Review</button>
      <div id="review-msg" style="margin-top:0.7rem;display:none"></div></div>
    <div id="reviews-list" style="margin-top:1.5rem;display:flex;flex-direction:column;gap:1rem">
      ${reviews.length?reviews.map(renderReviewCard).join(""):`<p style="color:var(--text-light)">No reviews yet — be the first!</p>`}</div>`;
}
function renderReviewCard(r) {
  return `<div class="review-card"><div style="display:flex;justify-content:space-between;align-items:flex-start;margin-bottom:0.5rem">
    <div><div style="font-weight:700;color:var(--dark)">${r.name}</div><div style="font-size:0.78rem;color:var(--text-light)">${r.date}</div></div>
    <div style="color:#f59e0b;font-size:1.1rem">${"★".repeat(r.rating)}</div></div>
    <p style="color:var(--text);line-height:1.7;font-size:0.92rem">${r.text}</p></div>`;
}
let _selectedStar=0;
function selectStar(val) { _selectedStar=val; document.querySelectorAll(".star-btn").forEach((s,i)=>s.classList.toggle("selected",i<val)); }
function submitReview(slug) {
  const name=(document.getElementById("review-name")?.value||"").trim()||"Anonymous";
  const text=(document.getElementById("review-text")?.value||"").trim();
  const msgEl=document.getElementById("review-msg");
  if(!text){showMsg(msgEl,"Please write your experience.","error");return;}
  if(!_selectedStar){showMsg(msgEl,"Please select a rating.","error");return;}
  saveReview(slug,{name,text,rating:_selectedStar,date:new Date().toLocaleDateString("en-IN",{day:"numeric",month:"short",year:"numeric"})});
  _selectedStar=0; setTimeout(()=>renderReviewSection(slug),400);
}

/* ═══════════════════════════════════════════
   RESTAURANTS PAGE
   ═══════════════════════════════════════════ */
async function loadRestaurantsPage() {
  const raw=await loadData(); if(!raw) return;
  const city=resolveCity(raw);
  if(!city){const g=document.getElementById("restaurants-grid");if(g)g.innerHTML=`<div class="info-box"><h4>No city</h4></div>`;return;}
  const cityData=getCityData(raw,city); if(!cityData) return;
  const areaParam=(getParam("area")||"").toLowerCase().trim();
  const restaurants=areaParam?cityData.restaurants.filter(r=>r.area===areaParam):cityData.restaurants;
  const h=document.getElementById("restaurants-heading"); if(h) h.textContent=areaParam?`Restaurants in ${toTitle(areaParam)}, ${cityData.name}`:`Restaurants in ${cityData.name}`;
  const s=document.getElementById("restaurants-sub"); if(s) s.textContent=`${restaurants.length} restaurant${restaurants.length!==1?"s":""} found`;
  const grid=document.getElementById("restaurants-grid"); if(!grid) return;
  if(!restaurants.length){grid.innerHTML=`<div class="info-box"><h4>No Restaurants</h4><p>Try a different area.</p></div>`;return;}
  grid.innerHTML=restaurants.map(r=>`<div class="card fade-in"><div class="card-body">
    <div class="card-title">${r.name}</div>
    <div class="card-desc">📍 ${toTitle(r.area)} · ${formatPrice(r.price)} avg/person</div>
    <button class="btn btn-primary btn-full" style="margin-top:1rem" onclick="bookRestaurant('${city}','${encodeURIComponent(r.name)}',${Number(r.price||0)})">${t("Book Now")}</button>
    </div></div>`).join("");
}
function bookRestaurant(city,enc,price){const name=decodeURIComponent(enc);sessionStorage.setItem("bookingSummary",JSON.stringify({type:"restaurant",name,price:Number(price||0),total:Number(price||0)}));window.location.href=`restaurant-booking.html?city=${city}&restaurant=${enc}`;}
function loadRestaurantBookingPage(){const name=decodeURIComponent(getParam("restaurant")||"")||"Selected Restaurant";const el=document.getElementById("restaurant-name");if(el)el.textContent=name;}
function confirmRestaurantBooking(){window.location.href="billing.html";}

/* ═══════════════════════════════════════════
   RESTAURANTS PAGE
   ═══════════════════════════════════════════ */
// existing restaurant code...



/* ═══════════════════════════════════════════
   EVENTS PAGE   ← ✅ ADD THIS BLOCK HERE
   ═══════════════════════════════════════════ */
async function loadEventsPage() {
  const raw = await loadData();
  if (!raw) return;

  const city = resolveCity(raw);
  if (!city) return;

  const cityData = getCityData(raw, city);

  const areaParam = (getParam("area") || "").toLowerCase().trim();

  let events = [];

  if (areaParam) {
    events = raw[city].areas[areaParam]?.events || [];
  } else {
    events = Object.values(raw[city].areas).flatMap(a => a.events || []);
  }

  const heading = document.getElementById("events-heading");
  const sub = document.getElementById("events-sub");

  if (heading) heading.textContent = areaParam
    ? `Events in ${toTitle(areaParam)}, ${cityData.name}`
    : `Events in ${cityData.name}`;

  if (sub) sub.textContent = `${events.length} event${events.length !== 1 ? "s" : ""} found`;

  const grid = document.getElementById("events-grid");
  if (!grid) return;

  if (!events.length) {
    grid.innerHTML = `<div class="info-box"><h4>No Events</h4></div>`;
    return;
  }

  grid.innerHTML = events.map(e => `
    <div class="card fade-in">
      <div class="card-body">
        <div class="card-title">🎉 ${e.name}</div>
        <div class="card-desc">📍 ${e.location}</div>

        <div class="card-meta">
          <div>🗓️ ${e.date}</div>
          <div>⏰ ${e.time}</div>
        </div>

        <div class="price">₹${e.price}</div>

        <button class="btn btn-primary btn-full" style="margin-top:0.8rem"
          onclick="bookEvent(this, '${e.name}', ${e.price})">
          Book Event →
        </button>
      </div>
    </div>
  `).join("");
}
function bookEvent(btn, name, price) {

  // Change button text
  btn.innerHTML = "✅ Event Booked";

  // Disable button
  btn.disabled = true;

  // Optional styling
  btn.style.background = "#4caf50";
  btn.style.cursor = "not-allowed";

  // Optional: store booking
  sessionStorage.setItem("bookingSummary", JSON.stringify({
    type: "event",
    name,
    price,
    total: price
  }));
}
/* ═══════════════════════════════════════════
   RENTALS PAGE
   ═══════════════════════════════════════════ */
async function loadRentalsPage() {
  const raw=await loadData(); if(!raw) return;
  const city=resolveCity(raw); if(!city) return;
  const cityData=getCityData(raw,city); if(!cityData) return;
  const areaParam=(getParam("area")||"").toLowerCase().trim();
  const rentals=areaParam?cityData.rentals.filter(r=>r.area===areaParam):cityData.rentals;
  const heading=document.getElementById("rentals-city-heading");
  const sub=document.getElementById("rentals-city-sub");
  const section=document.getElementById("dynamic-rentals-section");
  if(heading) heading.textContent=areaParam?`Rentals in ${toTitle(areaParam)}, ${cityData.name}`:`Rentals in ${cityData.name}`;
  if(sub) sub.textContent=`${rentals.length} vehicle${rentals.length!==1?"s":""} available`;
  const ICONS={bike:"🏍️",scooter:"🛵",car:"🚗",suv:"🚙"};
  if(section){
    if(!rentals.length){section.innerHTML=`<div class="info-box"><h4>No Rentals in this area</h4></div>`;return;}
    section.innerHTML = rentals.map(r => `
<div class="vehicle-card">

  <div class="vehicle-img-wrap">
    <div class="vehicle-icon">${r.icon || ICONS[r.type] || "🚗"}</div>
  </div>

  <div class="vehicle-body">

    <div class="vehicle-name">${r.name}</div>

    <div style="color:var(--text-light);font-size:0.88rem;margin:0.3rem 0 0.7rem">
      📍 ${toTitle(r.area)}
    </div>

    <div class="vehicle-price">
      ${formatPrice(r.price)} / day
    </div>

    <div class="vehicle-specs">
      ${(r.specs||["Available","Flexible"])
        .map(s=>`<span class="spec">${s}</span>`).join("")}
    </div>

    <button class="btn btn-primary btn-full"
      onclick="bookVehicle('${r.name.replace(/'/g,"\\'")}',${r.price})">

      ${t("Book Now")}

    </button>

  </div>

</div>
`).join("")
  }
}

/* ═══════════════════════════════════════════
   BILLING
   ═══════════════════════════════════════════ */
function loadBillingPage() {
  const summary=JSON.parse(sessionStorage.getItem("bookingSummary")||"{}");
  const sumEl=document.getElementById("booking-summary"); if(!sumEl) return;
  const base=Number(summary.total||summary.price||0), tax=Math.round(base*0.18);
  let rows=`<div class="summary-item"><span>Type</span><strong>${summary.type||"booking"}</strong></div>
    <div class="summary-item"><span>Name</span><strong>${summary.name||"Travel Booking"}</strong></div>`;
  if(summary.price) rows+=`<div class="summary-item"><span>${t("price_per_night")}</span><strong>${formatPrice(summary.price)}</strong></div>`;
  if(summary.nights) rows+=`<div class="summary-item"><span>Nights</span><strong>${summary.nights}</strong></div>`;
  if(summary.days) rows+=`<div class="summary-item"><span>Days</span><strong>${summary.days}</strong></div>`;
  rows+=`<div class="summary-item"><span>Taxes (18%)</span><strong>${formatPrice(tax)}</strong></div>`;
  sumEl.innerHTML=rows;
  const totalEl=document.getElementById("billing-total"); if(totalEl) totalEl.textContent=formatPrice(base+tax);
}
function bookHotel(city, hotel, price){

const booking = {

city: city,
hotel: hotel,
price: price

};

localStorage.setItem("bookingData", JSON.stringify(booking));

window.location.href="billing.html";

}
function submitPayment(e) {
  e.preventDefault();
  const name=document.getElementById("pay-name")?.value.trim(),card=document.getElementById("pay-card")?.value.trim();
  const cvv=document.getElementById("pay-cvv")?.value.trim(),expiry=document.getElementById("pay-expiry")?.value.trim();
  const msgEl=document.getElementById("pay-msg");
  if(!name||!card||!cvv||!expiry){showMsg(msgEl,"Please fill all payment details.","error");return;}
  if(card.replace(/\s/g,"").length<16){showMsg(msgEl,"Enter a valid 16-digit card number.","error");return;}
  if(cvv.length<3){showMsg(msgEl,"Enter a valid CVV.","error");return;}
  showMsg(msgEl,"✅ Payment Successful! Your booking is confirmed.","success");
  sessionStorage.removeItem("bookingSummary");
}

/* ═══════════════════════════════════════════
   VEHICLE BOOKING
   ═══════════════════════════════════════════ */
function bookVehicle(name, pricePerDay) {

  const days = 1;   // default 1 day

  sessionStorage.setItem(
    "bookingSummary",
    JSON.stringify({
      type:"rental",
      name,
      price:pricePerDay,
      days,
      total:pricePerDay * days
    })
  );

  window.location.href = "billing.html";
}
function filterVehicles() {
  const type=document.getElementById("vehicle-filter")?.value||"all";
  const priceRange=document.getElementById("price-filter")?.value||"all";
  const cards=document.querySelectorAll("#vehicles-grid .vehicle-card");
  cards.forEach(card=>{
    const ct=card.getAttribute("data-type"),cp=parseInt(card.getAttribute("data-price"));
    let show=true;
    if(type!=="all"&&ct!==type) show=false;
    if(priceRange==="budget"&&cp>=500) show=false;
    if(priceRange==="mid"&&(cp<500||cp>2000)) show=false;
    if(priceRange==="premium"&&cp<=2000) show=false;
    card.style.display=show?"block":"none";
  });
}

/* ═══════════════════════════════════════════
   AUTH FORMS
   ═══════════════════════════════════════════ */
function handleLogin(e){e.preventDefault();const email=document.getElementById("login-email").value.trim(),pass=document.getElementById("login-pass").value;const msgEl=document.getElementById("login-msg");if(!email||!pass)return showMsg(msgEl,"Fill in all fields.","error");if(!email.includes("@"))return showMsg(msgEl,"Enter a valid email.","error");if(pass.length<6)return showMsg(msgEl,"Password must be 6+ chars.","error");showMsg(msgEl,"Login successful! Redirecting...","success");setTimeout(()=>window.location.href="index.html",1200);}
function handleRegister(e){e.preventDefault();const name=document.getElementById("reg-name").value.trim(),email=document.getElementById("reg-email").value.trim();const pass=document.getElementById("reg-pass").value,confirm=document.getElementById("reg-confirm").value;const msgEl=document.getElementById("reg-msg");if(!name||!email||!pass||!confirm)return showMsg(msgEl,"Fill in all fields.","error");if(!email.includes("@"))return showMsg(msgEl,"Enter a valid email.","error");if(pass.length<6)return showMsg(msgEl,"Password must be 6+ chars.","error");if(pass!==confirm)return showMsg(msgEl,"Passwords don't match.","error");showMsg(msgEl,"Account created! Redirecting...","success");setTimeout(()=>window.location.href="login.html",1200);}
function handlePlanner(e){e.preventDefault();showMsg(document.getElementById("planner-msg"),"Itenary sent!","success");e.target.reset();}
function handleBuddy(e){e.preventDefault();const name=document.getElementById("buddy-name").value.trim(),dest=document.getElementById("buddy-dest").value.trim(),budget=document.getElementById("buddy-budget").value.trim();const msgEl=document.getElementById("buddy-msg");if(!name||!dest||!budget)return showMsg(msgEl,"Fill in all required fields.","error");showMsg(msgEl,`Buddy request from ${name} to ${dest} posted!`,"success");}

const _cardInput=document.getElementById("pay-card");
if(_cardInput) _cardInput.addEventListener("input",function(){let val=this.value.replace(/\D/g,"").substring(0,16);this.value=val.match(/.{1,4}/g)?.join(" ")||val;});

/* ═══════════════════════════════════════════
   AUTO-INIT
   ═══════════════════════════════════════════ */
(function initPage(){
  const page=getPageName();
  if(page==="destination.html")        loadDestinationPage();
  if(page==="hotels.html")             loadHotelsPage();
  if(page==="hotel-details.html")      loadHotelDetails();
  if(page==="restaurants.html")        loadRestaurantsPage();
  if(page==="restaurant-booking.html") loadRestaurantBookingPage();
  if(page==="billing.html")            loadBillingPage();
  if(page==="rentals.html")            loadRentalsPage();
  if(page==="events.html") loadEventsPage();
})();
function setLanguage(lang){

  localStorage.setItem("traveloop-lang", lang)

  document.querySelectorAll("[data-i18n]").forEach(el => {

    const key = el.getAttribute("data-i18n")

    if(translations[lang][key]){
        el.textContent = translations[lang][key]
    }

  })

}

function initLanguage(){

  const savedLang = localStorage.getItem("traveloop-lang") || "en"

  setLanguage(savedLang)

}function updateNavbar(){

const user = JSON.parse(localStorage.getItem("user"));

const loginBtn = document.getElementById("login-btn");

if(!loginBtn) return;


if(user){

loginBtn.innerHTML = `

<span>👤 ${user.name}</span>

<span onclick="logout()" style="margin-left:8px; cursor:pointer;">Logout</span>

`;

loginBtn.removeAttribute("href");

}

}


function logout(){

localStorage.removeItem("user");

location.reload();

}


// run when page loads
document.addEventListener("DOMContentLoaded", updateNavbar);

document.addEventListener("DOMContentLoaded", initLanguage)
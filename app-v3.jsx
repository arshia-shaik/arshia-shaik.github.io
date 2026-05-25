/* eslint-disable */
/* ─── Arshia OS v3 ─── Midnight + Lime + Bone ─── */

const { useState, useEffect, useRef, useMemo } = React;
const P = window.PORTFOLIO;

/* =================================================================== */
/* STATUS BAR */
/* =================================================================== */
function StatusBar({ onHome, currentApp, theme, setTheme }) {
 const [t, setT] = useState(() => new Date());
 useEffect(() => {
 const i = setInterval(() => setT(new Date()), 1000);
 return () => clearInterval(i);
 }, []);
 const ts = t.toTimeString().slice(0, 5);
 return (
 <div className="status">
 <div className="brand" onClick={onHome}>ARSHIA<span className="dot">●</span>SHAIK</div>
 <div className="seg"><span className="k">v</span><span className="v">2026</span></div>
 <div className="seg"><span className="k">section</span><span className="v">{currentApp || "home"}</span></div>
 <div className="grow" />
 <div className="seg"><span className="live" /><span>OPEN_TO_WORK</span></div>
 <div className="seg">LA · UTC-7</div>
 <div className="seg">{ts}</div>
 <div className="battery"><span /></div>
 </div>
 );
}

/* =================================================================== */
/* BOOT */
/* =================================================================== */
function Boot() {
 const skipBoot = (() => { try { return sessionStorage.getItem("arshia-booted") === "1"; } catch (e) { return false; } })();
 const [gone, setGone] = useState(skipBoot);
 useEffect(() => {
 if (skipBoot) return;
 const t = setTimeout(() => {
   setGone(true);
   try { sessionStorage.setItem("arshia-booted", "1"); } catch (e) {}
 }, 1500);
 return () => clearTimeout(t);
 }, [skipBoot]);
 if (skipBoot) return null;
 return (
 <div className={`boot-v2 ${gone ? "gone" : ""}`}>
   <div className="boot-hairline"/>
   <div className="boot-name">
     <span className="word w1">arshia</span>
     <span className="word w2 ital">mubias</span>
     <span className="word w3">shaik</span>
   </div>
   <div className="boot-tag">portfolio · 2026</div>
 </div>
 );
}

/* =================================================================== */
/* TILE ICONS */
/* =================================================================== */
const Icon = {
 about: () => (
 <svg viewBox="0 0 100 100" fill="none">
 <rect x="14" y="18" width="72" height="64" rx="3" stroke="currentColor" strokeWidth="2.5"/>
 <line x1="14" y1="32" x2="86" y2="32" stroke="currentColor" strokeWidth="2"/>
 <line x1="22" y1="44" x2="60" y2="44" stroke="currentColor" strokeWidth="2"/>
 <line x1="22" y1="54" x2="78" y2="54" stroke="currentColor" strokeWidth="2"/>
 <line x1="22" y1="64" x2="50" y2="64" stroke="currentColor" strokeWidth="2"/>
 <line x1="22" y1="74" x2="68" y2="74" stroke="currentColor" strokeWidth="2"/>
 <circle cx="78" cy="25" r="2.5" fill="currentColor"/>
 </svg>
 ),
 skills: () => (
 <svg viewBox="0 0 100 100" fill="none">
 <rect x="16" y="22" width="22" height="14" rx="3" fill="currentColor"/>
 <rect x="44" y="20" width="34" height="14" rx="3" stroke="currentColor" strokeWidth="2.5"/>
 <rect x="14" y="42" width="40" height="14" rx="3" stroke="currentColor" strokeWidth="2.5"/>
 <rect x="60" y="44" width="22" height="14" rx="3" fill="currentColor"/>
 <rect x="22" y="64" width="28" height="14" rx="3" stroke="currentColor" strokeWidth="2.5"/>
 <rect x="56" y="66" width="26" height="14" rx="3" stroke="currentColor" strokeWidth="2.5" strokeDasharray="3 3"/>
 </svg>
 ),
 exp: () => (
 <svg viewBox="0 0 100 100" fill="none">
 <rect x="14" y="22" width="72" height="60" rx="3" stroke="currentColor" strokeWidth="2.5"/>
 <line x1="14" y1="38" x2="86" y2="38" stroke="currentColor" strokeWidth="2"/>
 <rect x="22" y="48" width="14" height="14" fill="currentColor"/>
 <line x1="42" y1="50" x2="78" y2="50" stroke="currentColor" strokeWidth="2"/>
 <line x1="42" y1="58" x2="70" y2="58" stroke="currentColor" strokeWidth="2"/>
 <line x1="22" y1="70" x2="78" y2="70" stroke="currentColor" strokeWidth="2"/>
 <line x1="22" y1="76" x2="60" y2="76" stroke="currentColor" strokeWidth="2"/>
 </svg>
 ),
 proj: () => (
 <svg viewBox="0 0 100 100" fill="none">
 <rect x="20" y="22" width="56" height="64" stroke="currentColor" strokeWidth="2.5" transform="rotate(-4 48 54)"/>
 <rect x="22" y="20" width="56" height="64" stroke="currentColor" strokeWidth="2.5"/>
 <rect x="28" y="26" width="44" height="38" stroke="currentColor" strokeWidth="2"/>
 <circle cx="50" cy="45" r="7" stroke="currentColor" strokeWidth="2"/>
 </svg>
 ),
 hack: () => (
 <svg viewBox="0 0 100 100" fill="none">
 <rect x="22" y="14" width="56" height="76" stroke="currentColor" strokeWidth="2.5"/>
 <line x1="32" y1="32" x2="68" y2="32" stroke="currentColor" strokeWidth="2"/>
 <line x1="32" y1="42" x2="68" y2="42" stroke="currentColor" strokeWidth="2" strokeDasharray="3 3"/>
 <line x1="32" y1="54" x2="58" y2="54" stroke="currentColor" strokeWidth="2"/>
 <line x1="32" y1="62" x2="68" y2="62" stroke="currentColor" strokeWidth="2"/>
 <line x1="32" y1="70" x2="50" y2="70" stroke="currentColor" strokeWidth="2"/>
 <text x="50" y="84" textAnchor="middle" fontFamily="serif" fontStyle="italic" fontWeight="700" fontSize="9" fill="currentColor">PAID</text>
 </svg>
 ),
 edu: () => (
 <svg viewBox="0 0 100 100" fill="none">
 <path d="M50 22 L88 38 L50 54 L12 38 Z" stroke="currentColor" strokeWidth="2.5" strokeLinejoin="round"/>
 <path d="M28 46 V62 Q50 76 72 62 V46" stroke="currentColor" strokeWidth="2.5" strokeLinejoin="round"/>
 <line x1="84" y1="38" x2="84" y2="60" stroke="currentColor" strokeWidth="2.5"/>
 <circle cx="84" cy="64" r="3" fill="currentColor"/>
 </svg>
 ),
 cert: () => (
 <svg viewBox="0 0 100 100" fill="none">
 <polygon points="50,16 80,32 80,68 50,84 20,68 20,32" stroke="currentColor" strokeWidth="2.5" strokeLinejoin="round"/>
 <polygon points="50,28 70,38 70,62 50,72 30,62 30,38" stroke="currentColor" strokeWidth="2"/>
 <text x="50" y="58" textAnchor="middle" fontFamily="serif" fontStyle="italic" fontWeight="900" fontSize="20" fill="currentColor">★</text>
 </svg>
 ),
 contact: () => (
 <svg viewBox="0 0 100 100" fill="none">
 <rect x="12" y="26" width="76" height="52" stroke="currentColor" strokeWidth="2.5"/>
 <path d="M12 26 L50 56 L88 26" stroke="currentColor" strokeWidth="2.5"/>
 <rect x="62" y="34" width="20" height="20" stroke="currentColor" strokeWidth="2"/>
 <text x="72" y="48" textAnchor="middle" fontFamily="serif" fontStyle="italic" fontSize="10" fill="currentColor" fontWeight="700">A</text>
 </svg>
 ),
 writing: () => (
 <svg viewBox="0 0 100 100" fill="none">
 <rect x="18" y="14" width="56" height="72" rx="2" stroke="currentColor" strokeWidth="2.5"/>
 <line x1="26" y1="30" x2="66" y2="30" stroke="currentColor" strokeWidth="2"/>
 <line x1="26" y1="40" x2="58" y2="40" stroke="currentColor" strokeWidth="2"/>
 <line x1="26" y1="50" x2="66" y2="50" stroke="currentColor" strokeWidth="2"/>
 <line x1="26" y1="60" x2="50" y2="60" stroke="currentColor" strokeWidth="2"/>
 <path d="M62 70 L78 54 L86 62 L70 78 L60 80 L62 70 Z" stroke="currentColor" strokeWidth="2.5" strokeLinejoin="round" fill="currentColor" fillOpacity="0.1"/>
 <line x1="76" y1="56" x2="84" y2="64" stroke="currentColor" strokeWidth="1.5"/>
 </svg>
 ),
};

/* =================================================================== */
/* APP TILE */
/* =================================================================== */
function AppTile({ id, no, name, onOpen }) {
 return (
 <button className="app-tile" onClick={() => onOpen(id)}>
   <span className="tile-no">{no}</span>
   <span className="tile-name">{name}</span>
   <span className="tile-arrow">→</span>
 </button>
 );
}

/* =================================================================== */
/* HOME */
/* =================================================================== */
function Home({ onOpen }) {
 return (
 <div className="home">
   <header className="home-hero">
     <h1 className="home-name">
       Arshia <span className="ital">Shaik</span><span className="dot-end">.</span>
     </h1>

     <div className="home-cta">
       <a href={P.hero.resumeUrl} download className="hcta primary">
         <span className="hcta-icon" aria-hidden="true">↓</span>
         <span>resume</span>
       </a>
       <a href={`mailto:${P.hero.email}`} className="hcta">
         <span className="hcta-icon" aria-hidden="true">✉</span>
         <span>say hi</span>
       </a>
     </div>
   </header>
 </div>
 );
}

/* =================================================================== */
/* APP VIEW SHELL */
/* =================================================================== */
function AppView({ id, title, subtitle, children, onClose, onPrev, onNext }) {
 useEffect(() => {
 const onKey = (e) => {
 if (e.key === "Escape") onClose();
 if (e.key === "ArrowLeft" && onPrev) onPrev();
 if (e.key === "ArrowRight" && onNext) onNext();
 };
 window.addEventListener("keydown", onKey);
 return () => window.removeEventListener("keydown", onKey);
 }, [onClose, onPrev, onNext]);
 return (
 <div className="app-view" role="dialog" aria-label={title}>
 <div className="app-bar">
 <button className="back" onClick={onClose}>
 <span className="arr" aria-hidden="true">←</span>
 <span className="lbl">Home</span>
 </button>
 <span className="app-bar-rule" aria-hidden="true"/>
 <div className="title">
 <span className="dot" aria-hidden="true"/>
 <span className="name">{title}</span>
 </div>
 <div className="grow" />
 <div className="nav">
 <button onClick={onPrev} aria-label="previous section"><span className="arr">←</span><span className="lbl">prev</span></button>
 <button onClick={onNext} aria-label="next section"><span className="lbl">next</span><span className="arr">→</span></button>
 </div>
 </div>
 <div className="app-body">
 {children}
 <div className="app-footer">
 <span>© 2026 · <span className="lime">ARSHIA MUBIAS SHAIK</span></span>
 <span>App {id} · ESC to close</span>
 </div>
 </div>
 </div>
 );
}

/* =================================================================== */
/* ABOUT, Field Notebook */
/* =================================================================== */
function AboutApp() {
 const nb = P.notebook;
 return (
 <>
 <div className="app-eyebrow"><span className="dash"/> 01 · ABOUT</div>
 <h1 className="app-h">Hi, I'm <span className="ital">Arshia.</span></h1>
 <p className="app-lede">
 Quick intro, who I am, what I build, where I'm headed.
 </p>

 <div className="notebook">
 <div className="nb-page">
 <div className="nb-head">
 <span>{nb.pageNo} · USC · LA</span>
 <span className="pageno">{nb.weather}</span>
 <span>{nb.date}</span>
 </div>
 <div className="nb-title">
 <span className="strike">about me.</span> {nb.title}
 </div>
 <div className="nb-body">
 <p><span className="hl">I build things that work</span>, not just in notebooks, but in production.</p>
 <p>MSCS at USC, AI/ML track. I ship <span className="hl">agentic pipelines</span>, fine-tune LLMs on real clinical data, and have built a real-time healthcare app for Alzheimer's patients and an on-device cognitive-load regulator at the Google DeepMind × InstaLILY hackathon.</p>
 <p>Before USC: research at <span className="hl">DRDO</span> (radar AI + Kalman), GCP→AWS migration at Rizee for 5K+ daily users, SDE at Tech Mahindra.</p>
 <p>Looking for <span className="hl">New Grad 2026</span> roles in ML Engineering, SWE, or AI Infrastructure, where I can build and ship agentic systems.</p>
 </div>
 <div className="nb-quote">"{nb.quote}"</div>
 <div className="nb-sig">
 <span className="scribble">Arshia</span>
 <span className="when">SIGNED · APR 2026</span>
 </div>
 </div>

 <div className="nb-aside">
 <div className="nb-photo">
 <div className="real" style={{backgroundImage: "url('assets/portrait.png')"}} />
 <div className="who">Arshia · LA</div>
 </div>
 <div className="nb-margin">
 <h5>Quick facts ↓</h5>
 {nb.margin.map((m,i) => <div className="item" key={i}>{m}</div>)}
 </div>
 </div>
 </div>

 </>
 );
}

/* =================================================================== */
/* SKILLS, Sticker Sheet */
/* =================================================================== */
/* Map skill name → simpleicons CDN slug. Items not in the map render text-only. */
const SKILL_LOGOS = {
  // Programming & languages
  "Python": "python", "JavaScript / TS": "typescript", "Dart": "dart",
  "Java": "openjdk", "C#": "dotnet", ".NET": "dotnet", "SQL": "postgresql",
  "HTML / CSS": "html5",
  // ML / DL
  "PyTorch": "pytorch", "TensorFlow": "tensorflow", "Keras": "keras",
  "Scikit-learn": "scikitlearn", "OpenCV": "opencv", "MediaPipe": "google",
  "HuggingFace": "huggingface",
  // LLMs
  "Claude": "claude", "OpenAI API": "openai", "Gemini Pro": "googlegemini",
  "LangChain": "langchain",
  // Cloud + DevOps
  "AWS": "amazonwebservices", "Azure": "microsoftazure", "GCP": "googlecloud",
  "Docker": "docker", "Kubernetes": "kubernetes", "Lambda": "awslambda",
  "SageMaker": "amazonwebservices", "CloudWatch": "amazoncloudwatch",
  "EC2 / S3 / RDS": "amazonwebservices", "CI/CD": "githubactions",
  "GitHub Actions": "githubactions", "GitLab": "gitlab",
  // Full-stack & mobile
  "React": "react", "Electron": "electron", "Flutter": "flutter",
  "Unity": "unity", "Spring Boot": "springboot", "Flask": "flask",
  "Firebase": "firebase", "REST APIs": "swagger", "Vite": "vite",
  "Tailwind": "tailwindcss", "Framer Motion": "framer",
  // Data
  "PostgreSQL": "postgresql", "MongoDB": "mongodb", "Pandas": "pandas",
  "NumPy": "numpy",
};

const HEADLINE_LOGOS = [
  { slug: "python",       name: "Python" },
  { slug: "typescript",   name: "TypeScript" },
  { slug: "react",        name: "React" },
  { slug: "pytorch",      name: "PyTorch" },
  { slug: "tensorflow",   name: "TensorFlow" },
  { slug: "huggingface",  name: "Hugging Face" },
  { slug: "claude",       name: "Claude" },
  { slug: "openai",       name: "OpenAI" },
  { slug: "amazonwebservices", name: "AWS" },
  { slug: "googlecloud",  name: "Google Cloud" },
  { slug: "microsoftazure", name: "Azure" },
  { slug: "docker",       name: "Docker" },
  { slug: "kubernetes",   name: "Kubernetes" },
  { slug: "unity",        name: "Unity" },
  { slug: "flutter",      name: "Flutter" },
  { slug: "firebase",     name: "Firebase" },
];

function SkillsApp() {
 const entries = Object.entries(P.skills);
 const totalSkills = entries.reduce((n, [, d]) => n + d.items.length, 0);
 const hotCount = entries.reduce((n, [, d]) => n + d.hot.length, 0);
 const renderClusterName = (cluster) => {
   const words = cluster.split(" ");
   if (words.length === 1) return cluster;
   return words.map((w, i, a) =>
     i === a.length - 1
       ? <span key={i} className="ital">{w}</span>
       : <span key={i}>{w} </span>
   );
 };
 return (
 <>
 <div className="app-eyebrow"><span className="dash"/> 02 · SKILLS · {entries.length} CLUSTERS</div>
 <h1 className="app-h">The <span className="ital">stack.</span></h1>
 <p className="app-lede">
 Everything I've shipped with in the last 18 months. The glowing ones are what I'd bring to your interview tomorrow.
 </p>

 {/* HERO — currently shipping with */}
 <section className="sk-hero">
   <div className="sk-hero-eye">
     <span className="ping"/>
     Currently shipping with
   </div>
   <div className="sk-hero-grid">
     {HEADLINE_LOGOS.map((t) => (
       <div className="sk-hero-tile" key={t.slug} title={t.name}>
         <div className="sk-hero-mark">
           <img src={`https://cdn.simpleicons.org/${t.slug}/d4a056`} alt={t.name} loading="lazy"/>
         </div>
         <span className="sk-hero-name">{t.name}</span>
       </div>
     ))}
   </div>
   <div className="sk-hero-stats">
     <span><strong>{totalSkills}</strong> tools</span>
     <span className="sep">·</span>
     <span><strong>{entries.length}</strong> disciplines</span>
     <span className="sep">·</span>
     <span><strong>{hotCount}</strong> currently shipping</span>
   </div>
 </section>

 {/* CLUSTER CARDS */}
 <div className="sk-clusters">
   {entries.map(([cluster, data], idx) => {
     const num = String(idx + 1).padStart(2, "0");
     const depth  = Math.round(data.depth * 100);
     const recency = Math.round(data.recency * 100);
     return (
       <article className="sk-cluster" key={cluster} style={{animationDelay: `${idx * 0.07}s`}}>
         <header className="sk-c-head">
           <div className="sk-c-meta">
             <span className="sk-c-num">CL.{num}</span>
             <span className="sk-c-count">{data.items.length} tools</span>
           </div>
           <h3 className="sk-c-name">{renderClusterName(cluster)}</h3>
           <div className="sk-c-bars">
             <div className="sk-c-bar" title={`depth ${depth}/100`}>
               <span className="lbl">depth</span>
               <span className="track"><span className="fill" style={{"--w": `${depth}%`}}/></span>
               <span className="val">{depth}</span>
             </div>
             <div className="sk-c-bar" title={`recency ${recency}/100`}>
               <span className="lbl">recency</span>
               <span className="track"><span className="fill" style={{"--w": `${recency}%`}}/></span>
               <span className="val">{recency}</span>
             </div>
           </div>
         </header>
         <ul className="sk-chips">
           {data.items.map((item, j) => {
             const hot = data.hot.includes(item);
             const slug = SKILL_LOGOS[item];
             const color = hot ? "d4a056" : "8a8579";
             return (
               <li
                 key={item}
                 className={`sk-chip ${hot ? "is-hot" : ""}`}
                 title={item}
                 style={{animationDelay: `${(idx * 0.07) + 0.18 + j * 0.025}s`}}
               >
                 {slug ? (
                   <img className="sk-chip-icon" src={`https://cdn.simpleicons.org/${slug}/${color}`} alt="" loading="lazy"/>
                 ) : (
                   <span className="sk-chip-dot" aria-hidden="true">{item.charAt(0)}</span>
                 )}
                 <span className="sk-chip-name">{item}</span>
                 {hot && <span className="sk-chip-star" aria-hidden="true">★</span>}
               </li>
             );
           })}
         </ul>
       </article>
     );
   })}
 </div>
 </>
 );
}

/* =================================================================== */
/* EXPERIENCE, Mission Logs */
/* =================================================================== */
function ExperienceApp() {
 const exps = P.experiences;
 return (
 <>
 <div className="app-eyebrow"><span className="dash"/> 03 · EXPERIENCE · {exps.length} ROLES</div>
 <h1 className="app-h">Where I've <span className="ital">shipped.</span></h1>
 <p className="app-lede">
 Every role I've held since 2021, dates, scope, what I built, and what each one moved.
 </p>

 <div className="exp-list">
 {exps.map((e, idx) => {
 const active = e.tier === "ACTIVE";
 const num = String(idx + 1).padStart(2, "0");
 const isLast = idx === exps.length - 1;
 const roleWords = e.role.split(" ");
 const lastWord = roleWords.pop();
 return (
 <article key={e.slug} className={`exp-card ${active ? "is-active" : ""} ${isLast ? "is-last" : ""}`}>
 {/* Spine: number + dot + connector */}
 <aside className="exp-rail" aria-hidden="true">
 <div className="exp-num">{num}</div>
 <span className="exp-dot"/>
 </aside>

 {/* Body */}
 <div className="exp-body">
 <header className="exp-head">
 <div className="exp-tags">
 <span className={`exp-status ${active ? "on" : ""}`}>
 <span className="dot"/>
 {active ? "ACTIVE" : "COMPLETED"}
 </span>
 <span className="exp-class">{e.class}</span>
 </div>
 <div className="exp-date">{e.ts} <span className="arr">→</span> {e.end}</div>
 </header>

 <h3 className="exp-role">
 {roleWords.length > 0 && <span>{roleWords.join(" ")} </span>}
 <span className="ital">{lastWord}</span>
 </h3>

 <div className="exp-org">
 {e.logo && <img className="exp-org-logo" src={e.logo} alt={`${e.org} logo`} loading="lazy"/>}
 <span className="org">{e.org}</span>
 <span className="sep">·</span>
 <span>{e.loc}</span>
 <span className="sep">·</span>
 <span>{e.mode}</span>
 </div>

 <p className="exp-brief">{e.brief}</p>

 {e.bullets && e.bullets.length > 0 && (
 <ul className="exp-bullets">
 {e.bullets.map((b, i) => <li key={i}>{b}</li>)}
 </ul>
 )}

 {e.metrics && e.metrics.length > 0 && (
 <div className="exp-metrics">
 <span className="exp-metrics-label">// MOVED THE NEEDLE</span>
 {e.metrics.map((m, i) => (
 <div key={i} className="exp-metric">
 <div className="v">{m.v}</div>
 <div className="k">{m.k}</div>
 </div>
 ))}
 </div>
 )}

 {e.stack && e.stack.length > 0 && (
 <div className="exp-stack">
 {e.stack.map((s) => <span key={s}>{s}</span>)}
 </div>
 )}
 </div>
 </article>
 );
 })}
 </div>

 {/* Leadership & Community, appendix */}
 {P.leadership && P.leadership.length > 0 && (
 <section className="lead-block">
 <div className="lead-head">
 <div className="app-eyebrow"><span className="dash"/> APPENDIX · LEADERSHIP & COMMUNITY</div>
 <h2 className="lead-title">Off the <span className="ital">clock.</span></h2>
 <p className="lead-sub">
 Where I show up outside the role, mentorship, student-body leadership, volunteering.
 </p>
 </div>
 <div className="lead-grid">
 {P.leadership.map((l, i) => {
   const isFeatured = i === 0;
   const Tag = l.url ? "a" : "article";
   const linkProps = l.url ? { href: l.url, target: "_blank", rel: "noreferrer" } : {};
   return (
     <Tag key={i} className={`lead-patch ${isFeatured ? "is-featured" : ""} ${l.url ? "is-link" : ""}`} {...linkProps}>
       <div className="lead-type">{l.type}</div>
       <h4 className="lead-role">{l.role}</h4>
       <div className="lead-org">{l.org}</div>
       <div className="lead-when">{l.when}</div>
       {l.note && <p className="lead-note">{l.note}</p>}
       {l.url && <span className="lead-cta">{l.cta || "open"} →</span>}
     </Tag>
   );
 })}
 </div>
 </section>
 )}

 </>
 );
}

/* =================================================================== */
/* PROJECTS, Polaroid Wall */
/* =================================================================== */
function ProjectsApp({ highlightTarget, onConsumeHighlight }) {
 const [expanded, setExpanded] = useState(null);   // project id currently open in modal
 const [lightbox, setLightbox] = useState(null);   // image src currently open in lightbox

 /* When hackathons (or anything) hand us a project id, open its modal. */
 useEffect(() => {
   if (!highlightTarget) return;
   setExpanded(highlightTarget);
   onConsumeHighlight?.();
 }, [highlightTarget]);

 /* lock scroll while a modal/lightbox is open + keyboard nav.
    .app-view is the real scroll container (it's fixed + overflow:auto),
    so locking body alone leaves the page scrolling behind the modal. */
 useEffect(() => {
   const open = !!(expanded || lightbox);
   if (!open) return;
   const view = document.querySelector(".app-view");
   const prevBody = document.body.style.overflow;
   const prevView = view ? view.style.overflow : "";
   document.body.style.overflow = "hidden";
   if (view) view.style.overflow = "hidden";
   const onKey = (e) => {
     if (lightbox) {
       if (e.key === "Escape") return setLightbox(null);
       if (e.key === "ArrowLeft" || e.key === "ArrowRight") {
         e.preventDefault();
         const dir = e.key === "ArrowRight" ? 1 : -1;
         setLightbox((lb) => lb && {
           ...lb,
           index: (lb.index + dir + lb.images.length) % lb.images.length,
         });
       }
       return;
     }
     if (e.key === "Escape" && expanded) setExpanded(null);
   };
   window.addEventListener("keydown", onKey);
   return () => {
     document.body.style.overflow = prevBody;
     if (view) view.style.overflow = prevView;
     window.removeEventListener("keydown", onKey);
   };
 }, [expanded, lightbox]);

 /* simple monochrome SVG placeholders per project */
 const ill = (p) => {
 const map = {
 "P-01": (
 <svg viewBox="0 0 100 100" fill="none">
 <circle cx="50" cy="50" r="32" stroke="var(--accent)" strokeWidth="2"/>
 <path d="M28 50 Q50 28 72 50 Q50 72 28 50 Z" stroke="var(--ink-2)" strokeWidth="2"/>
 <circle cx="50" cy="50" r="8" fill="var(--accent)"/>
 <text x="50" y="92" textAnchor="middle" fontFamily="var(--mono)" fontSize="6" letterSpacing="2" fill="var(--ink-3)">FOOD ACCESS</text>
 </svg>
 ),
 "P-02": (
 <svg viewBox="0 0 100 100" fill="none">
 <rect x="18" y="22" width="64" height="48" rx="3" stroke="var(--ink-2)" strokeWidth="2"/>
 <rect x="40" y="70" width="20" height="3" fill="var(--ink-2)"/>
 <rect x="32" y="73" width="36" height="4" fill="var(--ink-2)"/>
 <circle cx="50" cy="46" r="14" stroke="var(--accent)" strokeWidth="2"/>
 <circle cx="44" cy="44" r="2" fill="var(--accent)"/>
 <circle cx="56" cy="44" r="2" fill="var(--accent)"/>
 <path d="M44 50 Q50 54 56 50" stroke="var(--accent)" strokeWidth="2"/>
 </svg>
 ),
 "P-03": (
 <svg viewBox="0 0 100 100" fill="none">
 <circle cx="50" cy="50" r="24" stroke="var(--accent)" strokeWidth="2"/>
 <circle cx="50" cy="50" r="14" stroke="var(--ink-2)" strokeWidth="2"/>
 <circle cx="50" cy="50" r="4" fill="var(--accent)"/>
 {[0,72,144,216,288].map((a,i) => (
 <line key={i} x1="50" y1="50" x2={50 + 32*Math.cos(a*Math.PI/180)} y2={50 + 32*Math.sin(a*Math.PI/180)} stroke="var(--ink-3)" strokeWidth="1.5" strokeDasharray="3 2"/>
 ))}
 </svg>
 ),
 "P-04": (
 <svg viewBox="0 0 100 100" fill="none">
 <rect x="10" y="30" width="80" height="50" rx="3" stroke="var(--ink-2)" strokeWidth="2"/>
 <line x1="10" y1="40" x2="90" y2="40" stroke="var(--ink-3)" strokeWidth="1"/>
 <circle cx="40" cy="58" r="6" fill="var(--accent)"/>
 <path d="M30 70 Q50 60 70 70" stroke="var(--accent)" strokeWidth="2"/>
 <text x="50" y="22" textAnchor="middle" fontFamily="var(--mono)" fontSize="6" letterSpacing="2" fill="var(--ink-3)">FREEZE · FRAME</text>
 </svg>
 ),
 "P-05": (
 <svg viewBox="0 0 100 100" fill="none">
 <rect x="20" y="22" width="60" height="56" stroke="var(--ink-2)" strokeWidth="2"/>
 <line x1="28" y1="34" x2="72" y2="34" stroke="var(--accent)" strokeWidth="2"/>
 <line x1="28" y1="44" x2="60" y2="44" stroke="var(--ink-3)" strokeWidth="1.5"/>
 <line x1="28" y1="52" x2="68" y2="52" stroke="var(--ink-3)" strokeWidth="1.5"/>
 <line x1="28" y1="60" x2="50" y2="60" stroke="var(--accent)" strokeWidth="2" strokeDasharray="2 2"/>
 <text x="50" y="72" textAnchor="middle" fontFamily="serif" fontStyle="italic" fontSize="9" fill="var(--accent)" fontWeight="800">UNLEARN</text>
 </svg>
 ),
 "P-06": (
 <svg viewBox="0 0 100 100" fill="none">
 <circle cx="50" cy="42" r="18" stroke="var(--ink-2)" strokeWidth="2"/>
 <circle cx="44" cy="40" r="2" fill="var(--ink-2)"/>
 <circle cx="56" cy="40" r="2" fill="var(--ink-2)"/>
 <path d="M44 48 Q50 52 56 48" stroke="var(--ink-2)" strokeWidth="2"/>
 <path d="M30 80 Q50 70 70 80" stroke="var(--accent)" strokeWidth="2"/>
 <path d="M20 84 L80 84" stroke="var(--ink-3)" strokeWidth="1" strokeDasharray="3 2"/>
 </svg>
 ),
 "P-07": (
 <svg viewBox="0 0 100 100" fill="none">
 <line x1="50" y1="14" x2="50" y2="86" stroke="var(--ink-3)" strokeWidth="1" strokeDasharray="3 3"/>
 <line x1="14" y1="50" x2="86" y2="50" stroke="var(--ink-3)" strokeWidth="1" strokeDasharray="3 3"/>
 <circle cx="32" cy="34" r="5" fill="var(--accent)"/>
 <circle cx="68" cy="38" r="5" fill="var(--ink-2)"/>
 <circle cx="38" cy="68" r="5" fill="var(--ink-2)"/>
 <circle cx="72" cy="66" r="5" fill="var(--accent)"/>
 <text x="50" y="98" textAnchor="middle" fontFamily="var(--mono)" fontSize="5" letterSpacing="2" fill="var(--ink-3)">FAIRNESS PLOT</text>
 </svg>
 ),
 "P-08": (
 <svg viewBox="0 0 100 100" fill="none">
 {[20,28,36,44,52,60,68,76].map((x,i) => (
 <rect key={i} x={x} y={50 - (i*4 + 6)} width="4" height={i*8 + 12} fill={i % 2 ? "var(--accent)" : "var(--ink-2)"}/>
 ))}
 <text x="50" y="90" textAnchor="middle" fontFamily="serif" fontStyle="italic" fontSize="9" fill="var(--accent)" fontWeight="800">♪ genre swap</text>
 </svg>
 ),
 "P-09": (
 <svg viewBox="0 0 100 100" fill="none">
 {/* night sky */}
 <rect x="0" y="0" width="100" height="100" fill="var(--bg)"/>
 {[18,32,68,82,12,88,42].map((x,i) => (
 <circle key={i} cx={x} cy={10 + (i*4)} r="0.8" fill="var(--ink-2)" opacity="0.6"/>
 ))}
 {/* bat silhouette */}
 <path d="M50 50 L40 44 L30 46 L24 42 L28 50 L22 54 L34 56 L40 60 L50 56 L60 60 L66 56 L78 54 L72 50 L76 42 L70 46 L60 44 Z" fill="var(--accent)" stroke="var(--accent)" strokeWidth="1" strokeLinejoin="round"/>
 <circle cx="46" cy="50" r="1.4" fill="var(--bg)"/>
 <circle cx="54" cy="50" r="1.4" fill="var(--bg)"/>
 {/* ground line */}
 <line x1="0" y1="80" x2="100" y2="80" stroke="var(--ink-fade)" strokeWidth="0.6" strokeDasharray="3 3"/>
 <text x="50" y="92" textAnchor="middle" fontFamily="var(--mono)" fontSize="6" letterSpacing="2" fill="var(--ink-3)">BATCRAZY · UNITY</text>
 </svg>
 ),
 };
 return map[p.n] || null;
 };

 const rotations = [-1.6, 1.4, -0.8, 1.8, -1.2, 0.6, -1.5, 1.0, 1.2];

 const projectCover = (p) => {
   const hasCover = p.imgs && p.imgs.length > 0 && p.folder;
   return hasCover ? `assets/projects/${p.folder}/${p.imgs[0]}` : null;
 };

 /* Compact preview card shown in the grid. Click to open the full polaroid. */
 const renderCompact = (p, i) => {
   const coverSrc = projectCover(p);
   const isFun = p.kind === "fun";
   return (
     <button
       key={p.n}
       type="button"
       data-project={p.n}
       className={`polaroid is-compact ${isFun ? "is-fun" : ""}`}
       style={{"--r": `${rotations[i % rotations.length]}deg`}}
       onClick={() => setExpanded(p.n)}
       aria-label={`Open ${p.title[0]} ${p.title[1]}`}
     >
       <div className="pin"/>
       <div className="pic">
         <span className="pic-tag">{p.n} · {p.year}</span>
         <span className="pic-status">{p.status}</span>
         {coverSrc ? (
           <img className="pic-cover" src={coverSrc} alt={`${p.title[0]} ${p.title[1]}`}/>
         ) : (
           <div className="ill">{ill(p)}</div>
         )}
       </div>
       <div className="caption">
         <h3>{p.title[0]} <span className="ital">{p.title[1]}</span></h3>
         <div className="caption-tag">{p.tag}</div>
         <div className="caption-cta">click to open →</div>
       </div>
     </button>
   );
 };

 /* Full polaroid shown inside the modal. All details + thumbnails + links. */
 const renderFull = (p, i) => {
   const coverSrc = projectCover(p);
   /* Album: every image including the cover, so the cover shows up in
      the gallery row too and can be opened in the lightbox. */
   const album = (p.imgs && p.folder)
     ? p.imgs.map((f) => `assets/projects/${p.folder}/${f}`)
     : [];
   const openLightbox = (idx) => setLightbox({ images: album, index: idx });
   const isFun = p.kind === "fun";
   const showSecondaryDemo = p.demo && !isFun;
   return (
     <div
       key={p.n}
       data-project={p.n}
       className={`polaroid is-full ${isFun ? "is-fun" : ""}`}
       style={{"--r": `${rotations[i % rotations.length]}deg`}}
     >
       <div className="pin"/>
       <div className="pic">
         <span className="pic-tag">{p.n} · {p.year}</span>
         <span className="pic-status">{p.status}</span>
         {coverSrc ? (
           <button type="button" className="pic-cover-link" onClick={() => openLightbox(0)} aria-label={`${p.title[0]} cover image`}>
             <img className="pic-cover" src={coverSrc} alt={`${p.title[0]} ${p.title[1]}`}/>
           </button>
         ) : (
           <div className="ill">{ill(p)}</div>
         )}
       </div>
       <div className="caption">
         <h3>{p.title[0]} <span className="ital">{p.title[1]}</span></h3>
         <div style={{fontFamily:"var(--mono)", fontSize:10, letterSpacing:"0.18em", textTransform:"uppercase", color:"var(--accent)"}}>
           {p.tag}
         </div>
         <div className="blurb">{p.blurb}</div>

         {isFun && p.demo && (
           <a className="proj-play" href={p.demo} target="_blank" rel="noreferrer">
             <span className="proj-play-icon">▶</span>
             <span className="proj-play-text">
               <span className="lbl">{p.demoLabel || "play it"}</span>
               <span className="sub">opens in a new tab</span>
             </span>
             <span className="proj-play-arrow">→</span>
           </a>
         )}

         {p.details && <div className="details">{p.details}</div>}
         {p.bullets && (
           <ul>
             {p.bullets.map((b, j) => <li key={j}>{b}</li>)}
           </ul>
         )}

         {(p.paper || showSecondaryDemo || p.repo) && (
           <div className="proj-links">
             {p.paper && (
               <a className="proj-link" href={`assets/projects/${p.folder}/${p.paper}`} target="_blank" rel="noreferrer">
                 <span className="g">▤</span> read paper →
               </a>
             )}
             {showSecondaryDemo && (
               <a className="proj-link" href={p.demo} target="_blank" rel="noreferrer">
                 <span className="g">▶</span> {p.demoLabel || "live demo"} →
               </a>
             )}
             {p.repo && (
               <a className="proj-link" href={p.repo} target="_blank" rel="noreferrer">
                 <span className="g">⌘</span> code →
               </a>
             )}
           </div>
         )}

         {album.length > 0 && (
           <div className="proj-gallery" data-count={album.length}>
             {album.map((src, slot) => (
               <button
                 key={slot}
                 type="button"
                 className={`proj-thumb ${slot === 0 ? "is-cover" : ""}`}
                 onClick={() => openLightbox(slot)}
                 aria-label={`${p.title[0]} ${slot === 0 ? "cover" : `screenshot ${slot}`}`}
               >
                 <img src={src} alt={`${p.title[0]} ${slot === 0 ? "cover" : `screenshot ${slot}`}`}/>
                 {slot === 0 && <span className="thumb-badge">cover</span>}
               </button>
             ))}
           </div>
         )}

         {p.metrics && (
           <div className="pmetrics">
             {p.metrics.map((m, j) => (
               <div className="pm" key={j}>
                 <div className="pmk">{m.k}</div>
                 <div className={`pmv ${m.ital ? "ital" : ""}`}>{m.v}</div>
               </div>
             ))}
           </div>
         )}
         <div className="stack">
           {p.stack.map((s) => <span key={s}>{s}</span>)}
         </div>
         <div className="meta">
           <span>{p.role || p.year} · {p.tag.split("·")[0].trim()}</span>
           <span className="lime">{p.status}</span>
         </div>
       </div>
     </div>
   );
 };

 const mainProjects = P.projects.filter((p) => p.kind !== "fun");
 const funProjects  = P.projects.filter((p) => p.kind === "fun");
 const expandedProject = expanded ? P.projects.find((p) => p.n === expanded) : null;
 const expandedIndex = expandedProject
   ? P.projects.indexOf(expandedProject)
   : 0;

 return (
 <>
 <div className="app-eyebrow"><span className="dash"/> 04 · PROJECTS · {mainProjects.length} BUILDS</div>
 <h1 className="app-h">Things I've <span className="ital">built.</span></h1>
 <p className="app-lede">
 Selected projects, research, products, hackathon work. Tap any card to open the full story.
 </p>

 <div className="polaroid-board is-compact-board">
   {mainProjects.map((p, i) => renderCompact(p, i))}
 </div>

 {funProjects.length > 0 && (
   <section className="fun-section">
     <div className="fun-divider">
       <span className="rule"/>
       <span className="badge">▸ SIDE PROJECT · JUST FOR FUN</span>
       <span className="rule"/>
     </div>
     <h2 className="fun-h">Just for <span className="ital">fun.</span></h2>
     <p className="fun-sub">
       Things I built for the joy of it, not the resume. A little less polished, a lot more play.
     </p>
     <div className="polaroid-board is-compact-board is-fun-board">
       {funProjects.map((p, i) => renderCompact(p, mainProjects.length + i))}
     </div>
   </section>
 )}

 {/* Portal to <body> so the fixed-position overlays escape .app-view's
     transform/scroll containing block. Without this, opening a project
     from the bottom of the page lands the modal off-screen. */}
 {expandedProject && ReactDOM.createPortal(
   <div className="proj-modal" role="dialog" aria-modal="true" aria-label={`${expandedProject.title[0]} ${expandedProject.title[1]}`} onClick={() => setExpanded(null)}>
     <div className="proj-modal-card" onClick={(e) => e.stopPropagation()}>
       <button className="proj-modal-close" onClick={() => setExpanded(null)} aria-label="close">✕</button>
       {renderFull(expandedProject, expandedIndex)}
     </div>
   </div>,
   document.body
 )}

 {lightbox && ReactDOM.createPortal(
   <div className="proj-lightbox" role="dialog" aria-modal="true" aria-label="image preview" onClick={() => setLightbox(null)}>
     <button className="proj-lightbox-close" onClick={() => setLightbox(null)} aria-label="close">✕</button>
     {lightbox.images.length > 1 && (
       <>
         <button
           className="proj-lightbox-nav is-prev"
           aria-label="previous image"
           onClick={(e) => {
             e.stopPropagation();
             setLightbox((lb) => lb && {
               ...lb,
               index: (lb.index - 1 + lb.images.length) % lb.images.length,
             });
           }}
         >‹</button>
         <button
           className="proj-lightbox-nav is-next"
           aria-label="next image"
           onClick={(e) => {
             e.stopPropagation();
             setLightbox((lb) => lb && {
               ...lb,
               index: (lb.index + 1) % lb.images.length,
             });
           }}
         >›</button>
         <div className="proj-lightbox-counter" onClick={(e) => e.stopPropagation()}>
           {lightbox.index + 1} / {lightbox.images.length}
         </div>
       </>
     )}
     <img
       className="proj-lightbox-img"
       src={lightbox.images[lightbox.index]}
       alt=""
       onClick={(e) => e.stopPropagation()}
     />
   </div>,
   document.body
 )}
 </>
 );
}

/* =================================================================== */
/* HACKATHONS, Receipts */
/* =================================================================== */
function HackathonsApp({ onJumpToProject }) {
 const rotations = [-1.4, 0.8, -0.6, 1.2, -1.0];
 return (
 <>
 <div className="app-eyebrow"><span className="dash"/> 05 · HACKATHONS · {P.hackathons.length} BUILDS</div>
 <h1 className="app-h">48-hour <span className="ital">builds.</span></h1>
 <p className="app-lede">
 Five hackathons across 12 months. Click any receipt to open the full project card.
 </p>

 <div className="receipts">
 {P.hackathons.map((h, i) => {
   const clickable = !!h.projectId;
   const Tag = clickable ? "button" : "div";
   const onClick = clickable ? () => onJumpToProject?.(h.projectId) : undefined;
   return (
     <Tag
       key={h.no}
       className={`receipt ${clickable ? "is-clickable" : ""}`}
       style={{"--r": `${rotations[i % rotations.length]}deg`}}
       onClick={onClick}
       type={clickable ? "button" : undefined}
     >
       <div className={`stamp-print ${h.stamp === "WIN" ? "win" : ""}`}>{h.stamp}</div>
       <div className="r-head">
         <h4>{h.event}</h4>
         <div className="sub">RCPT NO. {h.no} · {h.date}</div>
       </div>
       <div className="r-row"><span className="k">project</span><span className="v copper">{h.project}</span></div>
       <div className="r-row"><span className="k">role</span><span className="v">{h.role}</span></div>
       <div className="r-rule"/>
       {h.lines.map(([k, v], j) => (
         <div className="r-line" key={j}><span>{k}</span><span>{v}</span></div>
       ))}
       <div className="barcode">
         {[...Array(28)].map((_, j) => <span key={j} style={{flex: ((j*7) % 4) + 1}}/>)}
       </div>
       {clickable
         ? <div className="r-foot r-cta">↓ open project →</div>
         : <div className="r-foot">— THANK YOU FOR BUILDING —</div>
       }
     </Tag>
   );
 })}
 </div>
 </>
 );
}

/* =================================================================== */
/* EDUCATION, Transcript */
/* =================================================================== */
function EducationApp() {
 return (
 <>
 <div className="app-eyebrow"><span className="dash"/> 06 · EDUCATION · 2 DEGREES</div>
 <h1 className="app-h">Where I <span className="ital">studied.</span></h1>
 <p className="app-lede">
 Two universities, two CS degrees, coursework, GPA, and what I did outside class.
 </p>

 <div className="edu-mag">
 {P.education.map((e, i) => {
   const gpaVal = e.gpa.split(" ")[0];
   const gpaScale = e.gpa.split(" ").slice(1).join(" ");
   const roman = ["I", "II", "III", "IV"][i];
   const tierLabel = e.tier === "UNDERGRAD" ? "Undergraduate" : "Graduate";
   const yearStart = e.ts.split(".")[0];
   const yearEnd = e.end.split(".")[0];
   const subjects = e.coursework.map(c => c.replace(/^[A-Z]+\s*\d+\s*·\s*/, ""));
   const proseList = (arr) => {
     if (arr.length <= 1) return arr.join("");
     if (arr.length === 2) return `${arr[0]} and ${arr[1]}`;
     return `${arr.slice(0, -1).join(", ")}, and ${arr[arr.length - 1]}`;
   };
   return (
     <article key={e.school}
              className={`edu-chapter ${e.tier === "UNDERGRAD" ? "ug" : "grad"}`}>
       <div className="edu-meta">
         <span className="edu-roman">{roman}.</span>
         <span className="edu-tier">{tierLabel} · {yearStart} — {yearEnd}</span>
       </div>

       <div className="edu-head">
         <div className="edu-head-l">
           <h3 className="edu-school">
             {e.school}<span className="edu-dot">.</span>
           </h3>
           <div className="edu-degree">{e.degree}</div>
           <div className="edu-track"><em>{e.track}</em></div>
         </div>
         <div className="edu-gpa">
           <span className="edu-gpa-lbl">GPA</span>
           <span className="edu-gpa-val">{gpaVal}</span>
           <span className="edu-gpa-scale">{gpaScale}</span>
         </div>
       </div>

       <div className="edu-rule"/>

       <div className="edu-section">
         <div className="edu-section-h">
           <span className="edu-section-num">i</span>
           Coursework — <em>{subjects.length} subjects</em> taken across the program.
         </div>
         <p className="edu-prose">
           {subjects.map((s, j) => (
             <span key={j}>
               {j > 0 && <span className="edu-bullet">·</span>}
               {s}
             </span>
           ))}
         </p>
       </div>

       <div className="edu-section">
         <div className="edu-section-h">
           <span className="edu-section-num">ii</span>
           Outside class — <em>{e.activities.length} roles</em> alongside the degree.
         </div>
         <p className="edu-prose-soft">
           {proseList(e.activities)}.
         </p>
       </div>
     </article>
   );
 })}
 </div>
 </>
 );
}

/* =================================================================== */
/* CERTS, Hex Badges */
/* =================================================================== */
function CertsApp() {
 return (
 <>
 <div className="app-eyebrow"><span className="dash"/> 07 · CERTIFICATIONS · 6 BADGES</div>
 <h1 className="app-h">Cloud + <span className="ital">AI credentials.</span></h1>
 <p className="app-lede">
 Five years of cloud and AI certifications. The kind of thing recruiters scan for in 2.4 seconds.
 </p>

 <div className="cert-grid">
 {P.certs.map((c) => {
   const Tag = c.url ? "a" : "div";
   const linkProps = c.url ? { href: c.url, target: "_blank", rel: "noreferrer" } : {};
   return (
     <Tag key={c.code} className={`cert ${c.color} ${c.url ? "is-link" : ""} ${c.image ? "has-image" : ""}`} {...linkProps}>
       {c.image ? (
         <div className="badge-img-wrap">
           <img className="badge-img" src={c.image} alt={c.name} loading="lazy"/>
         </div>
       ) : (
         <div className="hex"><span>{c.letter}</span></div>
       )}
       <div className="name">{c.name}</div>
       <div className="org">{c.org}</div>
       <div className="date">{c.date}</div>
       {c.url && <span className="cert-cta">verify →</span>}
     </Tag>
   );
 })}
 </div>
 </>
 );
}

/* =================================================================== */
/* CONTACT, Postcard */
/* =================================================================== */
function ContactApp() {
  const [copied, setCopied] = useState(false);
  const [now, setNow] = useState(() => new Date());

  useEffect(() => {
    const t = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(t);
  }, []);

  const copyEmail = () => {
    navigator.clipboard?.writeText(P.hero.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 1800);
  };

  const laTime = now.toLocaleTimeString("en-US", {
    timeZone: "America/Los_Angeles",
    hour: "2-digit", minute: "2-digit", second: "2-digit",
    hour12: false,
  });
  const laHour = parseInt(now.toLocaleString("en-US", {
    timeZone: "America/Los_Angeles", hour: "numeric", hour12: false,
  }), 10);
  const isDay = laHour >= 6 && laHour < 19;

  const starters = [
    { label: "Job opportunity", subject: "Hi Arshia — opportunity at [company]" },
    { label: "Quick question",  subject: "Quick question for Arshia" },
    { label: "Coffee chat",     subject: "Coffee chat?" },
    { label: "Saying hi",       subject: "Hi from a fellow builder" },
  ];

  const channels = [
    { slug: "linkedin", name: "LinkedIn",  val: "/in/arshiamubiasshaik", url: P.hero.linkedin,  external: true },
    { slug: "github",   name: "GitHub",    val: "/arshia-shaik",          url: P.hero.github,    external: true },
    { slug: "medium",   name: "Medium",    val: P.hero.medium,            url: P.hero.mediumUrl, external: true },
    { slug: "gmail",    name: "USC email", val: P.hero.uscEmail,          url: `mailto:${P.hero.uscEmail}`, external: false },
  ];

  return (
    <>
      <div className="app-eyebrow"><span className="dash"/> 09 · CONTACT · LOS ANGELES</div>
      <h1 className="app-h">Let's <span className="ital">talk.</span></h1>
      <p className="app-lede">
        Open to new-grad 2026 roles. Best route is email — pick a starter below or write your own. Reply within 24 hours.
      </p>

      <div className="ct-spread">
        <div className="ct-main">
          {/* HERO — animated email + action buttons */}
          <div className="ct-hero">
            <div className="ct-hero-eye">Best way to reach me</div>
            <a href={`mailto:${P.hero.email}`} className="ct-hero-mail" aria-label={`Email ${P.hero.email}`}>
              <span className="ct-shimmer">{P.hero.email}</span>
              <span className="ct-cursor" aria-hidden="true">|</span>
            </a>
            <div className="ct-hero-actions">
              <a href={`mailto:${P.hero.email}`} className="ct-btn primary">
                <span className="ico">↗</span>
                <span>Open mail</span>
              </a>
              <button onClick={copyEmail} type="button" className="ct-btn ghost">
                <span className="ico">{copied ? "✓" : "⎘"}</span>
                <span>{copied ? "Copied" : "Copy"}</span>
              </button>
            </div>
          </div>

          {/* QUICK STARTERS — pre-filled subject lines */}
          <div className="ct-starters">
            <div className="ct-starters-eye">Or pick a starter —</div>
            <div className="ct-starters-row">
              {starters.map((s) => (
                <a
                  key={s.label}
                  href={`mailto:${P.hero.email}?subject=${encodeURIComponent(s.subject)}`}
                  className="ct-starter"
                >
                  <span className="lbl">{s.label}</span>
                  <span className="arr" aria-hidden="true">→</span>
                </a>
              ))}
            </div>
          </div>

          {/* CHANNELS — 2×2 grid with logos */}
          <div className="ct-channels">
            {channels.map((c) => (
              <a
                key={c.name}
                href={c.url}
                target={c.external ? "_blank" : undefined}
                rel={c.external ? "noreferrer" : undefined}
                className="ct-ch"
              >
                <div className="ct-ch-logo">
                  <img src={`https://cdn.simpleicons.org/${c.slug}/8a8579`} alt={c.name} loading="lazy"/>
                </div>
                <div className="ct-ch-meta">
                  <span className="lbl">{c.name}</span>
                  <span className="val">{c.val}</span>
                </div>
                <span className="arr" aria-hidden="true">→</span>
              </a>
            ))}
          </div>

          {/* RESUME pill */}
          <a href={P.hero.resumeUrl} download className="ct-resume-btn">
            <span className="arr">↓</span>
            <span className="txt">Download <em>résumé.pdf</em></span>
            <span className="meta">2 pages · USC GPA · hackathons · certs</span>
          </a>
        </div>

        <aside className="ct-side">
          {/* LIVE LA CLOCK */}
          <div className="ct-clock">
            <div className="lbl">
              <span className={`ct-clock-icon ${isDay ? "is-day" : "is-night"}`} aria-hidden="true">
                {isDay ? "☀" : "☾"}
              </span>
              <span>Currently in LA</span>
            </div>
            <div className="time">{laTime}</div>
            <div className="meta">{isDay ? "Day" : "Night"} · UTC−7</div>
          </div>

          <div className="ct-fact">
            <div className="lbl">Status</div>
            <div className="val"><span className="dot"/><em>Open to work</em></div>
          </div>

          <div className="ct-fact">
            <div className="lbl">Reply time</div>
            <div className="val"><em>Within 24 hours</em></div>
          </div>

          <div className="ct-fact">
            <div className="lbl">Available from</div>
            <div className="val"><em>July 14, 2026</em></div>
          </div>

          <div className="ct-fact">
            <div className="lbl">Authorization</div>
            <div className="val"><em>OPT + STEM extension</em></div>
            <div className="sub">3-year US work authorization</div>
          </div>

          <div className="ct-fact">
            <div className="lbl">Looking for</div>
            <div className="val"><em>ML Engineering</em></div>
            <div className="val"><em>Software Engineering</em></div>
            <div className="val"><em>AI Infrastructure</em></div>
          </div>

          <div className="ct-fact">
            <div className="lbl">Based in</div>
            <div className="val"><em>Los Angeles, CA</em></div>
            <div className="sub">Remote / hybrid OK</div>
          </div>
        </aside>
      </div>
    </>
  );
}

/* =================================================================== */
/* WRITING, Medium + future blog */
/* =================================================================== */
function WritingApp() {
 const w = P.writing;
 return (
 <>
 <div className="app-eyebrow"><span className="dash"/> 08 · WRITING · {w.handle.toUpperCase()}</div>
 <h1 className="app-h">Things I've <span className="ital">written.</span></h1>
 <p className="app-lede">{w.blurb}</p>

 <div className="writing-handle">
 <span className="h">{w.handle}</span>
 <span>on Medium ·</span>
 <a href={w.url} target="_blank" rel="noreferrer">visit profile →</a>
 </div>

 <div className="writing-grid">
 {w.articles.map((a, i) => (
 <a key={i} href={a.url} target="_blank" rel="noreferrer" className="writing-art">
   <div className="meta">
     <span className="lime">{a.tag}</span>
     <span className="meta-row">
       <span>{a.date}</span>
       <span>·</span>
       <span>{a.read}</span>
     </span>
   </div>
   <h3>
     {a.title}
     {a.sub && <span className="sub"><span className="ital">{a.sub}</span></span>}
   </h3>
   <p>{a.excerpt}</p>
   <span className="read">Read on Medium →</span>
 </a>
 ))}

 {w.upcoming && w.upcoming.length > 0 && (
   <div className="writing-art is-upcoming" aria-label="Drafts in progress">
     <div className="meta">
       <span className="lime">▸ DRAFTS · IN PROGRESS</span>
       <span className="meta-row"><span>{w.upcoming.length} on the desk</span></span>
     </div>
     <h3>
       Coming
       <span className="sub"><span className="ital">soon.</span></span>
     </h3>
     <ul className="upcoming-list">
       {w.upcoming.map((u, i) => <li key={i}>{u}</li>)}
     </ul>
     <span className="read">stay tuned →</span>
   </div>
 )}
 </div>
 </>
 );
}

/* =================================================================== */
/* DOCK */
/* =================================================================== */
function Dock({ current, onOpen, onHome }) {
 const items = [
 ["about","About"], ["skills","Skills"], ["experience","Work"], ["projects","Projects"],
 ["hackathons","Hacks"], ["education","Edu"], ["certs","Certs"], ["writing","Writing"], ["contact","Contact"],
 ];
 return (
 <div className="dock">
   <button className={`dock-home ${current === "home" ? "active" : ""}`} onClick={onHome} aria-label="Home">
     <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
       <path d="M3 11 L12 4 L21 11"/>
       <path d="M5 10 V20 H19 V10"/>
     </svg>
   </button>
   <span className="sep"/>
   {items.map(([id, label]) => (
     <button key={id} onClick={() => onOpen(id)} className={current === id ? "active" : ""}>
       {label}
     </button>
   ))}
 </div>
 );
}

/* =================================================================== */
/* TWEAKS */
/* =================================================================== */
const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
 "theme": "midnight",
 "showStickerStars": true,
 "stickerRotation": true
}/*EDITMODE-END*/;

function TweaksWrapper({ tweaks, setTweak }) {
 return (
 <TweaksPanel title="Tweaks">
 <TweakSection title="Theme">
 <TweakSelect
 label="Color world"
 value={tweaks.theme}
 onChange={(v) => setTweak("theme", v)}
 options={[
 { value: "midnight", label: "Midnight + Lime (default)" },
 { value: "terminal", label: "Terminal · pure black + acid" },
 { value: "plum", label: "Plum + Peach · fashion-mag" },
 { value: "cobalt", label: "Cobalt + Cream · Swiss editorial" },
 { value: "saffron", label: "Saffron + Charcoal · warm" },
 { value: "linen",   label: "Linen + Sage · quiet daylight" },
 ]}
 />
 </TweakSection>
 <TweakSection title="Skills sheet">
 <TweakToggle label="Star badges on hot stickers" value={tweaks.showStickerStars} onChange={(v) => setTweak("showStickerStars", v)} />
 <TweakToggle label="Rotate stickers (cluttered look)" value={tweaks.stickerRotation} onChange={(v) => setTweak("stickerRotation", v)} />
 </TweakSection>
 </TweaksPanel>
 );
}

/* =================================================================== */
/* CONSOLE — chat + terminal in one panel                              */
/* =================================================================== */

/* ── Knowledge base for the chatbot.
   Add/edit entries here to teach the bot new facts.
   Each entry: keywords (lowercase, partial-match) → reply.
   The matcher scores by total characters of keyword overlap, longest wins.
*/
const CHAT_KB = [
  { kw: ["opt", "visa", "work auth", "authoriz", "f1", "international stud", "stem", "sponsor"],
    reply: "Arshia has 3 years of US work authorization without sponsorship: 12 months OPT (starts after graduation) + 24 months STEM-OPT extension (CS qualifies). Open to on-site, hybrid, or fully remote." },
  { kw: ["start", "when can you start", "available", "join", "start date", "july"],
    reply: "Available to start July 14, 2026, once OPT is approved (graduation is May 2026). On-site, hybrid, or remote." },
  { kw: ["hiring", "open to work", "looking for", "new grad", "job"],
    reply: "Yes! Arshia is actively looking for new-grad 2026 roles in SWE, ML Engineering, or AI Infrastructure. Available to start July 14, 2026. Email: arshiamubiasshaik@gmail.com." },
  { kw: ["graduat", "when do you finish", "may 2026", "when grad"],
    reply: "She graduates May 2026 from USC with an MSCS. GPA 3.81 / 4.0." },
  { kw: ["school", "univers", "where do you study", "viterbi"],
    reply: "USC Viterbi for the MSCS (graduating May 2026). Before that: BE Computer Science from SPPU Pune (CGPA 9.41/10, First Class with Distinction)." },
  { kw: ["project", "build", "made", "what have you built"],
    reply: "Eight projects on the site. Highlights: FULL (Claude-powered food access, selected from hundreds), Luke (ADHD desktop companion), CLR Agent (DeepMind+InstaLILY top build), FreezeFrame (3D sports), TOFU Unlearning research, Alzi (Alzheimer's app), Clinical Bias detection, Music Genre Transformer. Click PROJECTS on the home grid for details." },
  { kw: ["hackathon", "hack"],
    reply: "Five hackathons shipped in 12 months: SoCal Claude Builder Club (selected from hundreds), Build4SC USC, Google DeepMind × InstaLILY SF, GLITCH@UCLA Gemini, UC Berkeley AI." },
  { kw: ["cert", "aws cert", "gcp cert", "azure cert", "cloud cert"],
    reply: "Five cloud certs: AWS Solutions Architect Associate, AWS Cloud Practitioner, GCP Associate Cloud Engineer, Azure AI Fundamentals, Azure Fundamentals." },
  { kw: ["skill", "stack", "tech", "language", "framework"],
    reply: "Stack: Python, TypeScript, React, Electron, Flutter. ML: PyTorch, TensorFlow, LoRA, Fairlearn, MediaPipe. LLMs: Claude, Gemini Pro, FunctionGemma, RAG, agentic AI. Cloud: AWS / GCP / Azure (5 certs)." },
  { kw: ["resume", "cv", "download"],
    reply: "Resume PDF lives at assets/ArshiaShaik_Resume.pdf. There's a download button on the home page and on Contact." },
  { kw: ["contact", "email", "reach", "get in touch"],
    reply: "Best way: arshiamubiasshaik@gmail.com. Also LinkedIn (linkedin.com/in/arshiamubiasshaik) or GitHub (github.com/arshia-shaik). Reply within 24h." },
  { kw: ["location", "where are you", "based", "los angeles", " la "],
    reply: "Based in Los Angeles. OPT-eligible. Open to on-site (LA or anywhere), hybrid, or remote." },
  { kw: ["udemy", "course", "instructor", "teach", "11k", "11000", "1st mentor"],
    reply: "Arshia designed, recorded, and delivered a beginner AWS Cloud Computing course on Udemy with 11,000+ learners enrolled. Sold to 1st Mentor. Link is on the home page." },
  { kw: ["keck", "medical", "healthcare", "graduate assistant", "prevention"],
    reply: "She's a Graduate Assistant at Keck Medicine of USC, teaching prevention-education modules to undergrad students." },
  { kw: ["github"], reply: "github.com/arshia-shaik" },
  { kw: ["linkedin"], reply: "linkedin.com/in/arshiamubiasshaik (4.7K followers, 500+ connections)" },
  { kw: ["medium", "blog", "article", "writing"],
    reply: "@arshiamubiasshaik on Medium. Two articles published, more in the works: medium.com/@arshiamubiasshaik" },
  { kw: ["leadership", "volunteer", "ngo", "muskurahat", "umeed", "ieee", "techbrewers"],
    reply: "Off the clock: Course Author at 1st Mentor (11K+ Udemy learners), GA teaching at Keck, USC Viterbi Orientation Leader, Tech Head at SKN IEEE, member of Club TechBrewers, fundraising volunteer at Muskurahat Foundation, education volunteer at UMEED." },
  { kw: ["alzi", "alzheimer"],
    reply: "Alzi: full-stack mobile AI app for Alzheimer's patients, built at the UC Berkeley AI Hackathon. Voice cloning of family voices (LMNT), face recognition (InsightFace), caregiver dashboard with geofenced SOS alerts, Calendar routine support. Stack: Flutter, Gemini Pro, Firebase, Flask." },
  { kw: ["full", "food access", "food insecurity", "claude builder"],
    reply: "FULL: Claude-powered food-access platform. Selected from hundreds of applicants for the SoCal Claude Builder Club hackathon. Conversational interface, no accounts, no forms. Dietary needs (halal, kosher, vegan) treated as requirements, not suggestions. Sponsors: Anthropic, Fetch.ai, Afterquery." },
  { kw: ["luke", "adhd", "desktop companion"],
    reply: "Luke: consumer desktop AI companion for ADHD users (Build4SC USC). Animated character on screen. Cognitive Load Score 0–100 refreshed every 10s. Chat Coach pauses 3s before sending heated messages. 'Hey Luke' voice via Whisper + ElevenLabs. Local-first: nothing leaves the laptop. Stack: Electron, React, Tailwind, Framer Motion, SQLite, face-api.js, Claude." },
  { kw: ["clr", "cognitive load", "instalily", "deepmind", "functiongemma"],
    reply: "CLR Agent: fine-tuned FunctionGemma 270M with LoRA at the Google DeepMind × InstaLILY SF hackathon (8h). Single agentic loop: perceive → reason → act → observe → adapt. Zero cloud calls. The model itself IS the agent. Selected as a Top Build." },
  { kw: ["freezeframe", "freeze frame", "ucla", "glitch", "sports", "nano banana"],
    reply: "FreezeFrame: describe a sports moment in plain words and the app finds the frame, freezes it, and reconstructs it as a 3D scene you can orbit. Built in 24h at GLITCH@UCLA with Google DeepMind Gemini and Nano Banana Pro." },
  { kw: ["tofu", "unlearning", "phi"],
    reply: "TOFU Unlearning Re-examined: USC research project asking whether Gradient Ascent fails LLM unlearning structurally or from bad hyperparameters. 100× learning rate sweep on Phi-1.5 + TOFU benchmark. Higher LR degraded both forget AND retain sets, pointing to representation entanglement as the real barrier. Paper PDF on the project card." },
  { kw: ["bias", "clinical", "biogpt", "clinicalbert", "fairness", "mimic"],
    reply: "Bias Detection in Clinical LLMs: fine-tuned BioGPT and ClinicalBERT on 40K+ MIMIC-III records, audited fairness across 5 demographic groups. Cut Equalized Odds disparity by 50% with Fairlearn ThresholdOptimizer + counterfactual augmentation, no accuracy loss." },
  { kw: ["music", "genre", "gtzan", "musicgen"],
    reply: "Music Genre Transformer: benchmarked 5 architectures (Transformer, CycleGAN, StarGAN, VAE, MusicGen) for audio genre transfer on GTZAN. Prompt-conditioned MusicGen won. Real-time Gradio interface for live genre swap." },
  { kw: ["drdo", "radar", "kalman", "defence", "defense"],
    reply: "DRDO research intern (2021): architected a radar data fusion pipeline using Python and Kalman filtering to resolve duplicate detections across overlapping radar coverage. Researched AI classification of airborne objects from radar telemetry." },
  { kw: ["tech mahindra", "spring", "rest"],
    reply: "Tech Mahindra SDE intern (2022): full-stack Spring Boot + AWS S3 web app. +25% data retrieval via caching, +40% query perf via SQL indexing on 10K+ daily transactions, ML-driven anomaly detection." },
  { kw: ["mylearning", "rizee", "migration"],
    reply: "MyLearning Plus / Rizee cloud intern (2022): owned end-to-end GCP→AWS migration. EC2 / S3 / RDS Multi-AZ / CloudWatch. −30% ops cost, −45% latency for 5K+ daily users." },
  { kw: ["games", "game", "batcrazy", "bat crazy", "csci 526", "game console", "play", "snackd", "unity"],
    reply: "BatCrazy is the CSCI 526 final project, shipped with team SNACKD. Five-person Unity team, five public builds, fully playable in browser. Arshia owned the Hunter AI, child panic behavior, and the analytics pipeline. Click PROJECTS on the home grid and scroll to the Side Project section to play it." },
  { kw: ["why", "story", "motivat"],
    reply: "Most of Arshia's projects come from problems she can't ignore. Food insecurity. Alzheimer's care. ADHD overwhelm. Clinical bias. The pattern: build AI that meets people where they are, not the other way around." },
  { kw: ["thank", "thanks", "great", "awesome", "love", "cool", "nice"],
    reply: "Glad it landed. Anything else? Or email her: arshiamubiasshaik@gmail.com." },
  { kw: ["hi", "hello", "hey ", "yo "],
    reply: "Hi! I'm Arshia's site bot. Ask about her work, OPT status, projects, hackathons, the stack, or how to reach her." },
  { kw: ["who are you", "what are you"],
    reply: "I'm a small chatbot trained on Arshia's portfolio. Ask me about her work, hiring availability, OPT, projects, the stack — or email her directly at arshiamubiasshaik@gmail.com." },
];

const CHAT_FALLBACK = "Not sure about that one. Try asking about projects, hackathons, OPT status, the stack, or how to reach Arshia. For anything else: arshiamubiasshaik@gmail.com.";

function answerChat(query) {
  const q = " " + query.toLowerCase() + " ";
  let bestEntry = null;
  let bestScore = 0;
  for (const entry of CHAT_KB) {
    let score = 0;
    for (const kw of entry.kw) {
      if (q.includes(kw.toLowerCase())) score += kw.length;
    }
    if (score > bestScore) {
      bestScore = score;
      bestEntry = entry;
    }
  }
  return bestEntry ? bestEntry.reply : CHAT_FALLBACK;
}

const CHAT_SUGGESTIONS = [
  "Are you OPT eligible?",
  "What roles are you looking for?",
  "Tell me about your projects",
  "What's your stack?",
  "How do I reach you?",
];

function Console({ open, mode, setMode, onClose, onOpenApp }) {
  const [chatLog, setChatLog] = useState([
    { from: "bot", text: "Hi! I'm Arshia's site bot. Ask about her work, OPT status, projects, hackathons, the stack, or how to reach her. Try one of the suggestions below ↓" },
  ]);
  const [termLog, setTermLog] = useState([
    { type: "sys", text: "arshia · terminal · v2026" },
    { type: "sys", text: "type `help` and hit return ↵" },
  ]);
  const [val, setVal] = useState("");
  const inputRef = useRef(null);
  const bodyRef = useRef(null);

  useEffect(() => {
    if (open) setTimeout(() => inputRef.current?.focus(), 80);
  }, [open, mode]);
  useEffect(() => {
    if (bodyRef.current) bodyRef.current.scrollTop = bodyRef.current.scrollHeight;
  }, [chatLog, termLog, mode]);

  const sendChat = (raw) => {
    const text = raw.trim();
    if (!text) return;
    const reply = answerChat(text);
    setChatLog((l) => [...l, { from: "user", text }, { from: "bot", text: reply }]);
    setVal("");
  };

  const sendTerm = (raw) => {
    const cmd = raw.trim().toLowerCase();
    const out = [{ type: "cmd", text: `> ${raw}` }];
    if (!cmd) {}
    else if (cmd === "help") {
      out.push({ type: "sys", text: "available: about · skills · experience · projects · hackathons · education · certs · writing · medium · contact · resume · clear · whoami · neofetch · chat · exit" });
    }
    else if (cmd === "clear") { setTermLog([]); setVal(""); return; }
    else if (cmd === "exit" || cmd === "close") { onClose(); setVal(""); return; }
    else if (cmd === "chat") { setMode("chat"); setVal(""); return; }
    else if (cmd === "whoami") {
      out.push({ type: "ink", text: "Arshia Mubias Shaik" });
      out.push({ type: "sys", text: "USC MSCS '26 · LA · open to new-grad" });
    }
    else if (cmd === "about")      { out.push({ type: "sys", text: "→ opening about" }); onOpenApp("about"); }
    else if (cmd === "skills")     { out.push({ type: "sys", text: "→ opening skills" }); onOpenApp("skills"); }
    else if (cmd === "projects")   { out.push({ type: "sys", text: "→ opening projects" }); onOpenApp("projects"); }
    else if (cmd === "experience" || cmd === "work") { out.push({ type: "sys", text: "→ opening experience" }); onOpenApp("experience"); }
    else if (cmd === "games" || cmd === "batcrazy") { out.push({ type: "lime", text: "BatCrazy is live in browser. Opening projects." }); onOpenApp("projects"); }
    else if (cmd === "hackathons" || cmd === "hacks") { out.push({ type: "sys", text: "→ opening hackathons" }); onOpenApp("hackathons"); }
    else if (cmd === "education" || cmd === "edu") { out.push({ type: "sys", text: "→ opening education" }); onOpenApp("education"); }
    else if (cmd === "certs" || cmd === "certifications") { out.push({ type: "sys", text: "→ opening certifications" }); onOpenApp("certs"); }
    else if (cmd === "writing" || cmd === "blog") { out.push({ type: "sys", text: "→ opening writing" }); onOpenApp("writing"); }
    else if (cmd === "medium")     { out.push({ type: "lime", text: "@arshiamubiasshaik · medium.com/@arshiamubiasshaik" }); onOpenApp("writing"); }
    else if (cmd === "contact" || cmd === "email") { out.push({ type: "lime", text: "arshiamubiasshaik@gmail.com" }); onOpenApp("contact"); }
    else if (cmd === "resume" || cmd === "cv") {
      out.push({ type: "sys", text: "resume on file: assets/ArshiaShaik_Resume.pdf" });
    }
    else if (cmd === "neofetch") {
      out.push({ type: "lime", text: "    .---.        " });
      out.push({ type: "lime", text: "   /  o  \\   arshia@portfolio" });
      out.push({ type: "lime", text: "  |   .   |  ─────────────" });
      out.push({ type: "ink",  text: "   \\_____/   Site:   arshia shaik · v2026" });
      out.push({ type: "ink",  text: "             Host:   USC Viterbi · Los Angeles" });
      out.push({ type: "ink",  text: "             GPA:    3.81 / 4.0 · MSCS '26" });
      out.push({ type: "ink",  text: "             Stack:  LLM · Agentic · Cloud · Full-stack" });
      out.push({ type: "ink",  text: "             Status: open_to_work" });
    }
    else if (cmd === "ls") {
      out.push({ type: "sys", text: "about/  skills/  experience/  projects/  hackathons/  education/  certs/  writing/  contact/" });
    }
    else if (cmd === "sudo") {
      out.push({ type: "lime", text: "nice try ✦" });
    }
    else {
      out.push({ type: "dim", text: `command not found: ${cmd}` });
      out.push({ type: "dim", text: "type `help` for options, or switch to chat mode" });
    }
    setTermLog((h) => [...h, ...out]);
    setVal("");
  };

  const submit = (e) => {
    e.preventDefault();
    if (mode === "chat") sendChat(val);
    else sendTerm(val);
  };

  if (!open) return null;
  const isChat = mode === "chat";
  return (
    <div className={`console ${isChat ? "is-chat" : "is-terminal"}`}>
      <div className="console-head">
        <div className="console-tabs">
          <button className={`console-tab ${isChat ? "active" : ""}`} onClick={() => setMode("chat")}>● chat</button>
          <button className={`console-tab ${!isChat ? "active" : ""}`} onClick={() => setMode("terminal")}>▌ terminal</button>
        </div>
        <div className="console-title">{isChat ? "ask arshia" : "arshia ─ zsh"}</div>
        <button className="console-x" onClick={onClose} aria-label="close">✕</button>
      </div>

      <div className="console-body" ref={bodyRef}>
        {isChat ? (
          chatLog.map((m, i) => (
            <div key={i} className={`chat-msg ${m.from}`}>{m.text}</div>
          ))
        ) : (
          termLog.map((h, i) => (
            <div key={i} className={`ln ${h.type === "lime" ? "lime" : h.type === "dim" ? "dim" : h.type === "ink" || h.type === "cmd" ? "ink" : ""}`}>{h.text}</div>
          ))
        )}
      </div>

      {isChat && (
        <div className="chat-suggestions">
          {CHAT_SUGGESTIONS.map((s, i) => (
            <button key={i} className="chat-suggestion" onClick={() => sendChat(s)}>{s}</button>
          ))}
        </div>
      )}

      <form className="console-input" onSubmit={submit}>
        <span className="console-prompt">{isChat ? "›" : "$"}</span>
        <input
          ref={inputRef}
          value={val}
          onChange={(e) => setVal(e.target.value)}
          spellCheck={false}
          autoComplete="off"
          placeholder={isChat ? "ask anything about Arshia…" : "try: help"}
        />
      </form>
    </div>
  );
}

/* =================================================================== */
/* ROOT */
/* =================================================================== */
/* ─── Vanta NET — animated mesh background, theme-aware ─── */
const VANTA_PALETTE = {
  midnight: { color: 0xd4a056, backgroundColor: 0x000000 },
  terminal: { color: 0x4eff4e, backgroundColor: 0x000000 },
  plum:     { color: 0xff9b6e, backgroundColor: 0x1c0d24 },
  cobalt:   { color: 0x0a1638, backgroundColor: 0xf1ecde },
  saffron:  { color: 0xf5b13b, backgroundColor: 0x1a160e },
  linen:    { color: 0x5d6a48, backgroundColor: 0xefe9da },
};
function VantaNet({ theme }) {
  const ref = useRef(null);
  const inst = useRef(null);
  useEffect(() => {
    if (!window.VANTA || !window.VANTA.NET || !ref.current) return;
    const p = VANTA_PALETTE[theme] || VANTA_PALETTE.midnight;
    if (inst.current) {
      try { inst.current.destroy(); } catch (e) {}
      inst.current = null;
    }
    inst.current = window.VANTA.NET({
      el: ref.current,
      mouseControls: true,
      touchControls: true,
      gyroControls: false,
      minHeight: 200.00,
      minWidth: 200.00,
      scale: 1.00,
      scaleMobile: 1.00,
      color: p.color,
      backgroundColor: p.backgroundColor,
      points: 6.00,
      maxDistance: 16.00,
      spacing: 26.00,
      showDots: true,
    });
    return () => {
      if (inst.current) {
        try { inst.current.destroy(); } catch (e) {}
        inst.current = null;
      }
    };
  }, [theme]);
  return <div ref={ref} className="vanta-bg" aria-hidden="true"/>;
}

/* ─── Music: subtle ambient background, click-to-play ─── */
function MusicToggle() {
  const audioRef = useRef(null);
  const [playing, setPlaying] = useState(false);
  const [hinted, setHinted] = useState(false);

  useEffect(() => {
    /* one-time hint pulse for first-time visitors so they notice the button */
    try {
      if (!sessionStorage.getItem("arshia-music-seen")) {
        setHinted(true);
        sessionStorage.setItem("arshia-music-seen", "1");
        setTimeout(() => setHinted(false), 6000);
      }
    } catch (e) {}
  }, []);

  const toggle = () => {
    const a = audioRef.current;
    if (!a) return;
    if (playing) {
      a.pause();
      setPlaying(false);
    } else {
      a.volume = 0.18;
      a.play().then(() => setPlaying(true)).catch(() => {});
    }
    setHinted(false);
  };

  return (
    <>
      <audio
        ref={audioRef}
        src="assets/audio/ambient.mp3"
        loop
        preload="none"
        onEnded={() => setPlaying(false)}
      />
      <button
        className={`music-fab ${playing ? "is-playing" : ""} ${hinted ? "is-hinted" : ""}`}
        onClick={toggle}
        title={playing ? "Pause music" : "Play ambient music"}
        aria-pressed={playing}
        aria-label={playing ? "Pause ambient music" : "Play ambient music"}
      >
        {playing ? (
          <span className="music-bars" aria-hidden="true">
            <span/><span/><span/><span/>
          </span>
        ) : (
          <span className="music-note" aria-hidden="true">♪</span>
        )}
      </button>
    </>
  );
}

/* ─── Theme picker FAB ──────────────────────────────────────────────────
   Small palette button that opens a swatch popover. Each swatch is a
   split circle (background / accent) so the user sees the actual colors
   before clicking. Sits in the bottom-right rail with the music + chat FABs. */
const THEMES = [
  { value: "midnight", label: "Midnight",  bg: "#000000", accent: "#d4a056" },
  { value: "terminal", label: "Terminal",  bg: "#000000", accent: "#4eff4e" },
  { value: "plum",     label: "Plum",      bg: "#1c0d24", accent: "#ff9b6e" },
  { value: "cobalt",   label: "Cobalt",    bg: "#f1ecde", accent: "#d4382c" },
  { value: "saffron",  label: "Saffron",   bg: "#1a160e", accent: "#f5b13b" },
  { value: "linen",    label: "Linen",     bg: "#efe9da", accent: "#5d6a48" },
];
function ThemeToggle({ theme, setTheme }) {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);
  useEffect(() => {
    if (!open) return;
    const onDoc = (e) => { if (ref.current && !ref.current.contains(e.target)) setOpen(false); };
    const onKey = (e) => { if (e.key === "Escape") setOpen(false); };
    document.addEventListener("mousedown", onDoc);
    window.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onDoc);
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);
  const active = THEMES.find((t) => t.value === theme) || THEMES[0];
  return (
    <div className={`theme-fab-wrap ${open ? "is-open" : ""}`} ref={ref}>
      <button
        type="button"
        className="theme-fab"
        onClick={() => setOpen((v) => !v)}
        title="Change color theme"
        aria-label="Change color theme"
        aria-expanded={open}
      >
        <span
          className="theme-fab-swatch"
          style={{ background: `linear-gradient(135deg, ${active.bg} 50%, ${active.accent} 50%)` }}
        />
      </button>
      {open && (
        <div className="theme-pop" role="menu">
          <div className="theme-pop-head">Color theme</div>
          <div className="theme-pop-grid">
            {THEMES.map((t) => (
              <button
                key={t.value}
                type="button"
                className={`theme-chip ${t.value === theme ? "is-active" : ""}`}
                onClick={() => { setTheme(t.value); setOpen(false); }}
                role="menuitemradio"
                aria-checked={t.value === theme}
                title={t.label}
              >
                <span
                  className="theme-chip-swatch"
                  style={{ background: `linear-gradient(135deg, ${t.bg} 50%, ${t.accent} 50%)` }}
                />
                <span className="theme-chip-label">{t.label}</span>
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

function App() {
 const [view, setView] = useState("home"); // home | <appId>
 const [consoleOpen, setConsoleOpen] = useState(false);
 const [consoleMode, setConsoleMode] = useState("chat"); // "chat" | "terminal"
 const [highlightProject, setHighlightProject] = useState(null);
 const [tweaks, setTweak] = useTweaks(TWEAK_DEFAULTS);

 const jumpToProject = (id) => {
   setHighlightProject(id);
   setView("projects");
 };

 /* apply theme class on body */
 useEffect(() => {
 const c = `theme-${tweaks.theme}`;
 document.body.classList.forEach((cls) => {
 if (cls.startsWith("theme-")) document.body.classList.remove(cls);
 });
 if (tweaks.theme && tweaks.theme !== "midnight") document.body.classList.add(c);
 /* sticker star + rotation toggles via CSS vars */
 document.documentElement.style.setProperty("--show-stars", tweaks.showStickerStars ? "flex" : "none");
 document.documentElement.style.setProperty("--rotate-stickers", tweaks.stickerRotation ? "var(--r, 0deg)" : "0deg");
 }, [tweaks]);

 /* keyboard shortcuts */
 useEffect(() => {
 const onKey = (e) => {
 if (e.target.tagName === "INPUT" || e.target.tagName === "TEXTAREA") {
 // allow ESC to close console even from input
 if (e.key === "Escape" && consoleOpen) setConsoleOpen(false);
 return;
 }
 const map = {
 "1":"about","2":"skills","3":"experience","4":"projects",
 "5":"hackathons","6":"education","7":"certs","8":"writing","9":"contact"
 };
 if (map[e.key]) setView(map[e.key]);
 if (e.key === "h" || e.key === "H") setView("home");
 // ~ = open in terminal mode, / = open in chat mode
 if (e.key === "`" || e.key === "~") { e.preventDefault(); setConsoleMode("terminal"); setConsoleOpen((v) => !v); }
 if (e.key === "/") { e.preventDefault(); setConsoleMode("chat"); setConsoleOpen(true); }
 };
 window.addEventListener("keydown", onKey);
 return () => window.removeEventListener("keydown", onKey);
 }, [consoleOpen]);

 const ORDER = ["about","skills","experience","projects","hackathons","education","certs","writing","contact"];
 const titles = {
 about: ["About", "01 · who I am, what I build"],
 skills: ["Skills", "02 · the stack · 6 clusters"],
 experience: ["Experience", "03 · 4 roles · since 2021"],
 projects: ["Projects", "04 · 8 builds + 1 side project"],
 hackathons: ["Hackathons", "05 · 5 builds · 2025–2026"],
 education: ["Education", "06 · USC + SPPU"],
 certs: ["Certifications", "07 · 6 badges · cloud + AI"],
 writing: ["Writing", "08 · medium + long-form notes"],
 contact: ["Contact", "09 · let's talk"],
 };
 const idx = ORDER.indexOf(view);
 const onPrev = () => setView(ORDER[(idx - 1 + ORDER.length) % ORDER.length]);
 const onNext = () => setView(ORDER[(idx + 1) % ORDER.length]);
 const apps = {
 about: <AboutApp/>, skills: <SkillsApp/>, experience: <ExperienceApp/>,
 projects: <ProjectsApp highlightTarget={highlightProject} onConsumeHighlight={() => setHighlightProject(null)} />,
 hackathons: <HackathonsApp onJumpToProject={jumpToProject} />,
 education: <EducationApp/>, certs: <CertsApp/>,
 writing: <WritingApp/>, contact: <ContactApp/>
 };

 return (
 <>
 <VantaNet theme={tweaks.theme}/>
 <Boot/>
 <div className={`stage ${view !== "home" ? "behind" : ""}`}>
 <Home onOpen={setView}/>
 {view !== "home" && (
 <AppView
 id={`0${idx+1}`}
 title={titles[view][0]}
 subtitle={titles[view][1]}
 onClose={() => setView("home")}
 onPrev={onPrev}
 onNext={onNext}
 >
 {apps[view]}
 </AppView>
 )}
 </div>
 <Dock current={view} onOpen={setView} onHome={() => setView("home")} />
 <button
   className={`ask-fab ${consoleOpen ? "is-hidden" : ""}`}
   onClick={() => { setConsoleMode("chat"); setConsoleOpen(true); }}
   title="Ask my bot anything (/ to open · ~ for terminal)"
   aria-label="Open chat with Arshia's bot"
 >
   <span className="ping"/>
   <span className="glyph">?</span>
 </button>
 <Console
   open={consoleOpen}
   mode={consoleMode}
   setMode={setConsoleMode}
   onClose={() => setConsoleOpen(false)}
   onOpenApp={(id) => { setView(id); }}
 />
 <MusicToggle/>
 <ThemeToggle theme={tweaks.theme} setTheme={(v) => setTweak("theme", v)} />
 <TweaksWrapper tweaks={tweaks} setTweak={setTweak}/>
 </>
 );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App/>);

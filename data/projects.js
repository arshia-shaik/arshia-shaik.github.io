/* ─── PROJECTS, polaroid wall ─────────────────────────────────────────────
 Each project has:
 n , short ID (P-01, P-02, ...), also drives the project image folder
 folder , subdirectory under `assets/projects/` where screenshots live
 e.g. folder: "p-01-full" → assets/projects/p-01-full/<filename>
 year , display year
 title , [first part, second part], second part is rendered italic+lime
 ital , alternate italic accent (optional)
 tag , short event/source tag shown in lime caps
 status , small status badge (SHIPPED, PUBLISHED, etc.)
 blurb , short headline description
 bullets , array of detail bullets
 stack , array of tech tags
 metrics , array of {k,v,bar?,ital?} stat pills
 role , your role on the project
 details , longer narrative paragraph
 imgs , array of FILENAMES inside `assets/projects/<folder>/`.
 imgs[0] is used as the polaroid COVER.
 imgs[1..3] are shown as small thumbnails below the caption.
 Convention: name the cover `cover.png` (or .jpg) and the rest
 `screen-1.png`, `screen-2.png`, etc. Drop the files in the folder
 and list filenames here. Click thumbnails opens full image.
 paper     : (optional) PDF filename inside the project folder. Renders a
              "Read paper →" CTA on the card. e.g. paper: "tofu-paper.pdf"
 repo      : (optional) GitHub URL. Renders a "⌘ code →" CTA.
 demo      : (optional) live demo URL. Renders a "▶ live demo →" CTA.
 demoLabel : (optional) custom label for the demo CTA, e.g. "play our game".
 kind      : (optional) "fun" places the project under the Side Projects
              divider at the bottom, with a prominent primary play button.
 To add a new project: copy any block, paste at the TOP (or, for fun
 projects, at the BOTTOM), and create assets/projects/<folder>/.
 ──────────────────────────────────────────────────────────────────────── */

window.PORTFOLIO = window.PORTFOLIO || {};

window.PORTFOLIO.projects = [
 {
 n: "P-01", year: "2026",
 folder: "p-01-full",
 title: ["FULL", "Food Access Platform"],
 ital: "Food Access",
 tag: "SoCal Claude Builder Club Hackathon · Selected from hundreds",
 status: "SHIPPED",
 blurb:
 "A Claude-powered platform tackling food insecurity by connecting seekers, individual providers, and restaurants through a single conversational interface, no accounts, no forms.",
 bullets: [
 "Seeker flow: natural-language search ranked by dietary needs (halal/kosher/vegan as requirements, not suggestions), health, time, location",
 "Provider flow: Claude parses plain-text postings, runs automatic food-safety checks, publishes clean listings",
 "Two-panel device-agnostic UI, phone, library desktop, dining hall kiosk",
 "Zero accounts, zero stigmatizing language, dignity as the design brief",
 ],
 stack: ["Claude", "Fetch.ai", "Afterquery", "React", "Real-time Search"],
 metrics: [
 { k: "selected from", v: "100s", bar: 0.9 },
 { k: "accounts req'd", v: "0", bar: 0, ital: true },
 { k: "dietary rules", v: "halal·kosher·vegan", bar: 0.95 },
 ],
 role: "AI + Frontend · Team",
 details: "Started from a stat that wouldn't leave me alone: 47.9M food-insecure Americans, 120B lbs of food wasted annually. Built a Claude-powered conversational layer that meets people where they are, no accounts, no forms, dietary needs treated as requirements.",
 imgs: ["cover.png", "screen-1.png", "screen-2.jpg"],
 repo: "https://github.com/arshia-shaik/claudecats-clean",
 },
 {
 n: "P-02", year: "2026",
 folder: "p-02-luke",
 title: ["Luke", "ADHD Desktop Companion"],
 ital: "Desktop Companion",
 tag: "Build4SC Hackathon · USC",
 status: "MVP SHIPPED · ITERATING",
 blurb:
 "A consumer desktop product: an animated AI companion that lives on your screen, watches your day, and steps in three seconds before you spiral. Built for ADHD, students, and anyone running hot.",
 bullets: [
 "Animated always-on desktop character, alive without being annoying",
 "Cognitive Load Score (0–100), refreshed every 10s from app-switching, activity, and break patterns",
 "Chat Coach: catches emotionally charged clipboard messages and pauses 3s before send",
 "'Hey Luke' voice, Whisper in, ElevenLabs out, fully hands-free",
 "Local-first by design: SQLite, face-api.js on-device, sentiment analysis local, no clipboard or face data leaves the laptop",
 "Multi-system integration: voice, vision, OS hooks, animation, and a persistent UI all stitched into one daily-driver app",
 ],
 stack: ["Electron", "React", "Vite", "Tailwind", "Framer Motion", "Zustand", "SQLite", "Claude", "Whisper", "ElevenLabs", "face-api.js"],
 metrics: [
 { k: "intervention", v: "3s pause", bar: 0.85 },
 { k: "load score refresh", v: "10s", bar: 0.7 },
 { k: "data leaves device", v: "no", bar: 0, ital: true },
 ],
 role: "Desktop product · Local-first AI",
 details: "Luke is a product, not a paper. Where the CLR Agent (P-03) was a research bet on fine-tuning a small model to BE the agent, Luke is the consumer surface, many features, polished UX, voice + vision + sentiment all wired into one Electron app you actually live with. The hard part wasn't a single model; it was the integration.",
 imgs: [],
 repo: "https://github.com/arshia-shaik/LukeOS",
 },
 {
 n: "P-03", year: "2026",
 folder: "p-03-clr-agent",
 title: ["Cognitive Load", "Reduction Agent"],
 ital: "CLR Agent",
 tag: "Google DeepMind × InstaLILY Hackathon · SF",
 status: "SHIPPED · TOP BUILD",
 blurb:
 "An ML research build: can a 270M-parameter model be the agent itself? Fine-tuned FunctionGemma with LoRA so the model, not an orchestrator, makes perceive→reason→act decisions on multimodal load signals. 8 hours, on-device, zero cloud.",
 bullets: [
 "Fine-tuned FunctionGemma 270M with LoRA on a hand-built signal-to-action dataset (webcam, keyboard/mouse, OS state)",
 "Single agentic loop: perceive → reason → act → observe → adapt, with persistent on-device memory",
 "The model is the brain, no rules engine, no cloud calls, no external policy layer",
 "Synchronized multimodal feature extraction: MediaPipe frames, keyboard/mouse events, OS state polling",
 "Privacy-sensitive by construction, viable for healthcare and professional environments",
 ],
 stack: ["Python", "FunctionGemma 270M", "LoRA", "MediaPipe", "PyTorch"],
 metrics: [
 { k: "model size", v: "270M", bar: 0.27 },
 { k: "fine-tune", v: "LoRA", bar: 0.85 },
 { k: "cloud calls", v: "0", bar: 0, ital: true },
 ],
 role: "ML research · LoRA fine-tune",
 details: "8h hackathon at the Google DeepMind × InstaLILY SF event. The bet: instead of orchestrating a large model with rules, fine-tune a small one to BE the agent. LoRA on FunctionGemma 270M, a custom multimodal signal-to-action dataset, one tight perceive→reason→act→observe→adapt loop, persistent on-device memory. Selected as a Top Build.",
 imgs: ["cover.jpg", "screen-1.jpg"],
 repo: "https://github.com/arshia-shaik/Instanova",
 },
 {
 n: "P-04", year: "2026",
 folder: "p-04-freezeframe",
 title: ["FreezeFrame", "Sports Moment Reconstruction"],
 ital: "Sports Reconstruction",
 tag: "GLITCH@UCLA · Google DeepMind Gemini Hackathon",
 status: "SHIPPED · 24h",
 blurb:
 "Describe a sports moment in plain words, 'the counter where the 9 drags the center-back wide', and FreezeFrame finds it, freezes it, and reconstructs it as an interactive 3D moment you can orbit.",
 bullets: [
 "Built in 24h alongside 300+ builders",
 "Powered by Nano Banana Pro + Gemini",
 "Natural-language → frame retrieval → 3D scene reconstruction → orbit camera",
 ],
 stack: ["Gemini", "Nano Banana Pro", "Computer Vision", "3D Reconstruction"],
 metrics: [
 { k: "build time", v: "24h", bar: 0.5 },
 { k: "builders", v: "300+", bar: 0.9 },
 { k: "input", v: "natural lang", bar: 0.85, ital: true },
 ],
 role: "CV · 3D Reconstruction",
 details: "24h with Gemini and Nano Banana Pro. Took natural-language descriptions of sports moments ('the counter where the 9 drags the centre-back wide'), retrieved the matching frame, and reconstructed it as a 3D scene you can orbit.",
 imgs: ["cover.jpg"],
 repo: "https://github.com/adityasingh2400/FreezeFrame",
 },
 {
 n: "P-05", year: "2025",
 folder: "p-05-tofu",
 title: ["TOFU Unlearning", "Re-examined"],
 ital: "Re-examined",
 tag: "USC · Research · CSCI 699",
 status: "COMPLETED",
 blurb:
 "Does Gradient Ascent fail at LLM unlearning because of the algorithm, or just bad hyperparameters? Two-orders-of-magnitude learning-rate sweep on Phi-1.5 + TOFU benchmark.",
 bullets: [
 "Fine-tuned Phi-1.5 on 4,000 QA pairs, then applied Gradient Ascent unlearning",
 "Higher LR → catastrophic degradation on both forget AND retain sets",
 "Confirms entangled LLM representations are the core barrier, tuning alone can't fix selective unlearning",
 ],
 stack: ["Phi-1.5", "TOFU Benchmark", "Gradient Ascent", "PyTorch"],
 metrics: [
 { k: "LR sweep", v: "100×", bar: 0.85 },
 { k: "QA pairs", v: "4,000", bar: 0.7 },
 { k: "verdict", v: "structural", bar: 0.9, ital: true },
 ],
 role: "Research · Solo",
 details: "A graduate research project asking whether Gradient Ascent fails LLM unlearning structurally or just from bad hyperparameters. Two-orders-of-magnitude LR sweep on Phi-1.5 + TOFU. Higher LR degraded both forget and retain sets, pointing to representation entanglement as the real barrier.",
 imgs: ["cover.png", "screen-1.png", "screen-2.png"],
 paper: "tofu-paper.pdf",
 },
 {
 n: "P-06", year: "2025",
 folder: "p-06-alzi",
 title: ["Alzi", "Alzheimer's Companion"],
 ital: "Alzi",
 tag: "UC Berkeley AI Hackathon",
 status: "SHIPPED",
 blurb:
 "Full-stack mobile AI app helping Alzheimer's patients maintain independence, real-time memory recall, familiar-voice interaction, daily routine support, plus a complete caregiver dashboard.",
 bullets: [
 "Fine-tuned Gemini Pro + InsightFace + LMNT voice clones of family voices",
 "Caregiver dashboard with geofenced alerts, SOS triggers, Google Calendar integration",
 "Demo-ready full-stack app in a hackathon timeframe",
 ],
 stack: ["Flutter", "Gemini Pro", "Firebase", "InsightFace", "LMNT", "Flask"],
 metrics: [
 { k: "voice cloning", v: "LMNT", bar: 0.85 },
 { k: "geofence SOS", v: "✓", bar: 0.9 },
 { k: "users", v: "patients + caregivers", bar: 0.7, ital: true },
 ],
 role: "Full-stack · Voice + Vision",
 details: "Built at the UC Berkeley AI Hackathon for Alzheimer's patients and their caregivers. Family voice clones, face-recognition memory recall, Google Calendar routines, geofenced SOS alerts. The kind of product where the AI has to be invisible.",
 imgs: ["cover.jpg"],
 repo: "https://github.com/arshia-shaik/Alzi",
 },
 {
 n: "P-07", year: "2025",
 folder: "p-07-clinical-bias",
 title: ["Bias Detection in", "Clinical LLMs"],
 ital: "Clinical LLMs",
 tag: "USC · Healthcare AI Research",
 status: "COMPLETED",
 blurb:
 "Fine-tuned BioGPT and ClinicalBERT on 40K+ MIMIC-III clinical records, then systematically audited and fixed demographic bias.",
 bullets: [
 "Fairness measured across 5 demographic groups (Equalized Odds + demographic parity)",
 "−50% disparity via Fairlearn ThresholdOptimizer + counterfactual augmentation",
 "Reproducible pipeline applicable to any clinical AI in production",
 ],
 stack: ["PyTorch", "BioGPT", "ClinicalBERT", "Fairlearn", "MIMIC-III", "HuggingFace"],
 metrics: [
 { k: "records", v: "40K+", bar: 0.8 },
 { k: "EO disparity", v: "−50%", bar: 0.5, ital: true },
 { k: "groups", v: "5", bar: 0.6 },
 ],
 role: "ML · Healthcare AI",
 details: "Audited two clinical LLMs, BioGPT and ClinicalBERT, across 5 demographic groups on 40K+ MIMIC-III records. Used Fairlearn ThresholdOptimizer + counterfactual augmentation to cut Equalized Odds disparity by ~50%, all reproducible end-to-end.",
 imgs: [],
 repo: "https://github.com/arshia-shaik/LLM-Bias-Detection",
 },
 {
 n: "P-08", year: "2025",
 folder: "p-08-music-genre",
 title: ["Music Genre", "Transformer"],
 ital: "Transformer",
 tag: "USC · Generative AI · Audio",
 status: "COMPLETED",
 blurb:
 "Benchmarked 5 deep-learning architectures for audio genre transfer on GTZAN, Transformer, CycleGAN, StarGAN, VAE, MusicGen.",
 bullets: [
 "Prompt-conditioned MusicGen achieved best genre accuracy",
 "Real-time Gradio interface for live audio genre swap",
 "Reproducible baseline for audio GenAI research",
 ],
 stack: ["PyTorch", "CycleGAN", "StarGAN", "MusicGen", "Gradio", "GTZAN"],
 metrics: [
 { k: "models tested", v: "5", bar: 0.7 },
 { k: "winner", v: "MusicGen", bar: 0.95, ital: true },
 { k: "interface", v: "Gradio", bar: 0.6 },
 ],
 role: "Audio AI · Benchmark",
 details: "Compared 5 architectures (Transformer, CycleGAN, StarGAN, VAE, MusicGen) for genre transfer on GTZAN. Prompt-conditioned MusicGen won, and shipped a Gradio interface for live audio genre swap.",
 imgs: ["cover.png"],
 repo: "https://github.com/arshia-shaik/Music-Genre-Transformation",
 },

 /* ─── FUN / SIDE PROJECT (rendered under its own divider) ─── */
 {
   n: "P-09", year: "2026",
   folder: "p-09-batcrazy",
   kind: "fun",
   title: ["BatCrazy", "Aerial Action Game"],
   ital: "Aerial Action Game",
   tag: "USC · CSCI 526 · Team SNACKD",
   status: "PLAYABLE · GOLD BUILD",
   blurb:
     "A 3D aerial action game built in Unity. Fly a bat through a near-dark forest using echolocation. Find targets, dive on them with a slow-motion projectile mechanic, finish the level before sunrise.",
   bullets: [
     "Built the Hunter AI: humans that detect, pursue, and retaliate against the player",
     "Designed reactive child characters that panic and scatter when attacks miss nearby",
     "Implemented crowd panic-propagation across the Level 1 campfire environment",
     "Engineered the analytics pipeline: infection timestamps, attack success rate, and player time-state distribution across search / target / attack phases",
     "Co-designed 4 game metrics, validated across alpha → beta → gold playtests",
     "Team Captain for SNACKD: 5-person Unity team, 15-week build cycle, 5 public builds shipped (Alpha, Alpha Progress, Beta, Beta Survey, Gold)",
   ],
   stack: ["Unity", "C#", "Game AI", "Analytics", "GitHub Actions"],
   metrics: [
     { k: "team", v: "5" },
     { k: "builds", v: "5", ital: true },
     { k: "playable", v: "in browser" },
   ],
   role: "AI Expert · Team Captain",
   details: "CSCI 526 final project with team SNACKD. Limited-vision echolocation system meets a cinematic slow-motion attack camera. I owned the Hunter AI, the panicking-child behavior, and the analytics pipeline that drove iteration from Alpha → Beta → Gold. Five team members, five builds, fully playable in the browser today.",
   imgs: ["cover.png", "screen-1.png", "screen-2.png"],
   repo: "https://github.com/CSCI-526/main-project-team6_snackd",
   demo: "https://krishna-shetty.github.io/batshitcrazy-gold/",
   demoLabel: "play our game",
 },
];


/* ─── HACKATHONS, receipts ────────────────────────────────────────────────
   Each hackathon is rendered as a paper-receipt card.
     stamp     : big stamped status (e.g. "SHIPPED")
     no        : receipt number (display only)
     event     : the hackathon name
     date      : yyyy.mm
     project   : what you built (display string)
     projectId : (optional) maps to a project's `n` (P-01, P-02, ...). When set,
                 clicking the receipt navigates to that project on the wall.
     role      : your role on the team
     lines     : array of [label, value] pairs printed as receipt rows
   To add a new hackathon: copy any block, paste at the TOP, edit.
   ──────────────────────────────────────────────────────────────────────── */

window.PORTFOLIO = window.PORTFOLIO || {};

window.PORTFOLIO.hackathons = [
  {
    stamp: "SHIPPED",
    no: "0001-FUL",
    projectId: "P-01",
    event: "SoCal Claude Builder Club Hackathon",
    date: "2026.04",
    project: "FULL, Food Access Platform",
    role: "Team · AI + Frontend",
    lines: [
      ["selected", "from hundreds"],
      ["AI core", "Claude"],
      ["sponsors", "Anthropic · Fetch.ai · Afterquery"],
      ["target", "food insecurity"],
    ],
  },
  {
    stamp: "SHIPPED",
    no: "0002-LUK",
    projectId: "P-02",
    event: "Build4SC · USC",
    date: "2026.04",
    project: "Luke, ADHD Desktop Companion",
    role: "Team · Desktop AI",
    lines: [
      ["frontend", "Electron + React"],
      ["AI", "Claude · Whisper · 11Labs"],
      ["mode", "local-first"],
      ["target", "ADHD · students"],
    ],
  },
  {
    stamp: "SHIPPED",
    no: "0003-AGT",
    projectId: "P-03",
    event: "Google DeepMind × InstaLILY",
    date: "2026.02",
    project: "Cognitive Load Reduction Agent",
    role: "Team InstaNova",
    lines: [
      ["model", "FunctionGemma 270M"],
      ["fine-tune", "LoRA"],
      ["cloud calls", "ZERO"],
      ["window", "8h"],
    ],
  },
  {
    stamp: "SHIPPED",
    no: "0004-FRZ",
    projectId: "P-04",
    event: "GLITCH@UCLA · Gemini",
    date: "2026.03",
    project: "FreezeFrame",
    role: "Team · Computer Vision",
    lines: [
      ["AI", "Gemini · Nano Banana Pro"],
      ["builders", "300+"],
      ["window", "24h"],
      ["domain", "sports analytics"],
    ],
  },
  {
    stamp: "SHIPPED",
    no: "0005-ALZ",
    projectId: "P-06",
    event: "UC Berkeley AI Hackathon",
    date: "2025.06",
    project: "Alzi · Alzheimer's Companion",
    role: "Full-stack · LLM + Voice",
    lines: [
      ["LLM", "Gemini Pro fine-tune"],
      ["voice", "LMNT clones"],
      ["face recog", "InsightFace"],
      ["geofence SOS", "✓"],
    ],
  },
];

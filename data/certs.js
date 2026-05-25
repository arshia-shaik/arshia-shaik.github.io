/* ─── CERTIFICATIONS, real-badge grid ─────────────────────────────────────
   Each cert:
     code   : internal ID (used as React key)
     name   : full cert name
     org    : issuing org
     date   : when earned
     color  : fallback color scheme when no image: aws | gcp | azure | dm
     letter : fallback glyph when no image
     image  : local badge image path (assets/certs/<file>). When set, shows
              the real badge instead of the styled hex.
     url    : verification link (Credly, Certopus). Makes the whole card
              clickable with a "verify →" CTA. Leave as "" to disable.
   To add: paste a new entry. Drop the badge image into assets/certs/.
   ──────────────────────────────────────────────────────────────────────── */

window.PORTFOLIO = window.PORTFOLIO || {};

window.PORTFOLIO.certs = [
  {
    code: "AWS-SAA",
    name: "AWS Certified Solutions Architect, Associate",
    org: "Amazon Web Services",
    date: "Oct 2022",
    color: "aws",
    letter: "S",
    image: "assets/certs/aws-saa.png",
    url: "https://www.credly.com/earner/earned/badge/4f45bffd-9ae5-4462-980f-594e27712919",
  },
  {
    code: "AWS-CCP",
    name: "AWS Certified Cloud Practitioner",
    org: "Amazon Web Services",
    date: "Nov 2020",
    color: "aws",
    letter: "P",
    image: "assets/certs/aws-ccp.png",
    url: "https://www.credly.com/earner/earned/badge/27c1264f-6243-4792-b46f-c34b5f503570",
  },
  {
    code: "GCP-ACE",
    name: "Google Cloud Associate Cloud Engineer",
    org: "Google Cloud",
    date: "Oct 2021",
    color: "gcp",
    letter: "G",
    image: "assets/certs/gcp-ace.png",
    url: "https://www.credly.com/earner/earned/badge/f8ac07bf-8aa7-4556-ab8d-b5bf9609e879",
  },
  {
    code: "AZ-AI",
    name: "Microsoft Azure AI Fundamentals",
    org: "Microsoft",
    date: "Oct 2022",
    color: "azure",
    letter: "A",
    image: "assets/certs/az-ai.png",
    url: "https://www.credly.com/earner/earned/badge/b3704149-f816-4369-963a-bbb6e158bcfa",
  },
  {
    code: "AZ-FUND",
    name: "Microsoft Azure Fundamentals",
    org: "Microsoft",
    date: "May 2021",
    color: "azure",
    letter: "F",
    image: "assets/certs/az-fund.png",
    url: "https://www.credly.com/earner/earned/badge/934a9c68-63b4-4277-b973-b45e751c124c",
  },
  {
    code: "DM-INSTA",
    name: "Google DeepMind × InstaLILY AI Hackathon",
    org: "InstaLILY AI",
    date: "Mar 2026",
    color: "dm",
    letter: "✦",
    image: "assets/certs/dm-insta.jpg",
    url: "https://certopus.com/c/254c462d3b9743ba8acfdf86c32b405c",
  },
];

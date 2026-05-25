/* ─── EXPERIENCE, paid roles / internships ────────────────────────────────
   Newest first. Each entry has:
     slug    : unique short ID (used as React key)
     role    : title
     org     : company / department name
     loc     : city, country
     mode    : internship · full-time · remote etc.
     ts/end  : start / end (use "PRESENT" for active roles)
     class   : short uppercase tag shown on the card header
     tier    : "ACTIVE" or "COMPLETED" (controls dot pulse)
     brief   : one-sentence summary in serif italic
     bullets : array of accomplishment lines
     stack   : array of tech tags shown at the bottom
     metrics : array of {k,v} stats shown in the "moved the needle" block
     logo    : (optional) path to org logo (e.g. "assets/orgs/usc.png")
                renders a small mark next to the org name on the card
   To add a new role: copy any block, paste at the TOP of the array, edit.
   ──────────────────────────────────────────────────────────────────────── */

window.PORTFOLIO = window.PORTFOLIO || {};

window.PORTFOLIO.experiences = [
 {
 slug: "USC-VITERBI-25",
 role: "Graduate Research Assistant",
 org: "USC Viterbi · School of Engineering",
 loc: "Los Angeles, CA",
 mode: "On-site · 5 mos",
 ts: "2025.01", end: "2025.05",
 class: "RESEARCH · COMPUTER VISION",
 tier: "COMPLETED",
 brief: "Deep learning research on automated diabetic retinopathy detection from retinal fundus images, direct clinical impact.",
 bullets: [
 "Designed CNN classification pipelines with histogram equalization, green-channel filtering, denoising",
 "Achieved 81% detection accuracy on retinal fundus datasets, reproducible benchmark",
 "Applied CV to a high-stakes medical imaging problem",
 ],
 stack: ["Python", "PyTorch", "OpenCV", "CNNs", "Transfer Learning"],
 metrics: [{ k: "accuracy", v: "81%" }],
 logo: "assets/orgs/usc.png",
 },
 {
 slug: "TECHM-22",
 role: "SDE Intern",
 org: "Tech Mahindra",
 loc: "Pune, India · Remote",
 mode: "Internship · 3 mos",
 ts: "2022.07", end: "2022.09",
 class: "BACKEND · CLOUD",
 tier: "COMPLETED",
 brief: "Engineered a full-stack web app on Spring Boot + AWS S3 with caching strategies and ML-driven anomaly detection.",
 bullets: [
 "Engineered REST APIs with optimized caching → +25% data retrieval efficiency",
 "Designed SQL schema handling 10K+ daily transactions; indexing + normalization → +40% query performance under production load",
 "Built an intelligent data orchestration framework synchronizing real-time writes across AWS S3 and SQL, with ML-driven validation to flag anomalies during ingestion",
 ],
 stack: ["Java", "Spring Boot", "AWS S3", "SQL", "REST"],
 metrics: [
 { k: "cache speed", v: "+25%" },
 { k: "query perf", v: "+40%" },
 { k: "daily tx", v: "10K+" },
 ],
 logo: "assets/orgs/techm.png",
 },
 {
 slug: "MLP-22",
 role: "Cloud Intern",
 org: "MyLearning Plus Pvt Ltd",
 loc: "Hyderabad, India",
 mode: "Internship · 2 mos",
 ts: "2022.04", end: "2022.05",
 class: "CLOUD · MIGRATION",
 tier: "COMPLETED",
 brief: "Led end-to-end GCP→AWS migration of the Rizee SaaS platform serving 5,000+ daily users.",
 bullets: [
 "Owned end-to-end GCP→AWS re-architecture using EC2, S3, RDS Multi-AZ + CloudWatch; resource optimization → −30% operational cost",
 "Deployed ML inference pipelines on AWS Lambda + SageMaker → −45% prediction latency for real-time serving at production scale",
 "Configured CloudWatch dashboards + alerting pipelines for high availability and rapid incident response",
 ],
 stack: ["AWS", "GCP", "EC2", "RDS", "Lambda", "SageMaker", "CloudWatch"],
 metrics: [
 { k: "ops cost", v: "−30%" },
 { k: "latency", v: "−45%" },
 { k: "daily users", v: "5K+" },
 ],
 logo: "assets/orgs/rizee.png",
 },
 {
 slug: "DRDO-21",
 role: "Research Intern",
 org: "DRDL · DRDO",
 loc: "Hyderabad, India",
 mode: "Internship · 3 mos",
 ts: "2021.07", end: "2021.09",
 class: "DEFENCE · RESEARCH",
 tier: "COMPLETED",
 brief: "Defence Research Lab, radar AI + Kalman filtering for airborne object classification.",
 bullets: [
 "Architected a radar data fusion pipeline using Python + Kalman filtering to resolve duplicate object detections across overlapping radar coverage, ensuring single-source tracking for surveillance systems",
 "Conducted research on AI classification models for identifying airborne object types from radar telemetry data in national defence contexts",
 ],
 stack: ["Python", "Kalman Filter", "Radar DSP", "ML Classification"],
 },
];

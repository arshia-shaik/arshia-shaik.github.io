/* ─── WRITING, Medium articles + future blog posts ────────────────────────
 `articles` is the live list. Each article:
 title , article title
 sub , (optional) subtitle / tagline
 url , link out (Medium or your blog)
 tag , short topic tag (e.g. "Cloud · Certification")
 date , year or "Jan 2026"
 read , display string (e.g. "6 min read")
 excerpt, 1–2 sentence preview shown on the card
 `upcoming` is a small list of drafts shown at the bottom (text only).
 To add a new article: copy any block, paste at the TOP of `articles`, edit.
 ──────────────────────────────────────────────────────────────────────── */

window.PORTFOLIO = window.PORTFOLIO || {};

window.PORTFOLIO.writing = {
 handle: "@arshiamubiasshaik",
 url: "https://medium.com/@arshiamubiasshaik",
 blurb: "Long-form notes on grad school, internships, cloud, and what I'm picking up along the way. New posts as I write them, say hi if any of it lands.",
 articles: [
 {
 title: "My Biggest Internship Lessons as an International Master's Student",
 url: "https://medium.com/@arshiamubiasshaik/my-biggest-internship-lessons-as-an-international-masters-student-6a4b9bc266c6",
 tag: "Grad School · Career",
 date: "2026",
 read: "6 min read",
 excerpt: "What I wish someone had told me about hunting US internships as an international student, the timing, the visa friction, the moments that mattered, and the mistakes I want to spare the next cohort.",
 },
 {
 title: "Cloud Certifications Unlocked",
 sub: "The Key to Soaring High in the Clouds",
 url: "https://medium.com/@arshiamubiasshaik",
 tag: "Cloud · Certification",
 date: "2023",
 read: "5 min read",
 excerpt: "How I prepped for AWS, GCP, and Azure certs back-to-back during undergrad, what was worth memorizing, what was worth understanding, and which credentials actually move the needle with employers.",
 },
 ],
 upcoming: [
 "Notes on building the Cognitive Load Reduction Agent in 8 hours",
 "What I learned shipping 5 hackathons in 12 months",
 ],
};

/* ─── SKILLS, the stack ────────────────────────────────────────────────────
 Six clusters. Each cluster has:
 - depth (0..1), how confidently you'd ship something with it
 - recency (0..1), how recently you've used it
 - items , array of skill names rendered as stickers
 - hot , subset of items that highlight in lime ("currently using")
 To add a new skill: drop it into `items`. To mark it "hot": also add to `hot`.
 To add a new cluster: copy any block and rename the key.
 ──────────────────────────────────────────────────────────────────────── */

window.PORTFOLIO = window.PORTFOLIO || {};

window.PORTFOLIO.skills = {
 "LLMs & GenAI": {
 depth: 0.94, recency: 0.99,
 items: ["Agentic AI", "Fine-Tuning", "RAG", "LoRA / PEFT", "Prompt Eng.", "LangChain", "OpenAI API", "HuggingFace", "FunctionGemma", "Claude", "Gemini Pro"],
 hot: ["Agentic AI", "LoRA / PEFT", "Claude"],
 },
 "ML / Deep Learning": {
 depth: 0.9, recency: 0.92,
 items: ["PyTorch", "TensorFlow", "Keras", "Scikit-learn", "Fairlearn", "MediaPipe", "BioGPT", "ClinicalBERT", "OpenCV"],
 hot: ["PyTorch", "Fairlearn"],
 },
 "Programming": {
 depth: 0.88, recency: 0.95,
 items: ["Python", "JavaScript / TS", "Dart", "Java", "C#", ".NET", "SQL", "HTML / CSS"],
 hot: ["Python", "TypeScript"],
 },
 "Cloud & DevOps": {
 depth: 0.86, recency: 0.8,
 items: ["AWS", "Azure", "GCP", "Docker", "Kubernetes", "Lambda", "SageMaker", "CloudWatch", "EC2 / S3 / RDS", "CI/CD", "GitHub Actions", "GitLab"],
 hot: ["AWS", "Lambda"],
 },
 "Full-Stack & Mobile": {
 depth: 0.78, recency: 0.84,
 items: ["React", "Electron", "Flutter", "Unity", "Spring Boot", "Flask", "Firebase", "REST APIs", "Vite", "Tailwind", "Framer Motion"],
 hot: ["Electron", "Flutter"],
 },
 "Data": {
 depth: 0.8, recency: 0.78,
 items: ["SQL", "PostgreSQL", "MongoDB", "Pandas", "NumPy", "MIMIC-III", "GTZAN"],
 hot: ["SQL", "Pandas"],
 },
};

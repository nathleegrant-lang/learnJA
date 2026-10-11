# LearnJA 🇯🇲

LearnJA is Jamaica's first fully automated online school learning platform,
built for students in Grades 1–11. Primary lessons (Grades 1–6) are aligned to
the Ministry of Education, Youth & Information (MOEYI) curriculum. High school
lessons (Grades 7–11) cover the NSC curriculum and CSEC preparation.

## Features
- 📚 All core subjects — Mathematics, Language Arts, Science, Social Studies, 
  Religious Education, Arts & Music
- 🔊 Natural text-to-speech — every lesson narrated in a warm, natural voice
- 🌐 3D Interactive Explorer — human body, solar system, Jamaica's geography and more
- 🤖 AI-powered feedback — instant, encouraging, voiced feedback on every quiz
- 🎮 Gamified learning — stars, badges, certificates and leaderboards
- 📊 Automated parent reports — weekly progress updates via email or WhatsApp
- 📅 Adaptive task assignment — the AI assigns the right lesson at the right time

## Site structure
- `index.html`: LearnJA homepage (primary and high school pathways)
- `lesson-intro.html`, `lesson.html`: primary fractions lessons with Miss Johnson
- `high-school/`: high school library for Grades 7–11
  - `index.html`: hub (grade → subject → term → lesson)
  - `catalog.js`: list of high school lessons; edit to add lessons
  - `assets/`: shared lesson engine and styles
  - `lessons/`: one HTML file per lesson; copy `_TEMPLATE.html` to start a new one

## Ownership
LearnJA is a product of Shazonique's Inspiration.

## Status
🚧 Currently under active development.

# Abhishek Kumar — Portfolio Website

> Senior Data Engineer · Azure · Databricks · PySpark · Gen-AI

A premium, Broadway-inspired dark portfolio with cinematic animations, 3D floating profile card, glassmorphism cards, and real brand logos.

---

## 🚀 Quick Start — Run Locally

### Option 1: Python (Easiest)
```bash
cd portfolio
python3 -m http.server 3000
```
Open → **http://localhost:3000**

### Option 2: Node.js / npx
```bash
cd portfolio
npx serve .
```

### Option 3: VS Code Live Server
Install the **Live Server** extension, right-click `index.html` → **Open with Live Server**.

---

## 🌐 Host on GitHub Pages (Free)

1. **Create a new repository** on GitHub  
   - Recommended name: `abhishek.github.io` (for `username.github.io` URL)

2. **Upload all files** preserving the folder structure:
   ```
   index.html
   css/style.css
   js/main.js
   images/
   README.md
   ```

3. Go to your repo → **Settings** → **Pages**  
   → Source: **Deploy from a branch**  
   → Branch: `main` → Folder: `/ (root)`  
   → Click **Save**

4. Your site is live at:  
   `https://YOUR-USERNAME.github.io/YOUR-REPO-NAME`

> ⏱ GitHub Pages usually takes 1–3 minutes to deploy after first push.

---

## 📁 Folder Structure

```
portfolio/
│
├── index.html              ← Main HTML (all sections)
│
├── css/
│   └── style.css           ← All styles (Broadway dark theme)
│
├── js/
│   └── main.js             ← Cursor, 3D tilt, animations, counters
│
├── images/
│   ├── profile.jpg         ← Your circular profile photo
│   │
│   │   ── Uploaded logos (your exact images) ──
│   ├── delta_lake.png      ← Delta Lake logo
│   ├── adls.png            ← ADLS Gen2 logo
│   ├── synapse.png         ← Azure Synapse logo
│   ├── databricks_dab.png  ← Databricks Asset Bundles logo
│   └── unity_catalog.png   ← Unity Catalog logo
│
└── README.md               ← This file
```

---

## ✨ Features

| Feature | Detail |
|---|---|
| 🎨 Design | Broadway-inspired dark cinematic theme |
| 🌈 Background | Animated gradient mesh + 4 floating blobs |
| 🃏 Profile Card | 3D floating card with mouse-tilt interaction |
| 📸 Photo | Perfect circle with spinning gradient ring |
| 🏷️ Real Logos | `cdn.simpleicons.org` — official brand SVGs (Python, Azure, Databricks, PostgreSQL, AWS, n8n, Spark, etc.) |
| 🖼️ Custom Logos | Your uploaded images for Delta Lake, ADLS, Synapse, DAB, Unity Catalog |
| 🤖 AI Skills | Custom SVG icons for RAG, LLM, Gen-AI, Vector DB |
| ✨ Animations | Staggered scroll-reveal, skill bar fill, stat counters |
| 🖱️ Cursor | Custom animated cursor + ring |
| 📱 Responsive | Mobile hamburger menu, fully responsive |
| 🔗 All Links | CV, GitHub, LinkedIn, YouTube everywhere |

---

## 🔧 Customization

### Update your info
Edit `index.html` — search for these and replace:
- `codecomet.query@gmail.com` → your email
- `abhishek0709` → your LinkedIn handle
- `abhishek-dataengineer` → your GitHub username
- `abkumar-yt` → your YouTube handle
- CV link: `1hCOZ-ZTKW2dgf6UnFIcG-d1BlJ14p9wx` → your Google Drive file ID

### Change colors
Edit `css/style.css` — update `:root` CSS variables:
```css
:root {
  --cyan:   #00efc6;   /* Primary accent */
  --blue:   #3d7aff;   /* Secondary accent */
  --purple: #8b5cf6;   /* Tertiary */
  --pink:   #f43f8e;   /* Highlight */
}
```

---

## 📦 Dependencies

All dependencies are loaded from CDN (no npm/build required):
- **Google Fonts** — Outfit + JetBrains Mono
- **Simple Icons CDN** — `cdn.simpleicons.org` for brand logos

The site is **100% vanilla HTML/CSS/JS** — no frameworks, no build step.

---

*Built with ♥ for Abhishek Kumar · Senior Data Engineer · Bengaluru 🇮🇳*

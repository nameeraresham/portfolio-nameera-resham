# Nameera Resham – Textile Designer & AI/Data Science Specialist Portfolio

A modern, high-performance portfolio website showcasing the textile design, weaving explorations, embroidery/beadwork craftsmanship, handmade watercolour artworks, and the final year thesis exhibition collection ("Currency & Banknote Inspired Textile Collection") for **Nameera Resham**.

---

## 📁 Clean Project Structure

```
├── index.html                   # Website entry point
├── package.json                 # Project configuration and dependencies
├── vite.config.ts               # Vite build tool configuration
├── tsconfig.json                # TypeScript validation configuration
├── vercel.json                  # Production Vercel deployment settings
├── metadata.json                # AI Studio application metadata
├── public/                      # Static production assets
│   ├── style.css                # Global portfolio stylesheet
│   ├── thesis.css               # Dedicated thesis case study stylesheet
│   ├── script.js                # Core portfolio interactivity & lightbox engine
│   ├── thesis.js                # Interactive thesis case study engine
│   ├── portfolioData.js         # Complete portfolio projects database
│   ├── assets/
│   │   └── images/              # SINGLE CENTRALIZED image directory
│   │       ├── 1design.jpeg ... 30design.jpeg
│   │       ├── 1Weaving.jpg ... 14Weaving.jpg
│   │       ├── 1Embroidery.jpg, 2Embroidery.jpg, 1Beadswork.jpg, 2Beadswork.jpg
│   │       ├── watercolor1.jpeg ... watercolor11.jpeg
│   │       ├── MOODBOARD.png
│   │       └── Display1.png ... Display17.png
│   └── nameera-resham-portfolio.zip # Complete downloadable archive
```

---

## 🚀 Running Locally

### Prerequisites
- Node.js (v18 or higher recommended)
- npm, yarn, or pnpm

### Commands

1. **Install Dependencies:**
   ```bash
   npm install
   ```

2. **Start Development Server:**
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your web browser.

3. **Build for Production:**
   ```bash
   npm run build
   ```
   The compiled output is generated in the `dist/` directory.

4. **Preview Production Build:**
   ```bash
   npm run preview
   ```

---

## 🌐 Deploying to Vercel

You can deploy this repository directly to Vercel in less than 2 minutes:

### Option A: Via Vercel Dashboard (Recommended)
1. Push this repository to **GitHub**, **GitLab**, or **Bitbucket**.
2. Go to [vercel.com](https://vercel.com/) and click **"Add New Project"**.
3. Import your portfolio repository.
4. Vercel will automatically detect **Vite** via `vercel.json` and `package.json`.
5. Verify the settings:
   - **Framework Preset**: Vite
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
   - **Install Command**: `npm install`
6. Click **"Deploy"**. Your portfolio website will be live with a free SSL certificate!

### Option B: Via Vercel CLI
```bash
npm install -g vercel
vercel
```
Follow the prompts in your terminal. When asked for settings, accept the defaults configured in `vercel.json`.

---

## 🖼️ Missing Images Note
The following 4 photographs were not provided in the original project files:
- `15Weaving.jpg`
- `16Weaving.jpg`
- `17Weaving.jpg`
- `18Weaving.jpg`

Their portfolio cards and detailed specifications are fully preserved in `portfolioData.js` and render graceful placeholder cards until the original photos are placed in `public/assets/images/`.

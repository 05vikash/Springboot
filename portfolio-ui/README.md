# 🚀 Vikash Kumar Dubey — Portfolio

A modern, dark-themed developer portfolio built with **React + Vite**, showcasing backend engineering expertise in Java, Spring Boot, and scalable API architecture.

[![Live Demo](https://img.shields.io/badge/🌐_Live_Demo-Vercel-000?style=for-the-badge&logo=vercel)](https://dist-ctkoee17a-05vikashdubey-3477s-projects.vercel.app)
[![React](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react&logoColor=white)](https://react.dev)
[![Vite](https://img.shields.io/badge/Vite-5-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vite.dev)

---

## ✨ Features

- **Dark Minimal Theme** — Premium dark UI with glassmorphism, gradient accents, and smooth micro-animations
- **Fully Responsive** — Optimized for desktop, tablet, and mobile viewports
- **Bento Grid Layout** — Modern CSS Grid-based skills section inspired by Apple's bento design language
- **Component Architecture** — Clean, modular React components for easy customization
- **SEO Optimized** — Proper meta tags, semantic HTML, and heading hierarchy
- **Performance First** — Lightweight build (~65KB gzipped), no heavy dependencies
- **Custom SVG Icons** — Hand-crafted GitHub & LinkedIn icons (lucide-react for utility icons)

---

## 📸 Sections

| Section | Description |
|---------|-------------|
| **Navbar** | Sticky header with transparent-to-glass blur effect on scroll |
| **Hero** | Full-viewport intro with animated gradient blobs and CTA buttons |
| **Stats Bar** | Key metrics — CGPA, LeetCode, deployment speed, query optimization |
| **About** | Engineering philosophy with feature cards (Security, Data, Docker) |
| **Projects** | 3 project cards with tech tags, descriptions, and GitHub/live links |
| **Skills Bento** | CSS Grid bento box layout categorizing backend, architecture, and infra |
| **Footer/Contact** | CTA, email link, and social icons (LinkedIn, GitHub) |

---

## 🛠️ Tech Stack

| Category | Technology |
|----------|------------|
| **Framework** | React 19 |
| **Build Tool** | Vite 5 |
| **Styling** | Vanilla CSS (custom properties, glassmorphism, CSS Grid) |
| **Icons** | Lucide React + Custom SVGs |
| **Fonts** | Google Fonts — Inter (body) + Outfit (headings) |
| **Deployment** | Vercel |

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** ≥ 20.x
- **npm** ≥ 10.x

### Installation

```bash
# Clone the repository
git clone https://github.com/your-username/portfolio-ui.git
cd portfolio-ui

# Install dependencies
npm install

# Start development server
npm run dev
```

The app will be available at `http://localhost:5173/`

### Production Build

```bash
npm run build
```

The optimized output will be in the `dist/` directory.

---

## 📁 Project Structure

```
portfolio-ui/
├── public/                  # Static assets
├── src/
│   ├── components/
│   │   ├── AboutSection/    # About Me + feature cards
│   │   ├── FooterContact/   # Contact CTA + social links
│   │   ├── HeroSection/     # Hero with animated blobs
│   │   ├── Navbar/          # Sticky navigation bar
│   │   ├── ProjectsGrid/    # Project cards grid
│   │   ├── SkillsBentoBox/  # Bento grid skills layout
│   │   ├── StatsBar/        # Metrics display
│   │   └── Icons.jsx        # Custom GitHub & LinkedIn SVGs
│   ├── App.jsx              # Root component
│   ├── App.css
│   ├── index.css            # Global styles & design tokens
│   └── main.jsx             # Entry point
├── index.html               # HTML template with SEO meta
├── vite.config.js           # Vite configuration
└── package.json
```

---

## 🎨 Customization

### Update Personal Info

Edit the content directly in each component file:

- **Hero headline & subtitle** → `src/components/HeroSection/HeroSection.jsx`
- **About text** → `src/components/AboutSection/AboutSection.jsx`
- **Projects** → `src/components/ProjectsGrid/ProjectsGrid.jsx`
- **Skills** → `src/components/SkillsBentoBox/SkillsBentoBox.jsx`
- **Contact & socials** → `src/components/FooterContact/FooterContact.jsx`
- **Stats/metrics** → `src/components/StatsBar/StatsBar.jsx`

### Change Colors

All design tokens are in `src/index.css`:

```css
:root {
  --bg-primary: #0a0a0a;
  --accent-primary: #4e80ee;    /* Blue */
  --accent-secondary: #b634d9;  /* Purple */
  --accent-tertiary: #4fbf65;   /* Green */
}
```

---

## 📦 Deployment

### Vercel (Recommended)

```bash
npm run build
npx vercel deploy --prod ./dist
```

### Netlify

```bash
npm run build
# Drag & drop the dist/ folder at https://app.netlify.com/drop
```

### GitHub Pages

```bash
npm run build
# Push the dist/ folder to the gh-pages branch
```

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

## 👤 Author

**Vikash Kumar Dubey**

- 📧 Email: [05vikashdubey@gmail.com](mailto:05vikashdubey@gmail.com)
- 💼 LinkedIn: [linkedin.com/in/vikashdubey](https://linkedin.com)
- 🐙 GitHub: [github.com/05vikashdubey](https://github.com)

---

> *"Architecting robust REST APIs, optimizing databases, and engineering scalable enterprise systems."*

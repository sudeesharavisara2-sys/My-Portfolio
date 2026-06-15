<div align="center">

# Sudeesha Ravisara — Portfolio

**Personal portfolio website built with React, featuring smooth animations, an auto-playing project gallery, and a contact form powered by Web3Forms.**

[![Live Site](https://img.shields.io/badge/Live%20Site-sudeesharavisara.netlify.app-10b981?style=for-the-badge&logo=netlify&logoColor=white)](https://sudeesharavisara.netlify.app/)
[![React](https://img.shields.io/badge/React-18.2-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://reactjs.org/)
[![Netlify](https://img.shields.io/badge/Deployed%20on-Netlify-00C7B7?style=for-the-badge&logo=netlify)](https://sudeesharavisara.netlify.app/)

</div>

---

## 📌 Overview

A fully responsive single-page portfolio showcasing my projects, skills, and background as a Software Engineering undergraduate at NSBM Green University. The site is built from scratch in React with a custom CSS variable design system — no UI framework dependency.

Design theme: **Premium Black & Emerald Green** — dark backgrounds with emerald (`#10b981`) accents, Playfair Display serif headings, and DM Sans body text.

---

## ✨ Features

- **Typewriter hero** — Animated role cycling using a custom `useTypewriter` hook
- **FadeIn animations** — Scroll-triggered directional fade-ins (`bottom`, `left`, `right`) via `IntersectionObserver`
- **Animated skill bars** — Progress bars that animate in when scrolled into view (`useInView` hook)
- **Project slideshows** — Auto-playing image galleries with dot indicators for each project card
- **Custom cursor** — Gold dot cursor with blend-mode effect in the About section
- **Scroll-responsive navbar** — Transitions from transparent to frosted-glass backdrop on scroll
- **Web3Forms contact** — Functional contact form with client-side validation and status feedback
- **CV download** — Resume available directly from the hero section
- **Fully responsive** — Fluid grid/flex layout adapts cleanly to mobile viewports

---

## 🗂️ Project Structure

```
My-Portfolio/
└── portfolio/
    ├── package.json
    └── client/
        ├── public/
        │   ├── index.html
        │   ├── profile.PNG
        │   ├── Sudeesha-Resume.pdf
        │   └── projects/           # Project screenshot assets
        └── src/
            ├── App.jsx             # Root component, section orchestration
            ├── index.js
            ├── index.css           # Global CSS variables & resets
            ├── hooks/
            │   ├── useTypewriter.js
            │   └── useInView.js
            └── components/
                ├── Navbar.jsx
                ├── Hero.jsx
                ├── About.jsx
                ├── Skills.jsx
                ├── Projects.jsx
                ├── Experience.jsx
                ├── Contact.jsx
                ├── Footer.jsx
                ├── FadeIn.jsx
                └── SectionHeader.jsx
```

---

## 🧱 Tech Stack

| Layer | Technology |
|---|---|
| UI Framework | React 18.2 (Create React App) |
| Styling | Custom CSS Variables (no Tailwind / Bootstrap) |
| Fonts | Playfair Display · DM Sans |
| Contact API | Web3Forms |
| Deployment | Netlify |
| Animations | CSS transitions + IntersectionObserver |

---

## 🚀 Sections

| Section | Description |
|---|---|
| **Hero** | Name, typewriter roles, profile photo, CTA buttons |
| **About** | Personal summary, stats (projects, experience, technologies) |
| **Skills** | Languages · Frontend & Backend · Tools & Databases — with animated bars |
| **Projects** | 4 featured projects with auto-playing slideshows and GitHub links |
| **Experience** | Vertical timeline — education, certifications, work experience |
| **Contact** | Web3Forms-powered contact form |

---

## 💼 Featured Projects

| # | Project | Stack |
|---|---|---|
| 01 | **NextStep** — University Management System | React · Spring Boot · MySQL |
| 02 | **SpareHubLK** — Vehicle Parts E-Commerce | PHP · MySQL · JavaScript |
| 03 | **Student Hub Portal** | HTML5 · CSS3 · JavaScript |
| 04 | **University Management Module** | Java · SQL |

---

## 🛠️ Getting Started

### Prerequisites

- Node.js ≥ 16
- npm

### Local Development

```bash
# 1. Clone the repo
git clone https://github.com/sudeesharavisara2-sys/My-Portfolio.git
cd My-Portfolio/portfolio/client

# 2. Install dependencies
npm install

# 3. Start the dev server
npm start
```

The app will run at `http://localhost:3000`.

### Production Build

```bash
npm run build
```

Output goes to `client/build/` — deploy the contents of that folder to any static host.

---

## 🌐 Deployment

Deployed on **Netlify** with automatic builds from the `main` branch.

Live URL: [https://sudeesharavisara.netlify.app](https://sudeesharavisara.netlify.app)

---

## 📬 Contact

| | |
|---|---|
| **Email** | sudeesharavisara2@gmail.com |
| **LinkedIn** | [linkedin.com/in/sudeesha-ravisara-073741274](https://linkedin.com/in/sudeesha-ravisara) |
| **GitHub** | [github.com/sudeesharavisara2-sys](https://github.com/sudeesharavisara2-sys) |

---

<div align="center">
  <sub>Built with React · Deployed on Netlify</sub>
</div>

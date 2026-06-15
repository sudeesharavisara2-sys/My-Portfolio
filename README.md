<div align="center">

# 🌟 Sudeesha Ravisara — Personal Portfolio

A personal portfolio website built with **React**, showcasing my projects, skills, and experience as a Software Engineering undergraduate.

[![Live Site](https://img.shields.io/badge/Live%20Site-sudeesharavisara.netlify.app-10b981?style=for-the-badge&logo=netlify&logoColor=white)](https://sudeesharavisara.netlify.app/)
[![React](https://img.shields.io/badge/React-18.2-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://reactjs.org/)
[![Netlify](https://img.shields.io/badge/Deployed%20on-Netlify-00C7B7?style=for-the-badge&logo=netlify)](https://sudeesharavisara.netlify.app/)

</div>

---

## ✨ Features

- **Typewriter hero animation** — rotating role titles with a blinking cursor via a custom `useTypewriter` hook
- **Scroll-triggered fade-ins** — directional entrance animations (`bottom`, `left`, `right`) powered by a custom `useInView` hook and `IntersectionObserver`
- **Animated skill bars** — progress bars that animate in when scrolled into view
- **Auto-playing project slideshows** — image carousels with dot navigation indicators for each project card
- **Functional contact form** — powered by [Web3Forms](https://web3forms.com/) with client-side validation and live status feedback
- **CV download** — résumé available directly from the About section and Footer
- **Custom cursor** — emerald dot cursor with `mix-blend-mode: difference` effect in the About section
- **Scroll-responsive navbar** — transitions from transparent to frosted-glass backdrop on scroll
- **Fully responsive** — fluid grid/flex layout adapts cleanly across desktop, tablet, and mobile

---

## 🛠️ Tech Stack

| Layer | Technology |
|---|---|
| UI Framework | React 18.2 (Create React App) |
| Styling | Custom CSS Variables — no Tailwind / Bootstrap |
| Fonts | Playfair Display · DM Sans |
| Contact API | Web3Forms |
| Deployment | Netlify (static frontend) |
| Animations | CSS transitions + IntersectionObserver |

> ⚠️ **This is a purely static frontend project.** There is no Node.js/Express backend or Nodemailer integration. Contact form submissions are handled entirely through the Web3Forms API.


## 📁 Project Structure

```
My-Portfolio/
└── portfolio/
    ├── package.json
    └── client/                        # React frontend (all source code lives here)
        ├── public/
        │   ├── index.html
        │   ├── profile.PNG            # Hero profile photo
        │   ├── Sudeesha-Resume.pdf    # Downloadable résumé
        │   └── projects/             # Project screenshot assets
        └── src/
            ├── App.jsx               # Root component — assembles all sections
            ├── index.js
            ├── index.css             # Global CSS variables & resets
            ├── hooks/
            │   ├── useTypewriter.js  # Animated role cycling
            │   └── useInView.js      # IntersectionObserver scroll trigger
            └── components/
                ├── Navbar.jsx        # Fixed, scroll-responsive nav
                ├── Hero.jsx          # Profile, typewriter, CTA buttons
                ├── About.jsx         # Summary, stats, CV download, custom cursor
                ├── Skills.jsx        # Categorised skills with animated bars
                ├── Projects.jsx      # Project cards with auto-playing slideshows
                ├── Experience.jsx    # Vertical timeline
                ├── Contact.jsx       # Web3Forms contact form
                ├── Footer.jsx        # Social links + résumé link
                ├── FadeIn.jsx        # Reusable scroll-triggered animation wrapper
                └── SectionHeader.jsx # Consistent section label + title component
```

---

## 🧩 Sections

| Section | Description |
|---|---|
| **Hero** | Name, animated role titles, profile photo, View My Work & Get in Touch CTAs |
| **About** | Personal summary, stat highlights (2nd year · 3+ projects · 1+ yr experience · 10+ technologies), CV download button |
| **Skills** | Languages · Frontend & Backend · Tools & Databases — with animated progress bars |
| **Projects** | 4 featured projects with auto-playing image slideshows and GitHub links |
| **Experience & Education** | Vertical timeline — A/Levels → work experience → certifications → undergraduate |
| **Contact** | Web3Forms-powered email form with validation and status states |

---

## 💼 Featured Projects

| # | Project | Stack |
|---|---|---|
| 01 | **NextStep** — University Management Platform | React · Spring Boot · MySQL |
| 02 | **SpareHubLK** — Vehicle Parts E-Commerce | PHP · MySQL · JavaScript |
| 03 | **Student Hub Portal** | HTML5 · CSS3 · JavaScript |
| 04 | **University Management Module** | Java · SQL |

---

## ⚙️ Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) v16+
- npm

### Installation & Local Development

```bash
# 1. Clone the repository
git clone https://github.com/sudeesharavisara2-sys/My-Portfolio.git

# 2. Navigate to the client directory
cd My-Portfolio/portfolio/client

# 3. Install dependencies
npm install

# 4. Start the development server
npm start
```

App runs at **http://localhost:3000**

### Production Build

```bash
# Inside My-Portfolio/portfolio/client
npm run build
```

Output goes to `client/build/` — deploy the contents of that folder to any static host (Netlify, Vercel, GitHub Pages).

---

## 🌐 Deployment

Deployed on **Netlify** with automatic builds from the `main` branch.

🔗 Live URL: [https://sudeesharavisara.netlify.app](https://sudeesharavisara.netlify.app)

---

## 📬 Contact

**Sudeesha Ravisara**
- 📧 [sudeesharavisara2@gmail.com](mailto:sudeesharavisara2@gmail.com)
- 🔗 [LinkedIn](https://linkedin.com/in/sudeesha-ravisara-073741274)
- 🐙 [GitHub](https://github.com/sudeesharavisara2-sys)
- 📍 Sri Lanka

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

<div align="center">
  <sub>Built with React · Deployed on Netlify · © 2026 Sudeesha Ravisara</sub>
</div>

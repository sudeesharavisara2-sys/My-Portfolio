# 🌟 Sudeesha Ravisara — Personal Portfolio

A personal portfolio website built with **React** (frontend) and **Node.js / Express** (backend), showcasing my projects, skills, and experience as a Full-Stack Developer.

---



## ✨ Features

- **Typewriter hero animation** — rotating roles with a blinking cursor
- **Smooth fade-in animations** — scroll-triggered entrance effects using a custom `useInView` hook
- **Auto-playing project slideshows** — image carousels with navigation dots for each project
- **Functional contact form** — powered by Nodemailer via an Express backend
- **REST API backend** — serves portfolio data dynamically from a single source of truth
- **Fully responsive design** — optimized for desktop, tablet, and mobile
- **Dark theme** — elegant navy & gold color palette

---

## 🛠️ Tech Stack

| Layer     | Technology                          |
|-----------|--------------------------------------|
| Frontend  | React 18, CSS-in-JS                  |
| Backend   | Node.js, Express                     |
| Email     | Nodemailer                           |
| Dev Tools | Concurrently, Create React App       |

---

## 📁 Project Structure

```
My-Portfolio/
├── client/                  # React frontend
│   ├── public/              # Static assets (images, profile photo)
│   │   └── projects/        # Project screenshot images
│   └── src/
│       ├── components/      # UI components
│       │   ├── Hero.jsx
│       │   ├── About.jsx
│       │   ├── Skills.jsx
│       │   ├── Projects.jsx
│       │   ├── Experience.jsx
│       │   ├── Contact.jsx
│       │   ├── Navbar.jsx
│       │   ├── Footer.jsx
│       │   ├── FadeIn.jsx
│       │   └── SectionHeader.jsx
│       └── hooks/           # Custom React hooks
│           ├── useInView.js
│           └── useTypewriter.js
├── server/                  # Express backend
│   └── index.js             # API routes + Nodemailer contact handler
├── package.json             # Root scripts (runs both client & server)
└── README.md
```

---

## 🧩 Sections

- **Hero** — Name, animated role titles, and call-to-action buttons
- **About** — Background summary with stat highlights
- **Skills** — Categorized skills with animated progress bars
- **Projects** — Featured projects with auto-playing image slideshows
- **Experience & Education** — Timeline of work and academic background
- **Contact** — Email form that sends messages via Nodemailer

---

## ⚙️ Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) v16+
- npm

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/sudeesharavisara2-sys/My-Portfolio.git
cd My-Portfolio

# 2. Install all dependencies (root + client + server)
npm run install:all
```

### Running Locally

```bash
# Run both client and server concurrently
npm run dev
```

| Service  | URL                     |
|----------|-------------------------|
| Frontend | http://localhost:3000   |
| Backend  | http://localhost:5000   |

### Build for Production

```bash
cd client
npm run build
```

## 🗂️ Featured Projects

| # | Project | Tech Stack |
|---|---------|------------|
| 01 | **NextStep** — University Management Platform | React, Spring Boot, MySQL |
| 02 | **SpareHubLK** — Vehicle Parts E-Commerce | PHP, MySQL, JavaScript |
| 03 | **Student Hub Portal** | HTML5, CSS3, JavaScript |
| 04 | **University Management Module** | Java, SQL |

---

## 📬 Contact

**Sudeesha Ravisara**  
📧 sudeesharavisara2@gmail.com  
🔗 [LinkedIn](https://linkedin.com/in/sudeesha-ravisara-073741274)  
🐙 [GitHub](https://github.com/sudeesharavisara2-sys)  
📍 Nittambuwa, Sri Lanka

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

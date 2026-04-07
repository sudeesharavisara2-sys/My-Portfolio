# Sudeesha Ravisara — Portfolio

A personal portfolio website built with **React** (frontend) + **Node.js / Express** (backend).

## Project Structure

```
portfolio/
├── client/          # React frontend
│   ├── public/
│   └── src/
│       ├── components/
│       │   ├── Navbar.jsx
│       │   ├── Hero.jsx
│       │   ├── About.jsx
│       │   ├── Skills.jsx
│       │   ├── Projects.jsx
│       │   ├── Experience.jsx
│       │   ├── Contact.jsx
│       │   └── Footer.jsx
│       ├── App.jsx
│       ├── index.js
│       └── index.css
├── server/          # Node.js backend
│   ├── index.js
│   └── package.json
├── package.json     # Root scripts
└── README.md
```

## Quick Start

### 1. Install all dependencies
```bash
npm run install:all
```

### 2. Run both frontend & backend together
```bash
npm run dev
```

- React app → http://localhost:3000
- Node.js API → http://localhost:5000

## Customise Your Portfolio

All your personal data lives in **`server/index.js`** inside the `/api/portfolio` route.
Edit the following fields to make it yours:

| Field | Description |
|---|---|
| `name` | Your full name |
| `title` | Your role/title |
| `email` | Your contact email |
| `github` | Your GitHub profile URL |
| `linkedin` | Your LinkedIn profile URL |
| `about` | Your bio paragraph |
| `stats` | 4 stat cards (number + label) |
| `skills` | Skill categories with proficiency 0–100 |
| `projects` | Your projects (title, description, tags, github link) |
| `experience` | Education & work timeline |

## Enable Real Email (Contact Form)

In `server/index.js`, uncomment the nodemailer block and add your Gmail credentials:

```js
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: { user: 'your@gmail.com', pass: 'your-app-password' },
});
```

> Use a Gmail **App Password** (not your regular password).
> Generate one at: Google Account → Security → 2-Step Verification → App Passwords

## Deploy for Free

### Frontend (Vercel / Netlify)
```bash
cd client && npm run build
```
Upload the `build/` folder to [Netlify](https://netlify.com) or [Vercel](https://vercel.com).

### Backend (Railway / Render)
Push the `server/` folder to [Railway](https://railway.app) or [Render](https://render.com) — both have free tiers.

Update the React proxy in `client/package.json` to point to your deployed server URL.

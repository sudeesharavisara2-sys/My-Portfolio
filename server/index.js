const express = require("express");
const cors = require("cors");
const nodemailer = require("nodemailer");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors({ origin: "http://localhost:3000" }));
app.use(express.json());

// ── Health check ────────────────────────────────────────────────
app.get("/api/health", (req, res) => {
  res.json({ status: "ok", message: "Portfolio server is running" });
});

// ── Portfolio data ───────────────────────────────────────────────
app.get("/api/portfolio", (req, res) => {
  res.json({
    name: "Sudeesha Ravisara",
    title: "Second-year Undergraduate Software Engineering ",
    location: "Nittambuwa, Sri Lanka",
    email: "sudeesharavisara2@gmail.com",
    phone: "0729502816",
    github: "https://github.com/sudeesharavisara2-sys",
    linkedin: "https://linkedin.com/in/sudeesha-ravisara-073741274",
    about:
      "Second-year Software Engineering undergraduate at NSBM Green University seeking a Internship. Experienced in developing responsive web applications using Java, Spring Boot, and React with REST API integration and MySQL databases. Strong analytical thinking, debugging skills, and practical data-handling experience gained from a corporate environment.",
    stats: [
      { number: "2nd", label: "Year undergraduate" },
      { number: "3+", label: "Full-stack projects" },
      { number: "1+", label: "Year work experience" },
      { number: "10+", label: "Technologies learned" },
    ],
    skills: [
      {
        category: "Languages",
        items: [
          { name: "Java", level: 70 },
          { name: "JavaScript", level: 70},
          { name: "Python", level: 80 },
          { name: "PHP", level: 70 },
          { name: "SQL", level: 80 },
        ],
      },
      {
        category: "Frontend & Backend",
        items: [
          { name: "React", level: 75 },
          { name: "Spring Boot", level: 70 },
          { name: "HTML5 & CSS3", level: 85 },
          { name: "Bootstrap", level: 75 },
          { name: "REST API Development", level: 70 },
        ],
      },
      {
        category: "Tools & Databases",
        items: [
          { name: "MySQL", level: 80 },
          { name: "Git & GitHub", level: 75 },
          { name: "Postman", level: 75 },
          { name: "VS Code / IntelliJ", level: 80 },
          { name: "Microsoft Excel", level: 85 },
        ],
      },
    ],
    projects: [
      {
        number: "01",
        title: "Full-Stack Web Application",
        description:
          "Developed a responsive web application using React for the frontend and Spring Boot for the backend. Designed RESTful APIs for efficient client-server communication and implemented relational database schemas with CRUD operations in MySQL.",
        tags: ["React", "Spring Boot", "MySQL", "REST API"],
        github: "https://github.com/sudeesharavisara2-sys",
      },
      {
        number: "02",
        title: "REST API Development",
        description:
          "Designed and implemented robust REST APIs for client-server communication. Tested all endpoints using Postman, debugged application-level errors, and managed source code with Git for version control.",
        tags: ["Java", "Spring Boot", "Postman", "Git"],
        github: "https://github.com/sudeesharavisara2-sys",
      },
      {
        number: "03",
        title: "Database-Driven Application",
        description:
          "Created relational database schemas and performed CRUD operations using MySQL. Built a data-driven application with a focus on data accuracy, integrity, and reporting — skills reinforced by real-world payroll experience.",
        tags: ["MySQL", "Java", "CRUD", "Database Design"],
        github: "https://github.com/sudeesharavisara2-sys",
      },
    ],
    experience: [
      {
        period: "2025 — Present",
        role: "BSc (Hons) in Software Engineering",
        org: "NSBM Green University",
        description:
          "Second year undergraduate studying core software engineering subjects including algorithms, databases, software design, REST APIs, and full stack development. Applying academic knowledge through hands on web application projects.",
      },
      {
        period: "Mar 2024 — 2025",
        role: "Payroll Clerk",
        org: "DAMRO Group - Nittambuwa",
        description:
          "Processing employee payroll and attendance records with high data accuracy. Generating analytical reports using Excel and internal payroll systems. Assisting with recruitment, onboarding, and maintaining confidential employee records.",
      },
      {
        period: "Certification",
        role: "Python for Beginners",
        org: "University of Moratuwa & DP Education",
        description:
          "Completed a Python programming course covering fundamentals of programming, problem solving, and scripting strengthening the foundation for backend and data-related development work.",
      },
      {
        period: "2020 — 2022",
        role: "GCE Advanced Level — Mathematics Stream",
        org: "Secondary Education",
        description:
          "Studied Combined Mathematics (S), Physics (S), and ICT (C) — building strong analytical and logical thinking skills that underpin software engineering practice.",
      },
    ],
  });
});

// ── Contact form ─────────────────────────────────────────────────
app.post("/api/contact", async (req, res) => {
  const { name, email, subject, message } = req.body;

  if (!name || !email || !subject || !message) {
    return res.status(400).json({ error: "All fields are required." });
  }

  // Log the message (replace with real email config when ready)
  console.log("\n📩 New contact message received:");
  console.log(`   From:    ${name} <${email}>`);
  console.log(`   Subject: ${subject}`);
  console.log(`   Message: ${message}\n`);

  // ── To enable real email sending, uncomment and configure this: ──
  //
  // const transporter = nodemailer.createTransport({
  //   service: "gmail",
  //   auth: { user: "your@gmail.com", pass: "your-app-password" },
  // });
  // await transporter.sendMail({
  //   from: email,
  //   to: "sudeesha@email.com",
  //   subject: `Portfolio Contact: ${subject}`,
  //   text: `From: ${name}\nEmail: ${email}\n\n${message}`,
  // });

  res.json({ success: true, message: "Message received! I'll be in touch soon." });
});

app.listen(PORT, () => {
  console.log(`\n🚀 Portfolio server running at http://localhost:${PORT}`);
  console.log(`   Health: http://localhost:${PORT}/api/health`);
  console.log(`   Data:   http://localhost:${PORT}/api/portfolio\n`);
});

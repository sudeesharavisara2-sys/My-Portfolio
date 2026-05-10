const express = require("express");
const cors = require("cors");
const nodemailer = require("nodemailer");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors({ origin: "http://localhost:3000" }));
app.use(express.json());


// ── 1. Transporter──────────────────────────────
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'sudeesharavisara2@gmail.com', // gmail address
    pass: 'ntbfyyhqxpebulpm'   // Google App Password
  }
});

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
    resume: "/Sudeesha-Resume.pdf",
    about:
      "Second-year Software Engineering undergraduate at NSBM Green University seeking a Internship. Experienced in developing responsive web applications using Java, Spring Boot, and React with REST API integration and MySQL databases. Strong analytical thinking, debugging skills, and practical data-handling experience gained from a corporate environment.",
    stats: [
      { number: "2nd", label: "Year undergraduate" },
      { number: "4+", label: "Full-stack projects" },
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
        title: "NextStep - University Management",
        description: "A comprehensive student service platform developed for NSBM. It features a React-based frontend and Spring Boot backend, facilitating shuttle tracking, room bookings, and resource management.",
        tags: ["React", "Spring Boot", "MySQL", "State Management"],
        github: "https://github.com/sudeesharavisara2-sys/nextstep-frontend",
      },
      {
        number: "02",
        title: "SpareHubLK - Vehicle Parts E-Commerce",
        description: "A specialized e-commerce platform developed using PHP to bridge the gap between vehicle part suppliers and owners. Features a custom-built database schema to manage diverse inventory.",
        tags: ["PHP", "MySQL", "JavaScript", "E-Commerce"],
        github: "https://github.com/sudeesharavisara2-sys/sparehublk",
      },
      {
        number: "03",
        title: "Student Hub Portal",
        description: "An interactive web portal designed to centralize student activities and information. Built with a focus on responsive design and seamless navigation.",
        tags: ["HTML5", "CSS3", "JavaScript", "Responsive Design"],
        github: "https://github.com/sudeesharavisara2-sys/nsbm_student_hub",
      },
      {
        number: "04",
        title: "University Management Module",
        description: "A backend-focused project dealing with academic data structures and university workflow automation. Highlights experience in structuring relational databases.",
        tags: ["Java", "SQL", "Database Design", "Backend Development"],
        github: "https://github.com/sudeesharavisara2-sys/university",
      }
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
  // Destructure the form data from the request body
  const { name, email, subject, message } = req.body;

  // 1. Validation: Ensure all required fields are present
  if (!name || !email || !subject || !message) {
    return res.status(400).json({ error: "All fields are required." });
  }

  // 2. Email Configuration: Set up the email content and headers
  const mailOptions = {
    from: email,                      // The sender's email address from the form
    to: 'sudeesharavisara2@gmail.com', // The destination email address (my email)
    subject: `Portfolio Contact: ${subject}`,
    text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
  };

  try {
    // 3. Execution: Attempt to send the email using the transporter
    await transporter.sendMail(mailOptions);
    
    // Log success to the server console
    console.log("✅ Email sent successfully!");

    // Send a success response back to the React frontend
    res.json({ success: true, message: "Message sent! I'll be in touch soon." });
  } catch (error) {
    // 4. Error Handling: Log any failures (e.g., authentication issues, network errors)
    console.error("❌ Error sending email:", error);

    // Send a 500 Internal Server Error response to the client
    res.status(500).json({ success: false, error: "Failed to send email." });
  }
});

// ── Server Start ─────────────────────────────────────────────────
app.listen(PORT, () => {
  console.log(`✅ Server is running on port ${PORT}`);
});
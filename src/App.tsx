import { useState } from "react";
import {
  ArrowDownRight, ArrowRight, ArrowUpRight, Github, Linkedin, Mail,
  Menu, X, Download, Code2, Database, Layers3, Sparkles, ExternalLink,
  MapPin, BriefcaseBusiness, GraduationCap, Terminal, Workflow, Send
} from "lucide-react";

const skills = {
  Backend: ["Java", "Spring Boot", "Spring Security", "REST APIs", "Python", "Node.js"],
  Frontend: ["React", "TypeScript", "JavaScript", "Tailwind CSS", "HTML5", "CSS3"],
  Database: ["PostgreSQL", "MySQL", "MongoDB", "Prisma", "SQL"],
  Tools: ["Git & GitHub", "Docker", "Postman", "Linux", "CI/CD", "Agile"]
};

const projects = [
  {
    number: "01",
    name: "NexaOps AI",
    type: "AI-powered operations platform",
    description: "A workflow and project operations workspace with team collaboration, task visibility, analytics, and an AI-ready architecture.",
    stack: ["Java", "Spring Boot", "React", "TypeScript", "PostgreSQL", "Docker"],
    icon: Workflow,
    accent: "violet",
    href: "https://github.com/"
  },
  {
    number: "02",
    name: "Flowbit AI",
    type: "Analytics & chat with data",
    description: "An interactive invoice and vendor analytics experience with conversational data exploration and a full-stack service architecture.",
    stack: ["Next.js", "FastAPI", "PostgreSQL", "Prisma", "Docker"],
    icon: Database,
    accent: "cyan",
    href: "https://github.com/"
  },
  {
    number: "03",
    name: "Smart Internship Portal",
    type: "Full-stack recruitment platform",
    description: "A portal for discovering internships, submitting applications and resumes, and tracking application progress with role-based access.",
    stack: ["React", "Node.js", "Express", "MongoDB", "JWT"],
    icon: Layers3,
    accent: "blue",
    href: "https://github.com/vinodrathod123/Smart-Internship-Portal"
  }
];

function App() {
  const [activeSkill, setActiveSkill] = useState<keyof typeof skills>("Backend");
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="site-shell">
      <div className="ambient ambient-one" />
      <div className="ambient ambient-two" />
      <header className="topbar">
        <a className="brand" href="#home" onClick={closeMenu} aria-label="Vinod Rathod home">
          <span className="brand-mark">V<span>R</span></span>
          <span>Vinod Rathod</span>
        </a>
        <button className="mobile-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation">
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
        <nav className={menuOpen ? "nav-links nav-open" : "nav-links"}>
          {["About", "Skills", "Projects", "Experience", "Contact"].map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} onClick={closeMenu}>{item}</a>
          ))}
        </nav>
        <a className="button button-small button-primary resume-button" href="https://drive.google.com/file/d/1MvbzcIcZfYZiO1QefrKwU8R7FmROhicw/view?usp=share_link" download>
          Resume <Download size={15} />
        </a>
      </header>

      <main>
        <section className="hero section-wrap" id="home">
          <div className="hero-copy">
            <div className="availability"><span className="status-dot" /> OPEN TO SOFTWARE OPPORTUNITIES</div>
            <p className="eyebrow">JAVA · BACKEND · FULL STACK</p>
            <h1>Building software<br />that <span className="gradient-text">moves work forward.</span></h1>
            <p className="hero-description">
              I'm Vinod Rathod, a developer focused on Java, Spring Boot, and modern web technologies.
              I enjoy turning complex problems into reliable, thoughtful products.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="#projects">Explore my work <ArrowRight size={17} /></a>
              <a className="button button-ghost" href="#contact">Let's connect <ArrowUpRight size={16} /></a>
            </div>
            <div className="social-links">
              <a href="https://github.com/vinodrathod123" target="_blank" rel="noreferrer" aria-label="GitHub"><Github size={18} /></a>
              <a href="https://www.linkedin.com/in/vinod--rathod" target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin size={18} /></a>
              <a href="mailto:vinodrathod0992@gmail.com" aria-label="Email"><Mail size={18} /></a>
              <span className="social-note">Always learning. Always building.</span>
            </div>
          </div>
          <div className="hero-art" aria-label="Developer illustration">
            <div className="orbit orbit-a" /><div className="orbit orbit-b" />
            <div className="hero-glow" />
            <div className="code-window">
              <div className="window-top"><span /><span /><span /><small>developer.java</small></div>
              <div className="code-lines">
                <p><i>01</i> <b>public class</b> <strong>Developer</strong> {"{"}</p>
                <p><i>02</i> &nbsp; String focus = <em>"Backend"</em>;</p>
                <p><i>03</i> &nbsp; buildReliableSystems();</p>
                <p><i>04</i> &nbsp; keepLearning();</p>
                <p><i>05</i> {"}"}</p>
              </div>
            </div>
            <div className="floating-chip chip-java"><Terminal size={17} /> Java</div>
            <div className="floating-chip chip-api"><Code2 size={17} /> REST APIs</div>
            <div className="floating-chip chip-db"><Database size={17} /> SQL</div>
            <div className="hero-stamp"><Sparkles size={16} /> Curious by design</div>
            <div className="hero-bottom-label">DESIGN · BUILD · IMPROVE</div>
          </div>
          <a className="scroll-cue" href="#about"><span /> Scroll to explore <ArrowDownRight size={15} /></a>
        </section>

        <section className="metrics section-wrap" aria-label="Highlights">
          <div className="metric"><span className="metric-icon"><Code2 size={19} /></span><div><strong>Full-stack mindset</strong><small>From UI to APIs</small></div></div>
          <div className="metric"><span className="metric-icon"><Database size={19} /></span><div><strong>Data-driven systems</strong><small>SQL & clean data models</small></div></div>
          <div className="metric"><span className="metric-icon"><Workflow size={19} /></span><div><strong>Problem solver</strong><small>DSA & practical engineering</small></div></div>
          <div className="metric"><span className="metric-icon"><Sparkles size={19} /></span><div><strong>Growth mindset</strong><small>Learning by shipping</small></div></div>
        </section>

        <section className="content-grid section-wrap" id="about">
          <div className="about-panel">
            <div className="section-kicker">01 / ABOUT ME</div>
            <h2>Good software starts<br />with <span className="gradient-text">clear thinking.</span></h2>
            <p className="body-copy">
              I'm a B.Tech Information Technology graduate-in-progress with a foundation in object-oriented
              programming, backend development, databases, and web application engineering. I like understanding
              the why behind a problem, designing a simple solution, and improving it through feedback.
            </p>
            <div className="info-list">
              <div><MapPin size={17} /><span><small>Based in</small><strong>Pune, India</strong></span></div>
              <div><GraduationCap size={17} /><span><small>Education</small><strong>B.Tech, Information Technology</strong></span></div>
              <div><BriefcaseBusiness size={17} /><span><small>Looking for</small><strong>Entry-level Software Engineer roles</strong></span></div>
              <div><Mail size={17} /><span><small>Contact</small><strong>vinodrathod0992@gmail.com</strong><strong>9834011006</strong></span></div>
            </div>
          </div>

          <div className="skills-panel" id="skills">
            <div className="section-kicker">02 / TOOLKIT</div>
            <div className="section-heading-row"><h2>Skills & technologies</h2><span className="tiny-label">CONTINUOUSLY LEARNING</span></div>
            <div className="skill-tabs" role="tablist" aria-label="Skill category">
              {(Object.keys(skills) as Array<keyof typeof skills>).map((key) => (
                <button key={key} role="tab" aria-selected={activeSkill === key} className={activeSkill === key ? "skill-tab active" : "skill-tab"} onClick={() => setActiveSkill(key)}>{key}</button>
              ))}
            </div>
            <div className="skill-grid">
              {skills[activeSkill].map((skill, i) => <div className="skill-tile" key={skill}><span className={`skill-symbol symbol-${i % 4}`}>{skill.slice(0, 2).toUpperCase()}</span><strong>{skill}</strong></div>)}
            </div>
            <div className="learning-note"><span><Sparkles size={16} /></span><p><strong>Engineering principle</strong><br />Readable code, thoughtful APIs, secure defaults, and tests that protect behavior.</p></div>
          </div>
        </section>

        <section className="projects-section section-wrap" id="projects">
          <div className="section-kicker">03 / SELECTED WORK</div>
          <div className="section-heading-row projects-heading"><div><h2>Projects with a purpose.</h2><p className="body-copy">A few things I've worked on, and the engineering ideas behind them.</p></div><a className="text-link" href="https://github.com/" target="_blank" rel="noreferrer">GitHub profile <ArrowUpRight size={16} /></a></div>
          <div className="project-grid">
            {projects.map((project) => {
              const Icon = project.icon;
              return <article className={`project-card accent-${project.accent}`} key={project.name}>
                <div className="project-card-top"><span className="project-number">{project.number} / CASE STUDY</span><a href={project.href} target="_blank" rel="noreferrer" aria-label={`Open ${project.name} repository`}><ExternalLink size={17} /></a></div>
                <div className="project-visual"><div className="visual-grid" /><div className="visual-icon"><Icon size={35} /></div><div className="visual-lines"><span /><span /><span /></div><div className="visual-pill">SYSTEM OVERVIEW</div></div>
                <p className="project-type">{project.type}</p><h3>{project.name}</h3><p className="project-description">{project.description}</p>
                <div className="tag-list">{project.stack.map((tag) => <span key={tag}>{tag}</span>)}</div>
                <a className="project-link" href={project.href} target="_blank" rel="noreferrer">Explore project <ArrowRight size={16} /></a>
              </article>;
            })}
          </div>
        </section>

        <section className="experience-section section-wrap" id="experience">
          <div className="section-kicker">04 / EXPERIENCE & EDUCATION</div>
          <div className="experience-grid">
            <div><h2>Experience</h2><div className="timeline-item"><span className="timeline-dot" /><div className="timeline-meta">2026 — 2026 · WeIntern, Nagpur</div><h3>Java Devloper · Intern</h3><p> Worked with Core Java, OOP concepts, Spring Boot, REST APIs, and MySQL in backend development tasks.
              • Implemented backend services and tested REST APIs using Postman.
              • Used Git for version control and followed MVC architecture with database integration.</p><div className="tag-list"><span>Frontend Devloper</span><span>Backend Devloper</span><span>Team Leader</span></div></div><div className="timeline-item"><span className="timeline-dot" /><div className="timeline-meta">PROJECT EXPERIENCE</div><h3>Full Stack Developer</h3><p>Built academic and personal projects involving REST APIs, authentication, databases, dashboards, and responsive interfaces.</p></div></div>
            <div><h2>Education</h2><div className="education-card"><span className="education-icon"><GraduationCap size={20} /></span><div><div className="timeline-meta">2023 — 2026</div><h3>B.Tech — Information Technology</h3><p>Yeshwantrao Chavan College of Engineering, Nagpur</p></div></div><div className="education-card"><span className="education-icon"><GraduationCap size={20} /></span><div><div className="timeline-meta">2020 — 2023</div><h3>Diploma — Information Technology</h3><p>Government Polytechnic College, Nanded</p></div></div><div className="credential-note"><Sparkles size={17} /><span>Add verified certifications and credential links here before publishing.</span></div></div>
          </div>
        </section>

        <section className="contact-section section-wrap" id="contact">
          <div className="contact-card">
            <div className="contact-orb" />
            <div className="section-kicker">05 / YOUR NEXT TEAMMATE?</div>
            <h2>Let's build something<br /><span className="gradient-text">worth shipping.</span></h2>
            <p className="body-copy">I'm interested in entry-level Java, backend, and full-stack opportunities where I can contribute, learn from a strong team, and build useful products.</p>
            <a className="button button-primary" href="mailto:vinodrathod0992@gmail.com?subject=Software%20Engineering%20Opportunity">Start a conversation <Send size={16} /></a>
          </div>
        </section>
      </main>

      <footer className="footer section-wrap"><a className="brand" href="#home"><span className="brand-mark">V<span>R</span></span><span>Vinod Rathod</span></a><span>Designed to be clear. Built to keep improving.</span><a href="#home" className="back-top">Back to top ↑</a><small>© {new Date().getFullYear()} Vinod Rathod</small></footer>
    </div>
  );
}

export default App;

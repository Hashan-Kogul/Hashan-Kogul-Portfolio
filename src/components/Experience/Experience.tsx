import { Container } from "./styles";
import ScrollAnimation from "react-animate-on-scroll";

export function Experience() {
  return (
    <Container id="experience">
      <h2>My Experience</h2>
      <div className="projects">

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"> <title>Work</title> <path d="M16 6V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2M3 6h18a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 1 2-2z"></path> </svg>
            </header>
            <div className="body">
              <h3>NINJAPIPE PVT LTD</h3>
              <h3>Associate Software Engineer</h3>
              <p>DEC 2023 – PRESENT</p>
              <ul>
                <li>Designed and implemented full-stack solutions using ASP.NET Core, C#, JavaScript, Azure, and MariaDB.</li>
                <li>Developed a CRM web application, optimizing API performance and improving system responsiveness.</li>
                <li>Optimized database queries and server-side logic to handle high traffic loads.</li>
                <li>Improved UI/UX responsiveness using ASP.NET Core best practices.</li>
                <li>Integrated third-party APIs, including payment gateways and cloud storage solutions.</li>
                <li>Utilized Jira for project management and Agile methodologies.</li>
                <li>Created and maintained comprehensive technical documentation.</li>
                <li>Collaborated with clients to gather business requirements and translate them into technical specifications.</li>
              </ul>
            </div>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"> <title>Work</title> <path d="M16 6V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2M3 6h18a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 1 2-2z"></path> </svg>
            </header>
            <div className="body">
              <h3>NINJAPIPE PVT LTD</h3>
              <h3>Software Engineer Intern</h3>
              <p>JUNE 2023 – DEC 2023</p>
              <ul>
                <li>Developed a responsive CRM web application.</li>
                <li>Collaborated with senior developers to refactor legacy code.</li>
                <li>Implemented RESTful APIs, improving data retrieval speed.</li>
                <li>Resolved over 150+ design inconsistencies with UI/UX designers.</li>
                <li>Transformed the CRM platform into a mobile-responsive application.</li>
                <li>Led Agile team stand-ups and sprint retrospectives.</li>
              </ul>
            </div>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"> <title>Work</title> <path d="M16 6V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2M3 6h18a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 1 2-2z"></path> </svg>
            </header>
            <div className="body">
              <h3>CEYLON DAZZLING DEV HOLDINGS</h3>
              <h3>Associate Software Engineer</h3>
              <p>JULY 2024 – OCT 2024</p>
              <ul>
                <li>Developed scalable web applications using Next.js, Tailwind CSS, TypeScript, React, Node.js, Git, GitHub, and AWS.</li>
                <li>Maintained 15+ technical documents, cutting onboarding time for new developers.</li>
                <li>Automated deployment pipelines using CI/CD on AWS.</li>
                <li>Ensured a user-friendly experience by making applications mobile responsive.</li>
              </ul>
            </div>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"> <title>Work</title> <path d="M16 6V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2M3 6h18a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 1 2-2z"></path> </svg>
            </header>
            <div className="body">
              <h3>AIESEC in Sri Lanka</h3>
              <h3>Developer Team Lead</h3>
              <p>AUG 2023 - AUG 2024</p>
              <ul>
                <li>Led a team of 4 developers to build technical solutions supporting AIESEC's mission.</li>
                <li>Designed high-performance web applications using Next.js, React.js, TypeScript, Angular, and Tailwind CSS.</li>
                <li>Optimized project workflows, reducing development cycles using Agile methodologies.</li>
                <li>Strengthened cross-functional collaboration through regular team discussions.</li>
                <li>Developed scalable technical solutions, increasing platform reliability and user retention.</li>
              </ul>
            </div>
          </div>
        </ScrollAnimation>
      </div>

      <ScrollAnimation animateIn="fadeInLeft" style={{ marginTop: "2rem", marginBottom: "2rem" }}>
          <h3 style={{ color: "var(--green)" }}>Volunteer Experience</h3>
      </ScrollAnimation>

      {/* Volunteer Experience */}
      <div className="projects">
      <ScrollAnimation animateIn="flipInX">
        <div className="project">
          <header>
            <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
              <title>Work</title>
              <path d="M16 6V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2M3 6h18a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 1 2-2z"></path>
            </svg>
          </header>
          <div className="body">
            <h3>AIESEC in Vavuniya</h3>
            <h3>VICE PRESIDENT FINANCE & LEGAL</h3>
            <p>2023-2024</p>
          </div>
        </div>
      </ScrollAnimation>

      <ScrollAnimation animateIn="flipInX">
        <div className="project">
          <header>
            <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
              <title>Work</title>
              <path d="M16 6V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2M3 6h18a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 1 2-2z"></path>
            </svg>
          </header>
          <div className="body">
            <h3>Mozilla Campus Club</h3>
            <h3>DESIGNING TEAM LEAD</h3>
            <p>2022-2023</p>
          </div>
        </div>
      </ScrollAnimation>

      <ScrollAnimation animateIn="flipInX">
        <div className="project">
          <header>
            <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
              <title>Work</title>
              <path d="M16 6V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2M3 6h18a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 1 2-2z"></path>
            </svg>
          </header>
          <div className="body">
            <h3>G17-University Ambassadors Consortium</h3>
            <h3>G17 UNIVERSITY AMBASSADOR</h3>
            <p>2022-2023</p>
          </div>
        </div>
      </ScrollAnimation>

      <ScrollAnimation animateIn="flipInX">
        <div className="project">
          <header>
            <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
              <title>Work</title>
              <path d="M16 6V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2M3 6h18a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 1 2-2z"></path>
            </svg>
          </header>
          <div className="body">
            <h3>University of Vavuniya</h3>
            <h3>STUDENTS' UNION PRESIDENT</h3>
            <p>2022-2023</p>
          </div>
        </div>
      </ScrollAnimation>

      <ScrollAnimation animateIn="flipInX">
        <div className="project">
          <header>
            <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
              <title>Work</title>
              <path d="M16 6V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2M3 6h18a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 1 2-2z"></path>
            </svg>
          </header>
          <div className="body">
            <h3>Zero Plastic National Team</h3>
            <h3>DIRECTOR</h3>
            <p>2022-2023</p>
          </div>
        </div>
      </ScrollAnimation>

      <ScrollAnimation animateIn="flipInX">
        <div className="project">
          <header>
            <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
              <title>Work</title>
              <path d="M16 6V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2M3 6h18a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 1 2-2z"></path>
            </svg>
          </header>
          <div className="body">
            <h3>TECSO Campus Club</h3>
            <h3>PRESIDENT</h3>
            <p>2022-2023</p>
          </div>
        </div>
      </ScrollAnimation>

      </div>
    </Container>
  );
}
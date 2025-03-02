import { Container } from "./styles";
import Hashan from "../../assets/Hashan Kogul.png";
import ScrollAnimation from "react-animate-on-scroll";

export function About() {
  return (
    <Container id="about">
      <div className="about-text">
        <ScrollAnimation animateIn="fadeInLeft">
          <h2>About Me</h2>
          <div className="about-image">
            <ScrollAnimation animateIn="fadeInRight" delay={0.20 * 1000}>
              <img src={Hashan} alt="Hashan Kogul" />
            </ScrollAnimation>
          </div>
          <h4 style={{ marginTop: "2rem", marginBottom: "2rem", color: "var(--green)" }}>Learn more about me</h4>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft" delay={0.1 * 1000} style={{ marginTop: "2rem", marginBottom: "2rem" }}>
          <p>
            A highly motivated and passionate software developer, I am eager to bring my passion for technology and commitment to innovation to a dynamic team. 
            With a strong foundation in software development, I am dedicated to delivering high-quality solutions and adapting to the ever-changing tech industry landscape.
            To find a challenging role where my skills, creativity, and strategy can help other businesses succeed.
          </p>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft" delay={0.1 * 1000} style={{ marginTop: "2rem", marginBottom: "2rem" }}>
          <p>
            As you discover my portfolio, you'll witness a fusion of creativity and technical understanding. 
            I invite you to delve into the tasks that exhibit my determination to smooth, efficient code and my potential to carry ideas to existence. Beyond the pixels and contours of textual content, you may find out a developer who sees every challenge as an opportunity to make a positive impact.
          </p>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft" delay={0.1 * 1000} style={{ marginTop: "2rem", marginBottom: "2rem" }}>
          <p>
            If you're ready to take your website to the next level or build something brand new, I’m here to help! Let's collaborate and turn your ideas into a stunning online presence that stands out. Reach out today and let's make it happen!
          </p>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft">
          <h3 style={{ color: "var(--green)" }}>Here are my main skills:</h3>
        </ScrollAnimation>

        <div className="hard-skills">
          {/* Technical Skills Section */}
          <div className="projects">
            <ScrollAnimation animateIn="flipInX">
              <div className="project">
                  <h3>Technical Skills</h3>
                  <ul>
                    <li>HTML 5</li>
                    <li>.NET Core</li>
                    <li>Next Js</li>
                    <li>React JS</li>
                    <li>Angular</li>
                    <li>JavaScript</li>
                    <li>TypeScript</li>
                    <li>CSS</li>
                    <li>TailWind CSS</li>
                    <li>Bootstrap</li>
                    <li>PHP</li>
                    <li>Web Forms</li>
                    <li>C#</li>
                    <li>Node JS</li>
                    <li>Java</li>
                    <li>Git and GitHub</li>
                    <li>Azure</li>
                    <li>AWS</li>
                  </ul>
              </div>
            </ScrollAnimation>

            {/* Soft Skills Section */}
            <ScrollAnimation animateIn="flipInX">
              <div className="project">
                  <h3>Soft Skills</h3>
                  <ul>
                    <li>Problem Solving</li>
                    <li>Communication</li>
                    <li>Teamwork</li>
                    <li>Adaptability</li>
                    <li>Leadership</li>
                    <li>Creativity</li>
                    <li>Time Management</li>
                    <li>Quick Learner</li>
                    <li>Critical Thinking</li>
                    <li>Conflict Resolution</li>
                    <li>Decision Making</li>
                    <li>Collaboration</li>
                    <li>Active Listening</li>
                    <li>Networking</li>
                    <li>Stress Management</li>
                    <li>Negotiation</li>
                    <li>Presentation Skill</li>
                    <li>Organizational Skills</li>
                  </ul>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </div>

      <ScrollAnimation animateIn="fadeInLeft" style={{ marginTop: "2rem", marginBottom: "2rem" }}>
          <h3 style={{ color: "var(--green)" }}>Here are my recommendations:</h3>
      </ScrollAnimation>

      {/* Recommendation Section */}
      <div className="projects">
        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg
                width="50"
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#23ce6b"
                strokeWidth="1"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <title>Person</title>
                <circle cx="12" cy="8" r="4" stroke="var(--green)" strokeWidth="2" fill="none" />
                <path
                  d="M4 20c0-4 3-7 8-7s8 3 8 7"
                  stroke="var(--green)"
                  strokeWidth="2"
                  fill="none"
                />
              </svg>
              <div className="project-links"></div>
            </header>
            <div className="body">
              <h3>Dinuka Jay</h3>
              <h3>Head Ninja at NinjaPipe</h3>
              <p>
                Hashan is an extremely talented software engineer who's very keen to learn the latest trends in software development, latest stack and always keep himself well ahead. He has progressed fast as an Intern and transformed in to a very talented engineer in our team and absorbed more responsibilities without any hesitation. He's a go getter and a very good team player. He has handle production level applications, deployments and maintenance for thousands of users and I'm very excited to see his future achievements.
              </p>
            </div>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg
                width="50"
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#23ce6b"
                strokeWidth="1"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <title>Person</title>
                <circle cx="12" cy="8" r="4" stroke="var(--green)" strokeWidth="2" fill="none" />
                <path
                  d="M4 20c0-4 3-7 8-7s8 3 8 7"
                  stroke="var(--green)"
                  strokeWidth="2"
                  fill="none"
                />
              </svg>
              <div className="project-links"></div>
            </header>
            <div className="body">
              <h3>Vanessa Boulton</h3>
              <h3>Project Manager at NinjaPipe</h3>
              <p>
                Hashan is an extremely talented individual. He is very loyal, hardworking and punctual and makes sure to complete the given task on time. I recommend Hashan completely.
              </p>
            </div>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg
                width="50"
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#23ce6b"
                strokeWidth="1"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <title>Person</title>
                <circle cx="12" cy="8" r="4" stroke="var(--green)" strokeWidth="2" fill="none" />
                <path
                  d="M4 20c0-4 3-7 8-7s8 3 8 7"
                  stroke="var(--green)"
                  strokeWidth="2"
                  fill="none"
                />
              </svg>
              <div className="project-links"></div>
            </header>
            <div className="body">
              <h3>Shanjeevan Mahesapalan</h3>
              <h3>Project Manager at NinjaPipe</h3>
              <p>
                It is my pleasure to recommend Hashan, who has been a tremendous asset to our team during the integration efforts at Ninjapipe. As an Associate Software Engineer, Hashan demonstrated exceptional technical skills and a strong commitment to ensuring seamless integration of systems.
              </p>
            </div>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg
                width="50"
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#23ce6b"
                strokeWidth="1"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <title>Person</title>
                <circle cx="12" cy="8" r="4" stroke="var(--green)" strokeWidth="2" fill="none" />
                <path
                  d="M4 20c0-4 3-7 8-7s8 3 8 7"
                  stroke="var(--green)"
                  strokeWidth="2"
                  fill="none"
                />
              </svg>
              <div className="project-links"></div>
            </header>
            <div className="body">
              <h3>Dewmina Udayashan</h3>
              <h3>Software Engineer</h3>
              <p>
                I have had the pleasure of working with Hashan, who has proven to be an exceptional asset to our team. As a full-stack developer, he excels in both front-end and back-end development, consistently delivering high-quality work on time.
                Hashan has an impressive ability to grasp complex concepts quickly and apply them effectively. His strong communication and collaboration skills have made him a key player in our team, facilitating smooth interactions and productive teamwork. His dedication and technical prowess are evident in his significant contributions and outstanding performance.
                His talent for problem-solving and his proactive approach to tackling challenges have been invaluable to our projects. I highly recommend Hashan for any development role; his skills, enthusiasm, and teamwork make him a remarkable addition to any team.
              </p>
            </div>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg
                width="50"
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#23ce6b"
                strokeWidth="1"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <title>Person</title>
                <circle cx="12" cy="8" r="4" stroke="var(--green)" strokeWidth="2" fill="none" />
                <path
                  d="M4 20c0-4 3-7 8-7s8 3 8 7"
                  stroke="var(--green)"
                  strokeWidth="2"
                  fill="none"
                />
              </svg>
              <div className="project-links"></div>
            </header>
            <div className="body">
              <h3>Dhanuka Manuwansha</h3>
              <h3>Full Stack Software Engineer</h3>
              <p>
                Hashan Kogul is an exceptional full-stack developer with expertise in .NET. His proficiency in designing web applications using Bootstrap and CSS is impressive. Hashan consistently delivers high-quality, user-friendly interfaces and robust backend solutions. His dedication and skill make him a valuable asset to any team. I highly recommend Hashan for any web development role.
              </p>
            </div>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg
                width="50"
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#23ce6b"
                strokeWidth="1"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <title>Person</title>
                <circle cx="12" cy="8" r="4" stroke="var(--green)" strokeWidth="2" fill="none" />
                <path
                  d="M4 20c0-4 3-7 8-7s8 3 8 7"
                  stroke="var(--green)"
                  strokeWidth="2"
                  fill="none"
                />
              </svg>
              <div className="project-links"></div>
            </header>
            <div className="body">
              <h3>Maheshi Pramodhika</h3>
              <h3>Software Quality Assurance Engineer</h3>
              <p>
                Hashan is a vibrant and motivated person who approaches every task with a surprising blend of passion and critical thought. I absolutely refer to his remarkable abilities and commitment. I have no doubt that Hashan will continue to excel in his software engineering career.
              </p>
            </div>
          </div>
        </ScrollAnimation>
      </div>

    </Container>
  );
}
import { Container } from "./styles";
import githubIcon from "../../assets/github.svg"
import ScrollAnimation from "react-animate-on-scroll";


export function Project() {
  return (
    <Container id="project">
      <h2>My Projects</h2>
      <div className="projects">

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"> <title>Folder</title> <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path> </svg>
              <div className="project-links">
                <a href="https://github.com/Hashan-Kogul/To-Do-Task-App" target="_blank" rel="noreferrer">
                  <img src={githubIcon} alt="Visit site" /></a>
              </div>
            </header>
            <div className="body">
              <h3>To-Do Task App</h3>
              <p> A full-stack To-Do application built with React for the frontend, Express with MariaDB for the backend, and Docker Compose for container orchestration. This app allows you to add tasks, view the latest tasks, and mark them as complete.</p>
            </div>
            <footer> <ul className="tech-list"> <li>MERN Stack</li> <li>MariaDB</li> <li>Docker</li> </ul> </footer>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b " strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><title>Folder</title> <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path> </svg>
              <div className="project-links">
                <a href="https://github.com/Hashan-Kogul/Bus-Ticket-Booking-Web-Application" target="_blank" rel="noreferrer">
                  <img src={githubIcon} alt="Visit site" /> </a>
              </div>
            </header>
            <div className="body">
              <h3>Bus Booking System</h3>
              <p>
                This project allows users to search for buses, book tickets, view bookings, cancel bookings, and manage their profile settings seamlessly. Built using the MERN stack (MongoDB, Express.js, React, Node.js), this application provides a user-friendly interface and powerful backend functionality.
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>MERN Stack</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
              </svg>
              <div className="project-links">
                <a href="https://github.com/Hashan-Kogul/TECHE-LEARN" target="\_blank" rel="noreferrer">
                  <img src={githubIcon} alt="Visit site" />
                </a>
              </div>
            </header>
            <div className="body">
              <h3>Online-Learning-Platform</h3>
              <p>
                TECHE-LEARN is an innovative e-learning web application designed to enhance digital education by providing an interactive and user-friendly platform for learners and educators. Developed using HTML, CSS, JavaScript, jQuery, Bootstrap, PHP, and SQL, the system offers a seamless and engaging experience for users.
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>HTML</li>
                <li>JavaScript</li>
                <li>PHP</li>
                <li>CSS</li>
                <li>MySQL</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b " stroke-width="1" stroke-linecap="round" stroke-linejoin="round" ><title>Folder</title><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
              <div className="project-links">
                <a href="https://github.com/Hashan-Kogul/FitnessApp" target="_blank" rel="noreferrer">
                  <img src={githubIcon} alt="Visit site" />
                </a>
              </div>
            </header>
            <div className="body">
              <h3>Fitness Mobile Application</h3>
              <p>The Fitness App is a React Native app that helps users track workouts, manage rest, and monitor progress. With secure login, custom workout plans, and real-time analytics, it ensures a seamless fitness journey on iOS and Android.</p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>React Native</li>
                <li>JavaScript</li>
                <li>CSS</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
              </svg>
              <div className="project-links">
                <a target="_blank" rel="noreferrer">
                  <img src={githubIcon} alt="Visit site" />
                </a>
              </div>
            </header>
            <div className="body">
              <h3>FOODIE-EXPRESS</h3>
              <p>Foodie-Express is a dynamic and user-friendly online food ordering system designed to connect customers with restaurants, enabling seamless ordering and delivery. Developed by a team of five using HTML, CSS, JavaScript, jQuery, Bootstrap, PHP, and SQL, the platform ensures a smooth and efficient food ordering experience.</p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>HTML</li>
                <li>JavaScript</li>
                <li>PHP</li>
                <li>CSS</li>
                <li>MySQL</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
          <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
              </svg>
              <div className="project-links">
                <a target="_blank" rel="noreferrer">
                  <img src={githubIcon} alt="Visit site" />
                </a>
              </div>
            </header>
            <div className="body">
              <h3>MedXpert</h3>
              <p>
                MedXpert is an advanced mobile application designed to enhance healthcare accessibility and streamline medical services. Developed during AIESEC Moratuwa's application development drive, the project was a collaborative effort involving five team members, utilizing the Flutter framework to ensure a seamless cross-platform experience.
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>Flutter</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>
      </div>
    </Container>
  );
}
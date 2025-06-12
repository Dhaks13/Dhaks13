'use client'

import { useEffect } from 'react';
import "./globals.css";
import Image from "next/image";
import Me from "./logo.jpg";
import styles from "./page.module.css";
import heroImage from "./hero-image.jpg";
import Script from "next/script";
import {ReactTyped} from "react-typed"

export default function Home() {
  useEffect(() => {
    const navbar = document.querySelector(`.${styles.navbar}`);

    const handleScroll = () => {
      if (window.scrollY > 0) {
        navbar?.classList.remove(styles.hidden);
      } else {
        navbar?.classList.add(styles.hidden);
      }
    };

    // window.scrollTo({ top: 0, behavior: "auto" });
    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  useEffect(() => {
  const navLinks = document.querySelectorAll(`.${styles.navLinks} a`);
  if (!navLinks.length) return;

  const sections = Array.from(navLinks).map(link => {
    const id = link.getAttribute("href")?.replace("#", "");
    return document.getElementById(id || "");
  });

  const handleActiveLink = () => {
    let index = sections.findIndex(section => {
      if (!section) return false;
      const rect = section.getBoundingClientRect();
      return rect.top <= 150 && rect.bottom >= 150; // Adjust threshold as needed
    });

    if (index === -1) index = 0;

    navLinks.forEach((link, i) => {
      if (i === index) {
        link.classList.add(styles.active);
      } else {
        link.classList.remove(styles.active);
      }
    });
  };

  window.addEventListener("scroll", handleActiveLink);
  handleActiveLink();

  return () => {
    window.removeEventListener("scroll", handleActiveLink);
  };
}, []);

  return (
    <div className={styles.page}>
      <div className={`${styles.navbar} ${styles.hidden}` }>
        
        <div className={styles.logo}>
          {/* <Image
            src={logo}
            alt="Logo"
            width={50}
            height={55}
          /> */}
          <span className={styles.title}>Portfolio</span>
        </div>
        <nav className={styles.navLinks}>

          <a href="#home" className={styles.active}>Home</a>
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#skills">Skills</a>
          <a href="#contact">Contact</a>
        </nav>
      </div>
      <div id="home" className={styles.home}>
        <div className={styles.heroContent}>
          <h1 className={styles.title}>DHAKSHIN A V</h1>
           <span className={styles.subtitle}>
              <ReactTyped
                strings={[
                  "Full Stack Developer",
                  "ML/DL Enthusiast",
                  "Data Analyst",
                  "UI/UX Designer",
                  "Software Engineer",
                  "Prompt Engineer"
                ]}
                typeSpeed={80}
                backSpeed={40}
                loop
              />
            </span>
          <p className={styles.description}>
            I build scalable full-stack web and AI-powered solutions that tackle real-world problems through clean code, efficient systems, and thoughtful design.
          </p>
          <div className={styles.buttons}>
            <a className={styles.Button1} href='#contact'>
              Get in Touch
            <span className={styles.arrow}> {'>>'}</span>
            </a>
            <a className={styles.Button2} href='#projects'>
              View Projects
            <span className={styles.arrow}> {'>>'} </span>
            </a>
          </div>
          <div className={styles.socialLinks}>
            <a href="https://www.linkedin.com/in/dhaks13/" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="https://github.com/Dhaks13" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-github"></i>
            </a>
            <a href='#contact' target="_blank" rel="noopener noreferrer">
              <i className="fas fa-envelope"></i>
            </a>
          </div>
        </div>
        <div className={styles.heroImageContainer}>
          <Image
          src={heroImage}
          alt="Hero Image"
          className={styles.heroImage}
          loading="eager"
          />  
        </div>
      </div>
      <div id="about" className={styles.about}>
        <div className={styles.aboutImageContainer}>
        <Image
          src={Me}
          alt="Logo"
          className={styles.logoImage}
        />
        </div>
        <div className={styles.aboutText}>
        <h2>About Me</h2>
        <p className={styles.subtitle}>
          Hi, I'm Dhakshin A V, <span>
              <ReactTyped
                strings={[
                  "Full Stack Developer",
                  "ML/DL Enthusiast",
                  "Data Analyst",
                  "UI/UX Designer",
                  "Software Engineer",
                  "Prompt Engineer"
                ]}
                typeSpeed={80}
                backSpeed={40}
                loop
              />
            </span>
        </p>
        <p>
          A final-year Information Technology student with a strong foundation in Full Stack Development 
          with a strong foundation in AI/ML and web development. 
          My technical toolkit includes Python, Django, Angular, React and JavaScript, 
          backed by solid knowledge of data structures and algorithms.
          From building intuitive web interfaces to experimenting
          with machine learning models, I enjoy turning ideas into practical tech solutions.
        </p>
        <p>
          My journey has taken me through internships, hackathons, and academic projects. I'm always eager to take on challenges that blend
          research with real-world impact and hands-on development.
        </p>
        <div className={styles.socialLinks}>
          <a href="https://www.linkedin.com/in/dhaks13/" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-linkedin"></i> LinkedIn
          </a>
          <a href="https://github.com/Dhaks13" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-github"></i> GitHub
          </a>
          <a href='#contact' target="_blank" rel="noopener noreferrer">
            <i className="fas fa-envelope"></i> Email
          </a>
        </div>
      </div>
      </div>
      <div id="projects" className={styles.projects}>
        <h2>Projects</h2>
        <div className={styles.projectTags}>
          <span className={`${styles.tag} ${styles.active}`}>All</span>
          <span className={styles.tag}>Full Stack Web Development</span>
          <span className={styles.tag}>AI/ML</span>
        </div>
        <div className={styles.projectList}>
          {/* Sastra Law Bot */}
          <div className={styles.projectItem}>
            <h3>Sastra Law Bot</h3>
            <p>
              An AI-driven chatbot built with Python and NLP techniques to assist 
              students in navigating campus regulations and legal queries, featuring  
              intent classification and context-aware responses.
            </p>
            <div className={styles.projectTags}>
              <span>#Python</span> <span>#Chatbot</span> <span>#LLM</span>
              <span>#RAG</span> <span>#Django</span> <span>#Angular</span>

            </div>
            <a
              href="https://github.com/Dhaks13/sastra-law-bot/"
              className={styles.projectLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-github"></i> View on GitHub
            </a>
          </div>

          {/* SALVO Website */}
          <div className={styles.projectItem}>
            <h3>SALVO Website</h3>
            <p>
              A responsive, multi-page website built to showcase the SALVO initiative, 
              featuring a clean UI, smooth scroll animations, and mobile-first design 
              principles to engage visitors and communicate project goals.
            </p>
            <div className={styles.projectTags}>
              <span>#HTML</span> <span>#CSS</span> <span>#JavaScript</span> <span>#ResponsiveDesign</span>
            </div>
            <a
              href="https://github.com/Dhaks13/SALVO-Website"
              className={styles.projectLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-github"></i> View on GitHub
            </a>
          </div>

          {/* STL File Slicing */}
          <div className={styles.projectItem}>
            <h3>STL File Slicing</h3>
            <p>
              A Python CLI tool that parses and slices 3D STL models into printable 
              segments, allowing customization of layer height and slice orientation 
              for optimized 3D printing workflows.
            </p>
            <div className={styles.projectTags}>
              <span>#Python</span> <span>#3DPrinting</span> <span>#STL</span>
            </div>
            <a
              href="https://github.com/Dhaks13/STL_File_Slicing"
              className={styles.projectLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-github"></i> View on GitHub
            </a>
          </div>

          {/* IDS for UAV */}
          <div className={styles.projectItem}>
            <h3>IDS for UAV</h3>
            <p>
              An intrusion detection system for drones combining wireless sensor  
              networks and machine learning classifiers to detect GPS spoofing and  
              denial-of-service attacks in real time.
            </p>
            <div className={styles.projectTags}>
              <span>#Python</span> <span>#MachineLearning</span> <span>#XAI</span>
            </div>
            <a
              href="https://github.com/Dhaks13/IDS_for_UAV"
              className={styles.projectLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-github"></i> View on GitHub
            </a>
          </div>

          {/* BayMax */}
          <div className={styles.projectItem}>
            <h3>BayMax</h3>
            <p>
              A medical assistance chatbot developed during a hackathon using Django  
              and Rasa, capable of answering health-related queries and providing  
              symptom-based suggestions with explainable AI components.
            </p>
            <div className={styles.projectTags}>
              <span>#Python</span> <span>#Django</span> <span>#Chatbot</span> <span>#LLM</span>
            </div>
            <a
              href="https://github.com/UnAuthDevX/BayMax-"
              className={styles.projectLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-github"></i> View on GitHub
            </a>
          </div>

          {/* Plant Disease Classification */}
          <div className={styles.projectItem}>
            <h3>Plant Disease Classification</h3>
            <p>
              A deep learning pipeline using TensorFlow to classify plant leaf images  
              into healthy or various disease categories, featuring data augmentation  
              and transfer learning for high accuracy.
            </p>
            <div className={styles.projectTags}>
              <span>#Python</span> <span>#TensorFlow</span> <span>#DeepLearning</span>
            </div>
            <a
              href="https://github.com/UnAuthDevX/Plant-Disease-Classification"
              className={styles.projectLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-github"></i> View on GitHub
            </a>
          </div>

          {/* Tic-Tac-Toe Web App */}
          <div className={styles.projectItem}>
            <h3>Tic-Tac-Toe Web App</h3>
            <p>
              A browser-based Tic-Tac-Toe game built with vanilla JavaScript, HTML,  
              and CSS, featuring two-player mode, win/draw detection, and a reset  
              functionality.
            </p>
            <div className={styles.projectTags}>
              <span>#JavaScript</span> <span>#HTML</span> <span>#CSS</span>
            </div>
            <a
              href="https://github.com/Dhaks13/PRODIGY_WD_03(Tic-Tac-Toe Web Application)"
              className={styles.projectLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-github"></i> View on GitHub
            </a>
          </div>

          {/* Weather App */}
          <div className={styles.projectItem}>
            <h3>Weather App</h3>
            <p>
              A dynamic web application that fetches real-time weather data from an  
              external API, displays current conditions and 5-day forecasts, and  
              allows city-based searches.
            </p>
            <div className={styles.projectTags}>
              <span>#JavaScript</span> <span>#API</span> <span>#ResponsiveDesign</span>
            </div>
            <a
              href="https://github.com/Dhaks13/PRODIGY_WD_05(Weather App)"
              className={styles.projectLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-github"></i> View on GitHub
            </a>
          </div>

          {/* Frontend Movie App */}
          <div className={styles.projectItem}>
            <h3>Frontend Movie App</h3>
            <p>
              A React-based single-page application that integrates with the TMDB API  
              to browse, search, and filter movies, complete with dynamic routing and  
              responsive layout.
            </p>
            <div className={styles.projectTags}>
              <span>#React</span> <span>#JavaScript</span> <span>#API</span>
            </div>
            <a
              href="https://github.com/Dhaks13/Frontend-Movie-App-freeCodeCamp.org"
              className={styles.projectLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-github"></i> View on GitHub
            </a>
          </div>

          {/* JavaScript RPG */}
          <div className={styles.projectItem}>
            <h3>JavaScript RPG</h3>
            <p>
              A tutorial-driven role-playing game built with plain JavaScript and  
              HTML5 Canvas, featuring character movement, combat mechanics, and  
              map exploration inspired by classic RPGs.
            </p>
            <div className={styles.projectTags}>
              <span>#JavaScript</span> <span>#GameDev</span> <span>#Canvas</span>
            </div>
            <a
              href="https://github.com/Dhaks13/JavaScript-RPG-BeauCarnes-freeCodeCamp.org"
              className={styles.projectLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-github"></i> View on GitHub
            </a>
          </div>
        </div>
      </div>
      <div id="skills" className={styles.skills}>
        <h2>Skills &amp; Expertise</h2>
          <div className={styles.skillCategory}>
            <h3>Programming Languages</h3>
            <div className={styles.skillTags}>
              <span className={styles.skillTag}>Python</span>
              <span className={styles.skillTag}>Java</span>
              <span className={styles.skillTag}>C</span>
              <span className={styles.skillTag}>C++</span>
              <span className={styles.skillTag}>JavaScript</span>
              <span className={styles.skillTag}>HTML</span>
              <span className={styles.skillTag}>CSS</span>
              <span className={styles.skillTag}>SQL</span>
              <span className={styles.skillTag}>MongoDB</span>
              <span className={styles.skillTag}>Perl</span>
              <span className={styles.skillTag}>Kotlin</span>
            </div>
          </div>
          <div className={styles.skillCategory}>
            <h3>Frameworks &amp; Libraries</h3>
            <div className={styles.skillTags}>
              <span className={styles.skillTag}>ReactJS</span>
              <span className={styles.skillTag}>AngularJS</span>
              <span className={styles.skillTag}>NodeJS</span>
              <span className={styles.skillTag}>Flask</span>
              <span className={styles.skillTag}>Django</span>
              <span className={styles.skillTag}>TensorFlow</span>
              <span className={styles.skillTag}>PyTorch</span>
              <span className={styles.skillTag}>Scikit-learn</span>
              <span className={styles.skillTag}>Swing</span>
              <span className={styles.skillTag}>Pandas</span>
              <span className={styles.skillTag}>NumPy</span>
              <span className={styles.skillTag}>Matplotlib</span>
            </div>
          </div>
          <div className={styles.skillCategory}>
            <h3>Software &amp; Tools</h3>
            <div className={styles.skillTags}>
              <span className={styles.skillTag}>Git</span>
              <span className={styles.skillTag}>Figma</span>
              <span className={styles.skillTag}>Canva</span>
              <span className={styles.skillTag}>MATLAB</span>
              <span className={styles.skillTag}>Linux/Unix</span>
            </div>
          </div>
          <div className={styles.skillCategory}>
            <h3>Soft Skills</h3>
            <div className={styles.skillTags}>
              <span className={styles.skillTag}>Problem-Solving</span>
              <span className={styles.skillTag}>Teamwork</span>
              <span className={styles.skillTag}>Adaptability</span>
              <span className={styles.skillTag}>Continuous Learning</span>
            </div>
          </div>
      </div>
        <div id="contact" className={styles.contact}>
        <div className={styles.contactTexts}>
        <h2 className={styles.contactTitle}>Get In Touch</h2>
        <div className={styles.contactGrid}>
          <div className={styles.contactInfo}>
            <h3 className={styles.contactSubtitle}>Contact Information</h3>
            <div className={styles.contactBlock}>
              <span className={styles.contactLabel}>Email:</span>
              <div className={styles.contactDetails}>
                <a href="mailto:avdhakshin1354@gmail.com" className={styles.contactLink}>avdhakshin1354@gmail.com</a>
                <a href="mailto:126015021@sastra.ac.in" className={styles.contactLink}>126015021@sastra.ac.in</a>
              </div>
            </div>
            <div className={styles.contactBlock}>
              <span className={styles.contactLabel}>Phone:</span>
              <span className={styles.contactDetails}>+91 9629243200</span>
            </div>
            <div className={styles.contactBlock}>
              <span className={styles.contactLabel}>Address:</span>
              <span className={styles.contactDetails}>
                6/608/6-C Bharathidasan Street,<br />
                Lakshmi Nagar, Virudhunagar
              </span>
            </div>
            <div className={styles.contactBlock}>
              <span className={styles.contactLabel}>LinkedIn:</span>
              <a
                href="https://linkedin.com/in/dhaks13"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.contactLink}
              >
                linkedin.com/in/dhaks13
              </a>
            </div>
          </div>
          </div>
          <form className={styles.contactForm} autoComplete="off">
            <h3 className={styles.contactSubtitle}>Send a Message</h3>
            <div className={styles.formGroup}>
              <label htmlFor="name" className={styles.formLabel}>Name</label>
              <input type="text" id="name" name="name" className={styles.formInput} placeholder="Your Name" required />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="email" className={styles.formLabel}>Email</label>
              <input type="email" id="email" name="email" className={styles.formInput} placeholder="Your Email" required />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="subject" className={styles.formLabel}>Subject</label>
              <input type="text" id="subject" name="subject" className={styles.formInput} placeholder="Subject" required />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="message" className={styles.formLabel}>Message</label>
              <textarea id="message" name="message" className={styles.formTextarea} placeholder="Your Message" rows={5} required />
            </div>
            <button type="submit" className={styles.sendButton}>Send Message</button>
          </form>
        </div>
      </div>
      <footer className={styles.footer}>
        <p>&copy; {new Date().getFullYear()} Dhakshin A V. All rights reserved.</p>
      </footer>
    </div>
  );
}

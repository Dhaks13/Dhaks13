'use client'

import { useEffect } from 'react';
import "./globals.css";
import Image from "next/image";
import logo from "./D.gif";
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

    window.scrollTo({ top: 0, behavior: "auto" });
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
          src={logo}
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
        A final-year Information Technology student with a strong foundation in full-stack web development
        and a growing passion for AI/ML and cybersecurity. From building intuitive web interfaces to experimenting
        with machine learning models and drone security systems, I enjoy turning ideas into practical tech solutions.
      </p>

      <p>
        My journey has taken me through internships, hackathons, and academic projects where I’ve explored areas like
        WSN intrusion detection and PDF-based chatbot training. I'm always eager to take on challenges that blend
        research with real-world impact and hands-on development.
      </p>

      <p>
        When I’m not coding, I usually play games, binge-watch sci-fi or thriller series, or catch up on the latest
        cricket match. I’m also a big fan of music especially melody songs  and I never miss a chance to unwind with
        a good movie or spend quality time with family and friends.
      </p>

        </div>
      </div>
      <div id="projects" className={styles.projects}>
        <h2>Projects</h2>
        <div className={styles.projectList}>
          <div className={styles.projectItem}>
            <h3>Project 1</h3>
            <p>Description of project 1.</p>
          </div>
          <div className={styles.projectItem}>
            <h3>Project 2</h3>
            <p>Description of project 2.</p>
          </div>
          <div className={styles.projectItem}>
            <h3>Project 3</h3>
            <p>Description of project 3.</p>
          </div>
        </div>
      </div>
        <div id="skills" className={styles.skills}>
          <h2>Skills</h2>
          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>React</li>
            <li>Next.js</li>
          </ul>
        </div>
        <div id="contact" className={styles.contact}>
          <h2>Contact</h2>
          <p>If you would like to get in touch, please email me at <a href="mailto:"></a></p>
          <p>Follow me on social media:</p>
          <ul className={styles.socialLinks}>
            <li><a href="https://github.com" target="_blank" rel="noopener noreferrer">GitHub</a></li>
            <li><a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
            <li><a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a></li>
          </ul>
        </div>
      <footer className={styles.footer}>
        <p>&copy; {new Date().getFullYear()} Dhakshin A V. All rights reserved.</p>
      </footer>
    </div>
  );
}

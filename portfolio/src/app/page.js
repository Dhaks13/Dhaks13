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
  return (
    <div className={styles.page}>
      <div className={`${styles.navbar} ${styles.hidden}` }>
        <Script>  
          {
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
          }, [])
          }
        </Script>
        <div className={styles.logo}>
          <Image
            src={logo}
            alt="Logo"
            width={50}
            height={55}
          />
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
            This portfolio showcases my skills and projects in web development. 
            I specialize in creating responsive and user-friendly web applications.
          </p>
          <div className={styles.buttons}>
            <button className={styles.Button1}>
              Get in Touch
            <span className={styles.arrow}>→</span>
            </button>
            <button className={styles.Button2}>
              View Projects
            <span className={styles.arrow}>→</span>
            </button>
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
        <h2>About Me</h2>
        <p>
          I am a web developer with a passion for creating dynamic and responsive web applications.
          My expertise includes HTML, CSS, JavaScript, and various frameworks.
        </p>
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

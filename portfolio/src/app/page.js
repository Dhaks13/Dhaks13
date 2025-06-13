'use client'
import React, { useState , useRef, useEffect } from 'react';
import "./globals.css";
import Image from "next/image";
import Me from "./logo.jpg";
import styles from "./page.module.css";
import heroImage from "./hero-image.jpg";
import {ReactTyped} from "react-typed"
import emailjs from 'emailjs-com';

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

const projects = [
  {
    title: 'Law ChatBot',
    description:
      'An AI-powered legal assistant chatbot designed to answer queries related to Indian family and property law using NLP, intent classification, and context-aware dialogue, built with Django and Angular.',
    tags: ['AI/ML', 'Full Stack Web Development'],
    tech: ['#Python', '#Django', '#Angular', '#Chatbot', '#LLM', '#RAG'],
    url: 'https://github.com/Dhaks13/sastra-law-bot/',
  },
  {
    title: 'SALVO Website',
    description:
'A responsive website developed for SALVO, an AI club initiative, designed to showcase the club’s mission, activities, and events. Built with modern UI principles, smooth animations, accessibility support, and a mobile-first approach.',    tags: ['Frontend Development','Full Stack Web Development'],
    tech: ['#HTML', '#CSS', '#JavaScript', '#ResponsiveDesign'],
    url: 'https://github.com/Dhaks13/SALVO-Website',
  },
  {
    title: 'STL File Slicing',
    description:
      'A Python CLI tool for slicing STL files into 3D printable layers with adjustable slice height and orientation, tailored for additive manufacturing workflows.',
    tags: ['3D Printing', 'Tooling'],
    tech: ['#Python', '#STL', '#Slicing', '#3DPrinting'],
    url: 'https://github.com/Dhaks13/STL_File_Slicing',
  },
  {
    title: 'IDS for UAV',
    description:
      'An ML-based Intrusion Detection System for UAVs using explainable AI and WSN data to detect GPS spoofing and DoS attacks with real-time classification.',
    tags: ['AI/ML', 'Cybersecurity'],
    tech: ['#Python', '#MachineLearning', '#XAI', '#WSN'],
    url: 'https://github.com/Dhaks13/IDS_for_UAV',
  },
  {
    title: 'BayMax',
    description:
      'A health-focused chatbot developed and Django, capable of handling medical queries with contextual understanding and explainable AI.',
    tags: ['AI/ML', 'Full Stack Web Development'],
    tech: ['#Python', '#Django', '#LLM', '#Chatbot'],
    url: 'https://github.com/UnAuthDevX/BayMax-',
  },
  {
    title: 'Plant Disease Classification',
    description:
      'A deep learning model using transfer learning and image augmentation to accurately classify plant leaf diseases, built with TensorFlow.',
    tags: ['AI/ML', 'Computer Vision'],
    tech: ['#Python', '#TensorFlow', '#DeepLearning', '#ImageClassification'],
    url: 'https://github.com/UnAuthDevX/Plant-Disease-Classification',
  },
  {
    title: 'Tic-Tac-Toe Web App',
    description:
      'A two-player browser game developed with JavaScript, featuring real-time game logic, UI interaction, and state resets.',
    tags: ['Frontend Development', 'Games'],
    tech: ['#JavaScript', '#HTML', '#CSS', '#GameLogic'],
    url: 'https://github.com/Dhaks13/PRODIGY_WD_03',
  },
  {
    title: 'Weather App',
    description:
      'A weather forecast application that consumes a public weather API to show current conditions with responsive UI.',
    tags: ['Frontend Development'],
    tech: ['#JavaScript', '#API', '#HTML', '#CSS', '#ResponsiveDesign'],
    url: 'https://github.com/Dhaks13/PRODIGY_WD_05',
  },
  {
    title: 'JavaScript RPG',
    description:
      'A browser-based RPG using HTML5 Canvas and JavaScript, with combat, tile-based maps, and animated player movement following game development tutorials.',
    tags: ['Frontend Development', 'Games'],
    tech: ['#JavaScript', '#Canvas', '#HTML', '#GameDev'],
    url: 'https://github.com/Dhaks13/JavaScript-RPG-BeauCarnes-freeCodeCamp.org',
  },
];

const tags = ['All', 'Full Stack Web Development', 'AI/ML','Frontend Development'];
const [activeTag, setActiveTag] = useState('All');

  const handleTagClick = (tag) => {
    setActiveTag(tag);
  };

  const filteredProjects =
    activeTag === 'All'
      ? projects
      : projects.filter((project) => project.tags.includes(activeTag));

  

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    const serviceID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
    const templateID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;
    emailjs.sendForm(
      serviceID,
      templateID,
      form.current,
      publicKey
    ).then(
      (result) => {
        console.log('Success:', result.text);
        alert('Message sent!');
        form.current.reset();
      },
      (error) => {
        console.error('Error:', error.text);
        alert('Failed to send message.');
      }
    );
  };

  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreen = () => setIsMobile(window.innerWidth <= 800);
    checkScreen();
    window.addEventListener('resize', checkScreen);
    return () => window.removeEventListener('resize', checkScreen);
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
        {isMobile && !isMobileMenuOpen && (
        <i className={`fas fa-bars ${styles.menuIcon}`} onClick={() => 
          {
            setMobileMenuOpen(true)
            document.querySelector(`.${styles.navbar} nav`)?.classList.add(styles.transformed);

          }
        }></i>
      
      )}
      {isMobile && isMobileMenuOpen && (
        <i
          className={`fas fa-times ${styles.closeIcon}`}
          onClick={() => {
            setMobileMenuOpen(false);
            document.querySelector(`.${styles.navbar} nav`)?.classList.remove(styles.transformed);
          }}
        ></i>
      )}
        <nav className={styles.navLinks}>

          <a href="#home" onClick={() => {
            setMobileMenuOpen(false)
            document.querySelector(`.${styles.navbar} nav`)?.classList.remove(styles.transformed);
          }} className={styles.active}>Home</a>
          <a href="#about" onClick={() => {
            setMobileMenuOpen(false)
            document.querySelector(`.${styles.navbar} nav`)?.classList.remove(styles.transformed);
          }}>About</a>
          <a href="#projects" onClick={() => {
            setMobileMenuOpen(false)
            document.querySelector(`.${styles.navbar} nav`)?.classList.remove(styles.transformed);
          }}>Projects</a>
          <a href="#skills" onClick={() => {
            setMobileMenuOpen(false)
            document.querySelector(`.${styles.navbar} nav`)?.classList.remove(styles.transformed);
          }}>Skills</a>
          <a href="#contact" onClick={() => {
            setMobileMenuOpen(false)
            document.querySelector(`.${styles.navbar} nav`)?.classList.remove(styles.transformed);
          }}>Contact</a>
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
            <a href='#form' target="_blank" rel="noopener noreferrer">
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
          <a href='#form' target="_blank" rel="noopener noreferrer">
            <i className="fas fa-envelope"></i> Email
          </a>
        </div>
      </div>
      </div>
      <div id="projects" className={styles.projects}>
        <h2>Projects</h2>
        <div className={styles.projectTags}>
        {tags.map((tag) => (
          <span
            key={tag}
            className={`${styles.tag} ${
              activeTag === tag ? styles.active : ''
            }`}
            onClick={() => handleTagClick(tag)}
          >
            {tag}
          </span>
        ))}
      </div>
        <div className={styles.projectList}>
          {filteredProjects.map((project) => (
          <div key={project.title} className={styles.projectItem}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className={styles.projectTags}>
              {project.tech.map((t) => (
                <span key={t}>{t}</span>
              ))}
            </div>
            <a
              href={project.url}
              className={styles.projectLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-github"></i> View on GitHub
            </a>
          </div>
        ))}
        
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
              <span className={styles.skillTag}>Linux</span>
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
        <h2 className={styles.contactTitle}>Get In Touch</h2>
        <div className={styles.contactGrid}>
          <div className={styles.contactInfo}>
            <h3 className={styles.contactSubtitle}>Contact Information</h3>
            <div className={styles.contactBlock}>
              <div className={styles.contactIcon}>
                <i className={`fas fa-envelope`}></i>
              </div>
              <div className={styles.contactDetails}>
                <span className={styles.contactLabel}>Email</span>
                <div className={styles.contactDetail}>
                  <a href="mailto:avdhakshin1354@gmail.com" target="_blank" rel="noopener noreferrer" className={styles.contactLink}>avdhakshin1354@gmail.com</a>
                  <a href="mailto:126015021@sastra.ac.in" target="_blank" rel="noopener noreferrer" className={styles.contactLink}>126015021@sastra.ac.in</a>
                </div>
              </div>
            </div>
            <div className={styles.contactBlock}>
              <div className={styles.contactIcon}>
              <i className='fas fa-mobile'></i>
              </div>
              <div className={styles.contactDetails}>
                <span className={styles.contactLabel}>Phone</span>
                <span className={styles.contactDetail}>+91 9629243200</span>
              </div>
            </div>
            <div className={styles.contactBlock}>
              <div className={styles.contactIcon}>
                <i className={`fas fa-map-marker-alt`}></i>
              </div>
              <div className={styles.contactDetails}>
              <span className={styles.contactLabel}>Address</span>
              <span className={styles.contactDetail}>
                6/608/6-C Bharathidasan Street,<br />
                Lakshmi Nagar, Virudhunagar
              </span>
            </div>
            </div>
            <div className={styles.contactBlock}>
              <div className={styles.contactIcon}>
              <i className={`fab fa-linkedin`}></i>
              </div>
              <div className={styles.contactDetails}>
              <span className={styles.contactLabel}>LinkedIn</span>
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
          <div className={styles.contactInfo}>
            <h3 className={styles.contactSubtitle}>Send a Message</h3>
          <form id='form' ref={form} onSubmit={sendEmail} className={styles.contactForm} autoComplete="off">
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
      </div>
      <footer className={styles.footer}>
        <p>&copy; {new Date().getFullYear()} Dhakshin A V. All rights reserved.</p>
      </footer>
    </div>
  );
}

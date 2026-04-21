"use client";

import { useEffect, useState } from "react";
import Skills from "./components/Skills";
import Resume from "./components/Resume";
import Portfolio from "./components/Portfolio";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";

const roles = [
  "Software Engineer",
  "Full-Stack Developer",
  "MERN Stack Developer"
];

export default function Home() {
  const [text, setText] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const current = roles[roleIndex];

    if (charIndex < current.length) {
      const timeout = setTimeout(() => {
        setText((prev) => prev + current[charIndex]);
        setCharIndex(charIndex + 1);
      }, 70);
      return () => clearTimeout(timeout);
    } else {
      setTimeout(() => {
        setText("");
        setCharIndex(0);
        setRoleIndex((prev) => (prev + 1) % roles.length);
      }, 1500);
    }
  }, [charIndex, roleIndex]);

  return (
    <>
      <section id="home" className="hero">
        <div className="overlay">
          <div className="hero-content">
            <h1 className="hero-name">Jane Hill</h1>

            <h2 className="hero-role">
              I'm <span className="typing">{text}</span>
            </h2>
          </div>
        </div>
      </section>

      {/* ===== ABOUT ===== */}
        <section id="about" className="about">
          <div className="about-container">
            <h2 className="section-title">About</h2>
            <div className="underline"></div>

            <div className="about-content">
              <div className="about-image">
                <img src="/profile.jpg" alt="about" />
              </div>

              <div className="about-info">
                <h3 style = {{marginBottom: '45px'}}>Full Stack Engineer (React | Next.js | Node.js | WordPress)</h3>

                <div className="info-grid">
                  <p><strong>Birthday:</strong> 8 September 2000</p>
                  <p><strong>Age:</strong> 26</p>
                  <p><strong>Website:</strong> <a href="https://construkted.com">construkted.com</a></p>
                  <p><strong>Degree:</strong> Bachelor of Computer Science</p>
                  <p><strong>Email:</strong> jane0908hill@outlook.com</p>
                  <p><strong>Country:</strong> China</p>
                  <p><strong>Freelance:</strong> Available</p>
                </div>

                <p className="about-text">
                  Full-Stack Engineer with expertise in building high-performance cloud-native systems using React, Node.js, and AWS. Skilled in backend architecture, performance optimization, and maintaining robust, reliable systems at scale. Focused on system design, scalability, and operational excellence.
                </p>
              </div>
            </div>
          </div>
        </section>

        <Skills />
        <Resume />
        <Portfolio />
        <Testimonials />
        <Contact />
    </>
  );
}
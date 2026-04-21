"use client";

export default function Resume() {
  return (
    <section id="resume" className="resume">
      <div className="resume-container">
        <h2 className="section-title">Resume</h2>
        <div className="underline"></div>

        <p className="resume-desc">
          Full-Stack Engineer with 3+ years of experience building scalable SaaS applications using React, Next.js, Node.js, and Python, focused on performance, clean architecture, and production-ready systems.
        </p>

        <div className="resume-grid">

          {/* LEFT COLUMN */}
          <div className="resume-left">
            <h2 className="resume-subtitle">Summary</h2>

            <div className="resume-item">
              <h3>Jane Hill</h3>
              <p style = {{marginTop: '7px'}}>
                Full-Stack Engineer with expertise in building high-performance cloud-native systems using React, Node.js, and AWS. Skilled in backend architecture, performance optimization, and maintaining robust, reliable systems at scale. Focused on system design, scalability, and operational excellence.
              </p>
              <ul>
                <li>Shiyan, China</li>
                <li>jane0698h@gmail.com</li>
              </ul>
            </div>

 |

            <h2 className="resume-subtitle">Education</h2>

            <div className="resume-item">
              <h3> University of Electronic Science and Technology</h3>
              <p>Bachelor of Computer Science</p>
              <span className="resume-date"></span>
              <p>
                 •Relevant Coursework: Data Structures, Web Development, Cloud Computing
              </p>
              <p>
                 •Academic Projects: Developed mini full-stack web apps integrating frontend and backend systems
              </p>
            </div>
             
          </div>

          {/* RIGHT COLUMN */}
          <div className="resume-right">

            <h2 className="resume-subtitle">Professional Experience</h2>

            <div className="resume-item">
              <h3>Full-Stack Developer</h3>
              <span className="resume-date">Remote · 06/2024 - 11/2025</span>
              <ul>
                <li>Developed responsive React/Next.js components, significantly improving frontend performance</li>
                <li>Built multiple client WordPress sites with custom plugins, enhancing content management efficiency</li>
                <li>Developed reusable React dashboards and UI components, boosting team efficiency</li>
                <li>Automated repetitive tasks, streamlining workflows and saving team time</li>
              </ul>
            </div>

            <div className="resume-item">
              <h3>Frontend Automation Engineer</h3>
              <span className="resume-date">12/2022 - 04/2024</span>
              <ul>
                <li>Developed reusable React dashboards and UI components, improving team efficiency by 30%</li>
                <li>Automated repetitive tasks, saving 8+ hours weekly and streamlining workflows</li>
                <li>Enhanced reliability of internal tools and standardized interfaces across multiple platforms</li>
              </ul>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
"use client";

export default function Resume() {
  return (
    <section id="resume" className="resume">
      <div className="resume-container">
        <h2 className="section-title">Resume</h2>
        <div className="underline"></div>

        <p className="resume-desc">
          Senior Full-Stack Engineer with 5+ years of experience building scalable SaaS applications using React, Next.js, Node.js, and Python, focused on performance, clean architecture, and production-ready systems.
        </p>

        <div className="resume-grid">

          {/* LEFT COLUMN */}
          <div className="resume-left">
            <h2 className="resume-subtitle">Summary</h2>

            <div className="resume-item">
              <h3>Jane Hill</h3>
              <p style = {{marginTop: '7px'}}>
                Senior Full-Stack Engineer with expertise in building high-performance cloud-native systems using React, Node.js, and AWS. Skilled in backend architecture, performance optimization, and maintaining robust, reliable systems at scale. Focused on system design, scalability, and operational excellence.
              </p>
              <ul>
                <li>Holland Village, Singapore</li>
                <li>jane0698h@gmail.com</li>
              </ul>
            </div>

 |

            <h2 className="resume-subtitle">Education</h2>

            <div className="resume-item">
              <h3>PSB Academy, Singapore</h3>
              <p>Bachelor of Computer Science</p>
              <span className="resume-date"></span>
              <p>
                Focus: Distributed Systems, Databases, Cloud Computing
              </p>
            </div>
             
          </div>

          {/* RIGHT COLUMN */}
          <div className="resume-right">

            <h2 className="resume-subtitle">Professional Experience</h2>

            <div className="resume-item">
              <h3>Full-Stack Developer</h3>
              <span className="resume-date">Remote · 2023 - Present</span>
              <ul>
                <li>Owned the architecture and delivery of RESTful services supporting high-traffic applications</li>
                <li>Deployed containerized applications on AWS, improving scalability and reliability</li>
                <li>Optimized database queries and schema, reducing latency and improving performance</li>
                <li>Enhanced application response times through caching and backend tuning</li>
                <li>Automated CI/CD pipelines, accelerating deployment processes</li>
                <li>Ensured high production reliability through monitoring and operational improvements</li>
              </ul>
            </div>

            <div className="resume-item">
              <h3>Ground Intelligence Analyst</h3>
              <span className="resume-date">2021 - 2023</span>
              <ul>
                <li>Led operational coordination in mission-critical environments, ensuring precision and accountability</li>
                <li>Designed workflow automation tools, significantly improving operational efficiency</li>
                <li>Collaborated effectively across cross-functional teams under high-pressure conditions</li>
              </ul>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
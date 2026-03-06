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
                Senior-level Full-Stack Engineer specializing in designing and scaling high-performance cloud-native
                systems using React, Node.js, and AWS. Experienced in architecting backend services supporting
                1,000+ concurrent users, optimizing database performance by 40%, reducing latency by 25%, and
                maintaining 99.9% production uptime. Strong focus on system design, scalability, and operational
                reliability
              </p>
              <ul>
                <li>Los Angeles, CA</li>
                <li>jane0908hill@outlook.com</li>
              </ul>
            </div>


            <h2 className="resume-subtitle">Education</h2>

            <div className="resume-item">
              <h3>Master of Science (M.S.) in Computer Science</h3>
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
                <li>Owned the architecture and delivery of RESTful services supporting 1,000+ concurrent users</li>
                <li>Deployed containerized applications on AWS, improving scalability and reliability</li>
                <li>Reduced database latency by 40% through query and schema optimization</li>
                <li>Lowered application response times by 25% via caching and backend tuning</li>
                <li>Automated CI/CD pipelines, accelerating deployments by 60%</li>
                <li>Maintained 99.9% uptime through monitoring and production improvements</li>
              </ul>
            </div>

            <div className="resume-item">
              <h3>Ground Intelligence Analyst</h3>
              <span className="resume-date">2020 - 2023</span>
              <ul>
                <li>Led operational coordination in mission-critical environments requiring precision and accountability</li>
                <li>Designed workflow automation tools, improving operational efficiency by 80%</li>
                <li>Collaborated across cross-functional teams under high-pressure conditions</li>
              </ul>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
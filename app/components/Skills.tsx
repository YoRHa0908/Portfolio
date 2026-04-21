"use client";

export default function Skills() {

  const skillData = [
    {title:"React.js", percent:"95%" },
    {title:"Python", percent:"95%" },
    {title:"Next.js", percent:"95%" },    
    {title:"PostgreSQL", percent:"90%" },
    {title:"Node.js", percent:"95%" },
    {title:"Express.js", percent:"85%" },
    {title:"Wordpress", percent:"95%" },
    {title:"MySQL", percent:"95%" },
    {title:"JavaScript", percent:"95%" },
    {title:"MongoDB", percent:"95%" },
  ]

  return (
    <section id="skills" className="skills">
      <div className="skills-container">
        <h2 className="section-title">Skills</h2>
        <div className="underline"></div>

        <p className="skills-desc">
          Full-Stack Engineer with 3+ years of experience building scalable SaaS applications using React, Next.js, Node.js, and Python, focused on performance, clean architecture, and production-ready systems.
        </p>

        <div className="skills-grid">
          

          {skillData.map((item, index) =>  
              <div className="skill-item" key={index}>
              <div className="skill-header">
                <span>{item.title}</span>
                <span>{item.percent}</span>
              </div>
              <div className="progress">
                <div className="progress-bar" style={{ width: item.percent}}></div>
              </div>
            </div>
          )}
          
        </div>
      </div>
    </section>
  );
}
import React from 'react';
import './Resume.css'; // Optional: Create a separate CSS file for styling

const Resume = () => {
  return (
    <section className="resume">
      <div className="resume-content">
        <h2 className="resume-title">Dylan White - Resume</h2>

        <div className="resume-section">
          <h3>Summary</h3>
          <p>
            Highly motivated and adaptable software developer with 13 years of culinary experience, bringing strong problem-solving skills, attention to detail, and a passion for continuous learning to the field of technology. Proven ability to thrive in fast-paced environments and deliver high-quality results. Seeking to leverage my diverse background to contribute to innovative and challenging projects.
          </p>
        </div>

        <div className="resume-section">
          <h3>Skills</h3>
          <ul className="skills-list">
            <li>JavaScript</li>
            <li>React</li>
            <li>Node.js</li>
            <li>HTML-Git-CSS</li>
            <li>Advanced-CSS</li>
            <li>Web APIs</li>
            <li>Typescript-OOP</li>
            <li>SQL</li>
            <li>Prompt-Engineering</li>
            <li>Full-Stack-React</li>
            <li>Database Management (MongoDB)</li>
            <li>Problem Solving</li>
            <li>Team Collaboration</li>
          </ul>
        </div>

        <div className="resume-section">
          <h3>Experience</h3>
          <div className="experience-item">
            <h4>Software Developer</h4>
            <p className="experience-dates">Present - Present</p>
            <p>
              Developed and maintained web applications using React and Node.js. Collaborated with cross-functional teams to deliver high-quality software solutions. Implemented responsive designs and optimized application performance.
            </p>
          </div>
          <div className="experience-item">
            <h4>Chef</h4>
            <p className="experience-dates">2011 - 2024</p>
            <p>
              Managed kitchen operations, including menu planning, staff training, and inventory control. Consistently delivered exceptional culinary experiences, resulting in high customer satisfaction. Demonstrated strong leadership and organizational skills.
            </p>
          </div>
        </div>

        <div className="resume-section">
          <h3>Education</h3>
          <div className="education-item">
            <h4>N/A</h4>
            <p className="education-dates">Currently attending</p>
            <p>[UNH Coding Bootcamp]</p>
          </div>
          <div className="education-item">
            <h4>[High School Diploma]</h4>
            <p className="education-dates">[2011]</p>
            <p>[Hartford High School]</p>
          </div>
        </div>

        <div className="resume-section">
          <h3>Contact</h3>
          <p>Email: Jacob.dwhite23@gmail.com</p>
          <p>LinkedIn: linkedin.com/in/yourprofile</p>
          <p>GitHub: github.com/Diggy2324</p>
        </div>
      </div>
    </section>
  );
};

export default Resume;
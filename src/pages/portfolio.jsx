import React from 'react';
import './CSS/portfolio.css';

const Portfolio = () => {
  const projects = [
    {
      id: 1,
      title: 'Project-Trippit',
      description: 'Trippit is a travel website that allows users to search for flights, hotels, and activities for their next trip. Users can create an account, save their favorite destinations, and view their travel history, along with a budgeting graph to stay within their travel budget.',
      imageUrl: 'https://github.com/abelgtzrs/Project-Trippit/blob/main/assets/images/logo.png?raw=true',
      link: 'https://github.com/abelgtzrs/Project-Trippit.git',
    },
    {
      id: 2,
      title: 'SQL-Challenge',
      description: 'This command-line application allows users to easily manage employees, roles, and departments within a company. It uses Node.js, Inquirer for user interaction, and PostgreSQL for database management.',
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZVRSQ6epxUu5k5ZAE7fumunyEcREKrMC_Eg&s',
      link: 'https://github.com/Diggy2324/SQL-Challenge.git',
    },
    {
        id: 3,
        title: 'React-Profile',
        description: 'This portfolio serves as a centralized hub for my professional online presence. Its designed to provide visitors with a clear and engaging overview of my capabilities, past work, and contact information. The portfolio is built with modern web development practices and emphasizes a clean, responsive design.',
        imageUrl: 'https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&w=600',
        link: 'https://github.com/Diggy2324/React-Portfolio.git',
    },
  ];

  return (
    <section className="portfolio">
      <div className="portfolio-content">
        <h2 className="portfolio-title">My Portfolio</h2>
        <div className="projects-grid">
          {projects.map((project) => (
            <div key={project.id} className="project-item">
              <img src={project.imageUrl} alt={project.title} className="project-image" />
              <div className="project-details">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link">
                  View Project
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
import React from 'react';

const projectItem = ({ project }) => {
  return (
    <section className="mb-8">
      {project.link ? (
        <a href={project.link} target="_blank" rel="noopener noreferrer">
          <h2 className="font-medium text-xl text-secondary">
            {project.title}
          </h2>
        </a>
      ) : (
        <h2 className="font-medium text-xl text-accent">{project.title}</h2>
      )}
      <ul className="text-foreground list-disc pl-5">
        {project.description.map((line, index) => (
          <li key={index}>{line}</li>
        ))}
      </ul>
    </section>
  );
};

export default projectItem;

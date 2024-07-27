import React from 'react';

const jobRoleItem = ({ comp }) => {
  return (
    <section className="mb-8">
      <h2 className="font-medium text-xl text-accent">{comp.title}</h2>
      <h3 className="text-secondary">{comp.company}</h3>
      <p className="text-muted">{comp.dates}</p>
      <ul className="text-foreground list-disc pl-5">
        {comp.description.map((line, index) => (
          <li key={index}>{line}</li>
        ))}
      </ul>
    </section>
  );
};
export default jobRoleItem;

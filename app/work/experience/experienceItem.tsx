import React from 'react';

const jobRoleItem = ({ comp }) => {
  return (
    <section className="mb-8">
      <h2 className="font-medium text-xl">{comp.title}</h2>
      <h3 className="text-gray-700">{comp.company}</h3>
      <p className="text-gray-500">{comp.dates}</p>
      <ul className="list-disc pl-5">
        {comp.description.map((line, index) => (
          <li key={index}>{line}</li>
        ))}
      </ul>
    </section>
  );
};
export default jobRoleItem;

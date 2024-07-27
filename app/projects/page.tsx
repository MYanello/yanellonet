import React from 'react';
import Project from './projectItem';
import {
  linuxadmin,
  netadmin,
  redis,
  firewall,
  containers,
  reverseproxy,
  site,
} from './projectData';

const projects = [
  netadmin,
  linuxadmin,
  redis,
  firewall,
  containers,
  reverseproxy,
  site,
];

export default function projectList() {
  return (
    <div className="w-full">
      <h1 className="text-foreground font-medium text-2xl mb-8 tracking-tighter">
        Projects and Experience
      </h1>
      <section>
        {projects.map((project, index) => (
          <Project key={index} project={project} />
        ))}
      </section>
    </div>
  );
}

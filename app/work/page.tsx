import React from 'react';
import JobRole from './experience/experienceItem';

const rescalesoftware = {
  title: 'Software Engineer',
  company: 'Tech Company',
  dates: 'Jan 2020 - Present',
  description:
    'Developed and maintained web applications using React and Node.js.',
};

const rescalesupport = {
  title: 'Customer Support Engineer',
  company: 'Tech Company',
  dates: 'Jan 2019 - Dec 2019',
  description:
    'Provided technical support to customers using the company’s software.',
};

const hpe = {
  title: 'Mechanical Product Engineer',
  company: 'Tech Company',
  dates: 'Jan 2019 - Dec 2019',
  description:
    'Provided technical support to customers using the company’s software.',
};

export default function WorkPage() {
  return (
    <div>
      <h1 className="font-medium text-2xl mb-8 tracking-tighter">
        Job Experience
      </h1>
      <section>
        <JobRole comp={rescalesoftware} />
        <JobRole comp={rescalesupport} />
        <JobRole comp={hpe} />
      </section>
    </div>
  );
}

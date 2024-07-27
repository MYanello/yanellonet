import React from 'react';
import JobRole from './experience/experienceItem';
import {
  rescalesoftware,
  rescaleseniorsupport,
  rescalesupport,
  hpe,
} from './experience/experienceData';

export default function WorkPage() {
  return (
    <div>
      <h1 className="font-medium text-2xl mb-8 tracking-tighter">
        Job Experience
      </h1>
      <section>
        <JobRole comp={rescalesoftware} />
        <JobRole comp={rescaleseniorsupport} />
        <JobRole comp={rescalesupport} />
        <JobRole comp={hpe} />
      </section>
    </div>
  );
}

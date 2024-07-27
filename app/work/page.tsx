import React from 'react';

import {
  rescalesoftware,
  rescaleseniorsupport,
  rescalesupport,
  hpe,
} from './experienceData';
import JobRole from './experienceItem';

export default function WorkPage() {
  return (
    <div className="w-full b">
      <h1 className="text-foreground font-medium text-2xl mb-8 tracking-tighter">
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

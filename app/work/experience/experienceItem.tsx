import React from 'react';

interface JobExperienceProps {
  title: string;
  company: string;
  dates: string;
  description: string;
}

const JobExperience: React.FC<JobExperienceProps> = ({
  title,
  company,
  dates,
  description,
}) => {
  return (
    <section className="job-experience">
      <h2 className="font-medium text-xl">{title}</h2>
      <p className="text-gray-500">{company}</p>
      <p className="text-gray-500">{dates}</p>
      <p>{description}</p>
    </section>
  );
};

interface JobRoleProps {
  comp: JobExperienceProps;
}

const JobRole: React.FC<JobRoleProps> = ({ comp }) => {
  return (
    <div className="mb-8">
      <JobExperience
        title={comp.title}
        company={comp.company}
        dates={comp.dates}
        description={comp.description}
      />
    </div>
  );
};

export default JobRole;

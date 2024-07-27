interface experience {
  title: string;
  company: string;
  dates: string;
  description: string[];
}

export const rescalesoftware: experience = {
  title: 'Software Engineer',
  company: 'Rescale',
  dates: 'April 2024 - Present',
  description: [
    'Manage PostgreSQL tables, Celery tasks, and API endpoints using the Django Python framework',
    'Expose API endpoints from the frontend of the product using ReactJS',
    'Iterate upon existing cloud networking infrastructure to ensure customer privacy by automating deployment of customer specific Cloud Private Networks (VPC and VNet)',
    'Ensure minimal vulnerabilities across fleet of container images implemented in company cloud infrastructure',
  ],
};

export const rescaleseniorsupport: experience = {
  title: 'Senior Support Engineer',
  company: 'Rescale',
  dates: 'September 2023 - April 2024',
  description: [
    "Recognized as the SME for licensing and networking in the product, contributing to the team's overall expertise.",
    "Developed documentation and training programs along with mentoring new hires, fostering team members' proficiency in networking, licensing, simulations, and HPC",
    '2023 Grit Club Award, voted top 5% performer of the year',
  ],
};

export const rescalesupport: experience = {
  title: 'Support Engineer',
  company: 'Rescale',
  dates: 'Nov 2021 - September 2023',
  description: [
    'Successfully developed proof-of-concepts for network and simulation architecture through active participation in customer calls.',
    'Resolved complex software and MPI issues for simulation suites, improving the reliability and functionality of ANSYS, Siemens and other engineering applications.',
    'Led the migration of internal network infrastructure in the cloud, aligning with security requirements and ensuring a smooth transition between servers.',
    'Collaborated cross-functionally with Field and Engineers to guarantee customer needs were met.',
    'Efficiently managed customer and internal SSH tunnel and IP forwarding proxies, ensuring secure and reliable communication channels.',
    'Played a key role in the development and deployment of IPSec and Wireguard VPN solutions in collaboration with partners and customers.',
    '2022 Grit Club Award, voted top 5% performer of the year',
  ],
};

export const hpe: experience = {
  title: 'Mechanical Product Engineer',
  company: 'Hewlett Packard Enterprise',
  dates: 'May 2019 - Nov 2021',
  description: [
    'Orchestrated the development of automated dashboards, revolutionizing the tracking and reporting of team Key Performance Indicators (KPIs) to upper management.',
    'Evaluated initial products to ensure strict adherence to HPE and regulatory standards, ensuring the highest quality and compliance in product offerings.',
    'Executed a strategic initiative resulting in the reduction of the box portfolio by half, uncovering $1M in billing errors.',
  ],
};

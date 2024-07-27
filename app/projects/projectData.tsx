interface project {
  title: string;
  description: string[];
  link?: string;
}

export const netadmin: project = {
  title: 'Network Administration',
  description: [
    'Established DNS records to facilitate open access to self-hosted services',
    'Implemented a VPN for secure access to SS, NFS and Samba shares.',
    'Configured a self-hosted local DNS for ad-blocking and local hostname resolution.',
    'Operated an NGINX proxy to efficiently forward traffic, and ensured the security of WAN traffic by utilizing SSL certificates.',
  ],
};

export const linuxadmin: project = {
  title: 'Linux Administration',
  description: [
    'Administered a home server utilizing Ubuntu, meticulously configuring a robust and secure environment.',
    'Implemented ZFS pools to enhance data resiliency and deployed a meticulous 3-2-1 backup strategy, safeguarding against data loss and ensuring optimal system uptime.',
  ],
};

export const redis: project = {
  title: 'Redis Caching Proxy',
  description: [
    "Developed a caching proxy leveraging Python's FastAPI to efficiently cache and manage Redis requests.",
    'This implementation optimizes data retrieval by storing frequently accessed information, enhancing response times, and improving overall system performance.',
  ],
  link: 'https://github.com/MYanello/redis-caching',
};

export const firewall: project = {
  title: 'Firewall Configuration',
  description: [
    'Effectively administer firewall resources within the local network to enhance security and privacy.',
    'Configure and monitoring firewall settings to control incoming and outgoing traffic, safeguarding against unauthorized access and potential threats using VLANs, IDS, and Fail2Ban.',
    'Utilize gitops to version control and manage firewall configurations.',
  ],
};

export const containers: project = {
  title: 'Containerization',
  description: [
    'Implemented containerization techniques to efficiently manage development environments, monitor network performance, securely store passwords, and seamlessly enable High-Performance Computing software to operate in the cloud.',
  ],
};

export const reverseproxy: project = {
  title: 'Reverse Proxy',
  description: [
    'Utilized a secure and high-availability (HA) setup using HAproxy and Nginx to reverse proxy services to local applications from the public internet.',
  ],
};

export const site: project = {
  title: 'This Personal Site',
  description: [
    'Developed a personal site using Next.js, React, and Tailwind CSS.',
  ],
  link: 'https://github.com/MYanello/yanellonet/',
};

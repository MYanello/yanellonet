import Link from 'next/link';

const navItems = {
  '/': {
    name: 'work',
  },
  '/projects': {
    name: 'projects',
  },
  'https://notes.yanello.net': {
    name: 'notes',
  },
  'https://github.com/MYanello': {
    name: 'github',
  },
  'https://www.linkedin.com/in/marcusyan/': {
    name: 'linkedin',
  },
};

export function Navbar() {
  return (
    <aside className="-ml-[8px] mb-16 tracking-tight">
      <div className="lg:sticky lg:top-20">
        <nav
          className="flex flex-row items-start relative px-0 pb-0 fade md:overflow-auto scroll-pr-6 md:relative"
          id="nav"
        >
          <div className="flex flex-row space-x-0 pr-10">
            {Object.entries(navItems).map(([path, { name }]) => {
              return (
                <Link
                  key={path}
                  href={path}
                  className="transition-all hover:text-accent text-foreground flex align-middle relative py-1 px-2"
                >
                  {name}
                </Link>
              );
            })}
          </div>
        </nav>
      </div>
    </aside>
  );
}

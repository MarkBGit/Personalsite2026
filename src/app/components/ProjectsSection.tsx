import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';

interface Project {
  id: number;
  title: string;
  subtitle: string;
  color: string;
}

// Placeholder projects - user will customize
const projects: Project[] = [
  { id: 1, title: 'Project Title 1', subtitle: 'Add description', color: '#CC5500' },
  { id: 2, title: 'Project Title 2', subtitle: 'Add description', color: '#4A5D4E' },
  { id: 3, title: 'Project Title 3', subtitle: 'Add description', color: '#5A7D9A' },
  { id: 4, title: 'Project Title 4', subtitle: 'Add description', color: '#A52A2A' },
  { id: 5, title: 'Project Title 5', subtitle: 'Add description', color: '#CC5500' },
  { id: 6, title: 'Project Title 6', subtitle: 'Add description', color: '#4A5D4E' },
];

export function ProjectsSection() {
  return (
    <section className="min-h-screen py-[15px] relative overflow-hidden px-[0px]">
      <div className="max-w-7xl mx-auto px-8 bg-[rgba(0,0,0,0)]">
        <h2 
          className="mb-16 text-center text-[#CC5500]" 
          style={{ fontFamily: 'var(--font-serif)', fontSize: '150%' }}
        >
          The Gallery
        </h2>

        <ResponsiveMasonry
          columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}
        >
          <Masonry gutter="1.5rem">
            {projects.map((project, index) => {
              // Vary heights for masonry effect
              const heights = ['h-64', 'h-80', 'h-72', 'h-96', 'h-64', 'h-88'];
              const height = heights[index % heights.length];

              return (
                <div
                  key={project.id}
                  className={`${height} bg-[#1a1a1a] border-4 rounded-lg overflow-hidden relative group cursor-pointer transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl`}
                  style={{ borderColor: project.color }}
                >
                  {/* Gig Poster Style Layout */}
                  <div className="absolute inset-0 p-6 flex flex-col justify-between">
                    {/* Top Badge */}
                    <div 
                      className="self-start px-4 py-1 text-xs tracking-widest"
                      style={{ 
                        backgroundColor: project.color,
                        fontFamily: 'var(--font-sans)',
                        color: '#ffffff',
                      }}
                    >
                      FEATURED
                    </div>

                    {/* Title */}
                    <div>
                      <h3 
                        className="text-white mb-2 uppercase tracking-tight"
                        style={{ 
                          fontFamily: 'var(--font-serif)',
                        }}
                      >
                        {project.title}
                      </h3>
                      <p 
                        className="text-white/60 italic text-sm"
                        style={{ fontFamily: 'var(--font-sans)' }}
                      >
                        {project.subtitle}
                      </p>
                    </div>

                    {/* Bottom Corner Accent */}
                    <div className="self-end">
                      <div 
                        className="w-12 h-12 rotate-45"
                        style={{ backgroundColor: `${project.color}40` }}
                      />
                    </div>
                  </div>

                  {/* Hover Overlay */}
                  <div 
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center"
                    style={{ backgroundColor: `${project.color}20` }}
                  >
                    <span 
                      className="text-white px-6 py-2 border-2 border-white"
                      style={{ fontFamily: 'var(--font-sans)' }}
                    >
                      VIEW DETAILS
                    </span>
                  </div>
                </div>
              );
            })}
          </Masonry>
        </ResponsiveMasonry>
      </div>
    </section>
  );
}
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";

interface Job {
  id: number;
  title: string;
  position: number; // 1-5 for staff line position
  description: string;
}

// Shared positioning system for staff lines and notes
// Position 1 = bottom line (80%), Position 5 = top line (20%)
const STAFF_LINE_POSITIONS: Record<number, number> = {
  1: 80,  // Bottom line
  2: 65,
  3: 50,  // Middle line
  4: 35,
  5: 20   // Top line
};

// Placeholder jobs - user will customize
// Position matches ID for consistency
const jobs: Job[] = [
  {
    id: 1,
    title: "Associate, Paid Search, 360i (Remote) | Sep 2021 – Jun 2023",
    position: 1,
    description: "Managed multi-million-dollar paid search and shopping budgets across Google, Bing, and Apple platforms, supporting large-scale client accounts. Contributed to the launch of a successful Q4 strategy that exceeded performance benchmarks by 250%. Improved internal workflows and helped lead the implementation of new search strategies to enhance efficiency and performance.",
  },
  {
    id: 2,
    title: "Paid Media Specialist, ItsMarkBenjamin (Remote) | Jan 2021 – Aug 2023",
    position: 2,
    description: "Managed up to 10 client paid media campaigns across multiple industries with monthly budgets ranging from hundreds to $10K+, overseeing strategy, execution, and optimization. Drove strong performance outcomes, including achieving 5x ROAS for an e-commerce retailer and delivering 15 qualified leads at a reduced CPL for a medical client. Consistently delivered results near 97% of benchmark targets through data-driven optimization and performance monitoring.",
  },
  {
    id: 3,
    title: "Marketing Project Manager, Nimble Talent (Remote) | Oct 2023 – Apr 2024",
    position: 3,
    description: "Led six digital marketing projects from intake through delivery, owning scope management, status reporting, and stakeholder coordination. Improved cross-functional workflows by implementing and optimizing Asana usage, enabling smoother execution and clearer accountability. Supported campaign delivery through data gathering, insight development, QA, and presentation creation to ensure polished, client-ready outputs.",
  },
  {
    id: 4,
    title: "Project Manager, Ebiquity PLC (Remote) | May 2024 – Aug 2025",
    position: 4,
    description: "Managed concurrent digital projects totaling $3M+ in value, consistently delivering on time by establishing clear timelines, aligning stakeholders, coordinating internal resources, and maintaining thorough project documentation. Led and supported operational excellence initiatives, including spearheading a process improvement rollout that increased project visibility by 25% and significantly reduced delivery issues. Provided direction across key project phases, ensured high-quality outputs with performance teams, and bridged communication across international teams to enable informed decision-making and optimal outcomes.",
  },
];

export function ExperienceSection() {
  const [selectedJob, setSelectedJob] = useState<number | null>(
    null,
  );
  const [hoveredLine, setHoveredLine] = useState<number | null>(
    null,
  );

  return (
    <section className="min-h-screen py-18 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <h2
          className="mb-12 text-center text-[#CC5500]"
          style={{ fontFamily: "var(--font-serif)", fontSize: '150%' }}
        >
          The Experience
        </h2>

        {/* Musical Staff */}
        <div className="relative h-96 my-12">
          {/* MB Treble Clef */}
          <div
            className="absolute left-8 top-1/2 -translate-y-1/2 text-6xl text-[#CC5500] z-20"
            style={{ fontFamily: "cursive" }}
          >
            ℳℬ
          </div>

          {/* Staff Lines */}
          <div className="absolute inset-0 pt-[0px] pr-[0px] pb-[0px] pl-[128px]">
            {[1, 2, 3, 4, 5].map((line) => (
              <div
                key={line}
                className="absolute h-0.5 w-full transition-all duration-300"
                style={{
                  top: `${STAFF_LINE_POSITIONS[line]}%`,
                  backgroundColor:
                    hoveredLine === line
                      ? "#4A5D4E"
                      : "rgba(255, 255, 255, 0.2)",
                  boxShadow:
                    hoveredLine === line
                      ? "0 0 10px #4A5D4E"
                      : "none",
                }}
              />
            ))}
          </div>

         {/* Musical Notes (Jobs) */}
          {jobs.map((job, index) => {
            const leftPosition = 25 + index * 15; // Spread notes across staff
            const topPosition = STAFF_LINE_POSITIONS[job.position] - 15; // Subtract 15% to adjust note position

            return (
              <motion.div
                key={job.id}
                className="absolute cursor-pointer z-10"
                style={{
                  left: `${leftPosition}%`,
                  top: `${topPosition}%`,
                  transform: 'translateY(-50%)', // Center note on the line
                }}
                whileHover={{ scale: 1.2 }}
                onClick={() =>
                  setSelectedJob(
                    selectedJob === job.id ? null : job.id,
                  )
                }
                onMouseEnter={() =>
                  setHoveredLine(job.position)
                }
                onMouseLeave={() => setHoveredLine(null)}
              >
                {/* Musical Note */}
                <div className="relative">
                  <svg
                    width="48"
                    height="72"
                    viewBox="0 0 48 72"
                    className="drop-shadow-lg"
                  >
                    {/* Note head */}
                    <ellipse
                      cx="16"
                      cy="56"
                      rx="12"
                      ry="10"
                      fill={
                        selectedJob === job.id
                          ? "#CC5500"
                          : "#5A7D9A"
                      }
                      className="transition-colors duration-300"
                    />
                    {/* Note stem */}
                    <rect
                      x="27"
                      y="8"
                      width="2"
                      height="48"
                      fill={
                        selectedJob === job.id
                          ? "#CC5500"
                          : "#5A7D9A"
                      }
                      className="transition-colors duration-300"
                    />
                  </svg>
                  {/* Job title */}
                  <div
                    className="absolute -bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap text-white/70 text-sm"
                    style={{ fontFamily: "var(--font-sans)" }}
                  >
                    {job.title}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Liner Notes (Job Details) */}
        <AnimatePresence mode="wait">
          {selectedJob && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="mt-12 bg-[#1a1a1a] border border-[#CC5500]/30 rounded p-6 max-w-3xl mx-auto"
            >
              <h3
                className="text-[#CC5500] mb-3"
                style={{ fontFamily: "var(--font-serif)" }}
              >
                {jobs.find((j) => j.id === selectedJob)?.title}
              </h3>
              <p
                className="text-white/80 italic opacity-60"
                style={{ fontFamily: "var(--font-sans)" }}
              >
                {
                  jobs.find((j) => j.id === selectedJob)
                    ?.description
                }
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
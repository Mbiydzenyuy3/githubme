import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className='min-h-screen bg-zinc-50 dark:bg-zinc-950'>
      {/* Hero Section */}
      <header className='max-w-4xl mx-auto px-6 py-20'>
        <div className='space-y-6'>
          <div className='inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 text-sm font-medium'>
            <span className='w-2 h-2 rounded-full bg-green-500 animate-pulse'></span>
            Open to Work
          </div>

          <h1 className='text-4xl md:text-5xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50'>
            Full Stack Developer | Building Scalable Web Applications
          </h1>

          <p className='text-lg text-zinc-600 dark:text-zinc-400 max-w-2xl'>
            Passionate developer with expertise in building responsive,
            user-friendly applications. Focused on delivering clean code and
            exceptional user experiences.
          </p>

          <div className='flex flex-wrap gap-4'>
            <a
              href='mailto:your.email@example.com'
              className='inline-flex items-center justify-center px-5 py-2.5 text-sm font-medium rounded-full bg-zinc-900 text-white dark:bg-zinc-50 dark:text-zinc-900 hover:opacity-90 transition-opacity'
            >
              Contact Me
            </a>
            <a
              href='https://github.com/yourusername'
              target='_blank'
              rel='noopener noreferrer'
              className='inline-flex items-center justify-center px-5 py-2.5 text-sm font-medium rounded-full border border-zinc-300 dark:border-zinc-700 text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors'
            >
              GitHub Profile
            </a>
          </div>
        </div>
      </header>

      {/* Tech Stack Section */}
      <section className='max-w-4xl mx-auto px-6 py-16 border-t border-zinc-200 dark:border-zinc-800'>
        <h2 className='text-xl font-semibold text-zinc-900 dark:text-zinc-50 mb-6'>
          Technologies & Tools
        </h2>
        <div className='flex flex-wrap gap-3'>
          {[
            "JavaScript",
            "TypeScript",
            "React",
            "Next.js",
            "Node.js",
            "Tailwind CSS",
            "PostgreSQL",
            "Git",
            "REST APIs",
            "HTML5",
            "CSS3"
          ].map((tech) => (
            <span
              key={tech}
              className='px-3 py-1.5 text-sm font-medium rounded-lg bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-zinc-700 dark:text-zinc-300'
            >
              {tech}
            </span>
          ))}
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className='max-w-4xl mx-auto px-6 py-16 border-t border-zinc-200 dark:border-zinc-800'>
        <h2 className='text-xl font-semibold text-zinc-900 dark:text-zinc-50 mb-6'>
          Featured Projects
        </h2>

        <div className='grid gap-6 md:grid-cols-2'>
          {/* Project Card 1 */}
          <article className='p-6 rounded-xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 hover:border-zinc-300 dark:hover:border-zinc-700 transition-colors'>
            <div className='space-y-4'>
              <div className='flex items-center justify-between'>
                <h3 className='text-lg font-semibold text-zinc-900 dark:text-zinc-50'>
                  E-Commerce Platform
                </h3>
                <span className='text-xs font-medium px-2 py-1 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400'>
                  Fullstack
                </span>
              </div>
              <p className='text-sm text-zinc-600 dark:text-zinc-400'>
                A full-featured e-commerce platform with user authentication,
                shopping cart, payment integration, and admin dashboard.
              </p>
              <div className='flex flex-wrap gap-2'>
                {["Next.js", "PostgreSQL", "Stripe", "Tailwind"].map((tech) => (
                  <span
                    key={tech}
                    className='text-xs text-zinc-500 dark:text-zinc-400'
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className='flex gap-4 pt-2'>
                <Link
                  href='#'
                  className='text-sm font-medium text-zinc-900 dark:text-zinc-50 hover:underline'
                >
                  View Code
                </Link>
                <Link
                  href='#'
                  className='text-sm font-medium text-zinc-900 dark:text-zinc-50 hover:underline'
                >
                  Live Demo
                </Link>
              </div>
            </div>
          </article>

          {/* Project Card 2 */}
          <article className='p-6 rounded-xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 hover:border-zinc-300 dark:hover:border-zinc-700 transition-colors'>
            <div className='space-y-4'>
              <div className='flex items-center justify-between'>
                <h3 className='text-lg font-semibold text-zinc-900 dark:text-zinc-50'>
                  Task Management App
                </h3>
                <span className='text-xs font-medium px-2 py-1 rounded-full bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-400'>
                  Frontend
                </span>
              </div>
              <p className='text-sm text-zinc-600 dark:text-zinc-400'>
                A collaborative task management application with real-time
                updates, drag-and-drop kanban boards, and team collaboration
                features.
              </p>
              <div className='flex flex-wrap gap-2'>
                {["React", "TypeScript", "Redux", "Firebase"].map((tech) => (
                  <span
                    key={tech}
                    className='text-xs text-zinc-500 dark:text-zinc-400'
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className='flex gap-4 pt-2'>
                <Link
                  href='#'
                  className='text-sm font-medium text-zinc-900 dark:text-zinc-50 hover:underline'
                >
                  View Code
                </Link>
                <Link
                  href='#'
                  className='text-sm font-medium text-zinc-900 dark:text-zinc-50 hover:underline'
                >
                  Live Demo
                </Link>
              </div>
            </div>
          </article>

          {/* Project Card 3 */}
          <article className='p-6 rounded-xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 hover:border-zinc-300 dark:hover:border-zinc-700 transition-colors'>
            <div className='space-y-4'>
              <div className='flex items-center justify-between'>
                <h3 className='text-lg font-semibold text-zinc-900 dark:text-zinc-50'>
                  Weather Dashboard
                </h3>
                <span className='text-xs font-medium px-2 py-1 rounded-full bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400'>
                  Frontend
                </span>
              </div>
              <p className='text-sm text-zinc-600 dark:text-zinc-400'>
                An interactive weather dashboard with location-based forecasts,
                historical data visualization, and severe weather alerts.
              </p>
              <div className='flex flex-wrap gap-2'>
                {["React", "Chart.js", "Weather API", "CSS"].map((tech) => (
                  <span
                    key={tech}
                    className='text-xs text-zinc-500 dark:text-zinc-400'
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className='flex gap-4 pt-2'>
                <Link
                  href='#'
                  className='text-sm font-medium text-zinc-900 dark:text-zinc-50 hover:underline'
                >
                  View Code
                </Link>
                <Link
                  href='#'
                  className='text-sm font-medium text-zinc-900 dark:text-zinc-50 hover:underline'
                >
                  Live Demo
                </Link>
              </div>
            </div>
          </article>

          {/* Project Card 4 */}
          <article className='p-6 rounded-xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 hover:border-zinc-300 dark:hover:border-zinc-700 transition-colors'>
            <div className='space-y-4'>
              <div className='flex items-center justify-between'>
                <h3 className='text-lg font-semibold text-zinc-900 dark:text-zinc-50'>
                  REST API Service
                </h3>
                <span className='text-xs font-medium px-2 py-1 rounded-full bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-400'>
                  Backend
                </span>
              </div>
              <p className='text-sm text-zinc-600 dark:text-zinc-400'>
                A scalable RESTful API with authentication, rate limiting,
                comprehensive documentation, and automated testing.
              </p>
              <div className='flex flex-wrap gap-2'>
                {["Node.js", "Express", "MongoDB", "JWT"].map((tech) => (
                  <span
                    key={tech}
                    className='text-xs text-zinc-500 dark:text-zinc-400'
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className='flex gap-4 pt-2'>
                <Link
                  href='#'
                  className='text-sm font-medium text-zinc-900 dark:text-zinc-50 hover:underline'
                >
                  View Code
                </Link>
                <Link
                  href='#'
                  className='text-sm font-medium text-zinc-900 dark:text-zinc-50 hover:underline'
                >
                  Documentation
                </Link>
              </div>
            </div>
          </article>
        </div>
      </section>

      {/* About Section */}
      <section className='max-w-4xl mx-auto px-6 py-16 border-t border-zinc-200 dark:border-zinc-800'>
        <h2 className='text-xl font-semibold text-zinc-900 dark:text-zinc-50 mb-6'>
          About Me
        </h2>
        <div className='prose prose-zinc dark:prose-invert max-w-none'>
          <p className='text-zinc-600 dark:text-zinc-400'>
            I am a dedicated Full Stack Developer with a passion for building
            elegant solutions to complex problems. With a strong foundation in
            both frontend and backend development, I specialize in creating
            responsive, accessible, and performant web applications.
          </p>
          <p className='text-zinc-600 dark:text-zinc-400 mt-4'>
            My journey in software development has equipped me with skills in
            modern JavaScript frameworks, database design, and API development.
            I continuously seek to learn and adapt to new technologies while
            following industry best practices.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className='max-w-4xl mx-auto px-6 py-16 border-t border-zinc-200 dark:border-zinc-800'>
        <h2 className='text-xl font-semibold text-zinc-900 dark:text-zinc-50 mb-6'>
          Get In Touch
        </h2>
        <div className='space-y-4'>
          <p className='text-zinc-600 dark:text-zinc-400'>
            I am currently open to job opportunities. Feel free to reach out if
            you have questions or would like to collaborate on a project.
          </p>
          <div className='flex flex-col gap-2'>
            <a
              href='mailto:your.email@example.com'
              className='text-zinc-900 dark:text-zinc-50 hover:underline font-medium'
            >
              your.email@example.com
            </a>
            <div className='flex gap-4 pt-2'>
              <a
                href='https://github.com/yourusername'
                target='_blank'
                rel='noopener noreferrer'
                className='text-sm text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-50'
              >
                GitHub
              </a>
              <a
                href='https://linkedin.com/in/yourusername'
                target='_blank'
                rel='noopener noreferrer'
                className='text-sm text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-50'
              >
                LinkedIn
              </a>
              <a
                href='https://twitter.com/yourusername'
                target='_blank'
                rel='noopener noreferrer'
                className='text-sm text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-50'
              >
                Twitter
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className='max-w-4xl mx-auto px-6 py-8 border-t border-zinc-200 dark:border-zinc-800'>
        <p className='text-sm text-zinc-500 dark:text-zinc-400 text-center'>
          © {new Date().getFullYear()} Your Name. Built with Next.js and
          Tailwind CSS.
        </p>
      </footer>
    </div>
  );
}

import { Link } from 'react-router-dom'

function Home() {
  return (
    <section className="flex flex-col items-center justify-center min-h-[calc(100vh-80px)] px-4 text-center">
      <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white mb-4">
        Hi, I'm <span className="text-blue-600 dark:text-blue-400">Aaram Jehoniah</span>
      </h2>
      <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 max-w-xl mb-6">
        I’m a full-stack developer passionate about building modern, responsive web apps.
      </p>

      <div className="flex flex-wrap gap-3 justify-center mb-6">
        {['React', 'Tailwind CSS', 'TypeScript', 'Node.js'].map(skill => (
          <span
            key={skill}
            className="px-3 py-1 bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 rounded-full text-sm font-medium"
          >
            {skill}
          </span>
        ))}
      </div>

      <Link
        to="/projects"
        className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg shadow transition"
      >
        View My Projects
      </Link>
    </section>
  )
}

export default Home
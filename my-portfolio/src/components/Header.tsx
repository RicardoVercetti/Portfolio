import { Link, useLocation } from 'react-router-dom';

function Header() {
    const location = useLocation(); // why is this?

    const navLinks = [
        { path: '/', label: 'Home' },
        { path: '/projects', label: 'Projects' },
        { path: '/blog', label: 'Blog' },
        { path: '/contact', label: 'Contact' },
    ];

    return (
    <header className="bg-white dark:bg-gray-800 shadow">
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-xl font-bold text-blue-600 dark:text-blue-300">
          DevProfile
        </h1>

        <ul className="flex gap-6 text-gray-700 dark:text-gray-200">
          {navLinks.map(({ path, label }) => (
            <li key={path}>
              <Link
                to={path}
                className={`hover:text-blue-500 transition-colors ${
                  location.pathname === path ? 'font-bold underline' : ''
                }`}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );

}

export default Header;
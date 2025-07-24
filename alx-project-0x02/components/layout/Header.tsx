import Link from 'next/link';

const Header: React.FC = () => (
  <header className="bg-blue-500 p-4 text-white">
    <h1 className="text-2xl">Next.js Project</h1>
    <nav>
      <ul className="flex space-x-4">
        <li>
          <Link href="/home" className="text-white hover:text-gray-300">
            Home
          </Link>
        </li>
        <li>
          <Link href="/about" className="text-white hover:text-gray-300">
            About
          </Link>
        </li>
        <li>
          <Link href="/posts" className="text-white hover:text-gray-300">
            Posts
          </Link>
        </li>
      </ul>
    </nav>
  </header>
);

export default Header;

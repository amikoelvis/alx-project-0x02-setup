import Link from 'next/link';

const Header: React.FC = () => (
  <header className="bg-blue-500 p-4 text-white">
    <h1 className="text-2xl">Next.js Project</h1>
    <nav>
      <ul className="flex space-x-4">
        <li>
          <Link href="/home">
            <a className="text-white hover:text-gray-300">Home</a>
          </Link>
        </li>
        <li>
          <Link href="/about">
            <a className="text-white hover:text-gray-300">About</a>
          </Link>
        </li>
      </ul>
    </nav>
  </header>
)

export default Header;

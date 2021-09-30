import Link from 'next/link';

const Header = () => {
  return (
    <div>
      <header>
        <ul>
          <li>
            <Link href="/blog"> Blog</Link>
          </li>
          <li>
            <Link href="/users">User</Link>
          </li>
          <li>
            <Link href="">Blog</Link>
          </li>
        </ul>
      </header>
    </div>
  );
};

export default Header;

import Link from 'next/link';
import styles from './Header.module.css';

const Header = () => {
  return (
    <div>
      <header className={styles.container}>
        <ul className={styles.list}>
          <li className={styles.item}>
            <Link href="/blog"> Blog</Link>
          </li>
          <li className={styles.item}>
            <Link href="/users">User</Link>
          </li>
          <li className={styles.item}>
            <Link href="">Blog</Link>
          </li>
        </ul>
      </header>
    </div>
  );
};

export default Header;

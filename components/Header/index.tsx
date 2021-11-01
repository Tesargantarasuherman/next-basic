import Link from 'next/link';
import styles from './Header.module.css';
import { useRouter } from 'next/router';
import { Button} from 'semantic-ui-react'

const Header = () => {
  const router = useRouter();

  const submitLogout = async () => {
    let token = localStorage.getItem('token');
    try {
      const res = await fetch('http://localhost:3000/api/user/logout', {
        method: "POST",
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ token:token})
      },)
      router.push("/")  
    }
    catch (error) {
      console.log(error)
    }
  }
  return (
    <div>
      <header className={styles.container}>
        <ul className={styles.list}>
          <li className={styles.item}>
            <Link href="/">Home</Link>
          </li>
          <li className={styles.item}>
            <Link href="/blog"> Blog</Link>
          </li>
          <li className={styles.item}>
            <Link href="/users">About Me</Link>
          </li>
          <li className={styles.item}>
            <Button onClick={submitLogout}>Logout</Button>
          </li>
        </ul>
      </header>
    </div>
  );
};

export default Header;

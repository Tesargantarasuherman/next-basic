import type { NextPage } from 'next'
import Link from 'next/link';
const Home: NextPage = () => {
  return (
    <header>
      <ul>
        <li><Link href="/blog">Blog</Link></li>
        <li><Link href="/users">User</Link></li>
        <li><Link href="">Blog</Link></li>
      </ul>
    </header>
  )
}

export default Home

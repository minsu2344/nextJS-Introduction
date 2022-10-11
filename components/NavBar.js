import Link from "next/link";
import { useRouter } from "next/router";
import styles from './NavBar.module.css';

export default function NavBar() {
  const router = useRouter();

  return(
    <nav>
      <Link href='/'>
        {/* 백틱을 이용한 복수 className */}
        <a className={`${styles.link} ${router.pathname === '/' ? styles.active : ''}`}>Home</a>
      </Link>
      <Link href='/about'>
        {/* 배열과 join()을 이용한 복수 className */}
        <a className={[styles.link, router.pathname === '/about' ? styles.active : ''].join(' ')}>About</a>
      </Link>
    </nav>
  )
}
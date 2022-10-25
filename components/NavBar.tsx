import { ActiveLink } from "./ActiveLink"
import styles from './Navbar.module.css'

export default function NavBar() {
  return (
   <nav className={styles.menu_container}>
    <ActiveLink text='Home' href="/"/>
    <ActiveLink text='About' href="/about"/>
    <ActiveLink text='Contact' href="/contact"/>
   </nav>
  )
}

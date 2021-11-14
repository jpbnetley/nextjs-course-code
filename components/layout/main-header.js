import Link from 'next/link'
import styles from './main-header.module.css'

const { header, logo, navigation } = styles

const MainHeader = () => {
  return (
    <head className={header}>
      <div className={logo}>
        <Link href='/'>NextEvents</Link>
      </div>
      <nav className={navigation}>
        <ul>
          <li>
            <Link href='/events'>Browse All Events</Link>
          </li>
        </ul>
      </nav>
    </head>
  )
}

export default MainHeader
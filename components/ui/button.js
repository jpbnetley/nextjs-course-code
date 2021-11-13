import Link from 'next/link'
import { btn } from './button.module.css'

const Button = ({ link, children }) => {
  return <Link href={link}>
    <a className={btn}>{children}</a>
  </Link>

}

export default Button
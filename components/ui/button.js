import Link from 'next/link'
import { btn } from './button.module.css'

const Button = ({ link, children, onClick }) => {
  if (link) {
    return <Link href={link}>
      <a className={btn}>{children}</a>
    </Link>
  }

  return (
    <button onClick={onClick} className={btn}>{children}</button>
  )
}

export default Button
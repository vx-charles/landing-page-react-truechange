import logoImg from '../../assets/logo.svg'
import './styles.scss'

export function Header() {
  return (
    <header>
      <img src={logoImg} alt="True Change logo" />
      <nav>
        <ul className="menu">
          <li>
            <a href="/#" className="menu__link">Home</a>
          </li>
          <li>
            <a href="/#" className="menu__link">Blog</a>
          </li>
          <li>
            <a href="/#" className="menu__link">Career</a>
          </li>
          <li>
            <a href="/#" className="menu__link">Contact</a>
          </li>
        </ul>
      </nav>
    </header>
  )
}
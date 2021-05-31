import { useState } from 'react'
import logoImg from '../../assets/logo.svg'
import './styles.scss'

export function Header() {
  const [active, setActive] = useState(false)

  function handleActiveMenu() {
    return setActive(!active)
  }

  return (
    <header>
      <img src={logoImg} alt="True Change logo" />
      <div className={active ? "hamburger open" : "hamburger"} onClick={handleActiveMenu}>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <nav className={active ? "menu active" : "menu"}>
        <ul className="menu__ul">
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
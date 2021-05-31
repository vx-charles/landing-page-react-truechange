import logoImg from '../../assets/logo.svg'
import facebookImg from '../../assets/Facebook.svg'
import instagramImg from '../../assets/Instagram.svg'
import twitterImg from '../../assets/Twitter.svg'
import './styles.scss'

export function Footer() {
  return (
    <footer>
      <div className="footer">
        <img src={logoImg} alt="True Change logo footer" />
        <div className="footer__socials">
          <a className="footer__link" href="/#">
            <img className="footer__img" src={facebookImg} alt="Facebook icon" />
          </a>
          <a className="footer__link" href="/#">
            <img className="footer__img" src={twitterImg} alt="Twitter icon" />
          </a>
          <a className="footer__link" href="/#">
            <img className="footer__img" src={instagramImg} alt="Instagram icon" />
          </a>
        </div>
        <div className="footer__copyright">
          ©2020trechange
        </div>
      </div>
    </footer>
  )
}
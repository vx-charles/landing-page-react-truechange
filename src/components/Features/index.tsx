import bannerImg from '../../assets/banner-img2.svg'
import checkImg from '../../assets/check-green.svg'
import './styles.scss'

export function Features() {
  return (
    <section className="features">
      <div className="features__left">
        <img src={bannerImg} alt="Banner 2" />
      </div>
      <div className="features__right">
        <div className="features__title">
          We Provide Many Features You Can Use
        </div>
        <div className="features__text">
          You can explore the features that we provide with fun and have their own functions each feature.
        </div>
        <div className="features__itens">
          <ul>
            <li>
              <img src={checkImg} alt="Check" />Powerfull online protection.
            </li>          
            <li>
              <img src={checkImg} alt="Check" />Internet without borders.
            </li>
            <li>
              <img src={checkImg} alt="Check" />Supercharged VPN.
            </li>
            <li>
              <img src={checkImg} alt="Check" />No specific time limits.
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}
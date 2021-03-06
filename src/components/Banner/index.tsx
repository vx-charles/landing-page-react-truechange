import bannerImg from '../../assets/banner-img.svg'
import './styles.scss'

export function Banner() {
  return (
    <section className="banner">
      <div className="banner__description">
        <div className="banner__title">
          Want anything to be easy with <strong>Truechange.</strong>
        </div>
        <div className="banner__text">
          Provide a network for all your needs with ease and fun using <strong>Truechange</strong> discover interesting features from us.
        </div>
        <button className="banner__btn btn-red" type="button">Get Started</button>
      </div>
      <figure className="banner__figure">
        <img className="banner__img" loading="lazy" src={bannerImg} alt="Banner" />
      </figure>
    </section>
  )
}
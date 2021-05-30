import userImg from '../../assets/user.svg'
import locationImg from '../../assets/location.svg'
import serverImg from '../../assets/server.svg'
import './styles.scss'

export function InfoData() {
  return (
    <section className="info-data">
      <div className="info-data__items">
        <div className="info-data__item">
          <img src={userImg} alt="User icon" />
          <div className="info-data__content">
            <span>90+</span>
            <span>Users</span>
          </div>
        </div>
        <div className="info-data__item">
          <img src={locationImg} alt="Location icon" />
          <div className="info-data__content">
            <span>30+</span>
            <span>Locations</span>
          </div>
        </div>
        <div className="info-data__item">
          <img src={serverImg} alt="Server icon" />
          <div className="info-data__content">
            <span>50+</span>
            <span>Servers</span>
          </div>
        </div>
      </div>
    </section>
  )
}
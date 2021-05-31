import { useEffect, useState } from 'react'
import { api } from '../../services/api'

import Slider from "react-slick"
import "../../../node_modules/slick-carousel/slick/slick.css"
import "../../../node_modules/slick-carousel/slick/slick-theme.css"
import loadingImg from '../../assets/loading.svg'

import './styles.scss'

interface BlogProps {
  id: number;
  title: string;
  thumbnailUrl: string;
}

export function Blog() {

  const [loading, setLoading] = useState(true)
  const [list, setList] = useState<BlogProps[]>([])

  useEffect(() => {
    setTimeout(() => {
      api.get('photos')
      .then(resp => setList(resp.data.slice(0,12)))
      setLoading(false)
    }, 1300)
  }, [])

  const blogList = () => (
    list.map(article => (
      <article key={article.id} className="blog__article">
        <img className="blog__img" src={article.thumbnailUrl} alt={"Thumbnail-" + article.id} />
        <div className="blog__content">
          <div className="blog__titleArticle">News title {article.id}</div>
          <div className="blog__descArticle">
            {
              article.title.length > 40
                ? article.title.slice(0, 57) + '...'
                : article.title
            }
          </div>
        </div>
      </article>
    ))    
  )

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  }

  return (
    <section className="blog-container">
      <div className="blog">
        <div className="blog__title">Blog</div>
        <div className="blog__articles">
          {
            !loading ?
              <Slider { ...settings }>
                {blogList()}
              </Slider>
            : <div className="blog__loading"><img src={loadingImg} alt="Loading..." /></div>
          }
        </div>
      </div>
    </section>
  )
}
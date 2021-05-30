import { useEffect, useState } from 'react'
import { api } from '../../services/api'

import Slider from "react-slick";
import "../../../node_modules/slick-carousel/slick/slick.css";
import "../../../node_modules/slick-carousel/slick/slick-theme.css";

import './styles.scss'

interface BlogProps {
  id: number;
  title: string;
  thumbnailUrl: string;
}

export function Blog() {

  const [loading, setLoading] = useState(false)
  const [list, setList] = useState<BlogProps[]>([])

  useEffect(() => {
    setTimeout(() => {
      api.get('photos')
      .then(resp => setList(resp.data.slice(0,12)))
      setLoading(true)
    }, 1300)
  }, [])

  const blogList = () => (
    loading ? list.map(article => (
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
    : <div className="blog__loading">Loading...</div>
  )

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 3,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
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
          <Slider { ...settings }>
            {blogList()}
          </Slider>
        </div>
      </div>
    </section>
  )
}
import * as React from 'react';
import Swiper from 'swiper/js/swiper.min'
import 'swiper/css/swiper.min.css'
/**
 * banner模块
 */
interface Props {
   list:Array<Record<string, any>>
 }
 interface itemProps {
   url:string
   id:any
 }
export class Carousel extends React.Component<Props,any> {
  componentDidMount() {
      this.initSwiper()
  }
  initSwiper = () => {
      new Swiper('.swiper-container', {
          // direction: 'vertical',//竖向轮播
          loop: true,//无缝轮播
          speed: 300,
          autoplay: {
              delay: 3000
          },
          pagination: {//小圆点分页
              el: '.swiper-pagination',
          },
      })
  }
  public render(): React.ReactNode {
      let { list } = this.props
      return <div className="swiper-container">
          <div className="swiper-wrapper">
              {
                  list && list.map(({ url, id }:itemProps) => {
                      return <img key={id} className="swiper-slide" src={url} alt="" />
                  })
              }
          </div>
          <div className="swiper-pagination" />
      </div>
  }
}
import * as React from 'react';
import './style.scss'
import {getHome} from '../../api'
import {SearchBar} from 'antd-mobile';
// import ReactSwiper from 'reactjs-swiper';
import Swiper from 'swiper/js/swiper.min'
import 'swiper/css/swiper.min.css'

interface Props {

}

interface State {
    banner: Array<Record<string, any>>
}

interface CarouselProps {
    imageList?: Array<Record<string, any>>
}

const Carousel = (props: CarouselProps) => {
    let {imageList} = props
    return <div className="swiper-container">
        <div className="swiper-wrapper">
            {
                imageList && imageList.map(({url, id}) => {
                    return <img key={id} className="swiper-slide" src={url} alt=""/>
                })
            }
        </div>
        <div className="swiper-pagination"></div>
    </div>
}
export default class Home extends React.Component<Props, State> {
    state = {
        banner: []
    }
    public async componentWillMount(): Promise<any> {
        try {
            let initData: any = await getHome()
            let {banner} = initData
            this.setState({
                banner
            },()=>{
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
            })
        } catch (e) {
            console.log(e);
        }
    }

    public render(): React.ReactNode {
        let {banner} = this.state
        console.log(banner);
        return <div className="home-body">
            <SearchBar placeholder="Search" maxLength={8}/>
            <Carousel imageList={banner}></Carousel>
        </div>
    }
}

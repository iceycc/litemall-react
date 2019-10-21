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
    banner: Array<Record<string, any>>,
    channel: Array<Record<string, any>>,
}

interface CarouselProps {
    banner?: Array<Record<string, any>>,

}

const Carousel = (props: CarouselProps) => {
    let {banner} = props
    return <div className="swiper-container">
        <div className="swiper-wrapper">
            {
                banner && banner.map(({url, id}) => {
                    return <img key={id} className="swiper-slide" src={url} alt=""/>
                })
            }
        </div>
        <div className="swiper-pagination"></div>
    </div>
}
interface ChannelProps {
    channel?: Array<Record<string, any>>,

}
const Channel = (props:ChannelProps) =>{
    let {channel} = props
    return <div className="home-channel">
        {
            channel && channel.map(({id,name,iconUrl})=>{
                return <div className="channel-item" key={id}>
                    <img src={iconUrl} alt=""/>
                    <p>{name}</p>
                </div>
            })
        }
    </div>
}
export default class Home extends React.Component<Props, State> {
    state = {
        banner: [],
        channel:[]
    }
    public async componentWillMount(): Promise<any> {
        try {
            let initData: any = await getHome()
            let {banner,channel} = initData
            this.setState({
                banner, channel
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
        let {banner,channel} = this.state
        console.log('banner',banner);
        console.log('channel',channel);
        return <div className="home-body">
            <SearchBar placeholder="Search" maxLength={8}/>
            <Carousel banner={banner}></Carousel>
            <Channel channel={channel}></Channel>
        </div>
    }
}

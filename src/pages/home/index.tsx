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
    couponList: Array<Record<string, any>>,
    brandList: Array<Record<string, any>>,
}

type ListType = {
    [Key in keyof State]?: State[Key]
}

const Carousel = (props: ListType) => {
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

const Channel = (props: ListType) => {
    let {channel} = props
    return <div className="home-channel">
        {
            channel && channel.map(({id, name, iconUrl}) => {
                return <div className="channel-item" key={id}>
                    <img src={iconUrl} alt=""/>
                    <p>{name}</p>
                </div>
            })
        }
    </div>
}
const CouponList = (props:ListType) =>{
    let {couponList} = props
    return <div className="home-coupon-list">
        <p className="coupon-list-title">优惠卷</p>
        {
            couponList && couponList.map(({id,discount,desc,tag,days,name})=>{
                return <div className="home-coupon-item" key={id}>
                    {/*days: 10*/}
                    {/*desc: "全场通用"*/}
                    {/*discount: 5*/}
                    {/*id: 1*/}
                    {/*min: 99*/}
                    {/*name: "限时满减券"*/}
                    {/*tag: "无限制"*/}
                    <div className="coupon-item-money">
                        <p><i>¥</i> <span>{discount}</span> <span>元</span></p>
                        <h2>{name}</h2>
                    </div>
                    <p><span>{desc}</span> - <span>{tag}</span> - 有效期: <span>{days}</span></p>
                </div>
            })
        }
    </div>
}
const BrandList = ()=>{
    return <div></div>
}
export default class Home extends React.Component<Props, State> {
    state = {
        banner: [],
        channel: [],
        couponList: [],
        brandList: []
    }

    public async componentWillMount(): Promise<any> {
        try {
            let initData: any = await getHome()
            let {banner, channel,couponList,brandList} = initData
            this.setState({
                banner, channel,couponList,brandList
            }, () => {
                new Swiper('.swiBrandListper-container', {
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
        let {banner, channel, couponList,brandList} = this.state
        console.log('banner', banner);
        console.log('channel', channel);
        console.log('couponList', couponList);
        console.log('brandList', brandList);
        return <div className="home-body">
            <SearchBar placeholder="搜索" maxLength={8}/>
            <Carousel banner={banner}/>
            <Channel channel={channel}/>
            <CouponList couponList={couponList}/>
            <BrandList/>
        </div>
    }
}

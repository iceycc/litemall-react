import * as React from 'react';
import './style.scss'
import { getHome } from '../../api'
import { SearchBar } from 'antd-mobile';
import Swiper from 'swiper/js/swiper.min'
import 'swiper/css/swiper.min.css'
// import PropTypes from 'prop-types'
import { ThemeContext } from '../../App'
import LimTabBar from 'src/components/LimTabBar'
// interface Props {
//     [propName:string]:any
// }

interface State {
    banner: Array<Record<string, any>>,
    channel: Array<Record<string, any>>,
    couponList: Array<Record<string, any>>,
    brandList: Array<Record<string, any>>,
    goItemsCategory:any
}

type ListType = {
    [Key in keyof State]?: State[Key]
}

/**
 * banner模块
 */
class Carousel extends React.Component<ListType,any> {
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
        let { banner } = this.props
        return <div className="swiper-container">
            <div className="swiper-wrapper">
                {
                    banner && banner.map(({ url, id }) => {
                        return <img key={id} className="swiper-slide" src={url} alt="" />
                    })
                }
            </div>
            <div className="swiper-pagination" />
        </div>
    }
}
/**
 * 渠道模块组件
 * @param props
 */
// React.memo() 和 PureComponent 很相似，它帮助我们控制何时重新渲染组件。
const Channel = React.memo((props: ListType) => {
    let { channel, goItemsCategory} = props
    // /items/category
    return <div className="home-channel">
        {
            channel && channel.map(({ id, name, iconUrl }) => {
                return <div className="channel-item" key={id} onClick={()=>{goItemsCategory(id)}}>
                    <img src={iconUrl} alt="" />
                    <p>{name}</p>
                </div>
            })
        }
    </div>
})
/**
 * 优惠卷组件
 * @param props
 */
const CouponList = (props: ListType): any => {
    let { couponList } = props
    return <ThemeContext.Consumer>
        {
            (ctx) => {
                console.log(ctx.theme)
                return <div className="home-coupon-list">
                    <p className="coupon-list-title">优惠卷</p>
                    {
                        couponList && couponList.map(({ id, discount, desc, tag, days, name }) => {
                            return <div className="home-coupon-item" key={id}>
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
        }
    </ThemeContext.Consumer>

}
/**
 *
 */
class BrandList extends React.Component {
    // static contextTypes = {
    //     propA: PropTypes.string,
    //     methodA: PropTypes.func
    // }
    render(): React.ReactNode {
        // console.log(this.context.propA)
        return <div>
        </div>
    }
}

 class Home extends React.Component<any, any> {
    state = {
        banner: [],
        channel: [],
        couponList: [],
        brandList: []
    }
    // // 声明Context对象属性
    // static childContextTypes = {
    //     propA: PropTypes.string,
    //     methodA: PropTypes.func
    // }
    //
    // // 返回Context对象，方法名是约定好的
    // getChildContext() {
    //     return {
    //         propA: 'propA',
    //         methodA: () => 'methodA'
    //     }
    // }
    public async componentWillMount(): Promise<any> {
        try {
            let initData: any = await getHome()
            let { banner, channel, couponList, brandList } = initData
            this.setState({
                banner, channel, couponList, brandList
            })
        } catch (e) {
            console.log(e);
        }
    }

    public render(): React.ReactNode {
        let { banner, channel, couponList, brandList } = this.state
        console.log('brandList', brandList);
        return <div className="home-body">
            <SearchBar placeholder="搜索" maxLength={8} />
            {banner && banner.length > 0 ? <Carousel banner={banner} /> : null}
            <Channel channel={channel} goItemsCategory={(id:number) => {this.props.history.push('/items-category?id='+id)}}/>
            <CouponList couponList={couponList} />
            <BrandList />
            {/*<button onClick={()=>{this.props.history.push('/order')}}>跳转</button>*/}
        </div>
    }
}
export default LimTabBar('Tab1',Home)

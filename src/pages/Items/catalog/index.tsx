import * as React from 'react';
import './style.scss'
import LimTabBar from 'src/components/LimTabBar'
import { SearchBar } from 'antd-mobile';
import { catalogList, getCateItemList } from 'src/api/index';
import Tabs from './components/tabs'

interface State{
    navList: Array<Record<string, any>>,
    contentList: Array<Record<string, any>>,
    loading: Boolean,
    currentCate: {
        picUrl?: string,
        desc?: string
    }
}

class Items extends React.Component<any,State>{
    state = {
        navList: [],
        contentList: [],
        loading: true,
        currentCate: {picUrl:'',desc:''}
    }
    public componentDidMount(){
        this.getInitData()
    }
    public async getInitData(): Promise<any>{
        let initData:any = await catalogList()
        let { categoryList, currentSubCategory,currentCategory } = initData
        this.setState({
            navList: categoryList,
            contentList: currentSubCategory,
            loading: false,
            currentCate: currentCategory
        })
    }
    public tabCallback(id: string | number, desc: string, picUrl: string):void {
        // 切换导航，获取右侧数据
        getCateItemList({id: id}).then((res: any)=>{
            this.setState({
                currentCate: res.currentCategory,
                contentList: res.currentSubCategory
            })
        })
    }
    tabItemClick=(id:string)=>{
        this.props.history.push(`/items-category?id=${id}`)
     }

    public render(): React.ReactNode {
        const { navList, contentList, loading, currentCate } = this.state

        return <div>
            <SearchBar placeholder="点击前往搜索" maxLength={8} />
            <div className="itemContent">
                {loading ? null :
                <Tabs
                tabList={navList}
                tabCallback={(id: string | number, desc: string, picUrl: string)=>{this.tabCallback(id, desc, picUrl)}}>
                    <div className={'tabContent'}>
                        <div className={'imgWrap'}><img src={currentCate.picUrl}></img></div>
                        <p className={'descItem'}>{currentCate.desc}</p>
                        <ul className={'ulList'}>
                            {
                            contentList&&contentList.map(({iconUrl,name,id})=>{
                                    return <li className={`inline placeholder`} {...this.props} onClick={this.tabItemClick.bind(this,id)}>
                                        <img src={iconUrl}></img>
                                        <p>{name}</p>
                                        </li>
                            }) 
                            }
                        </ul>
                    </div>
                </Tabs>}
            </div>
        </div>;
    }
}
export default LimTabBar('Tab2',Items)

import * as React from "react";
import {getQuery} from "src/utils/tools";
import {getCategoryList,getGoodsList} from 'src/api'
import { Tabs, Badge } from 'antd-mobile';
interface CategoryListType {
    brotherCategory: Array<Record<string, any>>
    currentCategory: Record<string, any>
    parentCategory: Record<string, any>
}
interface State extends CategoryListType {
    goodsList:Array<Record<string,any>>
    id: number
}

interface Query {
    id: number
}

class CateGory extends React.Component<any, State> {
    state = {
        id:0,
        brotherCategory: [], // 顶部导航列表
        currentCategory: {}, //  当前选中类别描述
        parentCategory: {}, //  当前选中类别描述
        goodsList:[]
    };
    async componentDidMount() {
        let query:Query | null = getQuery<Query>()
        if(query){
            let {id} = query
            this.setState({id})
            this.getList(id,1)
            let {brotherCategory, currentCategory, parentCategory} = await getCategoryList<CategoryListType>({id})
            let tabs = brotherCategory.map((item)=>{
                let {name} = item
                return {
                    title:<Badge>{name}</Badge>,
                    item:item
                }
            })
            this.setState({
                brotherCategory:tabs,
                currentCategory,
                parentCategory
            })
        }
    }

    onTabClick=(tab:any, index:any)=>{
        console.log('onTabClick',index,tab);
        let {item}:any = tab
        this.setState({
            currentCategory:item,
        })
    }
    getList = async (categoryId:number,page?:number)=>{
        let {list}:any =await getGoodsList({
            categoryId,
            limit:10,
            page
        })
        this.setState({
            goodsList:list
        })
    }
    public render(): React.ReactNode {
        let {brotherCategory,currentCategory} = this.state
        console.log(currentCategory);
        let {desc,iconUrl,name}:any = currentCategory
        let {goodsList} = this.state
        return <>
            <Tabs tabs={brotherCategory}
                  initialPage={0}
                  onChange={(tab, index) => { this.onTabClick(tab, index) }}
                  onTabClick={(tab, index) => {
                      console.log(tab, index);
                      // this.onTabClick(tab, index)
                  }}
            >
                <div style={{ height: '100%', backgroundColor: '#fff',textAlign:"center" }}>
                    <img src={iconUrl} alt=""/>
                    <p style={{fontSize:'20px'}}>{name}</p>
                    <p style={{fontSize:'18px'}}>{desc}</p>
                    <div>
                        {
                            goodsList && goodsList.map((item)=>{

                            })
                        }
                       <p></p>
                    </div>
                </div>
            </Tabs>
        </>;
    }
}

export default CateGory;

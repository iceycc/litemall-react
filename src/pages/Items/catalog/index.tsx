import * as React from 'react';
import LimTabBar from 'src/components/LimTabBar'
import { SearchBar  } from 'antd-mobile';
import { catalogList } from 'src/api/index';

interface Props{

}
interface State{
    navList: Array<Record<string, any>>
}
class Items extends React.Component<Props,State>{
    state = {
        navList: []
    }
    public componentDidMount(){
        this.getInitData()
    }
    public async getInitData(): Promise<any>{
        let initData:any = await catalogList()
        let { categoryList } = initData
        this.setState({
            navList: categoryList
        })
        console.log(initData, categoryList, 'ppppppp')
    }
    
    public render(): React.ReactNode {
        // const { navList } = this.state
        return <div>
            <SearchBar placeholder="点击前往搜索" maxLength={8} />
            <div className="itemContent">
                
            </div>
        </div>;
    }
}
export default LimTabBar('Tab2',Items)

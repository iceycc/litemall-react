import * as React from "react";
import {getQuery} from "src/utils/tools";
import {getCategoryList} from 'src/api'

interface CategoryListType {
    brotherCategory: Array<Record<string, any>>
    currentCategory: Record<string, any>
    parentCategory: Record<string, any>
}

interface State extends CategoryListType {
    id: string | number
}

interface Query {
    id: string | number
}

class CateGory extends React.Component<any, State> {
    state = {
        id: "",
        brotherCategory: [], // 顶部导航列表
        currentCategory: {}, //  当前选中类别描述
        parentCategory: {}, //  当前选中类别描述
    };
    async componentDidMount() {
        let query:Query | null = getQuery<Query>()
        if(query){
            let {id} = query
            this.setState({id})
            let {brotherCategory, currentCategory, parentCategory}: CategoryListType = await getCategoryList<CategoryListType>({id})
            this.setState({
                brotherCategory,
                currentCategory,
                parentCategory
            })
        }
    }

    public render(): React.ReactNode {
        let {id} = this.state
        return <div>CateGory: {id}</div>;
    }
}

export default CateGory;

import request from '../utils/request'

const IndexUrl = 'wx/home/index'; // 首页数据接口
export function getHome() {
    return request.get({
        url: IndexUrl,
        body: null,
    })
}


const CatalogList='wx/catalog/index'; //分类目录全部分类数据接口
export function catalogList() {
    return request.get({
        url: CatalogList,
        body: null,
    })
}

const CategoryUrl='wx/goods/category'; // 分类顶部导航列表
export function getCategoryList<T>(data:object):Promise<T>{
    return (request.get({
        url: CategoryUrl,
        body: data,
    }) as Promise<T>)
}


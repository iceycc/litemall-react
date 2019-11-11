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

const CateItemUrl='wx/catalog/current'; // 分类类目列表
export function getCateItemList<T>(data:object):Promise<T>{
    return (request.get({
        url: CateItemUrl,
        body: data,
    }) as Promise<T>)
}

const GoodsListUrl='wx/goods/list'; // 获取产品类别
export function getGoodsList(data:object){
    return request.get({
        url: GoodsListUrl,
        body: data,
    })
}


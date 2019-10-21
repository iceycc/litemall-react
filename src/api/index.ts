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

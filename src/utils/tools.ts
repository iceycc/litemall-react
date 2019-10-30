export function getQuery<T>() :T | null {
    const url = window.location.href
    if (url.indexOf('?') == -1) return null
    const arr1 = url.split("?");
    const params = arr1[1].split("&");
    let obj = {};//声明对象
    for (let i = 0; i < params.length; i++) {
        let param = params[i].split("=");
        obj[param[0]] = decodeURIComponent(param[1]);//为对象赋值
    }
    return (obj as T);
}

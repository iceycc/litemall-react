import * as React from 'react'
import "assets/iconfont/iconfont.css"

interface Props {
    icon:String,
    style?:Object
}
function IconFont(props:Props) {
    let {icon,style} = props
    return <i className={"van-icon "+icon} style={style}></i>
}
export default IconFont

Litemall-React
==========

litemall-react是一款react+typescript开源的在线商场应用程序。是基于[litemall](https://github.com/linlinjava/litemall)基础上进行开发，litemall包含了Spring Boot后端 + Vue管理员前端 + 微信小程序用户前端 + Vue用户移动端感兴趣的同学可以自行研究部署，Flutter_Mall基本上包含了litemall中小程序的功能。<br>


. [Api](https://linlinjava.gitbook.io/litemall/api)

litemall-react功能 (开发计划)
----------
- [ ] 首页<br> 
- [ ] 专题列表、专题详情<br>
- [ ] 分类列表、分类详情<br>
- [ ] 品牌列表、品牌详情<br>
- [ ] 新品首发、人气推荐<br>
- [ ] 优惠券列表、优惠券选择<br>
- [ ] 商品搜索<br>
- [ ] 商品详情<br>
- [ ] 购物车<br>
- [ ] 购物下单<br>
- [ ] 订单列表、订单详情<br>
- [ ] 地址、收藏、足迹、意见反馈<br>





项目截图
------------------
![首页](source/page-images/home.jpeg)

项目结构
------------------
>src
>>api(接口地址)<br>
>>assets(静态资源)：图片，公共style文件<br>
>>components(组件)<br>
>>pages(页面)<br>
>>router(路由)<br>
>>utils(工具类)<br>



第三方框架
-----------------
| 名称        | 作用         | 
| ------------- |:-------------:| 
| [swipe](https://github.com/best-flutter/flutter_swiper)     |轮播图 |

##
后台启动
- nginx启动： /usr/local/nginx/sbin https://www.cnblogs.com/yeshaoxiang/p/8659708.html 
  - systemctl restart nginx.service
  - systemctl reload nginx.service
  - nginx -s reload
- 项目启动：nohup ./run.sh >/dev/null 2>&1&
- 项目地址：/usr/local/project
- 查看磁盘文件大小  find / -size +100M |xargs ls -lh 
- [错误1](https://blog.csdn.net/Wuhaotian1996/article/details/84875723)
- [错误2](https://blog.csdn.net/wang_magento/article/details/93205584)

React学习资料
----------------
[react官方文档](https://react.docschina.org/)<br>


联系我
--------------
QQ：857270687<br>
微信<br>wbyfly007

License
------------
MIT License  Copyright (c) 2019 icey


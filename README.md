# meituanwang-demo

## Build Setup

> 本项目是使用 vue.js 提供的服务端渲染框架 nuxt.js 搭建的
>
> - 前/后端主要技术栈：vue, vuex, element-ui, nuxt.js, koa2, axios, lodash, passport.js
> - 数据库：MongoDB, Mongoose, Studio 3T, Redis
> - 其它开发工具：VS Code, Postman, Chrome, Firefox, Safari

启动项目

``` bash
$ npm run install
$ npm run dev
```

目前已完成的功能：

> 本项目所使用的部分数据由于没有线上的真实数据是直接写死的，但接口已经实现并经过测试，项目内有各部分功能的详细注释。
>
> 另外由于不可能搭建一个完全的网站，页面内除了以下提到的功能外，其余链接都为空。
>
> 本项目力求完美克隆2019年秋季美团所呈现的效果，所以大部分内容都是这个时间段美团官网所呈现的，包括页面结构（有部分改为自己觉得合适的）、内容（已实现的部分）、外观等等。
>
> 美团主页除了头部、Banner、脚部之外的主要内容是几大板块组成，由于本项目采用的是 vue.js 且没有真实数据，所以只实现了第一部分的内容（数据写死，实现异步接口），但组件可以复用，填充不同数据即可，后续可能实现。
>
> 项目只有部分使用线上的真实数据，主要是搜索、推荐、城市选择这些功能
>
> 本项目的页面是1:1还原了美团官网无缩放状态，暂时没做响应式方面的处理

- 主页搭建（完成）
- 主页交互功能（完成）
- 注册页面、登录页面搭建（完成）
- 注册功能（完成）
- 邮箱验证（完成）
- 登录功能（完成）
- 搜索功能（完成）
- 热门推荐（完成）
- 产品列表（完成）
- 切换城市（完成）

未完成功能，包括一些不完美的地方：

- 主页除头部、Banner、脚部之外的其它几个板块（有接口却数据）
- 主页 Scenes 部分渲染是采用异步获取数据，存在闪烁（考虑用SSR或占位元素）
- 邮箱验证时倒计时存在小BUG
- 注册功能验证码校验有部分不能正常工作
- 购物车模块未实现
- 详情页模块未实现
- 切换城市-最近访问（未实现逻辑，暂时用死数据填充）
- 切换城市-热门城市/最近访问，未实现跳转
- 产品列表页面排序逻辑暂未实现

### 项目截图
![Screen Shot 1](https://github.com/XuJiazhen/meituanwang-demo/blob/master/Overview/1.png)
![Screen Shot 2](https://github.com/XuJiazhen/meituanwang-demo/blob/master/Overview/2.png)
![Screen Shot 3](https://github.com/XuJiazhen/meituanwang-demo/blob/master/Overview/3.png)
![Screen Shot 4](https://github.com/XuJiazhen/meituanwang-demo/blob/master/Overview/4.png)
![Screen Shot 5](https://github.com/XuJiazhen/meituanwang-demo/blob/master/Overview/5.png)
![Screen Shot 6](https://github.com/XuJiazhen/meituanwang-demo/blob/master/Overview/6.png)
![Screen Shot 7](https://github.com/XuJiazhen/meituanwang-demo/blob/master/Overview/7.png)

# Vue项目分析

### 一.整体思路分析

1.导入路由模块 安装路由Vue组件 导入需要的框架

2.创建一个主页面例如app.js 里面放入一些公共的样式

3.创建子页面 根据对应的子页面路径渲染对应的页面

### 二.各页面详细分析

##### 1.首页面：由于其他页面都是有公共的头部和尾部，所以在主页面app.js中需要设置一个公共的头部和尾部

头部在Mint-ui中找头部代码copy 尾部在mui中找选项卡底部选项卡然后代码copy 然后尾部的图标在Mui中找 注意：对于Mui中显示额外的图标 需要导入一个额外的图标css文件

##### 1.1.首页面-轮播图

在Mint-ui中找swipe然后把代码copy 这里需要用到axios来请求获得数据 在copy来的代码中使用模板引擎来渲染  

这里需要手动给轮播图设置高度 默认引进来没有高度 然后给图片设置相关的宽高页面设置相关的样式

##### 1.2首页面-跳转的动画效果

这里的效果是点击底部选项卡页面跳转是从右向左进来的 这里直接用vue的指令transition 这里需要注意给这个大容器添加overflowx-hidden因为会有滚动条 另外给元素离场时的指令加Position-absolute让元素离场不占位置

##### 1.3首页面-九宫格

这里导入Mui的九宫格代码然后把对应图片修改一下 其中跳转到新闻列表的链接 改成router-link

##### 2分页面-新闻列表

首先进Mui官网导入图文样式 copy完后在里面使用v-for来渲染数据 此时同样需要用axios来请求获取对应的数据 写到这里需要使用moment.js配合vue的过滤器来使时间格式化

##### 2.1分页面-新闻列表详情

这里功能就是点击对应的新闻列表跳转到新闻列表详情页面 也是用axios请求页面然后得到数据渲染 这里需要提到的是在请求路径时需要提供id id获取是在新闻列表标签中传入item.id 接受时是使用parmas的方式接受数据

这里写完得到页面后记得再重建一个文件夹common因为部分页面需要引用公共部分 创建完后把里面创建的vue文件导入这个页面中 然后用组件把模板对象添加进去 在这个页面中进行添加

这里需要注意的时 在使用组件名标签渲染页面时 要把这个页面的Id过去 用到父传子的方法  因为下一步在使用common中导入的这个文件时需要用到id

##### 2.1-1分页面-新闻列表评论模块

这里同样把结构搭建起来 用axios传值 然后得到的数据使用v-for进行对应的渲染 这里有部分功能说明一下 一是点击加载更多 将之前请求数据封装的方法后面页数的参数改成动态 即每点一下就++；然后让data自定义用来接受数据的变量 使用concat拼接来达到数据越来越多的效果 不拼接的话页面只显示固定10个 这十个的内容为你设置对应页码上的内容

点击发表评论 做个非空校验 根据对应接口传递参数即可

##### 3.1分页面-图文导航栏

首先做图文上的导航栏 导航栏样式可以去mui顶部选项卡-可左右拖动把结构拿过来 拿过来后把选项卡的内容删除,只需留导航栏列表,之后再去找mui的区域滚动组件 结构整理好后 再用axios请求对应地址渲染列表的数据即可

注意:①copy来的两种结构需要整理一下 若直接顶部选项卡内容放区域滚动的内容中 其页面显示的高度为0 整理时只需把区域滚动中mui-scroll-wrapper的类加在顶部选项卡Id为sliderSegmentedControl的div标签中 然后删除之前有mui-scroll-wrapper类的盒子

​	②结构修改好后点击尾部选项卡会报错 这是由于mui封装的类产生的冲突 解决办法把尾部的类改个名字  把之前有关这个名字的样式全拿过来

##### 3.1-1分页面-图文列表

导航栏做好后开始做点击导航栏显示对应的图文列表 把对应的结构写好 用axios请求对应数据渲染上去

这里用到了懒加载效果 使用方法去mint-ui copy

注意：传入的id是用封装的函数传形参

##### 3.1-2分页面-图文详情

这里是点击图文列表进入对应图文详情的页面，页面渲染用axios，这里用到了一个图片预览的效果 使用方法进

(https://github.com/LS1231/vue-preview)页面上有详细说明 做完后把之前的评论组件拿过来 




























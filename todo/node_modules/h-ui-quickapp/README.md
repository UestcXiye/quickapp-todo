# H-UI
 快应用H-UI组件库开源
## 简介
 h-ui是一套为快应用开发者量身打制的UI组件库，以传统html5标签为基础，遵循主流前端框架样式命名习惯，对快应用原生组件二次封装而成，以实现快应用“全组件式开发”为目标，让快应用开发就像搭积木！
 
**快应用H-UI组件库承诺**
将持续推出更多精彩、精良的快应用组件。对原有组件会持续维护、优化升级，并且优化后的组件尽可能向前兼容，不影响已经使用了该组件的快应用。界面精美、功能强大、使用方便灵活以及运行时的高性能将是我们坚持的开发原则。H-UI出品，必属精品！
 
## H-UI 开发文档预览
![](https://h-ui.obs.cn-south-1.myhuaweicloud.com/image/hui/1.jpg)

![](https://h-ui.obs.cn-south-1.myhuaweicloud.com/image/hui/2.jpg)

![](https://h-ui.obs.cn-south-1.myhuaweicloud.com/image/hui/3.jpg)

![](https://h-ui.obs.cn-south-1.myhuaweicloud.com/image/hui/4.jpg)

![](https://h-ui.obs.cn-south-1.myhuaweicloud.com/image/hui/5.jpg)

## HUI开发文档(快应用在线体验)
华为应用市场 > 快应用 > HUI开发文档

![](https://h-ui.obs.cn-south-1.myhuaweicloud.com/image/hui-sample-qr-code-mini.png)

## 官方博客
https://h-ui-mobi.blog.csdn.net

## 公众号
快应用HUI

## 教学视频
抖音号：QuickApp
抖音名：快应用H-UI

## 版本说明
### Ver 1.0.5
为了使相同props属性名在不同组件中的调用方式保持一致，优化导航栏组件、分页器、数据加载提示、折线图、柱状图、散点图、饼状图及漏斗图组件props属性命名。

导航栏(导航组件 - 导航栏):
'align'属性改为'align-left'； 
'bg-color'属性改为'hex-color'； 
'show-back'属性改为'hide-back'，默认值为false；
'show-option'属性改为'hide-option'，默认值为false；

分页器(导航组件 - 分页器):
'mode'属性改为'pagination-mode'；

数据加载提示(操作反馈 - 数据加载提示):
'status'属性改为'loading-status'；

折线图(图表组件 - 折线图):
'color'属性改为'hex-color'；

柱状图(图表组件 - 柱状图):
'color'属性改为'hex-color'；

散点图(图表组件 - 散点图):
'color'属性改为'hex-color'；

饼状图(图表组件 - 饼状图):
'active'属性改为'current'；

漏斗图(图表组件 - 漏斗图):
'align'属性改为'chart-align'；

官方博客(https://h-ui-mobi.blog.csdn.net)已同步更新。
快应用'HUI开发文档'v1.0.5版已同步。
请在调用组件时采用新的属性名。

### Ver 1.0.4
废除搜索组件props属性value及编辑器组件props属性audioExpiration。本次优化对原有调用方式无任何影响。

### Ver 1.0.3
废除数字输入组件byte,short,int和long中未使用的props属性type。本次优化对原有调用方式无任何影响。

### Ver 1.0.2
支持npm安装H-UI组件库，指令：cnpm install h-ui-quickapp
适配npm安装后的组件调用，调整字体文件及本地图片路径(放弃绝对路径调用)，兼容联盟快应用和华为快应用：
字体文件改用远程路径；
本地图片引用从'/Common/icons'绝对路径改为相对路径。

### Ver 1.0.1
全面兼容快应用联盟和华为快应用！
如果使用快应用联盟的IDE编译代码，会使用"快应用调试器"解析代码，编译代码前请将"/Common/utils/config.js"中的loaderConfig配置为"UNION"；
如果使用华为快应用的IDE编译代码，会使用"快应用加载器"解析代码，编译代码前请将"/Common/utils/config.js"中的loaderConfig配置为"HUAWEI"。
H-UI已针对两个解析器存在的差异做了针对性适配，做到两个IDE编译的快应用均达到最佳效果。

tip：
第一次在快应用联盟IDE中调试新项目时可能因为未安装less模块而报如下错误：
**构建错误 Module not found: Error: Can't resolve 'less-loader'**
vue-cli 构建的项目默认是不支持 less 的，需要自己添加。
首选，安装 less 和 less-loader ，在项目目录下运行如下命令

```命令
npm install less less-loader --save-dev
```

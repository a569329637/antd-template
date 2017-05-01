# AntDesign & redux 项目模板

## 环境需求
官网下载，安装nodejs应用
```shell
nodejs >= 4
```
推荐使用cnpm来解决依赖包下载慢的问题，安装cnpm:
```shell
(sudo) npm install cnpm -g
```

## 安装依赖
在项目的根目录，安装项目的依赖包：
```shell
cnpm install -d
```

## 开发模式启动运行
```shell
npm run start
```
访问 [http://localhost:8989](http://localhost:8989)

## 编译代码
具体编译后位置可以在package.json的script节点中修改build属性来指定，这里是 ./bundles 目录。
```shell
npm run build
```

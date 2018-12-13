## 安装模块

### 全局安装
```node
npm install -g webpack webpack-cli
```
### 局部安装（项目根目录）
```node
# 初始化
npm init
npm install --save-dev webpack vue vue-loader vue-template-compiler html-webpack-plugin 
```

### 使用ES6语法
```node
npm install --save-dev babel-core babel-loader
```

### 在根目录下新建src文件夹
```cmd
# 可以手动创建
mkdir src
```

### 在src下新建`app.js` `app.vue` `index.html`
+ node_modules
	* 资源包
+ src
	* compeonnts
		* 组件一
		* 组件二
		* 组件三
	* app.js
	* app.vue
	* index.html
+ package.json

### 在根目录下新建`webpack.config.js`配置文件
+ node_modules
	* 资源包
+ src
	* compeonnts
		* 组件一
		* 组件二
		* 组件三
	* app.js
	* app.vue
	* index.html
+ package.json
+ webpack.config.js

### `webpack.config.js`配置如下
```js
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');

module.exports = {
	// 模式
	mode:'development',
	// 入口文件
	entry:'./src/app.js',
	// 输出配置
	output:{
		path:path.join(__dirname,'./dist'),
		filename:'js/build.js'
	},
	// loader配置（加载器）
	module:{
		rules:[
			{
				// 匹配以.vue的文件
				test:/\.vue$/,
				loader:'vue-loader'
			},
			{
				// 匹配以.css的文件
				test:/\.css$/,
				loader:'css-loader!style-loader'
			}
		]
	},
	// 自动化服务器
	devServer:{
		contentBase:path.join(__dirname,'dist'),
		// 自动刷新
		inline:true,
		// 端口设置
		port:8000,
		// 自动打开浏览器
		open:true,
		// HTML5 History 模式
		historyApiFallback:true
	}，
	// 插件
	plugins:[
		// 依据html模板生成一个自动引用你打包后的文件（js或css）的新的html页面
		new HtmlWebpackPlugin({
			template:'./src/index.html'
		}),
		// Vue-loader在15.*之后的版本都是 vue-loader的使用都是需要伴随 VueLoaderPlugin
		new VueLoaderPlugin()
	]
}
```

### `app.js`代码如下
```js
import Vue from 'vue';
import App from './app.vue';

new Vue({
	el:"#app",
	render:createElement=>{
		return createElement(App)
	}
})
```

### `app.vue`代码如下
```vue
<template>
	<div id="content">
		<h2>{{msg}}</h2>
	</div>
</template>

<script>
export default{
	data(){
		return{
			msg:"你已经成功使用webpack搭建了一个vue项目"
		}
	}
}
</script>

<style>
h2{
	color:red;
}
</style>
```

### 运行项目
#### 在`package.json`下的`scripts`添加下面代码
```json
"dev": "webpack-dev-server",
```
启动
```node
npm run dev
```

### 打包项目
#### 在`package.json`下的`scripts`添加下面代码
```json
"build":"webpack"
```
进行打包
```node
npm run build
```
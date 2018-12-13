var express = require('express');
var request = require('request');
var app = express();

app.get('/navlist',(req,res)=>{
	res.append('Access-Control-Allow-Origin','*');
	request('https://m.weibo.cn/api/config/list',(error,response,body)=>{
		res.send(body);
	})
})
app.listen(4000);
console.log('启动服务器...');
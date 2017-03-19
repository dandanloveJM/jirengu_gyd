/**
 * 使用范例
 */

app.get('/getNews', function(req, res){

	var news = [
		"第11日前瞻：中国冲击4金 博尔特再战200米羽球",
		"正直播柴飚/洪炜出战 男双力争会师决赛",
		"女排将死磕巴西！郎平安排男陪练模仿对方核心",
		"没有中国选手和巨星的110米栏 我们还看吗？",
		"中英上演奥运金牌大战",
		"博彩赔率挺中国夺回第二纽约时报：中国因对手服禁药而丢失的奖牌最多",
		"最“出柜”奥运？同性之爱闪耀里约",
		"下跪拜谢与洪荒之力一样 都是真情流露"
	]
	var data = [];
	for(var i=0; i<3; i++){
		var index = parseInt(Math.random()*news.length);
		data.push(news[index]);
		news.splice(index, 1);
	}
	res.header("Access-Control-Allow-Origin", "http://localhost:8080"); 
	//res.header("Access-Control-Allow-Origin", "*"); 
	res.send(data);
})
/**
 * 发送 GET 请求， 无参数
 * GET /hello
 * 返回响应数据
 */
app.get('/hello', function(req, res) {
	res.send({
		status: 0,
		msg: "hello 饥人谷"
	});
});


/**
 * 发送 GET 请求, 有参数
 * GET /user/100
 * query = { name: 'ruoyu', age: 28 }
 */
app.get('/user/:uid', function(req, res) {
	console.log(req.params.uid); //100
	console.log(req.query.name); // 'ruoyu'
	res.send({
		status: 1,
		errorMsg: "请先注册"
	});
});


/**
 * 发送 POST 请求， 有参数
 * POST /comment
 * query = { comment: "这是评论内容" }
 */
app.post('/comment', function(req, res) {
	console.log(req.body.comment); // "这是评论内容"
	res.send({
		status: 0,
		data: {
			cid: 100,
			comment: "这是评论内容"
		}
	});
});



/**
 * 页面路由，从模板渲染页面渲染页面, 
 * htttp://localhost:8080/user
 * 支持 ejs, jade 模板
 */
app.get('/user', function(req, res) {
	res.render('user.ejs', {
		username: '饥人谷'
	});
});
/**
 * 이 코드는 숙달해야 함!(중요)
 */

var express = require('express');
var app = express(); // application이라는 것을 리턴함, express()
app.get('/',function(req, res){
	// 사용자가 home으로 접속했을 때, 우리가 실행시킨 get()을 통해서 두번째 인자로 전달한 함수가 실행되도록 약속되어 있음
	res.send('Hello homepage');	// 사용설명서에 적혀있음. 
});

// get이라는 메소드를 어떻게 부르냐면 라우터, 하는 일을 라우팅이라고 함
// 어떤 요청이 들어왔을때 길을 찾을 수 있게 해주는 역할 -> get = 라우터(router)
app.get('/login', function(req, res){
	res.send('<h1>Login Please</h1>');
});


app.listen(3000, function(){
	console.log('Conneted 3000 port!');
});  
// 웹 어플리케이션이 3000번 포트를 listen 함, function이 실행된다.

// node app.js 로 실행시키면 express의 에러화면이 뜸

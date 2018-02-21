/**
 * 이 코드는 숙달해야 함!(중요)
 */

var express = require('express');
var app = express(); // application이라는 것을 리턴함, express()

/**
 * 정적인 파일을 서비스하기 위해 추가한 코드 
 */
app.use(express.static('public'));  // 관습적으로 public 이라는 디렉토리로 사용함

app.get('/',function(req, res){
	// 사용자가 home으로 접속했을 때, 우리가 실행시킨 get()을 통해서 두번째 인자로 전달한 함수가 실행되도록 약속되어 있음
	res.send('Hello homepage');	// 사용설명서에 적혀있음. 
});

// 수정되는 경우 node를 껐다가 다시 실행해야 함(동적으로 처리)
app.get('/dynamic',function(req, res){
	// 여러줄을 입력하고 싶을 경우 역슬래시 \ 를 끝에 입력하면 됨, 하지만 보기 좋게 쓰기 위해서는 아래와 같이 작성할 것
	
	var lis = '';
	for(var i=0; i<5; i++){
		lis = lis + '<li>coding</li>';
	}
	
	var time = Date();
	
	// 문자안에 변수 넣을 떄 : ${} 특수 기호
	var output = `
		<!DOCTYPE html>
		<html>
			<head>
				<meta charset="utf-8">
				<title>Insert title here</title>
			</head>
		<body>
			Hello, dynamic!
			<ul>
				${lis}
			</ul>
			${time}
		</body>
		</html>`;	// 작은 따옴표가 아닌 특수 기호임 
	
	res.send(output);	
});


app.get('/route', function(req, res){
	res.send('Hello Router, <img src="/route.png">');
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

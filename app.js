/**
 * 이 코드는 숙달해야 함!(중요)
 */

var express = require('express');
var app = express(); // application이라는 것을 리턴함, express()

app.locals.pretty = true;   // jade(pug)의 코드를 예쁘게 표현할 수 있음
// pug와 express를 연결함
app.set('view engine', 'pug');
app.set('views', './views');  // pug(jade) 파일을 views 안에 넣으면 됨

/**
 * 정적인 파일을 서비스하기 위해 추가한 코드 
 */
app.use(express.static('public'));  // 관습적으로 public 이라는 디렉토리로 사용함

app.get('/topic/:id',function(req,res){
  
  // 해당 부분을 파일이나 db로 바꾸면 됨
  var topics = [
    
    'javaScript~',
    'Nodejs~',
    'Express~'
    
  ];
  
  var output = `
    <a href="/topic?id=0">javaScript</a><br>
    <a href="/topic?id=1">Nodejs</a><br>
    <a href="/topic?id=2">Express</a><br><br>
    
    ${topics[req.params.id]}
    
  `;
  
  res.send(output); // parameter는 req.query.파라미터명을 넣으면 됨
//  res.send(req.query.id +',' + req.query.name); // 쿼리스트링 여러개 쓸 경우
})

app.get('/topic/:id/:mode', function(req,res){
  res.send(req.params.id + ',' + req.params.mode);
})


app.get('/template',function(req, res){
  // temp파일을 렌더링해서 전송한다는 뜻
  res.render('temp', {time:Date(), title: 'Pug'}); // pug(jade) 문법에 맞게 읽어와서 화면에 보여줌
})

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
		</html>`;	// 작은 따옴표가 아닌 특수 기호임 (그레이브 액센트)
	
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

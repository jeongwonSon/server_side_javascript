const http = require('http');	// 상수 : 한번 모듈로 띄어놓으면 바꿀 일이 없음
 
const hostname = '127.0.0.1';
const port = 1337;

/**
 * 밑의 코드와 같음, 축약형 이다.
 */
/*http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello World\n');
}).listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});*/


// listen은 시간이 걸릴 수 있음, 비동기로 진행(콜백함수 호출)
var server = http.createServer(function(req, res){
	// 익명함수를 준다.
	res.writeHead(200, { 'Content-Type': 'text/plain' });
	res.end('Hello World\n');
});
server.listen(port, hostname, function(){
	console.log(`Server running at http://${hostname}:${port}/`);
});


// 서버쪽 애플리케이션을 더 쉽게 구현할 수 있도록 되어있는 express라는 웹 프레임워크가 있음
// Express.js는 Node.js의 핵심모듈인 http와 Connect 컴포넌트를 기반으로 하는 웹 프레임워크임.
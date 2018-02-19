/*
 *  간단한 웹서버 
 */

//var http = require('http');
//http.createServer(function handler(req, res) {
//    res.writeHead(200, {'Content-Type': 'text/plain'});
//    res.end('Hello World\n');
//}).listen(1337, function(){
//	console.log('Server running at http://127.0.0.1:1337/');
//	console.log('node js 실행중');
//	
//});



// 생활코딩 -> nodejs에서 기본으로 제공하는 코드 (https://nodejs.org/en/about/)
const http = require('http');	// 상수 : 한번 모듈로 띄어놓으면 바꿀 일이 없음
 
const hostname = '127.0.0.1';
const port = 1337;
 
http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello World\n');
}).listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

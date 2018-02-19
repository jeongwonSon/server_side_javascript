var fs = require('fs');	// file을 다룰 때 약자

// Sync
console.log(1);	// 먼저 실행되고 data.txt 파일을 읽은 후에 결과를 보여줌
var data = fs.readFileSync('data.txt', {encoding:'utf8'});	// option으로 인코딩을 줄 수 있음
console.log(data);

// Async -> callback
console.log(2);
fs.readFile('data.txt', {encoding:'utf8'}, function(err, data){
	// 3번째는 익명함수
	console.log(3);
	console.log(data);	// readFile 내부적으로 작업이 끝난 후에 callback 함수 실행
})

console.log(4);

/**
 * 결과는 : 2, 4, 3, data값이 나옴
 * 
 * 동기적인 것은 순차적으로 일이 끝날때 까지 기다림
 * 비동기는 시작과 동시에 다음작업으로 넘어가고 비동기적 작업이 끝나면 알려준다.
 * nodeJs는 비동기로 반응이 빠름(싱글쓰레드로 동작)
 * 
 */

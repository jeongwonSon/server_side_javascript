// $ npm install uglify-js -g : 글로벌하게 사용할 수 있게 설치
// $ uglifyjs pretty.js ---> 가독성을 떨어뜨림, 공백을 싹 제거함(uglify가 하는 역할임)
// $ uglifyjs pretty.js -m ---> -m 옵션, 가장 짧은 값을 넣어서 보여줌 
function hello(name){
	console.log('Hi,' + name);
}

hello('jw');
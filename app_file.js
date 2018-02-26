var express = require('express');
var bodyParser = require('body-parser');
var fs = require('fs'); // 파일을 사용할 수 있는 모듈
var app = express();
//parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
app.locals.pretty = true;   // jade(pug)의 코드를 예쁘게 표현할 수 있음
app.set('views', './views_file');
app.set('view engine', 'pug');
app.get('/topic/new',function(req,res){
  res.render('new');
});
app.post('/topic',function(req,res){
  var title = req.body.title;
  var description = req.body.description;
  
  // data 디렉토리 경로에 description으로 제출한 부분을 파일로 저장하는 거
  fs.writeFile('data/' + title, description, function(err){
    if(err){
      console.log(err);
      res.status(500).send('Internal Server Error');  // error
    }

    res.send('Success!');  // callback 함수가 실행된 다음에 response를 할 수 있기 때문에
  });
});

app.listen(3000, function(){
  console.log('Connected, 3000 port!');
});
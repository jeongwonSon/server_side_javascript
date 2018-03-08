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
  fs.readdir('data', function(err, files){
    if(err){
      console.log(err);
      res.status(500).send('Internal Server Error');  // error
    }
    
    res.render('new', {topics:files});
  
  });
});
app.get(['/topic','/topic/:id'], function(req,res){
  // 글 목록이 화면에 표시되게
  fs.readdir('data', function(err, files){
    if(err){
      console.log(err);
      res.status(500).send('Internal Server Error');  // error
    }
    var id = req.params.id;
    
    if(id){
      // id 값이 있을 때
      fs.readFile('data/'+id,'utf8',function(err,data){
        if(err){
          console.log(err);
          res.status(500).send('Internal Server Error');  // error
        }
        
//   res.send(data);
        // title은 파일명을 쓰기로 함
        res.render('view',{topics:files, title:id, description: data});
      });
    }else{
      // id 값이 없을 때
      res.render('view', {topics:files, title:'Welcome', description:'Hello, JavaScript for server'});
    }
    
  });
});
//app.get('/topic/:id',function(req,res){
//  var id = req.params.id;
//  // 글 목록이 화면에 표시되게
//  fs.readdir('data', function(err, files){
//    if(err){
//      console.log(err);
//      res.status(500).send('Internal Server Error');  // error
//    }
//    fs.readFile('data/'+id,'utf8',function(err,data){
//      if(err){
//        console.log(err);
//        res.status(500).send('Internal Server Error');  // error
//      }
//      
//      // title은 파일명을 쓰기로 함
//      res.render('view',{topics:files, title:id, description: data});
//    });
//    
//  });
//  
//});
app.post('/topic',function(req,res){
  var title = req.body.title;
  var description = req.body.description;
  
  // data 디렉토리 경로에 description으로 제출한 부분을 파일로 저장하는 거
  fs.writeFile('data/' + title, description, function(err){
    if(err){
      console.log(err);
      res.status(500).send('Internal Server Error');  // error
    }

    res.redirect('/topic/'+title);  // callback 함수가 실행된 다음에 response를 할 수 있기 때문에
  });
});

app.listen(3000, function(){
  console.log('Connected, 3000 port!');
});
const express = require('express');
const app = express();
const path = require('path'); 
//const cal = require('./js/cal.js');
//const bodyParser = require('body-parser');

app.locals.pretty = true;
//bodyParser 설정
//app.use(bodyParser.json()); // json 타입으로인코딩하게 설정
//app.use(bodyParser.urlencoded({extended: false})); //url 은 인코딩하지않게 설정

app.use(express.static(path.join(__dirname,'css'))); 
app.use(express.static(path.join(__dirname,'js'))); 
app.use(express.static(path.join(__dirname,'audio')));
app.use(express.static(path.join(__dirname,'node_modules')));
// app.use(express.static('css')); 
// app.use(express.static('js')); 
// app.use(express.static('audio')); 
// __dirname 의미 현재 디렉토리의 위치 node js 기본 제공 
app.set('views', __dirname + '/'); 
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);


 app.get('/', (req, res) => {
   res.render('index.html');
 })

//  app.post('/deviation_cal', async(req,res) =>{
//   //post -json 방식
//   var killingRate = Number(req.body.killingRate);
//   var monsterLv = Number(req.body.monsterLv);
//   var potionPrice = Number(req.body.potionPrice);
//   var item = Number(req.body.item);
//   var ability  = Number(req.body.ability);
//   var farm = Number(req.body.farm);
//   var phantom = Number(req.body.phantom);
//   var unionbuff = Number(req.body.unionbuff);
//   var defaultMeso = ( monsterLv * 7.5 ); // 몬스터 1마리 당 메소 기댓 값
//   var mesoPerMin = Number(defaultMeso * killingRate / 60); // 1분당 메소 기댓 값
//   var cal_result = await cal(potionPrice,item,ability,farm,phantom,unionbuff,mesoPerMin);

//   //get 방식 (query 방식)
//   // var killingRate = Number(req.query.killingRate);
//   // var monsterLv = Number(req.query.monsterLv);
//   // var potionPrice = Number(req.query.potionPrice);
//   // var item = Number(req.query.item);
//   // var ability  = Number(req.query.ability);
//   // var farm = Number(req.query.farm);
//   // var phantom = Number(req.query.phantom);
//   // var unionbuff = Number(req.query.unionbuff);
//   // var defaultMeso = ( monsterLv * 7.5 ); // 몬스터 1마리 당 메소 기댓 값
//   // var mesoPerMin = Number(defaultMeso * killingRate / 60); // 1분당 메소 기댓 값  
//   // var cal_result =  await cal(potionPrice,item,ability,farm,phantom,unionbuff,mesoPerMin);
  
//   res.json({result : cal_result});
//  });

//  app.get('/deviation',(req,res)=>{
//    res.render('deviation.ejs');
//  })

 app.listen(4000, () => console.log('connected, 4000'));
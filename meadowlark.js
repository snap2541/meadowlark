const express = require('express')
const expressHandlebars = require('express-handlebars') // View (frontend)
// 사용자 정의 라이브러리
const fortune = require('./lib/fortune.js')
const handlers = require('./lib/handlers')
const app = express()
const port = process.env.PORT || 3000 // port 지정

// 뷰 핸들바 엔진 설정
app.engine('handlebars', expressHandlebars({
    defaultLayout: 'main',
}))
app.set('view engine', 'handlebars')

app.use(express.static(__dirname + '/public'))

app.get('/', handlers.home)

app.get('/about', handlers.about)

app.use(handlers.notFound)

app.use(handlers.serverError)

app.listen(port,()=> console.log(`서버 시작 (포트번호 : ${port}, 종료는 Ctrl+c)`) )
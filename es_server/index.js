var express = require('express');
var app = express();

app.get('/news', function (req, resp, next) {
    resp.set('Access-Control-Allow-Origin', '*');
    var id = req.query.id;
    console.log('/news id=' + id);
    var news = {
        id: id,
        title: 'news title1...',
        content: 'news content1...',
        commentsUrl: '/comments?newsId=' + id
    };
    resp.json(news);
});

app.get('/comments', function (req, resp, next) {
    resp.set('Access-Control-Allow-Origin', '*');
    console.log('/comments newsId=' + req.query.newsId);
    var newsId = req.query.newsId;
    var comments = {
        id: 1,
        content: 'comment content111...',
        newsId: newsId
    };
    resp.json(comments);
});

app.listen(3000);
console.log('服务器启动成功');


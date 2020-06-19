const express = require('express');
const bodyParser = require("body-parser");
const app = new express();
//const urlencodedParser = bodyParser.urlencoded({ extended: false })

const nav = [
    {link:'/index',name:'Home'},
    {link:'/books',name:'books'},
    {link:'/addbooks',name:'Add Books'},
    {link:'/authors',name:'Authors'},
    {link:'/signup',name:'Signup'},
    {link:'/',name:'Login'}
    ];

const navs = [
    {link:'/index',name:'Home'},
    {link:'/signup',name:'SignUp'},
    {link:'/',name:'Login'}
];    


const booksRouter = require('./src/routes/bookroutes')(nav);
const authorRouter = require('./src/routes/authorrouter')(nav);
const addbooksRouter = require('./src/routes/addbooksrouter')(nav);
const signupRouter = require('./src/routes/signuprouter')(navs);
const indexRouter = require('./src/routes/indexrouter')(nav);

// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(bodyParser.json());

app.use(express.static('./public'));
app.set('view engine','ejs');
app.set('views','./src/views');
app.use('/books',booksRouter);
app.use('/authors',authorRouter);
app.use('/signup',signupRouter);
app.use('/index',indexRouter);
app.use('/addbooks',addbooksRouter);

app.get('/',(req,res)=>{
    res.render('login',
    {
        navs,
        title:'Library'
    });
});

app.post('/',(req,res)=>{
    res.redirect('/index')
});

app.post('/signup',(req,res)=>{
    res.redirect('/')
});

app.post('/addbooks',(req,res)=>{
    res.redirect('/books')
});

app.listen(4000);
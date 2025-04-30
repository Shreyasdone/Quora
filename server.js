const express = require('express');
const app = express();
const path = require('path');
const port = 8000;
const {v4: uuidv4} = require('uuid');
const methodOverride = require('method-override');

app.use(express.static(path.join(__dirname,'public')));
app.use(express.urlencoded({extended: true}));
app.use(methodOverride('_method'))

app.set('views', path.join(__dirname,'views'));
app.set('view engine','ejs');

let posts = [
    {
        id: uuidv4(),
        username: 'shreyasdone',
        description: 'I am bored'
    },
    {
        id: uuidv4(),
        username: 'apanacollege',
        description: 'Coding is life'
    },
    {
        id: uuidv4(),
        username: 'arya',
        description: 'Everything is Data'
    }
]

app.listen(port, ()=>{
    console.log('listening on port',port);
})

app.get('/', (req,res)=>{
    res.redirect('/posts')
})

app.get('/posts',(req,res)=>{
    res.render('index.ejs', {posts});
})

app.get('/posts/new',(req,res)=>{
    res.render('newpost.ejs');
})

app.get('/posts/:id',(req,res)=>{
    const {id} = req.params;
    const post = posts.find((post)=> id == post.id);
    res.render('detail.ejs', {post});
})

app.get('/posts/edit/:id',(req,res)=>{
    const { id } = req.params;
    const post = posts.find((post)=> id == post.id);
    res.render(`edit.ejs`, { post });
})

app.post('/posts',(req,res)=>{
    const { username,description } = req.body;
    const id = uuidv4();
    posts.push({id,username,description});
    res.redirect('/posts');
})

app.patch('/posts/:id',(req,res)=>{
    const {description} = req.body;
    const {id} = req.params;
    const post = posts.find((post)=> id == post.id);
    post.description = description;
    res.redirect('/posts');
})

app.delete('/posts/:id',(req,res)=>{
    const { id } = req.params;
    posts = posts.filter((post)=> id != post.id);
    console.log(posts);
    res.redirect('/posts');
})
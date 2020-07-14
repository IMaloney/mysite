const express = require('express');
const app = express();

app.set('views', path.join(__dirname, 'html'));
app.use(express.static(path.join(__dirname, 'public')));
// may or may not need this actually
app.use(express.static(path.join(__dirname, 'node_modules')));

app.set('view engine', 'ejs');

app.get('/', (req, res)=> {
    res.render('home');
});

app.get('/videos', (req, res) => {
    res.render('videos');
});

app.get('/blog', (req, res) => {
    res.render('blog');
});

app.get('/contact', (req, res) => {
    res.render('contact');
});

app.get('/project', (req, res) => {

});

app.use((req, res, next) => {
    res.status(404).render('404');
});

app.listen(3000, ()=>{
    console.log('listening on port 3000');
});
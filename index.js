const express = require('express');
const app = express();

app.set('views', path.join(__dirname, 'html'));
app.use(express.static(path.join(__dirname, 'public')));
// may or may not need this actually
app.use(express.static(path.join(__dirname, 'node_modules')));

app.set('view engine', 'ejs');

// home page
app.get('/', (req, res)=> {
    res.render('home');
});

// videos page
app.get('/videos', (req, res) => {
    res.render('videos');
});

// blog page
app.get('/blog', (req, res) => {
    res.render('blog');
});

// contact page
app.get('/contact', (req, res) => {
    res.render('contact');
});

// projects page
app.get('/projects', (req, res) => {
	res.render('projects');
});

// download link
app.get('/resume', (req, res) => {
	const resume = `${__dirname}/upload_folder/resume.pdf`;
	res.download(resume, 'RobertIanMaloneyResume.pdf');
});

app.use((req, res, next) => {
    res.status(404).render('404');
});

app.listen(3000, ()=>{
    console.log('listening on port 3000');
});
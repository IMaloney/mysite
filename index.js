const express = require('express');
const path = require('path');
// const youtube = require('./api/youtube');
const parser = require('body-parser');
const projects = require('./projects');


const home = projects.home,
      school = projects.school; 

const app = express();
app.use(parser.json());

app.set('views', path.join(__dirname, 'html'));
app.use(express.static(path.join(__dirname, 'public')));

app.set('view engine', 'ejs');

// home page
app.get('/', (req, res)=> {
    res.render('home');
});

// videos page
app.get('/videos', async (req, res) => {
	// const videos = await youtube.get('/search');
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
	res.render('projects', { home, school });
});

// download link
app.get('/resume', (req, res) => {
	const resume = `${__dirname}/uploads/resume.pdf`;
	res.download(resume, 'RobertIanMaloneyResume.pdf');
});

app.post('/contact-me', (req, res) => {

}); 

app.use((req, res, next) => {
    res.status(404).render('404');
});

app.listen(3000, ()=>{
    console.log('listening on port 3000');
});
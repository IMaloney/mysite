const express = require('express');
const path = require('path');
// const youtube = require('./api/youtube');
const parser = require('body-parser');
const projects = require('./projects');
// TODO: replace with dotenv file at some point
const keys = require('./config/keys');


const home = projects.home,
      school = projects.school; 

const app = express();
app.use(parser.json());

app.set('views', path.join(__dirname, 'html'));
app.use(express.static(path.join(__dirname, 'public')));

app.set('view engine', 'ejs');

app.use((req, res, next) => {
    res.set({
        "X-Content-Types-Options": "nosniff",
        "X-Frame-Options": "SAMEORIGIN",
        "Referrer-Policy": "no-referrer",
        "Expect-CT": "max-age=3600, enforce",
        "Server": "none",
        "X-Powered-By": "none",
        "Content-Security-Policy": "default-src 'none'; connect-src 'self';font-src https:; img-src 'self' data: https:; style-src 'self' https: 'unsafe-inline'; script-src 'self' https:; manifest-src 'self'",
        "Strict-Transport-Security": "max-age=31536000; includeSubDomains;"
    });
    next();
});

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
    res.render('contact', {email: keys.email});
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

app.use((req, res, next) => {
    res.status(404).render('404');
});

const port = process.env.PORT || 3000;

app.listen(port, ()=>{
    console.log(`listening on port ${port}`);
});
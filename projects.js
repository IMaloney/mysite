// put the projects in an array of objects with links and information
const home = [
	{
		name: 'Signmeup V2',
		stack: 'React Native',
		description: 'Companion app built to work with Brown University\'s system for managing interactions between students and TAs.',
		link: '',
		linkLoc: 'Github' 
	},
	{
		name: 'MyTones',
		// 
		stack: 'MongoDB, Express, React, Node, Python, Flask',
		description: 'A web application dedicated to turning mp3 files into ringtones.',
		link:'',
		linkLoc: 'Github',
		linkTwo: '',
		// this will be site name 'my-tones' (won't be written until domain purchased)
		linkLocTwo: 'MyTones'
	},
	{
		name: 'Assortment',
		stack: 'MongoDB, Express, React, Node',
		description: 'A drop shipping service.',
		link: '',
		// line 18
		linkLoc: ''

	},
	{
		name: 'MicroAuth',
		stack: 'MongoDB, Express, Node',
		//  Supports email password authentication and OAuth using Google and Facebook. Used in all my web based applications.
		description: 'Authentication as a microservice.',
		link: '',
		linkLoc: 'Github'
	},
	{
		name: 'Gameboy',
		stack: 'C',
		description: 'A Gameboy emulator. Planning on building a companion application for iOS in the future.',
		link: '',
		linkLoc: 'Github'
	},
	{
		name: 'Programming',
		stack: 'Python',
		// A repository containing original solutions to problems on Leetcode.
		description: 'A repository containing original Leetcode solutions.',
		link: '',
		linkLoc: 'Github'
	},
	{
		name: 'MySite',
		stack: 'EJS, Express, Node',
		description: 'This website.',
		link: '',
		linkLoc: 'Github',
		linkTwo: '/',
		linkLocTwo: 'Home'
	}
	// these will be commented out until the projects are made public on github
	// ,
	// {
	// 	name: 'SupremeBot',
	// 	stack: 'Python',
	// 	description: '',
	// 	link: ''
	// },
	// {
	// 	name: 'Clash Royale API',
	// 	stack: 'Python',
	// 	description: '',
	// 	link: ''
	// }

];

// request access
const school = [
	{
		name: 'Weenix',
		stack: 'C',
		description: 'A simple Operating System based on earlier versions of Unix. Built out the process and thread scheduling, low level drivers, virtual file system, s5fs file system, and virtual memory.'
	},
	{
		name: 'U/M-Threads',
		stack: 'C',
		//  complete with thread creation/ deletion/ joining, mutexes, condition variables and a priority-based scheduler
		description: 'User-level threads packages following the two-level N-to-1 and two-level M-to-N models.'
	}, 
	{
		name: 'Database',
		stack: 'C',
		description: 'A thread-safe database which supports multiple clients using multi-threading.'
	},
	{
		name: 'Shell',
		stack: 'C',
		description: 'A shell allowing users to run other programs. Includes job control and signal handling.'
	}, 
	{
		name: 'DCGAN',
		stack: 'Python',
		// Project based on the paper Unsupervised Representation Learning With Deep Convolutional Generative Adversarial Networks.
		description: 'A Generative Adversarial Network which generated images of human faces. '
	}
];


exports.home = home;
exports.school = school;
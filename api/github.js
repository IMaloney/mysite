const axios = require('axios');
const keys = require('../config/keys');

export default axios.create({
	baseURL: 'https://api.github.com',
	params: {
		Authorization: `token ${keys.githubToken}`
	}
});

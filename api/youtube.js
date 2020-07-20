const axios = require('axios');
const keys = require('../config/keys');

const youtube = axios.create({
	baseURL: 'https://www.googleapis.com/youtube/v3',
	params: {
		part: 'snippet',
		channelId: 'UC23TQ-jzHvbFpgkrG3__odg',
		type: 'video',
		date: 'order',
		maxResult: 20,
		key: keys.youtubeKey
	}
});

module.exports = youtube;
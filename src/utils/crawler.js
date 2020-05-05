const axios = require('axios');
const cheerio = require('cheerio');

module.exports = {
    async fetchPage(url) {
        const result = await axios.get(url);
        return cheerio.load(result.data);
    }
}
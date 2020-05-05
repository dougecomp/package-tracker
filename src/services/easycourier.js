const crawler = require('../utils/crawler');

const BASE_URL = "http://mostrar.info/r?i=";

async function extractEventsFromTrackNumber(trackNumber) {
    let eventsData = [];
    const $ = await crawler.fetchPage(BASE_URL+trackNumber);

    let events = $("body > div > div.container-table100 > div > div > div");
    events.each((indexEvents, event) => {
        if(indexEvents < 3) return;
        let columns = $(event).children().toArray();
        eventsData.push({
            description: $(columns[2]).text(),
            dateTime: $(columns[0]).text() + " " + $(columns[1]).text(),
            city: '',
            uf: '',
        });
        
    });

    return eventsData;
    
}

module.exports = {
    extractEventsFromTrackNumber,
}
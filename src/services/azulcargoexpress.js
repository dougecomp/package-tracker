const crawler = require('../utils/crawler');

const BASE_URL = "https://hmg.onlineapp.com.br/EDIv2_rastreioML/Rastreio?TrackingNumber=";

async function extractEventsFromTrackNumber(trackNumber) {
    let eventsData = [];
    const $ = await crawler.fetchPage(BASE_URL+trackNumber);

    let events = $("table > tbody > tr:nth-child(2) > td > table tr");
    events.each((indexEvents, event) => {
        if(indexEvents == 0) return;
        let columns = $(event).children().toArray();
        eventsData.push({
            description: $(columns[1]).text(),
            dateTime: $(columns[2]).text(),
            city: $(columns[4]).text(),
            uf: $(columns[5]).text(),
        });
        
    });

    return eventsData;
    
}

module.exports = {
    extractEventsFromTrackNumber,
}
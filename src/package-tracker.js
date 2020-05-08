const {
    azulcargoexpress,
    easycourier,
} = require('./services');

module.exports = {
    async fetchEventsFromAzulCargoExpress(trackNumber) {
        return await azulcargoexpress.extractEventsFromTrackNumber(trackNumber);
    },
    async fetchEventsFromEasyCourier(trackNumber) {
        return await easycourier.extractEventsFromTrackNumber(trackNumber);
    }
}
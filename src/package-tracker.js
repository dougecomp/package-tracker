const {
    azulcargoexpress,
    easycourier,
} = require('./services');

module.exports = {
    async fetchEventsFromAzulCargoExpress(trackNumber) {
        await azulcargoexpress.extractEventsFromTrackNumber(trackNumber);
    },
    async fetchEventsFromEasyCourier(trackNumber) {
        await easycourier.extractEventsFromTrackNumber(trackNumber);
    }
}
const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'https://api.darksky.net/forecast/2bbcf501fbfa6e13593bcd5a46571821/' + latitude + ',' + longitude

    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to weather service!', undefined)
        } else if (body.error) {
            callback('Unable to find location', undefined)
        } else {
            callback(undefined, body.daily.data[0].summary + ' It is currently ' + body.currently.temperature + ' degress out. There is a ' + body.currently.precipProbability + '% chance of rain. Possibly max temputare of ' + body.daily.data[0].temperatureMax + ' and minimum of ' + body.daily.data[0].temperatureMin + '.')
        }
    })
}

module.exports = forecast
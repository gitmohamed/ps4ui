const express = require('express')
const app = express();

app.use(express.static(__dirname + '/dist'))

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
}).listen(1337, () => {
    console.log('Listening at port 1337...')
})
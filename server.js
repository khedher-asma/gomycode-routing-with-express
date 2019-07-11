const express = require('express');
const app = express();


app.use(date = (req, res, next) => {
    let curentDate = new Date().getHours();
    if (curentDate >= 8 && curentDate <= 18) {
        next()
    } else {
        res.status(503).send('Our office is not open now');
    }
})
app.use(express.static(__dirname + '/public'))

app.listen(3000, (err) => {
    if (err) console.log('error')
    else console.log('ok')
})
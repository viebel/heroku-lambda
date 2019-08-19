const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000

express()
  .use(express.static(path.join(__dirname, 'public')))
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
  .get('/', (req, res) => res.render('pages/index'))
    .get('/google-drive-change', (req, res) => {
        console.log(`received a google drive change: ${req}\n ${req.body}`);
        res.send('Got the info');
    })
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))

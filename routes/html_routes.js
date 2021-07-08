const router = require('express').Router()
const path = require('path')



// sends the index to be displayed on the home page
router.get('/', (req, res) =>
res.sendFile(`${__dirname}/../public/index.html`)
)


// sends the exercise file to be displayed on the exercise page
router.get('/exercise', (req, res) =>
res.sendFile(path.join(`${__dirname}/../public/exercise.html`))
)


// sends the stats file to be displayed on the home dashboard page
router.get('/stats', (req, res) =>
    res.sendFile(path.join(`${__dirname}/../public/stats.html`))
)



// exports the the router
module.exports = router
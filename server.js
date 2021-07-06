const express = require('express')
const app = express()
const path = require('path')

const PORT = process.env.PORT || 3000

app.use(express.static('public'))

app.get('/', (req, res) =>
    res.sendFile(path.join(__dirname, 'public', 'index.html'))
)

app.get('/stats', (req, res) =>
    res.sendFile(path.join(__dirname, 'public', 'stats.html'))
)

app.get('/exercise', (req, res) =>
    res.sendFile(path.join(__dirname, 'public', 'exercise.html'))
)






app.listen(PORT, () => console.log(`Server has started on Port: ${PORT}`))

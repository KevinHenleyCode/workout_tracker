const express = require('express')
const app = express()

const PORT = process.env.PORT || 3000


app.get('/', (req, res) =>
    res.send('<h1>Testing 1 2 3</h1>')
)






app.listen(PORT, () => console.log(`Server has started on Port: ${PORT}`))
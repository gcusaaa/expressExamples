import express from 'express'

const app = express()
const port = +process.env.PORT || 4000

app.get('/', (req, res) => {
    res.status(200).json({
        status: res.statusCode,
        msg: 'You\'re home'
    })
})

app.get('/About', (req, res) => {
    res.status(200).json({
        status: res.statusCode,
        msg: 'About Page'
    })
})

app.all('*', (req, res) => {
    res.json({
        status: 404,
        msg: '404 Page'
    })
})
app.listen(port)

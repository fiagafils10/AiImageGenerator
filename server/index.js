import express from 'express'
import * as dotenv from 'dotenv'
import cors from 'cors'
import connectDB from './db/connect.js'

import postRoute from './routes/post.route.js'
import dalleRoute from './routes/dalle.route.js'


dotenv.config() // allow us to import variable from .env file
const app = express()


app.use(cors())
app.use(express.json({limit:'50mb'}))

app.get('/', async (req,res) => {
    res.send('hello from dall-e!')
})


app.use('/api/v1/post', postRoute )
app.use('/api/v1/dalle', dalleRoute )



const startServer = async () => {

    try {
        connectDB(process.env.MONGODB_URL)
        app.listen(8080, ()=> console.log('server start on port 8080'))
    } catch (error) {
        
    }
}

startServer()
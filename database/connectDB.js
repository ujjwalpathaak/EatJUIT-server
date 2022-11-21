import * as dotenv from 'dotenv'
dotenv.config()
import mongoose from "mongoose"

const DB_URL = "#"

const Connection = () => {
    try {
        mongoose.connect(DB_URL, { useUnifiedTopology: true })
        console.log("database connected")
    } catch (error) {
        console.log(error)        
    }
}

export default Connection
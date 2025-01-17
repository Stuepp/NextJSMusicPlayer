import { Pool } from 'pg'

export const pool = new Pool({
    user: process.env.USER_NAME,
    host: process.env.HOST_NAME,
    database: process.env.DB_NAME,
    password: process.env.DB_PASSWORD,
    port: process.env.PORT_NUMBER
})

export default async function dbConnect(){
    await pool.connect((err, clientm, release)=>{
        if(err){
            return console.err('Error in connection', err.stack)
        }
        clientm.query('SELECT NOW()', (err, result)=>{
            release()
            if(err){
                console.error('Error in query execution', err.stack)
            }
            console.log('Connected to database.', result.rows)
        })
    })
}
import { pool } from "../config/db.js";

export const addUserQuery = async(name, lastname, email, password) => {
    const sql = {
        text: 'INSERT INTO users (name, lastname, email, password) VALUES ($1, $2, $3, $4)',
        values: [name, lastname, email, password]
    }
    try {
        const response = await pool.query(sql)
        if(response.rowCount > 0){
            return response.rows[0]
        }else {
            return new Error('No se pudo registrar el usuario')
        }
    } catch (error) {
        console.log(error)
    }
}
import express from 'express';
import { home, random } from '../controllers/controller.js'
const router = express.Router()

router.get('/', home )

router.get('/random', random )

router.get('*', (req, res)=>{
res.send('404 - page not found')
})


export default router
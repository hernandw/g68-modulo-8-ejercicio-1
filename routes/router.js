import express from 'express';
import { home, random, getUsers, getGuitars, getGuitarById } from '../controllers/controller.js'
const router = express.Router()

router.get('/', home )

router.get('/random', random )

router.get('/users', getUsers )

router.get('/guitars/v1', getGuitars )

router.get("/guitars/:id", getGuitarById);

router.get('*', (req, res)=>{
res.send('404 - page not found')
})


export default router
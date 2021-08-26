import { Router, Request, Response } from 'express'
import contactUsRoutes from './routes/contactUsRoutes'

const routes = Router()

routes.use('/api/', contactUsRoutes)

routes.use((request: Request, response: Response) => {
    response.sendStatus(404)
})

export default routes
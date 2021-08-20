import { Router } from 'express'
import ContactUsController from '../controllers/ContactUsController'

const contactUsRoutes = Router();

contactUsRoutes.post('/contactus/sendmail',ContactUsController.sendMailContactUs)

export default contactUsRoutes
import { Router } from 'express'
import ContactUsController from '../controllers/ContactUsController'

const contactUsRoutes = Router();
const contactUsController = new ContactUsController();

contactUsRoutes.post('/contactus/sendmail', contactUsController.sendMailContactUs)

export default contactUsRoutes
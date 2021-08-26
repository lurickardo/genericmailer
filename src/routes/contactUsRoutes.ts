import { Router } from 'express'
import ContactUsController from '../controllers/ContactUsController'
import multer from 'multer'
import multerConfig from '../config/multer'

const contactUsRoutes = Router()

contactUsRoutes.post('/contactus/sendmail', multer(multerConfig).array("files", 2) ,ContactUsController.sendMailContactUs)

export default contactUsRoutes
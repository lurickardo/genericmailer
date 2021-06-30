import { Request, Response } from 'express'
import ISendMail from '../templateInterfaces/ISendMail'
import FormatEmailContactUs from '../templateMails/FormatEmailContactUs'
import SendMail from '../services/SendMail'

export default class ContactUsController {

  async sendMailContactUs(request: Request, response: Response) {
    try {
        const data = request.body as ISendMail;

        const sendMail = new SendMail();
        const formatMailContactUs = new FormatEmailContactUs();

        const mailFormatted = formatMailContactUs.format(data) as string;

        const recipients = [
          process.env.USER_MAIL,
        ] as Array<string>
        
        const emailEnviado = await sendMail.send(null, recipients, "Email solicitando contato", mailFormatted)

        return response.status(200).json({emailEnviado})
    } catch (error) {
        return response.status(500).json({ message: `${error}` })
    }
  }
}
import { Request, Response } from 'express'
import { typeSendMail } from '../templateTypes/typeSendMail'
import PatternMail from '../config/PatternMail'
import SendMail from '../services/SendMail'

export default class ContactUsController {

  static async sendMailContactUs(request: Request, response: Response) {
    try {
      const data = request.body as typeSendMail;

      const sendMail = new SendMail();

      const templateMail = await PatternMail.generateTemplateMail(data);
      console.log(templateMail);
      
      return response.status(200).json({ message: "E-mail enviado com sucesso!" })
      const recipients = [
        process.env.USER_MAIL,
      ] as Array<string>

      await sendMail.send(data.by, recipients, `Email solicitando contato: ${data.subject}`, 'templateMail')

      return response.status(200).json({ message: "E-mail enviado com sucesso!" })
    } catch (error) {
      return response.status(500).json({ message: `${error}` })
    }
  }
}
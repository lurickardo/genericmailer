import Twig, { RenderOptions } from 'twig'

export default class templateMail {
    static async generateTemplateMail(data: Object, file: string | null = 'default.twig'): Promise<any> {
        try {
            return new Promise((resolve, reject) => {
                Twig.renderFile(`${__dirname}/../mailTemplates/${file}`, data, (error, result) => {
                    if(error) 
                        reject(error)
                    resolve(result)
                })
            })
        } catch (error) {
            console.log(`Error sending email: ${error}`)
        }
    }
}
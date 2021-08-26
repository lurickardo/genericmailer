import Twig from 'twig'

export default class templateMail {
    public static async generateTemplateMail(data: Object, file: string | null = 'default.twig'): Promise<any> {
        try {
            return new Promise((resolve: Function, reject: Function) => {
                Twig.renderFile(`${__dirname}/../mailTemplates/${file}`, data, (error: Error, result: Function) => {
                    if(error) 
                        reject(error)
                    resolve(result)
                })
            })
        } catch (error: any) {
            console.log(`Erro ao gerar template de e-mail: ${error}`)
        }
    }
}
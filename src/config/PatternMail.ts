import Twig from 'twig'

export default class templateMail {
    static async generateTemplateMail(data: Object, file: string | null = 'default.twig') {
        try {
            const template = Twig.compile('aaaa') //TODO
            console.log(template);
            
            return '';
        } catch (error) {
            console.log(`Error sending email: ${error}`)
        }
    }
}
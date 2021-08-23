import {typeSendMail} from '../templateTypes/typeSendMail'

export default class FormatMailContactUs {
    static format (data: typeSendMail) {
        return `<h1>Mensagem enviada de: ${data.name}.</h1>
        <br>
        Telefone: ${data.phone}
        <br> Mensagem: 
        ${data.content}
        `;
    }
}
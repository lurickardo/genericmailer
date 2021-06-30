import ISendMail from '../templateInterfaces/ISendMail'

export default class FormatMailContactUs {
    format (data: ISendMail) {
        return `<h1>Mensagem enviada de: ${data.nmClient}.</h1>
        <br>
        Empresa: ${data.nmCompany}
        <br>
        Telefone: ${data.nmPhone}
        <br>
        ${data.dsMessage}
        `;
    }
}
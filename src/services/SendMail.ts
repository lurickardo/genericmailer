import nodemailer, { SentMessageInfo } from 'nodemailer'

export default class sendMail {
    public async send(by: string | null, recipients: Array<string>, subject: string, content: string): Promise<SentMessageInfo> {
        try {
            const transporter = nodemailer.createTransport({
                host: "smtp.gmail.com",
                port: 587,
                secure: false,
                auth: {
                    user: process.env.USER_MAIL,
                    pass: process.env.PASSWORD_MAIL
                }
            })

            transporter.verify((error) => {
                if (error)
                    return console.log(error);
                return;
            })

            const from = by !== null ? by : process.env.USER_MAIL;

            return await transporter.sendMail({
                from: from,
                to: recipients,
                subject: subject,
                html: content
            })
        } catch (error) {
            console.log(error);
        }
    }
}
export type typeSendMail = {
    by: string;
    name: string;
    subject: string;
    phone?: string;
    content: string;
    attachments?: attachmentsMail
}

export type attachmentsMail = [
    {
        file: string,
        path: string
    }
]
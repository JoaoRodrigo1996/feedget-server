import nodemailer from "nodemailer"

import { MailAdapter, SendMailData } from "../mail-adapter"

const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "43da1fcbfeebd7",
    pass: "fbb1ca48cfad19",
  },
})

export class NodemailerMailAdapter implements MailAdapter {
  async sendMail({ subject, body }: SendMailData) {
    await transport.sendMail({
      from: "Equipe Feeget <oi@feedget.com>",
      to: "Rodrigo Mesquita <rodrigo.mesquita96@hotmail.com>",
      subject,
      html: body,
    })
  }
}

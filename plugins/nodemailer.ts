import nodemailer from "nodemailer";

let transporter = nodemailer.createTransport({
  host: "mail.loofytech.com",
  port: 465,
  secure: true, // true for 465, false for other ports
  auth: {
    user: "client@loofytech.com", // generated ethereal user
    pass: "8-Gq+ri}(1Ks", // generated ethereal password
  },
});

export const sendMain = async (name: string, email: string, phone: string, text: string) => {
  let info = await transporter.sendMail({
    from: `"Client ${name} 👻" <client@loofytech.com>`, // sender address
    to: "loofytech0@gmail.com, agungd3v@gmail.com", // list of receivers
    subject: "Order Service", // Subject line
    html: `
      <style>
        table {
          padding: 3px;
        }
        table, tr, td {
          border: 1px solid #000;
          border-collapse: collapse;
        }
      </style>
      <table>
        <tbody>
          <tr>
            <td>Full Name</td>
            <td>:</td>
            <td>${name}</td>
          </tr>
          <tr>
            <td>Email Address</td>
            <td>:</td>
            <td>${email}</td>
          </tr>
          <tr>
            <td>Phone Number</td>
            <td>:</td>
            <td>${phone}</td>
          </tr>
          <tr>
            <td>Message</td>
            <td>:</td>
            <td>${text}</td>
          </tr>
        </tbody>
      </table>
    `,
  });

  return info;
}
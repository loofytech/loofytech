import nc from "next-connect";
import { apiHandler } from "@/utils/apiHandler";
import { sendMain } from "@/plugins/nodemailer";

const handler = nc(apiHandler);

handler
  .post(async (req, res) => {
    try {
      const {name, email, phone, message} = JSON.parse(req.body);
      await sendMain(name, email, phone,  message);

      return res.json({message: "Pesanmu telah terkirim", status: 200});
    } catch (error) {
      return res.status(500).json({error, status: 500});
    }
  })

export default handler;
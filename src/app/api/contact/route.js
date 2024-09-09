let nodemailer = require("nodemailer");

export async function POST(req) {
  const data = await req.json();

  try {
    const transport = nodemailer.createTransport({
      host: process.env.MAIL_HOST,
      secure: true,
      port: 465,
      auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS,
      },
    });
    await transport.sendMail({
      from: process.env.MAIL_USER,
      to: `logicoycoherente@gmail.com`,
      subject: "Bass Pool Group",
      html: `<div> 
			<p> <b>Full Name: </b> ${data.name} </p>
			<p> <b>Email: </b> ${data.email} </p>
			<p> <b>Tel: </b> ${data.phone} </p>
			<p> <b>message: </b> ${data.message} </p>
			</div>`,
    });

    return new Response("sent");
  } catch (err) {
    return new Response(err);
  }
}

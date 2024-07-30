const nodemailer = require("nodemailer");

module.exports.sendMail = async (req, res, user) => {

    const transport = nodemailer.createTransport({
        service:"Gmail",
        host: "smtp.ethereal.email",
        port: 465,
        auth: {
            user: "kartikkp079@gmail.com",
            pass:"wxxkjcpnimnwhlwt",
        },
    });

    const mailOptions ={
        from:`"Social" <kartikkp079@gmail.com>`,
        to: req.body.email,
        subject: "new subscriber",
        text:`Welcome ${req.body.username} you have been subsribed to our page ,We will notify you with new posts and activities`,
        // html:`<h1> done..</h1>`,
    };

    transport.sendMail(mailOptions,(err, info) => {
        if (err) return res.send(err)
        console.log("mail send");
return res.send(`Welcome ${req.body.username} you have been succesfully registered and subscribed to our page , Please check you email for recent updates. <a href="/">Go back to home</a>`)

   
    });
};
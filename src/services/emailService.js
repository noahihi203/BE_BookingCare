require("dotenv").config();
const nodemailer = require("nodemailer");

let sendSimpleEmail = async (dataSend) => {
  let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
      user: process.env.EMAIL_APP,
      pass: process.env.EMAIL_APP_PASSWORD,
    },
  });
  let info = await transporter.sendMail({
    from: '"Noah check send email 👻" <da02470247@gmail.com>',
    to: dataSend.receiverEmail,
    subject: "Thông tin đặt lịch khám bệnh",
    html: getBodyHTMLEmail(dataSend),
  });
};

let getBodyHTMLEmail = (dataSend) => {
  let result = "";
  if (dataSend.language === "vi") {
    result = `
    <h3>Xin chào ${dataSend.patientName} </h3>
    <p>Bạn nhận được email này vì đã đặt lịch online trên BookC Noah</p>
    <p>Thông tin lịch hẹn của bạn như sau:</p>
    <div><b>Thời gian: ${dataSend.time}</b></div>
    <div><b>Bác sĩ: ${dataSend.doctorName}</b></div>
    <p>Nếu các thông tin trên là đúng sự thật, vui lòng click vào link bên dưới để xác nhận và hoàn tất thủ tục đặt lịch khám bệnh.</p>
    <div><a href=${dataSend.redirectLink} target="_blank">Click here</a></div>
    <div>Xin chân thành cảm ơn!</div>
    `;
  }
  if (dataSend.language === "en") {
    result = `
    <h3>Dear ${dataSend.patientName} </h3>
    <p>You received this email because you booked an appointment online on BookC Noah</p>
    <p>Your appointment details are as follows:</p>
    <div><b>Time: ${dataSend.time}</b></div>
    <div><b>Doctor: ${dataSend.doctorName}</b></div>
    <p>If the above information is correct, please click the link below to confirm and complete the appointment booking procedure.</p>
    <div><a href=${dataSend.redirectLink} target="_blank">Click here</a></div>
    <div>Thank you very much!</div>
    `;
  }
  return result;
};

module.exports = {
  sendSimpleEmail,
  getBodyHTMLEmail,
};

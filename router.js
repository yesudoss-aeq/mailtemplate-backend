const express = require("express");
const router = express.Router();
const nodemailer = require("nodemailer");
require("dotenv").config();

const password = process.env.PASS;
const fromMail = process.env.MAIL;

const transporter = nodemailer.createTransport({
  service: "gmail",
  host: "smtp.gmail.com",
  port: 587,
  auth: {
    user: fromMail,
    pass: password,
  },
});

router.get("/:mail", async (req, res) => {
  const mail = req.params.mail;

  const createMail = {
    from: fromMail,
    to: mail,
    subject: "Hello ✔",
    html: `<body
    style="
      padding: 0;
      margin: 0;
      box-sizing: border-box;
      font-family: 'Poppins', sans-serif;
    "
  >
    <div
      style="
        width: 360px;
        background: #edf1fd;
        margin: auto;
        padding: 16px;
        box-sizing: border-box;
      "
    >
      <div style="width: 100%">
        <div style="width: fit-content; margin: 0px auto; height: 7%;padding-bottom:15px">
        <img src=${"https://yesudoss-aeq.github.io/mail-template/assets/Logo.png"} alt="logo" />
        </div>
  
        <div
          style="
            box-shadow: 0px 4px 10px 0px #0000001a;
            height: 93%;
            background-color: #ffffff;
            position: relative;
          "
        >
          <div style="height: 50%; position: relative">
            <div
              style="
                height: 100%;
                background-image: url(
                  ${"https://yesudoss-aeq.github.io/mail-template/assets/background.png"}
                );
                background-repeat: no-repeat;
                background-size: contain;
                background-size: 100% auto;
              "
            >
              <div style="width: fit-content; margin-left: auto">
                <img
                  style="margin-top: -20px"
                  src=${"https://yesudoss-aeq.github.io/mail-template/assets/pyramidLogo.png"}
                  alt="logo"
                />
              </div>
              <div style="padding-top: 25px; width: 100%">
                <p
                  style="
                    font-family: Poppins;
                    font-size: 14px;
                    font-weight: 600;
                    line-height: 21px;
                    color: #ffffff;
                    margin: 0;
                    padding-bottom: 7px;
                    text-align: center;
                  "
                >
                  Join Your AI Interview at Aequalis!
                </p>
                <h2
                  style="
                    font-family: Poppins;
                    font-size: 34px;
                    font-weight: 600;
                    line-height: 51px;
                    margin: 0;
                    color: #ffffff;
                    padding-bottom: 30px;
                    text-align: center;
                  "
                >
                  Congratulations!
                </h2>
                <div style="width: fit-content; margin: 0px auto">
                  <button
                    style="
                      width: 175px;
                      height: 44px;
                      border-radius: 10px;
                      box-shadow: 0px 4px 4px 0px #00000040;
                      background-color: #ffffff;
                      border: none;
                      font-family: Poppins;
                      font-size: 16px;
                      font-weight: 600;
                      line-height: 24px;
                      color: #5585fe;
                      cursor: pointer;
                    "
                  >
                    Attend Now
                  </button>
                </div>
              </div>
              <div style="width: fit-content; margin: 73px auto 0px auto">
                <img src=${"https://yesudoss-aeq.github.io/mail-template/assets/botImageGroup.png"} alt="BotImage" />
              </div>
            </div>
          </div>
  
          <div>
            <div
              style="
                padding: 20px;
                box-sizing: border-box;
                border-bottom: 2px solid #e5edff;
              "
            >
              <div style="width: 100%; padding-bottom: 16px; margin-top: 20px">
                <h2
                  style="
                    font-family: Poppins;
                    font-size: 16px;
                    font-weight: 600;
                    line-height: 24px;
                    color: #0e162f;
                    margin: 0;
                    padding-bottom: 10px;
                  "
                >
                👋🏻 Hi ${"John"},
                </h2>
                <p
                  style="
                    font-family: Poppins;
                    font-size: 14px;
                    font-weight: 400;
                    line-height: 21px;
                    color: #555454;
                    letter-spacing: 1px;
                    margin: 0;
                  "
                >
                ${"Excited to invite you to our AI-enabled interview!"}
                </p>
              </div>
              <div style="width: 100%; padding-bottom: 25px">
                <p
                  style="
                    font-family: Poppins;
                    font-size: 14px;
                    font-weight: 400;
                    line-height: 21px;
                    margin: 0;
                    color: #3064e9;
                    padding-bottom: 5px;
                  "
                >
                  📆 Choose your preferred time.
                </p>
                <p
                  style="
                    font-family: Poppins;
                    font-size: 14px;
                    font-weight: 400;
                    line-height: 21px;
                    color: #121212;
                    margin: 0;
                  "
                >
                  🔗 Interview Link:<span style="color: #3064e9"
                    ><a style="text-decoration: none" href=${"www.google.com"}
                      >${"www.easyhire.aeq....com"}</a
                    >
                  </span>
                </p>
              </div>
              <div style="width: 100%">
                <p
                  style="
                    font-family: Poppins;
                    font-size: 12px;
                    font-weight: 400;
                    line-height: 18px;
                    color: #555454;
                    margin: 0;
                    padding-bottom: 5px;
                    text-align: center;
                  "
                >
                  Questions? We’re here to<span style="color: #3064e9">
                    <a
                      style="text-decoration: none; color: #3064e9"
                      href=${"www.google.com"}
                      >${"help."}</a
                    ></span
                  >
  
                  Good luck!
                </p>
                <p
                  style="
                    font-family: Poppins;
                    font-size: 12px;
                    font-weight: 400;
                    line-height: 18px;
                    color: #555454;
                    margin: 0;
                    text-align: center;
                  "
                >
                  🌐 Best experienced on Chrome.
                </p>
              </div>
            </div>
            <div>
              <div>
                <div
                  style="
                    margin-left: 20px;
                    margin-top: 20px;
                    float: left;
                    padding-bottom: 15px;
                  "
                >
                  <p
                    style="
                      font-weight: 400;
                      font-size: 10px;
                      line-height: 15px;
                      color: #121212;
                      margin: 0;
                      padding-bottom: 4px;
                    "
                  >
                    Best Regards,
                  </p>
                  <h2
                    style="
                      font-weight: 400;
                      font-size: 14px;
                      line-height: 15px;
                      color: #121212;
                      margin: 0;
                      padding-bottom: 4px;
                    "
                  >
                  ${"Suraj Mandal"}
                  </h2>
                  <p
                    style="
                      font-weight: 400;
                      font-size: 10px;
                      line-height: 15px;
                      color: #555454;
                      margin: 0;
                      padding-bottom: 4px;
                    "
                  >
                  ${"UX Designer"}
                  </p>
                  <p
                    style="
                      font-weight: 400;
                      font-size: 10px;
                      line-height: 15px;
                      color: #555454;
                      margin: 0;
                    "
                  >
                  ${"Aequalis"}
                  </p>
                </div>
                <div style="float: right; margin-right: 20px; margin-top: 20px">
                  <img src=${"https://yesudoss-aeq.github.io/mail-template/assets/LogoAeq.png"} alt="AequalisLogo" />
                </div>
              </div>
              <div style="background-color: #c2d4ff; clear: both">
                <div
                  style="
                    width: fit-content;
                    padding-top: 5px;
                    margin: auto;
                    height: 25px;
                  "
                >
                  <div style="float: left">
                    <p
                      style="
                        font-family: League Spartan;
                        font-size: 14px;
                        font-weight: 600;
                        line-height: 13px;
                        color: #05112e99;
                        margin: 0;
                        padding-right: 13px;
                        padding-top: 2px;
                      "
                    >
                      powered by
                    </p>
                  </div>
                  <div style="float: right">
                    <img src=${"https://yesudoss-aeq.github.io/mail-template/assets/aequalisHireLogo.png"} alt="easyHire" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </body>`,
  };

  transporter.sendMail(createMail, (error, info) => {
    if (error) {
      console.log("error:", error);
      res.send("Mail sending has been failed");
    } else {
      console.log("mail sent sucessfully", info.response);
      res.send("mail sent sucessfully");
    }
  });
});

module.exports = router;

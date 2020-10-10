import nodemailer from 'nodemailer'

export const sendEmail = async (user, token) => {
  const href = `${process.env.BACKEND_PATH}/authentications/email-confirmation?token=${token}`

  const buttonText = 'Confirm'

  const subject = 'Welcome to MaviDurak-IO'

  const header = `Hi <strong><em>${user.name}</em></strong>, time to get started ⏳`

  const message = `
    You can store, visualize and categorize your data on <em>MaviDurak-IO</em> website.
    We provide you with an easy interface to do this. You are now on <em>MaviDurak-IO</em>, 
    but first you have to complete the registration process.
    <br><br>
    Don't worry, one click is all it takes. Please click the button below that says "<strong>${buttonText}</strong>".`

  const htmlCode = `
    <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
    <html xmlns="http://www.w3.org/1999/xhtml">
      <head>
        <title>
        </title>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
        <meta name="viewport" content="width=device-width">
        <style type="text/css">body, html {
          margin: 0px;
          padding: 0px;
          -webkit-font-smoothing: antialiased;
          text-size-adjust: none;
          width: 100% !important;
        }
          table td, table {
          }
          #outlook a {
            padding: 0px;
          }
          .ExternalClass, .ExternalClass p, .ExternalClass span, .ExternalClass font, .ExternalClass td, .ExternalClass div {
            line-height: 100%;
          }
          .ExternalClass {
            width: 100%;
          }
          @media only screen and (max-width: 480px) {
            table tr td table.edsocialfollowcontainer {
              width: auto !important;
            }
            table, table tr td, table td {
              width: 100% !important;
            }
            img {
              width: inherit;
            }
            .layer_2 {
              max-width: 100% !important;
            }
            .edsocialfollowcontainer table {
              max-width: 25% !important;
            }
            .edsocialfollowcontainer table td {
              padding: 10px !important;
            }
          }
        </style>
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.7.2/css/all.css" integrity="sha384-fnmOCqbTlWIlj8LyTjo7mOUStjsKC4pOpQbqyi7RrhN7udi9RwhKkMHpvLbHG9Sr" crossorigin="anonymous">
        <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/spectrum/1.8.0/spectrum.min.css">
      </head>
      <body style="padding:0; margin: 0;background: #efefef" data-gr-c-s-loaded="true">
        <table style="height: 100%; width: 100%; background-color: #efefef;" align="center">
          <tbody>
            <tr>
              <td valign="top" id="dbody" data-version="2.31" style="width: 100%; height: 100%; padding-top: 30px; padding-bottom: 30px; background-color: #efefef;">
                <!--[if (gte mso 9)|(IE)]><table align="center" style="max-width:600px" width="600" cellpadding="0" cellspacing="0" border="0"><tr><td valign="top"><![endif]-->
                <table class="layer_1" align="center" border="0" cellpadding="0" cellspacing="0" style="max-width: 600px; box-sizing: border-box; width: 100%; margin: 0px auto;">
                  <tbody>
                    <tr>
                      <td class="drow" valign="top" align="center" style="background-color: #ffffff; box-sizing: border-box; font-size: 0px; text-align: center;">
                        <!--[if (gte mso 9)|(IE)]><table width="100%" align="center" cellpadding="0" cellspacing="0" border="0"><tr><td valign="top"><![endif]-->
                        <div class="layer_2" style="max-width: 600px; display: inline-block; vertical-align: top; width: 100%;">
                          <table border="0" cellspacing="0" cellpadding="0" class="edcontent" style="border-collapse: collapse;width:100%">
                            <tbody>
                              <tr>
                                <td valign="top" class="edimg" style="padding: 20px; box-sizing: border-box; text-align: center;">
                                  <img src="https://s3.amazonaws.com/media-p.slid.es/uploads/292291/images/1309784/mavidurak-io-large-dark.png" alt="MaviDurak-IO" width="544" style="border-width: 0px; border-style: none; max-width: 544px; width: 100%;">
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                        <!--[if (gte mso 9)|(IE)]></td></tr></table><![endif]-->
                      </td>
                    </tr>
                    <tr>
                      <td class="drow" valign="top" align="center" style="background-color: #ffffff; box-sizing: border-box; font-size: 0px; text-align: center;">
                        <!--[if (gte mso 9)|(IE)]><table width="100%" align="center" cellpadding="0" cellspacing="0" border="0"><tr><td valign="top"><![endif]-->
                        <div class="layer_2" style="max-width: 600px; display: inline-block; vertical-align: top; width: 100%;">
                          <table border="0" cellspacing="0" class="edcontent" style="border-collapse: collapse;width:100%">
                            <tbody>
                              <tr>
                                <td valign="top" class="edtext" style="padding: 10px;padding-bottom:5px; text-align: left; color: #5f5f5f; font-size: 14px; font-family: Helvetica, Arial, sans-serif; word-break: break-word; direction: ltr; box-sizing: border-box;">
                                  <p class="style1 text-center" style="text-align: center; margin: 0px; padding: 0px; color: #424a60; font-size: 28px; font-family: Helvetica, Arial, sans-serif;">
                                  
                                  ${header}
                                  
                                  </p>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                        <!--[if (gte mso 9)|(IE)]></td></tr></table><![endif]-->
                      </td>
                    </tr>
                    <tr>
                      <td class="drow" valign="top" align="center" style="background-color: #ffffff; box-sizing: border-box; font-size: 0px; text-align: center;">
                        <!--[if (gte mso 9)|(IE)]><table width="100%" align="center" cellpadding="0" cellspacing="0" border="0"><tr><td valign="top"><![endif]-->
                        <div class="layer_2" style="max-width: 600px; display: inline-block; vertical-align: top; width: 100%;">
                          <table border="0" cellspacing="0" cellpadding="0" class="edcontent" style="border-collapse: collapse;width:100%">
                            <tbody>
                              <tr>
                                <td valign="top" class="emptycell" style="padding: 10px;">
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                        <!--[if (gte mso 9)|(IE)]></td></tr></table><![endif]-->
                      </td>
                    </tr>
                    <tr>
                      <td class="drow" valign="top" align="center" style="background-color: #ffffff; box-sizing: border-box; font-size: 0px; text-align: center;">
                        <!--[if (gte mso 9)|(IE)]><table width="100%" align="center" cellpadding="0" cellspacing="0" border="0"><tr><td valign="top"><![endif]-->
                        <div class="layer_2" style="max-width: 600px; display: inline-block; vertical-align: top; width: 100%;">
                          <table border="0" cellspacing="0" class="edcontent" style="border-collapse: collapse;width:100%">
                            <tbody>
                              <tr>
                                <td valign="top" class="edtext" style="padding: 20px; text-align: left; color: #5f5f5f; font-size: 14px; font-family: Helvetica, Arial, sans-serif; word-break: break-word; direction: ltr; box-sizing: border-box;">
                                  <p style="margin: 0px; padding: 0px;">
                                  
                                  ${message}
                                  
                                  </p>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                        <!--[if (gte mso 9)|(IE)]></td></tr></table><![endif]-->
                      </td>
                    </tr>
                    <tr>
                      <td class="drow" valign="top" align="center" style="background-color: #ffffff; box-sizing: border-box; font-size: 0px; text-align: center;">
                        <!--[if (gte mso 9)|(IE)]><table width="100%" align="center" cellpadding="0" cellspacing="0" border="0"><tr><td valign="top"><![endif]-->
                        <div class="layer_2" style="max-width: 600px; display: inline-block; vertical-align: top; width: 100%;">
                          <table border="0" cellspacing="0" class="edcontent" style="border-collapse: collapse;width:100%">
                            <tbody>
                              <tr>
                                <td valign="top" class="edbutton" style="padding: 20px;">
                                  <table cellspacing="0" cellpadding="0" style="text-align: center;margin:0 auto;" align="center">
                                    <tbody>
                                      <tr>
                                        <td align="center" style="border-radius: 4px; padding: 12px; background: #3498db;">
                                        
                                          <a href="${href}" target="_blank" style="color: #ffffff; font-size: 16px; font-family: Helvetica, Arial, sans-serif; font-weight: normal; text-decoration: none; display: inline-block;"><span style="color: #ffffff;">${buttonText}<br></span></a></td>
                                      
                                        </tr>
                                    </tbody>
                                  </table>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                        <!--[if (gte mso 9)|(IE)]></td></tr></table><![endif]-->
                      </td>
                    </tr>
                    <tr>
                      <td class="drow" valign="top" align="center" style="background-color: #ffffff; box-sizing: border-box; font-size: 0px; text-align: center;">
                        <!--[if (gte mso 9)|(IE)]><table width="100%" align="center" cellpadding="0" cellspacing="0" border="0"><tr><td valign="top"><![endif]-->
                        <div class="layer_2" style="display: inline-block; vertical-align: top; width: 100%; max-width: 600px;">
                          <table border="0" cellspacing="0" class="edcontent" style="border-collapse: collapse;width:100%">
                            <tbody>
                              <tr>
                                <td valign="top" class="edtext" style="padding: 14px; text-align: left; color: #5f5f5f; font-size: 14px; font-family: Helvetica, Arial, sans-serif; word-break: break-word; direction: ltr; box-sizing: border-box;">
                                  <p class="text-center" style="text-align: center; margin: 0px; padding: 0px;">
                                  
                                  or using this link 
                                    <strong>
                                      <a href="${href}" target="_blank" style="color: #3498db; text-decoration: none;">${href}</a>
                                    </strong>                                
                                  
                                      </p>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                        <!--[if (gte mso 9)|(IE)]></td></tr></table><![endif]-->
                      </td>
                    </tr>
                    <tr>
                      <td class="drow" valign="top" align="center" style="background-color: #ffffff; box-sizing: border-box; font-size: 0px; text-align: center;">
                        <!--[if (gte mso 9)|(IE)]><table width="100%" align="center" cellpadding="0" cellspacing="0" border="0"><tr><td valign="top"><![endif]-->
                        <div class="layer_2" style="max-width: 600px; display: inline-block; vertical-align: top; width: 100%;">
                          <table border="0" cellspacing="0" class="edcontent" style="border-collapse: collapse;width:100%">
                            <tbody>
                              <tr>
                                <td valign="top" class="edtext" style="padding: 10px; text-align: left; color: #5f5f5f; font-size: 12px; font-family: Helvetica, Arial, sans-serif; word-break: break-word; direction: ltr; box-sizing: border-box;">
                                  <hr>
                                  <p class="text-center" style="text-align: center; margin: 0px; padding: 0px;">If you did not create an account using this email adress, please 
                                    <strong>ignore
                                    </strong> this email.
                                  </p>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                        <!--[if (gte mso 9)|(IE)]></td></tr></table><![endif]-->
                      </td>
                    </tr>
                  </tbody>
                </table>
                <!--[if (gte mso 9)|(IE)]></td></tr></table><![endif]-->
              </td>
            </tr>
          </tbody>
        </table>
      </body>
    </html>
  `

  const transporter = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: process.env.EMAIL_PORT,
    secure: process.env.EMAIL_SECURE, // true for 465, false for other ports
    auth: {
      user: process.env.EMAIL_USER, // generated ethereal user or someone smtp server like elasticemail or gmail
      pass: process.env.EMAIL_PASSWORD // user password
    }
  })

  // send mail with defined transport object
  const info = await transporter.sendMail({
    from: `${process.env.EMAIL_USER}`,
    to: `${user.email}`,
    subject: subject,
    html: htmlCode
  })

  console.log(`\n++++++++++++++++| ${buttonText} Message sent to ${user.email} - ${info.messageId} |++++++++++++++++\n`)
}

export default {
  sendEmail
}

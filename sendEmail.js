function sendMail() {
    const recipient = "ellegardenno8@gmail.com";
    const subject = "【テストメッセージ】";
    const message = "Hey!This is a test message."

    GmailApp.sendEmail(recipient,subject,message);
}
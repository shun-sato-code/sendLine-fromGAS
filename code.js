//Lineへ通知
function send_line(subject,body,date){
  let messageBody = subject + body + date;
  let lineToken = "ANy6aN8DJqiE6nL5edIFyK5Ev3X6X66ptGSQd10KNlP";
  let payload = {'message' :  messageBody} ;
  let options ={
    "method"  : "post",
    "payload" : payload,
    "headers" : {"Authorization" : "Bearer "+ lineToken}
  };
  UrlFetchApp.fetch("https://notify-api.line.me/api/notify", options);
}

//mail抽出
function fetch_email() {
  let strTerms = 'subject:"【テストメッセージ】"';
  let myThreads = GmailApp.search(strTerms);
  let myMessages = GmailApp.getMessagesForThreads(myThreads);

  for (const messages of myMessages) {
    for (let i=0;i<messages.length; i++) {
      let message = messages[i];
      let subject = message.getSubject();
      let body = message.getPlainBody()
      let date = message.getDate();

      if(message.isUnread()){
        message.markRead();
        send_line(subject,body,date);
      }
    }
  }
}
const sendmail = (() => {
  var client_name = document.getElementById('client_name').value;
  var client_email = document.getElementById('client_email').value;
  var subject = document.getElementById('subj').value;
  var msg = document.getElementById('msg').value;
  let hostname = window.location.hostname;
  let pathname = window.location.pathname;

  try {
    Email.send({
        Host : "smtp.gmail.com",
        Username : "enzop.gerola@gmail.com",
        Password : "@EnzoFatec990099",
        To : 'enzop.gerola@gmail.com',
        From : `${client_email}`,
        Subject : `${subject}`,
        Body : `${msg}`
    }).then((message) => {
      showToast();
      console.log(message);
      window.location.href = `https://${hostname}${pathname}#contact-section`;
    });
  } catch (e) {
    showToastErr();
    console.log('Erro ao enviar email: ', e);
    window.location.href = `https://${hostname}${pathname}#contact-section`;
  }
});

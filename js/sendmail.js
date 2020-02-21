const sendmail = (() => {
  var client_name = document.getElementById('client_name').value;
  var client_email = document.getElementById('client_email').value;
  var subject = document.getElementById('subj').value;
  var msg = document.getElementById('msg').value;

  try {
    if(client_name != '' && client_email != '' && subject != '' && msg != ''){
      Email.send({
          Host : "smtp.gmail.com",
          Username : "enzop.gerola@gmail.com",
          Password : "@EnzoFatec990099",
          To : 'enzop.gerola@gmail.com',
          From : `${client_email}`,
          Subject : `${subject}`,
          Body : `Nome do Cliente: ${client_name} \n ${msg}`
      }).then((message) => {
        showToast();
        console.log(message);
        window.location.href = '#contact-section';
        return false; // cancela o refresh da página para o topo
      });
    }else{
      alert('Preencha todos os dados!');
      window.location.href = '#contact-section';
      return false; // cancela o refresh da página para o topo
    }
  } catch (e) {
    showToastErr();
    console.log('Erro ao enviar email: ', e);
    window.location.href = '#contact-section';
    return false; // cancela o refresh da página para o topo
  }
});

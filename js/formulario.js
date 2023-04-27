const btn = document.getElementById('button'); /* se captura el elemento submit */
/* optiene los elemento form */
document.getElementById('form')
 .addEventListener('submit', function(event) {
   event.preventDefault();

   btn.value = 'Enviando....';

   const serviceID = 'default_service';
   const templateID = 'template_4tffdx4';

   emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      btn.value = 'Mensaje Enviado';
      alert('Correo enviado !');
    }, (err) => {
      btn.value = 'Mensaje Enviado';
      alert(JSON.stringify(err));
    });
});
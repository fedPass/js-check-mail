// alert('prova');
// Creare un array contenente una lista di email.
var mailList = ['mail1','mail2','mail3'];
console.log(mailList);
// Attraverso un prompt chiedere all'utente la sua email.
var mailUtente = prompt('Inserisci la tua mail per accedere');
// Controllare se l'email dell'utente è presente nell'array e stampare un messaggio appropriato.
if (!isNaN(mailUtente)) {
    console.log('Hai inserito un numero, devi inserire una mail');
 } else {
    var mailTrovata = false;
    for (var i = 0; (i < mailList.length) && (mailTrovata == false); i++) {
        if (mailUtente == mailList[i]) {
            mailTrovata = true;
            console.log("Puoi effettuare l'accesso");
         }  else {
             console.log('Non risulti ancora registrato. Effettua la registrazione prima di accedere');
        }
     }
 }

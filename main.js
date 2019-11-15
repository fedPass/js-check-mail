// alert('prova');
// Creare un array contenente una lista di email.
var mailList = ['mail1','mail2','mail3'];
console.log(mailList);
// Attraverso un prompt chiedere all'utente la sua email.
var mail = prompt('Inserisci la tua mail per accedere');
// Controllare se l'email dell'utente è presente nell'array e stampare un messaggio appropriato.
if (!isNaN(mail)) {
    console.log('Hai inserito un numero, devi inserire una mail');
} else {
    for (var i = 0; i < mailList.length; i++) {
        if (mail == mailList[i]) {
            console.log("Puoi effettuare l'accesso");
        } else {
            console.log('Non risulti ancora registrato. Effettua la registrazione prima di accedere');
        }
    }
}

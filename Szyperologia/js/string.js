var tekst="ZSK - Zespół Szkół Komunikacji";
console.log(tekst.length); //30

var pierwszy=tekst.charAt(0);
console.log(pierwszy);

var ostatni=tekst.charAt(tekst.length - 1);
console.log(ostatni);

document.write(tekst.charAt(11)); //Z

document.write(tekst.charCodeAt(0)+32); //z



//zamiana na duże litery

var duze=tekst.toUpperCase();
console.log(duze);

var male=tekst.toLowerCase();
console.log(male);

//var duzaMale=tekst.charAt(0).toUpperCase()+tekst.slice(1).toLowerCase;

var imie=prompt("podaj imię:");
imie=imie.charAt(0).toUpperCase()+imie.toLowerCase().slice(1);
var elImie = document.getElementById("imie");
elImie.style.color="blue";
elImie.innerHTML = imie;

console.log(imie.substr(1, imie.length - 2));

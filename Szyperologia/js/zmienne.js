/*document.write('ZSK');*/
console.log("test");

var imie="Maciej";
var nazwisko;
nazwisko="Trybuś";
document.write(imie + " " + nazwisko);

var wiek1=19;
var wiek2=20;
var sredniWiek=(wiek1 + wiek2) / 2;

console.log("Średni wiek: " + sredniWiek);

//window.alert(sredniWiek);

var a=5, b="3";
var suma = a + b;
console.log(suma);

var oblicz= (a - 5)/b;
console.log(oblicz);

var c=10;
var d=2.5;
console.log(typeof(c));
console.log(typeof(d));

var dziesietna=20;
var oktalna=020;
var hex=0x20;
console.log(dziesietna);
console.log(oktalna);
console.log(hex);

console.trace();

var _2liczba=10;
console.log(_2liczba);

var test;
console.log(test);

var zmienna=true;
console.log(typeof(zmienna));

var j="3.5";
console.log(typeof(j));
j=parseInt(j);
console.log(typeof(j));
console.log(j);

var j="3.5";
console.log(typeof(j));
j=parseFloat(j);
console.log(typeof(j));
console.log(j);

//var wiek=prompt("Podaj swój wiek: ");
//document.write(wiek);
//console.log(typeof(wiek));

//document.getElementById('naglowek').innerHTML=wiek;
var naglowek=document.getElementById('naglowek');
//naglowek.innerHTML=wiek;
//naglowek.style.color="green";
var kolor=prompt("podaj kolor:");
naglowek.style.color=kolor;




















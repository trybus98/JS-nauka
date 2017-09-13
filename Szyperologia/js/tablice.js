/*var kolory;
kolory=['bialy', 'zielony', 'czerwony'];

var elKolor=document.getElementById("kolor");
elKolor.innerHTML=kolory[0];


//konstruktor tablicy Array
var samochody=new Array('BMW', 'Audi', 'Ferrari');
console.log(samochody[0]); //BMW
console.log(samochody[samochody.length-1]); //Ferrari
document.write("Ilość elementów w tablicy samochody wynosi: " + samochody.length); //3 
document.write("<br>")
var noweAuto=prompt("Podaj samochód: ");
samochody[0]=noweAuto;


for(var i=0; i<samochody.length; i++)
    {
        document.write(samochody[i]+"<br>");
    }


var tab=new Array(
Array('Jan', 'Nowak', 'Poznań'),
Array('Maciej', 'Trybuś', 'Poznań'),
Array('Andrzej', 'Duda', 'Warszawa'),
);

console.log(tab);
document.write(tab[1][2]);

var imiona=['Janusz','Andrzej','Marta'];
console.log(imiona);
var posortowane=imiona.sort();
console.log(imiona);
var odwroc=posortowane.reverse();
console.log(odwroc);

//imiona.pop(); usuwa ostatni element tablicy
//imiona.unshift('siusiak'); dodaje element na początku tablicy
//imiona.push('siusiak'); dodaje element na końcu tablicy

//sprawdzenie czy wartość istnieje w tablicy
console.log(imiona.indexOf('Marta'));
//-1 nie istnieje
//1 istnieje

var cyfry=[1,2,20,190,-1];
//cyfry.sort();
//console.log(cyfry);

cyfry.sort(function(a,b)
{
return (a-b);
})
console.log(cyfry);*/


var tablicaKolory
function wypisz()
{
var elKolor1=document.getElementById('kolor1').value;
var elKolor2=document.getElementById('kolor2').value;
var elKolor3=document.getElementById('kolor3').value;
tablicaKolory=[elKolor1, elKolor2, elKolor3];
console.log(tablicaKolory);
};














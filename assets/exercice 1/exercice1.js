var age1 = 0;
var age2 = 0;
var age3 = 0;
var age = window.prompt("Entrez votre age");

while (age !="")
{
    var age = window.prompt("Entrez votre age");

    if (age<20)
    {
        age1++
    }

    if (age>=40)
    {
        age3++
    }

    if (age>=20&&age<=40)
    {
        age2++
    }
}
window.alert("Moins de 20 ans : "+age1+" Entre 20 et 40 ans : "+age2+" Plus de 40 ans : "+age3);
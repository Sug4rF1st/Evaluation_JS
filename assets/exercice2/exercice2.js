var n = parseInt(prompt("Table de multiplication du nombre : "));
var x = parseInt(prompt("Miltiplier jusqu'à : "));

for (j=1; j<=x; j++)
{
    var resultat = j*n;
    console.log(n+ "x" + j+ "=" +resultat);
}
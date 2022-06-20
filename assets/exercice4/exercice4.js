var PU = window.prompt("Saisir le prix unitaire : ");
var QTECOM = window.prompt("Saisir la quantité commander : ");
var TOT = PU*QTECOM;
var PAP = (PU*QTECOM)+REM+PORT;
var REM = 0;
var PORT = 6;

if (TOT<=100&&TOT>=200)
{
    REM = 5%
    PORT = 6
    alert("Le prix à payer est de : "+PAP+)


if (TOT<=201&&TOT>=499)
{
    REM = 10%
    PORT = 2%
    alert("Le prix est de : "+PAP+)
}

if (TOT<=500)
{
    REM = 10%
    PORT = 0
    alert("Le prix est de : "+PAP+)
}
}
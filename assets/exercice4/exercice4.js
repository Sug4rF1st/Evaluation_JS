var PU = parseInt(prompt("Saisir le prix unitaire :"));
var QTECOM = parseInt(prompt("Saisir la quantité :"));
var PAP = 0;
var REM = 0;
var PORT = 6;
var TOT = PU*QTECOM;

if(TOT >= 100 && TOT <= 200){
  REM = (TOT * 5 / 100);
}
else if (TOT > 200) {
  REM = (TOT * 10 / 100);
}
else {
    REM = 0;
}

if ( (TOT-REM) < 500){
    PORT = ((TOT-REM)*2/100);
}
else{
    PORT = 0;
}

if (PORT != 0 && PORT < 6){
    PORT = 6;
}
PAP = (TOT-REM)+PORT;

alert("le prix a payer est de : "+PAP+"La remise est de : "+REM+" Le port est de :"+PORT);
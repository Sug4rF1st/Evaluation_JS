var tab = ["Audrey", "Aurélien", "Flavien", "Jérémy", "Laurent", "Melik", "Nouara", "Salem", "Samuel", "stéphane"];
var prenom = window.prompt ("Entrez un prenom : ");

if(tab.indexOf(prenom)!== -1)
{
    tab.splice(tab.indexOf(prenom), 1);
    tab.push("");
}

else
{
    alert("prenom non trouvé:");
}

console.log(tab);
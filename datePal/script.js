let jj = 2;
let mm ;
let aaaa ;
let maxJours ;

function isValidDate(){
    if (aaaa < 1000 && aaaa > 9999)
        return console.log("votre annee est fausse")
    
    if (mm < 01 && mm > 12)
        return console.log("votre mois est faux")

    if (jj < 01 && jj > maxJours)
        return console.log("votre jour est faux")
}

console.log(isValidDate())


function maxDaysInMonth(maxJours){
    if (mm == 01 || mm == 03 || mm == 05 || mm == 07 || mm == 08 || mm == 10|| mm == 12)
        return maxJours = 31;
    else if (mm == 02)
        return maxJours = 28;
    else
        return maxJours = 30;
}

isValidDate()

let nome = "Mickael"
let xp = 10001

function classificar(xp) {
    if (xp <= 1000) {
        return "Ferro"
    }
    else if(xp > 1000 && xp <=2000){
        return "Bronze"
    }
    else if(xp > 2000 && xp <=5000){
        return "Prata"
    }
    else if(xp > 5000 && xp <=7000){
        return "Ouro"
    }
    else if(xp > 7000 && xp <=8000){
        return "Platina"
    }
    else if(xp > 8000 && xp <=9000){
        return "Ascendente"
    }
    else if(xp > 9000 && xp <=10000){
        return "Imortal"
    }
    else if(xp > 1000){
        return "Radiante"
    }
}

console.log(`o heroi de nome ${nome} está no nivel de ${classificar(xp)}`)
/*
var agora = new Date()
var hora = agora.getHours()
obtem a hora exata do computador
*/
var hora = 5
console.log(`Agora sao exatamente ${hora} hora`)
if (hora > 6 && hora < 12){
    console.log(`Bom dia`)
}else if(hora > 12 && hora <18){
    console.log(`Boa tarde`)
}else if (hora >18 && hora <23){
    console.log(`Boa noite`)
}else{
    console.log(`Boa Madrugada`)
}
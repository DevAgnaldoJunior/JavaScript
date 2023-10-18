function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
  
    msg.innerText = `Agora são ${hora} horas.`

    if(hora >= 0 && hora<12){
        img.src = 'fotos/manhã.jpg'
        document.body.style.background = '#303A39'
        

    } else if(hora >=12 && hora <18){
        img.src = 'fotos/tarde.jpg'
        document.body.style.background = '#7F94B1'

    } else{
        img.src = 'fotos/noite.jpg'
        document.body.style.background = '#271E21'

    }
}

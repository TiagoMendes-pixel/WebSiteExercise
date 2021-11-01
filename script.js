//these are my scripts from my project

function carregar(){
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas`  
   
    if(hora >= 0 && hora <= 12){
        //Imagem manha
        img.src = "imagem/fotoManha.png.jpg" 
        document.body.style.background = '#e2cd9f'

    }else if(hora >= 13 && hora < 18){
        //imagem tarde
        img.src = "imagem/fotoAfternoon.png.jpg"
        document.body.style.background = 'red'

    }else if (hora > 24){
        //imagem noite
       msg.innerHTML = 'Voce ficou maluco'
    }else {
        //imagem noite
        img.src = "imagem/fotoNoite.png.jpg"
        document.body.style.background = 'grey'

    }
    

}
function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')

    if(fano.value.length == 0 || Number(fano.value)>ano){
        window.alert('Verifique os dados e tente novamente')
        
    } else{
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero= ''

        var img = document.createElement ('img') /*criei um 'img' com id=foto */
        img.setAttribute('id','foto')   /*criei um 'img' com id=foto */

        if(fsex[0].checked){ /*0 masculino e 1 feminino por terem names iguais*/
        genero = 'Homem'
        if(idade >= 0 && idade < 10){
            //Criança
            img.setAttribute('src','criancaHomem.png')
        } else if(idade >= 10 && idade < 21){
            //Jovem
            img.setAttribute('src','adolescenteHomem.png')
        } else if(idade >= 21 && idade < 50){
            //Adulto
            img.setAttribute('src','adultoHomem.png')
        }else{
            //Idoso
            img.setAttribute('src','VelhoHomem.png')
        }
    } else if(fsex[1].checked){
        genero = 'Mulher'
        if(idade >= 0 && idade < 10){
            //Criança
            img.setAttribute('src','criancaMulher.png')
        } else if(idade >= 10 && idade < 21){
            //Jovem
            img.setAttribute('src','adolescenteMulher.png')
        } else if(idade >= 21 && idade < 50){
            //Adulto
            img.setAttribute('src','adultoMulher.png')
        }else{
            //Idoso
            img.setAttribute('src','velhaMulher.png')
        }
    }
    res.innerHTML = `Detectamos ${genero} com ${idade} anos`
    res.appendChild(img)  /*Vou adicionar um elemento (foto) */

    }







}
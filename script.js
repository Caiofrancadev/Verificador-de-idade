function verificar(){
    var agora = new Date()
    var ano = agora.getFullYear()
    var fAno = document.querySelector('#txtano')
    var res = document.querySelector('#res')
    if(fAno.value.length == 0 || fAno.value > ano){
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    }
else{
    var sex = document.getElementsByName('radsexo')
    var idade = ano - Number(fAno.value)
    var genero = ''
    var img = document.createElement('img')
    img.setAttribute('id' , 'foto')
    if(sex[0].checked){
        genero = 'Homem'
        if(idade >= 0 && idade < 10){
            // Criança
            img.setAttribute('src' , 'img/criança-h.jpg' )
        }else if (idade < 21){
        // Adolescente  
        img.setAttribute('src' , 'img/jovem-h.jpg' )
        }else if(idade < 50){
            // Adulto
            img.setAttribute('src' , 'img/adulto-h.jpg' )
        }else{
            // Idoso
              img.setAttribute('src' , 'img/idoso.jpg' )
        }
    }else if (sex[1].checked){
        genero = 'Mulher'
        if(idade >= 0 && idade < 10){
            // Criança
            img.setAttribute('src' , 'img/criança-m.jpg' )
        }else if (idade < 21){
        // Adolescente  
        img.setAttribute('src' , 'img/jovem-m.jpg' )
        }else if(idade < 50){
            // Adulto
            img.setAttribute('src' , 'img/adulto-m.jpg' )
        }else{
            // Idoso
            img.setAttribute('src' , 'img/idosa.jpg' )
        }
    }
    img.style.display = 'block'
    img.style.width = '250px'
    img.style.height = '250px'
    img.style.borderRadius= '100%'
    img.style.marginTop = '20px'

    res.style.textAlign = 'Center'
    res.innerHTML = `Detectamos ${genero} com ${idade} anos de idade.`
    res.appendChild(img)
}
}

const porta = 1.52
const janela = 2.4

let por = false
let jan = false
let larOk = false
let altOk = false
let opcOk = false

let lataGG = 0
let lataG = 0
let lataM = 0
let lataP = 0

let parede = [4]
let i = 0

let final = 0

function calculaParede(){
    do{
    
    let largura = document.querySelector(".largura").value.replace(',' , '.')
    let altura = document.querySelector(".altura").value.replace(',' , '.')

    parede[i] = parseFloat(largura) * parseFloat(altura)

    if( parede[i] > 15){
        alert(" A parede não pode ter mais que 15 Metros Quadrado diminua valor de altura ou largura ")
        parede[i] = 0
        break
    }

    do{
        
      let opcao = document.querySelector(".opcao").value

        switch(parseInt(opcao)){
            case 0:
                por = false
                jan = false
                break;
            case 1:
                parede[i] -= porta + janela   
                por = true
                jan = true
                break;
            case 2:
                parede[i] -= porta
                por = true
                break;
            case 3:
                parede[i] -= janela
                jan = true
                break
            default:
                parede[i] = "undefined"
                break
        }
    
    }while(larOk == false && altOk == false && opcOk == false)
        
        if(por == true && altura < 2.20){
            alert("A altura de paredes com porta deve ser, no mínimo, 30 centímetros maior que a altura da porta");
            por = false 
            jan = false 
            parede[i] = 0;
            break  
        }
        else if(opcOk == false || altOk == false || larOk == false){
            alert(" Ocorreu Um Erro algo esta inválido... ")
            parede[i] = 0
            por = false 
            jan = false 
            break
        }
        else if(parede[i] < 1){
            alert("Parede com menos de um metro... ")
            parede[i] = 0
            por = false 
            jan = false 
            break
        }
        else if(largura == 0 || altura == 0) {
            alert("valor errado")
            parede[i] = 0
            por = false 
            jan = false 
            break
        }
        
        
        else if(jan == true && por == true && parede[i] / 2 < porta * janela){
            alert(" porta e janela deve ser no maximo 50% da area da parede")
            parede[i] = 0
            por = false 
            jan = false 
            break 
        }
        else if(por == false && jan == true && parede[i] / 2 < janela){
            alert(" janela deve ser no maximo 50% da area da parede")
            parede[i] = 0
            por = false 
            jan = false 
            break
        }
        else if( jan == false && por == true && parede[i] / 2 < porta){
            alert(" porta deve ser no maximo 50% da area da parede")
            parede[i] = 0
            por = false 
            jan = false 
            break
        }
        
        else if(i < 4){
            final +=  parede[i]
            jan = false
            por = false
        }
               
        }while(parede[i] == 0)
        
        if(parede[i] != 0){
            i++
        }
        
        lataGG = final / 90
        lataG = (final % 90) / 18
        lataM = ((final % 90) % 18) / 12.5
        lataP =  (((final % 90) % 18) % 12.5) % 2.5

        document.querySelector(".lataGG").innerHTML = parseInt(lataGG)
        document.querySelector(".lataG").innerHTML = parseInt(lataG)
        document.querySelector(".lataM").innerHTML = parseInt(lataM)
        document.querySelector(".lataP").innerHTML = parseInt(lataP)    

        document.querySelector(".final").innerHTML = final.toFixed(2)
        document.querySelector(".parede1").innerHTML = parede[0].toFixed(2)
        document.querySelector(".parede2").innerHTML = parede[1].toFixed(2)
        document.querySelector(".parede3").innerHTML = parede[2].toFixed(2)
        document.querySelector(".parede4").innerHTML = parede[3].toFixed(2)
}


function validaLargura(){
    let txtLargura = document.querySelector("#txtLargura")
    if(largura.value <= 0 ){
        txtLargura.innerHTML = "Valor inválido"
        txtLargura.style.color = "red"
         larOk = false
    }else{
        txtLargura.innerHTML = "Valor Valido"
        txtLargura.style.color = "green"
         larOk = true
    }
}
function validaAltura(){
    let txtAltura = document.querySelector("#txtAltura")
    if(altura.value <= 0 ){
        txtAltura.innerHTML = "Valor inválido"
        txtAltura.style.color = "red"
         altOk = false
    }else{
        txtAltura.innerHTML = "Valor Valido"
        txtAltura.style.color = "green"
        altOk = true 
    }
}
function validaOpcao(){
    let txtOpcao = document.querySelector("#txtOpcao")
    if( opcao.value.length < 1 || opcao.value >= 4 || opcao.value < 0  ){
        txtOpcao.innerHTML = "Valor inválido"
        txtOpcao.style.color = "red"
        opcOk = false
    }else if(opcao.value == 0 || opcao.value == 1 || opcao.value == 2 || opcao.value == 3) {
        txtOpcao.innerHTML = "Valor Valido"
        txtOpcao.style.color = "green"
        opcOk = true
    }
}


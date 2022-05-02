
var porta = 1.52
var janela = 2.4

/* let lataGG = 90
let lataG = 18
let lataM = 12.5
let lataP = 2.5 */

let lataGG = 0
let lataG = 0
let lataM = 0
let lataP = 0

var por = false
var jan = false 

let final = 0

let parede = [5]


function calculaParede1(){
    for(let i = 1; i < 5; i++){
        let largura = prompt("Digite a largura da parede: " +i);
        let altura = prompt("Digite a altura da parede: " +i);

        parede[i] = largura * altura

        if(por == true && altura < 2.20){
            alert("A altura de paredes com porta deve ser, no mínimo, 30 centímetros maior que a altura da porta")
            break;
        }
        else if(parede[i] < 1){
            alert(" A parde não pode ter menos que 1 Metro Quadrado ")
            break;
        }
        else if( parede[i] > 15){
            alert(" A parde não pode ter mais que 15 Metros Quadrado ")
            break;
        }

        do{

        num = prompt(" Para adicionar Porta e Janela Digite 1 \n" 
        + " Para adicionar Porta Digite 2 \n" 
        + " Para adicionar Janela Digite 3 \n"
        + "ou Digite 0 para continuar" )

        switch(num){
            case "0":
                break
            case "1": 
                parede[i] -= porta + janela
                 por = true
                 jan = true
                break
            case "2": 
                parede[i] -= porta
                por = true
                break
            case "3":
                parede[i] -= janela
                jan = true     
                break
            default:
                alert(" Você digitou algo inválido... ") 
                break      
        }
        }while(num != "0" && num != "1" && num != "2" && num != "3" )


        if(jan == true && por == true && parede[i] / 2 < porta * janela){
            alert(" porta e janela deve ser no maximo 50% da area da parede")
            parede[i] = 0
            break
        }
        else if(por == false && jan == true && parede[i] / 2 < janela){
            alert(" janela deve ser no maximo 50% da area da parede")
            parede[i] = 0
            break
        }
        else if( jan == false && por == true && parede[i] / 2 < porta){
            alert(" porta deve ser no maximo 50% da area da parede")
            parede[i] = 0
            break;
        }
        
        
        alert("1° Parede "+ parede[i]+ " Metros Quadrados")

        
    }
    
    final = parede[1] + parede[2] + parede[3] + parede[4] 

    

    alert("O seu comodo tem " +Math.round(final)  + "Metros quadrados")

    lataGG = final / 90
    lataG = (final % 90) / 18
    lataM = ((final % 90) % 18) / 12.5
    lataP =  (((final % 90) % 18) % 12.5) / 2.5

    alert("Latas de 18L = " +Math.round(lataGG)+"\n"
          +"Latas de 3,6L = " +Math.round(lataG)+"\n"
          +"Latas de 2,5L = " +Math.round(lataM)+"\n"
          +"Latas de 0,5L = " +Math.round(lataP) )
}
 
    
function MaiorTresNumeros(parametro_numero_01, parametro_numero_02, parametro_numero_03) {
    var numero_01 = parseInt(parametro_numero_01);
    var numero_02 = parseInt(parametro_numero_02);
    var numero_03 = parseInt(parametro_numero_03);
    var resultado_dados = ''
    if(numero_01 > numero_02) {
        if(numero_01 > numero_03) {
            resultado_dados = 'Primeiro elemento: ' + numero_01.toString();
            if(numero_02 == numero_01) {
                resultado_dados = resultado_dados + ' *** NOTA: Segundo e igual ao Primeiro *** ';
            }
        }
        else {
            resultado_dados = 'Terceiro elemento: ' + numero_03.toString();
            if(numero_01 == numero_03) {
                resultado_dados = resultado_dados + ' *** NOTA: Primeiro e igual ao Terceiro *** ';
            }
            if(numero_02 == numero_03) {
                resultado_dados = resultado_dados + ' *** NOTA: Segundo e igual ao Terceiro *** ';
            }
        }    
    }
    else{
        if(numero_02 > numero_03) {
            resultado_dados = 'Segundo elemento: ' + numero_02.toString();
            if(numero_02 == numero_01) {
                resultado_dados = resultado_dados + ' *** NOTA: Segundo e igual ao Primeiro *** ';
            }
        }
        else {
            resultado_dados = 'Terceiro elemento: ' + numero_03.toString();
            if(numero_01 == numero_03) {
                resultado_dados = resultado_dados + ' *** NOTA: Primeiro e igual ao Terceiro *** ';
            }
            if(numero_02 == numero_03) {
                resultado_dados = resultado_dados + ' *** NOTA: Segundo e igual ao Terceiro *** ';
            }

        }    
    }
    
    return resultado_dados;    
}
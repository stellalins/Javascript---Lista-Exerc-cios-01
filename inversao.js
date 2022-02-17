function Inversao(parametro_variavel_01, parametro_variavel_02) {
    var variavel_01 = parametro_variavel_01
    var variavel_02 = parametro_variavel_02
    var resultado_dados = ''
    
    resultado_dados = resultado_dados + ' *** Antes ***  ' + ' >> ' + 'Primeiro elemento: ' + variavel_01.toString() + ' >> ' + 'Segundo elemento: ' + variavel_02.toString();
    variavel_01 = parametro_variavel_02
    variavel_02 = parametro_variavel_01
    resultado_dados = resultado_dados + ' *** Depois ***  ' + ' >> ' + 'Primeiro elemento: ' + variavel_01.toString() + ' >> ' + 'Segundo elemento: ' + variavel_02.toString();
    
    return resultado_dados;    
}
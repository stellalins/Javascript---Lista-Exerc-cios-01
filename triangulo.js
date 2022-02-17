function Triangulo(parametro_numero_lado_01, parametro_numero_lado_02, parametro_numero_lado_03) {
    var numero_lado_01 = parseInt(parametro_numero_lado_01);
    var numero_lado_02 = parseInt(parametro_numero_lado_02);
    var numero_lado_03 = parseInt(parametro_numero_lado_03);
    var retorno_dados = '';
    if(numero_lado_01 + numero_lado_02 > numero_lado_03 && numero_lado_01 + numero_lado_03 > numero_lado_02 && numero_lado_02 + numero_lado_03 > numero_lado_01) {
        retorno_dados = retorno_dados + ' Os 3 lados formam um triangulo!';
        if(numero_lado_01 == numero_lado_02 && numero_lado_01 == numero_lado_03)
            retorno_dados = retorno_dados + ' Equilatero';
        else
            if(numero_lado_01 == numero_lado_02 || numero_lado_01 == numero_lado_03 || numero_lado_02 == numero_lado_03)
                retorno_dados = retorno_dados + ' Isosceles';
            else
                retorno_dados = retorno_dados + ' Escaleno';
    }
    else
        retorno_dados = retorno_dados + ' Os 3 lados NAO formam um trinagulo!';
    
    return retorno_dados;    
}
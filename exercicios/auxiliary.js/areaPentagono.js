function calculaAreaSuperficiePiramidePentagonal(ladodabase, altura) {

    if(ladodabase <= 0 || altura <= 0){
        return "Por favor introduza valores positivos."
    }
const apotema = Math.sqrt(Math.pow(altura, 2)+ Math.pow (ladodabase / (2 * Math.tan(Math.PI/5)),2));  
const areaBase = (5* Math.pow(ladodabase, 2)) / (4 *Math.tan(Math.PI/5));
 const areaFacesLaterais = (5 * ladodabase * apotema
 )/2;
 const areaTotal= areaBase + areaFacesLaterais; 

  return Math.round(areaTotal) 
}
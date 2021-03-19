var ps= 0;

function coti(){
    var v1 =parseFloat(document.getElementById('value1').value);
    var persona= document.getElementById('nombre').value;
    var ruc = document.getElementById('ruc').value;
    var email= document.getElementById('email').value;
    var celular=document.getElementById('celular').value;
    v1 =parseFloat(document.getElementById('value1').value);
    
    
    
    ///VARIABLES DE OPCIONES
    var selectValue11 =document.getElementById('opcion11').value;
       

    var lista = []
    var peso = []
    ////Primer Div
    ////1.0 Div 
    if (selectValue11 == "13x9x22-Natural-tipo1" ){
        lista.push(v1);
        peso.push(v1*4500)
        v1 = v1*559.32;
    }
    

    
    l=[v1.toFixed(2),
       ]
    sumatoria= v1;
    total= sumatoria + (sumatoria*0.18);
        
    document.getElementById('RUC').innerHTML = ruc;
    document.getElementById('CORREO').innerHTML = email;  
    document.getElementById('CELU').innerHTML = celular; 
    
    document.getElementById('nombr').innerHTML = persona;
    document.getElementById('result').innerHTML = "SUBTOTAL: "+" S/"+sumatoria.toFixed(2);
    document.getElementById('igv').innerHTML = "IGV 18%: "+ " S/"+(0.18*(sumatoria.toFixed(2))).toFixed(2); 
    document.getElementById('total').innerHTML = "TOTAL: "+ " S/"+ total.toFixed(2);  
      
    
        
    //document.getElementById('total').innerHTML = lista[0]+"Unidades "+ " de" +selectValue11+ "-" +selectValue12+ + " es "+ l[0] + "\n";
    document.getElementById('r1').innerHTML = "·"+lista[0]+"MLL  (" +selectValue11+ ") " + "(P.unit - S/"+ (l[0]/lista[0]).toFixed(2) +") = S/" + l[0]  +"<br/>";
    ps = peso[0];
        
    
    document.getElementById('peso').innerHTML = "PESO TOTAL: "+ ps.toFixed(2)+ " Kg";
}
function confirmar(){
    var distr =document.getElementById('distr').value;
    var camion = document.getElementById('camion').value;   
   //document.getElementById('flete').innerHTML = "PRECIO DEL FLETE (CON IGV):" +(Math.trunc(8.7)+1);
   //document.getElementById('total2').innerHTML = "TOTAL: "+ " S/"+ total.toFixed(2);
   //document.getElementById('flete').innerHTML = "PRECIO DEL FLETE (CON IGV):" + ps;
   var cal= ((Math.trunc(ps/10000)+1)).toFixed(2);
   var cal2=((Math.trunc(ps/20000)+1)).toFixed(2);
   var cal3=((Math.trunc(ps/32000)+1)).toFixed(2);

   if((distr=="Ate"||distr=="Barranco"||distr=="Breña"||distr=="Cercado"||distr=="Chorrillos"||distr=="Comas"||distr=="Agustino"||distr=="Huachipa"
   ||distr=="Independencia"||distr=="JesusMaria"||distr=="Molina"||distr=="Victoria"||distr=="Lince"||distr=="Olivos"||distr=="LuriganchoAv"||distr=="Magdalena" 
   ||distr=="Miraflores"||distr=="PuebloLibre"||distr=="Rimac"||distr=="SanBorja"||distr=="SanIsidro"||distr=="SJL"||distr=="SJM"||distr=="SanLuis"
   ||distr=="Martin"||distr=="SanMiguel"||distr=="SantaAnita"||distr=="Surco"||distr=="Surquillo"||distr=="VillaSalvador"||distr=="VillaMaria") && camion =="diez"){

    document.getElementById('flete').innerHTML = "PRECIO DEL FLETE CON IGV: S/" +(cal*425).toFixed(2);
    document.getElementById('total2').innerHTML = "NUEVO TOTAL CON FLETE:"+ " S/"+ (total+(cal*425)).toFixed(2);
   }
   else if((distr=="Ate"||distr=="Barranco"||distr=="Breña"||distr=="Cercado"||distr=="Chorrillos"||distr=="Comas"||distr=="Agustino"||distr=="Huachipa"
   ||distr=="Independencia"||distr=="JesusMaria"||distr=="Molina"||distr=="Victoria"||distr=="Lince"||distr=="Olivos"||distr=="LuriganchoAv"||distr=="Magdalena" 
   ||distr=="Miraflores"||distr=="PuebloLibre"||distr=="Rimac"||distr=="SanBorja"||distr=="SanIsidro"||distr=="SJL"||distr=="SJM"||distr=="SanLuis"
   ||distr=="Martin"||distr=="SanMiguel"||distr=="SantaAnita"||distr=="Surco"||distr=="Surquillo"||distr=="VillaSalvador"||distr=="VillaMaria") && camion =="veinte"){

    document.getElementById('flete').innerHTML = "PRECIO DEL FLETE CON IGV: S/" +(cal2*725).toFixed(2);
    document.getElementById('total2').innerHTML = "NUEVO TOTAL CON FLETE: "+ " S/"+ (total+cal2*725).toFixed(2);
   }
   else if((distr=="Ate"||distr=="Barranco"||distr=="Breña"||distr=="Cercado"||distr=="Chorrillos"||distr=="Comas"||distr=="Agustino"||distr=="Huachipa"
   ||distr=="Independencia"||distr=="JesusMaria"||distr=="Molina"||distr=="Victoria"||distr=="Lince"||distr=="Olivos"||distr=="LuriganchoAv"||distr=="Magdalena" 
   ||distr=="Miraflores"||distr=="PuebloLibre"||distr=="Rimac"||distr=="SanBorja"||distr=="SanIsidro"||distr=="SJL"||distr=="SJM"||distr=="SanLuis"
   ||distr=="Martin"||distr=="SanMiguel"||distr=="SantaAnita"||distr=="Surco"||distr=="Surquillo"||distr=="VillaSalvador"||distr=="VillaMaria") && camion =="trentaidos"){

    document.getElementById('flete').innerHTML = "PRECIO DEL FLETE CON IGV: S/" +(cal3*1025).toFixed(2);
    document.getElementById('total2').innerHTML = "NUEVO TOTAL CON FLETE: "+ " S/"+ (total+(cal3*1025)).toFixed(2);
   }
   else if((distr=="Carabayllo"||distr=="Lurigancho"||distr=="Lurin"||distr=="Ñaña"||distr=="Pachacamac"||distr=="PuentePiedra"||distr=="Arica"||distr=="Bellavista"
   ||distr=="Bocanegra"||distr=="Callao"||distr=="Chaclayo"||distr=="Chosica"||distr=="Cieneguilla"||distr=="Laperla"||distr=="Lapunta"||distr=="SantaRosaC"||distr=="Ventanilla"
   )&& camion =="diez"){
       
    document.getElementById('flete').innerHTML = "PRECIO DEL FLETE CON IGV: S/" +(cal*475).toFixed(2);
    document.getElementById('total2').innerHTML = "NUEVO TOTAL CON FLETE: "+ " S/"+ (total+(cal*475)).toFixed(2);
   }
   else if((distr=="Carabayllo"||distr=="Lurigancho"||distr=="Lurin"||distr=="Ñaña"||distr=="Pachacamac"||distr=="PuentePiedra"||distr=="Arica"||distr=="Bellavista"
   ||distr=="Bocanegra"||distr=="Callao"||distr=="Chaclayo"||distr=="Chosica"||distr=="Cieneguilla"||distr=="Laperla"||distr=="Lapunta"||distr=="SantaRosaC"||distr=="Ventanilla"
   )&& camion =="veinte"){
       
    document.getElementById('flete').innerHTML = "PRECIO DEL FLETE CON IGV: S/" +(cal2*875).toFixed(2);
    document.getElementById('total2').innerHTML = "NUEVO TOTAL CON FLETE: "+ " S/"+ (total+(cal2*875)).toFixed(2);
   }
   else if((distr=="Carabayllo"||distr=="Lurigancho"||distr=="Lurin"||distr=="Ñaña"||distr=="Pachacamac"||distr=="PuentePiedra"||distr=="Arica"||distr=="Bellavista"
   ||distr=="Bocanegra"||distr=="Callao"||distr=="Chaclayo"||distr=="Chosica"||distr=="Cieneguilla"||distr=="Laperla"||distr=="Lapunta"||distr=="SantaRosaC"||distr=="Ventanilla"
   )&& camion =="trentaidos"){
       
    document.getElementById('flete').innerHTML = "PRECIO DEL FLETE CON IGV: S/" +(cal3*1175).toFixed(2);
    document.getElementById('total2').innerHTML = "NUEVO TOTAL CON FLETE: "+ " S/"+ (total+(cal3*1175)).toFixed(2);
   }
   
   
}
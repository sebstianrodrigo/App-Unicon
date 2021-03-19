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
    if (selectValue11 == "GRASS-TIPO-MICHI" ){
        lista.push(v1);
        peso.push(v1*120)
        v1 = v1*23.3;
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
    document.getElementById('r1').innerHTML = "·"+lista[0]+"MT²  (" +selectValue11+ ") " + "(P.unit - S/"+ (l[0]/lista[0]).toFixed(2) +") = S/" + l[0]  +"<br/>";
    ps = peso[0];
        
    
    document.getElementById('peso').innerHTML = "PESO TOTAL: "+ ps.toFixed(2)+ " Kg";
}
document.getElementById('cont2').style.display="none";
document.getElementById('cont3').style.display="none";
document.getElementById('cont4').style.display="none";
document.getElementById('cont5').style.display="none";
document.getElementById('cont6').style.display="none";
document.getElementById('cont7').style.display="none";
document.getElementById('cont8').style.display="none";
document.getElementById('cont9').style.display="none";
document.getElementById('cont10').style.display="none";
document.getElementById('cont11').style.display="none";
document.getElementById('cont12').style.display="none";

var conta=0;
var ps= 0;
function agre(){
    conta=conta+1;
    if(conta==1){
        document.getElementById('cont2').style.display="block";
    }
    else if (conta==2){
        document.getElementById('cont3').style.display="block";
    }
    else if (conta==3){
        document.getElementById('cont4').style.display="block";
    }
    else if (conta==4){
        document.getElementById('cont5').style.display="block";
    }
    else if (conta==5){
        document.getElementById('cont6').style.display="block";
    }
    else if (conta==6){
        document.getElementById('cont7').style.display="block";
    }
    else if (conta==7){
        document.getElementById('cont8').style.display="block";
    }
    else if (conta==8){
        document.getElementById('cont9').style.display="block";
    }
    else if (conta==9){
        document.getElementById('cont10').style.display="block";
    }
    else if (conta==10){
        document.getElementById('cont11').style.display="block";
    }
    else if (conta==11){
        document.getElementById('cont12').style.display="block";
    }
}   
var v1 =parseFloat(document.getElementById('value1').value);
var v2 =parseFloat(document.getElementById('value2').value);
var v3 =parseFloat(document.getElementById('value3').value);
var v4 =parseFloat(document.getElementById('value4').value);
var v5 =parseFloat(document.getElementById('value5').value);
var v6 =parseFloat(document.getElementById('value6').value);
var v7 =parseFloat(document.getElementById('value7').value);
var v8 =parseFloat(document.getElementById('value8').value);
var v9 =parseFloat(document.getElementById('value9').value);
var v10 =parseFloat(document.getElementById('value10').value);
var v11 =parseFloat(document.getElementById('value11').value);
var v12 =parseFloat(document.getElementById('value12').value);



v2= 0;
v3= 0;
v4= 0;
v5= 0;
v6= 0;
v7= 0;
v8= 0;
v9= 0;
v10= 0;
v11= 0;
v12= 0;


function coti(){
    
    var persona= document.getElementById('nombre').value;
    var ruc = document.getElementById('ruc').value;
    var email= document.getElementById('email').value;
    var celular=document.getElementById('celular').value;
    v1 =parseFloat(document.getElementById('value1').value);
    if(conta==1){
        v1 =parseFloat(document.getElementById('value1').value);
        v2 =parseFloat(document.getElementById('value2').value);
    }
    else if (conta==2){
        v1 =parseFloat(document.getElementById('value1').value);
        v2 =parseFloat(document.getElementById('value2').value);
        v3 =parseFloat(document.getElementById('value3').value);
    }
    else if (conta==3){
        v1 =parseFloat(document.getElementById('value1').value);
        v2=parseFloat(document.getElementById('value2').value);
        v3 =parseFloat(document.getElementById('value3').value);
        v4 =parseFloat(document.getElementById('value4').value);
    }
    else if (conta==4){
        v1 =parseFloat(document.getElementById('value1').value);
        v2 =parseFloat(document.getElementById('value2').value);
        v3 =parseFloat(document.getElementById('value3').value);
        v4 =parseFloat(document.getElementById('value4').value);
        v5 =parseFloat(document.getElementById('value5').value);
    }
    else if (conta==5){
        v1 =parseFloat(document.getElementById('value1').value);
        v2 =parseFloat(document.getElementById('value2').value);
        v3 =parseFloat(document.getElementById('value3').value);
        v4 =parseFloat(document.getElementById('value4').value);
        v5 =parseFloat(document.getElementById('value5').value);
        v6 =parseFloat(document.getElementById('value6').value);
    }
    else if (conta==6){
        v1 =parseFloat(document.getElementById('value1').value);
        v2 =parseFloat(document.getElementById('value2').value);
        v3 =parseFloat(document.getElementById('value3').value);
        v4 =parseFloat(document.getElementById('value4').value);
        v5 =parseFloat(document.getElementById('value5').value);
        v6 =parseFloat(document.getElementById('value6').value); 
        v7 =parseFloat(document.getElementById('value7').value);
    }
    else if (conta==7){
        v1 =parseFloat(document.getElementById('value1').value);
        v2 =parseFloat(document.getElementById('value2').value);
        v3 =parseFloat(document.getElementById('value3').value);
        v4 =parseFloat(document.getElementById('value4').value);
        v5 =parseFloat(document.getElementById('value5').value);
        v6 =parseFloat(document.getElementById('value6').value);
        v7 =parseFloat(document.getElementById('value7').value);
        v8 =parseFloat(document.getElementById('value8').value);
    }
    else if (conta==8){
        v1 =parseFloat(document.getElementById('value1').value);
        v2 =parseFloat(document.getElementById('value2').value);
        v3 =parseFloat(document.getElementById('value3').value);
        v4 =parseFloat(document.getElementById('value4').value);
        v5 =parseFloat(document.getElementById('value5').value);
        v6 =parseFloat(document.getElementById('value6').value);
        v7 =parseFloat(document.getElementById('value7').value);
        v8 =parseFloat(document.getElementById('value8').value);
        v9 =parseFloat(document.getElementById('value9').value);
    }
    else if (conta==9){
        v1 =parseFloat(document.getElementById('value1').value);
        v2 =parseFloat(document.getElementById('value2').value);
        v3 =parseFloat(document.getElementById('value3').value);
        v4 =parseFloat(document.getElementById('value4').value);
        v5 =parseFloat(document.getElementById('value5').value);
        v6 =parseFloat(document.getElementById('value6').value);
        v7 =parseFloat(document.getElementById('value7').value);
        v8 =parseFloat(document.getElementById('value8').value);
        v9 =parseFloat(document.getElementById('value9').value);
        v10 =parseFloat(document.getElementById('value10').value);
    }
    else if (conta==10){
        v1 =parseFloat(document.getElementById('value1').value);
        v2 =parseFloat(document.getElementById('value2').value);
        v3 =parseFloat(document.getElementById('value3').value);
        v4 =parseFloat(document.getElementById('value4').value);
        v5 =parseFloat(document.getElementById('value5').value);
        v6 =parseFloat(document.getElementById('value6').value);
        v7 =parseFloat(document.getElementById('value7').value);
        v8 =parseFloat(document.getElementById('value8').value);
        v9 =parseFloat(document.getElementById('value9').value);
        v10 =parseFloat(document.getElementById('value10').value);
        v11=parseFloat(document.getElementById('value11').value);
    }
    else if (conta==11){
        v1 =parseFloat(document.getElementById('value1').value);
        v2 =parseFloat(document.getElementById('value2').value);
        v3 =parseFloat(document.getElementById('value3').value);
        v4 =parseFloat(document.getElementById('value4').value);
        v5 =parseFloat(document.getElementById('value5').value);
        v6 =parseFloat(document.getElementById('value6').value);
        v7 =parseFloat(document.getElementById('value7').value);
        v8 =parseFloat(document.getElementById('value8').value);
        v9 =parseFloat(document.getElementById('value9').value);
        v10 =parseFloat(document.getElementById('value10').value);
        v11=parseFloat(document.getElementById('value11').value);
        v12=parseFloat(document.getElementById('value12').value);
    }
    else if (conta==12){
        v1 =parseFloat(document.getElementById('value1').value);
        v2 =parseFloat(document.getElementById('value2').value);
        v3 =parseFloat(document.getElementById('value3').value);
        v4 =parseFloat(document.getElementById('value4').value);
        v5 =parseFloat(document.getElementById('value5').value);
        v6 =parseFloat(document.getElementById('value6').value);
        v7 =parseFloat(document.getElementById('value7').value);
        v8 =parseFloat(document.getElementById('value8').value);
        v9 =parseFloat(document.getElementById('value9').value);
        v10 =parseFloat(document.getElementById('value10').value);
        v11=parseFloat(document.getElementById('value11').value);
        v12=parseFloat(document.getElementById('value12').value);
    }
    else if (conta==13){
        v1 =parseFloat(document.getElementById('value1').value);
        v2 =parseFloat(document.getElementById('value2').value);
        v3 =parseFloat(document.getElementById('value3').value);
        v4 =parseFloat(document.getElementById('value4').value);
        v5 =parseFloat(document.getElementById('value5').value);
        v6 =parseFloat(document.getElementById('value6').value);
        v7 =parseFloat(document.getElementById('value7').value);
        v8 =parseFloat(document.getElementById('value8').value);
        v9 =parseFloat(document.getElementById('value9').value);
        v10 =parseFloat(document.getElementById('value10').value);
        v11=parseFloat(document.getElementById('value11').value);
        v12=parseFloat(document.getElementById('value12').value);
    }
    else if (conta==14){
        v1 =parseFloat(document.getElementById('value1').value);
        v2 =parseFloat(document.getElementById('value2').value);
        v3 =parseFloat(document.getElementById('value3').value);
        v4 =parseFloat(document.getElementById('value4').value);
        v5 =parseFloat(document.getElementById('value5').value);
        v6 =parseFloat(document.getElementById('value6').value);
        v7 =parseFloat(document.getElementById('value7').value);
        v8 =parseFloat(document.getElementById('value8').value);
        v9 =parseFloat(document.getElementById('value9').value);
        v10 =parseFloat(document.getElementById('value10').value);
        v11=parseFloat(document.getElementById('value11').value);
        v12=parseFloat(document.getElementById('value12').value);
    }
    else if (conta==15){
        v1 =parseFloat(document.getElementById('value1').value);
        v2 =parseFloat(document.getElementById('value2').value);
        v3 =parseFloat(document.getElementById('value3').value);
        v4 =parseFloat(document.getElementById('value4').value);
        v5 =parseFloat(document.getElementById('value5').value);
        v6 =parseFloat(document.getElementById('value6').value);
        v7 =parseFloat(document.getElementById('value7').value);
        v8 =parseFloat(document.getElementById('value8').value);
        v9 =parseFloat(document.getElementById('value9').value);
        v10 =parseFloat(document.getElementById('value10').value);
        v11=parseFloat(document.getElementById('value11').value);
        v12=parseFloat(document.getElementById('value12').value);
    }
    ///VARIABLES DE OPCIONES
    var selectValue11 =document.getElementById('opcion11').value;
    var selectValue12 =document.getElementById('opcion12').value;

    var selectValue21 =document.getElementById('opcion21').value;
    var selectValue22 =document.getElementById('opcion22').value;

    var selectValue31 =document.getElementById('opcion31').value;
    var selectValue32 =document.getElementById('opcion32').value;

    var selectValue41 =document.getElementById('opcion41').value;
    var selectValue42 =document.getElementById('opcion42').value;

    var selectValue51 =document.getElementById('opcion51').value;
    var selectValue52 =document.getElementById('opcion52').value;

    var selectValue61 =document.getElementById('opcion61').value;
    var selectValue62 =document.getElementById('opcion62').value;

    var selectValue71 =document.getElementById('opcion71').value;
    var selectValue72 =document.getElementById('opcion72').value;

    var selectValue81 =document.getElementById('opcion81').value;
    var selectValue82 =document.getElementById('opcion82').value;

    var selectValue91 =document.getElementById('opcion91').value;
    var selectValue92 =document.getElementById('opcion92').value;

    var selectValue101 =document.getElementById('opcion101').value;
    var selectValue102 =document.getElementById('opcion102').value;

    var selectValue111 =document.getElementById('opcion111').value;
    var selectValue112 =document.getElementById('opcion112').value;

    var selectValue121 =document.getElementById('opcion121').value;
    var selectValue122 =document.getElementById('opcion122').value;

    var lista = []
    var peso = []
    
    ////Primer Div
    ////1.0 Div 
    if (selectValue11 =="ENTERO-LISO-9X19X39" && selectValue12=="natural"){
        lista.push(v1);
        peso.push(v1*10.6);
        v1 = v1*1.37;
    }
    else if(selectValue11 =="MEDIO-LISO-9X19X19" && selectValue12=="natural"){
        lista.push(v1);
        peso.push(v1*6);
        v1 = v1*0.94;
    }
    else if(selectValue11 =="VIGA-LISO-9X19x39" && selectValue12=="natural"){
        lista.push(v1);
        peso.push(v1*10.6);
        v1 = v1*1.37;
    }
    //
    else if (selectValue11 =="ENTERO-LISO-12X19X39" && selectValue12=="natural"){
        lista.push(v1);
        peso.push(v1*11.7);
        v1 = v1*1.47;
    }
    else if(selectValue11 =="MEDIO-LISO-12X19X19" && selectValue12=="natural"){
        lista.push(v1);
        peso.push(v1*7);
        v1 = v1*0.95;
    }
    else if(selectValue11 =="VIGA-LISO-12X19x39" && selectValue12=="natural"){
        lista.push(v1);
        peso.push(v1*11.7);
        v1 = v1*1.47;
    }
    ///
    else if (selectValue11 =="ENTERO-LISO-15X19X39" && selectValue12=="natural"){
        lista.push(v1);
        peso.push(v1*12.5);
        v1 = v1*1.68;
    }
    else if(selectValue11 =="MEDIO-LISO-15X19X19" && selectValue12=="natural"){
        lista.push(v1);
        peso.push(v1*7.5);
        v1 = v1*1.1;
    }
    else if(selectValue11 =="VIGA-LISO-15X19x39" && selectValue12=="natural"){
        lista.push(v1);
        peso.push(v1*12.5);
        v1 = v1*1.68;
    }
    ////
    else if (selectValue11 =="ENTERO-LISO-20X19X39" && selectValue12=="natural"){
        lista.push(v1);
        peso.push(v1*16.5);
        v1 = v1*2;
    }
    else if(selectValue11 =="MEDIO-LISO-20X19X19" && selectValue12=="natural"){
        lista.push(v1);
        peso.push(v1*9);
        v1 = v1*1.21;
    }
    else if(selectValue11 =="VIGA-LISO-20X19x39" && selectValue12=="natural"){
        lista.push(v1);
        peso.push(v1*16.5);
        v1 = v1*2;
    }
    ////Segundo Div
    
    if (selectValue21 =="ENTERO-LISO-9X19X39" && selectValue22=="natural"){
        lista.push(v2);
        peso.push(v2*10.6);
        v2 = v2*1.37;
    }
    else if(selectValue21 =="MEDIO-LISO-9X19X19" && selectValue22=="natural"){
        lista.push(v2);
        peso.push(v2*6);
        v2 = v2*0.94;
    }
    else if(selectValue21 =="VIGA-LISO-9X19x39" && selectValue22=="natural"){
        lista.push(v2);
        peso.push(v2*10.6);
        v2 = v2*1.37;
    }
    //
    else if (selectValue21 =="ENTERO-LISO-12X19X39" && selectValue22=="natural"){
        lista.push(v2);
        peso.push(v2*11.7);
        v2 = v2*1.47;
    }
    else if(selectValue21 =="MEDIO-LISO-12X19X19" && selectValue22=="natural"){
        lista.push(v2);
        peso.push(v2*7);
        v2 = v2*0.95;
    }
    else if(selectValue21 =="VIGA-LISO-12X19x39" && selectValue22=="natural"){
        lista.push(v2);
        peso.push(v2*11.7);
        v2 = v2*1.47;
    }
    ///
    else if (selectValue21 =="ENTERO-LISO-15X19X39" && selectValue22=="natural"){
        lista.push(v2);
        peso.push(v2*12.5);
        v2 = v2*1.68;
    }
    else if(selectValue21 =="MEDIO-LISO-15X19X19" && selectValue22=="natural"){
        lista.push(v2);
        peso.push(v2*7.5);
        v2 = v2*1.1;
    }
    else if(selectValue21 =="VIGA-LISO-15X19x39" && selectValue22=="natural"){
        lista.push(v2);
        peso.push(v2*12.5);
        v2 = v2*1.68;
    }
    ////
    else if (selectValue21 =="ENTERO-LISO-20X19X39" && selectValue22=="natural"){
        lista.push(v2);
        peso.push(v2*16.5);
        v2 = v2*2;
    }
    else if(selectValue21 =="MEDIO-LISO-20X19X19" && selectValue22=="natural"){
        lista.push(v2);
        peso.push(v2*9);
        v2 = v2*1.21;
    }
    else if(selectValue21 =="VIGA-LISO-20X19x39" && selectValue22=="natural"){
        lista.push(v2);
        peso.push(v2*16.5);
        v2 = v2*2;
    }

    ////Tercer Div
  
    if (selectValue31 =="ENTERO-LISO-9X19X39" && selectValue32=="natural"){
        lista.push(v3);
        peso.push(v3*10.6);
        v3 = v3*1.37;
    }
    else if(selectValue31 =="MEDIO-LISO-9X19X19" && selectValue32=="natural"){
        lista.push(v3);
        peso.push(v3*6);
        v3 = v3*0.94;
    }
    else if(selectValue31 =="VIGA-LISO-9X19x39" && selectValue32=="natural"){
        lista.push(v3);
        peso.push(v3*10.6);
        v3 = v3*1.37;
    }
    //
    else if (selectValue31 =="ENTERO-LISO-12X19X39" && selectValue32=="natural"){
        lista.push(v3);
        peso.push(v3*11.7);
        v3 = v3*1.47;
    }
    else if(selectValue31 =="MEDIO-LISO-12X19X19" && selectValue32=="natural"){
        lista.push(v3);
        peso.push(v3*7);
        v3 = v3*0.95;
    }
    else if(selectValue31 =="VIGA-LISO-12X19x39" && selectValue32=="natural"){
        lista.push(v3);
        peso.push(v3*11.7);
        v3 = v3*1.47;
    }
    ///
    else if (selectValue31 =="ENTERO-LISO-15X19X39" && selectValue32=="natural"){
        lista.push(v3);
        peso.push(v3*12.5);
        v3 = v3*1.68;
    }
    else if(selectValue31 =="MEDIO-LISO-15X19X19" && selectValue32=="natural"){
        lista.push(v3);
        peso.push(v3*7.5);
        v3 = v3*1.1;
    }
    else if(selectValue31 =="VIGA-LISO-15X19x39" && selectValue32=="natural"){
        lista.push(v3);
        peso.push(v3*12.5);
        v3 = v3*1.68;
    }
    ////
    else if (selectValue31 =="ENTERO-LISO-20X19X39" && selectValue32=="natural"){
        lista.push(v3);
        peso.push(v3*16.5);
        v3 = v3*2;
    }
    else if(selectValue31 =="MEDIO-LISO-20X19X19" && selectValue32=="natural"){
        lista.push(v3);
        peso.push(v3*9);
        v3 = v3*1.21;
    }
    else if(selectValue31 =="VIGA-LISO-20X19x39" && selectValue32=="natural"){
        lista.push(v3);
        peso.push(v3*16.5);
        v3 = v3*2;
    }
    ////Cuarto Div
  
    if (selectValue41 =="ENTERO-LISO-9X19X39" && selectValue42=="natural"){
        lista.push(v4);
        peso.push(v4*10.6);
        v4 = v4*1.37;
    }
    else if(selectValue41 =="MEDIO-LISO-9X19X19" && selectValue42=="natural"){
        lista.push(v4);
        peso.push(v4*6);
        v4 = v4*0.94;
    }
    else if(selectValue41 =="VIGA-LISO-9X19x39" && selectValue42=="natural"){
        lista.push(v4);
        peso.push(v4*10.6);
        v4 = v4*1.37;
    }
    //
    else if (selectValue41 =="ENTERO-LISO-12X19X39" && selectValue42=="natural"){
        lista.push(v4);
        peso.push(v4*11.7);
        v4 = v4*1.47;
    }
    else if(selectValue41 =="MEDIO-LISO-12X19X19" && selectValue42=="natural"){
        lista.push(v4);
        peso.push(v4*7);
        v4 = v4*0.95;
    }
    else if(selectValue41 =="VIGA-LISO-12X19x39" && selectValue42=="natural"){
        lista.push(v4);
        peso.push(v4*11.7);
        v4 = v4*1.47;
    }
    ///
    else if (selectValue41 =="ENTERO-LISO-15X19X39" && selectValue42=="natural"){
        lista.push(v4);
        peso.push(v4*12.5);
        v4 = v4*1.68;
    }
    else if(selectValue41 =="MEDIO-LISO-15X19X19" && selectValue42=="natural"){
        lista.push(v4);
        peso.push(v4*7.5);
        v4 = v4*1.1;
    }
    else if(selectValue41 =="VIGA-LISO-15X19x39" && selectValue42=="natural"){
        lista.push(v4);
        peso.push(v4*12.5);
        v4 = v4*1.68;
    }
    ////
    else if (selectValue41 =="ENTERO-LISO-20X19X39" && selectValue42=="natural"){
        lista.push(v4);
        peso.push(v4*16.5);
        v4 = v4*2;
    }
    else if(selectValue41 =="MEDIO-LISO-20X19X19" && selectValue42=="natural"){
        lista.push(v4);
        peso.push(v4*9);
        v4 = v4*1.21;
    }
    else if(selectValue41 =="VIGA-LISO-20X19x39" && selectValue42=="natural"){
        lista.push(v4);
        peso.push(v4*16.5);
        v4 = v4*2;
    }
    ////Quinto Div
  
    if (selectValue51 =="ENTERO-LISO-9X19X39" && selectValue52=="natural"){
        lista.push(v5);
        peso.push(v5*10.6);
        v5 = v5*1.37;
    }
    else if(selectValue51 =="MEDIO-LISO-9X19X19" && selectValue52=="natural"){
        lista.push(v5);
        peso.push(v5*6);
        v5 = v5*0.94;
    }
    else if(selectValue51 =="VIGA-LISO-9X19x39" && selectValue52=="natural"){
        lista.push(v5);
        peso.push(v5*10.6);
        v5 = v5*1.37;
    }
    //
    else if (selectValue51 =="ENTERO-LISO-12X19X39" && selectValue52=="natural"){
        lista.push(v5);
        peso.push(v5*11.7);
        v5 = v5*1.47;
    }
    else if(selectValue51 =="MEDIO-LISO-12X19X19" && selectValue52=="natural"){
        lista.push(v5);
        peso.push(v5*7);
        v5 = v5*0.95;
    }
    else if(selectValue51 =="VIGA-LISO-12X19x39" && selectValue52=="natural"){
        lista.push(v5);
        peso.push(v5*11.7);
        v5 = v5*1.47;
    }
    ///
    else if (selectValue51 =="ENTERO-LISO-15X19X39" && selectValue52=="natural"){
        lista.push(v5);
        peso.push(v5*12.5);
        v5 = v5*1.68;
    }
    else if(selectValue51 =="MEDIO-LISO-15X19X19" && selectValue52=="natural"){
        lista.push(v5);
        peso.push(v5*7.5);
        v5 = v5*1.1;
    }
    else if(selectValue51 =="VIGA-LISO-15X19x39" && selectValue52=="natural"){
        lista.push(v5);
        peso.push(v5*12.5);
        v5 = v5*1.68;
    }
    ////
    else if (selectValue51 =="ENTERO-LISO-20X19X39" && selectValue52=="natural"){
        lista.push(v5);
        peso.push(v5*16.5);
        v5 = v5*2;
    }
    else if(selectValue51 =="MEDIO-LISO-20X19X19" && selectValue52=="natural"){
        lista.push(v5);
        peso.push(v5*9);
        v5 = v5*1.21;
    }
    else if(selectValue51 =="VIGA-LISO-20X19x39" && selectValue52=="natural"){
        lista.push(v5);
        peso.push(v5*16.5);
        v5 = v5*2;
    }
     ////Sexto Div
  
     if (selectValue61 =="ENTERO-LISO-9X19X39" && selectValue62=="natural"){
        lista.push(v6);
        peso.push(v6*10.6);
        v6 = v6*1.37;
    }
    else if(selectValue61 =="MEDIO-LISO-9X19X19" && selectValue62=="natural"){
        lista.push(v6);
        peso.push(v6*6);
        v6 = v6*0.94;
    }
    else if(selectValue61 =="VIGA-LISO-9X19x39" && selectValue62=="natural"){
        lista.push(v6);
        peso.push(v6*10.6);
        v6 = v6*1.37;
    }
    //
    else if (selectValue61 =="ENTERO-LISO-12X19X39" && selectValue62=="natural"){
        lista.push(v6);
        peso.push(v6*11.7);
        v6 = v6*1.47;
    }
    else if(selectValue61 =="MEDIO-LISO-12X19X19" && selectValue62=="natural"){
        lista.push(v6);
        peso.push(v6*7);
        v6 = v6*0.95;
    }
    else if(selectValue61 =="VIGA-LISO-12X19x39" && selectValue62=="natural"){
        lista.push(v6);
        peso.push(v6*11.7);
        v6 = v6*1.47;
    }
    ///
    else if (selectValue61 =="ENTERO-LISO-15X19X39" && selectValue62=="natural"){
        lista.push(v6);
        peso.push(v6*12.5);
        v6 = v6*1.68;
    }
    else if(selectValue61 =="MEDIO-LISO-15X19X19" && selectValue62=="natural"){
        lista.push(v6);
        peso.push(v6*7.5);
        v6 = v6*1.1;
    }
    else if(selectValue61 =="VIGA-LISO-15X19x39" && selectValue62=="natural"){
        lista.push(v6);
        peso.push(v6*12.5);
        v6 = v6*1.68;
    }
    ////
    else if (selectValue61 =="ENTERO-LISO-20X19X39" && selectValue62=="natural"){
        lista.push(v6);
        peso.push(v6*16.5);
        v6 = v6*2;
    }
    else if(selectValue61 =="MEDIO-LISO-20X19X19" && selectValue62=="natural"){
        lista.push(v6);
        peso.push(v6*9);
        v6 = v6*1.21;
    }
    else if(selectValue61 =="VIGA-LISO-20X19x39" && selectValue62=="natural"){
        lista.push(v6);
        peso.push(v6*16.5);
        v6 = v6*2;
    }

     ////Septimo Div
  
     if (selectValue71 =="ENTERO-LISO-9X19X39" && selectValue72=="natural"){
        lista.push(v7);
        peso.push(v7*10.6);
        v7 = v7*1.37;
    }
    else if(selectValue71 =="MEDIO-LISO-9X19X19" && selectValue72=="natural"){
        lista.push(v7);
        peso.push(v7*6);
        v7 = v7*0.94;
    }
    else if(selectValue71 =="VIGA-LISO-9X19x39" && selectValue72=="natural"){
        lista.push(v7);
        peso.push(v7*10.6);
        v7 = v7*1.37;
    }
    //
    else if (selectValue71 =="ENTERO-LISO-12X19X39" && selectValue72=="natural"){
        lista.push(v7);
        peso.push(v7*11.7);
        v7 = v7*1.47;
    }
    else if(selectValue71 =="MEDIO-LISO-12X19X19" && selectValue72=="natural"){
        lista.push(v7);
        peso.push(v7*7);
        v7 = v7*0.95;
    }
    else if(selectValue71 =="VIGA-LISO-12X19x39" && selectValue72=="natural"){
        lista.push(v7);
        peso.push(v7*11.7);
        v7 = v7*1.47;
    }
    ///
    else if (selectValue71 =="ENTERO-LISO-15X19X39" && selectValue72=="natural"){
        lista.push(v7);
        peso.push(v7*12.5);
        v7 = v7*1.68;
    }
    else if(selectValue71 =="MEDIO-LISO-15X19X19" && selectValue72=="natural"){
        lista.push(v7);
        peso.push(v7*7.5);
        v7 = v7*1.1;
    }
    else if(selectValue71 =="VIGA-LISO-15X19x39" && selectValue72=="natural"){
        lista.push(v7);
        peso.push(v7*12.5);
        v7 = v7*1.68;
    }
    ////
    else if (selectValue71 =="ENTERO-LISO-20X19X39" && selectValue72=="natural"){
        lista.push(v7);
        peso.push(v7*16.5);
        v7 = v7*2;
    }
    else if(selectValue71 =="MEDIO-LISO-20X19X19" && selectValue72=="natural"){
        lista.push(v7);
        peso.push(v7*9);
        v7 = v7*1.21;
    }
    else if(selectValue71 =="VIGA-LISO-20X19x39" && selectValue72=="natural"){
        lista.push(v7);
        peso.push(v7*16.5);
        v7 = v7*2;
    }

    ////Octavo Div
  
     if (selectValue81 =="ENTERO-LISO-9X19X39" && selectValue82=="natural"){
        lista.push(v8);
        peso.push(v8*10.6);
        v8 = v8*1.37;
    }
    else if(selectValue81 =="MEDIO-LISO-9X19X19" && selectValue82=="natural"){
        lista.push(v8);
        peso.push(v8*6);
        v8 = v8*0.94;
    }
    else if(selectValue81 =="VIGA-LISO-9X19x39" && selectValue82=="natural"){
        lista.push(v8);
        peso.push(v8*10.6);
        v8 = v8*1.37;
    }
    //
    else if (selectValue81 =="ENTERO-LISO-12X19X39" && selectValue82=="natural"){
        lista.push(v8);
        peso.push(v8*11.7);
        v8 = v8*1.47;
    }
    else if(selectValue81 =="MEDIO-LISO-12X19X19" && selectValue82=="natural"){
        lista.push(v8);
        peso.push(v8*7);
        v8 = v8*0.95;
    }
    else if(selectValue81 =="VIGA-LISO-12X19x39" && selectValue82=="natural"){
        lista.push(v8);
        peso.push(v8*11.7);
        v8 = v8*1.47;
    }
    ///
    else if (selectValue81 =="ENTERO-LISO-15X19X39" && selectValue82=="natural"){
        lista.push(v8);
        peso.push(v8*12.5);
        v8 = v8*1.68;
    }
    else if(selectValue81 =="MEDIO-LISO-15X19X19" && selectValue82=="natural"){
        lista.push(v8);
        peso.push(v8*7.5);
        v8 = v8*1.1;
    }
    else if(selectValue81 =="VIGA-LISO-15X19x39" && selectValue82=="natural"){
        lista.push(v8);
        peso.push(v8*12.5);
        v8 = v8*1.68;
    }
    ////
    else if (selectValue81 =="ENTERO-LISO-20X19X39" && selectValue82=="natural"){
        lista.push(v8);
        peso.push(v8*16.5);
        v8 = v8*2;
    }
    else if(selectValue81 =="MEDIO-LISO-20X19X19" && selectValue82=="natural"){
        lista.push(v8);
        peso.push(v8*9);
        v8 = v8*1.21;
    }
    else if(selectValue81 =="VIGA-LISO-20X19x39" && selectValue82=="natural"){
        lista.push(v8);
        peso.push(v8*16.5);
        v8 = v8*2;
    }

    ////Noveno Div
  
    if (selectValue91 =="ENTERO-LISO-9X19X39" && selectValue92=="natural"){
        lista.push(v9);
        peso.push(v9*10.6);
        v9 = v9*1.37;
    }
    else if(selectValue91 =="MEDIO-LISO-9X19X19" && selectValue92=="natural"){
        lista.push(v9);
        peso.push(v9*6);
        v9 = v9*0.94;
    }
    else if(selectValue91 =="VIGA-LISO-9X19x39" && selectValue92=="natural"){
        lista.push(v9);
        peso.push(v9*10.6);
        v9 = v9*1.37;
    }
    //
    else if (selectValue91 =="ENTERO-LISO-12X19X39" && selectValue92=="natural"){
        lista.push(v9);
        peso.push(v9*11.7);
        v9 = v9*1.47;
    }
    else if(selectValue91 =="MEDIO-LISO-12X19X19" && selectValue92=="natural"){
        lista.push(v9);
        peso.push(v9*7);
        v9 = v9*0.95;
    }
    else if(selectValue91 =="VIGA-LISO-12X19x39" && selectValue92=="natural"){
        lista.push(v9);
        peso.push(v9*11.7);
        v9 = v9*1.47;
    }
    ///
    else if (selectValue91 =="ENTERO-LISO-15X19X39" && selectValue92=="natural"){
        lista.push(v9);
        peso.push(v9*12.5);
        v9 = v9*1.68;
    }
    else if(selectValue91 =="MEDIO-LISO-15X19X19" && selectValue92=="natural"){
        lista.push(v9);
        peso.push(v9*7.5);
        v9 = v9*1.1;
    }
    else if(selectValue91 =="VIGA-LISO-15X19x39" && selectValue92=="natural"){
        lista.push(v9);
        peso.push(v9*12.5);
        v9 = v9*1.68;
    }
    ////
    else if (selectValue91 =="ENTERO-LISO-20X19X39" && selectValue92=="natural"){
        lista.push(v9);
        peso.push(v9*16.5);
        v9 = v9*2;
    }
    else if(selectValue91 =="MEDIO-LISO-20X19X19" && selectValue92=="natural"){
        lista.push(v9);
        peso.push(v9*9);
        v9 = v9*1.21;
    }
    else if(selectValue91 =="VIGA-LISO-20X19x39" && selectValue92=="natural"){
        lista.push(v9);
        peso.push(v9*16.5);
        v9 = v9*2;
    }

    ////Decimo Div
  
    if (selectValue101 =="ENTERO-LISO-9X19X39" && selectValue102=="natural"){
        lista.push(v10);
        peso.push(v10*10.6);
        v10 = v10*1.37;
    }
    else if(selectValue101 =="MEDIO-LISO-9X19X19" && selectValue102=="natural"){
        lista.push(v10);
        peso.push(v10*6);
        v10 = v10*0.94;
    }
    else if(selectValue101 =="VIGA-LISO-9X19x39" && selectValue102=="natural"){
        lista.push(v10);
        peso.push(v10*10.6);
        v10 = v10*1.37;
    }
    //
    else if (selectValue101 =="ENTERO-LISO-12X19X39" && selectValue102=="natural"){
        lista.push(v10);
        peso.push(v10*11.7);
        v10 = v10*1.47;
    }
    else if(selectValue101 =="MEDIO-LISO-12X19X19" && selectValue102=="natural"){
        lista.push(v10);
        peso.push(v10*7);
        v10 = v10*0.95;
    }
    else if(selectValue101 =="VIGA-LISO-12X19x39" && selectValue102=="natural"){
        lista.push(v10);
        peso.push(v10*11.7);
        v10 = v10*1.47;
    }
    ///
    else if (selectValue101 =="ENTERO-LISO-15X19X39" && selectValue102=="natural"){
        lista.push(v10);
        peso.push(v10*12.5);
        v10 = v10*1.68;
    }
    else if(selectValue101 =="MEDIO-LISO-15X19X19" && selectValue102=="natural"){
        lista.push(v10);
        peso.push(v10*7.5);
        v10 = v10*1.1;
    }
    else if(selectValue101 =="VIGA-LISO-15X19x39" && selectValue102=="natural"){
        lista.push(v10);
        peso.push(v10*12.5);
        v10 = v10*1.68;
    }
    ////
    else if (selectValue101 =="ENTERO-LISO-20X19X39" && selectValue102=="natural"){
        lista.push(v10);
        peso.push(v10*16.5);
        v10 = v10*2;
    }
    else if(selectValue101 =="MEDIO-LISO-20X19X19" && selectValue102=="natural"){
        lista.push(v10);
        peso.push(v10*9);
        v10 = v10*1.21;
    }
    else if(selectValue101 =="VIGA-LISO-20X19x39" && selectValue102=="natural"){
        lista.push(v10);
        peso.push(v10*16.5);
        v10 = v10*2;
    }
    
    ////onceavo Div
  
    if (selectValue111 =="ENTERO-LISO-9X19X39" && selectValue112=="natural"){
        lista.push(v11);
        peso.push(v11*10.6);
        v11 = v11*1.37;
    }
    else if(selectValue111 =="MEDIO-LISO-9X19X19" && selectValue112=="natural"){
        lista.push(v11);
        peso.push(v11*6);
        v11 = v11*0.94;
    }
    else if(selectValue111 =="VIGA-LISO-9X19x39" && selectValue112=="natural"){
        lista.push(v11);
        peso.push(v11*10.6);
        v11 = v11*1.37;
    }
    //
    else if (selectValue111 =="ENTERO-LISO-12X19X39" && selectValue112=="natural"){
        lista.push(v11);
        peso.push(v11*11.7);
        v11 = v11*1.47;
    }
    else if(selectValue111 =="MEDIO-LISO-12X19X19" && selectValue112=="natural"){
        lista.push(v11);
        peso.push(v11*7);
        v11 = v11*0.95;
    }
    else if(selectValue111 =="VIGA-LISO-12X19x39" && selectValue112=="natural"){
        lista.push(v11);
        peso.push(v11*11.7);
        v11 = v11*1.47;
    }
    ///
    else if (selectValue111 =="ENTERO-LISO-15X19X39" && selectValue112=="natural"){
        lista.push(v11);
        peso.push(v11*12.5);
        v11 = v11*1.68;
    }
    else if(selectValue111 =="MEDIO-LISO-15X19X19" && selectValue112=="natural"){
        lista.push(v11);
        peso.push(v11*7.5);
        v11 = v11*1.1;
    }
    else if(selectValue111 =="VIGA-LISO-15X19x39" && selectValue112=="natural"){
        lista.push(v11);
        peso.push(v11*12.5);
        v11 = v11*1.68;
    }
    ////
    else if (selectValue111 =="ENTERO-LISO-20X19X39" && selectValue112=="natural"){
        lista.push(v11);
        peso.push(v11*16.5);
        v11 = v11*2;
    }
    else if(selectValue111 =="MEDIO-LISO-20X19X19" && selectValue112=="natural"){
        lista.push(v11);
        peso.push(v11*9);
        v11 = v11*1.21;
    }
    else if(selectValue111 =="VIGA-LISO-20X19x39" && selectValue112=="natural"){
        lista.push(v11);
        peso.push(v11*16.5);
        v11 = v11*2;
    }

    ////doceavo Div
  
    if (selectValue121 =="ENTERO-LISO-9X19X39" && selectValue122=="natural"){
        lista.push(v12);
        peso.push(v12*10.6);
        v12 = v12*1.37;
    }
    else if(selectValue121 =="MEDIO-LISO-9X19X19" && selectValue122=="natural"){
        lista.push(v12);
        peso.push(v12*6);
        v12 = v12*0.94;
    }
    else if(selectValue121 =="VIGA-LISO-9X19x39" && selectValue122=="natural"){
        lista.push(v12);
        peso.push(v12*10.6);
        v12 = v12*1.37;
    }
    //
    else if (selectValue121 =="ENTERO-LISO-12X19X39" && selectValue122=="natural"){
        lista.push(v12);
        peso.push(v12*11.7);
        v12 = v12*1.47;
    }
    else if(selectValue121 =="MEDIO-LISO-12X19X19" && selectValue122=="natural"){
        lista.push(v12);
        peso.push(v12*7);
        v12 = v12*0.95;
    }
    else if(selectValue121 =="VIGA-LISO-12X19x39" && selectValue122=="natural"){
        lista.push(v12);
        peso.push(v12*11.7);
        v12 = v12*1.47;
    }
    ///
    else if (selectValue121 =="ENTERO-LISO-15X19X39" && selectValue122=="natural"){
        lista.push(v12);
        peso.push(v12*12.5);
        v12 = v12*1.68;
    }
    else if(selectValue121 =="MEDIO-LISO-15X19X19" && selectValue122=="natural"){
        lista.push(v12);
        peso.push(v12*7.5);
        v12 = v12*1.1;
    }
    else if(selectValue121 =="VIGA-LISO-15X19x39" && selectValue122=="natural"){
        lista.push(v12);
        peso.push(v12*12.5);
        v12 = v12*1.68;
    }
    ////
    else if (selectValue121 =="ENTERO-LISO-20X19X39" && selectValue122=="natural"){
        lista.push(v12);
        peso.push(v12*16.5);
        v12 = v12*2;
    }
    else if(selectValue121 =="MEDIO-LISO-20X19X19" && selectValue122=="natural"){
        lista.push(v12);
        peso.push(v12*9);
        v12 = v12*1.21;
    }
    else if(selectValue121 =="VIGA-LISO-20X19x39" && selectValue122=="natural"){
        lista.push(v12);
        peso.push(v12*16.5);
        v12 = v12*2;
    }

    l=[v1.toFixed(2),
        v2.toFixed(2),
        v3.toFixed(2),
        v4.toFixed(2),
        v5.toFixed(2),
        v6.toFixed(2),
        v7.toFixed(2),
        v8.toFixed(2), 
        v9.toFixed(2),
        v10.toFixed(2),
        v11.toFixed(2),
        v12.toFixed(2)]
     sumatoria= v1+v2+v3+v4+v5+v6+v7+v8+v9+v10+v11+v12;
     total= sumatoria + (sumatoria*0.18);
         
     document.getElementById('RUC').innerHTML = ruc;
     document.getElementById('CORREO').innerHTML = email;  
     document.getElementById('CELU').innerHTML = celular; 
     
     document.getElementById('nombr').innerHTML = persona;
     document.getElementById('result').innerHTML = "SUBTOTAL: "+" S/"+sumatoria.toFixed(2);
     document.getElementById('igv').innerHTML = "IGV 18%: "+ " S/"+(0.18*(sumatoria.toFixed(2))).toFixed(2); 
     document.getElementById('total').innerHTML = "TOTAL: "+ " S/"+ total.toFixed(2);

     for(var i=0; i<=conta; i++){
        if (conta==0){
            //document.getElementById('total').innerHTML = lista[0]+"Unidades "+ " de" +selectValue11+ "-" +selectValue12+ + " es "+ l[0] + "\n";
            document.getElementById('r1').innerHTML = "·"+lista[0]+" PZA  (" +selectValue11 + " - "+selectValue12+") " + "(P.unit - S/"+ (l[0]/lista[0]).toFixed(2) +")= S/" + l[0]  +"<br/>";
            ps = peso[0];
        }
        else if(conta==1){
            document.getElementById('r1').innerHTML = "·"+lista[0]+" PZA  (" +selectValue11 + " - "+selectValue12+") " + "(P.unit - S/"+ (l[0]/lista[0]).toFixed(2) +")= S/" + l[0]  +"<br/>";
            document.getElementById('r2').innerHTML = "·"+lista[1]+" PZA  (" +selectValue21 + " - "+selectValue22+") " + "(P.unit - S/"+ (l[1]/lista[1]).toFixed(2) +")= S/" + l[1]  +"<br/>";
            ps = peso[0]+peso[1];
        }
        else if(conta==2){
            document.getElementById('r1').innerHTML = "·"+lista[0]+" PZA  (" +selectValue11 + " - "+selectValue12+") " + "(P.unit - S/"+ (l[0]/lista[0]).toFixed(2) +")= S/" + l[0]  +"<br/>";
            document.getElementById('r2').innerHTML = "·"+lista[1]+" PZA  (" +selectValue21 + " - "+selectValue22+") " + "(P.unit - S/"+ (l[1]/lista[1]).toFixed(2) +")= S/" + l[1]  +"<br/>";
            document.getElementById('r3').innerHTML = "·"+lista[2]+" PZA  (" +selectValue31 + " - "+selectValue32+") " + "(P.unit - S/"+ (l[2]/lista[2]).toFixed(2) +")= S/" + l[2]  +"<br/>";
            ps = peso[0]+peso[1]+peso[2];
        }
        else if(conta==3){
            document.getElementById('r1').innerHTML = "·"+lista[0]+" PZA  (" +selectValue11 + " - "+selectValue12+") " + "(P.unit - S/"+ (l[0]/lista[0]).toFixed(2) +")= S/" + l[0]  +"<br/>";
            document.getElementById('r2').innerHTML = "·"+lista[1]+" PZA  (" +selectValue21 + " - "+selectValue22+") " + "(P.unit - S/"+ (l[1]/lista[1]).toFixed(2) +")= S/" + l[1]  +"<br/>";
            document.getElementById('r3').innerHTML = "·"+lista[2]+" PZA  (" +selectValue31 + " - "+selectValue32+") " + "(P.unit - S/"+ (l[2]/lista[2]).toFixed(2) +")= S/" + l[2]  +"<br/>";
            document.getElementById('r4').innerHTML = "·"+lista[3]+" PZA  (" +selectValue41 + " - "+selectValue42+") " + "(P.unit - S/"+ (l[3]/lista[3]).toFixed(2) +")= S/" + l[3]  +"<br/>";
            ps = peso[0]+peso[1]+peso[2]+peso[3];
        }
        else if(conta==4){
            document.getElementById('r1').innerHTML = "·"+lista[0]+" PZA  (" +selectValue11 + " - "+selectValue12+") " + "(P.unit - S/"+ (l[0]/lista[0]).toFixed(2) +")= S/" + l[0]  +"<br/>";
            document.getElementById('r2').innerHTML = "·"+lista[1]+" PZA  (" +selectValue21 + " - "+selectValue22+") " + "(P.unit - S/"+ (l[1]/lista[1]).toFixed(2) +")= S/" + l[1]  +"<br/>";
            document.getElementById('r3').innerHTML = "·"+lista[2]+" PZA  (" +selectValue31 + " - "+selectValue32+") " + "(P.unit - S/"+ (l[2]/lista[2]).toFixed(2) +")= S/" + l[2]  +"<br/>";
            document.getElementById('r4').innerHTML = "·"+lista[3]+" PZA  (" +selectValue41 + " - "+selectValue42+") " + "(P.unit - S/"+ (l[3]/lista[3]).toFixed(2) +")= S/" + l[3]  +"<br/>";
            document.getElementById('r5').innerHTML = "·"+lista[4]+" PZA  (" +selectValue51 + " - "+selectValue52+") " + "(P.unit - S/"+ (l[4]/lista[4]).toFixed(2) +")= S/" + l[4]  +"<br/>";
            ps = peso[0]+peso[1]+peso[2]+peso[3]+peso[4];
        }
        else if(conta==5){
            document.getElementById('r1').innerHTML = "·"+lista[0]+" PZA  (" +selectValue11 + " - "+selectValue12+") " + "(P.unit - S/"+ (l[0]/lista[0]).toFixed(2) +")= S/" + l[0]  +"<br/>";
            document.getElementById('r2').innerHTML = "·"+lista[1]+" PZA  (" +selectValue21 + " - "+selectValue22+") " + "(P.unit - S/"+ (l[1]/lista[1]).toFixed(2) +")= S/" + l[1]  +"<br/>";
            document.getElementById('r3').innerHTML = "·"+lista[2]+" PZA  (" +selectValue31 + " - "+selectValue32+") " + "(P.unit - S/"+ (l[2]/lista[2]).toFixed(2) +")= S/" + l[2]  +"<br/>";
            document.getElementById('r4').innerHTML = "·"+lista[3]+" PZA  (" +selectValue41 + " - "+selectValue42+") " + "(P.unit - S/"+ (l[3]/lista[3]).toFixed(2) +")= S/" + l[3]  +"<br/>";
            document.getElementById('r5').innerHTML = "·"+lista[4]+" PZA  (" +selectValue51 + " - "+selectValue52+") " + "(P.unit - S/"+ (l[4]/lista[4]).toFixed(2) +")= S/" + l[4]  +"<br/>";
            document.getElementById('r6').innerHTML = "·"+lista[5]+" PZA  (" +selectValue61 + " - "+selectValue62+") " + "(P.unit - S/"+ (l[5]/lista[5]).toFixed(2) +")= S/" + l[5]  +"<br/>";
            ps = peso[0]+peso[1]+peso[2]+peso[3]+peso[4]+peso[5];
        }
        else if(conta==6){
            document.getElementById('r1').innerHTML = "·"+lista[0]+" PZA  (" +selectValue11 + " - "+selectValue12+") " + "(P.unit - S/"+ (l[0]/lista[0]).toFixed(2) +")= S/" + l[0]  +"<br/>";
            document.getElementById('r2').innerHTML = "·"+lista[1]+" PZA  (" +selectValue21 + " - "+selectValue22+") " + "(P.unit - S/"+ (l[1]/lista[1]).toFixed(2) +")= S/" + l[1]  +"<br/>";
            document.getElementById('r3').innerHTML = "·"+lista[2]+" PZA  (" +selectValue31 + " - "+selectValue32+") " + "(P.unit - S/"+ (l[2]/lista[2]).toFixed(2) +")= S/" + l[2]  +"<br/>";
            document.getElementById('r4').innerHTML = "·"+lista[3]+" PZA  (" +selectValue41 + " - "+selectValue42+") " + "(P.unit - S/"+ (l[3]/lista[3]).toFixed(2) +")= S/" + l[3]  +"<br/>";
            document.getElementById('r5').innerHTML = "·"+lista[4]+" PZA  (" +selectValue51 + " - "+selectValue52+") " + "(P.unit - S/"+ (l[4]/lista[4]).toFixed(2) +")= S/" + l[4]  +"<br/>";
            document.getElementById('r6').innerHTML = "·"+lista[5]+" PZA  (" +selectValue61 + " - "+selectValue62+") " + "(P.unit - S/"+ (l[5]/lista[5]).toFixed(2) +")= S/" + l[5]  +"<br/>";
            document.getElementById('r7').innerHTML = "·"+lista[6]+" PZA  (" +selectValue71 + " - "+selectValue72+") " + "(P.unit - S/"+ (l[6]/lista[6]).toFixed(2) +")= S/" + l[6]  +"<br/>";
            ps = peso[0]+peso[1]+peso[2]+peso[3]+peso[4]+peso[5]+peso[6];
        }
        else if(conta==7){
            document.getElementById('r1').innerHTML = "·"+lista[0]+" PZA  (" +selectValue11 + " - "+selectValue12+") " + "(P.unit - S/"+ (l[0]/lista[0]).toFixed(2) +")= S/" + l[0]  +"<br/>";
            document.getElementById('r2').innerHTML = "·"+lista[1]+" PZA  (" +selectValue21 + " - "+selectValue22+") " + "(P.unit - S/"+ (l[1]/lista[1]).toFixed(2) +")= S/" + l[1]  +"<br/>";
            document.getElementById('r3').innerHTML = "·"+lista[2]+" PZA  (" +selectValue31 + " - "+selectValue32+") " + "(P.unit - S/"+ (l[2]/lista[2]).toFixed(2) +")= S/" + l[2]  +"<br/>";
            document.getElementById('r4').innerHTML = "·"+lista[3]+" PZA  (" +selectValue41 + " - "+selectValue42+") " + "(P.unit - S/"+ (l[3]/lista[3]).toFixed(2) +")= S/" + l[3]  +"<br/>";
            document.getElementById('r5').innerHTML = "·"+lista[4]+" PZA  (" +selectValue51 + " - "+selectValue52+") " + "(P.unit - S/"+ (l[4]/lista[4]).toFixed(2) +")= S/" + l[4]  +"<br/>";
            document.getElementById('r6').innerHTML = "·"+lista[5]+" PZA  (" +selectValue61 + " - "+selectValue62+") " + "(P.unit - S/"+ (l[5]/lista[5]).toFixed(2) +")= S/" + l[5]  +"<br/>";
            document.getElementById('r7').innerHTML = "·"+lista[6]+" PZA  (" +selectValue71 + " - "+selectValue72+") " + "(P.unit - S/"+ (l[6]/lista[6]).toFixed(2) +")= S/" + l[6]  +"<br/>";
            document.getElementById('r8').innerHTML = "·"+lista[7]+" PZA  (" +selectValue81 + " - "+selectValue82+") " + "(P.unit - S/"+ (l[7]/lista[7]).toFixed(2) +")= S/" + l[7]  +"<br/>";
            ps = peso[0]+peso[1]+peso[2]+peso[3]+peso[4]+peso[5]+peso[6]+peso[7];
        }
        else if(conta==8){
            document.getElementById('r1').innerHTML = "·"+lista[0]+" PZA  (" +selectValue11 + " - "+selectValue12+") " + "(P.unit - S/"+ (l[0]/lista[0]).toFixed(2) +")= S/" + l[0]  +"<br/>";
            document.getElementById('r2').innerHTML = "·"+lista[1]+" PZA  (" +selectValue21 + " - "+selectValue22+") " + "(P.unit - S/"+ (l[1]/lista[1]).toFixed(2) +")= S/" + l[1]  +"<br/>";
            document.getElementById('r3').innerHTML = "·"+lista[2]+" PZA  (" +selectValue31 + " - "+selectValue32+") " + "(P.unit - S/"+ (l[2]/lista[2]).toFixed(2) +")= S/" + l[2]  +"<br/>";
            document.getElementById('r4').innerHTML = "·"+lista[3]+" PZA  (" +selectValue41 + " - "+selectValue42+") " + "(P.unit - S/"+ (l[3]/lista[3]).toFixed(2) +")= S/" + l[3]  +"<br/>";
            document.getElementById('r5').innerHTML = "·"+lista[4]+" PZA  (" +selectValue51 + " - "+selectValue52+") " + "(P.unit - S/"+ (l[4]/lista[4]).toFixed(2) +")= S/" + l[4]  +"<br/>";
            document.getElementById('r6').innerHTML = "·"+lista[5]+" PZA  (" +selectValue61 + " - "+selectValue62+") " + "(P.unit - S/"+ (l[5]/lista[5]).toFixed(2) +")= S/" + l[5]  +"<br/>";
            document.getElementById('r7').innerHTML = "·"+lista[6]+" PZA  (" +selectValue71 + " - "+selectValue72+") " + "(P.unit - S/"+ (l[6]/lista[6]).toFixed(2) +")= S/" + l[6]  +"<br/>";
            document.getElementById('r8').innerHTML = "·"+lista[7]+" PZA  (" +selectValue81 + " - "+selectValue82+") " + "(P.unit - S/"+ (l[7]/lista[7]).toFixed(2) +")= S/" + l[7]  +"<br/>";
            document.getElementById('r9').innerHTML = "·"+lista[8]+" PZA  (" +selectValue91 + " - "+selectValue92+") " + "(P.unit - S/"+ (l[8]/lista[8]).toFixed(2) +")= S/" + l[8]  +"<br/>";
            ps = peso[0]+peso[1]+peso[2]+peso[3]+peso[4]+peso[5]+peso[6]+peso[7]+peso[8];
        }
        else if(conta==9){
            document.getElementById('r1').innerHTML = "·"+lista[0]+" PZA  (" +selectValue11 + " - "+selectValue12+") " + "(P.unit - S/"+ (l[0]/lista[0]).toFixed(2) +")= S/" + l[0]  +"<br/>";
            document.getElementById('r2').innerHTML = "·"+lista[1]+" PZA  (" +selectValue21 + " - "+selectValue22+") " + "(P.unit - S/"+ (l[1]/lista[1]).toFixed(2) +")= S/" + l[1]  +"<br/>";
            document.getElementById('r3').innerHTML = "·"+lista[2]+" PZA  (" +selectValue31 + " - "+selectValue32+") " + "(P.unit - S/"+ (l[2]/lista[2]).toFixed(2) +")= S/" + l[2]  +"<br/>";
            document.getElementById('r4').innerHTML = "·"+lista[3]+" PZA  (" +selectValue41 + " - "+selectValue42+") " + "(P.unit - S/"+ (l[3]/lista[3]).toFixed(2) +")= S/" + l[3]  +"<br/>";
            document.getElementById('r5').innerHTML = "·"+lista[4]+" PZA  (" +selectValue51 + " - "+selectValue52+") " + "(P.unit - S/"+ (l[4]/lista[4]).toFixed(2) +")= S/" + l[4]  +"<br/>";
            document.getElementById('r6').innerHTML = "·"+lista[5]+" PZA  (" +selectValue61 + " - "+selectValue62+") " + "(P.unit - S/"+ (l[5]/lista[5]).toFixed(2) +")= S/" + l[5]  +"<br/>";
            document.getElementById('r7').innerHTML = "·"+lista[6]+" PZA  (" +selectValue71 + " - "+selectValue72+") " + "(P.unit - S/"+ (l[6]/lista[6]).toFixed(2) +")= S/" + l[6]  +"<br/>";
            document.getElementById('r8').innerHTML = "·"+lista[7]+" PZA  (" +selectValue81 + " - "+selectValue82+") " + "(P.unit - S/"+ (l[7]/lista[7]).toFixed(2) +")= S/" + l[7]  +"<br/>";
            document.getElementById('r9').innerHTML = "·"+lista[8]+" PZA  (" +selectValue91 + " - "+selectValue92+") " + "(P.unit - S/"+ (l[8]/lista[8]).toFixed(2) +")= S/" + l[8]  +"<br/>";
            document.getElementById('r10').innerHTML = "·"+lista[9]+" PZA  (" +selectValue101 + " - "+selectValue102+") " + "(P.unit - S/"+ (l[9]/lista[9]).toFixed(2) +")= S/" + l[9]  +"<br/>";
            ps = peso[0]+peso[1]+peso[2]+peso[3]+peso[4]+peso[5]+peso[6]+peso[7]+peso[8]+peso[9];
        }
        else if(conta==10){
            document.getElementById('r1').innerHTML = "·"+lista[0]+" PZA  (" +selectValue11 + " - "+selectValue12+") " + "(P.unit - S/"+ (l[0]/lista[0]).toFixed(2) +")= S/" + l[0]  +"<br/>";
            document.getElementById('r2').innerHTML = "·"+lista[1]+" PZA  (" +selectValue21 + " - "+selectValue22+") " + "(P.unit - S/"+ (l[1]/lista[1]).toFixed(2) +")= S/" + l[1]  +"<br/>";
            document.getElementById('r3').innerHTML = "·"+lista[2]+" PZA  (" +selectValue31 + " - "+selectValue32+") " + "(P.unit - S/"+ (l[2]/lista[2]).toFixed(2) +")= S/" + l[2]  +"<br/>";
            document.getElementById('r4').innerHTML = "·"+lista[3]+" PZA  (" +selectValue41 + " - "+selectValue42+") " + "(P.unit - S/"+ (l[3]/lista[3]).toFixed(2) +")= S/" + l[3]  +"<br/>";
            document.getElementById('r5').innerHTML = "·"+lista[4]+" PZA  (" +selectValue51 + " - "+selectValue52+") " + "(P.unit - S/"+ (l[4]/lista[4]).toFixed(2) +")= S/" + l[4]  +"<br/>";
            document.getElementById('r6').innerHTML = "·"+lista[5]+" PZA  (" +selectValue61 + " - "+selectValue62+") " + "(P.unit - S/"+ (l[5]/lista[5]).toFixed(2) +")= S/" + l[5]  +"<br/>";
            document.getElementById('r7').innerHTML = "·"+lista[6]+" PZA  (" +selectValue71 + " - "+selectValue72+") " + "(P.unit - S/"+ (l[6]/lista[6]).toFixed(2) +")= S/" + l[6]  +"<br/>";
            document.getElementById('r8').innerHTML = "·"+lista[7]+" PZA  (" +selectValue81 + " - "+selectValue82+") " + "(P.unit - S/"+ (l[7]/lista[7]).toFixed(2) +")= S/" + l[7]  +"<br/>";
            document.getElementById('r9').innerHTML = "·"+lista[8]+" PZA  (" +selectValue91 + " - "+selectValue92+") " + "(P.unit - S/"+ (l[8]/lista[8]).toFixed(2) +")= S/" + l[8]  +"<br/>";
            document.getElementById('r10').innerHTML = "·"+lista[9]+" PZA  (" +selectValue101 + " - "+selectValue102+") " + "(P.unit - S/"+ (l[9]/lista[9]).toFixed(2) +")= S/" + l[9]  +"<br/>";
            document.getElementById('r11').innerHTML = "·"+lista[10]+" PZA  (" +selectValue111 + " - "+selectValue112+") " + "(P.unit - S/"+ (l[10]/lista[10]).toFixed(2) +")= S/" + l[10]  +"<br/>";
            ps = peso[0]+peso[1]+peso[2]+peso[3]+peso[4]+peso[5]+peso[6]+peso[7]+peso[8]+peso[9]+peso[10];
        }
        else if(conta==11){
            document.getElementById('r1').innerHTML = "·"+lista[0]+" PZA  (" +selectValue11 + " - "+selectValue12+") " + "(P.unit - S/"+ (l[0]/lista[0]).toFixed(2) +")= S/" + l[0]  +"<br/>";
            document.getElementById('r2').innerHTML = "·"+lista[1]+" PZA  (" +selectValue21 + " - "+selectValue22+") " + "(P.unit - S/"+ (l[1]/lista[1]).toFixed(2) +")= S/" + l[1]  +"<br/>";
            document.getElementById('r3').innerHTML = "·"+lista[2]+" PZA  (" +selectValue31 + " - "+selectValue32+") " + "(P.unit - S/"+ (l[2]/lista[2]).toFixed(2) +")= S/" + l[2]  +"<br/>";
            document.getElementById('r4').innerHTML = "·"+lista[3]+" PZA  (" +selectValue41 + " - "+selectValue42+") " + "(P.unit - S/"+ (l[3]/lista[3]).toFixed(2) +")= S/" + l[3]  +"<br/>";
            document.getElementById('r5').innerHTML = "·"+lista[4]+" PZA  (" +selectValue51 + " - "+selectValue52+") " + "(P.unit - S/"+ (l[4]/lista[4]).toFixed(2) +")= S/" + l[4]  +"<br/>";
            document.getElementById('r6').innerHTML = "·"+lista[5]+" PZA  (" +selectValue61 + " - "+selectValue62+") " + "(P.unit - S/"+ (l[5]/lista[5]).toFixed(2) +")= S/" + l[5]  +"<br/>";
            document.getElementById('r7').innerHTML = "·"+lista[6]+" PZA  (" +selectValue71 + " - "+selectValue72+") " + "(P.unit - S/"+ (l[6]/lista[6]).toFixed(2) +")= S/" + l[6]  +"<br/>";
            document.getElementById('r8').innerHTML = "·"+lista[7]+" PZA  (" +selectValue81 + " - "+selectValue82+") " + "(P.unit - S/"+ (l[7]/lista[7]).toFixed(2) +")= S/" + l[7]  +"<br/>";
            document.getElementById('r9').innerHTML = "·"+lista[8]+" PZA  (" +selectValue91 + " - "+selectValue92+") " + "(P.unit - S/"+ (l[8]/lista[8]).toFixed(2) +")= S/" + l[8]  +"<br/>";
            document.getElementById('r10').innerHTML = "·"+lista[9]+" PZA  (" +selectValue101 + " - "+selectValue102+") " + "(P.unit - S/"+ (l[9]/lista[9]).toFixed(2) +")= S/" + l[9]  +"<br/>";
            document.getElementById('r11').innerHTML = "·"+lista[10]+" PZA  (" +selectValue111 + " - "+selectValue112+") " + "(P.unit - S/"+ (l[10]/lista[10]).toFixed(2) +")= S/" + l[10]  +"<br/>";
            document.getElementById('r12').innerHTML = "·"+lista[11]+" PZA  (" +selectValue121 + " - "+selectValue122+") " + "(P.unit - S/"+ (l[11]/lista[11]).toFixed(2) +")= S/" + l[11]  +"<br/>";
            ps = peso[0]+peso[1]+peso[2]+peso[3]+peso[4]+peso[5]+peso[6]+peso[7]+peso[8]+peso[9]+peso[10]+peso[11];
        }
        else if(conta==12){
            document.getElementById('r1').innerHTML = "·"+lista[0]+" PZA  (" +selectValue11 + " - "+selectValue12+") " + "(P.unit - S/"+ (l[0]/lista[0]).toFixed(2) +")= S/" + l[0]  +"<br/>";
            document.getElementById('r2').innerHTML = "·"+lista[1]+" PZA  (" +selectValue21 + " - "+selectValue22+") " + "(P.unit - S/"+ (l[1]/lista[1]).toFixed(2) +")= S/" + l[1]  +"<br/>";
            document.getElementById('r3').innerHTML = "·"+lista[2]+" PZA  (" +selectValue31 + " - "+selectValue32+") " + "(P.unit - S/"+ (l[2]/lista[2]).toFixed(2) +")= S/" + l[2]  +"<br/>";
            document.getElementById('r4').innerHTML = "·"+lista[3]+" PZA  (" +selectValue41 + " - "+selectValue42+") " + "(P.unit - S/"+ (l[3]/lista[3]).toFixed(2) +")= S/" + l[3]  +"<br/>";
            document.getElementById('r5').innerHTML = "·"+lista[4]+" PZA  (" +selectValue51 + " - "+selectValue52+") " + "(P.unit - S/"+ (l[4]/lista[4]).toFixed(2) +")= S/" + l[4]  +"<br/>";
            document.getElementById('r6').innerHTML = "·"+lista[5]+" PZA  (" +selectValue61 + " - "+selectValue62+") " + "(P.unit - S/"+ (l[5]/lista[5]).toFixed(2) +")= S/" + l[5]  +"<br/>";
            document.getElementById('r7').innerHTML = "·"+lista[6]+" PZA  (" +selectValue71 + " - "+selectValue72+") " + "(P.unit - S/"+ (l[6]/lista[6]).toFixed(2) +")= S/" + l[6]  +"<br/>";
            document.getElementById('r8').innerHTML = "·"+lista[7]+" PZA  (" +selectValue81 + " - "+selectValue82+") " + "(P.unit - S/"+ (l[7]/lista[7]).toFixed(2) +")= S/" + l[7]  +"<br/>";
            document.getElementById('r9').innerHTML = "·"+lista[8]+" PZA  (" +selectValue91 + " - "+selectValue92+") " + "(P.unit - S/"+ (l[8]/lista[8]).toFixed(2) +")= S/" + l[8]  +"<br/>";
            document.getElementById('r10').innerHTML = "·"+lista[9]+" PZA  (" +selectValue101 + " - "+selectValue102+") " + "(P.unit - S/"+ (l[9]/lista[9]).toFixed(2) +")= S/" + l[9]  +"<br/>";
            document.getElementById('r11').innerHTML = "·"+lista[10]+" PZA  (" +selectValue111 + " - "+selectValue112+") " + "(P.unit - S/"+ (l[10]/lista[10]).toFixed(2) +")= S/" + l[10]  +"<br/>";
            document.getElementById('r12').innerHTML = "·"+lista[11]+" PZA  (" +selectValue121 + " - "+selectValue122+") " + "(P.unit - S/"+ (l[11]/lista[11]).toFixed(2) +")= S/" + l[11]  +"<br/>";
            ps = peso[0]+peso[1]+peso[2]+peso[3]+peso[4]+peso[5]+peso[6]+peso[7]+peso[8]+peso[9]+peso[10]+peso[11];
        }
        else if(conta==13){
            document.getElementById('r1').innerHTML = "·"+lista[0]+" PZA  (" +selectValue11 + " - "+selectValue12+") " + "(P.unit - S/"+ (l[0]/lista[0]).toFixed(2) +")= S/" + l[0]  +"<br/>";
            document.getElementById('r2').innerHTML = "·"+lista[1]+" PZA  (" +selectValue21 + " - "+selectValue22+") " + "(P.unit - S/"+ (l[1]/lista[1]).toFixed(2) +")= S/" + l[1]  +"<br/>";
            document.getElementById('r3').innerHTML = "·"+lista[2]+" PZA  (" +selectValue31 + " - "+selectValue32+") " + "(P.unit - S/"+ (l[2]/lista[2]).toFixed(2) +")= S/" + l[2]  +"<br/>";
            document.getElementById('r4').innerHTML = "·"+lista[3]+" PZA  (" +selectValue41 + " - "+selectValue42+") " + "(P.unit - S/"+ (l[3]/lista[3]).toFixed(2) +")= S/" + l[3]  +"<br/>";
            document.getElementById('r5').innerHTML = "·"+lista[4]+" PZA  (" +selectValue51 + " - "+selectValue52+") " + "(P.unit - S/"+ (l[4]/lista[4]).toFixed(2) +")= S/" + l[4]  +"<br/>";
            document.getElementById('r6').innerHTML = "·"+lista[5]+" PZA  (" +selectValue61 + " - "+selectValue62+") " + "(P.unit - S/"+ (l[5]/lista[5]).toFixed(2) +")= S/" + l[5]  +"<br/>";
            document.getElementById('r7').innerHTML = "·"+lista[6]+" PZA  (" +selectValue71 + " - "+selectValue72+") " + "(P.unit - S/"+ (l[6]/lista[6]).toFixed(2) +")= S/" + l[6]  +"<br/>";
            document.getElementById('r8').innerHTML = "·"+lista[7]+" PZA  (" +selectValue81 + " - "+selectValue82+") " + "(P.unit - S/"+ (l[7]/lista[7]).toFixed(2) +")= S/" + l[7]  +"<br/>";
            document.getElementById('r9').innerHTML = "·"+lista[8]+" PZA  (" +selectValue91 + " - "+selectValue92+") " + "(P.unit - S/"+ (l[8]/lista[8]).toFixed(2) +")= S/" + l[8]  +"<br/>";
            document.getElementById('r10').innerHTML = "·"+lista[9]+" PZA  (" +selectValue101 + " - "+selectValue102+") " + "(P.unit - S/"+ (l[9]/lista[9]).toFixed(2) +")= S/" + l[9]  +"<br/>";
            document.getElementById('r11').innerHTML = "·"+lista[10]+" PZA  (" +selectValue111 + " - "+selectValue112+") " + "(P.unit - S/"+ (l[10]/lista[10]).toFixed(2) +")= S/" + l[10]  +"<br/>";
            document.getElementById('r12').innerHTML = "·"+lista[11]+" PZA  (" +selectValue121 + " - "+selectValue122+") " + "(P.unit - S/"+ (l[11]/lista[11]).toFixed(2) +")= S/" + l[11]  +"<br/>";
            ps = peso[0]+peso[1]+peso[2]+peso[3]+peso[4]+peso[5]+peso[6]+peso[7]+peso[8]+peso[9]+peso[10]+peso[11];
        }
        
        else if(conta==14){
            document.getElementById('r1').innerHTML = "·"+lista[0]+" PZA  (" +selectValue11 + " - "+selectValue12+") " + "(P.unit - S/"+ (l[0]/lista[0]).toFixed(2) +")= S/" + l[0]  +"<br/>";
            document.getElementById('r2').innerHTML = "·"+lista[1]+" PZA  (" +selectValue21 + " - "+selectValue22+") " + "(P.unit - S/"+ (l[1]/lista[1]).toFixed(2) +")= S/" + l[1]  +"<br/>";
            document.getElementById('r3').innerHTML = "·"+lista[2]+" PZA  (" +selectValue31 + " - "+selectValue32+") " + "(P.unit - S/"+ (l[2]/lista[2]).toFixed(2) +")= S/" + l[2]  +"<br/>";
            document.getElementById('r4').innerHTML = "·"+lista[3]+" PZA  (" +selectValue41 + " - "+selectValue42+") " + "(P.unit - S/"+ (l[3]/lista[3]).toFixed(2) +")= S/" + l[3]  +"<br/>";
            document.getElementById('r5').innerHTML = "·"+lista[4]+" PZA  (" +selectValue51 + " - "+selectValue52+") " + "(P.unit - S/"+ (l[4]/lista[4]).toFixed(2) +")= S/" + l[4]  +"<br/>";
            document.getElementById('r6').innerHTML = "·"+lista[5]+" PZA  (" +selectValue61 + " - "+selectValue62+") " + "(P.unit - S/"+ (l[5]/lista[5]).toFixed(2) +")= S/" + l[5]  +"<br/>";
            document.getElementById('r7').innerHTML = "·"+lista[6]+" PZA  (" +selectValue71 + " - "+selectValue72+") " + "(P.unit - S/"+ (l[6]/lista[6]).toFixed(2) +")= S/" + l[6]  +"<br/>";
            document.getElementById('r8').innerHTML = "·"+lista[7]+" PZA  (" +selectValue81 + " - "+selectValue82+") " + "(P.unit - S/"+ (l[7]/lista[7]).toFixed(2) +")= S/" + l[7]  +"<br/>";
            document.getElementById('r9').innerHTML = "·"+lista[8]+" PZA  (" +selectValue91 + " - "+selectValue92+") " + "(P.unit - S/"+ (l[8]/lista[8]).toFixed(2) +")= S/" + l[8]  +"<br/>";
            document.getElementById('r10').innerHTML = "·"+lista[9]+" PZA  (" +selectValue101 + " - "+selectValue102+") " + "(P.unit - S/"+ (l[9]/lista[9]).toFixed(2) +")= S/" + l[9]  +"<br/>";
            document.getElementById('r11').innerHTML = "·"+lista[10]+" PZA  (" +selectValue111 + " - "+selectValue112+") " + "(P.unit - S/"+ (l[10]/lista[10]).toFixed(2) +")= S/" + l[10]  +"<br/>";
            document.getElementById('r12').innerHTML = "·"+lista[11]+" PZA  (" +selectValue121 + " - "+selectValue122+") " + "(P.unit - S/"+ (l[11]/lista[11]).toFixed(2) +")= S/" + l[11]  +"<br/>";
            ps = peso[0]+peso[1]+peso[2]+peso[3]+peso[4]+peso[5]+peso[6]+peso[7]+peso[8]+peso[9]+peso[10]+peso[11];
        }
        else if(conta==15){
            document.getElementById('r1').innerHTML = "·"+lista[0]+" PZA  (" +selectValue11 + " - "+selectValue12+") " + "(P.unit - S/"+ (l[0]/lista[0]).toFixed(2) +")= S/" + l[0]  +"<br/>";
            document.getElementById('r2').innerHTML = "·"+lista[1]+" PZA  (" +selectValue21 + " - "+selectValue22+") " + "(P.unit - S/"+ (l[1]/lista[1]).toFixed(2) +")= S/" + l[1]  +"<br/>";
            document.getElementById('r3').innerHTML = "·"+lista[2]+" PZA  (" +selectValue31 + " - "+selectValue32+") " + "(P.unit - S/"+ (l[2]/lista[2]).toFixed(2) +")= S/" + l[2]  +"<br/>";
            document.getElementById('r4').innerHTML = "·"+lista[3]+" PZA  (" +selectValue41 + " - "+selectValue42+") " + "(P.unit - S/"+ (l[3]/lista[3]).toFixed(2) +")= S/" + l[3]  +"<br/>";
            document.getElementById('r5').innerHTML = "·"+lista[4]+" PZA  (" +selectValue51 + " - "+selectValue52+") " + "(P.unit - S/"+ (l[4]/lista[4]).toFixed(2) +")= S/" + l[4]  +"<br/>";
            document.getElementById('r6').innerHTML = "·"+lista[5]+" PZA  (" +selectValue61 + " - "+selectValue62+") " + "(P.unit - S/"+ (l[5]/lista[5]).toFixed(2) +")= S/" + l[5]  +"<br/>";
            document.getElementById('r7').innerHTML = "·"+lista[6]+" PZA  (" +selectValue71 + " - "+selectValue72+") " + "(P.unit - S/"+ (l[6]/lista[6]).toFixed(2) +")= S/" + l[6]  +"<br/>";
            document.getElementById('r8').innerHTML = "·"+lista[7]+" PZA  (" +selectValue81 + " - "+selectValue82+") " + "(P.unit - S/"+ (l[7]/lista[7]).toFixed(2) +")= S/" + l[7]  +"<br/>";
            document.getElementById('r9').innerHTML = "·"+lista[8]+" PZA  (" +selectValue91 + " - "+selectValue92+") " + "(P.unit - S/"+ (l[8]/lista[8]).toFixed(2) +")= S/" + l[8]  +"<br/>";
            document.getElementById('r10').innerHTML = "·"+lista[9]+" PZA  (" +selectValue101 + " - "+selectValue102+") " + "(P.unit - S/"+ (l[9]/lista[9]).toFixed(2) +")= S/" + l[9]  +"<br/>";
            document.getElementById('r11').innerHTML = "·"+lista[10]+" PZA  (" +selectValue111 + " - "+selectValue112+") " + "(P.unit - S/"+ (l[10]/lista[10]).toFixed(2) +")= S/" + l[10]  +"<br/>";
            document.getElementById('r12').innerHTML = "·"+lista[11]+" PZA  (" +selectValue121 + " - "+selectValue122+") " + "(P.unit - S/"+ (l[11]/lista[11]).toFixed(2) +")= S/" + l[11]  +"<br/>";
            ps = peso[0]+peso[1]+peso[2]+peso[3]+peso[4]+peso[5]+peso[6]+peso[7]+peso[8]+peso[9]+peso[10]+peso[11];
        }
        else if(conta==16){
            document.getElementById('r1').innerHTML = "·"+lista[0]+" PZA  (" +selectValue11 + " - "+selectValue12+") " + "(P.unit - S/"+ (l[0]/lista[0]).toFixed(2) +")= S/" + l[0]  +"<br/>";
            document.getElementById('r2').innerHTML = "·"+lista[1]+" PZA  (" +selectValue21 + " - "+selectValue22+") " + "(P.unit - S/"+ (l[1]/lista[1]).toFixed(2) +")= S/" + l[1]  +"<br/>";
            document.getElementById('r3').innerHTML = "·"+lista[2]+" PZA  (" +selectValue31 + " - "+selectValue32+") " + "(P.unit - S/"+ (l[2]/lista[2]).toFixed(2) +")= S/" + l[2]  +"<br/>";
            document.getElementById('r4').innerHTML = "·"+lista[3]+" PZA  (" +selectValue41 + " - "+selectValue42+") " + "(P.unit - S/"+ (l[3]/lista[3]).toFixed(2) +")= S/" + l[3]  +"<br/>";
            document.getElementById('r5').innerHTML = "·"+lista[4]+" PZA  (" +selectValue51 + " - "+selectValue52+") " + "(P.unit - S/"+ (l[4]/lista[4]).toFixed(2) +")= S/" + l[4]  +"<br/>";
            document.getElementById('r6').innerHTML = "·"+lista[5]+" PZA  (" +selectValue61 + " - "+selectValue62+") " + "(P.unit - S/"+ (l[5]/lista[5]).toFixed(2) +")= S/" + l[5]  +"<br/>";
            document.getElementById('r7').innerHTML = "·"+lista[6]+" PZA  (" +selectValue71 + " - "+selectValue72+") " + "(P.unit - S/"+ (l[6]/lista[6]).toFixed(2) +")= S/" + l[6]  +"<br/>";
            document.getElementById('r8').innerHTML = "·"+lista[7]+" PZA  (" +selectValue81 + " - "+selectValue82+") " + "(P.unit - S/"+ (l[7]/lista[7]).toFixed(2) +")= S/" + l[7]  +"<br/>";
            document.getElementById('r9').innerHTML = "·"+lista[8]+" PZA  (" +selectValue91 + " - "+selectValue92+") " + "(P.unit - S/"+ (l[8]/lista[8]).toFixed(2) +")= S/" + l[8]  +"<br/>";
            document.getElementById('r10').innerHTML = "·"+lista[9]+" PZA  (" +selectValue101 + " - "+selectValue102+") " + "(P.unit - S/"+ (l[9]/lista[9]).toFixed(2) +")= S/" + l[9]  +"<br/>";
            document.getElementById('r11').innerHTML = "·"+lista[10]+" PZA  (" +selectValue111 + " - "+selectValue112+") " + "(P.unit - S/"+ (l[10]/lista[10]).toFixed(2) +")= S/" + l[10]  +"<br/>";
            document.getElementById('r12').innerHTML = "·"+lista[11]+" PZA  (" +selectValue121 + " - "+selectValue122+") " + "(P.unit - S/"+ (l[11]/lista[11]).toFixed(2) +")= S/" + l[11]  +"<br/>";
            ps = peso[0]+peso[1]+peso[2]+peso[3]+peso[4]+peso[5]+peso[6]+peso[7]+peso[8]+peso[9]+peso[10]+peso[11];
        }
    }
    document.getElementById('peso').innerHTML = "PESO TOTAL: "+ ps.toFixed(2)+ " Kg";
}
    
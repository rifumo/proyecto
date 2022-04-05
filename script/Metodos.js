/* add by oskar gelves*/

var strOpera = 5;
function btnsuma(){   
    var oper = document.getElementById("operac");
    oper.innerHTML = "Suma";
	strOpera = 0;	
}

function btnmultiplica() {
    var oper = document.getElementById("operac");
    oper.innerHTML = "Multiplicaci&oacute;n";
    strOpera = 2;
}

function btnresta() {
    var oper = document.getElementById("operac");
    oper.innerHTML = "Resta";
    strOpera = 3;
}
function btndivide(){
    var oper = document.getElementById("operac");
		oper.innerHTML= "Divisi&oacute;n";
        strOpera = 1;
}

function computa(){
    var index =0;
   
    var formC = document.formComputa;
    var n1 = formC.num1.value;
    var n2 = formC.num2.value;
   
    if (strOpera.valueOf() == Number(0)) {
        index = Number(n1) + Number(n2); 
       alert("la suma de los numeros es " +index);
    }
    if (strOpera.valueOf() == Number(1)) {
        if (n2.valueOf() > Number(0)) {
            index = Number(n1) / Number(n2);
            alert("la division de los numeros es " +index);
        } else {
            alert("No se Puede Dividir por CERO!")  ;
        }
       
    }

    if (strOpera.valueOf() == Number(2)) {
        index = Number(n1) * Number(n2);
        alert("la multiplicacion de los numeros es " +index);
    }

    if (strOpera.valueOf() == Number(3)) {
        index = Number(n1) - Number(n2);
        alert("la resta de los numeros es " +index) ;
    }

  

}
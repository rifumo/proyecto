/* add by oskar gelves*/
const form = document.getElementById('formComputa')
form.addEventListener('submit', (e)=> e.preventDefault())

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
        swal({
            title: `La suma de ${n1} + ${n2} = ${index}`,
            icon: 'success',           
        }).then(()=>{ 
            form.reset()
        })
    }
    if (strOpera.valueOf() == Number(1)) {
        if (n2.valueOf() > Number(0)) {
            index = Number(n1) / Number(n2);
            swal({
                title: `La division de ${n1} / ${n2} =  ${index}`,
                icon: 'success',           
            }).then(()=>{ 
                form.reset()
            })
        } else {
            swal({
                title: `No se Puede Dividir por CERO!`,
                icon: 'error',
            }).then(()=>{ 
                form.reset()
            })
        }
       
    }

    if (strOpera.valueOf() == Number(2)) {
        index = Number(n1) * Number(n2);
        swal({
            title: `La multiplicacion de de ${n1} * ${n2} =  ${index}`,
            icon: 'success',           
        }).then(()=>{ 
            form.reset()
        })
    }

    if (strOpera.valueOf() == Number(3)) {
        index = Number(n1) - Number(n2);
        swal({
            title: `La resta de de ${n1} - ${n2} =  ${index}`,
            icon: 'success',           
        }).then(()=>{ 
            form.reset()
        })
    }

  

}
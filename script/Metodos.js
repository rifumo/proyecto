/* add by oskar gelves*/
const form = document.getElementById('formComputa')
form.addEventListener('submit', (e)=> e.preventDefault())


const BaseDatos = class {

    constructor(Numero1,Operacion,Numero2,Resultado) {
        this.numero1 =  Numero1;
        this.numero2 = Numero2;
        this.operacion = Operacion; 
        this.resultado = Resultado; 
    }

    num1_GET() {
        return  this.numero1;
    }

    num2_GET() {
        return  this.numero2;
    }

    oper_GET() {
        return  this.operacion;
    }

    res_GET() {
        return  this.resultado;
    }  

    show(){
        return new String();
    }

}
var strOpera = 5;

function MemOpera(){
    var softMemory = document.getElementById("Memory");   
    softMemory.innerHTML = localStorage.getItem("RAM");
}
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
	let Data = new BaseDatos(n1,"+",n2,index);
    localStorage.setItem("RAM", JSON.stringify(Data));
    imprimir();
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
	    let Data = new BaseDatos(n1,"/",n2,index);
        localStorage.setItem("RAM", JSON.stringify(Data));
        imprimir();
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
	let Data = new BaseDatos(n1,"*",n2,index);
    localStorage.setItem("RAM", JSON.stringify(Data));
    imprimir();
        swal({
            title: `La multiplicacion de ${n1} * ${n2} =  ${index}`,
            icon: 'success',           
        }).then(()=>{ 
            form.reset()
        })
    }

    if (strOpera.valueOf() == Number(3)) {
        index = Number(n1) - Number(n2);
	let Data = new BaseDatos(n1,"-",n2,index);
    localStorage.setItem("RAM", JSON.stringify(Data));
    imprimir();
        swal({
            title: `La resta de ${n1} - ${n2} =  ${index}`,
            icon: 'success',           
        }).then(()=>{ 
            form.reset()
        })
    }

  

}

function imprimir() {
    let softMemory = document.getElementById("Memory");
    let view = JSON.parse(localStorage.getItem("RAM"));
  softMemory.innerHTML += `${view.numero1} ${view.operacion} ${view.numero2} = ${view.resultado} \n`;
  }
  
  function borrar() {
    let softMemory = document.getElementById("Memory");
    softMemory.innerHTML = "";
    localStorage.removeItem("RAM");
  }

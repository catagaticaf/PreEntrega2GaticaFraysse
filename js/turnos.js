//ALTA BAJA Y MODIFICACION DE CLIENTES

class Paciente {
    constructor (nombre, apellido, dni, obrasocial){
        this.nombre =  nombre;
        this.apellido = apellido;
        this.dni = dni;
        this.obrasocial = obrasocial;
    }
}

const paciente1 = new Paciente ("Juan", "Perez", 17887908, "IOMA");
const paciente2 = new Paciente ("Alberto", "Fernandez", 28954367, "osde");
const paciente3 = new Paciente ("Rosario", "Aguado", 39076545, "IOMA");
const paciente4 = new Paciente ("Agustina", "Lobianco", 37788034, "Swiss Medical");

const arrayPacientes = [];

arrayPacientes.push(paciente1);
arrayPacientes.push(paciente2);
arrayPacientes.push(paciente3);
arrayPacientes.push(paciente4);

console.log(arrayPacientes);

//Menú de opciones 

function menu(){
    alert("Bienvenido a Nutriplus+!")
    let opcion = parseInt(prompt("Ingrese una opción:\n 1) alta de paciente\n 2)baja de paciente\n 3)modificacion de paciente\n 4)salir"))
    return opcion;
}

//Alta de paciente

function altaPaciente(){
    let nombre = prompt("Ingrese nombre del paciente");
    let apellido = prompt("Ingrese su apellido");
    let dni = prompt ("Ingrese dni");
    let obrasocial = prompt("Ingrese cobertura médica");
    let paciente = new Paciente(nombre, apellido, dni, obrasocial);
    arrayPacientes.push(paciente);
    console.log(arrayPacientes);
}

//Baja paciente

function bajaPaciente(){
    let dni = parseInt(prompt("ingrese numero de dni"))
    let paciente = arrayPacientes.find (paciente => Paciente.dni === dni);
    let indice = arrayPacientes.indexOf(paciente);
    arrayPacientes.splice(indice, 1);
    console.log(arrayPacientes);
}
//Modificación paciente

function modificacionPaciente(){
    let dni = parseInt(prompt("Ingrese número de dni: "));
    let paciente = arrayPacientes.find (paciente => paciente.dni === dni);
    let indice = arrayPacientes.indexOf (paciente);
    let nombre = prompt("Ingrese el nuevo nombre: ");
    let apellido = prompt("Ingrese el nuevo apellido: ");
    let obrasocial = prompt("Ingrese cobertura médica correspondiente: ");
    let pacienteModificado = new Paciente (nombre, apellido, dni, obrasocial);
    arrayPacientes.splice (indice, 1, pacienteModificado);
    console.log(arrayPacientes);
}

function salir(){
    alert("Gracias por utilizar nuestra plataforma");
}

let opcion = menu();
switch (opcion){
    case 1:
    altaPaciente();
    break;
    case 2:
    bajaPaciente();
    break;
    case 3:
    modificacionPaciente();
    break
    case 4: 
    salir();
    break;
}
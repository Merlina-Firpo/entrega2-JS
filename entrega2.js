function turno(nombre, apellido, dni, obraSocial){
    nombre = prompt (' Ingrese su nombre')
    apellido = prompt ('Ingrese su apellido')
    dni = prompt ('Ingrese su DNI')
    obraSocial = prompt ('Ingrese su Obra Social')
    alert('Sus datos ingresados son:' + ' ' + nombre + ', ' + apellido + ', ' + dni + ',' + obraSocial)
}

const turnoNuevo = new turno ("nombre", "apellido", "dni", "obraSocial")
console.log (turnoNuevo)

//for(const nombre in turno)
//console.log (turno[nombre])

const arrayDeMedicos=['Dr Perez', 'Dr Gomez', 'Dra Garcia', 'Dra Lopez', 'Dra Nunez']
const arrayDeEspecialidad=['Ginecologia', 'Urologia', 'Infectologia', 'Pediatria', 'Oftalmologia']
const arrayDeDias=['Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes']


for (let i=0; i>4; i++){
    arrayDeMedicos[i]
}

if(arrayDeMedicos[i]==='Dr Perez'){
    alert('Turno con el Dr Perez'+ i)
    }
    
    arrayDeMedicos.concat(arrayDeEspecialidad)(prompt('Cartilla Medicos y sus especialidades'))
        console.log(arrayDeMedicos)
    

function medicos(){
    for ('Dr Perez' of arrayDeMedicos)
    console.log('Infectologia')
}

function seleccionMedico(op){
    if(op="Dr Perez"){
        return(Disponible 'Lunes' y 'Miercoles')
    }else if (op="Dr Gomez"){
        return(Disponible Martes y Miercoles)
    }else if (op="Dra Garcia"){
        return(Disponible Jueves y Viernes)
    }else if (op="Dra Lopez"){
        return(Disponible Miercoles)
    }else if (op="Dra Nunez"){
        return(Disponible Martes y Viernes)
    }
    }
let seleccionado= asignar("Dr Perez")
let seleccionado = asignar("Dr Gomez")
let seleccionado = asignar("Dra Garcia")
let seleccionado = asignar("Dra Lopez")
let seleccionado = asignar("Dra Nunez")

console.log (seleccionado("Dr Perez","Dr Gomez","Dra Garcia","Dra Lopez","Dra Nunez"))
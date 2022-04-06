

const todolist = [];

function menu() {
    alert("MENU:\n 1- Agregar tarea\n 2- Ver tareas\n 3- Completar tarea\n 4- Eliminar tarea\n 5- Salir")
}

function main() {
    console.log("BIENVENIDO")
    let op = -1
    while (op !== 5) {
        menu();
        op = parseInt(prompt("OPCION:"))
        switch (op) {
            case 1:
                agregarTarea();
                break;
            case 2:
                verTareas();
                break;
        }
    }

    console.log("GRACIAS POR UTILIZAR EL PROGRAMA")
}

function agregarTarea() {
    let newTarea = prompt("Ingrese tarea")
    let newFecha = prompt("Ingrese vencimiento")

    const tarea = new Task(newTarea, newFecha)

    todolist.push(tarea);
}

function verTareas() {
    todolist.forEach(value => {
        value.mostrate();
    });
}


/* CLASES */
class Task {
    constructor(tarea, fecha) {
        this.tarea = tarea;
        this.fecha = fecha;
    }

    mostrate() {
        alert('tarea: ' + this.tarea+ '\n vencimiento ' + this.fecha )
        console.log('fecha: ', this.fecha)
    }
}


main()
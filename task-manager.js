
const readline = require('readline');
const createTask = require('./createTask');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let taskList = [];

function viewMenu() {
  console.log(`
************ Task Manager ***************
1. Crear tarea 
2. Listar tareas
3. Marcar tarea completada
4. Eliminar tarea
5. Salir
*****************************************
`);
}

function salir() {
  console.log('👋 Saliendo del Task Manager. ¡Hasta pronto!');
  rl.close();
}

function options(opcion) {
  switch (opcion.trim()) {
    case '1':
        rl.question('Ingrese la descripción de la tarea: ', (taskDescription) => {
            createTask(taskList, taskDescription);
            viewOptions();
          });
      break;
    case '2':
      
      break;
    case '3':
      
      break;
    case '4':
      
      break;
    case '5':
      salir();
      break;
    default:
      console.log('❌ Opción inválida. Intente de nuevo.\n');
      viewOptions();
      break;
  }
}

function viewOptions() {
  viewMenu();
  rl.question('Seleccione una opción: ', options);
}

// Inicio del programa
viewOptions();

const readline = require('readline');
const createTask = require('./createTask');
const listAllTasks = require('./listAllTasks');
const markTaskAsCompleted = require('./markTaskAsCompleted');
const deleteTask = require('./deleteTask');

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
-----------------------------------------
----------- version 1.0.0 ---------------
*****************************************
`);
}

function exit() {
  console.log('👋 Saliendo del Task Manager. ¡Hasta pronto!\n');
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
            listAllTasks(taskList);
            viewOptions();
      break;
    case '3':
        rl.question('Ingrese el ID de la tarea a completar: ', (taskIdInput) => {
            const taskId = parseInt(taskIdInput);
            markTaskAsCompleted(taskList, taskId);
            viewOptions();
          });
      break;
    case '4':
        rl.question('Ingrese el ID de la tarea a eliminar: ', (taskIdInput) => {
            const taskId = parseInt(taskIdInput);
            deleteTask(taskList, taskId);
            viewOptions();
          });
      break;
    case '5':
      exit();
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

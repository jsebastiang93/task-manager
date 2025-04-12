function listAllTasks() {
    if (tasks.length === 0) {
      console.log('📭 No hay tareas para mostrar.\n');
      return;
    }
  
    console.log('\n📋 Todas las Tareas:');
    tasks.forEach((tarea, index) => {
      console.log(`${index + 1}. ${tarea.descripcion}`);
    });
    console.log('');
  }
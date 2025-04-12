function listAllTasks(taskList) {
  if (taskList.length === 0) {
    console.log('📭 No hay tareas registradas.\n');
    return;
  }

  console.log('\n📋 Lista de Tareas:\n');
  taskList.forEach((task, index) => {
    const status = task.completed ? '✅ Completada' : '🕓 Pendiente';
    console.log(`${index + 1}. [${status}] ${task.description} (ID: ${task.id})`);
  });
  console.log(); // Línea en blanco al final
}

module.exports = listAllTasks;
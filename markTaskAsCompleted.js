function markTaskAsCompleted(taskList, taskId) {
  let found = false;

  for (let task of taskList) {
    if (task.id === taskId) {
      task.completed = true;
      console.log(`✅ Tarea "${task.description}" marcada como completada!\n`);
      found = true;
      return task;
    }
  }

  if (!found) {
    console.log('❌ Tarea no encontrada.\n');
    return "Task not found";
  }
}

module.exports = markTaskAsCompleted;


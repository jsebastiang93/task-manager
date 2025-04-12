function deleteTask(taskList, taskId) {
  for (let index = 0; index < taskList.length; index++) {
    if (taskList[index].id === taskId) {
      const removedTask = taskList[index];
      taskList.splice(index, 1);
      console.log("\n🗑️ Tarea eliminada correctamente:");
      console.log(`${removedTask.id} - ${removedTask.description} - ${removedTask.completed}\n`);
      return;
    }
  }

  console.log(`\n❌ No se encontró una tarea con el ID ${taskId}.\n`);
}

module.exports = deleteTask;
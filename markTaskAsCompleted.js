function markTaskAsCompleted(taskList, taskId) {
  let found = false;

  for (let task of taskList) {
    if (task.id === taskId) {
      task.completed = true;
      console.log(`✅ Task "${task.title}" marked as completed!\n`);
      found = true;
      return task;
    }
  }

  if (!found) {
    console.log('❌ Task not found.\n');
    return "Task not found";
  }
}

module.exports = markTaskAsCompleted;


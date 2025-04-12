let currentId = 1;
  
function createTask(taskList, taskDescription) {
    const newTask = {
      id: currentId++,
      description: taskDescription,
      completed: false,
    };
  
    taskList.push(newTask);
    console.log('\n✅ Tarea creada correctamente.\n');
    console.log(`${newTask.id} - ${newTask.description} - Completada: ${newTask.completed}`);
    return newTask;
  }

  module.exports = createTask;
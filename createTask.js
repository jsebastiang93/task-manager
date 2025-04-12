function generateUniqueId() {
    return Math.random().toString(36).substr(2, 9);
  }
  
function createTask(taskList, taskDescription) {
    const newTask = {
      id: generateUniqueId(),
      description: taskDescription,
      completed: false,
    };
  
    taskList.push(newTask);
    console.log('✅ Tarea creada correctamente.\n');
    return newTask;
  }

  module.exports = createTask;
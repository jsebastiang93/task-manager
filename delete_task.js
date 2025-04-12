// taskFunctions.js

function deleteTask(taskList, taskId) {
  for (let index = 0; index < taskList.length; index++) {
    if (taskList[index].id === taskId) {
      taskList.splice(index, 1);
      return "Task deleted";
    }
  }
  return "Task not found";
}


module.exports = {
  deleteTask
};
class TaskList{
    constructor(){
        this.taskes = {}
        this.count = 0
    }

    addTask(task){
        this.taskes[task.id] = task;
        return ++this.count;
    }

    deleteTask(id){
        const deletedTask = this.taskes[id];
        delete this.taskes[id];
        this.count -= 1;
        return deletedTask;
    }

    emptyList(){
        this.taskes = {}
        this.count = 0
    }

    updateTask(id,name,dueDate,description,isUrgent){
        this.taskes[id].name = name
        this.taskes[id].dueDate = dueDate
        this.taskes[id].description = description
        this.taskes[id].isUrgent = isUrgent
    }
}

module.exports = TaskList
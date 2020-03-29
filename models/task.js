class Task{
    constructor(name,dueDate,description,isUrgent,isComplete){
        this.id = ++ Task.count
        this.name = name
        this.dueDate = dueDate
        this.description = description
        this.isUrgent = isUrgent
        this.isComplete = isComplete
    }
}
Task.count = 0
module.exports = Task


import React from "react";
import Task from "./Task";

const Tasks = ({tasks, handle_task_click, handle_task_deletion}) => {
    return (
        <>
        {tasks.map((task) => {
            return <Task 
            key={task.id}
            task={task} 
            handle_task_click={handle_task_click} 
            handle_task_deletion={handle_task_deletion}/>
        })}
        </>
    )
}


export default Tasks
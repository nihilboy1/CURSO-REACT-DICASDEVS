import React from 'react';
import "./Task.css"
import {CgClose, CgInfo} from "react-icons/cg"
import {useHistory} from "react-router-dom"


const Task = ({task, handle_task_click, handle_task_deletion}) => {
    const history = useHistory()

    const handle_task_details_click = () => {
      history.push(`/${task.title}`)
    }

    return (
        <div className='task-container'
             style={task.completed ? {borderLeft: "6px solid chartreuse"} : {}}
             >
            <div className='task-title'
                 onClick={() => handle_task_click(task.id)}>
                {task.title}
            </div>
            <div className='buttons-container'>
                <button className='remove-task-button' onClick={() => {handle_task_deletion(task.id)}}>
                    <CgClose/>
                </button>
                <button className='info-task-button' onClick={handle_task_details_click}>
                    <CgInfo/>
                </button>
            </div>
        </div>
    )
}
 
export default Task;
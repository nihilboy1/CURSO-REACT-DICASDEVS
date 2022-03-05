import React, {useState} from 'react';
import "./AddTask.css"
import Button from './Button';


const AddTask = ({handle_task_addition}) => {
    const [input_data, set_input_data] = useState("")

    const handle_input_change = (e) => {
        set_input_data(e.target.value)
    }

    const handle_add_task_click = () => {
        handle_task_addition(input_data)
    }
    return ( 
        <div className='add-task-container'>
            <input 
            onChange={handle_input_change} 
            type="text" 
            className='add-task-input'
            value={input_data}/>
            <div className='add-task-button-container'>
            <Button adicionar={handle_add_task_click}>Adicionar</Button>
            </div>


            
        </div>
    );
}
 
export default AddTask;
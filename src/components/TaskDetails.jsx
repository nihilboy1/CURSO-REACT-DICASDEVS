import React, { Fragment } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import Button from './Button';
import "./TaskDetails.css"

const TaskDetails = () => {
    const params = useParams()
    const history = useHistory()

    const handle_back_button_click = () => {
        history.goBack()
    }
    return ( 
        <>
        <div className='back-button-container' onClick={handle_back_button_click}>
            <Button>Voltar</Button>
        </div>
        <div className='task-details-container'>
            <h2>{params.TaskTitle}</h2>
            <p>
            lorem, loremlorem, loremlorem, loremlorem, loremlorem, loremlorem, loremlorem, loremlorem, loremlorem, loremlorem, loremlorem, loremlorem, lorem
            </p>
        </div>
        </>
     );
}
 
export default TaskDetails;
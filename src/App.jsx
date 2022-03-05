import React, {useState, useEffect} from "react";
import {v4 as uuidv4} from "uuid"
import {BrowserRouter as Router, Route} from "react-router-dom"
import axios from "axios";

import AddTask from "./components/AddTask";
import Tasks from "./components/Tasks";
import Header from "./components/Header";
import TaskDetails from "./components/TaskDetails"

import "./App.css"

const App = () => {
    const [tasks, set_tasks] = useState([
      {
        id: "1",
        title: "Estudar programação",
        completed: false
      },
      {
        id:"2",
        title: "Ler Machado de Assis",
        completed: false
      },
      {
        id:"3",
        title: "Ler Carlos Drummond",
        completed: true
      }
    ])

    useEffect(() => {
        const fetch_tasks = async () => {
            const {data} = await axios.get("https://jsonplaceholder.cypress.io/todos?_limit=10")
          set_tasks(data)
        }
        fetch_tasks()
    }, [])
      
    
    const handle_task_click = (task_id) => {
        const new_tasks = tasks.map((task) => {
            if (task.id === task_id) {return {...task, completed: !task.completed}}
            return task
        })
        set_tasks(new_tasks)
    }

    const handle_task_addition = (task_title) => {
        const new_tasks = [...tasks, {
            title : task_title,
            id: uuidv4(),
            completed: false 
        }]
        set_tasks(new_tasks)
    }

    const handle_task_deletion = (task_id) => {
        const new_tasks = tasks.filter((task) => {
            return task.id !== task_id
        })
        set_tasks(new_tasks)
    } 



    return (
    <Router>
      <div className="container">
        <Header />
        <Route path="/" exact render={() => (
          <>
            <AddTask handle_task_addition={handle_task_addition}/>
            <Tasks tasks={tasks} handle_task_click={handle_task_click} handle_task_deletion={handle_task_deletion}/>
          </>
        )}/>
        <Route path="/:TaskTitle" exact component={TaskDetails} />
      </div>
    </Router>
    )
}



export default App
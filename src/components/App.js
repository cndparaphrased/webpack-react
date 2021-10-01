import { useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "../styles/index.scss";
import Header from "./Header";
import Tasks from "./Tasks";
import AddTask from "./AddTask";
import Footer from "./Footer";
import About from "./About";

const App = () => {
  const [showAddTask, setShowAddTask] = useState(false)
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "Doctor's Appointment",
      day: "Feb 5th at 2:30pm",
      reminder: true,
    },
    {
      id: 2,
      text: "Meeting",
      day: "Feb 6th at 1:30pm",
      reminder: true,
    },
    {
      id: 3,
      text: "Groceries",
      day: "Feb 5th at 2:30pm",
      reminder: false,
    },
  ])

  //Add Task
  const addTask = (task) => {
    const id = Math.floor(Math.random() * 10000) + 1
    const newTask = { id, ...task };

    setTasks([...tasks, newTask])
  }

  // Delete Task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }

  // Toggle Reminder 
  const toggleReminder = (id) => {
    setTasks(tasks.map((task) => task.id === id ? { ...task, reminder: !task.reminder } : task))
  }

  return (
    <Router>
      <div className="container">
        <Header 
          title='Task Tracker' 
          onAdd={() => setShowAddTask(!showAddTask)} 
          showAdd={showAddTask} />

          <Route 
            path='/' 
            exact 
            render={(props) => (
              <>
                {showAddTask && <AddTask onAdd={addTask} />}

                {tasks.length > 0 ? (
                  <Tasks
                    tasks={tasks}
                    onDelete={deleteTask}
                    onToggle={toggleReminder}
                  />
                ) : (
                  'No Tasks to Show'
                )}
              </>
          )} />

          <Route path='/about' component={About} />
          <Footer /> 
      </div>
    </Router>
  )
}

export default App; 
import './App.css'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"
import { Home } from "./Pages/Home"
import { ToDoList } from "./Pages/toDoList"
import { Notes } from "./Pages/Notes"

export default function App() {
  return (
    <div>
      <Router>
        <nav className="navbar nav-menu" id="navbar">
          <span class="navbar-brand" >MAGMA</span>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/Notes">Notes</Link></li>
            <li><Link to="/ToDoList">To Do</Link></li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Notes" element={<Notes />} />
          <Route path="/ToDoList" element={<ToDoList />} />
        </Routes>
      </Router>
    </div>
  )
}

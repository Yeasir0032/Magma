import './App.css'
import {BrowserRouter as Router,Routes,Route,Link} from "react-router-dom"
import {Home} from "./Pages/Home"
import {Notes} from "./Pages/Notes"

export default function App() {
  return (
    <div>
      <Router>
        <nav className="navbar nav-menu" id="navbar">
          <ul>
            <li><Link to="/">Home</Link></li>
             <li><Link to="/Notes">Notes</Link></li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/Notes" element={<Notes/>}/>
        </Routes>
      </Router>
    </div>
  )
}

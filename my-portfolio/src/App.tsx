import { Route, BrowserRouter as Router, Routes } from "react-router-dom"
import Header from "./components/Header"
import Home from "./pages/Home"

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
        <Header/>
        <Routes>
          <Route path="/" element={ <Home/> }></Route>
        </Routes>
      </div>
    </Router>
  )
}

export default App
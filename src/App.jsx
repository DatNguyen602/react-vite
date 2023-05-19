import './App.css';
import Home from './pages/Home';
import {Routes,Route} from "react-router-dom";
import Login from "./Components/Content/Login";
import CreateAcount from "./Components/Content/CreateAcount";

function App() {
  return (<div>
    <Routes>
      <Route path="/" element={<Home/>}>
          <Route index element={<Login/>}/>
          <Route path='createAcount' element={<CreateAcount/>}/>
      </Route>
    </Routes>
  </div>
  )
}

export default App

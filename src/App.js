import './App.css';
import "./vendors/bootstrap/css/bootswatch.bootstrap.min.css"
import './vendors/fontawesome-5.15.4/css/all.min.css';
import './style.css'
import HelloWorld from "./components/HelloWorld";
import Labs from "./Labs";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import ExploreScreen from "./components/Tuiter/ExploreScreen";
import HomeScreen from "./components/Tuiter/HomeScreen";
import Tuiter from "./components/Tuiter";

function App() {
  return (
      <BrowserRouter>
          <div className="container">
              <Routes>
                  <Route path="/hello" element={<HelloWorld/>} exact={true}/>
                  <Route path="/labs" element={<Labs/>} exact={true}/>
                  <Route path="/" element={<Labs/>}/>
                  <Route path="/tuiter" element={<Tuiter/>} exact={true}/>
                  <Route path="/tuiter/home" element={<HomeScreen/>} exact={true}/>
                  <Route path="/tuiter/explore" element={<ExploreScreen/>} exact={true}/>
              </Routes>
          </div>
      </BrowserRouter>
  );
}

export default App;

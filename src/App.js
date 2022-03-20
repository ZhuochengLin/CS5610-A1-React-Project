import './App.css';
import "./vendors/bootstrap/css/bootstrap.min.css";
import "./vendors/bootstrap/css/bootstrap.min.css"
import './vendors/fontawesome-5.15.4/css/all.min.css';
import './style.css'
import HelloWorld from "./components/HelloWorld";
import Labs from "./Labs";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import ExploreScreen from "./components/Tuiter/ExploreScreen";
import HomeScreen from "./components/Tuiter/HomeScreen";
import Tuiter from "./components/Tuiter";
import ProfileScreen from "./components/Tuiter/ProfileScreen";

function App() {
  return (
      <BrowserRouter>
          <div className="container">
              <Routes>
                  <Route path="/" >
                      <Route index element={<HelloWorld/>}/>
                      <Route path="hello" element={<HelloWorld/>}/>
                      <Route path="labs" element={<Labs/>}/>
                      <Route path="tuiter" element={<Tuiter/>}>
                          <Route index element={<HomeScreen/>}/>
                          <Route path="explore" element={<ExploreScreen/>}/>
                          <Route path="profile" element={<ProfileScreen/>}/>
                          {/*<Route path="notifications" element={}/>*/}
                      </Route>
                  </Route>
              </Routes>
          </div>
      </BrowserRouter>
  );
}

export default App;

import { useContext } from "react";
import  "./app.scss"
import Home from "./pages/home/Home"
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Latest from "./pages/latest/Latest";
import Watch from "./pages/watch/Watch";
import { BrowserRouter as Router,Redirect,Route,Switch } from 'react-router-dom'
import { AuthContext } from "./authContext/AuthContext";


const App = () => {
  const {user} = useContext(AuthContext);

  return (
    <Router>
      <Switch>
         <>
        {/* <Route exact path="/"><Home/>  </Route>
        <Route  path="/register">  <Register/>  </Route>
        <Route  path="/login"> <Login/>  </Route>
        <Route  path="/movies"> <Home type="movie"/> </Route>
        <Route  path="/series"> <Home type="series"/> </Route>
        <Route  path="/watch"> <Watch/> </Route>
        <Route  path="/latest"> <Latest/> </Route> */}
        </>
      
        <Route exact path="/"> {user ? <Home/> : <Redirect to="/register"/>}  </Route>
        <Route  path="/register">  {!user ? <Register/> : <Redirect to="/"/>   }  </Route>
        <Route  path="/login"> {!user ?  <Login/> : <Redirect to="/"/> }   </Route>
         {user && (
         <>
        <Route  path="/movies"> <Home type="movie"/> </Route>
        <Route  path="/series"> <Home type="series"/> </Route>
        <Route  path="/watch"> <Watch/> </Route>
        <Route  path="/latest"> <Latest/> </Route>
        </>
         )} 
      </Switch>
    </Router>
  );
};

export default App;
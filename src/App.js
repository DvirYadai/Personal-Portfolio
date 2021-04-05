import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./components/Login";
import Profile from "./components/Profile";
import ThemeProvider from "./components/ThemeContext";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Login} />
          <ThemeProvider>
            <Route exact path="/profile" component={Profile} />
          </ThemeProvider>
        </Switch>
      </Router>
    </div>
  );
}

export default App;

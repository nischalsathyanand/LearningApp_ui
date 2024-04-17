import LoginForm from "./components/LoginForm";
import Home from "./components/Home";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import React from "react";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />}></Route>
        <Route path="/login" Component={LoginForm}></Route>
        <Route path="/home" Component={Home}> </Route>
      </Routes>
    </Router>
  );
}

export default App;
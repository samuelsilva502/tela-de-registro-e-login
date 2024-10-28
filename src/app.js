import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import AuthPage from "./pages/AuthPage/AuthPage";
import { TodoWrapper } from "./features/todo/TodoWrapper";

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/auth" element={<AuthPage />} />
          <Route path="/home" element={<TodoWrapper />} />
          <Route path="/" element={<Navigate to="/auth" />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

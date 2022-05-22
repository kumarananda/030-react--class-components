import "./App.css";
import { Route, Routes } from "react-router-dom";
import Student from "./components/Student";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Student />} />
      </Routes>
    </>
  );
}

export default App;

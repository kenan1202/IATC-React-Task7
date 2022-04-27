import { Routes, Route } from "react-router-dom";
import './App.css';
import List from './components/List';
import EditItem from "./components/EditItem";

function App() {
  return (
    <div className="App">

      <Routes>
        <Route path = '/' element = {<List></List>}></Route>
        <Route path = 'items/:id' element = {<EditItem></EditItem>}></Route>
      </Routes>

    </div>
  );
}

export default App;

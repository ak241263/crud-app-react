import { NavBar } from './components/NavBar';
import { AllUsers } from './components/AllUsers';
import { AddUsers } from './components/AddUsers';
import { NotFound } from './components/NotFound';
import { EditUser } from './components/EditUser';
 import{ BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
function App() {
  return (
    <>
      <Router>
      <NavBar/>
        <Routes>
        <Route exact path="/" element={<AllUsers/>}/>
        <Route exact path="/all" element={<AllUsers/>}/>
        <Route exact path="/add" element={<AddUsers/>}/>
        <Route exact path="/edit/:id" element={<EditUser/>}/>
        <Route path="*" element={<NotFound/>}/>
        </Routes>
        

      </Router>

    </>
  );
}

export default App;

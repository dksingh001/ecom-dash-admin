import "./App.css";
import Login from "./Components/auth/login";
import Dashboard from "./Components/Dashboard/Dashboard";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AddP from "./Components/pages/AddP";
import UpdateP from "./Components/pages/UpdateP";
import Header from "./Components/pages/Header";
import AllCustmer from "./Components/pages/AllCustmer";
import PrivateRoute from "./Private/PrivateRoute";



const App = () =>{
  return (
    <>
      <BrowserRouter>
        <Routes>

           <Route path="/" element={<Login />} />

          <Route to={PrivateRoute}>  
          <Route path="/dashborad" element={<Dashboard />} />
          <Route path="/Addproduct" element={<AddP />} />
          <Route path="/updateProduct" element={<UpdateP />} />
          <Route path="/custmerslist" element={<AllCustmer />} />
          <Route path="/header" element={<Header />} /> 
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

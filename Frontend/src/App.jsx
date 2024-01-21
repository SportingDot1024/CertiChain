import { useState } from 'react'
import './App.css'
import Navbar from './components/navbar/nav'
import Home from './screens/home/home'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Register from './screens/register/register'
import Login from './screens/login/login'
import Evault, { ValidatePage } from './screens/vault/vault'
import Dashboard from './screens/dashboard/dash'
import LayoutComp from './components/layoutComp/outletComp'
import Editor from './screens/editor/edit'
import Forgot from "./screens/forgot/forgot.jsx";

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" exact element={<LayoutComp />}>
            <Route index element={<Home />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/forgot" element={<Forgot />} />
            <Route path="/vault" element={<Evault />} />
            <Route path="/validate" element={<ValidatePage />} />
          </Route>
          <Route path="/dashboard/:rtParam" element={<Dashboard />} />
          <Route path="/generate" element={<Editor />} />
        </Routes>
      </Router>
    </>
  );
}

export default App

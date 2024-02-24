import React from 'react';
import Register from './pages/Register';
import "./style.scss";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import Home from './pages/Home';

function App() {
  return <div><Register /></div>;
}

export default App;

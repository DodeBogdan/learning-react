import "./App.css";

import UseStateList from "./learning-components/UseStateList";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SharedLayout from "./learning-components/SharedLayout";
import Birthday from "./learning-components/birthday_project/Birthday";
import PTSite from "./learning-components/personal_trainer_site/PTSite";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<UseStateList />}></Route>
          <Route path="birthday" element={<Birthday />}></Route>
          <Route path="chiricea_alexandru" element={<PTSite />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

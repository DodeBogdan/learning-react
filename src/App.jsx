import "./App.css";

import UseStateList from "./learning-components/use_state/UseStateList";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import SharedLayout from "./shared_layout/SharedLayout";
import Birthday from "./learning-components/birthday_project/Birthday";
import PTSite from "./learning-components/personal_trainer_site/PTSite";
import Tours from "./learning-components/tours/Tours";
import Review from "./learning-components/review_project/Review";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<UseStateList />}></Route>
          <Route path="birthday" element={<Birthday />}></Route>
          <Route path="coach" element={<PTSite />}></Route>
          <Route path="tours" element={<Tours />}></Route>
          <Route path="review" element={<Review />}></Route>
        </Route>
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

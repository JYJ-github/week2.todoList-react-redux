import Home from "../pages/Home";
import Work from "../pages/Work";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:id" element={<Work />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;

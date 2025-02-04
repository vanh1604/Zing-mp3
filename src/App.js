import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Bounce, ToastContainer, toast } from "react-toastify";
import { Home, Login, Public } from "./container/public/";
import { Routes, Route } from "react-router-dom";
import path from "./ultis/path";
function App() {
 

  return (
    <>
      <div>
        <Routes>
          <Route path={path.PUBLIC} element={<Public />}>
            <Route path={path.HOME} element={<Home />} />
            <Route path={path.LOGIN} element={<Login />} />
          </Route>
        </Routes>
      </div>
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        transition={Bounce}
      />
    </>
  );
}

export default App;

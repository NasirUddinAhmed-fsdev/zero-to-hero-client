import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import AddAdmin from "./components/pages/Dashboard/AddAdmin";
import AddService from "./components/pages/Dashboard/AddService";
import Dashboard from "./components/pages/Dashboard/Dashboard";
import AdminRoute from "./components/privateAuth/AdminRoute";
import PrivateRoute from "./components/privateAuth/PrivateRoute";
import { clientRoutes } from "./components/routes/ClientRoutes";
import { privateRoutes } from "./components/routes/PrivateRoutes";
import Navbar from "./components/shared/Navbar";

function App() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <Navbar>
        <Routes>
          {clientRoutes.map(({ path, Component }, index) => (
            <Route key={index} path={path} element={<Component />} />
          ))}
          <Route element={<PrivateRoute />}>
            {privateRoutes.map(({ path, Component }, index) => (
              <Route key={index} path={path} element={<Component />} />
            ))}
          </Route>
          <Route element={<AdminRoute />}>
            <Route path="/dashboard" element={<Dashboard />}>
              <Route path="add-admin" element={<AddAdmin />} />
              <Route path="add-service" element={<AddService />} />
            </Route>
          </Route>
        </Routes>
      </Navbar>
    </>
  );
}

export default App;

// {
/* <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} /> */
// }

// {
/* <Route
            path="/services"
            element={
              <PrivateRoute>
                <Services />
              </PrivateRoute>
            }
          /> */
// }

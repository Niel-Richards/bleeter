import React from "react";
// import './css/App.css';
import {
  createBrowserRouter,
  RouterProvider,
  // Route,
} from "react-router-dom";
import Login from "./components/Login"
import Header from "./components/Header";
import Blurb from "./components/Blurb";
import Middle from "./components/Middle";
import ContentContainer from "./components/ContentContainter";
import NewBleet from "./components/NewBleet";
import Register from "./components/Register";

const Layout = ({children}) => {
  return (
    <>
      <Header />
      <div className="stage-shell">
        <div className="stage-main">
          {children}
        </div>
      </div>
    </>
  );
};


const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout><Login /></Layout>,
  },
  {
    path: "/home",
    element: <Layout>
                <Blurb />
                <Middle />
                <ContentContainer />
    </Layout>,
  },
  {
    path: "/bleet",
    element: <Layout><NewBleet /></Layout>,
  },
  {
    path: "/register",
    element: <Layout><Register /></Layout>,
  },
]);

function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;

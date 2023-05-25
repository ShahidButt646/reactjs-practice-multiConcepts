import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import ReduxApp from "./components/ReduxApp";
import ErrorPage from "./components/ErrorPage";
import EffectUnderstanding from "./components/UseEffectWorking";
import Sidebar from "./components/sidebar/SidebarSection";

function App() {
  // root router
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Sidebar />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: "/Redux",
          element: <ReduxApp />,
        },
      ],
    },
  ]);

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;

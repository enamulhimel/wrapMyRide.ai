import App from "@/App";
import Home from "@/pages/Home";

import { createBrowserRouter } from "react-router-dom";

const RootRoutes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {path: "/", element: <Home />}
    ],
  },
]);

export default RootRoutes;

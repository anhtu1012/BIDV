import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/home";
import Layout from "./components/layout";
import Detail from "./pages/detail";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/details",
        element: <Detail />,
      },
    ],
  },
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;

import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Start from "./pages/Start";
import Test from "./pages/test";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/register",
      element: <Register />,
    },
    {
      path: "/start",
      element: <Start />,
    },
    {
      path: "/test",
      element: <Test />,
    },
  ]);

  return <RouterProvider router={router} />;
}
export default App;
